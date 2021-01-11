function toCamelCase(str){
    var arr = str.match(/([a-zA-Z])+/g);
    let s = "";
    if(arr ==null){
        return ''
    }else {
        for(let i=0;i<arr.length;i++){
            s = s + arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
        }
        // var str = arr.join('');
        return s
    }
}
console.log(toCamelCase("the_stealth_warrior"));