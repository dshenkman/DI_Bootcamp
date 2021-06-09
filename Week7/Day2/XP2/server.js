const exp = require('express');
const app = exp();


// app.use('/',exp.static(__dirname+'/public'));



// app.get('/',(req,res)=>{
//
//   const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//
//     res.send(user)
//     console.log(user);
// })

// app.get('/:id', (req, res) => {
//
//     res.send({id: req.params.id})
//     console.log({id: req.params.id});
//
// })
// //
app.set('port', 3000);
app.listen(app.get('port'), ()=>{

console.log(`App started at port ${app.get('port')}`);

})
