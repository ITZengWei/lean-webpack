/** 通过 xxx-loader! 分割我们的资源 */
// import 'css-loader!../css/style.css'
import '../css/style.css'
// import '../css/common.less'

/** 引入图片 */
import img from '../img/zznh.png'

function component() {
  const div = document.createElement('div')

  div.className = 'content'
  div.innerHTML = 'Hello Webpack'

  return div
}

function imgComponent() {
  const imgEle = document.createElement('img')

  imgEle.src = img
  imgEle.width = 200
  imgEle.height = 200


  // div.className = 'image-bg'

  return imgEle
}


document.body.appendChild(component())
document.body.appendChild(imgComponent())


