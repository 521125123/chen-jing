// [] Object Array []   ![]
// 直观上它是矛盾的 

// 类型转换 隐式 只有三种 数值 字符串 布尔值
// [] 转换 Boolean
// 什么东西触发类型转换？ ==(触发)
// [] => false  Boolean
// console.log([] == true);
// console.log({} =={});  // false  对象的地址不一样
console.log([] == ![]); // true   ==
console.log(Number([]));
console.log(String([1,2,3]),'String');
// ![] 优先级高  ![] 转换成布尔值
console.log(Boolean([]),'------');
console.log(Number(false),'++++');
console.log(Number(![]));
console.log(Boolean([]) == Boolean(![])) // 显示的类型转换  数字  0
// 0 == 0