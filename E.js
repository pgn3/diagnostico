function vaciar (){
	document.getElementById("n1").value = "";
}
function funcion(){
		var num=document.getElementById("n1").value;
		var descuento=0;
		var ux=0;
		var precio=0;
		if(num<3){
			var total=num*1500;
			descuento=total*0.10;
			precio=total-descuento;
		}
		else{
			if(num>=3){
				var total=num*1500;
				descuento=total*0.15;
				precio=total-descuento;
				if (num>3) {
					ux=num-3
				}
			}
		}
		document.getElementById("res").innerHTML="El total a pagar sin descuento es:"+total;
		document.getElementById("res2").innerHTML="El descuento es es:"+descuento;
		document.getElementById("res3").innerHTML="La cantidad de docenas es:"+num;
		document.getElementById("res4").innerHTML="El total a pagar es:"+precio;
		if (ux>0) {
			document.getElementById("res5").innerHTML="Las docenas extras son de:"+ux;
		}
}