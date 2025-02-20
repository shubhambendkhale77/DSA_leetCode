var separateDigits = function (nums) {
  let str = nums.join("").split("").map(Number);
  return str;
};

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([7, 1, 3, 9]));
