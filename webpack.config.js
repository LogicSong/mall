const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  devServer: {
    // contentBase: './dist'
    port: 8088
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      //
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
      },
      //
      {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
      },
      //图片的配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//8k
              name: '/resources/[name].[ext]'//name设定了路径以及文件名称与原文件一致
            },
          },
        ],
      },
      //字体图标的配置
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//8k
              name: '/resources/[name].[ext]'//name设定了路径以及文件名称与原文件一致
            },
          },
        ],
      }
    ]
  },
  plugins: [
      //处理html文件
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      //独立css文件：css提取到css目录下
      new ExtractTextPlugin("css/[name].css"),
      //提出公共模块:公共模块的js都提取到js目录下的base.js文件中
      new webpack.optimize.CommonsChunkPlugin({
          name: 'common',
          filename: 'js/base.js'
      })
    ]
};