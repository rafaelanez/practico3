 var tiempoEspera = 2000;
 $(document).ready(function() {
 	//var arboles = [];
 	for (var i = 1; i <= 100; i++) {
 		$(".cielo").append(getArbol(i));
 	};
 	for (var i = 1; i <= 100; i++) {
 		tiempoEspera += getTimeout();
 		mover(i,tiempoEspera);
 	};

     $(document).keydown(function(e) {
         if (e.keyCode == 38 || e.keyCode == 32) {
             saltar();
         }
     });
 });

 function saltar() {
     $(".man").fadeIn()
         .animate({
             bottom: 210
         }, 250)
         .animate({
             bottom: 0
         }, 450);
 }

 function moverArbol(numeroArbol) {
 	var numeroArbol = '#arbol' + numeroArbol;
	$(numeroArbol).fadeIn()
         .animate({
             left: -100
         }, 4000);
 }

 function mover(numeroArbol, timeout) {
 	setTimeout(moverArbol(numeroArbol), timeout);
 }

 function getArbol(numero) {
 	var alto = randomIntFromInterval(50, 125)
 	return '<div id="arbol' + numero +'" class="arbol" style="height: ' + alto +'px"></div>';
 }

 function getTimeout() {
 	return randomIntFromInterval(500, 2000);
 }
 function randomIntFromInterval(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
 }
