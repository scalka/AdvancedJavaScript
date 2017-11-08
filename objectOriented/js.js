//prototypal inheritance
const Persona = {
	name: 'Andrew',
	age: 44,
	print: function(){
		console.log(`Hi my name is ${this.name}`);
	}
}
Persona.print();

const Teacher = Object.create(Persona);
Teacher.name = 'Dave';
Teacher.subject = "JS";
Teacher.print = function (){
	console.log(`Hey my name is ${this.name} ${this.subject}`);
};
Teacher.print();

//classical inheritance
//build constractor f
function Person(name, age){
	this.name = name;
	this.age = age;
	this.hi = function () {
		console.log(`Czesc my name is ${this.name}`);
	};
}
//take constructor f and attach prototype hello f to it
Person.prototype.hello = function(){
	console.log(`Hello my name is ${this.name}`);
}
const p1 = new Person();
p1.hi();


function Car(make = 'bmw', model = 'X', price) {
	this.make = make;
	this.model = model;
	this.price = price;
}
//methods that are gonna be passed down, we attach them to the prototype of the object
//then it won't be copied to each prototype separately, but it will be attached to its prototype = saves memory
Car.prototype.logDetails = function() {
	console.log(`${this.make} is ${this.model} and costs ${this.price}`);
}
Car.prototype.hi = function() {
	console.log(`hi`);
}

const mazda = new Car('Mazda', '2', 100000);
mazda.logDetails();

function ElectricCar(make, model, price, range, autonomous) {
	//run Car and run/call it for me in this scope
	Car.call(this, make, model, price);
	this.range = range;
	this.autonomous = autonomous;
}
//manually point at car prototype
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.logDetails = function() {
	console.log(`${this.make} is ${this.model} and costs ${this.price}. 
				autonomous: ${this.autonomous} range: ${this.range}`);
}

const ele = new ElectricCar('Electric', 'ELE', 1002222000, 500, true);
ele.logDetails();
ele.hi();