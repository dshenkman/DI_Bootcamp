const http = require('http');


    const server = http.createServer((req,res) => {
      const user = {
              firstname: 'John',
              lastname: 'Doe'
          }


      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(user))



    });

    server.listen(8080);
