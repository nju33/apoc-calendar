const {promisify} = require('util');
const nodeResolver = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const svelte = require('rollup-plugin-svelte');
const replace = require('rollup-plugin-replace');
const json = require('rollup-plugin-json');
const string = require('rollup-plugin-string');
// Const sass = require('node-sass');
// const postcss = require('postcss');
// Const autoprefixer = require('autoprefixer');

// const pSassRender = promisify(sass.render);

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
    babel({include: 'lib/**/*.js', runtimeHelpers: true}),
    svelte({
      extensions: ['.html'],
      include: './lib/**/*.html',
      // Preprocess: {
      //   async style({content}) {
      //     const sassResult = await pSassRender({
      //       data: content,
      //     });
      //     const {css} = await postcss([
      //       autoprefixer({
      //         browsers: ['last 2 versions', 'not < 1% in jp', 'not < 0.5%'],
      //         grid: true,
      //       }),
      //     ]).process(sassResult.css);
      //     return css;
      //   },
      // },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
    json({include: 'lib/**/*.json'}),
    string({include: 'lib/**/*.css'}),
  ],
};
