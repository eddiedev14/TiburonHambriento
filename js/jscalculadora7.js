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
	document.querySelector('#r').innerHTML = "La respuesta es: " + r + " s";
	document.querySelector('#procedimiento').innerHTML = "Procedimiento";
	document.querySelector('#paso1').innerHTML = "Paso 1: Se Resta la velocidad final con la inicial: " + n1 + "-" + n2 + ", con lo que daria: " + j;
	document.querySelector('#paso2').innerHTML = "Paso 2: Se Divide la resta anterior entra la aceleracion: " + j + "/" + n3 + ", con lo que daria: " + r;
})
let na = '6'
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n4= parseFloat(document.querySelector('#numero4').value);
	const n5= parseFloat(document.querySelector('#numero5').value);
	const n6= parseFloat(document.querySelector('#numero6').value);
	let r;
	let j;
	let a;
	if (na == '6') {
		r = 2*n4;
		j = n5+n6;
		a = r/j;
	}
	document.querySelector('#ñ').innerHTML = "La respuesta es: " + a + " s";
	document.querySelector('#procedimiento2').innerHTML = "Procedimiento";
	document.querySelector('#paso3').innerHTML = "Paso 1: Se Multiplica 2 por la distancia: 2*" + n4 + ", con lo que daria: " + r;
	document.querySelector('#paso4').innerHTML = "Paso 2: Sumamos la velocidad inicial con la velocidad final: " + n5 + "+" + n6 + ", con lo que daria: " + j;
	document.querySelector('#paso5').innerHTML = "Paso 3: Dividimos la multiplicacion entre la suma: " + r + "/" + j + ", con lo que daria: " + a;
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
