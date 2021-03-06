const possibilities = {
    by_position: [
        [0, [1, 3, 6]],
        [1, []],
        [2, []],
        [3, [3]],
        [4, [2]],
        [5, []],
        [6, []],
        [7, [2, 3, 6, 7]],
        [8, [2, 3, 6, 7]],

        [9, [3, 6]],
        [10, [3, 6, 8]],
        [11, []],
        [12, [3, 4, 5, 8]],
        [13, [2, 4, 5, 8]],
        [14, []],
        [15, [2, 3, 4, 6]],
        [16, [2, 3, 6]],
        [17, []],

        [18, []],
        [19, [3, 7, 8]],
        [20, [8]],
        [21, []],
        [22, []],
        [23, [3, 4, 8]],
        [24, [3, 4]],
        [25, []],
        [26, []],

        [27, []],
        [28, []],
        [29, [1, 2, 4]],
        [30, [3, 4, 6]],
        [31, [1, 2, 4, 7]],
        [32, [2, 3, 4, 6]],
        [33, []],
        [34, [1, 2, 3, 6, 7]],
        [35, [2, 3, 6, 7]],

        [36, [1, 3, 4, 9]],
        [37, [1, 2, 3]],
        [38, []],
        [39, [3, 4, 8, 9]],
        [40, [1, 2, 4, 7, 8, 9]],
        [41, [2, 3, 4, 8]],
        [42, []],
        [43, [1, 2, 3, 7]],
        [44, [2, 3, 7]],

        [45, [1, 3, 9]],
        [46, [1, 2, 3]],
        [47, []],
        [48, [3, 5, 6, 9]],
        [49, [1, 2, 5, 9]],
        [50, [2, 3, 5, 6]],
        [51, [2, 3, 6]],
        [52, []],
        [53, []],

        [54, []],
        [55, []],
        [56, [2, 8]],
        [57, [5, 6, 8]],
        [58, []],
        [59, []],
        [60, [2, 6]],
        [61, [2, 6, 8]],
        [62, []],

        [63, []],
        [64, [2, 6, 8]],
        [65, [2, 4, 8]],
        [66, []],
        [67, [4, 8, 9]],
        [68, [4, 6, 8]],
        [69, []],
        [70, [2, 3, 6, 8]],
        [71, [2, 3, 6]],

        [72, [1, 4, 6]],
        [73, [1, 6, 8]],
        [74, []],
        [75, []],
        [76, [4, 5, 8]],
        [77, [4, 5, 6, 8]],
        [78, []],
        [79, []],
        [80, [5, 6]]
    ],
    whole_table: [
        [1, 3, 6],      [],         [],         [3],            [2],                    [],             [],             [2, 3, 6, 7],       [2, 3, 6, 7],
        [3, 6],         [3, 6, 8],  [],         [3, 4, 5, 8],   [2, 4, 5, 8],           [],             [2, 3, 4, 6],   [2, 3, 6],          [],
        [],             [3, 7, 8],  [8],        [],             [],                     [3, 4, 8],      [3, 4],         [],                 [],
        [],             [],         [1, 2, 4],  [3, 4, 6],      [1, 2, 4, 7],           [2, 3, 4, 6],   [],             [1, 2, 3, 6, 7],    [2, 3, 6, 7],
        [1, 3, 4, 9],   [1, 2, 3],  [],         [3, 4, 8, 9],   [1, 2, 4, 7, 8, 9],     [2, 3, 4, 8],   [],             [1, 2, 3, 7],       [2, 3, 7],
        [1, 3, 9],      [1, 2, 3],  [],         [3, 5, 6, 9],   [1, 2, 5, 9],           [2, 3, 5, 6],   [2, 3, 6],      [],                 [],
        [],             [],         [2, 8],     [5, 6, 8],      [],                     [],             [2, 6],         [2, 6, 8],          [],
        [],             [2, 6, 8],  [2, 4, 8],  [],             [4, 8, 9],              [4, 6, 8],      [],             [2, 3, 6, 8],       [2, 3, 6],
        [1, 4, 6],      [1, 6, 8],  [],         [],             [4, 5, 8],              [4, 5, 6, 8],   [],             [],                 [5, 6]
    ],
    after_3rd_placed: [
        [1, 6],         [],         [],         [],             [2],                    [],             [],             [2, 6, 7],          [2, 6, 7],
        [3, 6],         [3, 6, 8],  [],         [4, 5, 8],      [2, 4, 5, 8],           [],             [2, 3, 4, 6],   [2, 3, 6],          [],
        [],             [3, 7, 8],  [8],        [],             [],                     [4, 8],         [3, 4],         [],                 [],
        [],             [],         [1, 2, 4],  [4, 6],         [1, 2, 4, 7],           [2, 3, 4, 6],   [],             [1, 2, 3, 6, 7],    [2, 3, 6, 7],
        [1, 3, 4, 9],   [1, 2, 3],  [],         [4, 8, 9],      [1, 2, 4, 7, 8, 9],     [2, 3, 4, 8],   [],             [1, 2, 3, 7],       [2, 3, 7],
        [1, 3, 9],      [1, 2, 3],  [],         [5, 6, 9],      [1, 2, 5, 9],           [2, 3, 5, 6],   [2, 3, 6],      [],                 [],
        [],             [],         [2, 8],     [6, 8],         [],                     [],             [2, 6],         [2, 6, 8],          [],
        [],             [2, 6, 8],  [2, 4, 8],  [],             [4, 8, 9],              [4, 6, 8],      [],             [2, 3, 6, 8],       [2, 3, 6],
        [1, 4, 6],      [1, 6, 8],  [],         [],             [4, 5, 8],              [4, 5, 6, 8],   [],             [],                 [5, 6]
    ],
    after_4th_placed: [
        [1, 6],         [],         [],         [],             [],                     [],             [],             [6, 7],             [6, 7],
        [3, 6],         [3, 6, 8],  [],         [4, 5, 8],      [4, 5, 8],              [],             [2, 3, 4, 6],   [2, 3, 6],          [],
        [],             [3, 7, 8],  [8],        [],             [],                     [4, 8],         [3, 4],         [],                 [],
        [],             [],         [1, 2, 4],  [4, 6],         [1, 4, 7],              [2, 3, 4, 6],   [],             [1, 2, 3, 6, 7],    [2, 3, 6, 7],
        [1, 3, 4, 9],   [1, 2, 3],  [],         [4, 8, 9],      [1, 4, 7, 8, 9],        [2, 3, 4, 8],   [],             [1, 2, 3, 7],       [2, 3, 7],
        [1, 3, 9],      [1, 2, 3],  [],         [5, 6, 9],      [1, 5, 9],              [2, 3, 5, 6],   [2, 3, 6],      [],                 [],
        [],             [],         [2, 8],     [6, 8],         [],                     [],             [2, 6],         [2, 6, 8],          [],
        [],             [2, 6, 8],  [2, 4, 8],  [],             [4, 8, 9],              [4, 6, 8],      [],             [2, 3, 6, 8],       [2, 3, 6],
        [1, 4, 6],      [1, 6, 8],  [],         [],             [4, 5, 8],              [4, 5, 6, 8],   [],             [],                 [5, 6]
    ],
    after_20th_placed: [
        [1, 6],         [],         [],         [],             [],                     [],             [],             [6, 7],             [6, 7],
        [3, 6],         [3, 6],     [],         [4, 5, 8],      [4, 5, 8],              [],             [2, 3, 4, 6],   [2, 3, 6],          [],
        [],             [3, 7],     [],         [],             [],                     [4],            [3, 4],         [],                 [],
        [],             [],         [1, 2, 4],  [4, 6],         [1, 4, 7],              [2, 3, 4, 6],   [],             [1, 2, 3, 6, 7],    [2, 3, 6, 7],
        [1, 3, 4, 9],   [1, 2, 3],  [],         [4, 8, 9],      [1, 4, 7, 8, 9],        [2, 3, 4, 8],   [],             [1, 2, 3, 7],       [2, 3, 7],
        [1, 3, 9],      [1, 2, 3],  [],         [5, 6, 9],      [1, 5, 9],              [2, 3, 5, 6],   [2, 3, 6],      [],                 [],
        [],             [],         [2],        [6, 8],         [],                     [],             [2, 6],         [2, 6, 8],          [],
        [],             [2, 6, 8],  [2, 4],     [],             [4, 8, 9],              [4, 6, 8],      [],             [2, 3, 6, 8],       [2, 3, 6],
        [1, 4, 6],      [1, 6, 8],  [],         [],             [4, 5, 8],              [4, 5, 6, 8],   [],             [],                 [5, 6]
    ]
};
module.exports = possibilities;