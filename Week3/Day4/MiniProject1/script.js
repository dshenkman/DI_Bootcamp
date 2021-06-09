

// var tableElements = document.querySelectorAll(".element");





let clearButton = document.getElementById("clearbutton")

let colors = document.querySelectorAll(".box")
console.log(colors)

let rightside = document.getElementById("rightside");

let box;

function grid(x) {

    for (let i = 0; i < x; i++) {

    	box = document.createElement('div')
    	box.id="boxId"
    	// console.log(document.getElementById("boxId"))

    	box.style.border = "1px solid gray"


    	rightside.appendChild(box)



    		box.addEventListener("click", putColor)

    	function putColor() {

        document.getElementById("boxId").style.backgroundColor = holdColor

    		// return putColor
	    		}
        }


}


grid(2500)








let colorPicked;





	// function getColor() {

	// for(let i=0; i< colors.length; i++) {


	// colorPicked = colors[i].style.backgroundColor

	// // return colorPicked


	// 	}

	// }

	for(let i=0; i < colors.length; i++) {

		// console.log(colors[i])


		colors[i].addEventListener("click", function() {
		colorPicked = colors[i].style.backgroundColor
		console.log(colorPicked)

		return colorPicked

		})
	}



let holdColor;

for(let i=0; i < colors.length; i++) {

		colors[i].addEventListener("click", function(event) {
		holdColor = event.target.style.backgroundColor
		// console.log(colorPicked)
    // console.log(colors[i])


		})
	}


// for(let i=0; i < box.length; i++) {

// 	console.log(box[i])


// 		box[i].addEventListener("click", function() {
// 		putColor = holdColor.style.backgroundColor
// 		console.log(putColor)

// 		return putColor

// 		})
// 	}

// function clickColor() {

// 	for(let i=0; i<colors.length; i++) {

// holdColor =  window.getComputedStyle(event.target)
// console.log(holdColor)
// return holdColor;
// }

// }






// function putColor() {

// 	for (let i=0; i<box.length; i++) {
// 		let newColor = holdColor;
// 		return newColor;
// 	}


// }
