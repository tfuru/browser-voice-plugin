(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpeechJs"] = factory();
	else
		root["SpeechJs"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lib)
});

;// CONCATENATED MODULE: ./lib/speechOption.js
// 语音播报的默认配置
const speechOption = {
  flags: {
    ASYNC_SPEAK: 1,
    SYNC_SPEAK: 2,
    PURGE_BEFORE_SPEAK: 3
  },
  volume: {
    LOW: 'low',
    MIDDLE: 'middle ',
    HIGHT: 'hight'
  },
  rate: {
    SLOW: 'slow',
    NORMAL: 'normal ',
    FAST: 'fast'
  }
}

;// CONCATENATED MODULE: ./lib/ieSounder.js
// IE浏览器的播放方法

class IeSounder {
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

;// CONCATENATED MODULE: ./lib/otherSounder.js
// Chrome 和 Safari 浏览器的播放方法

class OtherSounder {
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

;// CONCATENATED MODULE: ./lib/index.js




class SpeechJs {
  // 私有变量
  #sounder = null
  // 私有方法
  #myBrowser = () => {
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
  #init = () => {
    if (window._$sounder) {
      throw new Error('当前页面只能初始化一个Sounder对象')
    }
    if (!(typeof this.options === 'object' &&
          !Array.isArray(this.options))) {
      throw new Error('不是有效的参数对象')
    }
    const defaultOptions = {
      volume: speechOption.volume.HIGHT,
      rate: speechOption.rate.NORMAL,
      flags: speechOption.flags.PURGE_BEFORE_SPEAK
    }
    const options = Object.assign(defaultOptions, this.options)
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
    this.#init(options)
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

/* harmony default export */ const lib = (SpeechJs);

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});