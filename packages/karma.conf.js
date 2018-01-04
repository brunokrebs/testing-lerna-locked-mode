/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');

module.exports = (config) => {
  const configProps = {
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['es6-shim', 'mocha'],
    files: [
      'tests.webpack.js',
    ],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered
      // (useful if karma exits without killing phantom)
      exitOnResourceError: true,
    },
    plugins: [
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-es6-shim',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'tests.webpack.js': ['babel', 'webpack'],
    },
    reporters: ['progress', 'coverage'],
    coverageIstanbulReporter: {
      reports: ['text-summary'],
      fixWebpackSourcePaths: true,
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$|\.jsx$/,
            enforce: 'post',
            exclude: /node_modules|test|webpack/,
            loader: 'istanbul-instrumenter-loader',
            query: {
              esModules: true,
            },
          },
          {
            test: /\.js$|\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'stylus-loader'],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.cwd': JSON.stringify(process.cwd()),
        }),
      ],
    },
  };
  config.set(configProps);
};
