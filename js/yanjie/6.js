function duplicateCount(text) {
    var str = text.toLowerCase().split('').sort().join('');
    console.log(str);
    
   
    //请得到所有的数字
    // var word = '123-4560-666';
    ///\d+/正则 字符串是否符合规则
    // console.log(/\d+/.test(word));
    // console.log(word.match(/\d+/g));
    // 相邻的字符是一样的,
    // \d 数字 [a-z]  表示取值范围  /(\w)(\d)\(\w)第一组(\d)第二组
    var arr = str.match(/(.)\1+/g);//\1 之前匹配到的第几个小组
    // ([a-z])做了一个分组   \1做到与分组相同的字符
    // RegExp.$1
    // console.log(arr);
    // console.log(str);
    // var arr = str
    console.log(arr);
    return arr.length;
}
console.log(duplicateCount('aadsdjfwuhh'));