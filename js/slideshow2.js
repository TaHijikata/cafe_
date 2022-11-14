'use strict';

var img = new Array ("images/keyvisual1.jpg",
                      "images/keyvisual2.jpg",
                      "images/keyvisual3.jpg");
var element = document.getElementById("slideshow2");
var count = -1;
imgTimer();

function imgTimer() {
  count++;
  if (count == img.length) count = 0;
  element.src = img[count];
  setTimeout("imgTimer()", 5000);
}
