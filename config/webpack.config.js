/**
 * Created by mohwa on 2018. 2. 14..
 */

const path = require('path');

const {Config, environment} = require('webpack-config');

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

module.exports = (env, argv) => {

    const mode = argv.mode;

    return new Config().extend(path.join(__dirname, `webpack.${mode}.config.js`));
};