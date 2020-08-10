const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/, 
                exclude:/node_modules/, 
                loader:'babel-loader'},
            {
                test: /\.css$/i, 
                exclude:/node_modules/, 
                use:[{
                        loader:'style-loader'}, 
                    {
                        loader:'css-loader', 
                        options:{
                            modules: true}
                    }
                ]}
        ]
    },
    plugins:[
        new HtmlPlugin({template: './client/index.html'})
    ],
    resolve:{
        extensions:['.js', '.jsx']
    }
}