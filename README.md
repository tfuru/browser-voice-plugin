# SpeechJs

> A minimalist speech broadcast library based on JavaScript V8.

### Overall

SpeechJS is used to perform the basic functions using three internal methods (init, options, sounder) and four external interfaces (speak, pause, resume, and stop). IeSounder and OtherSounder are concrete implementations of SpeechJS that are compatible with different browsers.

### IeSounder

Use Sapi.Spvoice library of windows for speech broadcast.

### OtherSounder

Use the SpeechSynthesisUtterance object for implementation. SpeechSynthesisUtterance is a new HTML5 API for synthesizing specified text into corresponding speech.

### Usage

HTML

```html
<script src="../dist/speechJs.min.js"></script>
<script type="text/javascript">
  const hiSounder = new SpeechJs()
  hiSounder.speak('我爱你，中国')
</script>
```

CLI

```javascript
import hiSounder from 'SpeechJs'
const hiSounder = new SpeechJs()
hiSounder.speak('我爱你，中国')
```

### References

1. [https://blog.csdn.net/xjl271314/article/details/106220492/](https://blog.csdn.net/xjl271314/article/details/106220492/)
