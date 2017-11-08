//prototypal inheritance
const Persona = {
	name: 'Andrew',
	age: 44,
	print: function(){
		console.log(`Hi my name is ${this.name}`);
	}
}
Persona.print();
const person2 = Object.create(Persona);
person2.name = 'Dave';

//classical inheritance
//build constractor f
function Person(name, age){
	this.name = name;
	this.age = age;
	this.hi = function () {
		console.log(`Hi my name is ${this.name}`);
	};
}
//take constructor f and attach prototype hello f to it
Person.prototype.hello = function(){
	console.log(`Hello my name is ${this.name}`);
}


const p1 = new Person();
p1.hi();


function Car(make, model, price) {
	this.make = make;
	this.model = model;
	this.price = price;
}

Car.prototype.logDetails = function() {
	console.log(`${this.make} is ${this.model} and costs ${this.price}`);
}
Car.prototype.hi = function() {
	console.log(`hi`);
}

const mazda = new Car('Mazda', '2', 100000);
mazda.logDetails();


function ElectricCar(make, model, price, range, autonomous) {
	Car.call(this, make, model, price);
	this.range = range;
	this.autonomous = autonomous;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.logDetails = function() {
	console.log(`${this.make} is ${this.model} and costs ${this.price}. 
				autonomous: ${this.autonomous} range: ${this.range}`);
}

const ele = new ElectricCar('Electric', 'ELE', 1002222000, 500, true);
ele.logDetails();
ele.hi();