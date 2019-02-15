function vaciar (){
	document.getElementById("n1").value = "";
}
function vaciar2 (){
	document.getElementById("n2").value = "";
}
function funcion(){
	var num1=+ document.getElementById("n1").value;
	var num2=+ document.getElementById("n2").value;
	if(num1>200 && num2>1000){
		document.getElementById("res").innerHTML="Inspector de grado 8";
	}else{
		if (num2>1000){
			document.getElementById("res").innerHTML="Inspector de grado 7";
		}else{
			if (num1>200){
				document.getElementById("res").innerHTML="Inspector de grado 6";
			}else{
				document.getElementById("res").innerHTML="Inspector de grado 5";
			}
		}
	}
}