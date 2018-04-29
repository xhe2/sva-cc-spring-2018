//note the uppercase B for class;
//also note that we don't have commas after the curly brackets when creating class
function Ball () {
  this.setup = function (x, y, size, xSpeed, ySpeed){
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  this.move = function (){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  this.bounce = function (){
    if (this.x > width || this.x < 0){
      this.xSpeed = this.xSpeed * -1;
    } else if (this.y > height || this.y < 0){
      this.ySpeed = this.ySpeed * -1;
    }
  }

  this.display = function (){
    ellipse (this.x, this.y, this.size, this.size);
  }
}
