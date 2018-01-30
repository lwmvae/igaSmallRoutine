Page({
  data: {
  
  },
  goToDetail(e){
    console.log(e.detail.id);
    wx.navigateTo({
      url: '../courseDetail/courseDetail',
    })
  }
})