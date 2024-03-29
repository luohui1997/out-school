//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: '赵春林',
    method: [{
      text: '出',
      value: 1,
    }, {
      text: '进', value: 2
    }],
    methodValue: 1
  },
  //事件处理函数
  bindViewTap: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    if (!this.data.name) {
      wx.showToast({
        title: '请输入姓名！',
        icon: 'none'
      })
      return
    }
    const text = this.data.method.find(item => item.value == this.data.methodValue).text
    wx.navigateTo({
      url: `../success/success?name=${this.data.name}&method=${text}`
    })
  },
  outChange(e) {
    this.setData({
      methodValue: e.detail.value
    })
  },
  bindName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserProfile({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
