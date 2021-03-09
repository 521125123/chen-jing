var twoSum = function(numbers, target) {
    var len = numbers.length;
    var map = {};
    for(var i = 0;i < len;i++) {
        var now = numbers[i];
        var reduce = target - now;
        if(map[reduce] === undefined) {
            map[now] = i + 1;
        }else {
            return [map[reduce],i+1]
        }
    }
};

var twoSum = function(numbers, target) {
    var len = numbers.length;
    for(var i = 0;i < len-1;i++) {
        var left = i+1,right=len-1;
        var reduce = target - numbers[i];
        while(left <= right) {
            var mid = left + Math.floor((right - left) / 2);
            var now = numbers[mid];
            if(now == reduce) {
                return [i+1,mid+1];
            }
            if(now < reduce) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }
};


var twoSum = function(numbers, target) {
    var len = numbers.length;
    for(var i = 0;i < len - 1;i++) {
        var value = target - numbers[i];
        for(var j = i+1;j < len;j++) {
            if(numbers[j] == value) {
                return [i+1,j+1];
            }
        }
    }
};

var twoSum = function(numbers, target) {
    var left = 0,right = numbers.length-1;
    while(left < right) {
        var sum = numbers[left] + numbers[right];
        if(sum == target) {
            return [left+1,right+1];
        }
        if(sum < target) {
            left++;
        }else {
            right--;
        }
    }
};
