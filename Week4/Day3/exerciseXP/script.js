// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
//I think the output will be an array with bread, carrot, potato, chicken, apple, orange. Because the variable result is asking for the rest (in this
//case the whole thing bc nothing else is called) of both variables fruits and vegetables
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
//
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

//
// ------2------
//The output will be ["USA"]
//EDIT: output was an array ["U", "S", "A"]
// const country = "USA";
// console.log([...country]);
//
// ------Bonus------
//Maybe the output will be [",", ","]
//EDIT: output was [undefined, undefined]
// let newArray = [...[,,]];
// console.log(newArray);

// Exercise 2 : Employees
// Instructions

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

  // Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
 //
//  let sayHello = users.map(item => {
//
//     return `Hello ${item.firstName}`
//  })
// console.log(sayHello);

// Using the filter() method, congratulate only the Full Stack Residents.

// const congrats = users.filter(item => {
//
//   if (item.role.includes("Full")) {
//
//     return `Congratulations ${item.firstName}`
//   }
//
// })
//
//
// const congrats2 = congrats.map(item => {
//
//   return `Congratulations ${item.firstName}`
//
// } )
//
// console.log(congrats2);

// Exercise 3 : Star Wars
//
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//
// // 1. Use the reduce() method to combine all of these into a single string.
//
// const string = epic.reduce((acc, val) => {
//
//   return acc + " " + val
//
// })
//
// console.log(string);

// Exercise 4 : Employees #2

let student = [{name: "Ray", course: "Computer Science", isPassed: true},
               {name: "Liam", course: "Computer Science", isPassed: false},
               {name: "Jenner", course: "Information Technology", isPassed: true},
               {name: "Marco", course: "Robotics", isPassed: true},
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
               {name: "Jamie", course: "Big Data", isPassed: false}];

  // Use the filter() method to congratulate the students that passed the course.

  const students = student.filter(item => {

    if (item.isPassed == true) {
      console.log(item.name);
      return item.name
    }
  })

  const students2 = students.map(item => {
    return `Congratulations ${item.name}`

  })

  console.log(students2);
