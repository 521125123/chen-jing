# 把面试题当成高考题
- js
    1. 以题目来检验下当前js之所学 推动之
        黄岗中学 出试卷
    2. 衡水一中
        出清华方法论的

        1. 打卡 课后做的任何事情
        2. 能力增长点
        JS能力
    
- null和undefind的区别是什么？
 Object.prototype.__proto__ ==null
- 有哪些情况会是undefined？
    1. let a;   //声明, 没有赋值
        //变量声明时,JS类型由值来决定
        console.log(typeof a);
    2. // 函数没有返回值
    const fnNoRturn = () =>{}
    console.log(fnNoRturn());
    3. 参数不传值
        const fn = (b) =>{
        函数一运行就会有的   this指针
        console.log(arguments);
        console.log(typeof b);
        }
        fn();
    4. 应用了对象不存在的对象的Key
        const o = {c:'1'};
        console.log(o.d,'4');//undefined
        console.log(zr) // 调用了没有声明的变量 语法错误
- Undefined 意义是类型, 当一个声明了一个变量未初始化时,得到的是undefined
    1. 箭头函数和普通函数不一样
        es5时代的arguments 有用的
        不只是便利,也被干掉了arguments
        () => {}   ()  {}都可以省略arguments 但是es6的一种rest运算符(...),把外面传的值全部吸进来
        function() {}
    2. Object的原型对象
        new Object()
        Object(函数).prototype
        父(原型)对象
        Object(函数).prototype.__proto__
        为什么？
            Object的头上,到顶了,不应该有对象,null表示此处不应该有对象
             跟禅宗一样,充满着智慧
- 给出数组尾部/头部 加、删除的方法
    1. arr.push(6);//面向对象的 
    console.log(arr.pop()); 
    console.log(arr); 
    2. arr.unshift(1);//在队头插入元素
    console.log(arr); 
    arr.shift(1);//在队头删除元素
- 把数组打印出来,有多少总方法
    1. for(let num in arr){
        console.log(num);
    }
    2. arr.forEach(item =>{
        console.log(item);
    })
    3. console.log(arr.join(" "));
    console.log(arr); 
    4. console.log(arr.splice(0,length));
    5. console.log(arr.map(item => item));
- DOM查找元素方法 找到所有.box元素有什么方法
    1. console.log(document.querySelectorAll('.box'));
    2. console.log(document.getElementsByTagName('div'));
    3. console.log(document.getElementsByClassName('box'));
- DOM查找元素方法 查找第一个#b1 有哪些方法
    1. console.log(document.getElementById('b1'));
    2. console.log(document.querySelectorAll('#b1'));
    3. console.log(document.getElementsByClassName('box')[0],'------');
- DOM查找元素方法 查找第一个p元素有哪些方法
    1. console.log(document.getElementsByTagName('p')[0]);
    2. console.log(document.querySelector('p'));
    3. console.log(document.getElementsByTagName("div")[1].children[0]);
    4. console.log(document.querySelector("div p"));
    5. console.log(document.getElementsByName('b2')[0].children[0],'-----------');
- 选择元素可以通过标签、id、选择器()、类名、子元素(),
    任何元素都有这些方法,不限document