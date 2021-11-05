const path = require('path')

module.exports = {
  /** 打包源文件入口 */
  entry: './src/index.js',
  output: {
    /** 默认打包的文件是 main.js */
    filename: 'bundle.js',
    /** 打包文件名 */
    path: path.resolve(__dirname, './dist')
  }
}