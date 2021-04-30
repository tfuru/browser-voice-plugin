import { IeSounder } from './ieSounder'
import { OtherSounder } from './otherSounder'
import { speechOption } from './speechOption'

class SpeechJs {
  // 私有变量
  #sounder = null
  // 私有方法
  #myBrowser= () => {
    const userAgent = navigator.userAgent
    const isOpera = userAgent.indexOf('Opera') > -1
    const isIE = userAgent.indexOf('compatible') > -1 &&
            userAgent.indexOf('MSIE') > -1 && !isOpera
    const isSafari = userAgent.indexOf('Safari') > -1 &&
            userAgent.indexOf('Chrome') == -1
    const isChrome = userAgent.indexOf('Chrome') > -1 &&
            userAgent.indexOf('Safari') > -1
    if (isIE) {
      return 'IE'
    } else if (isSafari || isChrome) {
      return 'other'
    } else {
      return false
    }
  }
  #init= () => {
    if (window._$sounder) {
      throw new Error('当前页面只能初始化一个Sounder对象')
    }
    const options = this.options || {
      volume: speechOption.volume.HIGHT,
      rate: speechOption.rate.NORMAL,
      flags: speechOption.flags.PURGE_BEFORE_SPEAK
    }
    if (!(typeof options === 'object' && !Array.isArray(options))) {
      throw new Error('不是有效的参数对象')
    }
    const myBrowser = this.#myBrowser()
    if (myBrowser === 'IE') {
      this.#sounder = new IeSounder(options)
    } else if (myBrowser == 'other') {
      this.#sounder = new OtherSounder(options)
    } else {
      throw new Error('Sorry！该浏览器暂不支持语音播报')
    }
    this.#sounder.init()
    window._$sounder = this.#sounder
  }

  constructor (options) {
    this.options = options
    this.#init()
  }

  // 外部暴露的方法
  speak (message) {
    if (typeof message !== 'string') {
      return
    }
    this.#sounder.speak(message)
  }
  pause () {
    this.#sounder.pause()
  }
  resume () {
    this.#sounder.resume()
  }
  stop () {
    this.#sounder.stop()
  }
}

export default SpeechJs
