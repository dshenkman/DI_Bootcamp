
function fetchData() {

let search = document.getElementById("search").value;
let xhr = new XMLHttpRequest();

xhr.open("GET", `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=1`);

xhr.responseType = "json"
xhr.send();
xhr.onload = function() {
    createImages(xhr.response.data)
};

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`);
//   }
// };
xhr.onerror = function() {
  console.log("Request failed");
};

};

function createImages(arr) {
  let root = document.getElementById('root');
  // root.innerHTML = "";
  arr.forEach((item, i) => {
    let img = document.createElement('img');
    img.id= "image"
    img.setAttribute('src', item.images.fixed_height_small.url)
    root.appendChild(img)

    let deleteImg = document.createElement('button')
    deleteImg.innerHTML="Delete"
    root.appendChild(deleteImg)
    deleteImg.addEventListener("click", deleteGif())




  });

}

function deleteGif(arr) {
  let image = document.getElementById('image');
  console.log(image);
  // arr.forEach((item, i) => {
  //   root.innerHTML= "";
  //
  //
  // });

  // image.style.visibility = "hidden"

}

function deleteAll() {
  let root = document.getElementById('root');
  console.log(root);
  root.innerHTML = "";

}
