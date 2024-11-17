var threeSum = function (nums) {
    if (nums == null || nums.length < 3) {
        return new Array()
    }
    nums.sort((a, b) => a - b)
    let arr = new Set()
    for (i = 0; i < nums.length - 2; i++) {

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                arr.add([nums[i], nums[left], nums[right]].toString())
                left++
                right--
            }

            else if (sum < 0) {
                left++
            }
            else {
                right--
            }
        }

    }
    let result = Array.from(arr).map(item => item.split(',').map(Number))

    return result

};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))