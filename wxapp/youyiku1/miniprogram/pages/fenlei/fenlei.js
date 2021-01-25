//index.js
const app = getApp()
Page({
  data: {
    textid:0,
    listShow:{},
    img:0,
    change:0,
    imagesarray:[
      '/images/up.png',
      '/images/below.png',
    ],
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"WOMEN",
      },
      {
        id: 1, name: "MEN"
      },
      {
        id: 2, name: "KIDS"
      },
      {
        id: 3, name: "BABY"
      }
    ],
    text:[
     {name:'女装首页' },
     {name:'男装首页'},
     {name:'精选女士'},
     {name:'精选男士'},
    ],
    choose:[
      {name:'INES DE LA FRESSANGE'},
      {name:'Unqile U系列'},
      {name:'+J系列'},
  ],
  choose1:[
    {
      name:'精选男装'
    },
    {
      name:'+J系列'
    },
    {
      name:'JW Anderson合作系列'
    },
    {
      name:'Marrimekko'
    }
  ],
  },
  typeSwitch(e){
    let id = e.currentTarget.dataset.id
    this.setData({
      activeTypeId: e.currentTarget.dataset.id,
      textid:id,
    })
  },
  upfold(e){
    if(this.data.img == 0){
      this.setData({img:1})
    }
    else{
      this.setData({img:0})
    }
  },
  upfolda(e){
    if(this.data.change == 0){
      this.setData({change:1})
    }
    else{
      this.setData({change:0})
    }
  },
 detail(){
    wx.navigateTo({
      url: '/pages/dtail/detail',
    })
  },
  onLoad: function() {
    
    }   
})
