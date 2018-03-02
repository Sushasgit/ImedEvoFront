const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DIRNAME = path.resolve(__dirname, '../')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    resolve: {
        modules: [path.join(DIRNAME, 'src'), 'node_modules']
    },

    entry: {
        entry: path.resolve(DIRNAME, 'src') + '/app/app.js',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-thunk',
            'moment'
        ],
        MyPages: [path.resolve(DIRNAME, 'src')]
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
            {test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                minimize: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[hash:base64:5]'
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
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
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
        new webpack.optimize.CommonsChunkPlugin({names: ['MyPages', 'vendor'], filename: 'bundle--[name].js'}),
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin('build', {
            root: DIRNAME,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: path.join('index.html'),
            path: path.resolve(DIRNAME, 'build'),
            excludeChunks: ['base'],
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/styles.[hash].css',
            allChunks: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false,
            },
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/logo.png',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                opengraph: true,
                twitter: true,
                yandex: true,
                windows: true
            }
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new HtmlCriticalPlugin({
            base: path.resolve(DIRNAME, 'build'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
                blockJSRequests: false,
            }
        }),
        new ImageminPlugin({
            pngquant: {
                quality: '95-100'
            }
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger(message) {
                if (message.indexOf('Total precache size is') === 0) {
                    return
                }
                console.log(message)
            },
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),

        new CopyWebpackPlugin([
            {from: 'src/pwa'},
        ]),
    ]
}
