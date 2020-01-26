let youngMales = [];
const numOfYoungMales = 10;

function setup() {
    
  createCanvas(1080, 720);
  background(50);

  for (let i = 0; i < numOfYoungMales; i++) {
      
    youngMales.push(new YoungMale(random(30, 40), random(0, 55), random(0, 55), random(200, 255)));
  }
}

function draw() {
    
  background(200);

  youngMales.forEach(youngMale => {
      
    youngMale.render();
    youngMale.checkEdges();
    youngMale.move();
  });
}
