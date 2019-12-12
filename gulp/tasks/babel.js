const { src, dest } = require('gulp');
const webpackStream = require('webpack-stream');
const config = require('../config');
const createConfig = require('../../webpack.config');

const babel = () => {
  return src(config.src.js + '**/*.js')
    .pipe(webpackStream(createConfig(config.env)))
    .pipe(dest(config.dest.js));
};

exports.babel = babel;
