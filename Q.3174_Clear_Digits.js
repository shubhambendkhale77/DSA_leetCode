var clearDigits = function (s) {
  let stack = [];
  for (i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
