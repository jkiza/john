class Human {
  constructor(_radius, _r, _g, _b) {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.radius = _radius;
    this.r = _r;
    this.g = _g;
    this.b = _b;
  }
    
  render() {
    stroke(50);
    strokeWeight(1);
    fill(this.r, this.g, this.b);
    push()
    translate(this.position.x, this.position.y);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
    
  move() {

    this.position.add(this.velocity);
  }
    
  checkEdges() {

    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}
