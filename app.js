const express = require("express"); // require the package express
const https = require("https");

const app = express(); //create app constant using express

app.use(express.static("public")); // we acces the static documents
app.set("view engine", "ejs");

app.get("/", function(req, res) { // create a get route that sends the browser the file index.html when a user acces the home route "/"
  // res.sendFile(__dirname + "/index.html");

  //test if the current day of the week happens to be on the weekend and sends different messages for weekend or week days (saturday = 6, sunday = 0)
  var today = new Date();
  var currentDay = today.getDay();
  if(currentDay === 6 || currentDay === 0){
    res.write("<h1>Yey it's the weekend</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
    //this ^ is equal with ths v
    //res.write("<h1>Boo! I have to work!</h1>");
    //res.write("<p>It is not the weekend.</p>");
    //res.send(); // we can use only one res.send to sent the information but we can use multimple res.write to write the information and then send it with res.send
  }


});


app.listen(3000, function(){ // we listen on port 3000
  console.log("Server started on port 3000."); // we console log that our server has been started
});
