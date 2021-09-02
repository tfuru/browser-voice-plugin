export class IeSounder {
  constructor (options) {
    this.options = options
  }

  #sounder =null

  init () {
    const options = this.options
    this.#sounder = new ActiveXObject('Sapi.SpVoice')
    this.#sounder.volume = options.volume * 100
    this.#sounder.rate = options.rate * 2 - 10
  }

  speak (message) {
    this.#sounder.Speak(message, 3)
  }

  pause () {
    this.#sounder.Pause()
  }

  resume () {
    this.#sounder.Resume()
  }

  stop () {
    this.#sounder.Speak('', 3)
  }
}
