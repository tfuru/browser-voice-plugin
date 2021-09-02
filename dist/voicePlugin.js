(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VoicePlugin"] = factory();
	else
		root["VoicePlugin"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 828:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CsSounder = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _sounder =
/*#__PURE__*/
new WeakMap();

var CsSounder =
/*#__PURE__*/
function () {
  function CsSounder(options) {
    _classCallCheck(this, CsSounder);

    _sounder.set(this, {
      writable: true,
      value: null
    });

    this.options = options;
  }

  _createClass(CsSounder, [{
    key: "init",
    value: function init() {
      var options = this.options;

      _classPrivateFieldSet(this, _sounder, new SpeechSynthesisUtterance());

      _classPrivateFieldGet(this, _sounder).volume = options.volume;
      _classPrivateFieldGet(this, _sounder).rate = options.rate;
      _classPrivateFieldGet(this, _sounder).lang = 'zh-CN';
      _classPrivateFieldGet(this, _sounder).pitch = 1;
    }
  }, {
    key: "speak",
    value: function speak(message) {
      _classPrivateFieldGet(this, _sounder).text = message;
      window.speechSynthesis.speak(_classPrivateFieldGet(this, _sounder));
    }
  }, {
    key: "pause",
    value: function pause() {
      window.speechSynthesis.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      window.speechSynthesis.resume();
    }
  }, {
    key: "stop",
    value: function stop() {
      window.speechSynthesis.cancel();
    }
  }]);

  return CsSounder;
}();

exports.CsSounder = CsSounder;

/***/ }),

/***/ 592:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IeSounder = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _sounder =
/*#__PURE__*/
new WeakMap();

var IeSounder =
/*#__PURE__*/
function () {
  function IeSounder(options) {
    _classCallCheck(this, IeSounder);

    _sounder.set(this, {
      writable: true,
      value: null
    });

    this.options = options;
  }

  _createClass(IeSounder, [{
    key: "init",
    value: function init() {
      var options = this.options;

      _classPrivateFieldSet(this, _sounder, new ActiveXObject('Sapi.SpVoice'));

      _classPrivateFieldGet(this, _sounder).volume = options.volume * 100;
      _classPrivateFieldGet(this, _sounder).rate = options.rate * 2 - 10;
    }
  }, {
    key: "speak",
    value: function speak(message) {
      _classPrivateFieldGet(this, _sounder).Speak(message, 3);
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateFieldGet(this, _sounder).Pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldGet(this, _sounder).Resume();
    }
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateFieldGet(this, _sounder).Speak('', 3);
    }
  }]);

  return IeSounder;
}();

exports.IeSounder = IeSounder;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _ieSounder = __webpack_require__(592);

var _csSounder = __webpack_require__(828);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _sounder =
/*#__PURE__*/
new WeakMap();

var _verifyBrowser =
/*#__PURE__*/
new WeakMap();

var _initPlugin =
/*#__PURE__*/
new WeakMap();

var VoicePlugin =
/*#__PURE__*/
function () {
  function VoicePlugin(options) {
    var _this = this;

    _classCallCheck(this, VoicePlugin);

    _sounder.set(this, {
      writable: true,
      value: null
    });

    _verifyBrowser.set(this, {
      writable: true,
      value: function value() {
        var userAgent = navigator.userAgent;
        var isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
        var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1;
        var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;

        if (isIE) {
          return 'IE';
        } else if (isSafari || isChrome) {
          return 'CS';
        } else {
          return false;
        }
      }
    });

    _initPlugin.set(this, {
      writable: true,
      value: function value() {
        if (window._$voicePlugin) {
          throw new Error('Only one VoicePlugin can be initialized on the current page');
        }

        if (Object.prototype.toString(_this.options) !== '[object Object]') {
          throw new Error('Not a valid parameter (should be Object)');
        }

        var browser = _classPrivateFieldGet(_this, _verifyBrowser).call(_this);

        if (browser === 'IE') {
          _classPrivateFieldSet(_this, _sounder, new _ieSounder.IeSounder(_this.options));
        } else if (browser == 'CS') {
          _classPrivateFieldSet(_this, _sounder, new _csSounder.CsSounder(_this.options));
        } else {
          throw new Error('The browser does not currently support this plugin!');
        }

        _classPrivateFieldGet(_this, _sounder).init();

        window._$voicePlugin = _classPrivateFieldGet(_this, _sounder);
      }
    });

    this.options = options || {
      volume: 0.5,
      rate: 1
    };

    _classPrivateFieldGet(this, _initPlugin).call(this);
  }

  _createClass(VoicePlugin, [{
    key: "speak",
    value: function speak(message) {
      if (typeof message !== 'string') {
        throw new Error('The Speck method only supports broadcast text!');
      }

      _classPrivateFieldGet(this, _sounder).speak(message);
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateFieldGet(this, _sounder).pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldGet(this, _sounder).resume();
    }
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateFieldGet(this, _sounder).stop();
    }
  }]);

  return VoicePlugin;
}();

exports.default = VoicePlugin;
}();
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});