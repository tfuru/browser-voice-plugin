## browser-voice-plugin

> A minimalist speech broadcast library based on JavaScript V8.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

### Overall

VoicePlugin supports speaking text in the browser side, as well as the ability to pause, resume, and stop speaking. Currently, VoicePlugin only supports Internet Explorer (based on Sapi.Spvoice library), Chrome, and Firefox (based on SpeechSynthesisUtterance Object).

### Options

```js
options = {
  volume: 0.1 ~ 1
  rate: 0.1 ~ 10
  // Chrome
  lang: '<zh-CN|en-US>'
  pitch: 0 ~ 2
}

// default option
options = {
  volume: 0.5
  rate: 1
  // Chrome
  lang: 'zh-CN'
  pitch: 1
}
```

### Usage

HTML

```html
<script src="../dist/voicePlugin.min.js"></script>
<script type="text/javascript">
  const hiSounder = new VoicePlugin();
  hiSounder.speak('我爱你，中国');
</script>
```

CLI

```js
import VoicePlugin from 'browser-voice-plugin';
const hiSounder = new VoicePlugin();
hiSounder.speak('我爱你，中国');
```

### References

1. [https://blog.csdn.net/xjl271314/article/details/106220492/](https://blog.csdn.net/xjl271314/article/details/106220492/)
2. [SpeechSynthesisVoice](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice)
3. [SpVoice Volume property](<https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms723615(v=vs.85)>)
