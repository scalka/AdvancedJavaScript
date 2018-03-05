let circle1;
let circles = [];
let childCircles = [];
let numCircles = 5;

function Circle(x = 50, y = 50, r =10, col = '#ffc689')  {
	this.x = x;
	this.y = y;
	this.r = r;	this.col = col;
	this.vx = random(-5, 5);
	this.vy = random(-5, 5);
}

Circle.prototype.move = function () {
	//without this scope is in betwen {} so we need 
	this.x += this.vx;
	this.y += this.vy;
};

Circle.prototype.draw = function () {
	fill(this.col);
	ellipse(this.x, this.y, this.r)
};

function ChildCircle(x = canvas.width/2, y = canvas.height/2, r =10, col = '#ed8787') {
	Circle.call(this, x, y, r, col);
}
ChildCircle.prototype = Object.create(Circle.prototype);
ChildCircle.prototype.move = function() {
	this.x += this.vx;
	this.y += this.vy;
	if (this.x <= 0 || this.x >= 500 ){
		this.svx = -this.vx;
	}
	if (this.y <= 0 || this.y >= 500){
		this.vy = -this.vy;
	}
}
//at start
function setup() {
	createCanvas(500, 500);
	background("#ffffff");
}
// every .. seconds
function draw() {
	//clear background
	background("#ffffff");

	circles.forEach( function (circle) {
		circle.draw();
		circle.move();
	});

	childCircles.forEach( function (child) {
		child.draw();
		child.move();
	});
}

function mousePressed() {
	let c = new Circle(mouseX, mouseY, 50);
	circles.push(c);

	let child = new ChildCircle();
	childCircles.push(child);

}

