

function calcTax (price) {
	const tax = .23;
  return (price * tax);
}

let phone = 100;
let tv = 200;
console.log(calcTax(phone));
console.log(calcTax(tv));


console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));


//string interoplation
console.log(`I own a pet ${myPet}.`)
let myName = 'Sylwia';
let myCity = 'Dublin';
console.log(`My name is ${myName}. My favorite city is ${myiCty}.`);