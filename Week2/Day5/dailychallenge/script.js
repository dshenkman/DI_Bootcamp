function bottlesOfBeer() {

let number = +prompt("Please enter a number")

// 

let grammar;
let bottles;





for (x=1; number > x; x++) {



	 if (x == 1) {
		 grammar = "it" 
	} else if (x>1) {
		 grammar = "them"
		 }



	 if ( number <= 0) {
		console.log("No more bottles of beer")
		return 
	}

	if ((number-x) == 1) {
		bottles= "bottle"


	} else   {
	 bottles = "bottles"}







console.log(`${number} bottles of beer on the wall`)
console.log(`${number} bottles of beer`)
console.log(`Take ${x} down, pass ${grammar} around`)
console.log(`${number-x} ${bottles} of beer on the wall`)

number = number- x;



}

}


bottlesOfBeer()



