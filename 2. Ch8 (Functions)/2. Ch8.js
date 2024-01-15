
  // let x = typeof 8;
  // console.log(x);
  
  // let doTheMath = 7+ 8 + 36 + 18 + 12;
  // console.log(doTheMath);
  
  // let y = typeof doTheMath;
  // console.log(y);
  
  // let z = typeof "the cat's favorite toy";
  // console.log(z);
  
  // let m = typeof automobile;
  // console.log(m);
  
  
  
  /* PROGRAMMING THE DREAM CAR */
  
  alert("The type of dream car is: " + typeof dreamCar);
  let dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500,
  };
  
  document.getElementById("pricetag").innerHTML = dreamCar.price; /* Updating car price */
  document.getElementById("modelyear").innerHTML = dreamCar.year; /* Updating car's mdoel year */
  document.getElementById("body").style.backgroundColor = dreamCar.color; /* Updating color of car */
  document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model /* Displaying make and model onto the car's body */
  