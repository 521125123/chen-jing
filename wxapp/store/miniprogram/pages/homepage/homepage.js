// miniprogram/pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitInfo: ,
    offline: false, // 打烊
    isShow: true,
    imgUrls: [
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/152869/36/733/129848/5f6da644E8c640b50/35117f17f08456ad.jpg!q70.dpg.webp',
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/149571/38/9289/117895/5f6da644E784f911b/21a284afecffdb4f.jpg!q70.dpg.webp'
    ],
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"美味鲜果",
      },
      {
        id: 1, name: "今日特惠"
      },
      {
        id: 2, name: "新鲜上架"
      },
      {
        id: 3, name: "店主推荐"
      }
    ]
  },
  typeSwitch(e) {
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
//js与页面进行交互
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
//html 与  css  做数据请求 到云端请求数据 比较早, 放到ready晚了 花时间，  尽量提早
// onLoad 正在加载 加载且计算渲染页面,线程如果又再启动下载进程的话,可能会比较卡到
//fruit-bored
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