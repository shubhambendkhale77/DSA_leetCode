var maximumCount = function(nums) {
    let pos=0
    let neg=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>0){
            pos++
        }
        else if(nums[i]<0){
            neg++
        }
    }
    return Math.max(pos,neg)
};

console.log(maximumCount([-2,-1,-1,1,2,3]))
console.log(maximumCount([-3,-2,-1,0,0,1,2]))
console.log(maximumCount([5,20,66,1314]))