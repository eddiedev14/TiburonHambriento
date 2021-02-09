let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	let r;
	let j;
	if (op == '5') {
		j = n1 / 2;
		r = j * n2;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " m";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se divide la velocidad final entre 2: " + n1 + "/2" + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se multiplica el valor anterior por el tiempo " + j + "*" + n2 + ", con lo que daria: " + r;
})
let na = '11'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n3= parseFloat(document.querySelector('#numero3').value);
	const n4= parseFloat(document.querySelector('#numero4').value);
	let f;
	let g;
	let a;
	const base = n4;
	const exponente = 2;
	let potencia = 1;
	if (na == '11') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		f = n3*n4;
		g = 0.5*10*potencia;
		a = f - g;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + a + " m";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso3').innerHTML = "Paso 1: Se multiplica la velocidad final por el tiempo: " + n3 + "*" + n4 + ", con lo que daria: " + f;
	document.querySelector('#paso4').innerHTML = "Paso 2: Se multiplica 0.5 por la aceleracion por el tiempo elevado a la 2: 0.5*10*" + potencia + ", con lo que daria: " + g;
	document.querySelector('#paso5').innerHTML = "Paso 3: Se resta la primera multiplicacion con la ultima multiplicacion: " + f + "-" + g + ", con lo que daria: " + a;
})

let uo = '12'
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n5= parseFloat(document.querySelector('#numero5').value);
	let d;
	let e;
	const base = n5;
	const exponente = 2;
	let potencia = 1;
	if (uo == '12') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		d = 0.5*10*potencia;
		e = n5 + d;
	}
	document.querySelector('#n').innerHTML = "La respuesta es: " + e + " m";
	document.querySelector('#procedimiento3').innerHTML = "Procedimiento";
	document.querySelector('#paso6').innerHTML = "Paso 1: Se multiplica 0.5 por 10 por el tiempo elevado a a la 2: 0.5*10*" + potencia + ", con lo que daria: " + d;
	document.querySelector('#paso7').innerHTML = "Paso 2: Se suma el tiempo con la multiplicacion anterior: " + n5 + "+" + d + ", con lo que daria: " + e;
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
