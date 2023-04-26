var images = ["images/RAM.png", "images/R.png", "images/mb.png", "images/hdd.png", "images/titan.png"];
var image = document.getElementById("image");
var rotate = 0;

setInterval(function() {
    image.src = images[rotate];
    rotate++;
    if (rotate == images.length) {
        rotate = 0;}}, 3000);
