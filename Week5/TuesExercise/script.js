
function getData() {

const data = null;

let countryName = document.getElementById('country').value;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.responseType = 'json';
xhr.open("GET", `https://covid-19-data.p.rapidapi.com/report/country/name?name=${countryName}&date=2020-04-01`);
xhr.setRequestHeader("x-rapidapi-key", "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
xhr.send(data);
xhr.onload = function() {
  showData(xhr.response);
  console.log(xhr.response);

}
xhr.onerror = function() {
  alert("Please try in few minutes, the server is down");
};

}

function showData(arr) {
  console.log(arr);

    // let root = document.getElementById("root")
    //
    // let country1 = document.createElement("h1")
    // // div.setAttribute("src", arr.provinces)
    // // console.log(div.setAttribute("src", arr))
    //
    // country1.innerText= arr[0].country
    // root.appendChild(country1)
    //
    // let confirmed= document.createElement("p");
    // confirmed.innerText=`Confirmed: ${arr[0].provinces[0].confirmed}`
    // root.appendChild(confirmed)
    //
    // let deaths= document.createElement("p");
    // deaths.innerText=`Deaths: ${arr[0].provinces[0].deaths}`
    // root.appendChild(deaths)
    //
    // let recovered= document.createElement("p");
    // recovered.innerText=`Recovered: ${arr[0].provinces[0].recovered}`
    // root.appendChild(recovered)
    //
    // let active= document.createElement("p");
    // active.innerText=`Active: ${arr[0].provinces[0].active}`
    // root.appendChild(active)



}
