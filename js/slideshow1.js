'use strict';

var img = new Array ("images/about-photo.jpg",
                      "images/gallery1.jpg",
                      "images/gallery2.jpg",
                      "images/gallery3.jpg",
                      "images/gallery4.jpg",
                      "images/gallery5.jpg");
var element = document.getElementById("slideshow1");
var count = -1;
imgTimer();

function imgTimer() {
  count++;
  if (count == img.length) count = 0;
  element.src = img[count];
  setTimeout("imgTimer()", 5000);
}
