// pages/video/video.js
function getRandomColor(){
  let rgb=[];
  for(let i=0;i<3;i++){
    let color=Math.floor(Math.random()*256).toString(16);
    color=(color.length==1)?"0"+color:color;
    rgb.push(color)
  }
  return '#'+rgb.join('');
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://img.tukuppt.com/video_show/6148569/00/10/85/5d81a3c61a64b.mp4',
    // videoCtx:'',
    list:[
      {
        id:'1',
        title:'森林阳光实拍（有音乐）背景视频素材',
        videoUrl:'https://img.tukuppt.com/video_show/2475824/00/02/19/5b527330214a6_10s.mp4'
      },
      {
        id: '2',
        title: '金色粒子漂移礼花燃放闪耀明亮(有音乐)背景视频素材',
        videoUrl: 'https://img.tukuppt.com/video_show/2414777/00/02/23/5b5303d093761_10s.mp4'
      },
      {
        id: '3',
        title: '震撼梦幻企业年会开场片头AE模板',
        videoUrl: 'https://img.tukuppt.com/video_show/2405811/00/02/45/5b65c424f3234_10s.mp4'
      }
      
    ],
    danmuTxt:'',
    danmuValue:''
  },
  getDanmu:function(e){
    this.setData({
      danmuTxt:e.detail.value
    })
    // console.log(e);
  },
  change: function (that) {
    
    that.setData({
      danmuValue: ''
    })
  },
  sendDanmu:function(e){
    
    this.change(this);
    let text=this.data.danmuTxt;
    this.VideoContext.sendDanmu({
      text:text,
      color:getRandomColor()
    })
    
  },
  playVideo:function(e){
    // 停止播放之前正在播放的视频
    this.VideoContext.stop();
    // console.log(e)
    this.setData({
      src:e.currentTarget.dataset.url
    });
    this.VideoContext.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.VideoContext=wx.createVideoContext("myvideo");
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