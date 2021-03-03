# js 有没有可能
    考点？
a
console.log(a ==1 && a == 2 && a == 3) || true ?


把神三元的所有输出全部照单查收


null是对象吗？  typeof  null   // object
7种简单 Symbol BigInt
JS存在的一个bug, 最初版本中使用的是32位系统
二进制, 前面3位是用来表明它是什么类型的，
undefined null 000000000000000000
{} 3位 000 object
typeof  3位
为了性能考虑存变量的类型 000 Object
Object.proptotype/toString()  // 类型转换

# '1'.toString
String -> Object上的
Object 是所有对象的原型对象，  Array Function  ......String
简单数据类型  不会有方法
1. 创建包装类实例 new String("1")
2. 调用该实例的方法 "1".toString  s.toString() 给回去
3. 使命已完成  s = null 执行完方法后  立即销毁这个实例
typeof("1") string
split("a", 1) // 类型 php
