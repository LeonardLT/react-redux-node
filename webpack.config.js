const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var configPlugins = require("./config/plugins.config.js");

// configPlugins.push(new webpack.DefinePlugin({
//     IS_PRODUCTION: false,
// }));

module.exports = {
  // entry: [
  //   './public/entry.jsx',
  //   'webpack-hot-middleware/client'
  // ],
  entry: {
    index: "./public/component/index/index",
    admin: "./public/component/admin/index"
  },
  output: {
    path: path.join(__dirname, '/assets/'),
    publicPath: '/',
    filename: '[name]/entry.js',
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
        {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
        },
        {
            test: /\.css$/,
            // loader: 'style-loader!css-loader'
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?{browsers:['last 5 versions', '> 1%', 'firefox 15']}")
        },
        {
            test: /\.less/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?{browsers:['last 5 versions', '> 1%', 'firefox 15']}!less-loader?sourceMap")
        },
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  plugins: configPlugins
      // [
    // Webpack 1.0
    // new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    //   new webpack.optimize.CommonsChunkPlugin({
    //       name: 'commons', // 将公共模块提取，生成名为`vendors`的chunk
    //       chunks: ['index','admin'], //提取哪些模块共有的部分
    //       filename: '[name]/bundle.js',
    //       minChunks: 4,
    //   }),
    //合并css文件
    // new ExtractTextPlugin('[name]/style.css', {allChunks: false}),
    // new HtmlWebpackPlugin({
    //     title: 'jnexpert-v4.0',
    //     template: 'public/index.html',
    //     filename: '[name]/index.html'
    // })

  // ]
}
