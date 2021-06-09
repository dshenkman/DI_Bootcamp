const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {

    let cap = arr.map(word => {
      if(typeof word === 'string') {
        return word.toUpperCase()
      } else {
        reject ("All items in this array are not strings")
      }
    })
    resolve(cap)
      })

}

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    if(arr) {
      resolve(arr.sort())
    } else {
      reject("Error")
    }
  })

}
sortWords(arrayOfWords)
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})



makeAllCaps(arrayOfWords)
.then(data => {
  return sortWords(data)
})
.then(sort => {
  console.log(sort);
})
.catch(err => {
  console.log(err);
})
