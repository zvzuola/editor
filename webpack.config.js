var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:8800/', 'webpack/hot/dev-server', './app/client/containers/index'],
    output: {
        path: path.join(__dirname, './app/dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8800/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    target: 'electron-renderer',
    devtool: 'source-map'
}