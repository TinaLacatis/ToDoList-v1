//test if the current day of the week happens to be on the weekend and sends different messages for weekend or week days (saturday = 6, sunday = 0)

exports.getDate = function (){
  const today = new Date(); //we check the current day
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = getDay;
function getDay() {
  const today = new Date(); //we check the current day
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
};

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
