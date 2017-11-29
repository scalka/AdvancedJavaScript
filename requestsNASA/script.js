
// ----------------------
// Promises using fetch()
// ----------------------
const url = 'https://api.nasa.gov/planetary/apod?api_key=j1ZSJYMZJrrt9LDEi67LUK04zCM3FOox2UTJXWit';
const url2 = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=j1ZSJYMZJrrt9LDEi67LUK04zCM3FOox2UTJXWit'
let h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h2')[0];
let img = document.getElementsByTagName('img')[0];

let heading = document.getElementById('1');
let secheading = document.getElementById('2');
let image = document.getElementById('3');

fetch(url)
  .then(function(response) {
    if(response.ok) return response.json();
    throw new Error('Request failed.');
  })
  .then(function(data) {
    console.log('fetch() success.',data);
    h1.innerHTML = data.title;
    h2.innerHTML = data.copyright;
    img.src = data.url;

  })
  .catch(function(error) {
    console.log(error);
  });


fetch(url2)
  .then(function(response) {
    if (response.ok) return response.json();
    throw new Error ('Request failed.');
  })
  .then(function(data) {
    console.log(data);
  })


console.log('fetch() request sent');


// Blade Runner 2049 was directed by Denis Villeneuve. It stars: Harrison Ford,RyanGosling,Anade Armas. Its budget was $150,000,000 (estimated).
