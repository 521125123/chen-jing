//有哪些情况会是undefined？
let a;   //声明, 没有赋值
//变量声明时,JS类型由值来决定
console.log(typeof a);//  undefined    1
// 函数没有返回值
const fnNoRturn = () =>{}
console.log(fnNoRturn());//  undefined    2
//参数不传值
const fn = (b) =>{
    //函数一运行就会有的   this指针
    console.log(arguments);
    console.log(typeof b);
}
// console.log(fn(1,2,3));
// const o = {c:'1'};
console.log(o.d,'4');//undefined
console.log(zr)//语法错误
console.log(null == undefined);//要求值相等 true
console.log(null === undefined);// false

