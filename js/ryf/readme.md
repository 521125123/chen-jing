# 在js中，万物皆是对象
- 阮一峰


    1. JS变量的数据类型由值决定。
        常量的话，es6以前没有常量   var
        - 类型不可改变
        - 简单类型的值不可改变，复杂数据类型的值是可以改变的
        - 数值型、字符串、布尔值、undifined、null、symbol、   对象（值可变）
        （数组、函数）

    2. typeof [1,2,3] 如何知道是数组？
        - 区分简单数据类型和复杂数据类型
        - 复杂数据类型中function
        - typeof 可以正确（不能细致地）得到数据类型
        - （number,string,boolbean,null,indefined, symbol,object(array,function)）
        - ["number","boolean","function","string"].indexOf(type)判断type是否在[]数组中，在就会>0,反之亦然
    3. js会默认的给函数一个属性---prototype
        - Object.prototype.toString.call(o)  核心
        - 每一个函数都有一个属性叫做prototype，这个prototype的属性值是一个对象（属性的集合），
        原型既然作为对象，属性的集合，肯定可以自定义的增加许多属性，object这个渣男就有construtor,toString.....
        例如:
            Cat.prototype.eat = function(){
                console.log("老鼠");//是属于原型链对象
                } 
            Cat.prototype.type="猫科动物"; new 的执行一定会执行 内存的分配
        - Object 是谁?    所有对象的原型对象？ 这种机制怎么构建起来  
        - call（各种借给）object的toString方法会借给o这个实例使用
- call apply  借用方法  fn.call(绑定this,参数1,参数2......)
fn.applyfn.call(绑定this,[参数1,参数2......])


## 继承的几种方式

1. 构造函数绑定
    Animal.apply(this,arguments);//  apply就要打包传过去 父类要参数时加arguments
    Animal.call(this,...arguments);// call传参要一个个传
2. prototype 模式
    Cat.prototype = new Animal(); // 副作用 会把constructor Cat 变成Animal
    Cat.prototype.constructor = Cat;
3. 直接继承prototype
    ```js
    function Animal() {
    }

    Animal.prototype.species = '动物';
    function Cat(name,color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype = Animal.prototype;
    Cat.prototype.constructor = Cat;
    ```
4. 利用空对象作为中介

2跟3, 3的有点效率比较高(不用执行和建立Animal的实例,不需要进行new; 缺点是cat.prototype
和Animal.prototype指向同一个对象,
在理解上不妥,会改变父类的原型对象)