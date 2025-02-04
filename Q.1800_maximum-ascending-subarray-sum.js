var maxAscendingSum = function (nums) {
  let cursum = nums[0];
  let sum = 0;

  let i = 1;
  while (i < nums.length) {
    if (nums[i] > nums[i - 1]) {
      cursum += nums[i];
      i++;
    } else {
      sum = Math.max(sum, cursum);
      cursum = nums[i];
      i++;
    }
  }
  return Math.max(sum, cursum);
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
