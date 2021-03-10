/**
 * @param {string} s 
 * @param {boolean}
 * 
 */
var isValid = function(s) {
    if(!s || s.length < 1) return true;
    var n = s.length;
    const stack = [];
    for(var i =0;i<n;i++){
        var c = s[i]
        console.log(c);
        if(c == '{'){
            stack.push(c)
        }else{
            stack.pop()
        }
    }
    return stack.length > 0?false:true;
}
console.log(isValid('{}')) // true