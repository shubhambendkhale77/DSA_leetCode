var setZeroes = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let rows = new Set();
  let cols = new Set();

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let row of rows) {
    for (j = 0; j < m; j++) {
      matrix[row][j] = 0;
    }
  }
  for (let col of cols) {
    for (i = 0; i < n; i++) {
      matrix[i][col] = 0;
    }
  }
  console.log(matrix);
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
