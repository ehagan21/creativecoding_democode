//This is based on the serial example code written by Shawn Van Every
//and used at ITP for the p5/arduino or other serial connections
//take a look at https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/

//also, download the p5 serial controller app:
//https://github.com/vanevery/p5.serialcontrol/releases 

var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1422'; // fill in your serial port name here
var inData; // variable to hold the input data from serial / micro:bit

function setup() {
  //set up canvas
  createCanvas(1000, 600);
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
  //if data is coming in from the serial port, turn the 
  //background white, otherwise leave it black
  if(inData > 0){
    background(255);
  }
  else{
    background(0);
  }

}

function serialEvent() {
  //remove the white space, and save the data into a inData variable name
  inData = trim(serial.readLine());

  //pring the value to the console so we can see it
  if(inData){
    console.log(inData);
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

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
