const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')


module.exports = {
  /** 打包构建环境 node | web(默认) */
  target: 'web',
  /** 打包模式 development | production */
  mode: 'development',
  /** 设置 source-map 更好的调试代码 */
  devtool: 'source-map',
  /** 监听打包 */
  // watch: true,
  /** 打包源文件入口 */
  entry: './src/index.js',
  output: {
    /** 默认打包的文件是 main.js */ 
    filename: 'js/bundle.js',
    /** 打包文件名 */
    path: path.resolve(__dirname, './dist')
  },
  /** 配置 webpack-dev-server */
  devServer: {
    /** 如果在webpack没有引入到资源，会从 ./abc 查找文件 新版本移除 */
    // contentBase: './abc'
    static: {
      directory: path.join(__dirname, 'public'),
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
  /** 设置模块如何被解析 */
  resolve: {
    /** 尝试按顺序解析这些后缀名 */
    extensions: ['.js', '.json', '.vue'],
    /** 解析目录时要使用的文件名。 */
    mainFiles: ['index'],
    /** 设置文件别名 */
    alias: {
      '@': path.resolve(__dirname, './src'),
      'js': path.resolve(__dirname, './src/js')
    }
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
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         /** 文件名称 */
      //         // name: 'img/[name].[hash:8].[ext]', // img/ 可以省略 outputPath
      //         name: '[name].[hash:8].[ext]',
      //         /** 对图片打包存放的目录 */
      //         outputPath: 'img'
      //       }
      //     }
      //   ]
      // }
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         /** 文件名称 */
      //         // name: 'img/[name].[hash:8].[ext]', // img/ 可以省略 outputPath
      //         name: '[name].[hash:8].[ext]',
      //         /** 对图片打包存放的目录 */
      //         outputPath: 'img',
      //         /** 设置了 limit，如果大于这个的资源，不会进行 base64转换，反之转换 */
      //         limit: 100 * 1024
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          /** 限制数据url */
          dataUrlCondition: {
            /** 同 url-loader limit */
            maxSize: 100 * 1024
          }
        }
      },
      /** 通过 file-loader 加载icon */
      // {
      //   test: /\.(woff2?|eot|ttf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         /** 文件名称 */
      //         // name: 'img/[name].[hash:8].[ext]', // img/ 可以省略 outputPath
      //         name: '[name].[hash:8].[ext]',
      //         /** 对图片打包存放的目录 */
      //         outputPath: 'font'
      //       }
      //     }
      //   ]
      // }
      /** 使用 asset module type */
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        /** 通过 babel.config.js 抽离出去配置 */
        use: ['babel-loader'],
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     options: {
        //       /** 加入 箭头函数以及声明会块级作用域的插件 */
        //       // plugins: [
        //       //   '@babel/plugin-transform-block-scoping',
        //       //   '@babel/plugin-transform-arrow-functions'
        //       // ],
        //       presets: [
        //         '@babel/preset-env'
        //       ]
        //     }
        //   }
        // ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // use: [
        //   /** vue3 通过 vue-loader@next 解析 vue 文件 */
        //   'vue-loader'
        // ]
      }
    ]
  },
  plugins: [
    /** 用于清除打包输出的文件 */
    new CleanWebpackPlugin(),
    /** 会自动生成一个模板 */
    new HtmlWebpackPlugin({
      /** 定义自定义模板位置 */
      template: './public/index.html',
      title: '学习webpack'
    }),
    /** 定义模板中的变量 */
    new DefinePlugin({
      /** 注意这里面存放的是变量 */
      // BASE_URL: 'rootPath'
      BASE_URL: '"./"',
      /** 是否需要 options API TODO  */
      __VUE_OPTIONS_API__: true,

      /** 是否保留 devtools 调试工具 */
      __VUE_PROD_DEVTOOLS__: false
    }),

    /** 原封不动的复制资源到打包的位置 */
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: [
    //           '**/index.html'
    //         ]
    //       }
    //     }
    //   ]
    // }),

    /** vue */
    new VueLoaderPlugin()
  ],
}