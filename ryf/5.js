function Cat( name,color){
    this.name=name;//this?指向它实例
    this.color=color;
}
//实例化 
var cat1 = new Cat("大大","黄色");
var cat2 = new Cat("小小","黑色");
console.log(cat1.constructor == cat2.constructor);  //构造函数
console.log(cat1 instanceof Cat);//是不是同一个实例
console.log(cat1 instanceof Cat);