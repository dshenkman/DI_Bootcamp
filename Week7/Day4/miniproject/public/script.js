const sendData = () => {
  event.preventDefault()

  const item = document.getElementById('item').value;
  console.log(item);
  const amount = document.getElementById('amount').value
  console.log(amount);
  // const list = `${item}: ${amount}`
  // console.log(list);

  fetch(`http://localhost:5000/addItems?item=${item}&amount=${amount}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      createData(data)
    })
    .catch(err => {
      console.log(err);

  })
//
}

// const showData = () => {
//
//   // fetch(`http://localhost:5000/addItems?item=${item}&amount=${amount}`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     createData(data)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }


const createData = (arr) => {
  let root = document.getElementById('root');
  console.log(arr);
  root.innerText = ""

  arr.userArr.forEach(item => {
    let div = document.createElement('div');

    div.innerText = `${item.item}: ${item.amount}`;

    console.log(div.innerText);
    root.appendChild(div)

  });


}
