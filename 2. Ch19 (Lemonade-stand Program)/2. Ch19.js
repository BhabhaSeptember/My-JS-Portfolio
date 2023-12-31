//create days of week array
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//define types of weather
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
//set min and max temperature
let maxTemp = 100;
let minTemp = 0;
//cost (to you) of a cup of lemonade
let lemonadeCost = 0.5;
//array for storing daily temps
let dailyTemp = [];
// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

generateWeather();



/**
generates weather for the week
**/
function generateWeather() {
  let weatherToday;
  let tempToday;
  for (let i = 0; i < days.length; i++) {
    weatherToday = weather[Math.floor(Math.random() * weather.length)];
    tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    dailyTemp[i] = tempToday;
    document.getElementById("5DayWeather").innerHTML += "<div id= '" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
  }
}


/**
calculates glasses of lemonade sold
**/
function openTheStand() {
let glassesSold = 0; // daily
let totalGlasses = 0; // weekly
let glassesLeft = 0; // left to sell

resetForm();// clear previous results

// get input
let numGlasses = Number(document.getElementById("numGlasses").value);
let glassPrice = Number(document.getElementById("glassPrice").value);
for (let i = 0; i < days.length; i++) {
    // glasses sold depends on temp and price
glassesSold = Math.floor(dailyTemp[i] / glassPrice); //i.e. more glasses sold during higher temps
// how many glasses do we have now?
glassesLeft = numGlasses - totalGlasses;
// we can't sell more than we have
if (glassesSold > glassesLeft) {
    glassesSold = glassesLeft;
   }


// increase the weekly total
totalGlasses = glassesSold + totalGlasses;

// display daily total
document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
}
displayResults(numGlasses, glassPrice, totalGlasses);
}



/**
calculates results and displays a report
**/
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    let revenue = weeklySales * glassPrice;
    let expense = weeklyInventory * lemonadeCost;
    let leftOver = weeklyInventory - weeklySales;
    let profit = revenue - expense;

    // print out the weekly report
document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}


/**
resets the game so that a new order can be placed
**/
function resetForm() {
    document.getElementById("result").innerHTML = "";
   }
   
   