module.exports = {
    entry: './scripts/es6/main.es6.js',
    output: {
        filename: 'scripts/dist/script.js'
    },
    module: {
        loaders: [
            { test: /\.es6.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    devtool: '#cheap-module-source-map'
};
