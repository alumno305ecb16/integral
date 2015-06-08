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
	
	/*var numc = palabra.length;
	for (x=0;x<=numc+1;x++) 
	{  
	//alert(x);
		var p=document.getElementById("p1").innerHTML;
	 	var l=p.substring(x,x+1);
//	alert(l);
			
		if(!isNaN(parseInt(l)) ) {
	
		
		break;
		}else{
			 if (x==numc)
			{
				alert("FELICIDADES");
			}
		}
	
	}
	*/
}); 

//for
		var y=0;
$('.a1').on('click', function (){
	
	var pa=document.getElementById("p1").innerHTML;
	
		var numc = pa.length;
		//alert(numc);
	for (i=0;i<=numc;i++) 
	{  
	//alert(i);
	//alert(x);
	var	p=document.getElementById("p1").innerHTML;
	 var num = p.length;
	 	var l=p.substring(i,i+1);

	//alert(num+" "+i)
	if(isNaN(parseInt(l)) ) {
		
			if (i==num-2)
				{			
					
					if(y>2)
					{
						//alert("break1");
						y=0
						break;
					}else{
						//alert("Segundo Nivel");
						$(location).attr('href','#juego2');	
					}
				}		 
	}else{
			
			 y=y+1;
			 
		if (i==num-2)
		{
			
			 if(y>2)
			 {
				y=0;
			
				break;
		}else
			{
				//alert("2 Nivel")
				$(location).attr('href','#juego2');
				var x=0;
			}
			
		}
			
		}
	
		}
}); 


 $('#btn1n').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(2,"N") 
	$("#p1").text(rem);
	$('#btn1n').hide();	 
}); 

$('#btn1t').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(4,5);
	var rem=palabra.replace(3,"T") 
	$("#p1").text(rem);
	$('#btn1t').hide();	 
}); 

$('#btn1e').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(6,7);
	var rem=palabra.replace(4,"E") 
	$("#p1").text(rem);
	$('#btn1e').hide();	 
});

$('#btn1g').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(8,9);
	var rem=palabra.replace(5,"G") 
	$("#p1").text(rem);
	$('#btn1g').hide();	 
});  

$('#btn1r').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(10,11);
	var rem=palabra.replace(6,"R") 
	$("#p1").text(rem);
	$('#btn1r').hide();	 
});  

$('#btn1a').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(12,13);
	var rem=palabra.replace(7,"A") 
	$("#p1").text(rem);
	$('#btn1a').hide();	 
});  

$('#btn1l').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(14,15);
	var rem=palabra.replace(8,"L") 
	$("#p1").text(rem);
	$('#btn1l').hide();	 
});  

$('#btn1i2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(16,17);
	var rem=palabra.replace(9,"I") 
	$("#p1").text(rem);
	$('#btn1i2').hide();	 
});  

$('#btn1n2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(18,20);
	//alert(letra);
	var rem=palabra.replace(10,"N") 
	$("#p1").text(rem);
	$('#btn1n2').hide();	 
});  

$('#btn1m').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(20,22);
	//alert(letra);
	var rem=palabra.replace(11,"M") 
	$("#p1").text(rem);
	$('#btn1m').hide();	 
});  

$('#btn1e2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(22,24);
	//alert(letra);
	var rem=palabra.replace(12,"E") 
	$("#p1").text(rem);
	$('#btn1e2').hide();	 
});  

$('#btn1d').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(24,26);
	var rem=palabra.replace(13,"D") 
	$("#p1").text(rem);
	$('#btn1d').hide();	 
});  

$('#btn1i3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(14,"I") 
	$("#p1").text(rem);
	$('#btn1i3').hide();	 
});  

$('#btn1a2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(15,"A") 
	$("#p1").text(rem);
	$('#btn1a2').hide();	 
});  

$('#btn1t2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(16,"T") 
	$("#p1").text(rem);
	$('#btn1t2').hide();	 
});  

$('#btn1a3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(17,"A") 
	$("#p1").text(rem);
	$('#btn1a3').hide();	 
}); 


$('#btn2f').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(1,"F") 
	$("#p2").text(rem);
	$('#btn2f').hide();	 
}); 

$('#btn2u').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(2,"U") 
	$("#p2").text(rem);
	$('#btn2u').hide();	 
}); 

$('#btn2n').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(3,"N") 
	$("#p2").text(rem);
	$('#btn2n').hide();	 
}); 

$('#btn2c').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(4,"C") 
	$("#p2").text(rem);
	$('#btn2c').hide();	 
}); 

$('#btn2i').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(5,"I") 
	$("#p2").text(rem);
	$('#btn2i').hide();	 
}); 

$('#btn2o').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(6,"O") 
	$("#p2").text(rem);
	$('#btn2o').hide();	 
}); 
$('#btn2n2').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(7,"N") 
	$("#p2").text(rem);
	$('#btn2n2').hide();	 
}); 

$('.intenar').on('click', function (){	
	$("#p1").text("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17");
	$('#btn1i').show();
	$('#btn1n').show();
	$('#btn1t').show();
	$('#btn1e').show();
	$('#btn1g').show();
	$('#btn1r').show();
	$('#btn1a').show();
	$('#btn1l').show();
	$('#btn1i2').show();
	$('#btn1n2').show();
	$('#btn1m').show();
	$('#btn1e2').show();
	$('#btn1d').show();
	$('#btn1i3').show();
	$('#btn1a2').show();
	$('#btn1t2').show();
	$('#btn1a3').show();
	$('#btn1q').show();
	$('#btn1f').show();
	$('#btn1b').show();
	$('#btn1s').show();
	$('#btn1v').show();
	$('#btn1u').show();
	$("#imagen").attr("src","images/p1.jpg");
	
});

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
		 x=0;
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
//});
