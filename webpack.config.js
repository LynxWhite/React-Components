const path          = require('path')
const merge         = require('webpack-merge')
const common        = require('./config/webpack.common')

const webpack_mode  = process.env.NODE_ENV || 'development' 
const build_configs = webpack_mode === 'production' ? require('./config/webpack.production.js') : require('./config/webpack.development.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, build_configs, {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            style: path.resolve(__dirname, 'src/resources/stylus')
        }
    },
    plugins: 
        (webpack_mode !== 'development' ? [new CleanWebpackPlugin(['public'])] : [])
})
