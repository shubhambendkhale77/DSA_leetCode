var missingNumber = function(nums) {
    let n = nums.length
    let num = (n*(n+1))/2
    let sum=0
    for(i=0;i<n;i++){
        sum+=nums[i]
    }

    return num-sum
};

console.log(missingNumber([3,0,1]))