function simpleFunction(x, y) {
	// concatenate both arguments
	return `${x}${y}`;
}
// TESTS
/*console.log(simpleFunction('string', 'another'));
console.log(simpleFunction([1,2,3,4], 'another'));
console.log(simpleFunction([1,2,3,4], 'another'));
console.log(simpleFunction([1,2,3,4], 123));
console.log(simpleFunction(123, 323));*/
function complexFunction(...args) {
	// take any number of arguments and return total sizie of args in bytes
	let total = 0;
	for (arg of args) {
		if (typeof arg === 'object' && arg !== null) {
			for (element of arg) {
				total += sum(element);
			}
		} else {
			total += sum(arg);
		}
	}
	return total;
}
function sum(arg) {
	let total = 0;
	if(arg === undefined || arg === null) {
		return total+= 0;
	} else if (typeof arg === 'boolean' || typeof arg === 'number') {
		return total += 1;
	} else if (typeof arg === 'string') {
		return total += arg.length;
	}
}
// TEST
// console.log(complexFunction(123, true, 'abc',null, [1,1,1,9]));
function objectProcessing(originalSquare) {
	let arr = [];
	for (square of originalSquare) {
		let NewSquare = {
			size: square.size,
			color: square.color,
			area: Math.pow(square.size, 2)
		}
		arr.push(NewSquare);
	}
	return arr;
}
//TEST
// console.log(objectProcessing([{size: 10, color: 'red'}, {size: 5, color: 'green'}, {size: 1, color: 'blue'}]));
function arrayManipulation(array) {
	let result = {};
	for (element of array) {
		console.log(element.color);
		result[element.color] = result[element.color] + 1 || 1;
	}

	return result;
}
// TEST
// console.log(arrayManipulation([{size: 10, color: 'orange'}, {size: 5, color: 'green'}, {size: 1, color: 'blue'}, {size: 10, color: 'green', size: 2}, {size: 10, color: 'red', size: 2}, {size: 10, color: 'red', size: 2}]));

function sortingFunction(arr) {

}

console.log(sortingFunction([1,3,66,3,2,8,4,3,26,21]));
