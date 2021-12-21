'use strict';


const path = require('path')
// 单应用
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: "bundle.js"
//
//     },
//     mode: "production" // development or production
// }

// 多应用

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].bundle.js"

    },
    mode: "production", // development or production
    module: {
        rules: [
            {
                test: /.js$/, // /\.(js|mjs|jsx|ts|tsx)$/
                use: 'babel-loader', // 解析es6语法
                options: {
                    presets: [

                    ]
                }
            }
        ]
    }
}
