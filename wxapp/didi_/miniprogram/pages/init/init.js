// pages/init/init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:39.916263,
    longitude:116.403119,
    scale:12
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面加载完成后
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        let longitude = res.longitude;
        let latitude = res.latitude;
        //console.log(longitude, latitude);
        this.setData({
          latiude,
          longitude,
        })
      }
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