import { createApp } from 'vue/dist/vue.esm-bundler'
import { sum } from './js/math'
import './js/component'
const { priceForm } = require('./js/format')
import './js/demo'


console.log(sum(1, 2))
console.log(priceForm(1, 2))


/** vue 代码 */
const app = createApp({
  template: `<h1>我是 vue 渲染的内容 {{ hello }}</h1>`,
  data() {
    return {
      msg: 'hello'
    }
  }
})

app.mount('#app')