// describe('read horizontal, vertical and house values', () => {
//     each([
//         [0, [0, 4, 5, 0, 0, 9, 8, 0, 0]],
//         [1, [0, 4, 5, 0, 0, 9, 8, 0, 0]],
//         [9, [0, 0, 9, 0, 0, 7, 0, 0, 1]],
//         [13, [0, 0, 9, 0, 0, 7, 0, 0, 1]],
//         [79, [0, 0, 3, 2, 0, 0, 7, 9, 0]],

//     ]).describe('horizontal reading',
//         (position, expected) => {
//             test(`returns ${expected} horizontal row for position: ${position}`, () => {
//                 expect(solver.getHorizontalElements(boards.board, position)).toStrictEqual(expected);
//             });
//         }
//     );

//     each([
//         [0, [0, 0, 2, 8, 0, 0, 7, 5, 0]],
//         [9, [0, 0, 2, 8, 0, 0, 7, 5, 0]],
//         [1, [4, 0, 0, 5, 0, 0, 9, 0, 0]],
//         [10, [4, 0, 0, 5, 0, 0, 9, 0, 0]],
//         [79, [0, 0, 5, 0, 0, 4, 0, 0, 9]],

//     ]).describe('vertical reading',
//         (position, expected) => {
//             test(`returns ${expected} vertical row for position: ${position}`, () => {
//                 expect(solver.getVerticalElements(boards.board, position)).toStrictEqual(expected);
//             });
//         }
//     );

//     each([
//         [64, [7, 9, 0, 5, 0, 0, 0, 0, 3]],
//         [65, [7, 9, 0, 5, 0, 0, 0, 0, 3]],
//         [72, [7, 9, 0, 5, 0, 0, 0, 0, 3]],
//         [13, [0, 0, 9, 0, 0, 7, 1, 6, 0]],
//         [10, [0, 4, 5, 0, 0, 9, 2, 0, 0]]
//     ]).describe('house reading',
//         (position, expected) => {
//             test(`returns ${expected} as the house for position: ${position}`, () => {
//                 expect(solver.getHouseElements(boards.board, position)).toStrictEqual(expected);
//             });
//         }
//     );
// });
