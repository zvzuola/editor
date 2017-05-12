var path = require('path');

module.exports = {
    entry: './app/client/containers/index',
    output: {
        path: path.join(__dirname, './app/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    target: 'electron-renderer'
}