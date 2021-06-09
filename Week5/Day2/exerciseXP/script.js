
// Create a program to fetch the API URL provided above.
// Make an AJAX request to the Giphy API and return an Object.

let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//
// // xhr.responseType = "json"
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     console.log(xhr.response);
//   }
// };
//
// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`);
//   }
// };
// xhr.onerror = function() {
//   console.log("Request failed");
// };

// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2');

xhr.responseType = "json"
xhr.send();
xhr.onload = function() {
  if (xhr.status != 200) {

    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(xhr.response);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`);
  }
};
xhr.onerror = function() {
  console.log("Request failed");
};
