'use strict';
function staticMap() {
  var element = document.getElementById("map");
  element.innerHTML = '<img src="images/map.png" alt="地図">';
}
function googleMap() {
  var element = document.getElementById("map");
  element.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1845.368543211055!2d139.80629442802078!3d35.708537005241666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1666051942671!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

}
