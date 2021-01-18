'use strict';//启用严格模式
var obj = { // json object
    bar: 1,
    foo:function(){  //obj 属性
        console.log(this.bar)
    }
}

var foo = obj.foo; //foo 函数
let bar = 2;
obj.foo(); //this 会指向obj本身 
foo() // this 指向普通函数
