const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];



let new_array = [];
gameInfo.forEach(item => new_array.push(`${item.username}!`))
console.log(new_array);



//
// let username_array = [];
// gameInfo.forEach(item => username_array.push(item.score))
//
//   console.log(username_array)

let username_array = [];
gameInfo.forEach((item) => {
  username_array.push(item)
  // console.log(username_array);
  // console.log(item.score);

  let score = item.score
  // console.log(score)

let score_array = []
score_array.push(score)
console.log(score_array);

  // if (score > 5) {
  //   console.log(item.username)
  // }
let x=  item.username

score_array = (score > 5) ? console.log(x) : 0



});


let totalScore = []

gameInfo.forEach((item, i) => {
  totalScore.push(item.score)
});



console.log(totalScore)


let finalScore = totalScore.reduce((a, b) => a + b)

console.log(finalScore);



// totalScore.reduce(score)
//
// function score(total, num) {
//   return total+num
// }
//
// console.log(score())




  //

  //
