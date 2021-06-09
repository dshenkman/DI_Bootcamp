
// function moveBoxes() {

// let position = 0
// let smallBox = document.getElementById("animate");


// let move = setInterval(function() {

//   if (position == 350) {

//       clearInterval(move);

//   } else {

//     position ++;
//     smallBox.style.top = position + "px";
//     smallBox.style.left = position + "px"

//   }


// }, 5 );



// }


function drag(ev) {
  event.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  event.preventDefault();
  let drop = ev.dataTransfer.getData("text");

 ev.target.appendChild(document.getElementById(drop));
}
