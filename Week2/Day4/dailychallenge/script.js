

let words = prompt("Please enter several words (separated by commas)")
let array = words.split(" ");

let arrayToObject = {...array}
console.log (arrayToObject)

console.log("*".repeat(array.length))

for (word in arrayToObject) {
	console.log("*" + " " + arrayToObject[word] + " " + "*")
}

console.log("*".repeat(array.length))



