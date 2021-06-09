


// function findAge (myAge) {
// 	let momAge = 2 * myAge
// 	let dadAge = 1.2 * momAge
	
//     console.log(`my mom's age is ${momAge}`)
//     console.log (`my dad's age is ${dadAge}`)
// }

// findAge(31)


let colors = ["blue", "green", "yellow"];
console.log(colors)
console.log(colors.join(" "))

let numbers = "one, two, three";
console.log(numbers.replace(/,/g," "));

function userInfo(name, age) {
    let result = "My name is" + name + "my age is"  + age 
    return result 
}

let girlInfo = userInfo("Sarah", 22)
console.log(girlInfo) // girl  = result


// function userInfo(name, age) {
//     let result = "My name is " + name + " my age is "  + age 
//     // return "hey" 
//     // return result
// }

// let girlInfo=userInfo()
// console.log(girlInfo)

// function user2Info(name, age) {
//     if (name == "Sarah") {
//         let result = "Hey " + name 
//         return result 
//     } else {
//         return "You are not the right person"
//     }
// }

// let girl2Info = user2Info("Sari", 22)
// console.log(girl2Info)

function logMomAge(myAge) {
	let momAge = myAge * 2
	return momAge 
}

let momAgeResult= logMomAge(31)
console.log(momAgeResult)
