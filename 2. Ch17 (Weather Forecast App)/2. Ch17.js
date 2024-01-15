// // /* FOR loop syntax example */
// // for (let counter = 0; counter < 500; counter++) {
// //     console.log(counter + ": Hello, JavaScript!");
// //    }



// /* COUNTDOWN example */
// //    for (let i = 10; i > 0; i--) {
// //     alert (i);
// //    }
// //    alert ("Blast Off!");


// // /* OUTPUT ARRAY VALUES USING 'FOR' LOOP */
// // let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// // for (let i = 0; i < myFriends.length; i++){
// //  alert(myFriends[i] + " is my friend.");
// // }


// // alert(Math.random());     //outputs random number between 0 and 1
// // alert(Math.random() * 11);  //outputs random number between 0 and 10
// // alert(Math.floor(Math.random() * 11));   //removes decimals




// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);




/* WEATHER FORECAST CODE */
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["Sunny", "Earthquake alert", "Tsunami alert", "Cloudy", "Raining", "Snowing", "Thunderstorm"];
minTemp = -12;
maxTemp = 150;

generateWeather();

function generateWeather() {
    for  (i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + 
        minTemp);
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}



