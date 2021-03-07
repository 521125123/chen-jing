let a = "";
    let len = 0;
    let c = ""
    for(let i = 0; i < s.length; i++){
        a = a + s[i];
        if(typeof s[i+1] == 'undefined') {
            c = s[i]
        }else {
            c = s[i+1]
        }
        let index = a.indexOf(c)
        if(index != -1){
            if(a.length > len){
                len = a.length
            }
          a = a.slice(index+1,a.length)
        }
        
    }
    return len;