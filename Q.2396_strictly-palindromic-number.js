var isStrictlyPalindromic = function (n) {
  for (i = 2; i <= n - 2; i++) {
    let bin = n.toString(i);

    let rev = bin.toString().split("").reverse().join("");
    if (bin != rev) {
      return false;
    }
  }
  return true;
};

console.log(isStrictlyPalindromic(9));
