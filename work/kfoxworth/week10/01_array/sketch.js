var myArray = [40, 50, 60, 80];
var myString = "Hello World!";
var myString2 = ['H', 'e', 'l', 'l', 'o'];

var myEmptyArray = [];

function setup() {
 createCanvas(500, 500);
 for (var i = 0; i < myArray.length; i++) {
   myEmptyArray[i] = {x: 10, y: 10};
   console.log(i + " " + myString[i]);
 }
}

function draw() {
  background(200);

}
