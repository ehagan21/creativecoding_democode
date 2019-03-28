var y = 0;

function setup() {
  // put setup code here
  createCanvas(600, 600);

}

function draw() {
  if (y > 600){
  	y = 0;
  }
  y++;
  
  background(0);

  fill(255, 0, 0); 
  rect(50, 50, 100, 100);

  fill(127);
  rect(400, 50, 100, 100);

  //This the left eye
  fill('orange');
  ellipse(200, y, 100, 100);  

  //this should be the nose
  stroke('blue');
  strokeWeight(4);
  triangle(0, 0, 100, 100, 20, 100);
}