// pages/details/details.js
let {api} = getApp();
import regeneratorRuntime from '../../utils/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPlayer:null,
    info:{},
    paused:true
  },

  handleDownload(){
    wx.downloadFile({
      url: this.data.info.lrclink,
      success(res){
        console.log(res);

        wx.showToast({
          title: '下载成功',
          icon: 'success',
          duration: 3000
        });
      }
    })
  },

  handlePlay(){console.log(this)
    let { myPlayer,info,paused} = this.data;
    if (!myPlayer){
      // 创建播放器
      myPlayer = wx.createInnerAudioContext();
      myPlayer.src = info.file_link;
      this.setData({
        myPlayer
      })
    }

    // 判断暂停与播放状态
    // 决定是播放操作还是暂停操作
    console.log('myPlayer.paused', myPlayer.paused)
    if (paused){
      myPlayer.play()
    }else{
      myPlayer.pause()
    }
    paused = !paused;

    this.setData({
      paused
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({id:songid}) {
    songid = 614044521;

    let data = await api.getData({
      method:'baidu.ting.song.play',
      songid
    });

    console.log(data)

    this.setData({
      info:{
        ...data.songinfo,
        ...data.bitrate
      }
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