var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[...nums1,...nums2]
    arr.sort((a,b)=>a-b)
    let middleIndex=Math.floor(arr.length/2)
    if(arr.length%2==0){
        return (arr[middleIndex-1]+arr[middleIndex])/2
    }
    else{
        return arr[middleIndex]
    }
};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))
