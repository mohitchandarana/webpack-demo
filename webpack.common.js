const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/main.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     library: "helloWorld"
   },
 };