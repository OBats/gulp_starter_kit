const bs = require('browser-sync').create();
const config = require('../config');

const server = cb => {
  bs.init({
    cors: true,
    notify: false,
    ui: false,
    files: [config.dest.css + '/*.css', config.dest.js + '/*.js'],
    proxy: {
      target: config.proxyServer,
    },
  });
  cb();
};

exports.server = server;
