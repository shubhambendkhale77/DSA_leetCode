var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length;
  let ans = letters[0];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (letters[mid] > target) {
      end = mid - 1;
      ans = letters[mid];
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
