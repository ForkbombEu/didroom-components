#!/usr/bin/env node

import fs from 'fs-extra';
import glob from 'glob-promise';
import path from 'path';
import svgson from 'svgson';

const processSvgFiles = async (type, variant = '') => {
  const variantPath = variant ? `/${variant}` : '';
  const svgFilePaths = await glob(`${type}${variantPath}/*.svg`);
  console.log(`Looking for ${type} files in ${type}${variantPath}/*.svg`);
  console.log(`Found ${svgFilePaths.length} files`);

  const parsedSvgs = await Promise.all(
    svgFilePaths.map(async filePath => {
      const svgContent = await fs.readFile(filePath, 'utf-8');
      const parsedContent = await svgson.parse(svgContent);
      const baseName = path.basename(filePath, '.svg');
      const outputName = variant === 'outline' ? `${baseName}-${variant}` : baseName;
      return { outputName, parsedContent };
    }),
  );

  parsedSvgs.forEach(({ outputName, parsedContent }, index) => {
    let outputData;
    const componentPath = type.slice(0, -1); // Remove the last 's' to form the component name (e.g., 'icons' -> 'icon')
    const outputFilePath = `src/components/${componentPath}/assets/${outputName}.json`;

    if (type === 'illustrations') {
      outputData = parsedContent; // Save the entire parsed JSON for illustrations
    } else {
      const svgPaths = extractPaths(parsedContent.children);
      outputData = svgPaths || 'undefined';
    }

    fs.ensureDirSync(path.dirname(outputFilePath));
    fs.writeFileSync(outputFilePath, JSON.stringify(outputData), 'utf8');

    if (index === parsedSvgs.length - 1) {
      console.log(`Processed ${parsedSvgs.length} SVG files for ${type} ${variant} and saved in ${componentPath}/assets`);
    }
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
  const [, , type] = process.argv;
  console.log(`Executing script for ${type}...`);

  if (!type || (type !== 'icons' && type !== 'illustrations')) {
    console.error("Please provide a valid type: 'icons' or 'illustrations'.");
    process.exit(1);
  }

  if (type === 'icons') {
    await processSvgFiles(type, 'fill');
    await processSvgFiles(type, 'outline');
  } else {
    await processSvgFiles(type);
  }

  process.exit(0);
};

main();
