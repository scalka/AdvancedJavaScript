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


const isGraterThan = function(numOne, numTwo) {
	if (numOne> numTwo) {
		return true;
	} else {
		return false;
	}
};
//const isGraterThanArrowF = (numOne, numTwo) => numOne > numTwo ? true : false;
//even shorter
const isGraterThanArrowF = (numOne, numTwo) => numOne > numTwo;

console.log(isGraterThan(10,5));
console.log(isGraterThanArrowF(10,5));



function hypothenuse(a, b){
	function square(x) {
		return x*x;
	}
	return Math.sqrt(square(a) + square(b));
}
const hypothenuseArrowF =  (a, b) => {
	const square = x => x * x; 
	return Math.sqrt(square(a) + square(b));
};

console.log(hypothenuse(4,5));
console.log(hypothenuseArrowF(4,5));


function connect (hostname, port, method) {
	if (hostname === undefined) hostname = "localhost";
	port = port ||80;
	method = method || "HTTP";

	console.log(hostname, port, method);
}

const connectES6 = ( hostname = "localhost", port = 80, method = "HTTP") =>	console.log(hostname, port, method);

connect();
connectES6();
connectES6("host");
connectES6("host", 8080);
connectES6(undefined, undefined, "FTP");