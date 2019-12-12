const del = require('del');
const color = require('ansi-colors');
const log = require('fancy-log');
const config = require('../config');

const clean = () => {
  return del([`${config.dest.css}/`, `${config.dest.js}/`]).then(paths =>
    log(color.black.bgCyan(' Deleted: '), color.magenta(paths.join('\n')))
  );
};

exports.clean = clean;
