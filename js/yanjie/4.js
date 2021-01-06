// es6提供新的数据结构
// 1. 为了数组的优化而来
//Set Map 两种数据结构    存放特定的数据集合
//Set 不会重复添加数据的类似数组
const people = new Set();//  []
people.add('kaola');
people.add('Meimei');
people.add('牵牛花');
people.add('Meimei');
for(const person of people) {
    console.log(person);
}
const students = new Set('公主殿下','皇帝','雷霆霹雳');
students.add('支付宝');
console.log(people);