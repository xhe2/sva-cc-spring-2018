var angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);

}



function draw() {
  background(200);
  translate(100, 100)
  rotate(angle);
  rect (0, 0, 100, 100);
  angle = angle + 1

  displayText();
}

function displayText() {
  textSize(50);
  fill(0, 102, 153);
  text('Hour', 10, 100)
}
