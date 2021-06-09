let letters = document.getElementById("letters")
console.log(letters)

letters.addEventListener("keydown", onlyLetters)

function onlyLetters() {

	if (event.keyCode <= 57 || event.keyCode >=91) {

		event.preventDefault()



		 // alert("You did not enter a letter!");





	}

}