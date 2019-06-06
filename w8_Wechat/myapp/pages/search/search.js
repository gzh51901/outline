// pages/search/search.js
let {api} = getApp();
import regeneratorRuntime from '../../utils/runtime.js'; // 单例模式

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    inputShowed:true,
    datalist:[],
    timer:null
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      keyword: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      keyword: ""
    });
  },
  inputTyping: function (e) {
    let keyword = e.detail.value
    this.setData({
      keyword
    });

    // 函数防抖
    clearTimeout(this.data.timer);

    let timer = setTimeout(()=>{
      this.getData(keyword);
    },800)

    this.setData({
      timer
    })
    
  },

  async getData(keyword){
    let {song} = await api.getData({
      method:'baidu.ting.search.catalogSug',
      query: keyword || this.data.keyword
    });

    if(song){
      this.setData({
        datalist:song
      })
    }
    
  
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {keyword} = options;console.log(keyword,options)
    // keyword = '心如止水';

    this.setData({
      keyword
    });

    this.getData(keyword);

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