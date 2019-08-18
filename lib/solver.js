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
    }
}
module.exports = solver