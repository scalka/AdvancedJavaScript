// TEXT TERMINATOR
function terminateText(txt) {
	function textTerminator(term){
		return term + txt;
	}
	return textTerminator;
}


const exclaim = terminateText('!!!');
const ellipsis = terminateText('...');

console.log(exclaim('hello')); // 'hello!!!'
console.log(ellipsis('goodbye')); // 'goodbye...'


//Outer inner
function outer() {
	let a =10;
	function inner() {
		console.log(a);
	}
	return inner;
}

let fn = outer();
fn();