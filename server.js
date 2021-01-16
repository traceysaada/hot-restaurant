// Dependencies
var express = require("express");
var path = require("path");

// set up express app
var app = express();
var PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation (DATA)



// Routes to HTML 


// basic route that sends the user to the AJAX Page


// displays tables & waiting list


// displays reservation addition



// displays a table list


// get current tables on the wait list 


// Create a reserve post route 


// Starts the server to being listening 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
