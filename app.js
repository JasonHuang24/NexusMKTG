//Express.js

const express = require("express");
const bodyParser = require("body-parser");

//express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//listen for requests
app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})

//register view engine
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.sendFile("/index.html", {root: __dirname});
});

app.get("/deliberate-directions", function(req, res){
  res.sendFile("/HTML/deliberate-directions.html", {root: __dirname});
});

//redirects
app.get("/deliberate", (req, res) => {
  res.redirect('/deliberate-directions');
});

//This should add my CSS and other folders
app.use(express.static(__dirname + '/CSS'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/JS'));
app.use(express.static(__dirname + '/HTML'));

//404 Page, needs to be at the bottom or else will fire before redirects.
app.use((req, res) => {
  res.status(404).sendFile("/HTML/404.html", {root: __dirname});
});
