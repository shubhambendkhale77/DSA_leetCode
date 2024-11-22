var matrixReshape = function (mat, r, c) {
    let N = mat.length;
    let M = mat[0].length;
    if (N * M != r * c) {
      return mat;
    }
  
    let newArray = [];
    for (i = 0; i < N; i++) {
      newArray.push(...mat[i]);
    }
  
    let matrix = [];
    for (let i = 0; i < r; i++) {
      matrix.push(newArray.slice(i * c, (i + 1) * c));
    }
    return matrix;
  };
  console.log(
    matrixReshape(
      [
        [1, 2],
        [3, 4],
      ],
      1,
      4
    )
  );
  