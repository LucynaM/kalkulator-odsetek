"use strict";

function calculator() {
	
	var ko = document.getElementById("wklad").value;
	console.log("wklad: " + ko);
	
	var e = document.getElementById("kapitalizacja")
	var m = e.options[e.selectedIndex].value;
	console.log("okres kapitalizacji: " + m);
	
	var r = (document.getElementById("stopa").value)/100;
	console.log("roczna stopa zwrotu: " + r);
	
	var n = document.getElementById("lata").value;
	console.log("liczba lat: " + n);
	
	var K = ko*(Math.pow((1+r/m), (n*m) ));	
	if (document.getElementById("belka").checked) {
		K -= (K-ko)*(0.19);
	} 
	console.log(K);
 	document.getElementById("wynik").innerHTML = Math.round(K*100)/100;
	
}
				 


document.getElementById("oblicz").onclick = calculator;



