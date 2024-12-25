var checkSubarraySum = function (nums, k) {
  let n = nums.length;
  let sum = 0;
  let map = { 0: -1 };

  for (i = 0; i < n; i++) {
    sum += nums[i];
    let remainder = sum % k;

    // if i see a remainder again that means we have a good subarray

    if (map[remainder] != undefined) {
      if (i - map[remainder] >= 2) {
        return true;
      }
    } else {
      map[remainder] = i;
    }
  }
  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
