// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindrome2(str) {
  // check 1 elem if equals to last 2nd to last-1 ...
  return str.split('').every((char, i) => { // i starts from 0 and goes up
    return char === str[str.length - i -1];
  });

}

module.exports = palindrome;
