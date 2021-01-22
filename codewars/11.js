function solution(str){
   if(str.length%2 !=0){
       str = str +'_';
   }
   let j=0;
   let n = str.length/2;
   var arr = [];
   if(n ==0){
       return [];
   }else {
    for(let i=0;i<n;i++){
        arr[i] = str.substr(j,2);
        j = j+2;
    }
    return arr;
   }
}
// assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
// assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// assert.deepEqual(solution(""), []);
console.log(solution("abcde"));