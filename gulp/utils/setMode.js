const config = require('../config');

const setProdMode = cb => {
  config.setEnv('production');
  config.logEnv();
  cb();
};

const setDevMode = cb => {
  config.setEnv('development');
  config.logEnv();
  cb();
};

module.exports = {
  setProdMode,
  setDevMode,
};
