const glob = require('glob');
const path = require('path');
const config = require('./gulp/config');

const createConfig = (env = process.env.NODE_ENV) => {
  const isProduction = env === 'production';

  const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    entry: glob.sync(path.resolve(__dirname, config.src.js, '**/*.js')),
    output: {
      path: path.resolve(__dirname, config.dest.js),
      filename: 'index.js',
    },
    devtool: isProduction ? '' : '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [path.resolve(__dirname, 'node_modules')],
        },
      ],
    },
  };

  return webpackConfig;
};

module.exports = createConfig;
