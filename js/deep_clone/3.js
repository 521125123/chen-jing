var obj = {a: {a:"hello,b:21"}};
var initialobj = Object.assign({},obj);
console.log(initialobj);
initialobj.a.a = '你好';
console.log(obj.a.a);