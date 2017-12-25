module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      'tests.webpack.js', // just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'], // preprocess with webpack and our sourcemap loader
    },
    reporters: ['dots'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
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
    },
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },
  });
};
