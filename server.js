/* eslint-disable no-console, prefer-arrow-callback */

const webpack = require('webpack');
const express = require('express');
const history = require('connect-history-api-fallback');

const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(history());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: {colors: true},
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.info('Listening at http://localhost:3000');
});
