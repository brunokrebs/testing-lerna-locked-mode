/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              cacheDirectory: true,
              presets: ['react', 'env'],
            },
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.cwd': JSON.stringify(process.cwd()),
        }),
      ],
    },
  });
};
