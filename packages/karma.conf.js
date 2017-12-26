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
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap', 'coverage'],
    },
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['text-summary'],
      fixWebpackSourcePaths: true,
    },
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
        rules: [
          // instrument only testing sources with Istanbul
          {
            test: /\.jsx$/,
            use: { loader: 'istanbul-instrumenter-loader' },
            include: `${process.cwd()}/src/Button.jsx`,
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
