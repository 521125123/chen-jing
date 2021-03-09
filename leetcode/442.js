var findDuplicates = function(nums) {
    let a = [];
    let str = "";
    let b = 0;
    for(let i = 0;i<nums.length;i++){
        let ele = nums[i];
        for(let j=i;j<nums.length;j++){
            if(ele == nums[j]){
                b++;
            }
        }
        str = str + b ;
        b = 0;
    }
    for(let i = 0;i<str.length;i++){
        let num = parseInt(str[i])
        if(num >= 2){
           a.push(nums[i]);
        }
    }
    return a;
};
let newnums = nums.sort((a,b)=>a-b);
    for(let i=0;i<newnums.length-1;i++){
        if(newnums[i] == newnums[i+1]){
            result.push(newnums[i]);
        }
    }
    return result;
nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));