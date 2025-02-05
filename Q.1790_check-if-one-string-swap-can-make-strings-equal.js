var areAlmostEqual = function (s1, s2) {
  let count = 0;

  let str1 = [];
  let str2 = [];

  for (i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      count++;
      if (count > 2) return false;
      str1.push(s1[i]);
      str2.push(s2[i]);
    }
  }
  if (count === 0) return true;
  if (count === 2) {
    str1.sort();
    str2.sort();

    return str1.join("") == str2.join("");
  }
  return false;
};

console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("kelb", "kelb"));
console.log(areAlmostEqual("attack", "defend"));
