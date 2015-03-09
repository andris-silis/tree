var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-config.js');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(
  3000,
  'localhost',
  (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  }
);
