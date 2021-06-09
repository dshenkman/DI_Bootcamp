let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Copy this object using the method that was taught in today’s lesson.


const objJson = JSON.stringify(groceries)
console.log(objJson);

let new_groceries = JSON.parse(objJson);
console.log(new_groceries);


// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
//No, bc it was copied using deep cloning so it was copied as a string, so it was passed by value
//and not by reference
groceries.totalPrice = "$35"
console.log(groceries);
console.log(new_groceries);

// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
// Yes, bc it is an object inside of an object, so that part  was  copied by reference

groceries.other.payed = false
console.log(groceries);
console.log(new_groceries);
