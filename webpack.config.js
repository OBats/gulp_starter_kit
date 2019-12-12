const webpack = require('webpack');
const path = require('path');
const config = require('./gulp/config');

const createConfig = (env = process.env.NODE_ENV) => {
  const isProduction = env === 'production';

  const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    context: path.resolve(__dirname, config.src.js),
    entry: {
      index: './index.js',
    },
    output: {
      path: path.resolve(__dirname, config.dest.js),
      filename: 'index.js',
    },
    devtool: isProduction ? '' : '#cheap-module-eval-source-map',
    plugins: [],
    optimization: {
      minimize: isProduction,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
          exclude: [path.resolve(__dirname, 'node_modules')],
        },
      ],
    },
  };

  return webpackConfig;
};

module.exports = createConfig;
