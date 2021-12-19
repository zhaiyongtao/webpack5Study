'use strict';


const path = require('path')
// 单应用
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"

    },
    mode: "production" // development or production
}

// 多应用

// module.exports = {
//     entry: {
//         index: './src/index.js',
//         search: './src/helloword.js'
//     },
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: "[name].bundle.js"
//
//     },
//     mode: "production" // development or production
// }
