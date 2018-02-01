
const app = getApp()

Page({
  data: {
    userInfo: {},
    sign: false
  },
  onLoad: function () {
    // console.log(app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        sign: true
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            sign: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    // console.log(e.detail.userInfo);
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        sign: true
      })
    }
  }
})