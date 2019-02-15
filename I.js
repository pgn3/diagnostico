function vaciar (){
	document.getElementById("n1").value = "";
}
function vaciar2 (){
	document.getElementById("n2").value = "";
}
function vaciar3 (){
	document.getElementById("n3").value = "";
}
function vaciar4 (){
	document.getElementById("n4").value = "";
}
function funcion(){
	var prom1=document.getElementById("n1").value;
	var prom2=document.getElementById("n2").value;
	var prom3=document.getElementById("n3").value;
	var prom4=document.getElementById("n4").value;
	if((prom1>prom2)&&(prom1>prom3)&&(prom1>prom4)){
		var mayor=prom1;
		if(prom2>prom3 && prom2>prom4){
			var	medio=prom2;

            if(prom3>prom4){
              var  ultimo=prom3;
              var  fuera=prom4;
        	}else{
							ultimo=prom4;
							fuera=prom3;
						}

        }else{
        	if (prom3>prom2 && prom3>prom4){
        		var medio=prom3;
        		 if(prom2>prom4){
              		var  ultimo=prom2;
              		var  fuera=prom4;
        		}else{
						ultimo=prom4;
						fuera=prom2;
					}
        	}else{
        		if (prom4>prom2 && prom4>prom3){
        			var medio=prom4;
        		 	if(prom2>prom3){
              			var  ultimo=prom2;
              			var  fuera=prom3;
        			}else{
						ultimo=prom3;
						fuera=prom2;
					}
        	
        	}

        }
	}


}else{
	if((prom2>prom1)&&(prom2>prom3)&&(prom2>prom4)){
		var mayor=prom2;
		if(prom1>prom3 && prom1>prom4){
			var	medio=prom1;

            if(prom3>prom4){
              var  ultimo=prom3;
              var  fuera=prom4;
        	}else{
							ultimo=prom4;
							fuera=prom3;
						}

        }else{
        	if (prom3>prom1 && prom3>prom4){
        		var medio=prom3;
        		 if(prom1>prom4){
              		var  ultimo=prom1;
              		var  fuera=prom4;
        		}else{
						ultimo=prom4;
						fuera=prom1;
					}
        	}else{
        		if (prom4>prom1 && prom4>prom3){
        			var medio=prom4;
        		 	if(prom1>prom3){
              			var  ultimo=prom1;
              			var  fuera=prom3;
        			}else{
						ultimo=prom3;
						fuera=prom1;
					}
        	
        	}

        }
	}
}else{
	if((prom3>prom1)&&(prom3>prom2)&&(prom3>prom4)){
		var mayor=prom3;
		if(prom2>prom1 && prom2>prom4){
			var	medio=prom2;

            if(prom1>prom4){
              var  ultimo=prom1;
              var  fuera=prom4;
        	}else{
							ultimo=prom4;
							fuera=prom1;
						}

        }else{
        	if (prom1>prom2 && prom1>prom4){
        		var medio=prom1;
        		 if(prom2>prom4){
              		var  ultimo=prom2;
              		var  fuera=prom4;
        		}else{
						ultimo=prom4;
						fuera=prom2;
					}
        	}else{
        		if (prom4>prom2 && prom4>prom1){
        			var medio=prom4;
        		 	if(prom2>prom1){
              			var  ultimo=prom2;
              			var  fuera=prom1;
        			}else{
						ultimo=prom1;
						fuera=prom2;
					}
        	
        	}

        }
	}


}else{
	if((prom4>prom2)&&(prom4>prom3)&&(prom4>prom1)){
		var mayor=prom4;
		if(prom2>prom3 && prom2>prom1){
			var	medio=prom2;

            if(prom3>prom1){
              var  ultimo=prom3;
              var  fuera=prom1;
        	}else{
							ultimo=prom1;
							fuera=prom3;
						}

        }else{
        	if (prom3>prom2 && prom3>prom1){
        		var medio=prom3;
        		 if(prom2>prom1){
              		var  ultimo=prom2;
              		var  fuera=prom1;
        		}else{
						ultimo=prom1;
						fuera=prom2;
					}
        	}else{
        		if (prom1>prom2 && prom1>prom3){
        			var medio=prom1;
        		 	if(prom2>prom3){
              			var  ultimo=prom2;
              			var  fuera=prom3;
        			}else{
						ultimo=prom3;
						fuera=prom2;
					}
        	
        	}

        }
	}


}
}
}

}

	var promedio=(mayor+medio+ultimo)/3;
	document.getElementById("res").innerHTML=promedio;


}