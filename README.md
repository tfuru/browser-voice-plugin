## browser-voice-plugin

> A minimalist speech broadcast library based on JavaScript V8.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

### Overall

SpeechJs supports speaking text in the browser side, as well as the ability to pause, resume, and stop speaking. Currently, speechJs only supports Internet Explorer (Sapi.Spvoice library), Chrome, and Firefox (SpeechSynthesisUtterance Object).

### Options

```JavaScript
const speechOption = {
  flags: 1/2/3,
  volume: 'low'/'middle'/'hight',
  rate: 'slow'/'normal'/'fast'
}
```

### Usage

HTML

```html
<script src="../dist/speech-js.min.js"></script>
<script type="text/javascript">
  const hiSounder = new SpeechJs();
  hiSounder.speak('我爱你，中国');
</script>
```

CLI

```javascript
import SpeechJs from '@morning/speech-js';
const hiSounder = new SpeechJs();
hiSounder.speak('我爱你，中国');
```

### References

1. [https://blog.csdn.net/xjl271314/article/details/106220492/](https://blog.csdn.net/xjl271314/article/details/106220492/)
