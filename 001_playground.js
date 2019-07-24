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
for (let i = 0; i < board.length; ++i) {
    /* horizontal  */
    const horizotal = board[i];
    for (let j = 0; j < board[i].length; ++j) {

        /* vertical  */
        const vertical = [];
        for (let k = 0; k < board.length; ++k) {
            vertical[k] = board[k][j];
        }

        /* house block */
        let house = [...Array(3)].map(() => Array(3).fill(0));
        for (let k = 0; k < 3; ++k) {
            for (let l = 0; l < 3; ++l) {
                house[k][l] = board[~~(i / 3) * 3 + k][~~(j / 3) * 3 + l];
            }
        }

        console.log('Investigating position: ' + i + ', ' + j + ' horizontal: ' + horizotal + ', vertical: ' + vertical + ' house: ' + house + ' element: ' + board[i][j]);
    }
}