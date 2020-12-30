-    if (this.data.listType == 1) {
        this.setData({
            listType: 2
        })
        } 
    else {
        this.setData({
            listType: 1
        })
    }
- 生命周期
    谁先发生， 适合做什莫
    onLoad 加载wxml, wxss js 加载的资源最少
    onShow wxml + wxss 需要进行渲染，js 还没有执行完 还不能交互
    onready