var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  ts: appRoot + '**/*.ts',
  style: 'styles/**/*.css',
  assets: appRoot + 'assets/**',
  output: outputRoot,
  outputAssets: outputRoot + 'assets/',
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};