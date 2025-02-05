var trap = function (height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let leftmax = 0;
  let rightmax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftmax) {
        leftmax = height[left];
      } else {
        water += leftmax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightmax) {
        rightmax = height[right];
      } else {
        water += rightmax - height[right];
      }
      right--;
    }
  }
  return water;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
