let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  fill(random(255), random(255), random(255));
  ellipse(x, y, 50, 50);
  fill(0);
  ellipse(10, y, 50, 50);
  ellipse(20, 300, 50, 50);
  x=x+1;
} 
