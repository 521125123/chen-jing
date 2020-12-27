function Cat(name,color){
    // new 的执行一定会执行 内存的分配
    this.name = name;//this?指向它实例
    this.color = color;
    //this.type = "猫科动物";
    //prototype 要生成的原因
//     this.eat = function(){
//         console.log("老鼠");
//     }
// }
}
//prototype 要生成的原因:
Cat.prototype.eat = function(){
    console.log("老鼠");//是属于原型链对象
} 
Cat.prototype.type="猫科动物";
//实例化 
// new 的执行过程
var cat1 = new Cat("大大","黄色");
var cat2 = new Cat("小小","黑色");
console.log(cat1.constructor == cat2.constructor);  //构造函数
console.log(cat1 instanceof Cat);//是不是同一个实例
console.log(cat2 instanceof Cat);
cat1.eat();