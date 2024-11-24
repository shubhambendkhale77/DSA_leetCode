var searchMatrix = function (matrix, target) {
  let N = matrix.length;
  let M = matrix[0].length;
  let i = 0;
  while (i < N) {
    for (j = 0; j < M; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
    i++
  }
  return false
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
