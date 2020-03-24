const app = getApp()

Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    title: 'this is a test',
    selectedColor: "#1296db",
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})