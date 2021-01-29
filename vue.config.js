/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const resolve = filePath => path.join(__dirname, filePath)

module.exports = {
  pluginOptions: { // 第三方插件配置
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/styles/variable.less')] // less所在文件路径
    }
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]),
    config.devServer.proxy({
      "/api": {
        target: "http://47.110.74.37:7001/"
      }
    })
  }
}