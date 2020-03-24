//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    role: 'client',
    host: [{
      pagePath: "/pages/message/message",
      iconPath: "/images/message_icon.png",
      selectedIconPath: "/images/message_icon_select.png",
      text: "消息"
    }, {
      pagePath: "/pages/order/order",
      iconPath: "/images/order_icon.png",
      selectedIconPath: "/images/order_icon_select.png",
      text: "订单"
    }, {
      pagePath: "/pages/mine/mine",
      iconPath: "/images/mine_icon.png",
      selectedIconPath: "/images/mine_icon_select.png",
      text: "我的"
    }],
    client: [{
      pagePath: "/pages/message/message",
      iconPath: "/images/message_icon.png",
      selectedIconPath: "/images/message_icon_select.png",
      text: "消息"
    }, {
      pagePath: "/pages/check/check",
      iconPath: "/images/order_icon.png",
      selectedIconPath: "/images/order_icon_select.png",
      text: "入住"
    }, {
      pagePath: "/pages/mine/mine",
      iconPath: "/images/mine_icon.png",
      selectedIconPath: "/images/mine_icon_select.png",
      text: "我的"
    }]
  }
})