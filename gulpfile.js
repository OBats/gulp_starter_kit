const { defaultTask } = require('./gulp/tasks/default');
const { lintSass } = require('./gulp/tasks/lint');
const { buildProd } = require('./gulp/tasks/build');
const { clean } = require('./gulp/tasks/clean');

exports.default = defaultTask;
exports.lintSass = lintSass;
exports.buildProd = buildProd;
exports.clean = clean;
