// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// mine
function chunk1(array, size) {
  let arr = [];
  for(var i=0; i < array.length; i = i + size){
    let chunk = [];
    for(var j = i; j < i + size; j++){
      if (array[j]) {
        chunk.push(array[j]);
      }
    }
    arr.push(chunk);
  }
  console.log(arr);
  return arr;
}

function chunk(array, size) {
  let arr = [];
  for(var i=0; i < array.length; i = i + size){

    arr.push(array.slice(i, i+size));
  }
  console.log(arr);
  return arr;
}

function chunk2(array, size) {
  let arr = [];

  for(let element of array) {
    const last = arr[arr.length-1];
    if(!last || last.length === size){
      arr.push([element]);
    } else {
      last.push(element);
    }
  }
  return arr;
}


module.exports = chunk;
