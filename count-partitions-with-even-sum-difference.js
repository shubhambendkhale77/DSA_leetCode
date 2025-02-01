var countPartitions = function (nums) {
  let n = nums.length;
  let left = 0;
  let count = 0;
  let right = 0;
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  for (i = 0; i < n - 1; i++) {
    left += nums[i];
    right = total - left;
    let ans = left - right;
    if (ans % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countPartitions([10, 10, 3, 7, 6]));
console.log(countPartitions([1,2,2]));
console.log(countPartitions([2,4,6,8]));

