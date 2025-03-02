var mergeArrays = function (nums1, nums2) {
  let stack = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i][0] === nums2[j][0]) {
      stack.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      j++;
      i++;
    } else if (nums1[i][0] < nums2[j][0]) {
      stack.push(nums1[i]);
      i++;
    } else {
      stack.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    stack.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    stack.push(nums2[j]);
    j++;
  }

  return stack;
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
