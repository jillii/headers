const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader'
        }, {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            stats: { colors: true }
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: {
                discardComments: { removeAll: true },
                autoprefixer: { browsers: ['last 2 versions'] }
            }
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 4040,
        hot: true,
        inline: true
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-source-map'
}

module.exports = config;
