// IE浏览器的播放方法
export class IeSounder {
  // 私有变量
  #sounder =null
  constructor (options) {
    this.options = options
  }
  init () {
    const options = this.options
    this.#sounder = new ActiveXObject('Sapi.SpVoice')
    this.#sounder.volume = options.volume === speechOption.volume.LOW ? 20
      : (options.volume == speechOption.volume.HIGHT ? 100 : 50)
    this.#sounder.rate = this.options.rate === speechOption.rate.SLOW ? -5
      : (options.rate == speechOption.rate.FAST ? 5 : 0)
  }
  speak (message) {
    const options = this.options
    const flags = options.flags === speechOption.flags.ASYNC_SPEAK ? 1
      : (options.flags === speechOption.flags.SYNC_SPEAK ? 2 : 3)
    this.#sounder.Speak(message, flags)
  }
  pause () {
    this.#sounder.Pause()
  }
  resume () {
    this.#sounder.Resume()
  }
  stop () {
    this.#sounder.Speak('', speechOption.flags.PURGE_BEFORE_SPEAK)
  }
}
