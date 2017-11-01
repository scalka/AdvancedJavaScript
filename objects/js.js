let movie1 = {
	title: 'En man som heter Ove',
	year: 2017,
	genre: 'drama',
	director: 'Hannes Holm',
	print() {
		console.log(`Movie: ${this.title} ${this.year}  ${this.genre} ${this.director}`);
	}
}
let movie2 = {
	title: 'Passengers',
	year: 2016,
	genre: 'sci-fi',
	director: '	Morten Tyldum',
	print() {
		console.log(`Movie: ${this.title} ${this.year}  ${this.genre} ${this.director}`);
	}
}
let movie3 = {
	title: 'The Kite Runner',
	year: 2008,
	genre: 'drama',
	director: 'Marc Forster',
	print() {
		console.log(`Movie: ${this.title} ${this.year}  ${this.genre} ${this.director}`);
	}
}	
let movie4 = {
	title: 'La vita e bella',
	year: 1999,
	genre: 'drama',
	director: 'Roberto Benigni',
	print() {
		console.log(`Movie: ${this.title} ${this.year}  ${this.genre} ${this.director}`);
	}
}

movie1.print();

arr = [movie1, movie2, movie3, movie4];

console.log(arr);

arr.forEach(function(movie){
	movie.print();
});



let person = {
	firstname: 'Jim',
	lastname: 'Jones',
	age: 28,
	gender: 'm',
	interests: [
		'football',
		' music'
	],
	greeting() {
		console.log(`My name is ${this.firstname}`)
	},
	bio() {
		console.log(`${this.firstname} ${this.lastname} is ${this.age} years old. He likes ${this.interests}`)
	}

}

let person2 = {
	firstname: 'Samantha',
	lastname: 'Smith',
	age: 24,
	gender: 'f',
	interests: [
		'rugby',
		'surfing'
	],
	greeting() {
		console.log(`My name is ${this.firstname}`)
	},
	bio() {
		console.log(`${this.firstname} ${this.lastname} is ${this.age} years old. She likes ${this.interests}`)
	}
}

person.bio();
person2.bio();