//here are our rectangle variables
var x = 50;
var y = 50;

var sqwl = 100;

var xSpeed = 5;

function setup() {
  // put setup code here
  createCanvas(600, 600);

}

function draw() {
  background(0, 50);


  //this is my red rectangle
  fill(255, 0, 0); 
  rect(x, y, sqwl, sqwl);

  //this moves my rectangle
  //x = x + speed; 

  x += xSpeed;

  //if my rectangle touches the right hand of the screen
  //make my rectangle move to the left
  if (x > 600){
    //move it to the left
    xSpeed = -xSpeed; 
  }

  //if my rectangle touches the left hand of the screen
  //make my rectanlge move to the right
  if (x < 0){
    xSpeed = -xSpeed; 
  }

  console.log(x);
}