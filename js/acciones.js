// JavaScript Document
$(document).ready(function(e) {	
var arreglopalabras = ['INTEGRALIMEDIATA','FUNCION','DERIVADA','SUSTITUCION','SUSTITUCION','VARIABLEAUXILIAR','ANTIDERIVADA','FACTORIZACION','INTEGRALDEFINIDO','AREABAJOLACURVA'];
var cualpalabra = 0;
var palabraactual = "";
var arreglopalabra = [];
var oportunidades = 4;
var arregloletras = [];
var actual = 0;

function inicio() {

 $('#palabra').html(colocarpalabra(arreglopalabras[cualpalabra]));

 acutal = 0;
 for ( x = 0; x <= 26; x++)
  {
 if (x < 14)
  {
	  arregloletras [x] = String.fromCharCode(x+65);
  } 
  else
   { 
	   if (x==14)
	    
		{
			  arregloletras [x] = 'Ñ';
		}
		else
		{
			
		  arregloletras [x] = String.fromCharCode(x+65-1);
		}
   }
  }
 }
document.addEventListener("deviceready",function() {
inicio();
	$('#act_let').text(arregloletras[0]);
	
	$('#next_let').on('tap', function (){
		$('#act_let').stop().animate({opacity: '0.0'}, {		//animate the element to appear to flash
				duration: 80,
				complete: function(){
					if (actual < 26)
					{
actual++;
				}
				else
				 {
					 actual=0;
				 }
						$('#act_let').text(arregloletras[actual]);
					 
				$('#act_let').stop().animate({opacity: '1'}, 200);
				}
			});												//end animation

	});

	$('#prev_let').on('tap', function (){
		$('#act_let').stop().animate({opacity: '0.0'}, {		//animate the element to appear to flash
				duration: 80,
				complete: function(){
					if (actual > 0)
					{
actual--;
				}
				else
				 {
					 actual=26;
				 }

						$('#act_let').text(arregloletras[actual]);
					 
				$('#act_let').stop().animate({opacity: '1'}, 200);
				}
			});												//end animation

	});
 
 function colocarpalabra (palabra)
  {
	  palabraactual="";
	for (i = 0; i < palabra.length; i++) { 
    
     palabraactual += "<span id='p" + i +"'>" + palabra.charAt(i) + "</span>";
	 arreglopalabra [i] = palabra.charAt(i);
   }  

   return palabraactual;
  }
  
 $('#act_let').on ('tap', function (){
	var letraactual = $('#act_let').text();
	var existe = false;
		for (x = 0; x < arreglopalabra.length; x++)
		 {
		  if (letraactual == arreglopalabra[x])
		   {
			$('#p'+x).css('color','#000');
			arreglopalabra[x]  = "";
			existe = true;
		   }
	   
		 }  
         if (!existe)
		   {
			 oportunidades--;  			
			switch (oportunidades)
			
			{
			 case 3:
			      $("#imagen").attr("src","images/p2.jpg");
			 break;
			 
			 case 2:
			 		$("#imagen").attr("src","images/p3.jpg");		
			 break;
			 
			 case 1:
			 		$("#imagen").attr("src","images/p5.jpg");	
			 break;	
			 
			 case 0:
			 		$("#imagen").attr("src","images/p7.jpg");
					 		 alert ('no mas oportunidades');
			 break;
			}
		   }
	
		 verificarpalabra(); 
 });
 function verificarpalabra ()
  {

	  var quedan = false;
	  if (oportunidades > 0)
	   {
   	for (x = 0; x < arreglopalabra.length; x++)
		 {
		  if (arreglopalabra[x]!="")
		   {
			  quedan = true;
			  break;
		   }
		 }
		 
		 if (!quedan)
		  {
			  alert ('ganaste');
			  siguientepalabra();
		  }
		  
	   }
	   
	   else
	    {
		 siguientepalabra();	
		}
  }

 function siguientepalabra ()
  {
	  $('#palabra').empty();
	cualpalabra++;
	if(cualpalabra < arreglopalabras.length)
	 {
	  alert ('siguiente palabra');

	  $('#palabra').html(colocarpalabra(arreglopalabras[cualpalabra]));	 
	  	  $("#imagen").attr("src","images/p1.jpg");
 	  oportunidades = 4;  
	 }
	 else
	  {
		alert ('fin del juego');  
	  }
  }
});
});