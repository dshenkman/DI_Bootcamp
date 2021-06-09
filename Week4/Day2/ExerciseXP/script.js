// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

// const add = (a,b) => a + b;
// console.log(add(2,2))

// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
//
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);
// console.log(addToTen(3));
// I think it will be 13 bc addTo() is value of x and then
//addToTen is now saying that whatever number is inside will be added to 10


// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
// console.log(curriedSum(30)(1));
// I think the outcome will be 31 bc the function adds a + b and 30 and 1 are the Parameters

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
// 
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// console.log(add5(12));
// I think the outcome will be 17, because the goal of the function  add5() is to add 5 to its parameter


// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
console.log(compose(add1, add5)(10));
// I think it will be 16, because 10 = a. And then (add1, add5) both take 10 and add 1.
// so first 10+1 = 15. and then 15 + 1 = 16
