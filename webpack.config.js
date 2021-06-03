const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件，webpack 5 版本默认已安装

module.exports = {
  mode: 'production',
  entry: {
    'speechJs': './lib/index.js',
    'speechJs.min': './lib/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'SpeechJs',
    libraryExport: 'default', // 不添加的话引用的时候需要 tools.default
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  }
}
