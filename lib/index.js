import { IeSounder } from './ieSounder'
import { CsSounder } from './csSounder'

export default class VoicePlugin {
  constructor (options) {
    this.options = options || { volume: 0.5, rate: 1 }
    this.#initPlugin()
  }

  #sounder = null

  #verifyBrowser = () => {
    const userAgent = navigator.userAgent
    const isIE = !!window.ActiveXObject || 'ActiveXObject' in window
    const isSafari = userAgent.indexOf('Safari') > -1 &&
              userAgent.indexOf('Chrome') == -1
    const isChrome = userAgent.indexOf('Chrome') > -1 &&
              userAgent.indexOf('Safari') > -1
    if (isIE) {
      return 'IE'
    } else if (isSafari || isChrome) {
      return 'CS'
    } else {
      return false
    }
  }

  #initPlugin = () => {
    if (window._$voicePlugin) {
      throw new Error('Only one VoicePlugin can be initialized on the current page')
    }

    if (Object.prototype.toString(this.options) !== '[object Object]') {
      throw new Error('Not a valid parameter (should be Object)')
    }

    const browser = this.#verifyBrowser()
    if (browser === 'IE') {
      this.#sounder = new IeSounder(this.options)
    } else if (browser == 'CS') {
      this.#sounder = new CsSounder(this.options)
    } else {
      throw new Error('The browser does not currently support this plugin!')
    }
    this.#sounder.init()
    window._$voicePlugin = this.#sounder
  }

  speak (message) {
    if (typeof message !== 'string') {
      throw new Error('The Speck method only supports broadcast text!')
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
