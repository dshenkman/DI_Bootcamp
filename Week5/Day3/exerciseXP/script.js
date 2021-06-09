// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

// const compareToTen = (num) => {
//   return new Promise( (resolve,reject) => {
//     if(num > 10){
//       resolve(` ${num} is greater than 10, success!`)
//     }
//     else{
//       reject(`${num} is less than 10, error!`)
//     }
//   })
//   return p;
// }
// // let myPromise = compareToTen();
// compareToTen(7)
// .then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(error);
//
// })



  // Exercise 2 : Promises
  // Instructions
  // Create a promise that resolves itself in 4 seconds and returns a “success” string.
  // Read about Promise.resolve() and Promise.reject().
  // Add code to catch errors and console.log ‘Ooops something went wrong’.

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "success")
//
//   });
//
// promise()
//   .then(result =>
//      { console.log(result)
//   })

//
// const promise = (num) => {
// return new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         if (num > 20) {
//             resolve("success");
//         }
//          else {
//             reject("Oops something went wrong");
//         }
//     }, 5000);
// })
// }
//
// promise(5).then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(error);
// })
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//
// Promise.resolve('Success').then(function(value) {
//   console.log(value);
// })

Promise.resolve(setTimeout(() => {
        console.log("success");

    }, 5000));

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then(function(value) {
  console.log(value);
})

Promise.reject("boo").then(function(value) {
  console.log(value);
})
