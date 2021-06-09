// let title = document.getElementById("title")
// console.log(title)

let docTree = document.body
console.log(docTree)


// 1. The div DOM node?


// 1
// let divTree = doc.firstElementChild
// console.log(divTree)



// 2
let divTree = docTree.children[0]
console.log(divTree)


// 2. The ul DOM node?

// let ulTree = divTree.nextElementSibling
// console.log(ulTree)


let ulTree = docTree.children[1]
console.log(ulTree)


// let secondLiTree = ulTree.children[1]
// console.log(secondLiTree)



let firstLiTree = ulTree.firstElementChild
let secondLiTree = firstLiTree.nextElementSibling
console.log(secondLiTree)









