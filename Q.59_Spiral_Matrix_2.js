var generateMatrix = function (n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let index = 1;
  let count = 0;
  while (count < n * n) {
    for (i = left; i <= right && count < n * n; i++) {
      matrix[top][i] = index;
      index++;
      count++;
    }
    top++;

    for (i = top; i <= bottom && count < n * n; i++) {
      matrix[i][right] = index;
      index++;
      count++;
    }
    right--;

    for (i = right; i >= left && count < n * n; i--) {
      matrix[bottom][i] = index;
      index++;
      count++;
    }
    bottom--;

    for (i = bottom; i >= top && count < n * n; i--) {
      matrix[i][left] = index;
      index++;
      count++;
    }
    left++;
  }
  return matrix;
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));
