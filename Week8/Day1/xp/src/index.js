import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Exercise 2: JSX Introduction
// Instructions
// Create a React App
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;
// Render the variable
// Expected Output:(without the grey border)

// Exercise 4: Operations In JSX
// Instructions
// In your react app create a constant variable with the sum 5 + 5 and some text (use jsx format)
// Render the result of the sum with the text

// Exercise 5: JSX And HTML
// Instructions
// In the react app, use jsx to create a constant variable containing a block of HTML in multiple lines (for example an unordered list)

// Exercise 8: JSX And Variables
// Instructions
// In a react app, create 2 variables: name and age
// Use the variables to render (with jsx) the following output:

const myelement = <h1>I Love JSX!</h1>
console.log(myelement);
const sum = 5 + 5
const list = (
<ul>
<li>Apples</li>
<li>Bananas</li>
<li>Cherries</li>
</ul>
)

const name = <b>John</b>
// console.log(name);
const age = 12
console.log(age);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // myelement,
  // sum,
  // `React is ${sum} times better with JSX`,
  // list,
  `${name} is ${age} years old`,
  // name,
  document.getElementById('root')
);

// Exercise 3: No JSX
// Instructions
// In your react app create an element without jsx and render it
// Expected Output:(without the grey border)
//
// jsx2

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
