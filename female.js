//molecule class
class Human {
  //constructor - a method for creating and initializing each molecule
  //passing radius and colour parameters to allow setting and changing them outside the class
  constructor(_radius, _r, _g, _b) {
    //variables that allow setting random position, velocity and size; and fill colour of each molecule
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.radius = _radius;
    //variables for all 3 rgb parameters of each of the molecule's fill colour
    this.r = _r;
    this.g = _g;
    this.b = _b;
  }
  //render - a method that renders each molecule onto the canvas on the screen
  //using variables initialized in the constructor
  render() {
    //thin white stroke around molecules
    stroke(50);
    strokeWeight(1);
    //setting each molecule's fill colour and size
    fill(this.r, this.g, this.b);
    push()
    translate(this.position.x, this.position.y);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
  //move - a method that allows each molecule to move with somewhat random velocity
  //using variables initialized in the constructor
  move() {

    this.position.add(this.velocity);
  }
  //a method that keeps all molecules within the canvas
  //if the molecule's center point hits the edge of the canvas, change its velocity to opposite value
  checkEdges() {

    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}
