/** 通过 xxx-loader! 分割我们的资源 */
// import 'css-loader!../css/style.css'
import '../css/style.css'
// import '../css/common.less'


function component() {
  const div = document.createElement('div')

  div.className = 'content'
  div.innerHTML = 'Hello Webpack'

  return div
}
console.log('hello')


document.body.appendChild(component())

