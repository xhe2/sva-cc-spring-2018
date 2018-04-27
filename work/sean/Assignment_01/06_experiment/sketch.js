var circle ={
  x:1,
  xSpeed:2.5,
  y:2,
  ySpeed:4,
  size:20,
};

var isHit = false;

function setup() {
  createCanvas (1200, 600);
}


function draw() {
  //color
  r = map(mouseX, 0, 1200, 0, 255);
  g = map(mouseY, 0, 600, 0, 255);
  b = map(mouseY, 0, 600, 0, 255);

  background(r, g, 150);

  //circle.x = circle.x + 1;
  line(circle.x, circle.y, mouseX, mouseY);


  //hitTest();

  //bouncing circle
  ellipse(circle.x, circle.y, circle.size, circle.size);

  //mouse circle
  ellipse(mouseX, mouseY, circle.size, circle.size);

  /*
  if(isHit) {
    hitTest = false;
  }
  */

  circle.x = circle.x + circle.xSpeed
  circle.y = circle.y + circle.ySpeed

  //This makes circle bounce
  if (circle.x < 0 || circle.x > width) {
    circle.xSpeed = circle.xSpeed * -1;
  }

  if (circle.y < 0 || circle.y > height) {
    circle.ySpeed = circle.ySpeed * -1;
  }
}
  /*
  //This makes circle stop and move when hits other circle
  function hitTest() {
    var xDiff = circle.x - mouseX
    if(xDiff - 10 && xDiff + 10) {
      isHit = true;
    }
  }
  */



  //This makes when bouncing ball stop when it is near mouseX
  /*
  if (circle.x - 10 < mouseX && circle.x + 10 > mouseX
   && circle.y - 10 < mouseY && circle.y + 10 > mouseY) {
     fill(255,0,0);
  }
  */


  /*
  if (circle.y - 10 < mouseY && circle.y +10 > mouseY) {
    circle.xSpeed = 0;
    circle.ySpeed = 0;
  }
  */
