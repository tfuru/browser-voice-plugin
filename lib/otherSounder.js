// Chrome 和 Safari 浏览器的播放方法
import { speechOption } from './speechOption'
export class OtherSounder {
  #sounder =null
  constructor (options) {
    this.options = options
  }
  init () {
    const options = this.options
    this.#sounder = new SpeechSynthesisUtterance()
    this.#sounder.volume = options.volume == speechOption.volume.LOW ? 0.2
      : (options.volume == speechOption.volume.HIGHT ? 1 : 0.5)
    this.#sounder.rate = options.rate == speechOption.rate.SLOW ? 0.1
      : (options.rate == speechOption.rate.FAST ? 5 : 1)
  }
  speak (message) {
    this.#sounder.text = message
    window.speechSynthesis.speak(this.#sounder)
  }
  pause () {
    window.speechSynthesis.pause()
  }
  resume () {
    window.speechSynthesis.resume()
  }
  stop () {
    window.speechSynthesis.cancel()
  }
}
