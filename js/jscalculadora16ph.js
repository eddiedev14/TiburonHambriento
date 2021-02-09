
document.querySelector('#calcular1').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	if (n1 >= 0 && n1 <= 1 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Muy Acida";
	}else if (n1 > 1 && n1 <= 4 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Algo Acida";
	}else if (n1 > 4 && n1 < 7 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Poco Acida";
	}else if (n1 == 7) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Neutra";
	}else if (n1 > 7 && n1 <= 9 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Poco Alcalina";
	}else if (n1 > 9 && n1 <= 12 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Algo Alcalina";
	}else if (n1 > 12 && n1 <= 14 ) {
		document.querySelector('#n').innerHTML = "Tu Medida de Ph es Muy Alcalina";
	}else if (n1 > 14 ) {
		document.querySelector('#n').innerHTML = "Error, Recuerda que la Medida de Ph es solo hasta 14 y que se utilizan 2 cifras decimales";
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