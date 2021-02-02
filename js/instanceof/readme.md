- instanceof
- 手写一个 instance_of函数
- 原型三者关系
    类(构造函数+原型对象) 实例对象
    Constructor.prototype = 原型对象
    原型对象.constructor = 构造函数
     实例对象.__proto__ = 原型对象
     instanceof 原型对象的两种表示, 或者延着原型链不停的查找