// miniprogram/pagesoping_cartoping_cart.js
const app = getApp(); //全局方法， app.js 定义的全局方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clothesInfo:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 去详情页 
  tapToDetail(e) {
    const id = e.currentTarget.dataset.fid;
    wx.navigateTo({
      url: '/pages/shop_tail/shop_tail?_id='+id,
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中...',
    })
    
  },  


  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    app.getInfoWhere('youyiku',e => {
      this.setData({
        clothesInfo: e.data,
      })
      wx.hideLoading();
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