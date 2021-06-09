// Exercise 1 : Keyless Car

function checkDriverAge(age) {
	if (age < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (age > 18) {

		alert("You are old enough to drive, Powering On. Enjoy the ride");

	} else if (age = 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride");

	}
}

checkDriverAge(20);

// // Exercise 2 : What’s In My Wallet ?

	let change = {

		Quarters: 0.25,
		Dimes: 0.1,
		Nickels: 0.05,
		Pennies: 0.01
	}

function changeEnough(amountOfChange, itemPrice) {

	for (let i = 0; i < amountOfChange.length; i++) {
		if ((change["Quarters"] * amountOfChange[i]) + 
		   	(change["Dimes"] * amountOfChange[i +1 ]) +
		   	(change["Nickels"] * amountOfChange[i + 2]) +
		   	(change["Pennies"] * amountOfChange[i +3]) >= itemPrice) {
			return true 
		} else {
	
		return false;
	}
}

}

console.log(changeEnough([0, 0, 20, 5], 0.75 ))



// Exercise 3: Find The Multiples Of 23

function findMultiples(multiplesOf, limit) {

	let numbers = []

  	for (let i=0; i <limit.length; i++) {
  		if (limit[i] % multiplesOf === 0) {
          numbers.push(limit[i])
            		} 
  	}

 return numbers;
}

console.log(findMultiples(23,[...Array(500).keys()]))

console.log( (findMultiples(23,[...Array(500).keys()])).reduce((a,b) => a + b,0)  )


// Exercise 4 : Amazon Shopping

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
	let amazonItem = prompt("Please enter an item");
	if (amazonItem in amazonBasket) {
		alert(`${amazonItem} is in your basket`)
	} else {
		alert("This item is not in your basket")
	}
}
checkBasket()


// Exercise 5 : Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  


let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]


function myBill() {

let items;
for (let property in stock) {
	if (stock[property] >= 1) {
// 	}
		let items = property
		return items

		}
}

		
	
}

// }


console.log(myBill());


// Exercise 6 : Tips



function tipCalculator(bill) {

	let tip;
	
		if (bill < 50) { 
		
		 tip = (bill * .2)
	 } else if (bill >=50, bill <=200) {

	 	tip = bill * .15
	 } else if (bill > 200) {
 		tip = bill * .10
	  } 

	  console.log(tip)

	 let finalBill = tip + bill

	 // console.log(finalBill)
	 return finalBill


}


// tipCalculator(300)
// console.log(tipCalculator(300))


// Exercise 7 : Vacations Costs

function hotel_cost() {
	let nightsInHotel = prompt("How many nights would you like to stay?")

		while (nightsInHotel == NaN ) {
	let nightsInHotel = prompt("How many nights would you like to stay?")
		}

	return nightsInHotel * 140

}

console.log(hotel_cost())

function plane_ride_cost() {

	let destination = prompt("What is your destination?")
	
	if (destination="London") {
		return 183
	}

	if (destination="Paris") {
		return 220
	}

	else {
		return 300
	}
}

console.log(plane_ride_cost())

function rental_car_cost() {

	let daysWithCar = prompt("How many days would you like to rent the car for?")
	if (daysWithCar > 10) {
		let cost = 40 * daysWithCar
		let discountAmount = cost * .05
		let finalPrice = cost - discountAmount
		return finalPrice
	}

	return daysWithCar * 40
}

console.log(rental_car_cost())

function total_vacation_cost() {

	return rental_car_cost() + plane_ride_cost() + hotel_cost()
}

console.log(total_vacation_cost())











