'use strict';

{
	window.addEventListener('DOMContentLoaded', function(){
		var params = decodeURI(location.search);
		params = params.substring(1);
		var paramArray = [];
		paramArray = params.split("&");
		var tableContent = "";
		paramArray.forEach(function(item, index){
			var keyValue = [];
			keyValue = item.split("=");
			var tr = document.createElement("tr");
			var tdName = document.createElement("td");
			tdName.textContent = keyValue[0];
			var tdValue = document.createElement("td");
			tdValue.textContent = keyValue[1];
			tr.appendChild(tdName);
			tr.appendChild(tdValue);
			var e = document.getElementById("test");
			e.appendChild(tr);
		});
	});
};
