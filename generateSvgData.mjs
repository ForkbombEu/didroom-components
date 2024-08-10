#!/usr/bin/env node

import fs from 'fs-extra';
import glob from 'glob-promise';
import path from 'path';
import svgson from 'svgson';

const processSvgFiles = async variant => {
  const svgFilePaths = await glob(`icons/${variant}/*.svg`);

  const parsedSvgs = await Promise.all(
    svgFilePaths.map(async filePath => {
      const svgContent = await fs.readFile(filePath, 'utf-8');
      const parsedContent = await svgson.parse(svgContent);
      const baseName = path.basename(filePath, '.svg');
      const outputName = variant === 'outline' ? `${baseName}-${variant}` : baseName;

      console.log('Processing:', filePath);

      return { outputName, parsedContent };
    }),
  );

  parsedSvgs.forEach(({ outputName, parsedContent }) => {
    const svgPaths = extractPaths(parsedContent.children);
    const outputFilePath = `src/components/icon/assets/${outputName}.json`;

    fs.ensureDirSync(path.dirname(outputFilePath));
    fs.writeFileSync(outputFilePath, JSON.stringify(svgPaths || 'undefined'), 'utf8');

    console.log('Saved:', outputFilePath);
  });
};

const extractPaths = elements => {
  const paths = elements.filter(element => element.name === 'path');

  if (paths.length > 0) {
    return paths.map(path => ({ ...path.attributes }));
  }

  for (const element of elements) {
    const result = extractPaths(element.children);
    if (result) return result;
  }

  return null;
};

const main = async () => {
  await processSvgFiles('fill');
  await processSvgFiles('outline');
  process.exit(0);
};

main();
