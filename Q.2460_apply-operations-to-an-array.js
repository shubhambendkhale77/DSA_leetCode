var applyOperations = function (nums) {
  let stack = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }

    if (nums[i] != 0) {
      stack.push(nums[i]);
    }
  }

  while (nums.length > stack.length) {
    stack.push(0);
  }

  return stack;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
