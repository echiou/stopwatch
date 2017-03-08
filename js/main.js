//  Adapted rom https://gist.github.com/electricg/4372563
//  Simple example of using private variables
//
//  To start the stopwatch:
//    obj.start();
//
//  To get the duration in milliseconds without pausing / resuming:
//    var x = obj.time();
//
//  To pause the stopwatch:
//    var x = obj.stop(); // Result is duration in milliseconds
//
//  To resume a paused stopwatch
//    var x = obj.start();  // Result is duration in milliseconds
//
//  To reset a paused stopwatch
//    obj.stop();
//
var clsStopwatch = function() {
  // Private vars
  var startAt = 0;  // Time of last start / resume. (0 if not running)
  var lapTime = 0;  // Time on the clock when last stopped in milliseconds

  var now = function() {
    return (new Date()).getTime(); 
  }; 

  // Public methods
  // Start or resume
  this.start = function() {
    startAt = startAt ? startAt : now();
  };

  // Stop or pause
  this.stop = function() {
    // If running, update elapsed time otherwise keep it
    lapTime = startAt ? lapTime + now() - startAt : lapTime;
    startAt = 0; // Paused
  };

  // Reset
  this.reset = function() {
    lapTime = startAt = 0;
  };

  // Duration
  this.time = function() {
    return lapTime + (startAt ? now() - startAt : 0); 
  };
};

var x;
var $time;
var clocktimer;
var running;

function pad(num, size) {
  var s = "0000" + num;
  return s.substr(s.length - size);
}

function formatTime(time) {
  var m = s = cs = 0;
  var newTime = '';

  m = Math.floor( time / (60 * 1000) );
  time = time % (60 * 1000);
  s = Math.floor( time / 1000 );
  time = time % 1000
  cs = Math.floor(time / 10);

  newTime = pad(m, 2) + ':' + pad(s, 2) + '.' + pad(cs, 2);
  return newTime;
}

function show() {
  $time = document.getElementById('time');
  update();
}

function update() {
  $time.innerHTML = formatTime(x.time());
}

function startStop() {
  if(!running) {
    start();
  } else {
    stop();
  }
}

function start() {
  running = true;
  clocktimer = setInterval("update()", 1);
  x.start();
}

function stop() {
  running = false;
  x.stop();
  clearInterval(clocktimer);
}

function reset() {
  stop();
  x.reset();
  update();
}

window.addEventListener('load', 
  function() { 
    x = new clsStopwatch();
    start();

    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        startStop();
      }
    }
}, false);

window.onload = function () {
  show();
}