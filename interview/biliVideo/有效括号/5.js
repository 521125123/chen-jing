function longPipei(s) {
    var max = left = right = 0;
    if(!s || s.length == 1) return max;
    // left 是当前还在匹配的左边括号数量 right 是当前右边括号的数量
    for(var i = 0;i < s.length; i++) {
        if(s[i] == '(') {
            left++; // 入栈 有多少个入栈
        }else {
            right++;
        }
        if(left == right) {
            max = Math.max(max, 2*right); // 2*right 就是有效匹配的长度
        }else if(right > left) {// 后面就无效了
            left = right = 0; //  重新开始
        }
    }
    left = right = 0;
    for(var i = 0; i < s.length; i++ ) {
        if(s[i] == '(') {
            left++; // 入栈 有多少个入栈
        }else {
            right++;
        }
        if(left == right) {
            max = Math.max(max, 2*left); // 2*right 就是有效匹配的长度
        }else if(left > right) {// 后面就无效了
            left = right = 0; //  重新开始
        }
    }
    return max;
}
// var s = '((())(())'
var s = ')()()('
console.log(longPipei(s));