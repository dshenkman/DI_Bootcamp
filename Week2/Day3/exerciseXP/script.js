// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .


let colors = ["pink", "purple", "blue", "yellow"]

for (let i=0; i<colors.length; i++) {
	console.log(`My # ${i +1} choice is ${colors[i]}`)
}

// Exercise 2 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]
let people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift();

// Write code to replace “James” to “Jason”.
people.pop();
people.push("Jason")
// Write code to add your name to the end of the people array.
people.push("Daniella")
console.log(people);
// Using a loop, iterate through the people array and console.log each person.
for (let i=0; i<people.length; i++) {
	console.log(people[i]) }
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.

for (let i=0; i<3; i++) {
	console.log(people[i]) }
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
let new_people = people.slice(1,3);
console.log(new_people);
// Write code that console.logs Mary’s index. take a look at indexOf on google.
console.log(people.indexOf("Mary"));

// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1. Because "Foo" is not in the element.
console.log(people.indexOf("Foo"));

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people.push() + 1
console.log(last)

// Exercise 3 : Repeat The Question
// Instructions
// Promt the user for a number, while the number is smaller than 10 continue asking the user for a new number.

// Tip : Which while loop is more relevant for this situation?

let number = prompt("Please enter a number")

while (number < 10) {
	number = prompt("Please re-enter a number")
}

// Exercise 4 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
// Given the object above where the key is the students name and the value is the country they are from.
// 1. Prompt the student for their name :
// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."



let userName= prompt("What is your name?")


let country = guestList['userName']

	if (userName in guestList) {
		console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}`)
	} else {
		console.log ("Hi! I'm a guest.")
	}


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
let family = {
	size: "large",
	kids: "five",
	city: "RBS"	
}
// Console.log the keys. (using a for loop).
for (let value in family) {
	console.log(value)
}
// Console.log the values. (using a for loop).

for (let value in family) {

	console.log(family[value])
}

// Exercise 6
// Instructions
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above, console.log “my name is Rudolf the raindeer”


let array = []
for (let words in details) {
  array.push(words,details[words])
}
console.log(array.join(" "))


// Exercise 7 : Secret Group
// Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

console.log(names.length);












