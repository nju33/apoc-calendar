const {promisify} = require('util');
const nodeResolver = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const nodent = require('rollup-plugin-nodent');
const buble = require('rollup-plugin-buble');
const svelte = require('rollup-plugin-svelte');
const replace = require('rollup-plugin-replace');
const json = require('rollup-plugin-json');
const string = require('rollup-plugin-string');
const sass = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const pSassRender = promisify(sass.render);

const banner = `
/*!
 * Copyright 2018, nju33
 * Released under the MIT License
 * https://github.com/nju33/apoc-calendar
 */
`.trim();

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  banner,
  cache: null,
  input: 'lib/apoc-calendar.js',
  plugins: [
    nodeResolver({jsnext: true}),
    commonjs({include: 'node_modules/**'}),
    babel({include: 'lib/**/*.js'}),
    svelte({
      store: true,
      extensions: ['.html'],
      include: './lib/**/*.html',
      preprocess: {
        async style({content}) {
          const sassResult = await pSassRender({
            data: content,
          });
          const {css} = await postcss([
            autoprefixer({
              browsers: ['last 2 versions', 'not < 1% in jp', 'not < 0.5%'],
              grid: true,
            }),
          ]).process(sassResult.css.toString());

          return {code: css};
        },
      },
    }),
    nodent(),
    buble({
      target: {
        chrome: 49,
        node: 4,
        firefox: 45,
        safari: 9,
        edge: 12,
        ie: 11,
      },
      transforms: {dangerousForOf: true},
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
    json({include: 'lib/**/*.json'}),
    string({include: 'lib/**/*.css'}),
  ],
};
