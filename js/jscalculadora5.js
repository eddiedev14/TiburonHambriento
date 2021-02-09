let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	const n3= parseFloat(document.querySelector('#numero3').value);
	let r;
	let j;
	if (op == '5') {
		j = n2 * n3;
		r = n1 + j;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " m/s";
		document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se Multiplica la aceleracion con el tiempo: " + n2 + "*" + n3 + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se Suma la Velocidad Inicial con la Multiplicacion anteriormente hallada: " + n1 + "+" + j + ", con lo que daria: " + r;
})
let vi = '9'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n4= parseFloat(document.querySelector('#numero4').value);
	const n5= parseFloat(document.querySelector('#numero5').value);
	const n6= parseFloat(document.querySelector('#numero6').value);
	let f;
	let g;
	let l;
	if (vi == '9') {
		f = 2*n4
		g = f/n5;
		l = g-n6;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + l + " m/s";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso3').innerHTML = "Paso 1: Se Multiplica 2 con la tiempo: 2*" + n4 + ", con lo que daria: " + f;
	document.querySelector('#paso4').innerHTML = "Paso 2: Se Divide la Multiplicacion hallada entre el tiempo: " + f + "/" + n5 + ", con lo que daria: " + g;
	document.querySelector('#paso5').innerHTML = "Paso 3: Se Resta la Division hallada con la Velocidad Inicial: " + g + "-" + n6 + ", con lo que daria: " + l;
})
let na = '11'
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n7= parseFloat(document.querySelector('#numero7').value);
	const n8= parseFloat(document.querySelector('#numero8').value);
	const n9= parseFloat(document.querySelector('#numero9').value);
	let f;
	let g;
	const base = n7;
	const exponente = 2;
	let potencia = 1;
	if (na == '11') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		f = 2*n8*n9;
		g = potencia + f;
		var raiz = g;
		raiz = (Math.sqrt(raiz))
	}
	document.querySelector('#n').innerHTML = "La respuesta es: " + raiz + " m/s";
	document.querySelector('#procedimiento3').innerHTML = "Procedimiento";
	document.querySelector('#paso6').innerHTML = "Paso 1: Se Eleva la Velocidad: " + n7 + ", con lo que daria: " + potencia;
	document.querySelector('#paso7').innerHTML = "Paso 2: Se Multiplica 2 por la aceleracion por la distancia: 2*" + n8 + "*" + n9 + ", con lo que daria: " + f;
	document.querySelector('#paso8').innerHTML = "Paso 3: Se suma la potencia con la multiplicacion hallada: " + potencia + "+" + f + ", con lo que daria: " + g;
	document.querySelector('#paso9').innerHTML = "Paso 4: Se saca la raiz cuadrada a la suma anteriormente hallada: " + g + ", con lo que daria: " + raiz;
})
let kj = '16'
document.querySelector('#calcular4').addEventListener('click', () =>{
	const n10= parseFloat(document.querySelector('#numero10').value);
	const n11= parseFloat(document.querySelector('#numero11').value);
	const n12= parseFloat(document.querySelector('#numero12').value);
	let f;
	let g;
	const base = n10;
	const exponente = 2;
	let potencia = 1;
	if (kj == '16') {
		for (let i = 0; i<exponente; i++){
			potencia = potencia*base;
		}
		q = 2*n11*n12;
		w = potencia + q;
	}
	document.querySelector('#j').innerHTML = "La respuesta es: " + w + " m/s2";
	document.querySelector('#procedimiento4').innerHTML = "Procedimiento";
	document.querySelector('#paso10').innerHTML = "Paso 1: Se Eleva la Velocidad: " + n10 + ", con lo que daria: " + potencia;
	document.querySelector('#paso11').innerHTML = "Paso 2: Se Multiplica 2 por la aceleracion por la distancia: 2*" + n11 + "*" + n12 + ", con lo que daria: " + q;
	document.querySelector('#paso12').innerHTML = "Paso 3: Se suma la potencia con la multiplicacion hallada: " + potencia + "+" + q + ", con lo que daria: " + w;
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