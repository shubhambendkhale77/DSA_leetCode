var findMissingAndRepeatedValues = function (grid) {
  let n = grid.length;
  let obj = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j];

      if (obj[num]) {
        obj[num]++;
      } else {
        obj[num] = 1;
      }
    }
  }

  let repeatNum = 0;
  let missingNum = 0;

  for (let k = 1; k <= n * n; k++) {
    if (!obj[k]) {
      missingNum = k;
    } else if (obj[k] === 2) {
      repeatNum = k;
    }
  }
  return [repeatNum, missingNum];
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
