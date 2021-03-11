/**
 * @param {number[]} nums
 * @return {number}
 */
//  var jump = function(nums) {
//     let a = 0;
//     for(let i = 1;i < nums.length-1; i++ ){
//         let a1 = 1;
//         for(let j = i; j < nums.length;){
//             if(j == nums.length-1){
//                 if(i == 1){
//                     a = a1;
//                 }
//                 a = Math.min(a,a1);
//                 break;
//             } 
//             j = j + nums[i];
//             a1++;    
//         }
//     }
//     return a;
// };
var jump1 = function(nums) {
    var position = nums.length - 1;
    var steps = 0;
    while (position > 0) {
        for (var i = 0; i < position; i++) {
            if (i + nums[i] >= position) {
                console.log(steps,i,"dddddddddd");
                position = i;
                steps++;
                break;
            }
        }
    }
    return steps;
}
var jump = function(nums) {
    let length = nums.length;
    let end = 0;
    let maxPosition = 0; 
    let steps = 0;
    for (let i = 0; i < length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]); 
        if (i == end) {
            end = maxPosition;
            steps++;
        }
    }
    return steps;
}

var a1 = [2,1,1,1,3,1,4];
var a = [2,3,1,2,4,2,3];
console.log(jump(a));









var s =[2,3,1,1,4]