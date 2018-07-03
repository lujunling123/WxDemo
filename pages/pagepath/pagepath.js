// pages/psd/psd.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    runimg:[
      { imgpage: "../../image/header1.jpg" },
      { imgpage: "../../image/header2.jpg" },
      { imgpage: "../../image/header3.jpg" }
    ],
    fleximg:[
      { imgpage: "../../image/money.png", title: "联系我们" },
      { imgpage: "../../image/money.png", title: "产品展示" }, 
      { imgpage: "../../image/money.png", title: "公司新闻" },
      { imgpage: "../../image/money.png", title: "关于我们" },
    ],
    progress:[
      { text: "HTML", progressnum: "65" },
      { text: "JS", progressnum: "77" },
      { text: "css", progressnum: "89" },
    ],
    radios:[
      { value: "f", checkeditem: true, text: "女" },
      { value: "m", checkeditem: false, text: "男"  },
      { value: "o", checkeditem: false, text: "其他"  }
    ],
    checkbox:[
      { value: "pingguo", checkeditem: false, text: "苹果"},
      { value: "xiangjiao", checkeditem: false, text: "香蕉" },
      { value: "xueli", checkeditem: false, text: "雪梨" },
      { value: "huolomgguo", checkeditem: false, text: "火龙果" },
    ],
    switchs:[
      { name: 'switch1', checked: false, type: 'switch', changeEventName: "switchchange", text:"加关注"}
    ],
    sellist:['选项一','选项二','选项三'],
    selindex:0,
    seltime:'11:30',
    startTime:'00:00',
    endTime:'24:00',
    inpvalue:'',
    uname:'',
    upass:'',

    // contenttemp1: 'aaa',
    // contenttemp2: 'bbb',
    // src: '../../image/index.png',
    // myobject: {
    //   name:"admin",
    //   age:16
    // },
    // input_data:["admin","lida","myli"],
    // showdiv:false,
    // count: 0
  },
  // change:function(){
  //   console.log('aaa')
  // },
  onfile(){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log('上传的路径：' + tempFilePaths);
        console.log(res)
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', 
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     var data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },
  formSubmit(e){
    console.log(e.detail.value);
  },
  onreset(){},
  changeChoosed:function(event){
    console.log('您选中了：'+event.detail.value)
  },
  checkboxChoosed:function(e){
    console.log("你选择了："+e.detail.value)
  },
  switchchange:function(e){
    var name= e.currentTarget.dataset.name,
    switchs = this.data.switchs,
    i,s;
    for (i = 0; s = switchs[i]; i++){
      if(s.name == name){
        s.checked = e.detail.value;
        if (s.checked==true){
          s.text="已关注"
          console.log(s)
        }else{
          s.text="加关注"
          console.log(s)
        }
        break;
      }
    }
  },
  // countclick:function(){
  //   this.setData({
  //     count: this.data.count +1
  //   })
  // },
  // //前部插入元素函数
  // addToFront: function (e) {
  //   const length = this.data.input_data.length + 1;
  //   this.data.input_data = [{ id: length, unique: 'unique_' + length }].concat(this.data.input_data)
  //   this.setData({
  //     input_data: this.data.input_data
  //   })
  // },
  //随机排序函数
  // switch: function (e) {
  //   const length = this.data.input_data.length
  //   for (let i = 0; i < length; ++i) {
  //     const x = Math.floor(Math.random() * length)
  //     const y = Math.floor(Math.random() * length)
  //     const temp = this.data.input_data[x]
  //     this.data.input_data[x] = this.data.input_data[y]
  //     this.data.input_data[y] = temp
  //   }
  //   this.setData({
  //     input_data: this.data.input_data
  //   })
  // },

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
    this.setData({
      count: 1
    })
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