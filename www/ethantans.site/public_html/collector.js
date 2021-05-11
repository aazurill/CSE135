/* eslint-disable */
function checkDummy()
{
	let val;
	let el=document.getElementById("checkDummy");
	if(document.getComputedStyle)
		val=document.defaultView.getComputedStyle(el,null).getPropertyValue("margin-top");
	else
		val=el.style.marginTop

	if(val=="1px")
		console.log("Style Sheets Allowed");
	else
		console.log("Style Sheets NOT Allowed");
}
// function images() {
// 	let image = new Image();
// 	image.src = 'clear.png';
// 	image.onload = function() {
// 		if (image.width > 0) {
// 			return true;
// 		}
//     return false;
// 	};
// }
function checkImg() {
  let htmltag = document.getElementsByTagName('html');
  let htmlClass = htmltag.className;
  let imgOn = document.getElementsByClassName('images-on');
  if(imgOn.length != 0 ) {
    console.log("Images Allowed");
  }
  else {
    console.log("Images NOT Allowed");
  }
}
(function noimg() {
	var image = new Image();
	image.onload = function() {
		if (image.width > 0) {
			document.documentElement.className += (document.documentElement.className != '') ? ' images-on' : 'images-on';
		}
	};
	image.src = 'clear.png';
}());
// function noimage() {
//   if(img()) {
//     console.log("Images Allowed");
//   }
//   else {
//     console.log("Images NOT Allowed");
//   }
// }
window.addEventListener('load', (event) => {
  checkImg();
  console.log('Collecting Static');
  // Collect User Agent String
  let userAgent = navigator.userAgent;
  console.log("User Agent:" + userAgent);
  // Collect User Language
  let lang  = navigator.language;
  console.log("Language: " + lang);
  // Cookies ?
  let noCookies = false;
  if(navigator.cookieEnabled) noCookies = true;
  console.log("Cookies Allowed: " + noCookies);
  // Allow Javascript ?

  // Allow images ?

  /// Allow CSS ?

  checkDummy();
  // User Screen Dimensions
  let dimension = "Dimensions " + screen.width + "x" + screen.height;
  console.log(dimension);
  // Window Dimensions
  let windDimension = "Window Dimensions: " + window.innerWidth + "x" + window.innerHeight;
  console.log(windDimension);


  // Network connection type
  let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let conntype = "Connection Type: " + connection.effectiveType;
  console.log(conntype);

  // Timing of page load

    // WHole timing Obj
  let timeObj = window.performance.timing;
  console.log("Time Obj: " + timeObj)
    // When page start load
  let loadStart = "Load Start: " + window.performance.timing.navigationStart;
  console.log(loadStart);

    // When page end load
  let loadEnd = "Load End: " + window.performance.timing.domContentLoadedEventEnd;
  console.log(loadEnd);
    // Total load time (milliseconds)
  let loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
  console.log("Load time: " + loadTime);
});
function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        console.log('Left button clicked.');
        break;
      case 1:
        console.log('Middle button clicked.');
        break;
      case 2:
        console.log('Right button clicked.');
        break;
      default:
        console.log(`Unknown button code: ${e.button}`);
    }
  }
}

// Mouse activity
  // Cursor position
  onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

  // Clicks (and which mouse button)
  document.addEventListener('mouseup', logMouseButton);

  // Scroll (coords of thescroll)
window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;
    console.log("Scroll Y: " + top + " Scroll X " + left);
}, false);
// Keybaord activity
  // Key down or key up events
document.addEventListener('keydown', function(event){
  let key = event.keyCode;
  console.log("Key " + key + " pressed");
})
//Sessioning:
let id = Math.floor(Math.random() * 1000000);
console.log("Session id: " + id);
document.cookie = `sessionId=${id}`;


// Idle time for period of 2 or more seconds
  // Record when break ended
var inactivityTime = function () {
    var time;
    let idleStart = new Date();
    let starttime = idleStart.getTime();
    let idle = false;

    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;     // touchpad clicks
    document.onkeydown = resetTimer;   // onkeypress is deprectaed
    document.addEventListener('scroll', resetTimer, true)
    function logout() {
      console.log("IDLE");
      idle = true;
      idleStart = new Date();
      starttime = idleStart.getTime();
    }

    function resetTimer() {
      idleStart = new Date();
      let endtime = idleStart.getTime();
      let timer = endtime - starttime;
      if(idle === true) {
        console.log("END IDLE: " + timer);
      }
      clearTimeout(time);
      idle = false;
      time = setTimeout(logout, 2000)
    }
};
window.onload = function() {
  inactivityTime();
}


// When user entered page
let d = new Date();
console.log("User Enter Time: " + d.getTime());
// When user left page
window.addEventListener('beforeunload', function(e) {
  let d = new Date();
  console.log("User Exit Time: " + d.getTime());
});
// Which page user on
console.log("User is on: " + document.URL);
// Tie data to user session