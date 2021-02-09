let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	const n3= parseFloat(document.querySelector('#numero3').value);
	let r;
	let j;
	if (op == '5') {
		j = n1 - n2;
		r = j/n3;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " m/s2";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se Resta la velocidad final con la velocidad inicial " + n1 + "-" + n2 + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se Divide la resta anterior entre el tiempo: " + j + "/" + n3 + ", con lo que daria: " + r;
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
