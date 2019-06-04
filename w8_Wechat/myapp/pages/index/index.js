//index.js
//获取应用实例
const app = getApp(true);

import regeneratorRuntime from '../../utils/runtime.js';

Page({
  data: {
    recommends: [],
    tabs: app.globalData.types,
    tabWidth: 0, //高亮线条宽度
    activeIndex: 0, //当前高亮tab的索引值
    sliderOffset: 0, //高亮线条left值
    tabData:{}, //存放所有标签页数据
    list_hot:[],
    list_new:[]
  },
  //事件处理函数
  goto(e) {
    wx.reLaunch({
      url: '/pages/cart/cart',
    })
  },

  changeTab(e){
    let {idx,type} = e.currentTarget.dataset;
    this.setData({
      activeIndex: idx,
      sliderOffset: this.data.tabWidth * idx
    });

    //获取切换标签的数据
   !this.data.tabData[type] && this.getTabData(type);

    
  },

  async getTabData(type,size=3){
    let data = await app.api.getData({
      method: 'baidu.ting.billboard.billList',
      type,
      size,
      offset: 0
    });

    let tabData = this.data.tabData;
    tabData[type] = data.song_list

    this.setData({
      tabData
    })
  },

  onLoad: function() {
    let {
      tabs
    } = this.data;

    
    wx.getSystemInfo({
      success: res => {
        // 计算宽度
        let tabWidth = res.windowWidth / tabs.length;

        this.setData({
          // 设置tab标签高亮线条宽度
          tabWidth,

          // 设置tab标签高亮线条left值
          sliderOffset: res.windowWidth / tabs.length * this.data.activeIndex
        });
      }
    });
  },
  async onReady() {
    // 获取当前高亮tab的信息
    let type = this.data.tabs[this.data.activeIndex].type
    this.getTabData(type);


    // 新歌与热歌
    let {song_list:list_new} = await app.api.getData({
      method: 'baidu.ting.billboard.billList',
      type:1,
      size:5,
      offset: 0
    });
    let { song_list: list_hot } = await app.api.getData({
      method: 'baidu.ting.billboard.billList',
      type: 2,
      size: 5,
      offset: 0
    });

    let recommends = [...list_hot.slice(0,2),...list_new.slice(0,2)]

    this.setData({
      recommends,
      list_hot,
      list_new
    })

  },
  onShow() {

  }
})