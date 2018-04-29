function Ball() {
  this.setup = function (x, y, size, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  this.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  this.bounce = function () {
    if (this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    } else if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }

  }
  this.display = function () {
    ellipse(this.x, this.y, this.size, this.size);

  }
}
