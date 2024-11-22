var flipAndInvertImage = function (image) {
    let N = image.length;
    let M = image[0].length;
    let arr = new Array();
    for (i = 0; i < N; i++) {
      for (j = M - 1; j >= 0; j--) {
        arr.push(image[i][j]);
      }
    }
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        arr[i] = 0;
      } else {
        arr[i] = 1;
      }
    }
    let matrix = [];
    for (i = 0; i < N * M; i += N) {
      matrix.push(arr.slice(i, i + N));
    }
  
    console.log(matrix);
  };
  
  console.log(
    flipAndInvertImage([
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0],
    ])
  );
  