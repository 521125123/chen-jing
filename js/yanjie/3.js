function duplicateCount(word) {
    //es6里的定义的新的数据结构有拿些  Map
    let map = new Map(); //es6 提供的数据结构 HashMap
    // key=> value  for  O(n)   哈希MapO(1)  Rsdis Elasticsearch
    //时间复杂度
    for(let char of word){
        if(map.has(char)){
        map.set(char,map.get(char)+1);
        }
        else{
        map.set(char,1);
        }
    }
    return map;
}
  console.log(duplicateCount('aadsdjfwuhh'));