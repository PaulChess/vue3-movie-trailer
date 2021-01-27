/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const resolve = filePath => path.join(__dirname, filePath)

module.exports = {
   pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [resolve('src/assets/styles/variable.less')] // less所在文件路径
        }
     }
 }
