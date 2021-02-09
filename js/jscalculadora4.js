let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	const n3= parseFloat(document.querySelector('#numero3').value);
	let r;
	let j;
	if (op == '5') {
		j = n2 * n3;
		r = n1 - j;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " m/s";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se Multiplica la aceleracion con el tiempo: " + n2 + "*" + n3 + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se Resta la Velocidad Final con la Multiplicacion anteriormente hallada: " + n1 + "-" + j + ", con lo que daria: " + r;
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
		f = n4/n5
		g = 0.5*n6*n5;
		l = f - g;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + l + " m/s";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso3').innerHTML = "Paso 1: Se Divide la Distancia con el tiempo: " + n4 + "/" + n5 + ", con lo que daria: " + f;
	document.querySelector('#paso4').innerHTML = "Paso 2: Se Multiplica 0.5 con la Aceleracion y con el tiempo: 0.5" + "*" + n6 + "*" +  n5+ ", con lo que daria: " + g;
	document.querySelector('#paso5').innerHTML = "Paso 3: Se Resta la Primera Division con la Multiplicacion anteriormente hallada: " + f + "-" + g + ", con lo que daria: " + l;
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