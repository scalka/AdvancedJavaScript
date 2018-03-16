function sortingFunction(array) {

  odd = [];
  even = [];
  for (el of array) {
    console.log(el)
    el%2 === 0 ? even.push(el) : odd.push(el);
  }
  let sort_f = (a, b) => {a-b};

  odd.sort(function (a, b) {return a-b;})
  even.sort(function (a, b) {return a-b;});

  let arr = odd.concat(even);
  return arr;
}
// TEST
// console.log(sortingFunction([1,7,32,33,2,7,5]));
