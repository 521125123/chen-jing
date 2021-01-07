// 阮一峰面向对象第二篇
function Animal(name) {
    console.log(arguments);
    this.name = name;
    this.species = "动物"
}
//Animal -> Function
//函数是一等对象 Object
// 拿到函数的原型链上的方法, 靠它
// console.log(Animal.__proto__);
function Cat(name,color) {
    // 拿到Animal 的属性的 ?  怎么归Cat所有呢
    // call借用以下， 指定内部的this 为当前的this
    // console.log(arguments);
    // Animal.apply(this,arguments);//  apply就要打包传过去 父类要参数时加arguments
    Animal.call(this,...arguments);// call传参要一个个传
    // this.name = name;
    this.color = color;
}
var cat1 = new Cat('大毛','黄色');
console.log(cat1.species);
// 猫应该是 Animal 的子类, 类的继承 怎么算Animal的子类