const board = [
  [0, 4, 5, 0, 0, 9, 8, 0, 0],
  [0, 0, 9, 0, 0, 7, 0, 0, 1],
  [2, 0, 0, 1, 6, 0, 0, 5, 9],
  [8, 5, 0, 0, 0, 0, 9, 0, 0],
  [0, 0, 6, 0, 0, 0, 5, 0, 0],
  [0, 0, 7, 0, 0, 0, 0, 4, 8],
  [7, 9, 0, 0, 3, 1, 0, 0, 4],
  [5, 0, 0, 7, 0, 0, 1, 0, 0],
  [0, 0, 3, 2, 0, 0, 7, 9, 0],
];
console.clear();
console.log(board);

const flatten = (arr) => arr.reduce((accumulator, arr) => [...accumulator, ...arr], []);

function calculatePossibilities(board, row, col) {
  var found = new Array;
  if (board[row][col] !== 0) {
    return found;
  }

  /* house block */
  const houseY = Math.floor(row / 3) * 3;
  const houseX = Math.floor(col / 3) * 3;
  const house = flatten(Array.of(
    board[houseY].slice(houseX, houseX + 3),
    board[houseY + 1].slice(houseX, houseX + 3),
    board[houseY + 2].slice(houseX, houseX + 3)
  ));

  found = flatten(
    Array.of(
      board[row], //horizontal
      [...Array.from(board).map(elements => elements[col])], //vertical
      house
    )
  ).filter(e => e > 0)
    .sort();
  const possibilities = [...Array(9).keys()].map(i => ++i).filter(v => !found.includes(v))
  return possibilities;
}

const possibilities = [...Array(9).keys()].map(() => [...Array(9)])
board
  .forEach((row, rowIndex) =>
    row.forEach((value, colIndex) => possibilities[rowIndex][colIndex] = calculatePossibilities(board, rowIndex, colIndex)));

console.log(possibilities)

