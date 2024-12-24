var findMaxAverage = function (nums, k) {
  let sum = 0;
  let result = 0;
  for (i = 0; i < k; i++) {
    sum += nums[i];
  }

  result = sum;

  for (j = k; j < nums.length; j++) {
    sum = sum + nums[j] - nums[j - k];

    result = Math.max(result, sum);
  }
  return result / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
