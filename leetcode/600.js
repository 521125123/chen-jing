/**
 * @param {number} num
 * @return {number}
 */
// 寻找字符的连续1 , 有就返回false
var findDoubleOne = function(n){
    let i = 31;
    while (i > 0) {
        if ((n & (1 << i)) != 0 && (n & (1 << (i - 1))) != 0)
            return false;
        i--;
    }
        return true;
}
 var findIntegers = function(num) {
    let count = 0;
    for (let i = 0; i <= num; i++)
        if (findDoubleOne(i))
            count++;
    return count;
};
console.log(findIntegers(5));