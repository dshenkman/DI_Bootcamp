// //Exercise 1 : Scope
// //Instructions
// //What is the value of a in all the following functions.
//
//
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
//     console.log(a)
// }
// q1()
//
//
// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }
//
// function q22() {
//     alert(a);
// }
//
// q22()
// console.log(a)
//
//
// //#3
// function q3() {
//     window.a = "hello";
// }
//
//
// function q32() {
//     alert(a);
// }
//
// q32()
// console.log(a)
//
// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
//
// q4()
// console.log(a)
//
// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);



// Exercise 2 : Ternary Operator
// Instructions
// Change the conditional into a ternary and assign the function to a variable called experiencePoints.

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

let experiencePoints = function experiencePoints(winBattle) {
  return ( winBattle ? "10" : "2")
}

console.log(experiencePoints(false))

//
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//
// colors.forEach((color, i) => {
//
//   console.log(`#${i+1} choice is ${color} `)
//
// });


// Exercise 4 : Colors #2

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((item, i, arr) => {

    let string = (i<3) ? ordinal[i+1] : ordinal[0]
    arr[i] = (`${i +1}${string} choice is ${item}`)
    console.log(arr[i]);
  });



// Write a JavaScript function that checks whether the value of an input is a string or not.

// function isString(value) {
// 	return typeof value === 'string'
// }
//
//
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// In this exercise, you have to decide which type of variables you have to use:
//
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount= 5000
let bankAccount
const vat = .17
let expenses = ["+200", "-100", "+146", "+167", "-2900"]

 expenses.forEach((item, i) => {

   if (item < 0)

   // bankAmount += item * (vat+1)
   bankAccount =   bankAmount + item * (vat+1)


 });

 console.log(bankAccount);
