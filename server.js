//Vanilla Node.js

const http = require("http");
const fs = require("fs");
const _ = require('lodash');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //lodash
  const num = _.random(0, 20);
  console.log(num);

  //set header content type.
  res.setHeader('Content-Type', 'text/html');

  //HTML file path variable
  let path = '/HTML';
  switch(req.url) {
    case '/':
      path = '/index.html';
      res.statusCode = 200;
      break;
    case '/index': //redirect
        res.statusCode = 301;
        res.setHeader('Location', '/');
        res.end();
    case '/deliberate-directions':
      path += '/deliberate-directions.html';
      res.statusCode = 200;
      break;
    case '/deliberate': //redirect
      res.statusCode = 301;
      res.setHeader('Location', '/deliberate-directions');
      res.end();
    default:
      path += '/404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  })

});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});


//Not needed, until I figure out what app does.
/*app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/deliberate-directions", function(req, res){
  res.sendFile(__dirname + "/HTML/deliberate-directions.html");
}); */
