// miniprogram/pages/accountBooks/accountBooks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isList:false,  // 转换页面风格的标识
    accounts:[],   //账本数据
    curTime:null,      //当前的时间
    curYear:null,     //当前年份
  },
  createNewAccount(){
    wx.navigateTo({
      url: '../editAccount/editAccount'
    })
  },
  switchList(){
    let isList = !this.data.isList
    this.setData({
      isList
    })
    //长期存储
    wx.setStorage({
      key: "isList",
      data: isList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var isList = wx.getStorageSync('isList');
    this.setData({
      isList
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