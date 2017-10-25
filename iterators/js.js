//return positive values
const postNeg = [1, -1, -2, 3, 5, -7];

const checkPos = num => num > 0;

const returnPos = postNeg.filter(checkPos);

console.log(returnPos);

// Use reduce() to iterate over this array and sum  the length 
//of all the elements that are longer than 6 characters.

const arr = ['flabbergasted', 'outrageous', 'crazy', 'absurd'];

const characterCount = (sum, word) => word.length > 6 ? sum + word.length : sum;

const sumElem =  arr.reduce(characterCount,0);

console.log(sumElem);

