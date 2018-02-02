const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var CompressionPlugin = require("compression-webpack-plugin");


const DIRNAME = path.resolve(__dirname, '../')

module.exports = {
  resolve: {
    modules: [path.join(DIRNAME, 'src'), 'node_modules']
  },

  entry: [path.resolve(DIRNAME, 'src')],

  output: {
    filename: `assets/js/[name].[hash].bundle.js`,
    chunkFilename: `assets/js/[name].chunk-[hash].js`,
    path: path.resolve(DIRNAME, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(DIRNAME),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: '/assets',
                minimize: true,
                modules: true,
                localIdentName: '[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff'},
      {test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]?[hash]'
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('build', {
      root: DIRNAME,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(DIRNAME, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/styles.[hash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
}