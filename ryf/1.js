// 函数 对象
// js 类型
let a=1;   //  let  es6中的语言 const是常量(不能在改变他的类型)
let v;   //声明变量  undefined(类型未定义)
console.log(typeof v);
v=0;
console.log(typeof v);
const b="hello";
const arr = [1,2,3];
console.log(typeof arr);// object
const obj= {a:1};
obj.b=2;
arr.push(4);
console.log(arr);
function Cart(){
    this.type="折耳";
}
Cart.prototype.sayHello = function(){
    console.log("喵喵");
}