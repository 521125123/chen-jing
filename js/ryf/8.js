//  prototype 模式
function Animal() {
    this.species = '动物'
}


function Cat(name,color) {
    this.name = name;
    this.color = color;
}

// cat -> Cat -> new Animal() {species:}
// 一❤只想species
Cat.prototype = new Animal(); // 副作用 会把constructor Cat 变成Animal
Cat.prototype.constructor = Cat;
var cat1 = new Cat('大毛','黄色');
console.log(cat1.species);
console.log(Cat.prototype.constructor);