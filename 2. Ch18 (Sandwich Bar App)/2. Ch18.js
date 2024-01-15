// /* 'WHILE' Loop Syntax */
// while (money > 0) {
//  buyThings();
//  saveMoney();
//  payTaxes();
// }

// /* NOTE: 'WHILE' loop vs 'FOR' loop
// a) For loop has final expression that changes value of counter
// b) While loop requires you have expression/s inside the loop that can change result of its condition.*/

// /* EXAMPLE: LOGGING NUMBER CERTAIN NUMBER OF TIMES */
// let i = 0;
// while (i < 500) {
//  console.log(i + ": Hello, JavaScript!");
//  i++;
// }

/* EXAMPLE: COUNTDOWN WITH WHILE */
// let countDown = 10;
// while (countDown > 0) {
//  alert(countDown);
//  countDown--;
// }
// alert("Blast Off!");

/* EXAMPLE: LOOPING THROUGH AN ARRAY WITH WHILE (LIST OF NAMES) */
// let people = ["Hadiyo","Mitch","Dorette","Lettie"];
// let i = 0;
// while (people[i]) {
//  alert(people[i]);
//  i++;
// }

// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
  /*
    todo: 
     * reset the form
    * start a loop
 * get daily sandwich order
 * calculate total price
 * figure out if there's enough money
 * if so: subtract money, increment number of lunches, 
and start loop over
 * if not: display 'out of money' message
 * display total lunches after loop exits */


  resetForm();
  let day = 0;
  while (money > 0) {
    let priceToday = getSandwichPrice();
    let numberOfSandwiches = document.getElementById("numSandwiches").value;
    let totalPrice = numberOfSandwiches * priceToday;
    if (money >= totalPrice) {
      money = money - totalPrice;
      day++;
      lunches++;
      document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You have $" + money.toFixed(2) + " left.</P>";
    } else { document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ".  You don't have enough money.</P>"; 
    money = 0;
    }
  }


  document.getElementById("receipt").innerHTML += "<p>You were able to buy " + lunches + " lunches this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}