export class CsSounder {
  #sounder =null

  constructor (options) {
    this.options = options
  }

  init () {
    const options = this.options
    this.#sounder = new SpeechSynthesisUtterance()
    this.#sounder.volume = options.volume
    this.#sounder.rate = options.rate
    this.#sounder.lang = 'zh-CN'
    this.#sounder.pitch = 1
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
