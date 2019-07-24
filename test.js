const possibilities = Array.from(Array(9).keys(i=> ++i));
const possibilities2 = [...Array(9).keys()].map(i=>++i);
console.log(possibilities)
console.log(possibilities2)