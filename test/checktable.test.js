const each = require('jest-each').default;
const solver = require('../lib/solver');
const boards = require('./data/boards');

each([
    [boards.board, true, ''],
    [boards.wrong_Length, false, 'invalid dimension'],
    [boards.wrong_HasNegative, false, 'has negative value'],
    [boards.wrong_HasHigh, false, 'has too high value'],
    [boards.wrong_Hasnull, false, 'has undefined element']

]).describe('checks validity',
    (input, expected, message) => {
        test(`returns ${expected} ${!expected ? `because ${message}` : ''}`, () => {
            expect(solver.isValidBoard(input)).toBe(expected);
        });
    },
);

each([
    [boards.board, false],
    [boards.unsolved_board, false],
    [boards.solved_board, true],

]).describe('checks completition',
    (input, expected) => {
        test(`returns ${expected}`, () => {
            expect(solver.isCompleted(input)).toBe(expected);
        });
    },
);


