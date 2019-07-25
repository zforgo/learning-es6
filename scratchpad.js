//const possibilities = [...Array(9).keys()].map(i=>++i);
const possibilitiesBoard = [...Array(9)].map(
    () => [...Array(9)].map(
        () => [...Array(9).keys()].map(i => ++i))
);
//console.log(possibilities)
console.log(possibilitiesBoard);