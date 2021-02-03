// miniprogram/pages/shop_tail/shop_tail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popUpHidden:false, //购物弹窗是否出现
    clothesID:null,    //进入详情页的数据库_id
    clothesDetail:{},  // 获取_id后的信息对象
    Color:"",          //经过转义的衣服颜色
    size:"",           // 衣服的尺码
    popCartCount:1     // 衣服"+","-"的数量
  },
  // 添加到小程序内置数据库为carts
  toCart() {
    // 逻辑 分成几步， 
    // 1. 加入购物车
    // 2. 关闭
    if(this.data.Color == "" || this.data.size == ""){
      wx.showToast({
        title: '请选择尺码颜色'
      })
    }
    else{
      let carts = wx.getStorageSync('carts')||[];
      let index = carts.findIndex(v=>
        v._id === this.data.clothesDetail._id&&
        v.clothcolor === this.data.clothesDetail.clothcolor&&
        v.clothsize === this.data.clothesDetail.clothsize)
        if(index === -1){
          
          this.data.clothesDetail.num = this.data.popCartCount;
          this.data.clothesDetail.checked = false;
          carts.push (this.data.clothesDetail);
        }else{
          carts[index].num = carts[index].num + this.data.popCartCount;
          carts[index].chec
        }
        wx.setStorageSync('carts', carts)
        wx.showToast({
          title: '加入成功',
          icon: 'success',
          mask: true
        });
        this.setData({
          popUpHidden: true
        })
    }
  },
  // - 的功能实现
  minusCount() {
    if(this.data.popCartCount <= 1){
      this.setData({
        popCartCount: 1
      })
    }else{
      this.setData({
        popCartCount: this.data.popCartCount - 1
      })
    }
  },
  // + 的功能实现
  plusCount() {
    this.setData({
      popCartCount: this.data.popCartCount + 1
    })
  },
  // 根据数据中的color转义为中文文字的颜色
  selectColor(e) {
    this.setData({
      Color:e.currentTarget.dataset.color1
    })
    switch(this.data.Color) {
      case 'color1':
        this.setData({
          Color:'米白色'
        })
        break;
      case 'color2':
        this.setData({
          Color:'铅灰色'
        })
        break;  
      case 'color3': 
        this.setData({
          Color:'灰色'
        })
        break;
      case 'color4':
        this.setData({
          Color:'浅灰色'
        })
        break;
      case 'color5':
        this.setData({
          Color:'宝蓝色'
        })
        break;
      case 'color6':
        this.setData({
          Color:'浅蓝色'
        })
        break;  
      case 'color7':
        this.setData({
          Color:'深蓝色'
        }) 
        break;
      case 'color8':
        this.setData({
          Color:'深灰色'
        })
        break;
    }
    this.data.clothesDetail.clothcolor = this.data.Color;
  },
  // 尺码的显示
  selectSize(e) {
    this.setData({
      size:e.currentTarget.dataset.clothesize
    })
    this.data.clothesDetail.clothsize = this.data.size;
  },
  // 点击"确定"后退出弹窗
  addToCart() {
    this.setData({
      popUpHidden: false
    })
  },
  // 点击按钮进入弹窗
  popCancel() {
    this.setData({
      popUpHidden: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取跳转的商品_id
    let _id = options._id;
    this.setData({
      clothesID: _id
    })
    app.getInfoWhere1('youyiku', {_id: _id}, e => {
      this.setData({
        clothesDetail: e.data["0"]
      })
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