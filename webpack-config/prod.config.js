const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')

const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  /** 打包模式 development | production */
  mode: 'production',
  plugins: [
    /** 用于清除打包输出的文件 */
    new CleanWebpackPlugin(),

    /** 原封不动的复制资源到打包的位置 */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
  ]
})