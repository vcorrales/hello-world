import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  devServer: {

    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    open: 'Google Chrome',
    progress: true,
    watchContentBase: true,
    /** 
     * To create a proxy for a back-end
     *    proxy: {'/api': 'http://localhost:3000'},
     */
  },

  devtool: 'inline-source-map',
    
  entry: {
    main: [path.resolve(__dirname,'src/index.js'), 
           'webpack-hot-middleware/client?reload=true']
  },

  mode: 'development',

  module: {
    rules: [
      {test: /\.(js|jsx)$/,  exclude: /node_modules/, use: "babel-loader"},
      {test: /\.css$/, use: ["style-loader", "css-loader"]},
      {test: /\.(htm|html)$/, use: "html-loader"},
      {test: /\.(jpg|jpeg|png|gif)$/, use: "file-loader"}
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  plugins: [

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'src/index.html',
    }),

    // Active hot code replacement for instant feedback.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom'},
    extensions: ['*', '.js', '.jsx']
  },

  target: 'web',

  watch: true,

  watchOptions: {
    ignored: ['node_modules']
  },


};