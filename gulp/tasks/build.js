const { series, parallel } = require('gulp');
const { sass } = require('./sass');
const { babel } = require('./babel');
const { clean } = require('./clean');
const { lintSass } = require('./lint');
const { setProdMode, setDevMode } = require('../utils/setMode');

const buildProd = series(setProdMode, clean, lintSass, parallel(sass, babel));
const buildDev = series(setDevMode, clean, parallel(sass, babel));

module.exports = {
  buildProd,
  buildDev,
};
