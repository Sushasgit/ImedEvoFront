const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlCriticalPlugin = require("html-critical-webpack-plugin");

const DIRNAME = __dirname + '/../';

module.exports = {
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        publicPath: '/',
        port: 8085,
        host: '127.0.0.1'
    },

    resolve: {
        modules: [path.join(DIRNAME, 'src'), 'node_modules']
    },

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8085',

        path.resolve(DIRNAME, 'src')
    ],

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(DIRNAME),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /react-infinite-calendar/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /react-infinite-calendar/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CaseSensitivePathsPlugin(),
        new StyleLintPlugin({
            files: 'src/**/*.css'
        }),
        new ExtractTextPlugin({
            filename: 'styles.css', allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};