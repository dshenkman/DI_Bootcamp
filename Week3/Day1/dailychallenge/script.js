// Create an array which value is the planets of the solar system.

let planets = ["Mercury", "Venus", "Earth","Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];


// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".

for ( let i = 0; i < planets.length; i++) {

	let newDiv = document.createElement('div');
	newDiv.classList.add("planet", planets[i])
	console.log(newDiv)

	let list = document.getElementsByClassName("listPlanets")[0];
	list.appendChild(newDiv);
}

