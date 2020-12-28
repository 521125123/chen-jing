# JS 的灵魂在函数，函数的灵魂在匿名函数
- 匿名函数const funcA =function (){} 命名要标明类型例如funA表示function类型
-   ```js
    (function (){ //匿名函数
        let foo=10;
        let bar=2;
        console.log(foo*bar);
    })();//匿名函数与立即执行函数结合起来，立即函数可以去做闭包
    ```
- 变形传参：
    ```js
    (function (foo,bar){ //匿名函数
        console.log(foo*bar);
    })(20,3);
    ```
- 变形值交给外界：
    ```js
    let res = (function (foo,bar){ //匿名函数
        console.log(foo*bar);
    })(20,3);
    ```


- 作为图书管理系统， 写个书的入库类
    JS 面向对象 class 关键字来的比较晚， 用function 来构造类
    JS类优点像火车， 火车头，车身
    ```js
    // 单独构造函数就成为一个类
        function Book(isbn,title,author){
            this.isbn=isbn;
            this.title=title;
            this.author=author;
        }
    ```
- 构造函数与普通法函数的区别：
    构造函数:生产实例  孩子多多 constructor？
    this...
    this...
    一步步来， 构造过程 女娲捏人
    1. 构造函数函数名首字母大写
    2. 运行的方式()() new fn()
    new的时候会把构造函数执行一下，并且this指向当前对象
    Book(); //指向window
    new Book();//指向Book
    let js_dontKnow = new Book('111');//指向实例化的对象js_dontKnow
    3. this 指向实例
    4. 对象上， 原型对象都是Object
    5. Obiect 是顶层对象，也是一个函数 new Object(){}
    6. 任何一个函数都有一个prototype属性 火车身
    7. 任何一个对象实例都一定有__proto__私有属性 任何一个对象，都有以一个原型_proto_属性会告诉我们他的原型
        指向原型对象， 基于原型的
        js_dontKnow.__proto__ == Book.prototype
            true
        js_dontKnow.__proto__.__proto__ ==Object.prototype
            true
        js_dontKnow.__proto__.__proto__ .__proto__
            null
        js_dontKnow.display();这个实例没有这个display()属性，有属性title
            拥有这个方法是因为基于原型继承父类的方法
       
    8. 原型链    只要链上有，就可以调用 js_dontKnow.toString()
        Book.prototype.isPrototypeOf(js_dontKnow)//js_dontKonw是否能用Book上的原型链
        js_dontKnow.hasOwnProperty('dispaly')  判断js_dontKnow是否包含dispaly属性