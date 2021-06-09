const fs = require('fs');

// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal


// const data = fs.readFileSync('./exercise.txt')
// console.log(data.toString());


// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

// const data = "new data file"
// fs.writeFile('./data.txt', data, err => {
//  if(err) {
//    console.log(err);
//  } else {
//    console.log(data);
//  }
//
// })

// Exercise 3 : Appending And Deleting Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create and write to a new text file. (Example: “Buy Milk”)

const data = "buy milk, "
fs.writeFile('./data2.txt', data, err => {
 if(err) {
   console.log(err);
 } else {
   console.log(data);
 }

})

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

let data2 = "buy orange juice"

fs.appendFile('./data2.txt', data2, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(data2);
  }

})

// Use the Node js File System to delete the file.

fs.unlink('./data2.txt', err=> {
  if (err) {
    console.log(err);
  }
})
