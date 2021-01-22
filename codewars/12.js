function narcissistic(value) {
    // Code me to return true or false
    let a = value.toString();
    let b = 0;
    for(let i=0;i<a.length;i++){
        b = b + Math.pow(parseInt(a[i]),a.length);
    }
    return b == value?true:false;
  }
  
console.log(narcissistic(371));