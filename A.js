
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
	var res=document.getElementById('res');
	var num1=+ document.getElementById("n1").value;
	var num2=+ document.getElementById("n2").value;
	var num3=+ document.getElementById("n3").value;

		if(num1>num2 && num1>num3){
		var	mayor=num1;

            if(num2>num3){
              var  medio=num2;
              var  ultimo=num3;
            }else{
							medio=num3;
							ultimo=num2;
						}

        }else {
					if(num2>num1 && num2>num3){
						var	mayor=num2;

				            if(num1>num3){
				              var  medio=num1;
				              var  ultimo=num3;
				            }else{
											medio=num3;
											ultimo=num1;
										}

				        }else {
									if(num3>num1 && num3>num2){
										var	mayor=num3;

								            if(num1>num2){
								              var  medio=num1;
								              var  ultimo=num2;
								            }else{
															medio=num2;
															ultimo=num1;
														}

								        }



				        }
        }

	document.getElementById("res").innerHTML=mayor+" "+medio+" "+ultimo;
}
