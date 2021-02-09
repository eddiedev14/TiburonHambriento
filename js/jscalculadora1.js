let op = '*'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	const n2= parseFloat(document.querySelector('#numero2').value);
	let r;
	if (op == '*') {
		r = n1 * n2;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " m";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se multiplica la velocidad con el tiempo: " + n1 + "*" + n2 + ", con lo que daria: " + r;
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