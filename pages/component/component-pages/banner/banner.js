Component({
  data: {
    imgInfo: [{
      id: 10000,
      avatar: "../../resourse/image/1.jpg"
    }, {
      id: 10001,
      avatar: "../../resourse/image/2.jpg"
    }, {
      id: 10002,
      avatar: "../../resourse/image/3.jpg"
    }, {
      id: 10003,
      avatar: "../../resourse/image/4.jpg"
    }],
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  methods: {
    goTap(e) {
      // console.log(e.target);
      var myEventDetail = {
        id: e.currentTarget.id
      } // detail对象，提供给事件监听函数      
      this.triggerEvent('toHot', myEventDetail)
    }
  }
})