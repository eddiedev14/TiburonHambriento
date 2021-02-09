String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
//Arrays Palabras
const palabras = ['residuo-solido'];
//Si queremos escoger una palabra aleatoria (opcional, se pone por si acaso)
//Calcule un numero aleatorio que este entre el 0 y el 1 y se multiplica por palabras.length, es decir daria un numero entre 0 y 3 porque se redondea
const palabra = palabras[0];
//El programa creara una nueva palabra con tantos guiones como letras
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
//Pintamos los Guiones
document.querySelector('#output').innerHTML = palabraConGuiones
//inicializamos la funcion del boton para onclick
document.querySelector('#calcular').addEventListener('click', () =>
{//Llamamos al valor que hay dentro del input
	const letra = document.querySelector('#letra').value;
	//Prohibimos entrada de numeros
	if (letra == "0" || letra == "1" || letra == "2" || letra == "3" || letra == "4" || letra == "5" || letra == "6" || letra == "7" || letra == "8" || letra == "9") {
		document.querySelector('.advertencia').innerText = "El dato que ingresaste es un numero ingresa una letra";
		document.querySelector('.advertencia').style.display = 'block';
		contadorFallos--;
	}
	//prohibimos espacios en blancos manualmente
	else if (letra == "" || letra == " ") {
		document.querySelector('.advertencia').innerText = "El dato que ingresaste es un espacio en blanco ingresa una letra";
		document.querySelector('.advertencia').style.display = 'block';
		contadorFallos--;
	}
	//prohibimos entrada de caracteres manualmente
	else if (letra == "!" || letra == "¡" || letra == "#" || letra == "%" || letra == "&" || letra == "/" || letra == "(" || letra == ")" || letra == "=" || letra == "'" || letra == "?" || letra == "¿" || letra == "*" || letra == "+" || letra == "´" || letra == "¨" || letra == "@" || letra == "|" || letra == "°" || letra == "{" || letra == "}" || letra == "[" || letra == "]" || letra == "," || letra == ";" || letra == "." || letra == ":" || letra == "_" || letra == "<" || letra == ">") {
		document.querySelector('.advertencia').innerText = "El dato que ingresaste es un caracter ingresa una letra";
		document.querySelector('.advertencia').style.display = 'block';
		contadorFallos--;
	}

		let haFallado = true;
	//Comparamos con la letra que tiene la palabra
	for (const i in palabra){
		if (letra == palabra[i]) {
			//Remplazamos la palabraConGuiones por la palabra que introducimos, se coloca i*2 porque en palabraConGuiones pusimos un guion y un espacio, es decir 2 caracteres
			palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
			haFallado = false;
		}
	}
	//Desplazar imagen
	if (haFallado) {
		contadorFallos++;
		document.querySelector('#ahorcado').style.backgroundPosition = -(289*contadorFallos) + 'px 0';
		if (contadorFallos == 7) {
			document.querySelector('.respuesta').style.display = 'block';
			document.querySelector('#iflecha').style.display = 'block';
			document.querySelector('#perdedordiv').style.display = 'block';
			document.querySelector('#ahorcado').style.display = 'none';
		}
		//Remplazamos palabras o numeros en contador fallos
		if (contadorFallos == 1) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 1"
		}
		if (contadorFallos == 2) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 2"
		}
		if (contadorFallos == 3) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 3"
		}
		if (contadorFallos == 4) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 4"
		}
		if (contadorFallos == 5) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 5"
		}
		if (contadorFallos == 6) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 6"
		}
		if (contadorFallos == 7) {
			document.querySelector('.contadorfallos').innerText = "Contador de Fallos: 7"
		}
		}else{
			if (palabraConGuiones.indexOf('_') <0) {
				document.querySelector('.respuesta').style.display = 'block';
			document.querySelector('#iflecha').style.display = 'block';
			document.querySelector('#ganadordiv').style.display = 'block';
			document.querySelector('#ahorcado').style.display = 'none';			}
		}

	//Pintamos los Guiones
document.querySelector('#output').innerHTML = palabraConGuiones;
if (haFallado == true) {
	document.querySelector('.palabrashalladasmalas').innerHTML = "La palabra que dijiste fue: " + letra ;
document.querySelector('.palabrashalladasmalas').style.display = 'block';
}else{
document.querySelector('.palabrashalladas').innerHTML = "La palabra que dijiste fue: " + letra ;
document.querySelector('.palabrashalladas').style.display = 'block';
}

//Limpiar input
document.querySelector('#letra').value = '';
document.querySelector('#letra').focus();
});

function mostrar() {
             document.getElementById('MostrarOcultar').style.visibility="visible"
                    }
                function ocultar() {
            document.getElementById('MostrarOcultar').style.visibility="hidden"
                    }
     function mostrar2() {
             document.getElementById('MostrarOcultar2').style.visibility="visible"
                    }
                function ocultar2() {
            document.getElementById('MostrarOcultar2').style.visibility="hidden"
                    }
//JS boton
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
//recoge los valores de scroll en el html
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
    	//prepara la funcion como una animacion
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}
