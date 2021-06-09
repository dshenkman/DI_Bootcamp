const mainDiv = document.getElementById("main")

const header = document.createElement("div");
header.id = "headerId"
header.style.backgroundColor = "#00f57b"
header.style.width = 100%
mainDiv.appendChild(header);

const logo = document.createElement("h1");
logo.id = "logoId"
let newTextNode = document.createTextNode("ROBOFRIENDS")
logo.appendChild(newTextNode)
header.appendChild(logo);

const searchbar = document.createElement("INPUT");
searchbar.id = "searchbarId"
header.appendChild(searchbar);

const searchbarText = document.createElement("label")
searchbarText.id = "searchbarTextId"
let searchText = document.createTextNode("Search Robots")
searchbarText.appendChild(searchText);
searchbar.appendChild(searchbarText);



const container = document.createElement("div")
container.id = "container"


const robots = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          image: 'https://robohash.org/1?200x200'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          image: 'https://robohash.org/2?200x200'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          image: 'https://robohash.org/3?200x200'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          image: 'https://robohash.org/4?200x200'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          image: 'https://robohash.org/5?200x200'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          image: 'https://robohash.org/6?200x200'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          image: 'https://robohash.org/7?200x200'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          image: 'https://robohash.org/8?200x200'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          image:'https://robohash.org/9?200x200'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          image:'https://robohash.org/10?200x200'
        }
        ];
//
// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// // 3. Send the request over the network
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     // analyze HTTP status of the response
//     // e.g. 404: Not Found
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else { // show the result
//     // response is the server response
//     // console.log(`Done, got ${xhr.response.length} bytes`);
//     console.log(xhr.response);
//   }
// };
//
// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };
// xhr.onerror = function() {
//   console.log("Request failed");
// };



let cards = (x) => {

  for (let i = 0; i < x; i++) {



    const card = document.createElement("div");
    card.id = "cardId"


    const robotName = document.createElement("h1")
    robotName.id = "robotName"
    robotName.innerHTML= robots[i].name

    let robImage = document.createElement("img")
    robImage.id = "robotImage"
    robImage.src = robots[i].image;


    let robEmail = document.createElement("div")
    robEmail.id = "robotEmail"
    robEmail.innerHTML = robots[i].email




      mainDiv.appendChild(container)
      container.appendChild(card)
      card.appendChild(robImage)
      card.appendChild(robotName)
      card.appendChild(robEmail)




  }

}

cards(10)



// function search() {
// let search = robots (item => {

let search = () => {

for (let i = 0; i < robots.length; i++) {

  let {name} = robots[i]
  console.log(name);
  var card = document.getElementById("cardId");
  // console.log(card);



      // console.log(name);
      // console.log(searchbar.keyCode);
      // console.log(searchbar.value);

      let x = searchbar.value
      // console.log(card);





        if (name.includes(x)) {

        card.remove()
      }
  }
}


// }


searchbar.addEventListener("input", search)
