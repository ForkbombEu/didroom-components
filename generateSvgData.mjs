#!/usr/bin/env node

import fs from 'fs-extra';
import glob from 'glob-promise';
import path from 'path';
import svgson from 'svgson';

const transpileSvgs = async type =>
  await glob(`icons/${type}/*.svg`)
    .then(filePaths =>
      Promise.all(
        filePaths.map(fileName => {
          return new Promise(resolve => {
            fs.readFile(fileName, 'utf-8').then(svg => {
              svgson.parse(svg).then(contents => {
                const name = `${fileName.split('.svg')[0]}`;
                const file = type === 'outline' ? `${name}-${type}` : name;
                resolve({ file, contents });
                console.log('================================ encoding:', `${fileName}-${type}`);
              });
            });
          });
        }),
      ),
    )
    .then(files => {
      files.forEach(svg => {
        let file = path.basename(svg.file);
        let svgPaths = findPath(svg.contents.children);
        // // Make sure this folder exists!
        let filename = `src/components/icon/assets/${file}.json`;
        fs.writeFileSync(filename, JSON.stringify(svgPaths || 'undefined'), 'utf8');
        console.log(`================================  Wrote ${filename}`);
      });
      return
    });

const findPath = children => {
  const path = children.filter(child => child.name === 'path');
  if (path.length > 0) {
    return path.map((p)=>p.attributes.d);
  }

  for (let child of children) {
    const result = findPath(child.children);
    if (result) return result;
  }

  return null;
};

const transpile = async () => {
  await transpileSvgs('fill');
  await transpileSvgs('outline');
  process.exit(0);
};

transpile();
