let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	let j;
	if (op == '5') {
		j = 10 * n1;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + j + " m/s";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se multiplica 10 por el tiempo: 10*" + n1 + ", con lo que daria: " + j;
})
let na = '11'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n2= parseFloat(document.querySelector('#numero2').value);
	let g;
	if (na == '11') {
		g = 2*10*n2;
		var raiz = g;
		raiz = (Math.sqrt(raiz))
	}
	document.querySelector('#n').innerHTML = "La respuesta es: " + raiz + " m/s";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso2').innerHTML = "Paso 1: Se multiplica 2 por 10 por la altura: 2*10*" + n2 + ", con lo que daria: " + g;
	document.querySelector('#paso3').innerHTML = "Paso 2: Se le halla la raiz cuadrada al resultado anterior con lo que daria: " + raiz;
})
let r = '12'
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n3= parseFloat(document.querySelector('#numero3').value);
	let t;
	if (r == '12') {
		t = 2*10*n3;
	}
	document.querySelector('#f').innerHTML = "La respuesta es: " + t + " m/s2";
	document.querySelector('#procedimiento3').innerHTML = "Procedimiento";
	document.querySelector('#paso4').innerHTML = "Paso 1: Se multiplica 2 por 10 por la altura: 2*10*" + n3 + ", con lo que daria: " + t;
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