// we've got a few variables, get yer variables
var contents = document.querySelector('.content');

var allOf = document.body,
  nameAnd = document.querySelector('.header h1');

var resumeHold = document.querySelector('.resume'),
  portHold = document.querySelector('.port');

portSectionMenu = document.querySelector('#top-port-menu');
eduSection = document.querySelector('.edu');


// which section to load, portfolio or resume?
portHold ? portIn() : resumeHold ? resumeIn() : portIn();

function portIn() {
  window.setTimeout(function () {
    portHold.style.cssText = "opacity: 1; transform: translate3d(0, 0%, 0);"
    window.onscroll = areWeThereYet;

    function areWeThereYet() {
      const progScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const yetting = (progScroll / height) * 100;
      document.querySelector(".wellAreWe").style.width = yetting + '%';
      console.log('it scroll');
    }
  }, 100);
}

function resumeIn() {
  window.setTimeout(function () {
    resumeHold.style.cssText = "opacity: 1; transform: translate3d(0, 0%, 0);"
    // roleCall[0].style.cssText = "transition-delay: 0.5s; border-left: 1vw rgba(216, 255, 211, 0.8) solid; margin-left: 2.1em; opacity: 1"
    // roleCall[1].style.cssText = "transition-delay: 0.7s; border-left: 1vw rgba(216, 255, 211, 0.8) solid; margin-left: 2.1em; opacity: 1"
    // roleCall[2].style.cssText = "transition-delay: 0.9s; border-left: 1vw rgba(216, 255, 211, 0.8) solid; margin-left: 2.1em; opacity: 1"
  }, 100);
}

// Portfolio Waypoints and Navigation

if (document.getElementById('websites')) {
  const showPortNav = new Waypoint({
    element: document.getElementById('websites'),
    handler: function (direction) {
      if (direction === "down") {
        portSectionMenu.style.cssText = "display: block; opacity: 1";
      } else if (direction === "up") {
        portSectionMenu.style.cssText = "opacity: 0";
        window.setTimeout(function () {
          portSectionMenu.style.cssText = "height: 0";
        }, 600)
      }
    },
    offset: "20%"
  });
  const sandpSection = document.querySelector('.sandp');
  const sandpImgs = ['../images/leafanddrops.jpg', '../images/trains1.jpg', '../images/bookfest.png', '../images/throughtheeyes.png', '../images/onebook.png', '../images/eveninghymn.jpg', '../images/swaits.png']
  const logoTypeImgs = ['../images/mp-logo.jpg', '../images/ngish_type_s1.png', '../images/ngish_type_s2.png'];

  const sandpImgSrcs = [].slice.call(document.querySelectorAll('.sandp ul li img'));
  const logoTypeImgSrcs = [].slice.call(document.querySelectorAll('.logot ul li img'));

  const lazyScreenPrint = new Waypoint({
    element: sandpSection,
    handler: function (direction) {
      if (direction === "down") {
        sandpImgSrcs.forEach((eachSrc, eachImg) => {
          eachSrc.src = sandpImgs[eachImg]
        })
      } else if (direction === "up") {
        // do nothing here, friend
      }
    },
    offset: "50%"
  });

  const lazyLogoType = new Waypoint({
    element: sandpSection,
    handler: function (direction) {
      if (direction === "down") {
        logoTypeImgSrcs.forEach((eachLogoSrc, eachLogoImg) => {
          eachLogoSrc.src = logoTypeImgs[eachLogoImg]
        })
      } else if (direction === "up") {
        // do nothing here, friend
      }
    },
    offset: "50%"
  });

}



if (document.querySelector('.resume_jobs')) {
  const roleCall = [document.querySelector('.jobrecent'), document.querySelector('.jobcurrent'), document.querySelector('.job1'), document.querySelector('.job2')];
  const waypointNames = {wp1: 'ShowJr', wp2: 'ShowJc', wp3: 'ShowJ1', wp4: 'ShowJ2'};
  const downCSS = "transition-delay: 0.3s; border-left: 1vw rgba(216, 255, 211, 0.8) solid; margin-left: 2.1em; opacity: 1";
  const upCSS = "transition-delay: 0.3s; border-left: 1vw rgba(216, 255, 211, 0.8) solid; margin-left: 2.1em; opacity: 0";


  // element: Elements[nameOfElement],
  // handler: direction => direction = 'down' ? Elements[nameOfElement].style.cssText = downCSS : Elements[nameOfElement].style.cssText = upCSS;

  // .map
  
  waypointNames.wp1 = new Waypoint({
    element: roleCall[0],
    handler: (direction) => {
      direction === 'down' ? roleCall[0].style.cssText = downCSS : roleCall[0].style.cssText = upCSS;
    },
    offset: "90%"
  });

  waypointNames.wp2 = new Waypoint({
    element: roleCall[1],
    handler: (direction) => {
      direction === 'down' ? roleCall[1].style.cssText = downCSS : roleCall[1].style.cssText = upCSS;
    },
    offset: "90%"
  });

  waypointNames.wp3 = new Waypoint({
    element: roleCall[2],
    handler: (direction) => {
      direction === 'down' ? roleCall[2].style.cssText = downCSS : roleCall[2].style.cssText = upCSS;
    },
    offset: "90%"
  });

 waypointNames.wp4 = new Waypoint({
    element: roleCall[3],
    handler: (direction) => {
      direction === 'down' ? roleCall[3].style.cssText = downCSS : roleCall[3].style.cssText = upCSS;
    },
    offset: "90%"
  });

  const ShowEd = new Waypoint({
    element: eduSection,
    handler: (direction) => {
      if (direction === "down") {
        eduSection.style.cssText = "opacity: 1";
      } else if (direction === "up") {
        // roleCall[3].style.cssText = "opacity: 0" 
        eduSection.style.cssText = "opacity: 0";
      }
    },
    offset: "80%"
  });
}


// ______________________

// are we there yet?


// if (direction === "down") {
//   roleCall[0].style.cssText = downCSS;
// }
// else {
//   roleCall[0].style.cssText = upCSS;
// }