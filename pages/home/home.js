// pages/home/home.js
global._Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: 0,
  },
  mapState(state) {

    return {
      state: state.App.test
    }
  },
  mapGetters(getters) {

    return {
      getter: getters.App.test
    }
  },
  computed: {
    computed() {

      return this.data.state + this.data.data
    }
  },
  watch: {
    data(newv) {
      console.log('watch data', newv)
    },
    state(newv) {
      console.log('watch state', newv)
    },
    getter(newv) {
      console.log('watch getter', newv)
    },
    computed(newv) {
      console.log('watch computed', newv)
    },
  },

  onPageLoad(options) {
    console.log('onPageLoad', options)

    setInterval(() => {
      this.setData({ data: this.data.data + 1 })
    }, 1000);
    setTimeout(() => {
      setInterval(() => {
        this.$store.dispatch('App/setTest')
      }, 1000);
    }, 500);
  },

  onPageShow() {
    console.log('onPageShow')
  },

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