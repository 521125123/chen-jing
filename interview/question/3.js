var a = 0xa  // 这是什么 进制  16
console.log(typeof a);
var b = 010  // 8进制  ？  二进制
var c = 0b01  // 2进制
console.log(c+3);  // 十进制数
console.log(b+19)  // 十进制数
// JS 浮点数不精确  0.3
// JS 没有浮点数类型 Number  new Number()  不适合计算
// JS 转成二进制的时候 会无限的的循环  32位 舍弃一些位 
// 二进制位相加 不准确
console.log(0.1 + 0.2);
console.log((0.1).toString(2));  // toString  传进制数
console.log((0.2).toString(2))

console.log(Number.parseInt('010',8));
console.log(Number.parseInt('20',2));  // 结果是？ NAN not a number


// 跟什么相关? 上溢  大数字 BigInt
// JS Number 类型只能安全的表达 -9007199254740991(-2(^53-1))

console.log(9999999999999999999);  // 10000000000000000000
console.log(9999999999999999999n);
console.log(9007199254740992 === 9007199254740993); // 不安全
console.log(9007199254740992n === 9007199254740993n); 
console.log(10 + 10n);