const sendData = () => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  console.log(email);
  const mess = document.getElementById('message').value;
  console.log(mess);


  fetch('http://localhost:5000/formData')
    // .then(res => res.json())
    .then(data => {
      console.log(data);
      createData(data)
    })
    .catch(err => {
      console.log(err);
    })

  }



const createData = (arr) => {
  let root = document.getElementById('root');
  arr.forEach(item => {
    let div = document.createElement('div');
    div.innerText = "hi";
    root.appendChild(div)

  });


}
