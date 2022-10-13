//Express.js
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes')
//express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://xinguanghuang:3XaSi1N6uL6Dj62d@cluster0.okasz7m.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//Middleware and static files
app.use(morgan('dev')); //morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/CSS')); //This should add my CSS and other folders
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/JS'));
app.use(express.static(__dirname + '/HTML'));

//routes
app.get("/", function(req, res){
  res.render('index', {title: 'Home'})
});

app.get("/deliberate-directions", function(req, res){
  res.render('website portfolio/deliberate-directions', { title: 'Deliberate Directions' })
});

//admin routes
app.use('/admin', adminRoutes);

//404 Page, needs to be at the bottom or else will fire before redirects.
app.use((req, res) => {
  res.status(404).render('404', {title:'404'});
});
