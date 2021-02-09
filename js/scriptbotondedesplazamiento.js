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
