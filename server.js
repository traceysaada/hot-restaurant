// Dependencies
var express = require("express");
var path = require("path");

// set up express app
var app = express();
var PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  
    console.log(tableList);
res.status(200).json(tableList)
})
// get current tables on the wait list
app.get("/api/waitlist", function(req, res){
let tables =[];
if(tableList.length > 5) {
    tables = tableList.slice(5);
}
res.status(200).json(tables);
})

// Create a reserve post route

// Starts the server to being listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
