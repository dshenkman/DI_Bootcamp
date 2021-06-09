let listTasks = [];
let button = document.getElementById('button')
let task = document.getElementById('task')
let list = document.getElementsByClassName('listTasks')

button.addEventListener("click", addTask)

function addTask() {

  event.preventDefault()

  let x = task.value

  if (x.length == 0) {
    alert("Please enter a task")
  } else {
      listTasks.push(x)
  }
  console.log(listTasks)

 let text = document.createTextNode(`${listTasks}`)
}
