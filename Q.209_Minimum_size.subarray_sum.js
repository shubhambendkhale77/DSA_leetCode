var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let start = 0;
    let sum = 0;
    let minLength = Infinity;
    let flag = false;
  
    for (end = 0; end < n; end++) {
      sum += nums[end];
      if (sum == target) {
        minLength = Math.min(minLength, end - start + 1);
        flag = true;
      }
  
      while (sum >= target && start <= end) {
        minLength = Math.min(minLength, end - start + 1);
        sum -= nums[start];
        start++;
        flag = true;
      }
    }
    return flag ? minLength : 0;
  };
  
  console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
  console.log(minSubArrayLen(4, [1, 4, 4]));
  console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
  