// 引用类型 
             // 基本数据类型   引用数据类型(Array Function object)
// 存储的元素          值              地址(指针)
//                    栈               堆
let a1 = 1;
    b1 = a1;
    b1 = 2;
console.log(a1);

const a = [];
const b = a;
b.push(1);
console.log(a);

function test(person) {  // 引用
    person.age = 26;
    person = {   // person 不再是p1 引用类型  const person 常量 找地址的时候 不找, 重新分配地址
        name: 'yyy',
        age: 30
    }
    return person;
}
const p1 = {
    name: 'yck',
    age: 25
}
const p2 = test(p1);
console.log(p1);  // age=26
console.log(p2);  // 30 yyy