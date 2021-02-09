let na = '11'
document.querySelector('#calcular1').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	let f;
	const base = n1;
	const exponente = 2;
	let potencia = 1;
	const base2 = n2;
	const exponente2 = 2;
	let potencia2 = 1;
	if (na == '11') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		for (let i = 0; i<exponente2; i++){
			potencia2 = potencia2*base2;
		}
		f = potencia + potencia2;
		var raiz = f;
		raiz = (Math.sqrt(raiz))
	}
	document.querySelector('#n').innerHTML = "La respuesta es: " + raiz + " m/s";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se suma la velocidad en el eje y elevada a la 2 y la velocidad en el eje x elevada a la 2 " + potencia + "+" + potencia2 + ", con lo que daria: " + f;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se le saca la raiz cuadrada a la suma anterior, con lo que daria: " + raiz;
})
/*let op;
document.querySelector('#suma').addEventListener('click', () =>{
	op= '+';
});
document.querySelector('#resta').addEventListener('click', () =>{
	op= '-';
});
document.querySelector('#multiplicacion').addEventListener('click', () =>{
	op= '*';
});
document.querySelector('#division').addEventListener('click', () =>{
	op= '/';
});
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseInt(document.querySelector('#numero1').value);
	const n2= parseInt(document.querySelector('#numero2').value);
	let r;
	if (op == '+') {
		r = n1 + n2;
	}else if(op == '-'){
		r = n1 - n2;
	}else if(op == '*'){
		r = n1 * n2;
	}else if(op == '/'){
		r = n1 / n2;
	}
	document.querySelector('#r').innerHTML = r;
})*/