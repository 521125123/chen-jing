// 匹配最长有效括号长度
function longPipei(s) {
    var max = 0;  // 最长长度
    if(s.length == 0 || s.length == 1) return max;
    var stack = [];  // 使用了栈来实现匹配 空间复杂度O(n)
    for(var i =0;i<s.length; i++) {
        var tmpMax = 0;
        for(var j = i;j<s.length;j++){
            if(s[j] == '('){
                stack.push('(')
                tmpMax++;
            }else if(s[j] == ')') {
                if(stack.length < 1){
                    // 栈空的 当前位置括号有效匹配 结束了
                    max = max>tmpMax?max:tmpMax 
                    // max = max<tmpMax?tmpMax:max;
                    break;
                }else{
                    stack.pop();
                    tmpMax++;
                }
            }
        }
        if(stack.length == 0) {
            // max = max<tmpMax?tmpMax:max 
            max = max>tmpMax?max:tmpMax 
        }
        if(stack.length > 0) {
            max = max>(tmpMax-stack.length)?max:(tmpMax-stack.length)
        }
        stack = []; 
    }
    return max;
}
var s = ')()()()(((()'
var s1 = '((())(())'
console.log(longPipei(s));
console.log(longPipei(s1));