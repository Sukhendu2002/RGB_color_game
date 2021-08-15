// Selecting all the Elements

var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var massage = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

// Random Number For Color Array

var pickedColor = colors[Math.floor(Math.random() * colors.length)];
displayColor.innerHTML = pickedColor;

//Easy Mode
hard.addEventListener("click", function () {
  colors = generateRandomColors(3);
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  displayColor.innerHTML = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  for (var i = 3; i < square.length; i++) {
    square[i].style.backgroundColor = "#232323";
    h1.style.backgroundColor = "#232323";
  }
});

// New Color Event Listeners for Color Change Event

reset.addEventListener("click", function () {
  colors = generateRandomColors(6);
  pickedColor = colors[Math.floor(Math.random() * colors.length)];
  displayColor.innerHTML = pickedColor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  reset.textContent = "New Color";
});

// Color Change Event Listener

for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function () {
    if (this.style.backgroundColor === pickedColor) {
      massage.innerHTML = "Correct";
      changeColor(this.style.backgroundColor);
      reset.textContent = "Play Again";
    } else {
      this.style.backgroundColor = "#232323";
      massage.innerHTML = "Try Again";
    }
  });
}

function changeColor(colour) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colour;
    h1.style.backgroundColor = colour;
  }
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
