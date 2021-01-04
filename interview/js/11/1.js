const arr = [1,2,3];
//给出数组尾部/头部 加、删除的方法
arr.push(6);//面向对象的 
console.log(arr.pop()); 
console.log(arr); 
arr.unshift(1);//在队头插入元素
console.log(arr); 
arr.shift(1);//在队头删除元素
//把数组打印出来,有多少总方法
for(let num in arr){
    console.log(num);
}
arr.forEach(item =>{
    console.log(item);
})
console.log(arr.join(" "));
console.log(arr.splice(0,arr.length));
console.log(arr.map(item => item));
