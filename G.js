var num=0;
var num1=0;
var num2=2;
var total=0;
	function funcion(){
		num= Math.round(Math.random()*(6-0)+0);
		num1=Math.round(Math.random()*(6-0)+0);
		num2=Math.round(Math.random()*(6-0)+0);
		if(num==6){
			total=total+1;
		}
		if(num1==6){
			total=total+1;
		}
		if(num2==6){
			total=total+1;
		}
		if(total==3){
			document.getElementById("res2").innerHTML="Tienes "+total+" Seis"+",Excelente";
		}
		else{
			if(total==2){
				document.getElementById("res2").innerHTML="Tienes "+total+" Seis"+",Muy Bien";
			}
			else{
				if(total==1){
					document.getElementById("res2").innerHTML="Tienes "+total+" Seis"+",Regular";
				}
				else{
					document.getElementById("res2").innerHTML="Tienes "+total+" Seis"+",Pesimo";	
				}
			}
		}
		document.getElementById("res").innerHTML=num+","+num1+","+num2;
		
		return num;
		
	}