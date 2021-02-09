<!DOCTYPE html>
<html>
<head>
	<title>Puntuanos</title>
	<meta charset="utf-8">
	<link rel="icon" type="image/png" href="../assets/img/LOGO PAGINA WEB CIRCULAR.png">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="../css/estilosrating.css">
</head>
<body>

	 <div class="encabezado">
    <h2 class="logo">TIBURON HAMBRIENTO</h2>
    <input type="checkbox" id="chk">
    <label for="chk" class="mostrarmenu">
      <i class="fas fa-ellipsis-h"></i>
    </label>

    <ul class="menu">
      <a href="../index.html">Home</a>
      <a href="../Paginas Cursos Materias/paginaprincipalfisica.html">Física</a>
      <a href="../Paginas Cursos Materias/paginaprincipalquimica.html">Química</a>
      <a href="../Paginas Cursos Materias/paginaprincipalbiologia.html">Biología</a>
      <a href="../Paginas Cursos Materias/paginaprincipaltecno.html">Tecnología</a>
      <a href="#">Contactanos</a>
      <label for="chk" class="escondermenu">
        <i class="fas fa-times"></i>
      </label>
    </ul>
  </div>
	<div class="wrapper2">
  <input type="radio" name="rate" id="star-1">
  <input type="radio" name="rate" id="star-2">
  <input type="radio" name="rate" id="star-3">
  <input type="radio" name="rate" id="star-4">
  <input type="radio" name="rate" id="star-5">
  <div class="content2">
    <div class="outer">
      <div class="emojis">
        <li class="slideImge"><img src="../assets/img/emoji1.png"></li>
         <li><img src="../assets/img/emoji2.png"></li>
          <li><img src="../assets/img/emoji3.png"></li>
           <li><img src="../assets/img/emoji4.png"></li>
            <li><img src="../assets/img/emoji5.png"></li>
      </div>
    </div>
    <div class="stars">
      <label for="star-1" class="star-1 fas fa-star"></label>
      <label for="star-2" class="star-2 fas fa-star"></label>
      <label for="star-3" class="star-3 fas fa-star"></label>
      <label for="star-4" class="star-4 fas fa-star"></label>
      <label for="star-5" class="star-5 fas fa-star"></label>
    </div>
  </div>
  <div class="footer2">
    <span class="text"></span>
    <span class="numb"></span>
  </div>
  <form method="post">
  <center><h1 class="titulorate">Contactanos</h1></center>
  <center><p class="prate">Bienvenido a la seccion de contactanos aqui podras primero puntuar a nuestra pagina y por otra parte escribir una opinion donde nos puedes contactar y dar tu experiencia</p></center>
  <center><h1 class="titulorate">Inserte su Nombre</h1></center>
  <center><input type="text" id="nombre" class="nombre" placeholder="Nombre" name="nombre"></center>
   <center><h1 class="titulorate">Inserte su Opinion Junto a Su calificacion (1,2,3.5) Maximo de 1000 Caracteres</h1></center>
  <center><textarea maxlength="1000" placeholder="Opinion" name="opinion" onkeyup="countLetters();"></textarea></center>
  <p class="contador">Total de Caracteres :<span class="count"> 0</span></p>
  <center><input type="submit" name="register" class="btn-hover color-2"></center>
  <center><a href="../index.html"><button class="btn-hover2 color-2">Volver a la Pagina Principal</button></center></a>
  </form>
</div>
<?php 
include("registrar.php");
?>
<script type="text/javascript" src="../js/script.js"></script>
</body>
</html>