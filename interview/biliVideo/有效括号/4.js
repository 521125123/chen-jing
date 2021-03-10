function longPipei(s) {
    // 时间复杂为O(n)
    var max = 0;
    if(s.length == 0 || s.length == 1) return max;
    var stack = [-1]; // 栈来服务于有效括号匹配 刚开始匹配的
    for(var i = 0; i< s.length;i++){  // 下标法
        if(s[i] == '('){// 左括号
            stack.push(i);
        }else {
            stack.pop(); // 右括号 出栈
            if(stack.length < 1) {
                stack.push(i) // 
            } else {
                max = Math.max(max, i - stack[stack.length -1])
            }
        }
    }
    return max;

}
var s = ')()()('
console.log(longPipei(s));