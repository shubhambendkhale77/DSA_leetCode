var tictactoe = function (moves) {
  const n = 3;
  const rows = Array(n).fill(0),
    cols = Array(n).fill(0);
  let diag1 = 0,
    diag2 = 0;
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    const player = i % 2 === 0 ? 1 : -1;
    rows[row] += player;
    cols[col] += player;
    if (row === col) diag1 += player;
    if (row + col === n - 1) diag2 += player;
    if (
      Math.abs(rows[row]) === n ||
      Math.abs(cols[col]) === n ||
      Math.abs(diag1) === n ||
      Math.abs(diag2) === n
    ) {
      return player === 1 ? "A" : "B";
    }
  }
  return moves.length === n * n ? "Draw" : "Pending";
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);
