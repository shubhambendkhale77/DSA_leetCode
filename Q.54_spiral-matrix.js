var spiralOrder = function(matrix) {
    let N = matrix.length;
let M = matrix[0].length;

let top = 0;
let left = 0;
let right = M-1; 
let bottom = N-1; 
let temp = [];
let count = null;
let total = N * M;

while (count < total) {

  for (i = left; i <= right && count < total; i++) {
  
    temp.push(matrix[top][i]);
    count++;
  }
  top++;

  for (i = top; i <= bottom && count < total; i++) {
    temp.push(matrix[i][right]);
    count++;
  }
  right--;

  for (i = right; i >= left && count < total; i--) {
    temp.push(matrix[bottom][i]);
    count++;
  }
  bottom--;

  for (i = bottom; i >= top && count < total; i--) {
    temp.push(matrix[i][left]);
    count++;
  }
  left++
}
return temp;
};

console.log(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ])
  );
  