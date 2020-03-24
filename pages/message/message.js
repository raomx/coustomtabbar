const app = getApp()
Component({

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        if (app.globalData.role === 'host') {
          this.getTabBar().setData({
            list: app.globalData.host,
            selected: 0
          })
        } else {
          this.getTabBar().setData({
            list: app.globalData.client,
            selected: 0
          })
        }
      }
    }
  },
  methods: {
    onLoad() {
      console.log("message onLoad")
    }
  }
})