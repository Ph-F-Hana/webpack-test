const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/main_bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './image',
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack project",
      minify: {
        collapseWhitespace: true
      },
      hash: false,
      template: './src/index.ejs'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist'
  }
}
