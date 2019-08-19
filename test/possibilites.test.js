const each = require('jest-each').default;
const solver = require('../lib/solver');
const boards = require('./data/boards');
const possibilities = require('./data/possibilities');

each(possibilities.by_position).describe('check possibilities by position',
    (position, expected) => {
        test(`returns ${Array.isArray(expected) && expected.length === 0 ? 'empty' : `${expected}`} possibilities for position: ${position}`, () => {
            expect(solver.getPossibility(boards.board, position)).toStrictEqual(expected);
        });
    }
);

describe('check possibilities', () => {
    test('whole table', () => {
        expect(solver.getPossibilities(boards.board)).toStrictEqual(possibilities.whole_table);
    })
    // test('coordinates', () => {
    //     expect(solver.calculateIndices(0)).toStrictEqual(true);

    // })
});
