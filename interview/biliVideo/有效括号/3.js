// 匹配最长有效括号长度
function longestValidParentheses(s) {
    var max = 0;  // 最长长度
    if(s.length == 0 || s.length == 1) return max;
    var stack = [].fill(')');  // 使用了栈来实现匹配 空间复杂度O(n)
    for(var i =0;i<s.length; i++) {
        var tmpMax = 0;
        var temp = 0;
        for(var j = i;j<s.length;j++){
            if(s[j] == '('){
                if(stack.length == 0) {
                    max = max>tmpMax?max:tmpMax 
                }
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
            max = max>tmpMax?max:tmpMax
        }
        stack = []; 
    }
    return max;
}
var s = ')()()('
var s1 = '((())(())'
console.log(longestValidParentheses(s),'wwww');
// console.log(longestValidParentheses(s1));