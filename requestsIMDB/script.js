
// ----------------------
// Promises using fetch()
// ----------------------
const url = 'http://www.theimdbapi.org/api/find/movie?title=blade+runner&year=2017';

let p = document.getElementsByTagName('p')[0];
let h = document.getElementsByTagName('h1')[0];

fetch(url)
  .then(function(response) {
    if(response.ok) return response.json();
    throw new Error('Request failed.');
  })
  .then(function(data) {
    console.log('fetch() success.',data);
    h.innerHTML = data[0].title;
    p.innerHTML = `${data[0].title} was directed by ${data[0].director}.
                  <br> It stars:${data[0].stars}. 
                  <br>Its budget was ${data[0].metadata.budget}.`;
  })
  .catch(function(error) {
    console.log(error);
  });

console.log('fetch() request sent');


// Blade Runner 2049 was directed by Denis Villeneuve. It stars: Harrison Ford,RyanGosling,Anade Armas. Its budget was $150,000,000 (estimated).
