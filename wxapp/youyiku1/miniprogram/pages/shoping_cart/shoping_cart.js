// miniprogram/pagesoping_cartoping_cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    motto:'进行登录操作',
    iD:1
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    // (wx.getSetting({
    //   success: function(res){
    //    if (res.authSetting['scope.userInfo']) {
    //     // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //     wx.getUserInfo({
    //      success: function(res) {
    //       console.log(res.userInfo)
    //      }
    //     })
    //   console.log('success')
    //    }
    //   },
    //   fail:function(res){
    //     console.log('fail');
    //     wx.reLaunch({
    //       url: '/pages/homepage/homepage',
    //     })
    //   }
    //  }))

      var that = this
    // 判断用户是否授权登录
      wx.getSetting({
        success: function (res) {
          // 判断是否授权
          console.log('delu')
          if (res.authSetting['scope.userInfo']) {
            wx.showToast({
              title: '已授权',
            })
            wx.navigateTo({
              url: '/pages/login/unme',
            })
             //获取用户信息
             console.log('获取用户信息')
            wx.getUserInfo({
              success: function (res) {
                console.log('用户已经授权过，添加用户信息')
                //用户已经授权过，添加用户信息
                var that = this
                wx.setStorageSync('nickName', res.userInfo.nickName)
                wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
              }
            });
          }else{
          wx.reLaunch({
            url: '/pages/login/unme',
          })
          }
        }
      })
  },  


   bindGetUserInfo: function(e) {
     console.log(e.detail.userInfo)
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