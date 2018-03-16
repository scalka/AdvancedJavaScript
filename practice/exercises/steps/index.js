// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps3(n) {
  let hash = '#';
  let space = ' ';
  for(let i=1; i <= n; i++){
    console.log(hash.repeat(i) + space.repeat(n-i));
  }
}

/*function steps1(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps1(n, row, stair + add);
}*/

function steps2(n) {
   for (let row = 0; row < n; row++) {
     let stair = '';

     for (let column = 0; column < n; column++) {
       if (column <= row) {
         stair += '#';
       } else {
         stair += ' ';
       }
     }

     console.log(stair);
   }
 }

function steps(n, row = 0, stair = '') {
    if (row === n) {
      return;
    }

    if (n === stair.length){
      console.log(stair);
      return steps(n, row+1);
    }

    const add = strair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
  }






module.exports = steps;
