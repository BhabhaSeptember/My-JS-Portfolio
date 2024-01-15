// document.getElementById("lefteye").style.backgroundColor = "purple";

// document.getElementById("head").style.transform = "rotate(15deg)";

// document.getElementById("body").style.border = "2px black solid";

// document.getElementById("mouth").style.borderRadius = "4px";

// document.getElementById("righteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("head").style.borderTop = "5px black solid";

let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  let robotPart = e.target;
  let t = 0;
  let animation = setInterval(frame, 10); //draws every 10ms

  function frame() {
    robotPart.style.top = t + "%";
    t++;
    if (t === 20) {
      clearInterval(animation);
    }
  }
}

document.getElementById;

/* Animating the arms */
let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(j) {
  let robotPart = j.target;
  let left = 0;
  let limb = setInterval(frame, 10); //draws every 10ms

  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(limb);
    }
  }
}

