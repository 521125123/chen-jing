- es6 class 与 es5 构造函数+prototype 有什莫关系
    语法糖 那些？ 

- babel  babel 的使命就来了。
    es6 class 不停的更新, 每个版本, 意义
    俞老师 node 10  我的版本: 14
    运行环境就不一样
    babel 负责 
    js 的运行环境太复杂了, 不是单纯的chrom, ie, 360, qq, 支持不同的版本。node 的不同的版本，怎末办？            babel解决这些, 写出来。


- 一线公司问？
    es6 提供了class关键字  
    语法糖, 其实它还是原型是继承。
    像大型语言, 传统面向对象的写法
    请问es6 class关键字 实现除了刚刚讲的，有什莫不一样的地方吗?
    1. ES6 class 构造函数在constructor只能被new, 不能作为普通函数执行。
        - 如果要你去设计的话？ 怎末实现？
    2. Person.prototype 不可枚举
        Object.keys()
        Object.getOwnPropertyNames() 可调用
    - ES6 还有比ES5 实现丰富的地方？
        es6 里声明属性的时候有一个高级的方法
    - 手写一个babel 手写es6 class 的转义代码
        babel 也是可以写出来的。
1. babel js 转义 帮助es6 class -> es5 function