"use strict";

function calculator() {
	
	var ko = parseFloat(document.getElementById("wklad").value);
	console.log("wklad: " + ko);
	
	var e = document.getElementById("kapitalizacja")
	var m = e.options[e.selectedIndex].value;
	console.log("okres kapitalizacji: " + m);
	
	var r = parseFloat((document.getElementById("stopa").value)/100);
	console.log("roczna stopa zwrotu: " + r);
	
	var n = parseInt(document.getElementById("lata").value);
	console.log("liczba lat: " + n);
	
	var K = ko*(Math.pow((1+r/m), (n*m) ));	
	if (document.getElementById("belka").checked) {
		K -= (K-ko)*(0.19);
	} 
	
	console.log("wynik: " + K);
 	document.getElementById("wynik").innerHTML = Math.round(K*100)/100;	
	
	/*document.getElementById("wynik").innerHTML = parseFloat(K).toFixed(2); wersja alternatywna do 100*/
	
}
				 


document.getElementById("oblicz").onclick = calculator;



