/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午12:40
 */
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pageUrl = require('./entries.config.js');

var configPlugins = [];

var occ = new webpack.optimize.OccurenceOrderPlugin();
var hot = new webpack.HotModuleReplacementPlugin();
var no = new webpack.HotModuleReplacementPlugin();
// var opt = new webpack.optimize.CommonsChunkPlugin({
//     name: 'commons', // 将公共模块提取，生成名为`vendors`的chunk
//     chunks: ['index','admin'], //提取哪些模块共有的部分
//     filename: '[name]/bundle.js',
//     minChunks: 4,
// });
var extra = new ExtractTextPlugin('[name].css', {allChunks: false});

configPlugins = [occ, hot, no, extra];

pageUrl.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page.name}.html`,
        title: page.title,
        template: 'public/index.html',
        chunks: [page.name, 'commons'],
        hash: true, // 为静态资源生成hash值
    });
    configPlugins.push(htmlPlugin);
})

module.exports = configPlugins;