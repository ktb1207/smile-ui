const path = require('path');
// html创建
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const handleUrl = (str) => {
  return path.resolve(__dirname, `./${str}`);
};

module.exports = {
  entry: handleUrl('src/index.tsx'),
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: handleUrl('dist'),
    // contenthash利于静态文件缓存
    filename: '[name].[contenthash].js',
  },
  resolve: {
    alias: {
      '@': handleUrl('src'),
      '@ui': handleUrl('../src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'smile-ui examples',
      template: handleUrl('public/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
      // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。 如果只想显示编译器错误：
      overlay: true,
    },
    compress: false,
    historyApiFallback: true,
    // 启用热更新
    hot: true,
    open: ['index.html#home'],
    port: 3030,
    // 代理
    proxy: {},
  },
};
