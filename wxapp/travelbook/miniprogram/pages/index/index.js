Page({
  startAccounts() {
    // 微信小程序内置API
    wx.showLoading({
      title: '旅程即将开始'
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.navigateTo({
        url: '../accountBooks/accountBooks'
      })
    }, 600);
  }
})
