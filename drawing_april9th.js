var x, y, d;
var r, g, b;

function setup() {
  createCanvas(600, 600);

  //This determines my circle
  x = 300;
  y = 50;
  d = 50;

  //This is the color of my circle
  r = 0;
  g = 255;
  b = 0;
}

function draw() {
  //this is my drawing program
  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, d, d);
}

function keyPressed(){
  //if I press the up key, my brush size increases
  if(keyCode === UP_ARROW){
    d += 25;
  }

  //if down is pressed
  else if (keyCode === DOWN_ARROW){
    //if my brush is greater than 50
    if (d >= 50){
      d -= 25; 
    }
  }

  //if I push the left key, make my brush orange
  else if (keyCode === LEFT_ARROW){
    //this is the color value for orange
    r = 255;
    g = 165;
    b = 0; 
  }

  //if i push the right key, make my brush green
  else if (keyCode === RIGHT_ARROW){
    r = 0;
    g = 255;
    b = 0; 
  }
  //if i push r, change it to red
  else if (key === 'r'){
    r = 255;
    g = 0;
    b = 0;
  }
}

function mousePressed(){
  background(255);
}

