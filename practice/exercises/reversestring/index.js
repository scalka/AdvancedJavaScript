// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let revrsed = '';
  for (let character in str) {
    reversed = character + reversed;
  }
}

function reverse3(str) {
  return str.split('').reduce((reversed, character) => { // arrow f. runs once for each arr elements
    return character + reversed;
  }, ''); // '' first

}

module.exports = reverse;
