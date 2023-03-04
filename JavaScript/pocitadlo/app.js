const valueElement = document.getElementById("value");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

let counter = 0;

function handleDecrease() {
  counter--;
  updateCounter();
}

function handleReset() {
  counter = 0;
  updateCounter();
}

function handleIncrease() {
  counter++;
  updateCounter();
}

function updateCounter() {
  valueElement.textContent = counter;

  if (counter < 0) {
    valueElement.style.color = "red";
  } else if (counter > 0) {
    valueElement.style.color = "green";
  } else {
    valueElement.style.color = "black";
  }
}

decreaseButton.addEventListener("click", handleDecrease);
resetButton.addEventListener("click", handleReset);
increaseButton.addEventListener("click", handleIncrease);

updateCounter();
