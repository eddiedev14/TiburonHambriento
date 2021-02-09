let centimetroysegundo = '5';
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	let r;
	if (centimetroysegundo == '5') {
		r = n1 / 27.778;
		document.querySelector('#r').innerHTML = "La respuesta es: " + r + " km/h";
	}
})
let centimetroyhora = '9';
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n2= parseFloat(document.querySelector('#numero2').value);
	let j;
	if (centimetroyhora == '9') {
		j = n2 / 100000;
		document.querySelector('#j').innerHTML = "La respuesta es: " + j + " km/h";
	}
})
let metroysegundo = '12';
document.querySelector('#calcular3').addEventListener('click', () =>{
	const n3= parseFloat(document.querySelector('#numero3').value);
	let k;
	if (metroysegundo == '12') {
		k = n3 * 3.6;
		document.querySelector('#k').innerHTML = "La respuesta es: " + k + " km/h";
	}
})
let metroyhora = '13';
document.querySelector('#calcular4').addEventListener('click', () =>{
	const n4= parseFloat(document.querySelector('#numero4').value);
	let ñ;
	if (metroyhora == '13') {
		ñ = n4 / 1000;
		document.querySelector('#ñ').innerHTML = "La respuesta es: " + ñ + " km/h";
	}
})
let kilometroyhora = '15';
document.querySelector('#calcular5').addEventListener('click', () =>{
	const n5= parseFloat(document.querySelector('#numero5').value);
	let s;
	if (kilometroyhora == '15') {
		s = n5 * 3600;
		document.querySelector('#s').innerHTML = "La respuesta es: " + s + " km/h";
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