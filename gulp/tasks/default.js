const { series } = require('gulp');
const { buildDev } = require('./build');
const { server } = require('./server');
const { watchTask } = require('./watch');

exports.defaultTask = series(buildDev, server, watchTask);
