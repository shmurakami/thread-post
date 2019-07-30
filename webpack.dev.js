const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack')

module.exports = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    mode: "development"
})
