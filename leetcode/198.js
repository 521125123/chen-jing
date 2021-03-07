var findMax = function(nums,k) {
    let index = 0;
    let totalnum = 0
    let lastindex = 0;
    while((index+k) != nums.length){
       let a = nums[index]; 
       lastindex = index;
       for(let i = index+2;i<nums.length;i++){
           if(i-lastindex >= 2){
               a = a + nums[i]
               lastindex = i;
           }  
       }
       totalnum = totalnum >= a?totalnum:a
       index++;
    }
    return totalnum;
}
var rob = function(nums) {
    // 找到k个不相邻的数的最大和
    let len = nums.length;
    if(len%2 !=0){
        nums.push(0)
    }
    len = nums.length
    console.log(len)
    if(len == 2){
        console.log(Math.max(nums[0],nums[1]),'iiii')
    }
    else if(len == 4){
        console.log(Math.max((nums[0]+nums[2]),(nums[0]+nums[3]),(nums[1]+nums[3])))
    }else{
        console.log(findMax(nums,len/2));    
    }
};
var b = [1,2];
rob(b);