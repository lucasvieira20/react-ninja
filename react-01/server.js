'use strict'

const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebPackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallBack: true,
  stats: {colors: true}
}).listen(3000, (err) => {
  if(err){
    return console.log(err);
  }
  console.log("Listening localhost:3000");
});
