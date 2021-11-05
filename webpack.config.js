const path = require('path')

module.exports = {
  /** 打包模式 */
  mode: 'development',
  /** 打包源文件入口 */
  entry: './src/index.js',
  output: {
    /** 默认打包的文件是 main.js */
    filename: 'bundle.js',
    /** 打包文件名 */
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      // {
      //   /** 匹配文件 */
      //   test: /\.css$/,
      //   /** 写法一 */
      //   // loader: 'css-loader',

      //   /** 写法二, 执行顺序，从右 -> 左, 从后 -> 前 */
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     /** 会读取根目录对 postcss.config.js 作为配置信息 */
      //     'postcss-loader',
      //     /** 在webpack.config.js 手动修改配置 */
      //     // {
      //     //   /** 转换CSS */
      //     //   loader: 'postcss-loader',
      //     //   options: {
      //     //     postcssOptions: {
      //     //       plugins: [
      //     //         /** 自动添加前缀 */
      //     //         require('autoprefixer')
      //     //       ]
      //     //     }
      //     //   }
      //     // }
      //   ],
        /** 写法三 */
        // use: [
        //   { loader: 'css-loader' }
        // ]
      // },
      /** 匹配 less 文件 */
      // {
      //   test: /\.less$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // },
      /** 同时匹配 less 和 css */
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },

      /** 匹配图片资源 */
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}