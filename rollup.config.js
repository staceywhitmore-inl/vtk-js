import * as path from 'path';
import * as glob from 'glob';

import autoprefixer from 'autoprefixer';

import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import ignore from 'rollup-plugin-ignore';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-re';
import { string } from 'rollup-plugin-string';
import svgo from 'rollup-plugin-svgo';
import webworkerLoader from 'rollup-plugin-web-worker-loader';

import { rewriteFilenames } from './Utilities/rollup/plugin-rewrite-filenames';

const IGNORE_LIST = [
  /(\/|\\)example_?(\/|\\)/,
  /(\/|\\)test/,
  /^Sources(\/|\\)(Testing|ThirdParty)/,
];

function ignoreFile(name, ignoreList = IGNORE_LIST) {
  return ignoreList.some((toMatch) => {
    if (toMatch instanceof RegExp) {
      return toMatch.test(name);
    }
    if (toMatch instanceof String) {
      return toMatch === name;
    }
    return false;
  });
}

const entryPoints = [
  path.join('Sources', 'macro.js'),
  path.join('Sources', 'vtk.js'),
  path.join('Sources', 'favicon.js'),
  ...glob.sync('Sources/**/index.js').filter((file) => !ignoreFile(file)),
];

const entries = {};
entryPoints.forEach((entry) => {
  entries[entry.replace(/^Sources(\/|\\)/, '')] = entry;
});

export default {
  input: entries,
  output: {
    dir: 'dist/esm/',
    format: 'es',
    entryFileNames(chunkInfo) {
      const name = chunkInfo.name;

      // rewrite vtk.js files from Sources/.../<NAME>/index.js to .../<NAME>.js
      const sourcesMatch = /^(.*?)(\/|\\)([A-Z]\w+)(\/|\\)index\.js$/.exec(
        name
      );
      if (sourcesMatch) {
        return path.join(sourcesMatch[1], `${sourcesMatch[2]}.js`);
      }

      return name;
    },
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor';
      }
      // strip out full path to project root
      return id.replace(`${path.resolve(__dirname)}${path.sep}`, '');
    },
    chunkFileNames(chunkInfo) {
      const name = chunkInfo.name;

      if (name === 'vendor') {
        return path.join('_vendor', 'vendor.js');
      }

      // throw all subscript prefixed chunks into a virtual folder
      if (name.startsWith('_')) {
        return name.replace(/^_/, `_virtual${path.sep}`);
      }

      return name;
    },
  },
  external: [/@babel\/runtime/],
  plugins: [
    // should be before commonjs
    replace({
      patterns: [
        {
          // match against jszip/lib/load.js
          // Workaround until https://github.com/Stuk/jszip/pull/731 is merged
          include: path.resolve(
            __dirname,
            'node_modules',
            'jszip',
            'lib',
            'load.js'
          ),
          test: /'use strict';\nvar utils = require\('.\/utils'\);/m,
          replace: "'use strict'",
        },
        {
          // match against jszip/lib/compressedObject.js
          // Workaround until https://github.com/Stuk/jszip/pull/731 is merged
          include: path.resolve(
            __dirname,
            'node_modules',
            'jszip',
            'lib',
            'compressedObject.js'
          ),
          test: /Crc32Probe'\);\nvar DataLengthProbe = require\('.\/stream\/DataLengthProbe'\);/m,
          replace: "Crc32Probe');\n",
        },
      ],
    }),
    alias({
      entries: [
        { find: 'vtk.js', replacement: path.resolve(__dirname) },
        { find: 'stream', replacement: require.resolve('stream-browserify') },
      ],
    }),
    // ignore crypto module
    ignore(['crypto']),
    // needs to be before nodeResolve
    webworkerLoader({
      targetPlatform: 'browser',
      // needs to match the full import statement path
      pattern: /^.+\.worker(?:\.js)?$/,
      inline: false,
      preserveFileNames: true,
      outputFolder: 'WebWorkers',
    }),
    nodeResolve({
      // don't rely on node builtins for web
      preferBuiltins: false,
      browser: true,
    }),
    !process.env.NOLINT &&
      eslint({
        include: '**/*.js',
        exclude: 'node_modules/**',
      }),
    // commonjs should be before babel
    commonjs({
      dynamicRequireTargets: [
        // handle a dynamic require circular dependencies
        'node_modules/readable-stream/lib/_stream_duplex.js',
        'node_modules/jszip/lib/base64.js',
        'node_modules/xmlbuilder/lib/*.js',
      ],
      // dynamicRequireTargets implies transformMixedEsModules because
      // dynamicRequireTargets generates mixed modules
      transformMixedEsModules: true,
    }),
    babel({
      include: 'Sources/**',
      exclude: 'node_modules/**',
      extensions: ['.js'],
      babelHelpers: 'runtime',
    }),
    string({
      include: '**/*.glsl',
    }),
    json(),
    svgo(),
    postcss({
      modules: true,
      plugins: [autoprefixer],
    }),
    // windows ntfs hates colons in filenames,
    // and node-resolve and web-worker-loader are notorious for
    // inserting them into virtual modules that are written out
    // to the filesystem via preserveModules: true.
    rewriteFilenames({
      find: /:/g,
      replace: '_',
    }),
  ],
};
