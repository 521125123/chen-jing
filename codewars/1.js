const binaryArrayToNumber = (arr) => {
    // your code
    let n = arr.length;
    let num = 0;
    let a;
    let b = n-1;
    for(let i=0;i<n;i++){
        a = arr[i]
        num = num + Math.pow(2,b) * a;
        b = b-1;
        console.log(num);
    }
    return num;
  };
  console.log(binaryArrayToNumber([0, 0, 0, 1]));