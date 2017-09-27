

function calcTax (price) {
	const tax = .23;
  return (price * tax);
}

let phone = 100;
let tv = 200;
console.log(calcTax(phone));
console.log(calcTax(tv));
