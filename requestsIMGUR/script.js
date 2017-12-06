
// ----------------------
// Promises using fetch()
// ----------------------
const clientId = '29d360fc53f78ac';

let h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h2')[0];
let img = document.getElementsByTagName('img')[0];

const sendRequest = function(){
  let query = document.getElementById('query').value;
  const url = `https://api.imgur.com/3/gallery/search/?q=${query}`;

  //fetch(url, {headerObject})
  fetch(url,  {headers: {'authorization': `Client-ID ${clientId}`}})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {

      data = data.data[0];
      console.log('fetch() success.',data);
      h1.innerHTML = data.title;
      img.src = data.images[0].link;
  //
    })
    .catch(function(error) {
      console.log('ERROR ' + error);
    });
}

console.log('fetch() request sent');
document.getElementById("submit").addEventListener("click", function(){
    sendRequest();
});

// Blade Runner 2049 was directed by Denis Villeneuve. It stars: Harrison Ford,RyanGosling,Anade Armas. Its budget was $150,000,000 (estimated).
