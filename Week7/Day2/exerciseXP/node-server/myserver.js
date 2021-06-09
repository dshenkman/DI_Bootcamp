const http = require('http');

const server = http.createServer((req,res) => {

  res.setHeader('Content-Type', 'text/html')
  // res.end('<h1>This is my first response</h1>');
  // res.end('<h1>This is my second response</h1>');
  res.end('<p>This is my third response</p>');


});

server.listen(3000);


// const two = http.createServer((req,res) => {
//
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>This is my second response</h1>');
//
//
// });
//
// two.listen(9999);
// //
//
// const three = http.createServer((req,res) => {
//
//   res.setHeader('Content-Type', 'text/html')
//
//   res.end('<p>This is my third response</p>');
//
//
// });
//
// three.listen(3001);
