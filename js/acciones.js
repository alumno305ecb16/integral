// JavaScript Document
$(document).ready(function(e) {	
//document.addEventListener("deviceready",function(){
	
		 
		 
	 $('#btn1i').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();
 //var long = palabra.length;

	var letra1=palabra.substring(0,1);
	
		
		
		var rem=palabra.replace(1,'I');
		$("#p1").text(rem);
		
		
			
	$('#btn1i').hide();	 
	
	
	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
	
}); 

//for
		
		
		
	
 


 $('#btn1n').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(2,"N") 
	$("#p1").text(rem);
	$('#btn1n').hide();	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	} 
}); 

$('#btn1t').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(4,5);
	var rem=palabra.replace(3,"T") 
	$("#p1").text(rem);
	$('#btn1t').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
}); 

$('#btn1e').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(6,7);
	var rem=palabra.replace(4,"E") 
	$("#p1").text(rem);
	$('#btn1e').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});

$('#btn1g').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(8,9);
	var rem=palabra.replace(5,"G") 
	$("#p1").text(rem);
	$('#btn1g').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1r').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(10,11);
	var rem=palabra.replace(6,"R") 
	$("#p1").text(rem);
	$('#btn1r').hide();	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1a').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(12,13);
	var rem=palabra.replace(7,"A") 
	$("#p1").text(rem);
	$('#btn1a').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1l').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(14,15);
	var rem=palabra.replace(8,"L") 
	$("#p1").text(rem);
	$('#btn1l').hide();	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	} 
});  

$('#btn1i2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(16,17);
	var rem=palabra.replace(9,"I") 
	$("#p1").text(rem);
	$('#btn1i2').hide();
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}	 
});  

$('#btn1n2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(18,20);
	//alert(letra);
	var rem=palabra.replace(10,"N") 
	$("#p1").text(rem);
	$('#btn1n2').hide();	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	} 
});  

$('#btn1m').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(20,22);
	//alert(letra);
	var rem=palabra.replace(11,"M") 
	$("#p1").text(rem);
	$('#btn1m').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1e2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(22,24);
	//alert(letra);
	var rem=palabra.replace(12,"E") 
	$("#p1").text(rem);
	$('#btn1e2').hide();
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}	 
});  

$('#btn1d').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(24,26);
	var rem=palabra.replace(13,"D") 
	$("#p1").text(rem);
	$('#btn1d').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1i3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(14,"I") 
	$("#p1").text(rem);
	$('#btn1i3').hide();	
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	} 
});  

$('#btn1a2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(15,"A") 
	$("#p1").text(rem);
	$('#btn1a2').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1t2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(16,"T") 
	$("#p1").text(rem);
	$('#btn1t2').hide();	 
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}
});  

$('#btn1a3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(17,"A") 
	$("#p1").text(rem);
	$('#btn1a3').hide();
	var numc = palabra.length;
	for (i=0;x<=numc+1;i++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(i,i+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (i==numc-3)
			{
				$(location).attr('href','#juego2');
			}
		}
	
	}	 
}); 

/*
$('#btn2f').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(1,"F") 
	$("#p2").text(rem);
	$('#btn2f').hide();	 
}); 
*/

	


	x=0;
$('.n').on('click', function (){
	x=x+1;
//	alert(x);
	if(x==1)
	{
		$("#imagen").attr("src","images/p2.jpg");	
	}else if(x==2)
	{
		$("#imagen").attr("src","images/p3.jpg");		
	}else if(x==3)
	{
		$("#imagen").attr("src","images/p5.jpg");	
	}else{
		$("#imagen").attr("src","images/p7.jpg");
		
		$(location).attr('href','#perdedor');    
		   
	}
	var oid = $(this).attr("id");
	switch(oid)
	{
		case "btn1v":
			$('#btn1v').hide();
			break;
		case "btn1q":
			$('#btn1q').hide();
			break;
		case "btn1s":
			$('#btn1s').hide();
			break;
		case "btn1u":
			$('#btn1u').hide();
			break;
		case "btn1b":
			$('#btn1b').hide();
			break;	
		case "btn1f":
			$('#btn1f').hide();
			break;	
		
	}
});




});

