// listmuicon/pages/listen/listen.js
// http://music.163.com/song/media/outer/url?id=5255987.mp3
const myaudio = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'',//图片
    animationData: {},
    pause: false,
    alldate: '',//总时长
    dongtai: '', //动态时间
    setps:'', //动态变换时间
    values:'',// slider中的最大值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pic = wx.getStorageSync('pic')
    let url = wx.getStorageSync('url')
    this.setData({
      pic
    })
    console.log(pic)
    myaudio.src = url
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){
    myaudio.play()
    this.firstplay()
  },
  // 播放
  firstplay() {
    myaudio.duration
    if (myaudio.duration == 0) {
      wx.showLoading({
        title: '请稍后',
      })
    } else {
      wx.hideLoading()
      myaudio.duration
      myaudio.onTimeUpdate(() => {
        this.setData({
          setps:myaudio.currentTime,
          values:myaudio.duration
        })
        // 总时间
        let a = parseInt(myaudio.duration / 60 % 60)
        let b = parseInt(myaudio.duration % 60)
        // 播放中得到时间
        let c = parseInt(myaudio.currentTime / 60 % 60)
        let d = parseInt(myaudio.currentTime % 60)
        if ((a.toString()).length == 1) {
          a = `0${a}`
        } else if ((a.toString()).length > 1) {
          a = a
        }
        if ((b.toString()).length == 1) {
          b = `0${b}`
        } else if ((b.toString()).length > 1) {
          b = b
        }
        if ((c.toString()).length == 1) {
          c = `0${c}`
        } else if ((c.toString()).length > 1) {
          c = c
        }
        if ((d.toString()).length == 1) {
          d = `0${d}`
        } else if ((d.toString()).length > 1) {
          d = d
        }
        let guding = `${a}:${b}`
        let huodong = `${c}:${d}`
        this.setData({
          alldate: guding,//总时长
          dongtai: huodong //动态时间
        })
        myaudio.onEnded(()=>{
          this.setData({
            pause:true,
            dongtai:"00:00",
            setps:0
          })
        })
      })
    }
    
    setTimeout(() => {
      this.firstplay()
    }, 500);
  },
  // 播放暂停
  pauses () {
    if(this.data.pause == false) {
      myaudio.pause()
      this.setData({
        pause:true
      })
    } else if (this.data.pause == true) {
      myaudio.play()
      this.setData({
        pause:false
      })
      this.firstplay()
    }
  },
  // 滑动slider
  sliderchange (e) {
    myaudio.seek(e.detail.value)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})