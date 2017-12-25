const webpack = require('karma-webpack');
const puppeteer = require('puppeteer');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security'],
      },
    },
    files: [
      './src/**/*spec.jsx',
    ],
    frameworks: ['mocha'],
    plugins: [
      webpack,
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
    ],
    preprocessors: {
      'src/**/*spec.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['coverage', 'mocha'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
      },
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
