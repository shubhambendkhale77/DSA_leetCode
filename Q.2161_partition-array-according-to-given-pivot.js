var pivotArray = function (nums, pivot) {
  let less = [];
  let large = [];
  let equal = [];

  for (let num of nums) {
    if (num < pivot) less.push(num);
    else if (num === pivot) equal.push(num);
    else large.push(num);
  }
  let arr = [...less, ...equal, ...large];
  return arr;
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
