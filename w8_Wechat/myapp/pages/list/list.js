// pages/list/list.js
let { api, globalData} = getApp();

import regeneratorRuntime from '../../utils/runtime.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: null, //当前分类id
    datalist: [], // 当前所有数据
    pageNo: 1,    // 当前分页
    loading: false, // 是否显示loading
    hasMore: true   // 是否还有未加载的数据
  },

  async getData(){
    let size = 10;
    let type = this.data.type;
    let { song_list } = await api.getData({
      type,
      size,
      offset: (this.data.pageNo - 1) * size
    });

    let datalist = [...this.data.datalist,...song_list]



    this.setData({
      datalist,
      loading:false,
      hasMore: song_list.length == size
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({type}) {
    // type = 25
    
    this.setData({
      type
    },()=>{
      this.getData()
    })

    // 修改标题
    let currentType = globalData.types.filter(item=>item.type==type)[0];

    if (currentType){
      wx.setNavigationBarTitle({
        title: currentType.title
      })
    }
    

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
  onReachBottom: function () {console.log('触底')
    if(!this.data.hasMore) return;
    this.setData({
      pageNo:this.data.pageNo+1,
      loading:true
    },()=>{
      this.getData()
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})