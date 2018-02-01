Page({
  goToHot(e){
    console.log(e.detail.id);
    wx.navigateTo({
      url: '../courseDetail/courseDetail',
    })
  },
  goToDetail(e) {
    console.log(e.detail.id);
    wx.navigateTo({
      url: '../courseDetail/courseDetail',
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '测试',
      path: "pages/home/home",
      success:(res)=>{
        console.log(res)
      }
    }
  }
})