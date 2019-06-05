//app.js



App({
  onLaunch: function () {
    
  },
  globalData: {
    types: [{
      type: 1, //歌曲分类id
      text: '新歌', // tab切换标题
      title: '新歌榜' // 列表页面标题
    }, {
      type: 16,
      text: '流行',
      title: '流行音乐'
    }, {
      type: 21,
      text: '欧美',
      title: '欧美金曲'
    }, {
      type: 25,
      text: '网络',
      title: '网络神曲'
    }, {
      type: 11,
      text: '摇滚',
      title: '摇滚重金属'
    }]
  },
  api:{
    baseURL:'http://tingapi.ting.baidu.com/v1/restserver/ting',
    getData(data={},options={}){
      return new Promise((resolve,reject)=>{
        wx.request({
          url:this.baseURL,
          data:{
            method:'baidu.ting.billboard.billList',
            offset: 0,
            ...data
          },
          success({data}) {
            resolve(data);
          },
          fail(err){
            reject(err)
          }
        })
      });
    }
  }
})