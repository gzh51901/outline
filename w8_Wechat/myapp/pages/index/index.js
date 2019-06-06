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
    tabData: {}, //存放所有标签页数据
    list_hot: [],
    list_new: [],
    keyword: '',
  },
  //事件处理函数
  goto(e) {
    let {
      url
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url,
    })
  },

  changeTab(e) {
    let {
      idx,
      type
    } = e.currentTarget.dataset;
    this.setData({
      activeIndex: idx,
      sliderOffset: this.data.tabWidth * idx
    });

    //获取切换标签的数据
    !this.data.tabData[type] && this.getTabData(type);


  },

  async getTabData(type, size = 3) {
    let data = await app.api.getData({
      type,
      size
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

    // 授权
    wx.getSetting({
      success(res) {
        console.log('授权列表：', res)
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success() {
              console.log('摄像头授权成功')
            }
          })
        }else{
          console.log('摄像头已授权')
        }
      }
    })
  },
  async onReady() {
    // 获取当前高亮tab的信息
    let type = this.data.tabs[this.data.activeIndex].type
    this.getTabData(type);


    // 新歌与热歌
    let {
      song_list: list_new
    } = await app.api.getData({
      type: 1,
      size: 5
    });
    let {
      song_list: list_hot
    } = await app.api.getData({
      type: 2,
      size: 5
    });

    // 查找最热门歌曲放到搜索关键字
    let hotest = [...list_hot];
    let keyword = hotest.sort((a, b) => {
      return b.hot - a.hot;
    })[0].title.replace(/(?:（.+）)|(?:《.+》)/g, '');


    let recommends = [...list_hot.slice(0, 2), ...list_new.slice(0, 2)]

    this.setData({
      recommends,
      list_hot,
      list_new,
      keyword
    })

  },
  onShow() {

  },

  takePhoto() {
    // const ctx = wx.createCameraContext()
    // ctx.takePhoto({
    //   quality: 'high',
    //   success: (res) => {
    //     console.log(res)
    //     // this.setData({
    //     //   src: res.tempImagePath
    //     // })
    //   }
    // })

    // wx.chooseImage({
    //   success(res){
    //     console.log(res)
    //   }
    // })

    wx.navigateTo({
      url: '/pages/camera/camera',
    })
  },

  getCamera() {
    wx.getSetting({
      success(res) {
        console.log('授权列表：',res)
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success() {
              let camera = wx.createCameraContext();
              console.log('camera:',camera)
            }
          })
        }
      }
    })
    

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    // 关键是：思路
    return {
      title:"点我有惊喜",
      path:"/pages/search/search?keyword=are you ok",
      imageUrl:'/img/0-9number.jpg'
    }
  }
})