var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[hash].js",
        publicPath: '/',
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    devServer: {
        port: 3000,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

