// // Exercise 1 : Location
// // Instructions
// // Analyze the code below. What will be the output?
//
// // I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
//
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
//
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.

// let displayStudentInfo= (studentObject) => {
//   const fullName = studentObject
//
//   const { first, last} = fullName
//
//   return `Your full name is ${first} ${last}`
//
// }
//
//
//
//
// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

// Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
//
// const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// let users_array = Object.entries(users)
// console.log(users_array);
//
// // Modify the outcome of part 1, by multipling the user’s ID by 2.
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//
// let multiplyId = users_array.map(item => {
//
//  return   `${item[0]}, ${item[1] *2}`
//
// })
//
// console.log(multiplyId);

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// The output will show what data type the varible "member" is. It is an object
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const member = new Person('John');
// console.log(typeof member);

// Exercise 5 : Dog Class

// Which constructor will successfully extend the Dog class?

//    #2. Because 1) Need to have super after constructor, and only #2 and #3 have that.
//                2) Dog has name parameter in constructor, and option #2 is the only
//                  option which also includes that, and then it sets this.size bc
          //        size is not a parameter in class Dog
