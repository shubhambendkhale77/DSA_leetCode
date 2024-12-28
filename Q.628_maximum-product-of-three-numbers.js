var maximumProduct = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let num1 = nums[0] * nums[1] * nums[n - 1];
  let num2 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  return Math.max(num1, num2);
};

console.log(maximumProduct([1,2,3]))
console.log(maximumProduct([1,2,3,4]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
