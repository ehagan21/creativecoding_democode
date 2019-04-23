//variables which control the ball
var ballSize = 200;
var posX = 250;
var posY = 250;

//what speed the ball moves
var xSpeed;
var ySpeed;

//keep track of the previous position
var pMouseX;
var PMouseY; 

//boolean to check if the ball was clicked on
var ct = false;

//variable which follows the ball around the screen
var words; 

//variable that concatenates the score string
var scoreTotal;

///number to keep track of score
var score = 0; 

var img;

function setup(){  
  createCanvas(1000, 600);
  
  //starting speeds
  xSpeed = 10;
  ySpeed = 3;

  //randomly choose which word is shown
  if (random(0, 1) > 0.5){
  	words = 'Hey Everyone'
  }
  else{
  	words = 'BYE!'
  }

}

function draw(){
  	background(127);
  	
  	//create the score string including the score variable value
  	scoreTotal = "The score is:" + score;

  	//show the score string to the screen
  	text(scoreTotal, 100, 100);

	//if the mouse is close/inside of the ball, change the color
	if ((mouseX < (posX + ballSize/2)) && (mouseX > (posX - ballSize/2))
		&& (mouseY < (posY + ballSize/2)) && (mouseY > (posY - ballSize/2))){
		fill('yellow');

		//the mouse caught the ball
		ct = true;
	}
	else{
		fill('orange');
		ct = false;

		//the mouse is outside of the ball
	}

	//draw my main circle
	drawSmile();

	//drawing text to the screen where the smile is located
  	textSize(50);
  	text(words, posX, posY - 100); 

  	//bouncing off the sides
  	if ((posX > (1000 - ballSize/2)) || (posX < ballSize/2)){
  		xSpeed = -xSpeed;
  		score++
  	}

  	//bouncing off the top and bottom
  	if ((posY > (600-ballSize/2)) || (posY < ballSize/2)){
  		ySpeed = -ySpeed;
  		score++;
  	}

  	posX += xSpeed;
  	posY += ySpeed;

	//set the previous positions to where the mouse is currently
	pMouseX = mouseX;
	pMouseY = mouseY;
}

function drawSmile(){
	ellipse(posX, posY, ballSize, ballSize);

  	fill(0);
  	ellipse(posX - 30, posY - 50, 10, 50);
  	ellipse(posX + 30, posY - 50, 10, 50);

  	rect(posX - 30, posY, 10, 20);
  	rect(posX + 20, posY, 10, 20);
  	rect(posX - 30, posY + 20, 60, 20);
}

function mouseDragged(){
	//if the mouse is inside of the ball and clicked, change the position to be
	//centered on the mouse 
	if (ct){
		posX = mouseX;
		posY = mouseY;

		xSpeed = 0;
		ySpeed = 0;
	}
}

function mouseReleased(){
	//centered on the mouse, reset the speed when the mouse is released
	if (ct){
		//set the speed equal to the path of the mouse throw
		xSpeed = mouseX - pMouseX;
		ySpeed = mouseY - pMouseY;

		//xSpeed = 10;
		//ySpeed = 3;
	}
}
