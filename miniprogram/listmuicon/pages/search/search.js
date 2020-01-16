// listmuicon/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music_text:'', // input输入框的内容
    music_list:[], // 搜索得到的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 获取input中的数据
  getinp (e) {
    console.log(e.detail.value)
    let music_text = e.detail.value
    this.setData({
      music_text
    })
  },
  getmusic () {
    let music_text = this.data.music_text
    wx.showLoading({
      title: '请稍等',
    })
    wx.request({
      url: `https://api.apiopen.top/searchMusic?name=${music_text}`,
      success: (res) => {
        console.log(res)
        let music_list = res.data.result
        this.setData({
          music_list
        })
        wx.hideLoading()
      }
    })
  },
  // 跳转到播放界面
  skip (e) {
    console.log(e.currentTarget.dataset.pic)
    let pic = e.currentTarget.dataset.pic
    let url = e.currentTarget.dataset.url
    wx.setStorage({
      data: pic,
      key: 'pic',
    })
    wx.setStorage({
      data: url,
      key: 'url',
    })
    wx.navigateTo({
      url: `../listen/listen`,
    })
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