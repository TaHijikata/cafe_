'use strict';
function calcTax(item, price, rate) {
  if (item == "juice") {
    var element = document.getElementById("juice_price");
    element.innerText = '¥' + Math.round(price + price * rate);
  }
  else if (item == "nuts") {
    var element = document.getElementById("nuts_tarts_price");
    element.innerText = '¥' + Math.round(price + price * rate);
  }
  else if (item == "plum") {
    var element = document.getElementById('plum_tarts_price');
    element.innerText = '¥' + Math.round(price + price * rate);
  }
}
