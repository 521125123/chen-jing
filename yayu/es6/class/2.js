function Person(name){// 构造函数 火车头
    this.name = name;
}
Person.prototype.sayHello = function() {
    return 'hello , i am ' + this.name;
}
// const kevin = new Person('Kevin');
// console.log(kevin.sayHello());
// Person('kkk');
console.log(Person.prototype);
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));