const each = require('jest-each').default;
const solver = require('../lib/solver');
const boards = require('./data/boards');


describe('check possibilities', () => {
    const possibilities = require('./data/possibilities');
    test('whole table', () => {
        expect(solver.getPossibilities(boards.board)).toStrictEqual(possibilities.whole_table);
    })
    each(possibilities.by_position).describe('check possibilities by position',
        (position, expected) => {
            test(`returns ${Array.isArray(expected) && expected.length === 0 ? 'empty' : `${expected}`} possibilities for position: ${position}`, () => {
                expect(solver.getPossibility(boards.board, position)).toStrictEqual(expected);
            });
        }
    );
});

describe('indicies', () => {
    const indices = require('./data/indices');
    each(indices).describe('check indices for whole table',
        (position, expected) => {
            test(`should return ${expected} indices for given position: ${position}`, () => {
                expect(solver.calculateIndices(position)).toStrictEqual(expected);
            });
        }
    );
});
