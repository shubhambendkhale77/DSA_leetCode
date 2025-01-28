var searchRange = function(nums, target) {
    let result = []
    result.push(firstElement(nums,target))
    result.push(latElement(nums,target))
    return (result)
}
    function firstElement (arr,key){
        let start = 0
        let end = arr.length-1
            let ans= -1

            while(start<=end){
                let mid=Math.floor((start+end)/2)

                if(arr[mid]===key){
                    ans=mid
                    end=mid-1
                }
                else if(arr[mid]>key){
                    end=mid-1
                }
                else{
                    start=mid+1
                }
            }
            return ans
      
    }

    function latElement (arr,key){
        let start = 0
        let end = arr.length-1
            let ans= -1

            while(start<=end){
                let mid=Math.floor((start+end)/2)

                if(arr[mid]===key){
                    ans=mid
                    start=mid+1
                }
                else if(arr[mid]>key){
                    end=mid-1
                }
                else{
                    start=mid+1
                }
            }
            return ans
      
    }

console.log(searchRange([5,7,7,8,8,10],8))