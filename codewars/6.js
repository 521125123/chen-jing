function comp(array1, array2){
    for(let i=0;i<array1.length;i++){
        array1[i] = array1[i]*array1[i];
    }
    return (array1.sort().toString() == array2.sort().toString());
  }
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));
