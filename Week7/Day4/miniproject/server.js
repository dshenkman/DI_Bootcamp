const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');


const app = exp()

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/', exp.static(__dirname+'/public'));

// app.get('/showItems', (req,res) => {
//   let userArr = []
//   const file = fs.readFileSync('./list.txt');
//   let fileStr = file.toString();
//   userArr = JSON.parse(fileStr);
//   res.send(userArr);
//
// })

app.get('/addItems', (req,res) => {
  console.log(req.query);
  let userArr = []

  const file = fs.readFileSync('./list.txt');
  let fileStr = file.toString();
  userArr = JSON.parse(fileStr)

  console.log(userArr);
  //
  userArr.push(req.query)
  fs.writeFile('./list.txt', JSON.stringify(userArr), err => {
   if(err) {
     console.log(err);
   }

  })
  res.send({userArr})


})






app.set('port', 5000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);


})
