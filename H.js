function vaciar (){
	document.getElementById("n1").value = "";
}
var extra=0;
var extra2=0;
var impuesto=0;
var impuesto2=0;
function funcion(){
	var num=document.getElementById("n1").value;

	if((num>300)&&(num<1000)){
		extra=num-300;
		impuesto=extra*0.15;
	}
	if(num>1000){
		extra=num-300;
		impuesto=extra*0.15;
		extra2=num-1000;
		impuesto2=extra2*0.10;
	}
	var total=impuesto+impuesto2;
	document.getElementById("res").innerHTML="El total es:"+impuesto.toFixed(2)+" "+impuesto2+" "+total.toFixed(2);	
}