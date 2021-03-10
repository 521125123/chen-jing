function isValid(s) {
    if(!s || s.length < 1) return true;
    let n = s.length;
    let num = 0;
    for(var i =0;i<n;i++){
        var c = s[i]
        console.log(c);
        if(c == '{'){
            num++;
        }else{
            num--
        }
    }
    return num == 0?true:false;
}
console.log(isValid('{}')) // true
