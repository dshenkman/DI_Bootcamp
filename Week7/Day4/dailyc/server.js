const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');


const app = exp()

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/', exp.static(__dirname+'/public'));

app.get('/register.html', (req,res) => {
  console.log(req.query);
  let userArr = []

  const file = fs.readFileSync('./info.txt');
  let fileStr = file.toString();
  userArr = JSON.parse(fileStr)

  // console.log(userArr);
  //
  userArr.push(req.query)
  fs.writeFile('./info.txt', JSON.stringify(userArr), err => {
   if(err) {
     console.log(err);
   }

  })
  res.send({userArr})


})

app.get('/login', (req,res) => {
  console.log(req.query);
  let userArr = []

  const file = fs.readFileSync('./info1.txt');
  let fileStr = file.toString();
  userArr = JSON.parse(fileStr)

  // console.log(userArr);
  //
  userArr.push(req.query)
  fs.writeFile('./info1.txt', JSON.stringify(userArr), err => {
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
