//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util');
Page({
  data: {
    todos:[{
      id:1609401854644,
      text:'买一部手机',
      statu:'2'
    },{
      id:1609401854644,
      text:'考过六级',
      statu:'2'
    },{
      id:1609401854644,
      text:'进入字节',
      statu:'3'
    }],
    delBtnWidth: 120, // 删除按钮宽度单位（rpx）
    lis:[],
    addText:'',
    addShow:false,
    focus:false,
    status:'1',
    userInfo: {},
    motto: 'Hello World',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
//下面为我自己调试的代码
touchS: function (e) {
  // console.log('开始：' + JSON.stringify(e))
  // 是否只有一个触摸点
  if(e.touches.length === 1){
    this.setData({
      // 触摸起始的X坐标
      startX: e.touches[0].clientX
    })
  }
},



touchM: function (e) {
  // console.log('移动：' + JSON.stringify(e))
  var _this = this
  if(e.touches.length === 1){
   // 触摸点的X坐标
    var moveX = e.touches[0].clientX
    // 计算手指起始点的X坐标与当前触摸点的X坐标的差值
    var disX = _this.data.startX - moveX
   // delBtnWidth 为右侧按钮区域的宽度
    var delBtnWidth = _this.data.delBtnWidth
    var txtStyle = ''
    if (disX == 0 || disX < 0){ // 如果移动距离小于等于0，文本层位置不变
      txtStyle = 'left:0'
    } else if (disX > 0 ){ // 移动距离大于0，文本层left值等于手指移动距离
      txtStyle = 'left:-' + disX + 'rpx'
      if(disX >= delBtnWidth){
        // 控制手指移动距离最大值为删除按钮的宽度
        txtStyle = 'left:-' + delBtnWidth + 'rpx'
      }
    }
    // 获取手指触摸的是哪一个item
    var index = e.currentTarget.dataset.index;
    var li = _this.data.todos
    // 将拼接好的样式设置到当前item中
    li[index].txtStyle = txtStyle
    // 更新列表的状态
    this.setData({
      todos: li
    });
  }
},




touchE: function (e) {
  // console.log('停止：' + JSON.stringify(e))
  var _this = this
  if(e.changedTouches.length === 1){
    // 手指移动结束后触摸点位置的X坐标
    var endX = e.changedTouches[0].clientX
    // 触摸开始与结束，手指移动的距离
    var disX = _this.data.startX - endX
    var delBtnWidth = _this.data.delBtnWidth
    // 如果距离小于删除按钮的1/2，不显示删除按钮
    var txtStyle = disX > delBtnWidth/2 ? 'left:-' + delBtnWidth + 'rpx' : 'left:0'
    // 获取手指触摸的是哪一项
    var index = e.currentTarget.dataset.index
    var li = _this.data.todos
    li[index].txtStyle = txtStyle
    // 更新列表的状态
    _this.setData({
      todos: li
    });
  }
},














  //下面为老师调试代码
  showStatus(e){
    let status = e.
    currentTarget.dataset.status;
   this.setData({
      status:this.data.todos[i].statu
    })
  },








  setInput(e){
    this.setData({
      addText:e.detail.value
    })
  },
  addTodoHide(){
    this.setData({
      addShow:false,//电影拉幕一样出来表单
      focus:false
    })
  },
  addTodoShow (){
    this.setData({
      addShow:true,//电影拉幕一样出来表单
      focus:true
    })
  },
  addTodo:function(){
    // 加一条todo{ text:'买一部手机',status:0}
    const todo = {text:this.data.addText,status:1,id:new Date().getTime()}
    this.setData({
      todos:[...this.data.todos,todo],
      addShow:false
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(utils.formatTime(new Date()));
    console.log(this.data.todos[0].text);
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
