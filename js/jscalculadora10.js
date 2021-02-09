let op = '5'
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	let r;
	if (op == '5') {
		r = n1/10;
	}
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " s";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se divide la velocidad final entre 10: " + n1 + "/10" + ", con lo que daria: " + r;
})
let na = '6'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n3= parseFloat(document.querySelector('#numero3').value);
	const n4= parseFloat(document.querySelector('#numero4').value);
	let r;
	let j;
	if (na == '6') {
		r = 2*n3;
		j = r/n4;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + j + " s";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso2').innerHTML = "Paso 1: Se multiplica 2 por la distancia: 2*" + n3 + ", con lo que daria: " + r;
	document.querySelector('#paso3').innerHTML = "Paso 2: Se divide la multiplicacion anterior entre la velocidad final: " + r + "/" + n4 + ",con lo que daria :" + j;
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
