// symbol
// ES6 引入的新的原始数据类型Symbol  表示独一无二的值
// var sym1 = Symbol();
// var sym2 = Symbol('foo');  // 唯一的
// var sym3 = Symbol('foo');  // 1111
// console.log(sym2 == sym3);
// console.log(typeof sym1); //symbol
// 1. 函数来创建 原始数据类型  冲突的地方？  如何说明  函数用法上有什么区别
// Symbol 是不能被 new    不能被实例化
// 变量都是要分配内存空间的,  原始数据类型(栈分配)
// 引用类型(堆分配)
// Symbol(字符串)？ 有何用？ 作为一个标识
// console.log(sym3.toString());
// 2. Symbol 有何用？

// 精神大条一些  甚至不用给值   Symbol 
// var mySymbol = Symbol();  //初始化   
// var shapeType = { // 形状的类型   json  object
//     triangle: Symbol(),  // 三角形是用来偷懒的。
//     square: Symbol()       // 正方形  
// }
// function getArea(shape,options) {
//     var area = 0;
//     switch(shape) {
//         case shapeType.triangle:
//             area = 0.5 * options.width * options.height;
//         break;
//         case shapeType.square:
//             area = options.width * options.height;
//         break;
//     }
//     return area;
// }
// console.log(getArea(shapeType.triangle, {
//     width: 100,
//     height: 100
// }))

// var s1 = Symbol('foo');
// console.log(s1 instanceof Symbol);  // 原始数据类型

// const obj = {
//     toString() {    // 覆盖Object.prototype.toString()
//         return 'abc';
//     }
// }
// const sym = Symbol(obj);
// console.log(sym.toString());


// var sym = Symbol('My symbol');
// console.log("you symbol is " + sym);  // Cannot convert a Symbol value to a string

// symbol 最为json key 第二种引用场景
// Symbol 可以用于 json key 表示唯一
var obj = {};
var a = Symbol("a");  //  用于JSON  object 添加 key
var b = Symbol("b");

obj[a] = "Hello";     //  偷懒
obj[b] = "world";

obj.cc = 'cc' // 常规  取一个名字
console.log(Object.keys(obj));  // 在Object.keys()中不能遍历出来
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[a]);

for(let key in obj) {
    console.log(obj[key])
}
Object.getOwnPropertySymbols(obj).forEach(item => {
    console.log(obj[item]);
})