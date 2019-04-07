import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// main: ['webpack-hot-middleware/client', path.resolve(__dirname, 'src/index.js')]

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  
  entry: {
    main: [path.resolve(__dirname,'src/index.js'), 'webpack-hot-middleware/client']
  },

  target: 'web',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    open: 'Google Chrome'
    /** 
     *  To create a proxy for a back-end
     *   proxy: {'/api': 'http://localhost:3000'},
     */
  },

  module: {
    rules: [
      {test: /\.(js|jsx)$/,  exclude: /node_modules/, use: "babel-loader"},
      {test: /\.css$/, use: ["style-loader", "css-loader"]},
      {test: /\.(htm|html)$/, use: "html-loader"},
      {test: /\.(jpg|jpeg|png|gif)$/, use: "file-loader"}
    ]
  },

  plugins: [

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true,
    }),

    // Active hot code replacement for instant feedback.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};