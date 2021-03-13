/**
 * @param {number} num
 * @return {number[]}
 */
 var countBits = function(num) {
     let bits = [];
     let x = 0;
    for(let i = 0; i <= num ; i++) {
        let singleNum = 0
        x = i;
        while(x > 0) {
            x = x & (x-1);
            singleNum++
        }
        bits[i] = singleNum;
    }
    return bits;
};
var countBits3 = function(num) {
    let bits = [];
    bits[0] = 0;
    for(let i = 1; i <= num; i++)
    {
        if((i & 1) != 0)
        {
            bits[i] = bits[i-1] + 1;
        }
        else
        {
            bits[i] = bits[i/2];
        }
    }
    
    return bits;
}
var countBits2 = function(num) {
    const bits = new Array(num + 1).fill(0);
    for (let i = 1; i <= num; i++) {
        bits[i] = bits[i & (i - 1)] + 1;
    }
    return bits;
};
console.log(countBits8(5));
//其实动态规划不是拍脑袋想出来的，大多数情况下都是可以先分析记忆化搜索，然后优化为动态规划。
