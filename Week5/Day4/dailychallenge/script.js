const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// console.log(promise1);
// console.log(promise2);
// console.log(promise3);

Promise.all([promise1, promise2, promise3])
.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
