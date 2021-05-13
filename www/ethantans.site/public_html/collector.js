/* eslint-disable */

let idle = 0;
let sessionId;
function checkStylesheet()
{
	let val;
	let el=document.getElementById("checkDummy");
	if(document.getComputedStyle)
		val=document.defaultView.getComputedStyle(el,null).getPropertyValue("margin-top");
	else
		val=el.style.marginTop

	if(val=="1px") {
		console.log("Style Sheets Allowed");
    stylesheet = 1;
    return stylesheet;
  }
	else {
		console.log("Style Sheets NOT Allowed");
    stylesheet = 0;
    return stylesheet;
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

function checkImg() {
  let imgOn = document.getElementsByClassName('images-on');
  if(imgOn.length != 0 ) {
    console.log("Images Allowed");
    images = 1;
    return images;
  }
  else {
    console.log("Images NOT Allowed");
    images = 0;
    return images;
  }
}

function getUserAgent() {
  console.log("User Agent:" + navigator.userAgent);
  return navigator.userAgent;
}

function getLang() {
  console.log("Language: " + navigator.language);
  return navigator.language;
}

function getCookie() {
  if(navigator.cookieEnabled) {
    // console.log("Cookies Allowed: " + 1);
    return true;
  }
  else {
    return false;
  }
}

function getScreenDim() {
  let dimension = "Screen Dimensions " + screen.width + "x" + screen.height;
  console.log(dimension);
  let obj = {
    screen_x : screen.width,
    screen_y : screen.height
  };
  return obj;
}

function getWindowDim() {
  let windDimension = "Window Dimensions: " + window.innerWidth + "x" + window.innerHeight;
  console.log(windDimension)
  let obj = {
    window_x : window.innerWidth,
    window_y : window.innerHeight,
  }
  return obj;
}

function getConn() {
  let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let conntype = "Connection Type: " + connection.effectiveType;
  console.log(conntype)
  return connection.effectiveType;
}

function getTimeOb() {
  let timeObj = window.performance.timing;
  console.log("Time Obj: " + timeObj)
  return timeObj;
}

function getLoadStart() {
  let loadStart = "Load Start: " + window.performance.timing.navigationStart;
  console.log(loadStart);
  return window.performance.timing.navigationStart;
}

function getLoadEnd() {
  let loadEnd = "Load End: " + window.performance.timing.domContentLoadedEventEnd;
  console.log(loadEnd);
  return window.performance.timing.domContentLoadedEventEnd;
}

function getLoadTime() {
  let loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
  console.log("Load time: " + loadTime);
  return window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
}

window.addEventListener('load', (event) => {
  console.log('Collecting Static');
  const url = 'https://ethantans.site/api';

  fetch(url, {
      method: "GET", // "GET/POST"
      headers: {
          "Content-Type": "application/json"
      },
  })
  .then(r => r.json())
  .then(r => {
    sessionId = r.sessionId;
    console.log('Session ID: ' + r.sessionId) // You will get JSON response here.
    let enterTime = new Date().getTime();
    let currentPage = document.URL;

    let statOb = {
      sessionId: sessionId,
      agentStr : getUserAgent(),
      lang: getLang(),
      cookies: getCookie(),
      js: 1,
      images: checkImg(),
      css: checkStylesheet(),
      screenDim: getScreenDim(),
      windowDim: getWindowDim(),
      network: getConn()
    }
    console.log(statOb);
    postData('static', statOb)
    .then(data => {
      console.log(data);
    });

    let testOb = {
      network : "hahahahah"
    }

    // TESTING PURPOSES - POST TO MONGO ACTIVITY UNDER TESTER
    // postData('https://ethantans.site/api/activity/tUSb-EmTgRBMYxrgO8zhCPrfniVDr3Le', testOb)
    // .then(data => {
    //   console.log(data);
    // });



    let loadObj = {
      sessionId: sessionId,
      load: getTimeOb(),
      loadStart: getLoadStart(),
      loadEnd: getLoadEnd(),
      loadTime: getLoadTime()
    }
    console.log(loadObj);
    postData('performance', loadObj)
    .then(data => {
      console.log(data);
    });

    document.addEventListener('keydown', function(event){
      let key = event.keyCode;
      let keyObj = {
        sessionId: sessionId,
        key: key
      }
      postData('activity', keyObj)
      .then(data => {
        console.log(keyObj);
      });
  })

    document.addEventListener('mouseup', function(e) {
      let clickObj;
      if (typeof e === 'object') {
        switch (e.button) {
          case 0:
            clickObj = {
              sessionId: sessionId,
              click: 'Left'
            }
            postData('activity', clickObj)
              .then(data => {
                console.log(data);
              });
            break;
          case 1:
            clickObj = {
              sessionId: sessionId,
              click: 'Middle'
            }
            postData('activity', clickObj)
              .then(data => {
                console.log(data);
            });
            break;
          case 2:
            clickObj = {
              sessionId: sessionId,
              click: 'Right'
            }
            postData('activity', clickObj)
              .then(data => {
                console.log(data);
            });
            break;
          default:
            clickObj = {
              sessionId: sessionId,
              click: 'Unknown'
            }
            postData('activity', clickObj)
              .then(data => {
                console.log(data);
            });
        }
      }
    })

    window.addEventListener("scroll", function(event) {
        let scrollObj = {
          sessionId: sessionId,
          scrollY: this.scrollY,
          scrollX: this.scrollX
        }
        postData('activity', scrollObj)
          .then(data => {
            console.log(data);
        });
    }, false);

    inactivityTime(sessionId);

    window.addEventListener('beforeunload', function(e) {
      let exitTime = new Date().getTime();
      let activObj = {
        sessionId: sessionId,
        enter: enterTime,
        exit: exitTime,
        url: currentPage
      }
      postData('activity', activObj)
       .then(data => {
        console.log(data);
      });
    });

    onmousemove = function(e){
      var m_pos_x,m_pos_y;
      let oldx = 0
      let oldy = 0
      window.onmousemove = function(e) {
        m_pos_x = e.pageX;m_pos_y = e.pageY;
      }
      setInterval(function() {
        if(oldx !== m_pos_x && oldy !== m_pos_y) {
          let mouseObj = {
            sessionId: sessionId,
            mouse_x: m_pos_x,
            mouse_y: m_pos_y
          }
         postData('activity', mouseObj)
          .then(data => {
            console.log(data);
         });
        }
        oldx = m_pos_x;
        oldy = m_pos_y

      },500);
    }
  }).catch(error => console.error('Error', error))
});


var inactivityTime = function (sessionId) {
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
      idle = true;
      idleStart = new Date();
      starttime = idleStart.getTime();
      let idleObj = {
        sessionId: sessionId,
        status: 'IDLE',
        time: starttime
      }
      postData('activity', idleObj)
      .then(data => {
        console.log(data);
      });
    }

    function resetTimer() {
      if(idle) {
        idleStart = new Date();
        let idleEnd = idleStart.getTime() - starttime;
        let endIdleObj = {
          sessionId: sessionId,
          status: 'ACTIVE',
          idleLength: idleEnd,
          idleEnd: idleStart.getTime()
        }
         postData('activity', endIdleObj)
          .then(data => {
            console.log(data);
         });
        console.log(endIdleObj)
      }
      idleStart = new Date();
      clearTimeout(time);
      idle = false;
      time = setTimeout(logout, 2000)
    }
};


async function postData(route = '', data = {}) {
  if(route === 'activity') {
    url = 'https://ethantans.site/api/activity';
  }
  else if(route === 'static') {
    url = 'https://ethantans.site/api/static';
  }
  else if(route === 'performance') {
    url = 'https://ethantans.site/api/performance';
  }
  else {
    url = route;
  }
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function putData(route = '', data = {}) {
  if(route === 'activity') {
    url = 'https://ethantans.site/api/activity';
  }
  else if(route === 'static') {
    url = 'https://ethantans.site/api/static';
  }
  else if(route === 'performance') {
    url = 'https://ethantans.site/api/performance';
  }
  else {
    url = route;
  }
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}



async function deleteData(route = '', data = {}) {
  if(route === 'activity') {
    url = 'https://ethantans.site/api/activity';
  }
  else if(route === 'static') {
    url = 'https://ethantans.site/api/static';
  }
  else if(route === 'performance') {
    url = 'https://ethantans.site/api/performance';
  }
  else {
    url = route;
  }
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


