// miniprogram/pages/home/home.js
const myaudio = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    muictext: '', //输入框中的歌词
    muiclist: [], //歌曲列表
    ismuic:true, // 播放或者暂停
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 获取搜索框中的内容
  getmuic(e) {
    console.log(e.detail.value)
    this.setData({
      muictext: e.detail.value
    })
  },

  // 搜索歌曲
  search() {
    let muictext = this.data.muictext
    wx.showLoading({
      title: '请稍后',
    })
    wx.request({
      url: `https://api.apiopen.top/searchMusic?name=${muictext}`,
      success: (res) => {
        console.log(res)
        this.setData({
          muiclist: res.data.result
        })
        wx.hideLoading({})
      },
      fail: (err) => {
        console.log(err)
        wx.hideLoading({})
      }
    })
  },
  
  // 滑动到底部
  hole() {
    console.log("到底了")
  },
  // 切换暂停播放
  changep(e) {
    console.log(e.currentTarget.dataset.sid)
    console.log(e.currentTarget.dataset.src)
    let src = e.currentTarget.dataset.src
    if(e.currentTarget.dataset.sid){
      this.setData({
        ismuic: e.currentTarget.dataset.sid
      })
      myaudio.src = src
      myaudio.onCanplay(()=>{
        console.log("请稍后")
      })
      myaudio.play()
    }else if(!e.currentTarget.dataset.sid){
      this.setData({
        ismuic: "不是"
      })
      myaudio.pause()
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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