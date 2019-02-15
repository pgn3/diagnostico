function vaciar (){
	document.getElementById("n1").value = "";
}
function vaciar2 (){
	document.getElementById("n2").value = "";
}
function vaciar3 (){
	document.getElementById("n3").value = "";
}
function funcion(){
		var num1=document.getElementById("n1").value;
		var num2=document.getElementById("n2").value;
		var num3=document.getElementById("n3").value;
		if ((num1==num2) && (num1==num3)){
			document.getElementById("res").innerHTML="Es equilatero";
		}else{
			if ( ((num1==num2) && (num1!=num3)) || ((num1==num3) && (num1!=num2)) || ((num2==num3) && (num2!=num1))){
				document.getElementById("res").innerHTML="Es isosceles";
			}else{
				document.getElementById("res").innerHTML="Es escaleno";
			}
		}
}