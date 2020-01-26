class Male extends Human {
  constructor(_radius, _r, _g, _b) {
    super(_radius, _r, _g, _b);
  }
}

class YoungMale extends Male {
    constructor(_radius, _r, _g, _b) {
    super(_radius, _r, _g, _b);
  }
    
  render() {
    stroke(50);
    strokeWeight(1);
    fill(this.r, this.g, this.b);
    
    for(let i=0; i<=50; i++) {
        push()
        translate(this.position.x, this.position.y);
        ellipse(0, 0, this.radius * 2, this.radius * 2);
        noFill();
        ellipse(0, 0, this.radius * 2 + i, this.radius * 2 + i);
        pop();
    }
  }
}