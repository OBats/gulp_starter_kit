const minimist = require('minimist')(process.argv.slice(2));
const color = require('ansi-colors');
const log = require('fancy-log');
const errorHandler = require('./utils/errorHandler');

const config = {
  env: 'development',
  production: minimist.production || minimist.prod || false,
  proxyServer: '',
  src: {
    sass: 'src/scss',
    js: 'src/js',
    img: 'src/images',
    fonts: 'src/fonts',
  },
  dest: {
    css: 'build/css',
    js: 'build/js',
  },
  setEnv: function(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },
  logEnv: () => {
    log(
      color.black.bgCyan(' Environment: '),
      config.production
        ? color.black.bgYellow(` ${process.env.NODE_ENV} `)
        : color.white.bgRed(` ${process.env.NODE_ENV} `)
    );
  },
  errorHandler,
};

module.exports = config;
