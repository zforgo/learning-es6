const sortedUnique = (arr) => arr
    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
    .sort((a, b) => a - b);

const solver = {
    isValidBoard: (board = []) => {
        const length = 81;
        if (board.length != length) {
            return false;
        }
        const invalidValueIndex = board.findIndex(e => e === undefined || e < 0 || e > 9);
        return invalidValueIndex < 0;
    },
    isCompleted: (board = []) => {
        const fistZero = board.findIndex(e => e == 0);
        return fistZero == -1;
    },
    horizontalIndices: (rowIndex) => {
        const start = rowIndex * 9;
        return [...Array(9).keys()].map((index) => start + index);
    },
    verticalIndices: (position) => {
        const start = position % 9;
        return [...Array(9).keys()].map((index) => index * 9 + start);
    },
    houseIndices: (position, rowIndex) => {
        const colIndex = position - rowIndex * 9;
        const houseY = Math.floor(rowIndex / 3) * 3;
        const houseX = Math.floor(colIndex / 3) * 3;
        const result = [];
        for (let i = 0; i < 3; ++i) {
            let start = (houseY + i) * 9 + houseX;
            result.push(...[...Array(3).keys()].map((index) => start + index));
        }
        return result;
    },
    calculateIndices: (position = 0) => {
        const rowIndex = Math.floor(position / 9);
        return sortedUnique([].concat(
            solver.horizontalIndices(rowIndex),
            solver.verticalIndices(position),
            solver.houseIndices(position, rowIndex)
        ));
    },
    getPossibility: (board = [], position = 0) => {
        if (board[position] != 0) {
            return [];
        }
        const placed = sortedUnique(solver.calculateIndices(position)
            .map((boardIndex) => board[boardIndex]))
            .filter(item => item != 0);
        return [...Array(9).keys()].map(i => ++i).filter(item => !placed.includes(item));
    },
    getPossibilities: (board = []) => {
        return [...Array(81).keys()].map(index => solver.getPossibility(board, index));
    }

}
module.exports = solver