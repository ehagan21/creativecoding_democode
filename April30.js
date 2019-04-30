/*This code and example was borrowed and adjusted referencing the 
Physcical Computing class at ITP at NYU

Shawn Van Every wrote the p5.serial control application which acts as the inbetween for the
micro:bit and the p5 canvas running in the browser

References for these codes:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1422'; // fill in your serial port name here
var inData; // variable to hold the input data from serial / micro:bit

var minWidth = 600;   //set min width and height for canvas
var minHeight = 400;
var width, height;    // actual width and height for the sketch

var posX;
var posY;

var xSpeed = 5;

var ballSize = 100;

var colorChoice = false;

function setup() {
  // set the canvas to match the window size
  if (window.innerWidth > minWidth){
    width = window.innerWidth;
  } else {
    width = minWidth;
  }
  if (window.innerHeight > minHeight) {
    height = window.innerHeight;
  } else {
    height = minHeight;
  }

  posX = width/2;

  //set up canvas
  createCanvas(width, height);
  noStroke();

  //set up communication port
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  //set communication rate
  var options = { baudrate: 115200};

  serial.list();                      // list the serial ports
  serial.open(portName, options);     // open a serial port at a rate of 115200
}

function draw() {
  // set background to black
  background(50);
 
  if (inData > 0){
    inData = Number(inData);
    posY = map(inData, 0, 1023, ballSize/2, (height - ballSize/2));   // map input to the correct range of brightness
  }
  else{
    posY = height/2;
  }



  if (xSpeed > 0){    
    fill(0);
    ellipse(posX - 10, posY, 100, 100);
  }
  else{
    fill(0);
    ellipse(posX + 10, posY, 100, 100);
  }
  
  if (colorChoice){
    fill(255, 0, 0);
  }
  else{
    fill(0, 0, 255);
  }

  
  //draw the ellipse on the screen
  ellipse(posX, posY, 100, 100);


  //change the position of the ball
  posX += xSpeed;

  //bounce the ball horizontally
  if ((posX > (width - ballSize/2)) || (posX < ballSize/2)){
    xSpeed = -xSpeed;
  }
}

function keyPressed(){
  if (key === 'a'){
    colorChoice =!colorChoice;
  }
}


// Following functions print the serial communication status to the console for debugging purposes
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}

function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

function serialEvent() {
  //remove the white space, and save the data into a inData variable name
  inData = trim(serial.readLine());

  //pring the value to the console so we can see it
  if(inData){
    console.log(inData);
  }
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
