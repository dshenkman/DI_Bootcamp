// // Exercise 1 : Change The Article


// // Using DOM methods, remove the last paragraph in the <article> tag from the DOM.

// let body = document.body;
// let article = body.firstElementChild;
// let lastP = article.lastElementChild;
// console.log(lastP);
// article.removeChild(lastP);

// // Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.


// let h2 = document.getElementsByTagName("h2")[0]
// console.log(h2)

// h2.addEventListener("click", changeBackgroundColor)

// function changeBackgroundColor() {

// 		h2.style.backgroundColor = "pink"
// }

// // Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)

// let h1 = document.getElementsByTagName("h1")[0]
//  console.log(h1)

// h1.style.fontSize = Math.floor(Math.random() * 100) +"px";

// // Add an event listener which will hide the h3 when it’s clicked on (use the display property).

// let h3 = document.getElementsByTagName("h3")[0]
// console.log(h3)

// h3.addEventListener("click", hideElement)

// function hideElement() {

//  h3.style.display = "none";
// }

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// let button = document.getElementsByClassName("button")[0]
//  console.log(button)

// button.addEventListener("click", makeBold) 

// let p = document.querySelectorAll("p")
// 	console.log(p)


// function makeBold() {


// for ( let i=0; i < p.length; i++) {

// 		p[i].style.fontWeight = "bold" 
// 		}


// }

// // When the “Submit” button of the form is clicked:
// // get the values of the input tags
// // make sure that they are not empty,
// // then append them to a HTML table, in the div, below the form.

// let submit = document.getElementById("submit")

// console.log(submit)

// submit.addEventListener("click", answers)


// let firstName;
// let lastName;
// let div;
// let table;
// let tbody;
// let row;
// let td;
// let firstNameAnswers;
// let lastNameAnswers;

// function answers() {

// 	event.preventDefault()

// 	 firstName = document.getElementById("fname").value;
// 	 console.log(firstName)

// 	 lastName = document.getElementById("lname").value;
// 	 console.log(lastName)

// 	 if (firstName == '' || lastName == '') {
// 	 	alert("Please enter a value in both text boxes")
// 	 } 

// div = document.getElementsByClassName("usersAnswer")[0];
// table = document.createElement("table");
// row = document.createElement("tr");
// td = document.createElement('td');

// table.style.width  = '500px';
// table.style.border = '1px solid black';

// firstNameAnswers = document.createTextNode(`${firstName}`)

// lastNameAnswers = document.createTextNode(`${lastName}`)



// td.appendChild(firstNameAnswers);
// row.appendChild(td);
// table.appendChild(row);
// div.appendChild(table); 


// td.appendChild(lastNameAnswers);
// row.appendChild(td);
// table.appendChild(row);
// div.appendChild(table);


// }

// // When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// let para = document.getElementById("p")


// console.log(para)

// para.addEventListener("mouseover", hover)

// function hover() {
// 	para.style.opacity = "0.1"
		
// }
// Exercise 2 : Transform The Sentence

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
// let bold = document.getElementsByTagName("strong")
// let i;

// function getBold_items() {

// 	console.log(bold)
// }

// getBold_items()

// // Create a function called highlight() that changes the color of all the bold text to blue.


// function highlight() {



// for (i=0; i < bold.length; i++) {

// 	bold[i].style.color = "blue"

	

// }

// }


// // Create a function called return_normal() that changes the color of all the bold text back to black.

// function return_normal() {



// for (i=0; i < bold.length; i++) {

// 	bold[i].style.color = "black"


// }

// }

// for (i=0; i < bold.length; i++) {

	

// 	bold[i].addEventListener("mouseover", highlight)
// 	bold[i].addEventListener("mouseout", return_normal)

// }









