// // let theText = prompt("What would you like to order?");

// // function smileyIt(theText) {
// //   theText += " :)";
// //   return theText;
// // }
// // console.log(
// //   "Checking for meals with: " + smileyIt(theText) + " porkPlease be patient!"
// // );

// /* CONCEPTS COVERED:
//     1. Defining a function - functon myFunction() { //statements } 
//     2. Function head - function myFunction() 
//     3. Function body - { statements }
//     4. Calling a function - myFunction();
//     5. Defining parameters - function myFunction(theText) { } 
//     6. Passing arguments - myfunction("Some text"); */

// /* RETURNING A VALUE */
// function whatsTheNumber() {
//   return 3000;
// }

// let theTotal = whatsTheNumber() + 80;
// console.log("The total is: " + theTotal)









/* PROGRAMMING : FUNCTION JUNCTION */
/* PSEUDOCODE
1. todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/

/*
2. todo: Listen for click events on the train element and 
call a function named speedUp when they happen.
*/

/*
3. todo: Listen for click events on the stop button element 
and call a function called stopTrain when they 
happen.
*/

// function speedUp() {
    /*
    Chapter 12: Making It Functional 201
    4. todo: Check whether the train is already going as fast 
   as it can. If not, increase the speed.
    */

    /*
    5. If the train is already moving, stop it and then 
   restart with the new speed by calling a 
   function called frame.
    */

    // function frame() {
    /*
    6. todo: Reposition the train and check whether the 
   train is crashed.
    
    }
   }
*/


//    function stopTrain() {
    /*
    7. todo: Test whether the train is already crashed. If 
   not, stop the train.
   }
  */
 
   
//    function checkPosition(currentPosition) {
    /*
    8. todo: Check the train's current position and crash it 
   if it's at the end of the line.
   }
   */





// /* PROGRAMMING THE ACTUAL GAME */ 
let trainSpeed = 250;
let trainPosition = 0;
let animation;

let train = document.getElementById("train");
train.addEventListener("click", speedUp);

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);
       }
 

 function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + 'px';
    checkPosition(trainPosition);
   }
}

function checkPosition(currentPosition) {
if (currentPosition === 650) {
alert("CRASH!");
consle.log("CRASH!");
clearInterval(animation);
}
}

function stopTrain() {
    if (trainPosition < 650) {
    clearInterval(animation);
    }
   }


/* DEBUG CODE : HADIYO (05/07/2023) */
// let train = document.getElementById("train");
// stopButton.addEventListener("click", stopTrain);









