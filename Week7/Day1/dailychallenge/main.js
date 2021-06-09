// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

// const largeNumber = 356
//
// module.exports = {
//    largeNumber: largeNumber
// };

// Part III:
// Create a file named main.js and create a function that returns the current date and time. Export the module.
// Use the exported module in a script.js file.

function getCurrentDate () {
  return Date();
};


module.exports = {
    myDate : getCurrentDate
}
