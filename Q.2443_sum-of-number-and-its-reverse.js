var sumOfNumberAndReverse = function (num) {
  for (i = 0; i <= num; i++) {
    let int = i;

    let rev = i.toString().split("").reverse().join("");

    if (int + parseInt(rev) == num) {
      return true;
    }
  }
  return false;
};

console.log(sumOfNumberAndReverse(443));
