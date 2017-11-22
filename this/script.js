function setSomeAge(unit) {
	this.age = 10 + " " + unit;
}

function setAge() {

	let today = new Date();

	let birthDate = new Date(this.dob);

	console.log(birthDate);
	let age = today.getFullYear() - birthDate.getFullYear();

	let m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
	{
	age--;
	}
	this.age = age;
}


let person = {
	name: 'Joe',
	dob: "93/2/24"
}

let person2 = {
	name: 'Sylwia',
	dob: "93/2/24"
}
console.log(person);

setSomeAge.call(person, 'years', 'old')

console.log(person);

setAge.call(person2);

console.log(person2);

setSomeAge.apply(person)

setAge.apply(person2, ["93/2/24"]);

console.log(person2);

//new function which is bind with setage function to contect of person
const personSetAge = setSomeAge.bind(person)

const alwaysSetAge = setAge.bind(person2);

personSetAge('days', 'old');

console.log(person);
