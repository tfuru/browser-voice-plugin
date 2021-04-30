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

export {
  speechOption
}
