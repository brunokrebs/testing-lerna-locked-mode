/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');

module.exports = (config) => {
  config.set({
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
