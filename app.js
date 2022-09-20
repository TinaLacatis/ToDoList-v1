const express = require("express"); // require the package express
const https = require("https");
const date = require(__dirname + '/date.js');

const app = express(); //create app constant using express

const items = ["Buy food", "Cook food", "Eat food"];//newListItems starts containig this 3 items of the array and is passed into the list.ejs
const workItems = [];

app.use(express.static("public")); // we acces the static documents
app.use(express.urlencoded({extended: true})); //we take the data from our form
app.set("view engine", "ejs");

app.get("/", function(req, res) { // create a get route that sends the browser the file index.html when a user acces the home route "/"

  const day = date.getDate();
  // const day = date.getDay();

   res.render("list", {listTitle: day, newListItems: items}); //we render our list passing 2 iables. KINDOFDAY and NEWLISTITEMS
 });

app.post("/", function(req, res){
  const item = req.body.newItem;// we hold the valeu of the new item

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);//we add the new ittem to the array item
    res.redirect("/");// we redirect to the home route
  }
})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work list", newListItems: workItems});
});
app.post("/work", function(req, res){
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});


app.listen(3000, function() { // we listen on port 3000
  console.log("Server started on port 3000."); // we console log that our server has been started
});
