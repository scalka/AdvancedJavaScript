// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// const obj = {}
// for (let char of string) {
// ..
// obj[char] = 1;
// }
//

function maxChar(str) {
  const obj = {};
  let max  = 0;
  let result = "";
  for(let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  for(let char in obj) {
    console.log(obj[char]);
    if ( max <= obj[char]) {
      result = char;
      console.log(char);
      max = obj[char];
      console.log(obj[char]);
    }
  }
  return result;
}

module.exports = maxChar;
