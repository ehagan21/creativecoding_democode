var x = 500;
var y = 300;

var sqwl = 100; 

var xSpeed = 10;
var ySpeed = 5; 

var r, g, b;

//this keeps track of my triangle
var triX = 500;
var triY = 50;

function setup() {
  createCanvas(1000, 600);
  r = 255;
  g = 0;
  b = 0; 
}

function draw() {
  background(127);

  fill(0, 0, 255);
  rect(mouseX, mouseY, sqwl, sqwl)

  noStroke();
  //this is my bouncing circle
  fill(r, g, b);
  ellipse(x, y, sqwl, sqwl);

  x = x + xSpeed; 
  y = y + ySpeed;

  //if my circle touches the right side 
  //of the screen, change its direction
  if (x > (1000 - sqwl/2)){
    xSpeed = -xSpeed; 
  }
  else if (x < 0 + sqwl/2){
    xSpeed = -xSpeed;
  }

  //bounce my circle if we touch the top or bottom
  if (y > (600 - sqwl/2)){
    ySpeed = -ySpeed;
    b = 0;
  }
  else if (y < sqwl/2){
    ySpeed = -ySpeed;
    b = 255;
  }

  //this draws my triangle;
  fill(0);
  
  rect(triX, triY, sqwl, sqwl);
  //triangle(triX, triY, triX - 50, triY + 50, triX + 50, triY + 50);
}

function keyPressed(){
  //if the down key pressed
  if (keyCode === DOWN_ARROW){
    triY = triY + 10;
  }

}


