const express = require("express"); // require the package express
const https = require("https");

const app = express(); //create app constant using express

let items = ["Buy food", "Cook food", "Eat food"];//newListItems starts containig this 3 items of the array and is passed into the list.ejs

app.use(express.static("public")); // we acces the static documents
app.use(express.urlencoded({extended: true})); //we take the data from our form
app.set("view engine", "ejs");

app.get("/", function(req, res) { // create a get route that sends the browser the file index.html when a user acces the home route "/"
  // res.sendFile(__dirname + "/index.html");

  //test if the current day of the week happens to be on the weekend and sends different messages for weekend or week days (saturday = 6, sunday = 0)
  let today = new Date();//we check the current day
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);


  // let currentDay = today.getDay();
  // let day = "";
  // --------------------------------------- Week day with SWITCH -------------------------------------------------
  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //   console.log("Error: current day is equal to: " + currentDay);
  // }

  // --------------------------------------- Week day with IF -------------------------------------------------
  // if (currentDay === 0 || currentDay === 0) {
  //   day = "Weekend";
  //
  //   //res.write("<h1>Yey it's the weekend</h1>");
  // } else {
  //   day = "Weekday";
  //
  //   //res.sendFile(__dirname + "/index.html");
  //   //this ^ is equal with ths v
  //   //res.write("<h1>Boo! I have to work!</h1>");
  //   //res.write("<p>It is not the weekend.</p>");
  //   //res.send(); // we can use only one res.send to sent the information but we can use multimple res.write to write the information and then send it with res.send
  // }


   res.render("list", {kindOfDay: day, newListItems: items}); //we render our list passing 2 iables. KINDOFDAY and NEWLISTITEMS
 });

app.post("/", function(req, res){
  let item = req.body.newItem;// we hold the valeu of the new item
  items.push(item);//we add the new ittem to the array item
  res.redirect("/");// we redirect to the home route
})

app.listen(3000, function() { // we listen on port 3000
  console.log("Server started on port 3000."); // we console log that our server has been started
});
