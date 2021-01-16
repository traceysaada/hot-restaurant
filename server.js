// Dependencies
var express = require("express");
var path = require("path");

// set up express app
var app = express();
var PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Business Logic
const reservations = [];
const waitingList = [];

// Routes to HTML
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// basic route that sends the user to the AJAX Page

// displays tables & waiting list
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// displays reservation addition
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// displays a table list
app.get("/api/tables", function(req, res) {
  
 
res.json(reservations)
})
// get current tables on the wait list
app.get("/api/waitlist", function(req, res){

res.status(200).json(waitingList);
})

// Create a reserve post route
app.post("/api/tables", function(req, res) {
    
    if(reservations.length >= 5) {
        waitingList.push(req.body);
        res.send(false)
        console.log("I was put on the waitng list")
    } else {
        reservations.push(req.body)
        console.log("I got onto the reservatins, the current no of reserverations is: ", reservations.length)
        res.send(true)
    }
})


// Starts the server to being listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
