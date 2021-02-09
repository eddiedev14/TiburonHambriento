let metros = '5';
document.querySelector('#calcular').addEventListener('click', () =>{
	const n1= parseFloat(document.querySelector('#numero1').value);
	let r;
	if (metros == '5') {
		r = n1 * 100;
		document.querySelector('#r').innerHTML = "La respuesta es: " + r + " cm";
	}
})
let kilometros = '9';
document.querySelector('#calcular2').addEventListener('click', () =>{
	const n2= parseFloat(document.querySelector('#numero2').value);
	let j;
	if (kilometros == '9') {
		j = n2 * 100000;
		document.querySelector('#j').innerHTML = "La respuesta es: " + j + " cm";
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