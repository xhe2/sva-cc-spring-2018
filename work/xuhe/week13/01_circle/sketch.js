var points;
var targetPoints;
var isCircle;



function setup() {
  createCanvas(500,500);
  points = [];
  targetPoints = [];
  for(var i=0; i<100; i++){
    points.push(createVector(0,0));
    targetPoints.push(createVector(0,0));
  }
  isCircle = true;
}


function draw() {
  background(0);
  // sizeofCircle is the semi diamiter
  var sizeOfCircle= 100;
  var numOfPoints = 100;
  stroke(255);
  var millisecond = Date.now();

  for(var i=0;i<numOfPoints;i++){
    // notice= segment= numOfPoints -1
    var segment = i/(numOfPoints-1);
    var radian = (Math.PI*2)*segment- Math.PI/2;
    if(isCircle){
      var xPos= Math.cos(radian)*sizeOfCircle + width/2;
      var yPos= Math.sin(radian)*sizeOfCircle + height/2;
      var noiseValue = noise(xPos * noiseMult, yPos * noiseMult, millisecond* 0.01);
      noiseValue *=10;
      var point = createVector(xPos+noiseValue,yPos+noiseValue);

  } else{
      var lineLength = Math.PI * 2 * sizeOfCircle;
      var xPos= width/2 + ((1-segment)*lineLength)-(lineLength/2);
      var yPos= height/2;
      var point = createVector(xPos,yPos);
  }

    // points.push(point);
    targetPoints[i] = point;
    // lerp equals easy ease effect. 0.1 means 10 percent
    points[i]= p5.Vector.lerp(points[i],targetPoints[i],0.1);
    if (i>0){
      var prePoint = points[i-1];
      var currentPoint = points[i];
      line(prePoint.x,prePoint.y,currentPoint.x,currentPoint.y);
    }
  }
}

// lowercase mousePressed
function mousePressed(){
 isCircle = !isCircle;
 // if is circle is false is goes to true  ??

}
