
// // Exercise 1 : Change The Navbar

// // In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// let navBarWebsite = document.getElementById("navBar")

// navBarWebsite.setAttribute("id", "socialNetworkNavigation")

// console.log(navBarWebsite)

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).

//  let newLi = document.createElement('li')  

//  console.log(newLi)

// // Create a new text node with “Logout” as its specified text.

// let newTextNode = document.createTextNode('Logout');

// console.log(newTextNode)

// // Append the text node to the newly created list node (li).

// newLi.appendChild(newTextNode);
// console.log(newLi)


// // Finally, append this updated list node to the unordered list above, using the appendChild method.

// let bodyWebsite = document.body
// let divWebsite = bodyWebsite.firstElementChild
// let ulWebsite = divWebsite.firstElementChild
//  // newLi = ulWebsite.lastElementChild
// console.log(newLi)
// console.log(ulWebsite)
// ulWebsite.appendChild(newLi)
// newLi=ulWebsite.lastElementChild
// console.log(newLi)
// console.log(ulWebsite)



// // Exercise 2 : Users

// // In the HTML above change the name “Pete” to “Richard”.

// let bodyWebsite = document.body
// console.log(bodyWebsite)
// let firstUl = bodyWebsite.children[1]
// let firstUlSecondLi = firstUl.children[1]
// console.log(firstUlSecondLi)
// firstUlSecondLi.textContent = "Richard"


// // Change each first name of the two <ul>'s to your name.

// // At the end of each <ul> add a <li> that says “Hey students”.


// 	let lists= document.getElementsByClassName("list");

// 	for (let i = 0; i < lists.length; i++) {

// 		console.log(lists[i]);
// 		let firstLi = lists[i].firstElementChild;
// 		console.log(firstLi)
// 		firstLi.textContent = "Daniella"

// 		let newLi = document.createElement('li'); 
// 		let newTextNode = document.createTextNode('Hey students');
// 		newLi.append(newTextNode);
// 		console.log(newLi)
// 		console.log(lists[i].appendChild(newLi))
// 		let secondUl = lists[1]
// 		console.log(secondUl)
// 		secondUl.removeChild(secondUl.childNodes[1])

//      }



// Exercise 3 : Users And Style

// let bodyWebsite = document.body;
// let divWebsite = bodyWebsite.firstElementChild;
// divWebsite.style.backgroundColor = "lightblue"
// divWebsite.style.padding = "10px"
// let ulWebsite= divWebsite.nextElementSibling;
// let firstLi = ulWebsite.firstElementChild
// firstLi.style.visibility = "hidden";
// let secondLi = firstLi.nextElementSibling;
// secondLi.style.border = "3px solid blue"
// bodyWebsite.style.fontSize = "30px";


