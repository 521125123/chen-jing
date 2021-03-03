// let a = [1,2,3];
// console.log(a.shift());
// // && 与运算
// a.join = a.shift;     // 其中的一种

// 对象 类型转化 1 
const a1 = {
    value: [3,2,1],
    valueOf: function() { return this.value.pop()}
  }
  console.log(a1 == 1 && a1 == 2 && a1 == 3) // true
  const a = {
    value: [3,2,1],
    valueOf: function() { return this.value.pop()}
  }
  console.log(a == 1 && a == 2 && a == 3) // true