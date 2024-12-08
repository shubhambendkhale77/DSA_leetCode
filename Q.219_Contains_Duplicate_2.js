var containsNearbyDuplicate = function (nums, k) {
  let n = nums.length;
  let dictionary = {};

  for (i = 0; i < n; i++) {
    let val = nums[i];

    if (dictionary.hasOwnProperty(val) && Math.abs(i - dictionary[val]) <= k) {
      return true;
    }

    dictionary[val] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
