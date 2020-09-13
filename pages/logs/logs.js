//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: [],
    userInfo: {},
    time: util.formatTime(new Date())
  },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      'userInfo.avatarUrl': app.globalData.userInfo.avatarUrl,
      'userInfo.nickName': option.name,
      time: util.formatTime(new Date())
    })
  }
})
