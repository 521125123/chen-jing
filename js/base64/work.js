this.addEventListener('message', (e) => {// 消息监听
    // console.log(e);
    console.log(document.body);
    this.postMessage('Your said: ' + e.data);
})