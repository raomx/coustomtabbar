const app = getApp()
Component({
  data: {},
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        if (app.globalData.role === 'host') {
          this.getTabBar().setData({
            list: app.globalData.host,
            selected: 2
          })
        } else {
          this.getTabBar().setData({
            list: app.globalData.client,
            selected: 2
          })
        }
      }
    }
  },
  methods: {
    changeRole() {
      app.globalData.role = app.globalData.role === 'host' ? 'client' : 'host'
      wx.switchTab({
        url: '/pages/message/message'
      })
    },
    onLoad() {
      console.log("mine onLoad")
    }

  }
})