const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const fs = require('fs')
const path = require('path')
var merge = require('webpack-merge');
const port = 8800

const config = merge(webpackConfig, {
    entry: ['webpack-dev-server/client?http://localhost:8800/', 'webpack/hot/dev-server'],
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    mode: 'development'
})

const compiler = Webpack(config)
const server = new WebpackDevServer(compiler, {
    disableHostCheck: true,
    hot: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    contentBase: 'app',
    stats: {
        colors: true
    }
}).listen(port, "localhost", function (err, result) {
    if (err) {
        console.log(err)
    }
    console.log(`Listening at http://localhost:${port}/`)
});