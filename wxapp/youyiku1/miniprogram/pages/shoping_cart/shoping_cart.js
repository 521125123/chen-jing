// miniprogram/pagesoping_cartoping_cart.js
const app = getApp(); //全局方法， app.js 定义的全局方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartsInfo:[],  //购物车中的数据数组
    hasCarts:true, //购物车是否有数据
    clothesInfo:[], // youyiku中的衣服数据数组
    allChecked:false, // 全选按钮
    hasdelivery:false, // 快速配速的按钮
    totalPrice:0,   // 总价格
    totalNum:0      // 总数量
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
  // 点击"+","-"数量变化
  handleCount(e) {
    // 1. 獲取传递过来的参数
    const {operation,cartid,cartcolor,cartsize} = e.currentTarget.dataset;
    // 2. 获取购物车数组
    let {cartsInfo} = this.data;
    // 3. 找到需要修改的商品的索引
    const index = cartsInfo.findIndex(v=>
      v._id === cartid&&
      v.clothcolor === cartcolor&&
      v.clothsize === cartsize)
    // 4. 进行数量修改
    cartsInfo[index].num+=operation;
    // 5. 设置回缓存和data中
    this.setCarts(cartsInfo);
  },
  // hasItemchange(e) 商品选中
  hasItemchange(e) {
    // 1. 获取复选框点击的商品
    const {cartid,cartcolor,cartsize} = e.currentTarget.dataset;
    // 2. 获取购物车数组
    let {cartsInfo} = this.data;
    // 3. 找到被修改的商品对象
    const index = cartsInfo.findIndex(v=>
      v._id === cartid&&
      v.clothcolor === cartcolor&&
      v.clothsize === cartsize);
    // 4. 选中状态取反
    cartsInfo[index].checked = !cartsInfo[index].checked;
    // 5. 把购物车数据重新设置回data和缓存中
    this.setCarts(cartsInfo);
  },
  // 封装 设置购物车状态同时 重新计算 底部工具栏的数据 全选 总价格 购买的数量
  setCarts(carts) {
    let allChecked = true;
    let allPrice = 0;
    let allNum = 0;
    carts.forEach(v=>{
      if(v.checked){
        allPrice+=v.num*parseFloat(v.price);
        allNum+=v.num;
      }else{
        allChecked = false;
      }
      
    })
    this.setData({
      cartsInfo: carts, 
      allChecked:allChecked,
      totalPrice:allPrice,
      totalNum:allNum
    });
    wx.setStorageSync('carts', carts);
  },
  // 快速配速的功能
  Allitemdelivery(){
    let {hasdelivery,allChecked,cartsInfo} = this.data;
    hasdelivery = !hasdelivery;
    this.setData({
      hasdelivery:hasdelivery
    });
    allChecked = !allChecked;
    cartsInfo.forEach(v=>{
      v.checked = allChecked;
    });
    this.setCarts(cartsInfo);
  },
  // 全选按钮的实现
  Allitemcheck() {
    // 让快速配速的按钮选中
    let {hasdelivery} = this.data;
    hasdelivery = !hasdelivery
    this.setData({
      hasdelivery:hasdelivery
    })
    // 1. 获取data中的数据
    let {cartsInfo,allChecked} = this.data;
    // 2. 修改值
    allChecked = !allChecked;
    // 3. 循环修改cartsInfo数组 中的商品选中数据
    cartsInfo.forEach(v=>{
      v.checked = allChecked;
    })
    // 4. 修改后的值 填充回data中 或缓存中
    this.setCarts(cartsInfo);
  },
  // 删除按钮的功能
  cartsDelete(e) {
    // 1. 找到删除的商品元素
    const {cartid,cartcolor,cartsize} = e.currentTarget.dataset;
    // 2. 获取购物车数组
    let {cartsInfo} = this.data;
    // 3. 找到要删除的商品对象
    const index = cartsInfo.findIndex(v=>
      v._id === cartid&&
      v.clothcolor === cartcolor&&
      v.clothsize === cartsize);
    // 4. 删除商品
    cartsInfo.splice(index,1);
    // cartsInfo回到缓存中
    if(cartsInfo.length == 0){
      this.setData({
        hasCarts:true
      })
    }
    this.setCarts(cartsInfo);
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
    const carts = wx.getStorageSync('carts')||[];
    if(carts.length != 0){
      this.setData({
        cartsInfo: carts, 
        hasCarts: false,
      });
    }
    this.setCarts(carts);
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