function bouncingBall(h,  bounce,  window) {
    // your code here
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
    // if(h<0 || 0>bounce ||bounce>1 || window>h){ 
    //     return -1;
    // } else {
    //     let num = 1 ;
    //     h = h * bounce;
    //     while(h>window){
    //         h = h * bounce;
    //         num = num +2;
    //     }
    //     return num;
    // }
  }
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 40));
console.log(bouncingBall(30.0, 0, 40));
console.log(bouncingBall(3.0, 0.66, 1.5));