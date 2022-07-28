const path = require('path');
// html创建
const HtmlWebpackPlugin = require('html-webpack-plugin');
const handleUrl = (str) => {
  return path.resolve(__dirname, `./${str}`);
};

module.exports = {
  entry: handleUrl('src/index.tsx'),
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: handleUrl('dist'),
    pathinfo: false,
    // contenthash利于静态文件缓存
    filename: '[name].[contenthash].js',
    // clean dist
    clean: true,
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
    // 启用热更新
    hot: true,
    open: ['index.html#home'],
    port: 3030,
    // 代理
    proxy: {},
  },
};
