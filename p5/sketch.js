function Circle(x = 50, y = 50, r =10, col = '#f00')  {
	this.x = x;
	this.y = y;
	this.r = r;
	this.col = col;
	this.vx = random(-5, 5);
	this.vy = random(-5, 5);
	this.draw = function (){
		fill(this.col);
  		ellipse(this.x, this.y, this.r)
	};
	this.move = function () {
		//without this scope is in betwen {} so we need 
		this.x += this.vx;
		this.y += this.vy;
	};
}

function ChildCircle(x, y, r, col = 'fff', h1, h2, h3) {
	Circle.call(this, x, y, r, col);
	this.h1 = this.x;
	this.h2 = this.y;
	this.h3 = this.x - this.x/2;
	this.hat = function() {
		triangle(this.h1, this.h2, this.h1+50, this.h2, this.h3, this.h3+50);
	}
}

let circle1;
let circles = [];
let childCircles = [];
let numCircles = 5;

//at start
function setup() {
	createCanvas(500, 500);
	background(255,250, 50);
/*	circle1 = new Circle();
	for(let i = 1; i < numCircles; i++){
		circles[i] = new Circle(random(0, width), random(0, height));
	}*/
}
// every .. seconds
function draw() {

	//clear background
	background(255,250, 50);


	circles.forEach( function (circle) {
		circle.draw();
		circle.move();
	});

	childCircles.forEach( function (child) {
		child.draw();
		child.hat();
		child.move();
	});
}

function mousePressed() {
	let c = new Circle(mouseX, mouseY, 50, '#fff025');
	circles.push(c);

	let child = new ChildCircle();
	childCircles.push(child);

}

