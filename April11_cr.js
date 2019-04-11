//variables which control the ball
var ballSize = 200;
var posX = 250;
var posY = 250;

//what speed the ball moves
var xSpeed;
var ySpeed;

//boolean to check if the ball was clicked on
//var caught;

function setup(){  
  createCanvas(1000, 600);
  
  //starting speeds
  xSpeed = 10;
  ySpeed = 3;
}

function draw(){
  	background(255);

  	//if the mouse is close/inside the ball, change the color
  	/*if ((posX > mouseX - ballSize/2) && (posX < mouseX + ballSize/2)
	&& (posY > mouseY - ballSize/2) && (posY < mouseY + ballSize/2)){
  		fill(255, 0, 0);
	}
	else{
		fill(0, 0, 255);
	}*/
	//draw the ball
  
	//if the mouse is close/inside of the ball, change the color
	if ((mouseX < (posX + ballSize/2)) && (mouseX > (posX - ballSize/2))
		&& (mouseY < (posY + ballSize/2)) && (mouseY > (posY - ballSize/2))){
		fill(255, 0, 0);
	}
	else{
		fill(0);
	}


  	ellipse(posX, posY, ballSize, ballSize);

  	//bouncing off the sides
  	if ((posX > (1000 - ballSize/2)) || (posX < ballSize/2)){
  		xSpeed = -xSpeed;
  	}

  	//bouncing off the top and bottom
  	if ((posY > (600-ballSize/2)) || (posY < ballSize/2)){
  		ySpeed = -ySpeed;
  	}

  	posX += xSpeed;
  	posY += ySpeed;
}
  	/*
	//bounce the ball
	if ((posX > (1000 - ballSize/2)) || (posX < ballSize/2)){
  		xSpeed = -xSpeed;
  	}

  	if ((posY > (600 - ballSize/2)) || (posY < ballSize/2)){
  		ySpeed = -ySpeed;
  	}

  	//update the position
	posX += xSpeed;
	posY += ySpeed;
}

function mouseDragged(){
	//if the mouse is inside the ball, stop the movement, 
	if ((posX > mouseX - ballSize/2) && (posX < mouseX + ballSize/2)
	&& (posY > mouseY - ballSize/2) && (posY < mouseY + ballSize/2)){
		caught = true; 
		posX = mouseX;
		posY = mouseY;
		xSpeed = 0;
		ySpeed = 0;
	}
}

function mouseReleased(){
	if (caught){
		xSpeed = mouseX-pmouseX;
		if (xSpeed == 0){
			xSpeed = random(-1, 1)
		}
		ySpeed = mouseY-pmouseY;
		if (ySpeed == 0){
			ySpeed = random(-1, 1);
		}
		caught = false;
	}
}*/
