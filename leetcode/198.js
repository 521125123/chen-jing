
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0],nums[1]);
    let Maxnum = [nums[0],Math.max(nums[0],nums[1])];
    for (let i = 2;i < nums.length ;i++){
        Maxnum[i] = Math.max(Maxnum[i-1],Maxnum[i-2] + nums[i])
    }
    return Math.max(Maxnum[nums.length - 1],Maxnum[nums.length - 2])
}
var b = [2,1,1,2,5,6];
console.log(rob(b))