// pages/goods/detail.js
const WXAPI = require('apifm-wxapi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareQuanziProduct:true,
    goodsDetail: {},
    goodsId:'',
    selectSizePrice:'',
    selectSizeOPrice:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('on load');
    // this.data.goodsId = options.id
    this.data.goodsId = 5781
    console.log(this.data.goodsId)
  },
  async getGoodsDetailAndKanjieInfo(goodsId) {
    // network /goods/:id
    const goodsDetailRes = await WXAPI.goodsDetail(goodsId)
    //为了调试有视屏的商品详情而做，以后要删除
    // goodsDetailRes.data.basicInfo.videoId = '123'
    // console.log(goodsDetailRes)
    this.setData({
      goodsDetail: goodsDetailRes.data,
      selectSizePrice:goodsDetailRes.data.basicInfo.minPrice,
      selectSizeOPrice:goodsDetailRes.data.basicInfo.originalPrice,
    })
  },
  //小程序值允许分享到个人， 群里， 但是不可以直接分享到朋友圈
  async drawSharePic(){
    //用户权限 登陆
    const qrcodeRes = await WXAPI.wxaQrcode({
      scene: this.data.goodsDetail.basicInfo.id + ',1111' ,
      page: 'pages/goods/details',
      is_hyaline: true,
      autoColor: true,
      expireHours: 1
    })
    console.log(qrcodeRes)
  },
  onReady: function () {
    console.log('on ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('on show');
    // 晚一点去做数据请求 css + html 完成页面结构的绘制
    this.getGoodsDetailAndKanjieInfo(this.data.goodsId)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('on hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('on unload');
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
    let _data = {
      title: this.data.goodsDetail.basicInfo.name,
      path: '/pages/goods/details?id=' + this.data.goodsDetail.basicInfo.id ,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
    return _data
  }
})