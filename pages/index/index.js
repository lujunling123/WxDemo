//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    lefthome:"left:-128pt",
    righthome:"left:0pt",
    openleft:1,
    runimg:[
      { imgpage: "../../image/header1.jpg" },
      { imgpage: "../../image/header2.jpg" },
      { imgpage: "../../image/header3.jpg" }
    ],
    titlep: [
      { imgpage: "../../image/link.png", title: '联系我们', style:"background: #01b387;", urlpage: "../linkeme/linkeme" },
      { imgpage: "../../image/news.png", title: '新闻中心', style: "background: #334a81;", urlpage: "../news/news" },
      { imgpage: "../../image/produce.png", title: '产品展示', style: "background: #e75a49;", urlpage: "../product/product" },
      { imgpage: "../../image/show.png", title: '公司荣誉', style: "background: #42641e;", urlpage: "../product/product" },
      { imgpage: "../../image/about.png", title: '关于我们', style: "background: #f1d84c;", urlpage: "../product/product" }
    ],
    productimg: [
      { imgpage: "../../image/header1.jpg", title: '茶π', urlpage:"../linkeme/linkeme" },
      { imgpage: "../../image/header2.jpg", title: '西柚茉莉花茶', urlpage: "../news/news"  },
      { imgpage: "../../image/header3.jpg", title: '农夫山泉', urlpage: "../product/product"  },
      { imgpage: "../../image/header2.jpg", title: '开盖有惊喜', urlpage: "../product/product" }
    ],
    news:[
      { imgpage: "../../image/header1.jpg", title: 'Warm you', content: "hold me hed! me" },
      { imgpage: "../../image/header2.jpg", title: '西柚茉莉花茶', content: "农夫山泉，冰露，获特满，雀巢冰露、碧纯、雪菲力、石源碧泉、每滴等多个品牌" },
    ],

    markers: [{
      iconPath: "../../image/link.png",
      id: 0,
      label:"杭州葫芦娃网络科技有限公司",
      latitude: 30.303790,
      longitude: 120.372150,
      width: 50,
      height: 50,
      callout:{
        content:"杭州葫芦娃网络科技有限公司",
        color:"red"
      }
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/link.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]

    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  openTitle:function(e){
    if (e.currentTarget.dataset.hi=="true"){
      this.setData({
        openleft: this.data.openleft + 1,
      })
      if (this.data.openleft % 2 == 0) {
        this.setData({
          lefthome: "left:0pt;position:fixed;",
          righthome: "left:128pt;opacity:0.7;",
        })
      } else {
        this.setData({
          lefthome: "left:-128pt",
          righthome: "left:0pt;opacity:1;",
        })
      }
    }    
  },
  closeTitle:function(){
    this.setData({
      lefthome: "left:-128pt",
      righthome: "left:0pt",
    })
  },
  tabLoad(e){
    var src=e.currentTarget.dataset.li;
    console.log(e)
    wx.navigateTo({
      url: src, 
      success:function() {
        console.log('aaa')
       }      
    })
  }
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
