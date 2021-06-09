const exp = require('express');
const fs = require('fs');


const app = exp()

const data = fs.readFileSync('./rightleft.txt')

let arr = Array.from(data.toString())
console.log(arr);

let num;
function totalSteps()  {
   const number1 = arr.filter(item => item === '>' )
   const number2 = arr.filter(item => item === '<')
   num = number1.length - number2.length
}
totalSteps()

let steps;
function reachLeftSide() {
  // steps =
}
reachLeftSide()

console.log(`Total Steps: ${num}`);


// console.log(`First time in left side is in: ${steps} steps`);
