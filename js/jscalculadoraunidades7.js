let metroysegundo = '5';
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	let r;
	if (metroysegundo == '5') {
		r = n1 * 100;
		document.querySelector('#r').innerHTML = "La respuesta es: " + r + " cm/s";
	}
})
let metroyhora = '9';
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n2= parseFloat(document.querySelector('#numero2').value);
	let j;
	if (metroyhora == '9') {
		j = n2 / 36;
		document.querySelector('#j').innerHTML = "La respuesta es: " + j + " cm/s";
	}
})
let centimetroyhora = '12';
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n3= parseFloat(document.querySelector('#numero3').value);
	let k;
	if (centimetroyhora == '12') {
		k = n3 / 3600;
		document.querySelector('#k').innerHTML = "La respuesta es: " + k + " cm/s";
	}
})
let kilometroysegundos = '13';
document.querySelector('#calcular4').addEventListener('click', () =>{
	const n4= parseFloat(document.querySelector('#numero4').value);
	let ñ;
	if (kilometroysegundos == '13') {
		ñ = n4 * 100000;
		document.querySelector('#ñ').innerHTML = "La respuesta es: " + ñ + " cm/s";
	}
})
let kilometroyhora = '13';
document.querySelector('#calcular5').addEventListener('click', () =>{
	const n5= parseFloat(document.querySelector('#numero5').value);
	let ñ;
	if (kilometroyhora == '13') {
		a = n5 * 27.778;
		document.querySelector('#c').innerHTML = "La respuesta es: " + a + " cm/s";
	}
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