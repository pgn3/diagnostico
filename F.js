function vaciar (){
	document.getElementById("n1").value = "";
}
function funcion(){
	var num=document.getElementById("n1").value;
	var centena,decena,unidad;

	centena=Math.floor(num/100);
	decena=Math.floor((num%100)/10);
	unidad=Math.floor((num%100)%10);

	if (centena==unidad) {
		document.getElementById("res").innerHTML="Es capicua";
	}
	else{
		document.getElementById("res").innerHTML="NO Es capicua";
	}
}