// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

// async function fetchApi() {
//   const response = await fetch("https://swapi.dev/api/starships/9/")
//   const json = await response.json()
//   console.log(json);
//
// }
//
// fetchApi()

// Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyze the code provided above what will be the outcome?
// "calling" will show up on the console log right away because it is the first part of the asyncCall function which is being
//called. Then the asyncCall function waits for the resolveAfter2Seconds function, so after two seconfs "resolved" will appear
