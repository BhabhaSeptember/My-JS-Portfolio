// // // /* The 'SWITCH' statement syntax: */
// // // switch (expression) {
// // //  case value1:
// // //  //statements to execute
// // //  break;
// // //  case value2:
// // //  //statements to execute
// // //  break;
// // //  case default:
// // //  //statements to execute
// // //  break;
// // // }



// // /* EXAMPLE - CALENDAR */
// // let myNumber = prompt("Enter your favorite day of the week!");
// // let theResponse;
// // switch (myNumber) {
// //  case "Monday":
// //  theResponse = "Ack!";
// //  break;
// //  case "Tuesday":
// //  theResponse = "Hair care day!";
// //  break;
// //  case "Wednesday":
// //  theResponse = "Wacky Wednesday!";
// //  break;
// //  case "Thursday":
// //  theResponse = "The new Friday!";
// //  break;
// //  case "Friday":
// //  theResponse = "You made it!";
// //  break;
// //  case "Saturday":
// //  theResponse = "What a day!";
// //  break;
// //  case "Sunday":
// //  theResponse = "Sunday = Funday!";
// //  break;
// //  default:
// //  theResponse = "Please type in English";
// //  break;
// // }
// // alert (theResponse);



// /* The 'DATE' Object a) example 1 (Using 'GETTER' methods) */
// let myDate = new Date();
// console.log(myDate);


// console.log("1. Current day of the week: " + myDate.getDay()); /*Starts at 0 */
// console.log("2. Current day of the month: " + myDate.getDate());
// console.log("3. Current month of the year: " + myDate.getMonth()); /* Starts at 0 */
// console.log("4. Current year: " + myDate.getFullYear());


/* The 'DATE' Object b) example 2 (Using 'SETTER' methods) */
// let myNewDate = new Date();
// console.log(myNewDate);

// console.log("1. Changing months (Unix time): " + myNewDate.setMonth(7)); /* Unix time =  number of 
// milliseconds (thousandths of a second) since January 1, 1970 */

// console.log("1. Changing months (Human terms): " + myNewDate);







// /* ACTIVITY CALENDAR PROGRAM */
let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// // // add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// // // create a new Date object
let d = new Date();

// // // call the displayDate() function
displayDate();

function displayDate() {
  todayDate.innerHTML = d.toDateString();

}

function displayActivity() {
  let dayOfWeek = d.getDay();


  /* set a variable, called youShould, with a different
     string based on what day of the week it is. */
  let youShould;
   switch (dayOfWeek) {
     case 0:
       youShould = "Take it easy. You've earned it.";
       break;
     case 1:
       youShould = "Gotta do what ya gotta do!";
       break;
     case 2:
       youShould = "Take time to smell the roses!";
       break;
     case 3:
       youShould = "Don't forget to eat breakfast!";
       break;
     case 4:
       youShould = "";
       break;
     case 5:
       youShould = "Make a list of things you like to do.";
       break;
     case 6:
       youShould = "Do one thing from your list of things you like to do.";
       break;
     default:
       youShould = "Error Code 456667355e2-Could Not find Day. g35";
       break;
   }


   /* output the value of youShould into the thingToDo div */    
  document.getElementById("thingToDo").innerHTML = youShould;
}
