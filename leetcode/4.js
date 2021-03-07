var b = function(nums1, nums2) {
    var num = nums2.concat(nums1)
    num = num.sort((a, b) => a - b)
    console.log(num)
    if((num.length+1)%2 == 0) {
        return num[(num.length+1)/2-1]
    }else {
        let num1 = parseInt((num.length+1)/2)
        let middleNum = parseFloat((parseInt(num[num1]) + parseInt(num[num1-1]))/2)
        return middleNum
    }
};
var findK = function(nums1,nums2,k) {
    var index1 = 0;
    var index2 = 0;
    let num1 = nums1.length;
    let num2 = nums2.length;
    var flag = -1;
    while(flag == -1) {
        if(index1 == nums1.length) {
            flag = 1;
            return nums2[index2-1+k]
        }
        if(index2 == nums2.length) {
            flag = 1;
            return nums1[index1-1+k]
        }
        if(k == 1) {
            flag = 1;
            return Math.min(nums1[index1],nums2[index2]);
        }
        half = parseInt(k/2);
        let newindex1 = Math.min((index1 + half),num1) - 1;
        let newindex2 = Math.min((index2 + half),num2) - 1;
        let value1 = nums1[newindex1];
        let value2 = nums2[newindex2];
        if(value1  <=  value2) {
            k = k - (newindex1 - index1 + 1) 
           index1 = newindex1 + 1;
          
        }else {
            k = k - (newindex2 - index2 + 1) 
            index2 = newindex2 + 1;    
        }
        
    }
}
var findMedianSortedArrays = function(nums1, nums2) {

          // 找到第  k  个  元素
    
    // 判断两个数组的长度之和是否为偶数
    let elmentK = parseInt( (nums1.length + nums2.length + 1) / 2) 
    if((nums1.length+ nums2.length)%2 == 0){
        return parseFloat((findK(nums1,nums2,elmentK) + findK(nums1,nums2,elmentK+1))/2)
    }else {
        return parseFloat(findK(nums1,nums2,elmentK));
    }
    
        
    
}

nums1 = [1,2], nums2 = [3,4]

console.log(findMedianSortedArrays(nums1,nums2))