const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  /** 打包模式 development | production */
  mode: 'development',
  /** 设置 source-map 更好的调试代码 */
  devtool: 'source-map',
  /** 监听打包 */
  // watch: true,
  /** 配置 webpack-dev-server */
  devServer: {
    /** 如果在webpack没有引入到资源，会从 ./abc 查找文件 新版本移除 */
    // contentBase: './abc'
    static: {
      directory: path.join(__dirname, '../public'),
    },
    /** 热更新 */
    hot: true,
    /** 默认0.0.0.0开启局域网访问 localhost | 127.0.0.0 设置本地回环地址，只能在当前电脑上使用 */
    host: '0.0.0.0',
    /** 运行端口号 */
    port: 8888,
    /** 直接打开浏览器 */
    // open: true,
    /** 通过 gzip 压缩 */
    compress: true,

    /** 请求代理配置 */
    proxy: {
      '/api': {
        target: 'backend-api-host',
        /** 替换 前缀 */
        pathRewrite: {
          '^/api': ''
        },
        /** 默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器, 设置为false 就可以接受https */
        secure: false,
        /** 在请求多时候，设置 origin 为代理服务器 */
        changeOrigin: true
      }
    },
  },
})