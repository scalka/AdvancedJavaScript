// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  str_length = str.length;
  str = str.toLowerCase().replace(/a+e+i+o+u/, '');
  console.log(str_length - str.length);
  return str_length - str.length;
}

module.exports = vowels;
