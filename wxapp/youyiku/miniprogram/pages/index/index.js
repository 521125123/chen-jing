// miniprogram/pages/homepage/homepage.js
const app = getApp(); //全局方法， app.js 定义的全局方法

Page({

  /**
   * 页面的初始数据
   */
  data: {
    clothesInfo:[],
    orderBy:"Newactivity",
    imgUrls:[
      "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/383602586/O1CN01Eliwby1UyQsjuo3GQ-383602586.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i2/669642169/O1CN01SK9cE11RtRismmE4l-669642169.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i1/2194810725/O1CN017y1fs61HE5eOJOmsK_!!0-item_pic.jpg_430x430q90.jpg"
    ]
  },
  filter(e){
    this.setData({
      orderBy: e.currentTarget.dataset.val
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中...',
    })
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
    app.getInfoWhere('youyi-clothes',e => {
      this.setData({
        clothesInfo: e.data
      })
      wx.hideLoading();
    })
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
