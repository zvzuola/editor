var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './app/client/containers/index',
    output: {
        path: path.join(__dirname, './app/dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8800/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        
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

            }
        ]
    },
    target: 'electron-renderer',
    devtool: 'source-map'
}