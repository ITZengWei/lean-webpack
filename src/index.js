import { createApp } from 'vue/dist/vue.esm-bundler'
/** 导入 SFC(Single File Component) 文件 */
import App from './vue/App.vue'
import { sum } from '@/js/math'
import './js/component'
const { priceForm } = require('./js/format')
import './js/demo'

/** 模块热替换 */
if (module.hot) {
  module.hot.accept('./js/component', () => {
    console.log('hot replace component js file')
  })
}


console.log(sum(1, 2))
console.log(priceForm(1, 2))


/** vue 代码 */
// const app = createApp({
//   template: `<h1>我是 vue 渲染的内容 {{ hello }}</h1>`,
//   data() {
//     return {
//       msg: 'hello'
//     }
//   } 
// })  
 
const app = createApp(App)

console.log('hello')

app.mount('#app')