var milisec = 0;
var sec = 0; 
var min = 0;
var hour = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

var Timer = document.getElementById("stopwatch-time")
var buttonStart = document.getElementById('start-button');
var buttonStop = document.getElementById('stop-button');
var buttonReset = document.getElementById('reset-button');
var Interval ;
  
buttonStart.onclick = function() {
  	if(milisec != 0){
		  stop();
	  }
    start();
}

buttonStop.onclick = function() {
    stop();
}
      
buttonReset.onclick = function() {
    stop();
    milisec = 0;
    sec = 0; 
    min = 0;
    hour = 0;
    secOut = 0;
    minOut = 0;
    hourOut = 0;
    Timer.innerHTML = "00 : 00 : 00";
}
      
function start() {
    x = setInterval(timer, 10);  
} 
  
function stop() {
    clearInterval(x);
} 

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function timer() {

    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);
  
    milisec = ++milisec;
  
    if (milisec === 100) {
      milisec = 0;
      sec = ++sec;
    }
  
    if (sec == 60) {
      min = ++min;
      sec = 0;
    }
  
    if (min == 60) {
      min = 0;
      hour = ++hour;
  
    }
  
   Timer.innerHTML = hourOut+" : "+minOut+" : "+secOut;  
}
