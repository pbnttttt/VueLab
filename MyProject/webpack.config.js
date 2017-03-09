"use strict";

var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            // This example only configures Webpack to load .ts files. You can also drop in loaders
            // for other file types, e.g., .coffee, .sass, .jsx, ...
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    entry: {
        main: ['./Clientside/App.ts']
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    }
};