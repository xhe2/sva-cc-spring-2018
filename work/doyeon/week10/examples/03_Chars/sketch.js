var charObjs = [];
var myString = "Doyeon Lee"
var xPos = 0;
var charSize = 15;

function setup() {
  createCanvas(500, 500);
  textFont ('Helvetica');
  var size = 15;
  for (var i = 0; i < myString.length; i++) {
    var char = myString[i];
    charObjs[i] = new MovingChar ( char, xPos, height/2, charSize, 0.07, 0);
    xPos += charSize;
  }
}


function draw() {
  background(200);
  for ( var i = 0; i < charObjs.length; i++) {
    charObjs[i].move();
    charObjs[i].display();
  }
}

function keyPressed(){
  var newChar = new MovingChar( key, xPos, height/2, size, .08, 0 )
  charObjs.push(newChar);
  xPos += charSize;
}
