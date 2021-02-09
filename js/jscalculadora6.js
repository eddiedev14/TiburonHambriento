let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	const n3= parseFloat(document.querySelector('#numero3').value);
	let r;
	let j;
	let y;
	if (op == '5') {
		j = n1 + n2;
		r = j/2;
		y = n3 * r;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + y + " m";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se Suma la velocidad inicial con la velocidad final: " + n1 + "+" + n2 + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Dividimos la suma anterior entre 2: " + j + "/2" + ", con lo que daria: " + r;
	document.querySelector('#paso3').innerHTML = "Paso 3: Se Multiplica la division anterior por el tiempo " + r + "*" + n3 + ", con lo que daria: " + y;
})
let na = '11'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n4= parseFloat(document.querySelector('#numero4').value);
	const n5= parseFloat(document.querySelector('#numero5').value);
	const n6= parseFloat(document.querySelector('#numero6').value);
	let f;
	let g;
	let a;
	const base = n5;
	const exponente = 2;
	let potencia = 1;
	if (na == '11') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		f = n4*n5;
		g = 0.5*n6*potencia;
		a = f - g;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + a + " m";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso4').innerHTML = "Paso 1: Se Multiplica la velocidad final con el tiempo: " + n4 + "*" + n5 + ", con lo que daria: " + f;
	document.querySelector('#paso5').innerHTML = "Paso 2: Multiplicamos 0.5 con la aceleracion y el tiempo elevado a la 2: 0.5*" + n6 + "*" + potencia +", con lo que daria: " + g;
	document.querySelector('#paso6').innerHTML = "Paso 3: Se resta la primera multiplicacion con la anterior multiplicacion " + f + "-" + g + ", con lo que daria: " + a;
})

let uo = '12'
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n7= parseFloat(document.querySelector('#numero7').value);
	const n8= parseFloat(document.querySelector('#numero8').value);
	const n9= parseFloat(document.querySelector('#numero9').value);
	let s;
	let d;
	let e;
	const base = n8;
	const exponente = 2;
	let potencia = 1;
	if (uo == '12') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		s = n7*n8;
		d = 0.5*n9*potencia;
		e = s + d;
	}
	document.querySelector('#n').innerHTML = "La respuesta es: " + e + " m";
	document.querySelector('#procedimiento3').innerHTML = "Procedimiento";
	document.querySelector('#paso7').innerHTML = "Paso 1: Se Multiplica la velocidad inicial con el tiempo: " + n7 + "*" + n8 + ", con lo que daria: " + s;
	document.querySelector('#paso8').innerHTML = "Paso 2: Multiplicamos 0.5 con la aceleracion y el tiempo elevado a la 2: 0.5*" + n9 + "*" + potencia +", con lo que daria: " + d;
	document.querySelector('#paso9').innerHTML = "Paso 3: Se suma la primera multiplicacion con la anterior multiplicacion " + s + "+" + d + ", con lo que daria: " + e;
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
