/** 查看有没有写配置信息，没有的话，会默认读取这里面的内容 postcss.config.js */
module.exports = {
  plugins: [
    /** 自动添加前缀 */
    // require('autoprefixer')
    require('postcss-preset-env')
  ]
}