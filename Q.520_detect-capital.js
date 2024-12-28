var detectCapitalUse = function (word) {
  let cap = 0;
  let small = 0;
  for (char of word) {
    if (/[A-Z]/.test(char)) {
      cap++;
    } else {
      small++;
    }
  }
  if (cap == word.length || small == word.length) {
    return true;
  } else if (/[A-Z]/.test(word[0]) && small == word.length - 1) {
    return true;
  } else {
    return false;
  }
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("g"));
