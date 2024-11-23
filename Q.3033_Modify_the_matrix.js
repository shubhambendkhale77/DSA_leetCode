var modifiedMatrix = function (matrix) {
    let N = matrix.length;
    let M = matrix[0].length;
  
    for (i = 0; i < N; i++) {
      for (j = 0; j < M; j++) {
        if (matrix[i][j] < 0) {
          let max = -Infinity;
  
          for (k = 0; k < N; k++) {
            max = Math.max(max, matrix[k][j]);
          }
          matrix[i][j] = max;
        }
      }
    }
    return matrix;
  };
  
  console.log(
    modifiedMatrix([
      [1, 2, -1],
      [4, -1, 6],
      [7, 8, 9],
    ])
    //   modifiedMatrix([[3,-1],[5,2]])
  );
  