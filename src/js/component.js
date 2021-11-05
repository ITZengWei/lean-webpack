/** 通过 xxx-loader! 分割我们的资源 */
// import 'css-loader!../css/style.css'
import '../css/style.css'
// import '../css/common.less'

/** 引入图片 */
import img from '../img/zznh.png'
/** 引入icon */
import '../font/iconfont.css'


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

function iconComponent() {
  const iEle = document.createElement('i')

  iEle.className = 'iconfont icon-ashbin'


  return iEle
}


document.body.appendChild(component())
document.body.appendChild(imgComponent())
document.body.appendChild(iconComponent())


