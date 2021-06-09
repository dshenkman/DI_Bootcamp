const exp = require('express');
const app = exp();


app.use('/',exp.static(__dirname+'/public'));


// app.get('/aboutMe/:hobby', (req, res) => {
//   const val = req.params.hobby
//   console.log(val);
//   if(typeof val !== 'string') {
//     res.status(404).send('Not Found!')
//   } else {
//     res.send(req.params.hobby)
//
//   }
//
// })

// app.get('/pic', (req, res) => {
//
//     res.send('<img src="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg">')
//
//
// })

// app.get('/form', (req, res) => {
//
//     res.send()
//
// })

app.get('/formData', (req, res) => {
  console.log(req.body);
  res.send(req.body)




})




//
app.set('port', 5000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);

})
