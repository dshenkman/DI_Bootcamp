const main = document.getElementById("info")
// loading()
const button = document.getElementById("button")
button.addEventListener("click", getData )


async function getData() {


  try{


const num = Math.floor(Math.random() * 20);

  const response= await fetch(`https://swapi.dev/api/people/${num}`)
  const data= await response.json()
  console.log(data);
  // const planet = await fetch(people.homeworld.url)
  // const planetData = await planet.json()
  showData(data);

  }

catch (err) {
  error()

}

}

getData()



function showData(obj) {



  const names = document.getElementById("name")
  names.innerText = obj.name;
  main.appendChild(names)
  console.log(name);

  const height = document.getElementById("height")
  height.innerText= `Height: ${obj.height}`
  main.appendChild(height)

  const gender = document.getElementById("gender")
  gender.innerText= `Gender: ${obj.gender}`
  main.appendChild(gender)

  const year = document.getElementById("year")
  year.innerText= `Birth Year: ${obj.birth_year}`
  main.appendChild(year)

  const hw = document.getElementById("hw")
  hw.innerText= `Home World: ${obj.homeworld}`
  main.appendChild(hw)



  }




showData()

function error() {
  main.innerText= "Oh No! That person is not available"
  console.log(main);

}

function loading() {
  main.innerText = '<i class="fas fa-spinner fa-pulse">Loading...</i>'

}
