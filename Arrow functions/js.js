/*jshint esversion: 6 */ 
const square = function (x) {
	return x*x;
};
const squareArrowF = x => x*x;

console.log(square(10));
console.log(squareArrowF(10));



const logDateTime = function(){
	console.log(new Date());
};

const logDateTimeArrowF = () => console.log(new Date());

logDateTime();
logDateTimeArrowF();