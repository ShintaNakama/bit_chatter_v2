const path = require('path');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    // mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: 'www',
      port: 4000,
      inline: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
};