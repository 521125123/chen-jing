# 字节h5面试题之Drag and Drop
良好的用户体验, 
1. 基础好， 细节 , 能力增长梯度
2. 比较复杂的特效

## github 拖拽上传功能
1. 给要拖拽的元素 加一个 draggable="true",curor:move
2. 拖拽元素在上空的感觉
3. drag 有三个事件,
    Evrnt机制 495
    on + 495 DOM Event level
    - dragstart
    - drag
    - dragend

    drop 异步
    - dropenter   当我们开始进入的时候 border dashed classList.add
    - dragover    多次在目的地的头上
    - leave 离开   classList.remove
    drag + drop 良好用户体验模拟API 比较复杂
    draggable="true"
    dragstart drag dragend
    dragenter dragover dragleave + drop
    阻止APP的默认行为 event.preventDefault()
    oForm submit
- github 拖拽上传功能中巨大的坑
    巨坑1：大部分APP和浏览器会有默认的拖拽行为(会用整个显示拖拽内容)
        event.preventDefault()可以阻止
    巨坑2：在一个盒子下的五个元素， 怎么设置它的事件？
        解释:js 事件有冒泡机制 可以设置事件在它们的父元素上
        document
        .getElementById('left')
        .addEventListener('dragstart', () => {
        console.log('父元素上');
        })
        但会有 event.target会监听哪个子元素发生拖拽
    作业: 请完成拖回去 
- 本次讲课设计的技术:
    1. display: flex;
      justify-content:space-around;进行全部都有空隙
    2. cursor:move 拖拽时鼠标会变成手
    3. event.dataTransfer.setData('Text', target.id)
           拖拽， dataTransfer 属性 邮寄一个包裹把数据带上去
        event.dataTransfer.getData('Text');
            得到包裹Text('key')中的值
    4. addEventListener 添加事件处理(一般有三个属性) 
        1.事件名 2.事件处理函数 3.一个布尔值
    5. 各种on+事件名：
        ondrag	        当某个对象被拖动时触发此事件 [活动事件]
        ondragdrop	    一个外部对象被鼠标拖进当前窗口或者帧
        ondragend	    当鼠标拖动结束时触发此事件，即鼠标的按钮被释放了
        ondragenter	    当对象被鼠标拖动的对象进入其容器范围内时触发此事件
        ondragleave	    当对象被鼠标拖动的对象离开其容器范围内时触发此事件
        ondragover	    当某被拖动的对象在另一对象容器范围内拖动时触发此事
        ondragstart	    当某对象将被拖动时触发此事件
        ondrop	        在一个拖动过程中，释放鼠标键时触发此事件
    6.  target.appendChild(document.getElementById(drag_id))
        向target下最后一个结点后添加一个子节点
    7. function handle_leave(event) {
        event.preventDefault();
        target.classList.remove('hover');
    }在触发函数handle_leave时, 添加css(.hover)