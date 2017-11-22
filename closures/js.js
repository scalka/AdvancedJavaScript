//OUTER - INNER
function outer() {
	//private variable
	let a =10;
	//private function, accessible from public function
	function inner2(){
		console.log("inner2");
	}
	//public function
	function inner() {
		inner2();
		console.log(a);
	}
	return inner;
}

let fn = outer();
fn();

// TEXT TERMINATOR
function terminateText(terminator) {
	return function (text){
		return text + terminator;
	}
}


const exclaim = terminateText('!!!');
const ellipsis = terminateText('...');

console.log(exclaim('hello')); // 'hello!!!'
console.log(ellipsis('goodbye')); // 'goodbye...'

// ADDER EXAMPLE
function makeAdder(x) {
	return function(y) {
		return x * y;
	}
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(10));

// COUTER  FUNCTION
function countLog() {
	let count =0;
	return function() {
		console.log(`You said hello, you invoked me ${ count += 1 } times`);
	}
}
const counter = countLog();
counter('hello'); // 'You said hello, you invoked me 1 times'
counter('hello'); // 'You said hello, you invoked me 2 times'
counter('hello'); // 'You said hello, you invoked me 3 times'