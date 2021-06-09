function playTheGame() {
	let c = confirm("Do you want to play the game?")

	if (c == false) {
		alert("No problem, Goodbye")
	} else {
		let number = prompt("Please enter a number between 0 and 10")

	
	if (isNaN(number) == true ) {
		alert("Sorry not a number, Goodbye")
	} else if (number <0 || number >10) {
		alert("Sorry it's not a good number, Goodbye")
	} else {
		let compNumber = Math.floor(Math.random() * 11); 
		return compNumber

	}

}


}





function test(userNumber,computerNumber) {

 	if ( userNumber == computerNumber) {
 	 alert("WINNER!!")


	 } else if ( userNumber > computerNumber) {
	 	let userNumber = prompt("Your number is bigger than the computer's, guess again")
	 		if (userNumber == computerNumber) {
	 			 alert("WINNER!!")
	 		} else { 
	 		let userNumber = prompt("Your number is bigger than the computer's, guess again")
	 		}
	 			if (userNumber == computerNumber) {
	 				 alert("WINNER!!")
	 			} else {
	 			alert("out of chances")
	 			 
	 	}


	 } else if (userNumber < computerNumber) {
	 	let userNumber = prompt("Your number is smaller than the computer's, guess again")

	 	if (userNumber == computerNumber) {
	 			alert("WINNER!!")
	 		} else { 
	 		let userNumber = prompt("Your number is smaller than the computer's, guess again")
	 		}
	 			if (userNumber == computerNumber) {
	 				 alert("WINNER!!")
	
		 			} else {
	 			 alert("out of chances")

	 	}

	 }
console.log(computerNumber)
console.log(userNumber)
}

console.log(test(5, playTheGame()))
