var number = function(busStops){
    // Good Luck!
    let a =0;
    for(let i=0;i<busStops.length;i++){
        a = busStops[i][0] - busStops[i][1] + a;
    }
    return a;
  }
// Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
// Test.assertEquals(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// Test.assertEquals(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[10,0],[3,5],[5,8]]));