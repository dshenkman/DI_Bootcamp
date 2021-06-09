let button = document.getElementById("lib-button")

console.log(button)

button.addEventListener("click", getValues)

let ul = document.getElementById("ul")
 console.log(ul)

function getValues() {


for (i=0; i<ul.length; i++) {


	if (ul[i].value == " ") {
		alert("Please enter a value")
	} 

}

	let noun = document.getElementById("noun").value;
	console.log(noun)
	let adjective = document.getElementById("adjective").value;
	console.log(adjective)
	let name = document.getElementById("person").value;
	console.log(name)
	let verb = document.getElementById("verb").value
	console.log(verb)
	let place = document.getElementById("place").value;
	console.log(place)



	let story = document.getElementById("story")

	let madLib = document.createTextNode(`One day, ${noun} was walking and saw a ${adjective} tree. 
	He showed it to his friend ${name}. Together, they started ${verb} to ${place} to 
	look for more trees`)

	story.appendChild(madLib);



}



