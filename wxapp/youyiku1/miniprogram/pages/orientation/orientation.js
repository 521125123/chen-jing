// miniprogram/pages/orientation/orientation.js
var app =getApp();
var bmap = require('../utils/bmap-wx.min'); 
var wxMarkerData = []; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:[
      '江西省南昌市',
      '江西省宜春市高安市',
      '收件人：买买买',
      '+18370511350'
    ],
    markers: [], 
    latitude:'28.454176', 
    longitude:'115.372404', 
    rgcData: {} 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getLocation({
    //     type:'gcj02',
    //     success:function(res){
    //       var latitude =res.location;
    //       var longitude =res.longitude;
    //      this.setData({
    //          latitude,
    //        longitude,}) 
    //     }
    //   })
    var that = this; 
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({ 
        ak: 'cr9GSKbFn4ktIQjPZVdDCOpuGtauj7fF' 
    }); 
    var fail = function(data) { 
        console.log(data) 
    }; 
    var success = function(data) { 
        wxMarkerData = data.wxMarkerData; 
        this.setData({ 
            markers: wxMarkerData 
        }); 
        this.setData({ 
            latitude:data.latitude
        }); 
        this.setData({ 
            longitude: data.location
        }); 
    } 
    // 发起geocoding检索请求 
    BMap.geocoding({ 
        success: success,
          fail: fail, 
    }); 
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