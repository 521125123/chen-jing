function findOutlier(integers){
    //your code here
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    for(let i=0;i<integers.length;i++){
        if(integers[i]%2 ==0){
            a++;
            c = integers[i];
        }else{
            b++;
            d = integers[i];
        }
    }
    return a>b?d:c
  }
  console.log(findOutlier([1, 2, 3,7,9,11]));