/**
 * Created by mohwa on 2018. 2. 14..
 */

const path = require('path');

const {Config, environment} = require('webpack-config');

const envConfig = environment.get('config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

const entry = path.join(srcPath, 'app/app.js');

const config = {
    entry: {
        "app": entry
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    devServer: {
        host: 'localhost',
        port: '8089',
        open: true,
        proxy: {
        }
    },
    plugins: [
        // new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            inject: 'head',
            template: path.join(srcPath, 'index.html')
        }),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ]
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);