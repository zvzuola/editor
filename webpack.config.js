var path = require('path');

module.exports = {
    entry: './app/client/containers/index',
    output: {
        path: path.join(__dirname, './app/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }],

            }
        ]
    },
    target: 'electron-renderer',
    devtool: 'source-map'
}