const solver = {
    isValidBoard: function (board = []) {
        const length = 81;
        if (board.length != length) {
            return false;
        }
        const invalidValueIndex = board.findIndex(e => e === undefined || e < 0 || e > 9);
        return invalidValueIndex < 0;
    },

    isCompleted: function (board = []) {
        const fistZero = board.findIndex(e => e == 0);
        return fistZero == -1;
    },

    getHorizontalElements: function (input = [], position = 0) {
        const start = Math.floor(position / 9) * 9;
        return input.slice(start, start + 9);
    },

    getVerticalElements: function (input = [], position = 0) {
        const start = position % 9;
        return [...Array(9).keys()].map((element, index) => input[index * 9 + start]);
    },

    getHouseElements: function (board = [], position = 0) {
        const rowIndex = Math.floor(position / 9);
        const colIndex = position - rowIndex * 9;
        const houseY = Math.floor(rowIndex / 3) * 3;
        const houseX = Math.floor(colIndex / 3) * 3;
        const result = [];
        for (let i = 0; i < 3; ++i) {
            const start = (houseY + i) * 9 + houseX;
            result.push(...board.slice(start, start + 3))
        }
        return result;
    },
    getPossibilities: function (board = [], position = 0) {
        if (board[position] != 0) {
            return [];
        }
        const found = [].concat(
            solver.getHorizontalElements(board, position),
            solver.getVerticalElements(board, position),
            solver.getHouseElements(board, position)
        ).reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
            .filter(item => item != 0)
            .sort();

        return [...Array(9).keys()].map(i => ++i).filter(item => !found.includes(item));
    }

}
module.exports = solver