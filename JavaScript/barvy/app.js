const colors = ["green", "red", "rgba(133,122,200)"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function() {
  console.log("Jsem ve funkci");
  let colorNumber = ReturnRandomNumber();
  document.body.style.backgroundColor = colors[colorNumber];
  color.textContent = colors[colorNumber];
});

function ReturnRandomNumber()
{
    return Math.floor(Math.random() * colors.length);
}