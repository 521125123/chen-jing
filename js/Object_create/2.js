// Object.create 返回一个对象
// 它的原型对象是参数
function Object_create(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name} .Am I human ? ${this.isHuman}');
    }
}
const me = Object_create(person);
console.log(me.isHuman);
console.log(me.__proto__);
console.log(me.__proto__ === person);
function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
}
function Bar(name,label) {
    Foo.call(this,name);
    this.label = label;
}
Bar.prototype = Object_create(Foo.prototype);
// Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
    return this.label;
}
var a = new Bar("a","obj a");
console.log(a);
console.log(a.myName());
console.log(a.myLabel());
    