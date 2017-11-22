//without method chaining

let MathsLib = {
	num: 10,
	addTwo() {
		this.num += 2;
		return this;
	},
	triple() {
		this.num *= 3;
		return this;
	},
	timesTen() {
		this.num *= 10;
		return this;
	},
	print() {
		console.log(this.num);
	}
} 

// with method chaining
MathsLib.addTwo().triple().timesTen().print();


MathsLib.addTwo();
MathsLib.triple();
MathsLib.timesTen();
MathsLib.print();