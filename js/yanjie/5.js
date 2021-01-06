const dogs = new Map();//es6 
const friends = new Map();
friends.set('保安大爷','守门的');
friends.set('河神','鸡毛');
//遍历它  key 和 value
friends.forEach((val,key) =>console.log(val,key))
for(let [key,value] of friends){
    //遍历它  key 和 value
    //解构
    console.log(key,value);
}
const [a,b] = [1,2];
const { } = {'a':1,'b':2} //  如何解
console.log(a,b);
