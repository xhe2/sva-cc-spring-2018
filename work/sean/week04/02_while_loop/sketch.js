var circleX

function setup() {
  createCanvas(500,500);
  var circleX = 1;
}

function draw () {
  background(200);

  fill (255);

  circleX = 0;

  while (circleX < width){
    circleX = circleX + 10;
    ellipse (circleX, height/2, 10, 10);
  }

}
