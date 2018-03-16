// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid1(n) {
  let hash = '#';
  let space = ' ';
  const midpoint = Math.floor((2*n-1) / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for(let col = 0; col  < 2 * n -1; col++ ) {

      if (midpoint - row <= col && midpoint + row >= col){
        level += hash;
      } else {
        level += space;
      }
    }
    console.log(level);
  }
}

function pyramid(n, row = 0, stairs = '') {
  let hash = '#';
  let space = ' ';
  const len = n*2-1;
  const midpt = Math.floor(len/2);
  let add = '';
  // set up base case
  if (n === row) {
    return;
  }

  if (stairs.length === len) {
    console.log(stairs);
    return pyramid(n, row+1);
  }

  if (midpt - row <= stairs.length && midpt + row >= stairs.length){
    add = hash;
  } else {
    add = space;
  }

  pyramid(n, row, stairs+add);
}

module.exports = pyramid;
