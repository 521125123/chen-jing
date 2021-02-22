// es6 提供了class关键字  
// 语法糖, 其实它还是原型是继承。
// 像大型语言, 传统面向对象的写法
// 接几招？
class Person {
    // 新写法
    count = 0
    constructor(name) {
        this.name = name;
    }
    sayHello () {
        return 'hello , i am ' + this.name;
    }
}
const kevin = new Person('Kevin');
// 可访问, 但是不可枚举 es6 属性和方法 更细节的功能？

console.log(kevin.__proto__,Person.prototype);
// console.log(kevin.sayHello());
// Object.keys? 是什莫？
// es6 里可枚举怎么实现？
console.log(Object.keys(Person.prototype))// 可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype));