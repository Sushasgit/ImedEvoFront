const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIRNAME = __dirname + '/../';

module.exports = {
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: [path.join(DIRNAME, 'src'), 'node_modules']
  },

  entry: {
    app: path.resolve(DIRNAME, 'src'),
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
    ],
  },

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
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
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
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]?[hash]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65
              },
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false
              },
              svgo: {
                plugins: [
                  {
                    cleanupIDs: false
                  }
                ]
              }
            }
          }
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../reports/webpack-bundle-prod.html',
      openAnalyzer: false,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new Compression({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      minimize: true,
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
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
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  ]
};