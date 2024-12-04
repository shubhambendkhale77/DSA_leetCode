var sortColors = function(nums) {
    let n=nums.length
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
            }
        }
    }

    return nums
};

console.log(sortColors([2,0,2,1,1,0]))