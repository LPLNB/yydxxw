// miniprogram/pages/home/home.js
import { gettime } from '../../components/goldjs/times'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      '../../images/yanyan1.png',
      '../../images/yanyan2.png',
      '../../images/yanyan3.png'
    ],
    ranklist: [], //排行榜
    // 音乐电台
    muic_w: [], //外层
    muic_l: [], //内层

    // love
    loves:"",
    love:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      love:'1314'
    })
  },

  // 获取排行榜
  getranking() {
    wx.request({
      url: 'https://api.apiopen.top/musicRankings',
      method: 'GET',
      data: {},
      success: (res) => {
        console.log(res)
        this.setData({
          ranklist: res.data.result
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  // 获取音乐电台
  getmuicdt() {
    wx.request({
      url: 'https://api.apiopen.top/musicBroadcasting',
      method: 'GET',
      success: (res) => {
        console.log(res)
        let muicw = res.data.result
        for (let i = 0; i < muicw.length; i++) {
          var muicl = muicw[i].channellist.slice(0, 5)
          muicw[i].channellist = muicl
          res.data.result = muicw
        }
        console.log(res)
        this.setData({
          muic_w: res.data.result
        })
      },
      fail: (err) => { }
    })
  },
  // 获取时间
  gettimes() {
    let times = gettime("2018/08/29")
    if(times){
      let lovetime = `${times.year}年${times.month}月${times.day}日${times.hour}时${times.minute}分${times.second}秒`
      this.setData({
        loves: lovetime
      })
    } else if(!times) {
      let lovetime = `00年00月00日00时00分00秒`
      this.setData({
        loves: lovetime
      })
    }
    setTimeout(()=>{this.gettimes()},500)
  },
  // 隐藏
  hided() {
    this.setData({
      love:"521"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getranking(); //获取排行榜数据
    this.getmuicdt(); //获取音乐电台
    this.gettimes()//获取时间
  },


  // 跳转搜索页面
  search() {
    wx.navigateTo({
      url: '../../listmuicon/pages/search/search',
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