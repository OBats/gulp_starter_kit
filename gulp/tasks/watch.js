const { watch, series, parallel } = require('gulp');
const config = require('../config');
const { sass } = require('./sass');
const { babel } = require('./babel');

const watchTask = () => {
  watch(
    [config.src.sass + '/**/*.{sass,scss}', config.src.js + '/**/*.js'],
    series(parallel(sass, babel))
  );
};

exports.watchTask = watchTask;
