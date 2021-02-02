// 类和实例
// constructor
function instance_of(L,R) {
    var O = R.prototype; // 构造函数的原型对象
    console.log(O);
    L = L.__proto__;
    while(true){
        if(L === null) return false;
        if(L === O){
            return true
        }
        L = L.__proto__;
    }
    // if(L.__proto__ === O){
    //     return true;
    // }else{
    //     return false;
    // }
}


function Animal(name) {
    this.name = name;
}
// 原型对象
Animal.prototype = {
    canRun: function() {
        console.log('it can run!');
    }
}
function Cat() {
    this.speak = '喵';
}
// 将Animal 的实例交给Cat 子类构造函数prototype 属性作为原型对象
Cat.prototype = new Animal('mian');
// 原型对象的constructor 属性, 谁是原型对象的构造函数？
Cat.prototype.constructor = Cat;


// 实例
var dog = new Animal('小黄');
// dog.canRun();
// console.log(dog instanceof Animal) //true
// console.log(Animal.prototype);
// console.log(dog.__proto__);
// console.log(dog.__proto__ === Animal.prototype);
// console.log(instance_of(dog,Animal));
const garfield = new Cat('加菲猫');
// js对象会延着原型链, 查找 继承的一种方法
console.log(instance_of(garfield,Cat),'garfield, Cat');
console.log(instance_of(garfield,Animal),'garfield, Animal');
// console.log(garfield.__proto__.__proto__ === Animal.prototype,'-------');