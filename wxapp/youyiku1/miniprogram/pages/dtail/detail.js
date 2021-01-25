// miniprogram/pages/dtail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 1, name:"首页",
      },
      {
        id: 0, name: "女装"
      },
      {
        id: 2, name: "男装"
      },
      {
        id: 3, name: "童装"
      },
      {id:4,name:"婴幼儿装"}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorActiveColor: '#fff',
    imgUrls: [
      'https://7072-projectcloud-5gjhkb9d9e88311f-1304520149.tcb.qcloud.la/1.jpg?sign=3a99358e4099be3971202ec03288c825&t=1611485605',
      'https://7072-projectcloud-5gjhkb9d9e88311f-1304520149.tcb.qcloud.la/2.jpg?sign=c435658c4b6f571845b834d75a52afaa&t=1611485709',
      'https://7072-projectcloud-5gjhkb9d9e88311f-1304520149.tcb.qcloud.la/3.jpg?sign=e1053f2b22b8892232c013824b814ec1&t=1611485730',
      'https://7072-projectcloud-5gjhkb9d9e88311f-1304520149.tcb.qcloud.la/4.jpg?sign=56820350fa5a6d9c41035b183a01c328&t=1611485749'
    ]
  },
  typeSwitch(e){
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
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