/**
 * Created by mohwa on 2018. 2. 14..
 */

const path = require('path');

const webpack = require('webpack');

const {Config, environment} = require('webpack-config');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

const entry = path.join(srcPath, 'app/app.js');

loader: MiniCssExtractPlugin.loader

const config = {
    entry: {
        "app.min": entry
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        })
    ]
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);