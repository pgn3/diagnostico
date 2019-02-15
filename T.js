function vaciar (){
	document.getElementById("n1").value = "";
}
function funcion(){
	var tres=+ document.getElementById("n1").value;
	var i=0;
	var multiplos=3
	while(i<tres){
		multiplos=multiplos+3;
		i++;
		document.getElementById("res").innerHTML="Numero:"+multiplos;
	}
}