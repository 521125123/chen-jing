function simpleClone(intialObj) {
    var obj = {};
    for(var key in intialObj) {
        obj[key] = intialObj[key];
    }
    return Object;
}

var obj = {
    a: 'hellow',
    c: ["Bob","Tom","Jenny"]
}
var cloneObj = simpleClone(obj);
cloneObj.a = '你好';
console.log(obj.a);