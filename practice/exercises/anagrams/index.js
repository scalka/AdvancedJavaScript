// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams1(stringA, stringB) {
  const objA = characterMap(stringA);
  const objB = characterMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }
  return true;
}
function characterMap(str) {
  let charMap = {};
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}


function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return stringA === stringB;
}







module.exports = anagrams;
