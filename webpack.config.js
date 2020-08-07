const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {test:/\.(js|jsx)$/, exclude:/node_modules/, loader:'babel-loader'}
        ]
    },
    plugins:[
        new HtmlPlugin({template: './client/index.html'})
    ]
}