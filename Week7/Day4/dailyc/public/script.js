const sendData = () => {
  event.preventDefault()

  const fname = document.getElementById('fname').value;
  console.log(fname);
  const lname = document.getElementById('lname').value
  console.log(lname);
  const email = document.getElementById('email').value
  console.log(email);
  const uname = document.getElementById('uname').value
  console.log(uname);
  const pword = document.getElementById('pword').value
  console.log(pword);



  fetch(`http://localhost:5000/register.html?fname=${fname}&lname=${lname}&email=${email}&uname=${uname}&pword=${pword}`)

    .then(res => res.json())
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
  console.log(arr);
  root.innerText = ""

  arr.userArr.forEach(item => {
    let div = document.createElement('div');

    div.innerText = 'Hello, your account is now created!';

    console.log(div.innerText);
    root.appendChild(div)

  });


}

const sendInfo = () => {
  event.preventDefault()

  const username = document.getElementById('username').value;
  console.log(username);
  const password = document.getElementById('password').value
  console.log(password);
  // const list = `${item}: ${amount}`
  // console.log(list);

  fetch(`http://localhost:5000/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      welcomeBack(data)
    })
    .catch(err => {
      console.log(err);

  })
//
}

const welcomeBack = (arr) => {
  let root = document.getElementById('root');
  console.log(arr);

  arr.userArr.forEach(item => {
    let div = document.createElement('div');
    root.innerText = ""

    div.innerText = `Hi ${item.username}, welcome back!`

    console.log(div.innerText);
    root.appendChild(div)

  });


}
