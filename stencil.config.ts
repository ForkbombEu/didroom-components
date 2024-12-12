import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind, { setPluginConfigurationDefaults, tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindConf from './tailwind.config';

const opts = {
  debug: false,
  stripComments: true,
  tailwindCssPath: './src/global/global.css',
  tailwindConf,
};

setPluginConfigurationDefaults(opts);

export const config: Config = {
  namespace: 'didroom-components',
  globalStyle: 'src/global/global.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '**/*.woff2',
          dest: 'assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'dist/didroom-components/assets',
          warn: true,
        },
      ],
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'dist/vscode-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '**/*.woff2',
          dest: 'assets',
          warn: true,
        },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass(), tailwindGlobal(), tailwind(), tailwindHMR()],
};
