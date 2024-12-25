var findNonMinOrMax = function (nums) {
  if (nums.length < 3) {
    return -1;
  }
  nums.sort((a, b) => a - b);

  return nums[1];
};

console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
