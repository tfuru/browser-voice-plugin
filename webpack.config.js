const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件，webpack 5 版本默认已安装

module.exports = {
  mode: 'production',
  entry: {
    'voicePlugin': './lib/index.js',
    'voicePlugin.min': './lib/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'VoicePlugin',
    libraryExport: 'default', // 不添加的话引用的时候需要 tools.default
    libraryTarget: 'umd'
  },
  target: false,
  module: {
    // 支持ES6语法
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
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
