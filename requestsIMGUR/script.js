
// ----------------------
// Promises using fetch()
// ----------------------
const url = 'https://api.imgur.com/3/album/g99XF -H "Authorization: Client-Id 27b1fcd80f4f0ec"';

let h1 = document.getElementsByTagName('h1')[0];
let h2 = document.getElementsByTagName('h2')[0];
let img = document.getElementsByTagName('img')[0];
//fetch(url, {headerObject})
fetch(url,  "27b1fcd80f4f0ec")
  .then(function(response) {
    if(response.ok) return response;
    throw new Error('Request failed.');
  })
  .then(function(data) {
    console.log('fetch() success.',data);
  //  h1.innerHTML = data.title;
  //  h2.innerHTML = data.copyright;
  //  img.src = data.url;
//
  })
  .catch(function(error) {
    console.log(error);
  });


console.log('fetch() request sent');


// Blade Runner 2049 was directed by Denis Villeneuve. It stars: Harrison Ford,RyanGosling,Anade Armas. Its budget was $150,000,000 (estimated).
