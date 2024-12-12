var minOperations = function (logs) {
  let count = 0;

  for (char of logs) {
    if (char !== "../" && char !== "./") {
      count++;
    } else if (count > 0 && char == "../") {
      count--;
    }
  }
  return count;
};
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
