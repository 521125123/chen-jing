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
// var a=new Array();    console.log(a instanceof Array);


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


// // 实例
// var dog = new Animal('小黄');
// // dog.canRun();
// // console.log(dog instanceof Animal) //true
// // console.log(Animal.prototype);
// // console.log(dog.__proto__);
// // console.log(dog.__proto__ === Animal.prototype);
// // console.log(instance_of(dog,Animal));
const garfield = new Cat('加菲猫');
// // js对象会延着原型链, 查找 继承的一种方法
// console.log(instance_of(garfield,Cat),'garfield, Cat');
console.log(instance_of(garfield,Animal),'garfield, Animal11111');

// console.log(instance_of(garfield,null),'object');
// // console.log(garfield.__proto__.__proto__ === Animal.prototype,'-------');
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if(typeof left !== 'object' || left === null) return false;
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
    while(true) {                  //循环往下寻找，直到找到相同的原型对象
      if(proto === null) return false;
      if(proto === right.prototype) return true;//找到相同原型对象，返回true
      proto = Object.getPrototypeOf(proto);
      }
  }
  console.log(myInstanceof(garfield,Animal),'garfield, Animal22222');
//   // 验证一下自己实现的myInstanceof是否OK
  
//   console.log(myInstanceof(new Number(123), Number));    // true
  
//   console.log(myInstanceof(123, Number));                // false