import path from 'path';
//import webpack from 'webpack';
//import nodeExternals from 'webpack-node-externals';

import HtmlWebpackPlugin from 'html-webpack-plugin';


//configuration has an unknown property 'noInfo'. These properties are valid:
//object { amd?, bail?, cache?, context?, dependencies?, devServer?, 
//  devtool?, entry?, externals?, loader?, mode?, module?, name?, node?, 
// optimization?, output?, parallelism?, performance?, plugins?, profile?, 
// recordsInputPath?, recordsOutputPath?, recordsPath?, resolve?, resolveLoader?, 
//serve?, stats?, target?, watch?, watchOptions? }


export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-bundle.js'
  },

  module: {
    rules: [
      {test: /\.(js|jsx)$/,  exclude: /node_modules/, use: ["babel-loader"]},
      {test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.(htm|html)$/, use: ['html-loader']},
      {test: /\.(jpg|jpeg|png|gif)$/, use: ['file-loader']}
    ]
  },

  plugins: [

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
};