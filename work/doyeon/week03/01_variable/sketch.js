var circleY;
var circleX;

var circleXSpeed;
var circleYSpeed;

function setup() {
createCanvas(500,500);
circleY = 250;
circleX = 250;
circleXSpeed = 5;
circleYSpeed = 10

}

function draw () {
background(200);
fill(circleX, circleY, 255);
noStroke();
ellipse(circleX, circleY, 50, 50);

circleY = circleY + circleYSpeed;
circleX = circleX + circleXSpeed;


if (circleX < 0 || circleX > width) {
  circleXSpeed = circleXSpeed * -1;


}

if (circleY < 0 || circleY > height) {
  circleYSpeed = circleYSpeed * -1;

}

}
