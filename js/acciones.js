// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){
	
		var suma1=0;
		var suma2=0;
	
	$('#btniniciarjuego').on('click', function (){
			
			
			$('#sigp2').hide();
	});
		 
	 $('#btn1i').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();
 //var long = palabra.length;

	var letra1=palabra.substring(0,1);
	
		var rem=palabra.replace(1,'I');
		$("#p1").text(rem);
		
		
	suma1=suma1+1;
			
	$('#btn1i').hide();	 
	
}); 

//for1
		var y=0;
$('.a1').on('click', function (){
	
	var pa=document.getElementById("p1").innerHTML;
	
		var numc = pa.length;
		
	for (i=0;i<=numc;i++) 
	{  
	
	var	p=document.getElementById("p1").innerHTML;
	 var num = p.length;
	 	var l=p.substring(i,i+1);

	//alert(num+" "+i)
	if(isNaN(parseInt(l)) ) {
		
		
			if (i==num)
				{			
					
					if(y>1)
					{
						//alert("break1");
						y=0
						break;
					}else{
						//alert("Segundo Nivel");
						
						$('#sigp2').show();
						$('#sigp3').hide();
						$(location).attr('href','#juego2');	
						
					}
				}		 
	}else{
			
			 y=y+1;
			 
			
		if (i==num)
		{
			
			 if(y>1)
			 {
				y=0;
			
				break;
			}else
			{
				//alert("2 Nivel")
				
				$('#sigp2').show();
				$('#sigp3').hide();
				$(location).attr('href','#juego2');
				
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
	suma1=suma1+1;
	$('#btn1n').hide();	 
}); 

$('#btn1t').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(4,5);
	var rem=palabra.replace(3,"T") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1t').hide();	 
}); 

$('#btn1e').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(6,7);
	var rem=palabra.replace(4,"E") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1e').hide();	 
});

$('#btn1g').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(8,9);
	var rem=palabra.replace(5,"G") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1g').hide();	 
});  

$('#btn1r').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(10,11);
	var rem=palabra.replace(6,"R") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1r').hide();	 
});  

$('#btn1a').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(12,13);
	var rem=palabra.replace(7,"A") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1a').hide();	 
});  

$('#btn1l').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(14,15);
	var rem=palabra.replace(8,"L") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1l').hide();	 
});  

$('#btn1i2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(16,17);
	var rem=palabra.replace(9,"I") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1i2').hide();	 
});  

$('#btn1n2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(18,20);
	//alert(letra);
	var rem=palabra.replace(10,"N") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1n2').hide();	 
});  

$('#btn1m').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(20,22);
	//alert(letra);
	var rem=palabra.replace(11,"M") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1m').hide();	 
});  

$('#btn1e2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(22,24);
	//alert(letra);
	var rem=palabra.replace(12,"E") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1e2').hide();	 
});  

$('#btn1d').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(24,26);
	var rem=palabra.replace(13,"D") 
	suma1=suma1+1;
	$("#p1").text(rem);
	$('#btn1d').hide();	 
});  

$('#btn1i3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(14,"I") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1i3').hide();	 
});  

$('#btn1a2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(15,"A") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1a2').hide();	 
});  

$('#btn1t2').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(16,"T") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1t2').hide();	 
});  

$('#btn1a3').on('click', function (){
		
	 var palabra=document.getElementById("p1").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(26,28);
	var rem=palabra.replace(17,"A") 
	$("#p1").text(rem);
	suma1=suma1+1;
	$('#btn1a3').hide();	 
}); 


$('#btn2f').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(1,"F") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2f').hide();	 
}); 

$('#btn2u').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(2,"U") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2u').hide();	 
}); 

$('#btn2n').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(3,"N") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2n').hide();	 
}); 

$('#btn2c').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(4,"C") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2c').hide();	 
}); 

$('#btn2i').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(5,"I") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2i').hide();	 
}); 

$('#btn2o').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(6,"O") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2o').hide();	 
}); 
$('#btn2n2').on('click', function (){
		
	 var palabra=document.getElementById("p2").innerHTML;
	var palabra=palabra.toString();

	var letra=palabra.substring(2,3);
	var rem=palabra.replace(7,"N") 
	$("#p2").text(rem);
	suma2=suma2+1;
	$('#btn2n2').hide();	 
}); 

	
	
$('#intenar').on('click', function (){
	var sumatotal=suma1+suma2;
	//alert(sumatotal);
	if (sumatotal<17)
{
	
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
	sumatotal=sumatotal-suma1;
	$("#imagen").attr("src","images/p1.jpg");
	$(location).attr('href','#juego');	
}else if(sumatotal>=17)
{
	$("#p2").text("1 2 3 4 5 6 7");
	$("#imagen2").attr("src","images/p1.jpg");
	$('#btn2a').show();
	$('#btn2u').show();
	$('#btn2e').show();
	$('#btn2c').show();
	$('#btn2f').show();
	$('#btn2l').show();
	$('#btn2i').show();
	$('#btn2d').show();
	$('#btn2n').show();
	$('#btn2j').show();
	$('#btn2n2').show();
	$('#btn2o').show();
	sumatotal=sumatotal-suma2;
	$(location).attr('href','#juego2');	
}	
});
//////JUEGO 1 PERDEDOR
	x=0;
$('.n').on('click', function (){
	x=x+1;

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
		$("#numperdi").text(suma1+suma2);  
		  
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

///////////////////////////////////////SEGUNDA PAGUINA


var y2=0;
$('.a2').on('click', function (){
	
	var pa=document.getElementById("p2").innerHTML;
	var numc = pa.length;
	
	
	for (i=0;i<=numc;i++) 
	{  
	
	var	p=document.getElementById("p2").innerHTML;
	 var num = p.length;
	 	var l=p.substring(i,i+1);

	//alert(num+" "+i)
	if(isNaN(parseInt(l)) ) {
		
			if (i==num-1)
				{			
					
					if(y2>0)
					{
						
						y2=0
						break;
					}else{
						
						
						$('#sigp3').show();
						$(location).attr('href','#juego3');	
						
					}
				}		 
	}else{
			
			 y2=y2+1;
			 
		if (i==num-1)
		{
			
			 if(y2>0)
			 {
				y2=0;
			
				break;
		}else
			{
			
				
				$('#sigp3').show();
				$(location).attr('href','#juego3');
				
			}
			
		}
			
		}
	
		}
	
	
});





	var x2=0;
$('.n2').on('click', function (){
	
	x2=x2+1;
//	alert(x2);
		if(x2==1)
		{
			$("#imagen2").attr("src","images/p2.jpg");
		}else if(x2==2)
		{
			$("#imagen2").attr("src","images/p3.jpg");
		}else if(x2==3)
		{
			$("#imagen2").attr("src","images/p5.jpg");
		}else if(x2==4)
		{
			$("#imagen2").attr("src","images/p7.jpg");
			x2=0;
			$("#numperdi").text(suma1+suma2);
			$(location).attr('href','#perdedor');
			
		}
		
		var oid2 = $(this).attr("id");
		
		switch (oid2)
		{
		case "btn2a":
			$('#btn2a').hide();
			break;
		case "btn2e":
			$('#btn2e').hide();
			break;
		case "btn2l":
			$('#btn2l').hide();
			break;
		case "btn2d":
			$('#btn2d').hide();
			break;
		case "btn2j":
			$('#btn2j').hide();
			break;
		}
});


});
});
