<?php 
include("con_db.php");
if (isset($_POST['register'])) {
	if (strlen($_POST['nombre']) >= 1 && strlen($_POST['opinion']) >= 1) {
		$nombre = trim($_POST['nombre']);
		$opinion = trim($_POST['opinion']);
		$fechareg = date("d/m/y");
		$consulta = "INSERT INTO `datos`(`nombre`, `opinion`, `fecha_reg`) VALUES ('$nombre','$opinion','$fechareg')";
		$resultado = mysqli_query($conex,$consulta);
		if ($resultado) {
			?>
			<h3 class="ok">¡Tu opinion ha sido enviada Correctamente!</h3>
			<?php
		}else{
			?>
			<h3 class="bad">¡Ups ha ocurrido un error!</h3>
			<?php
		}
	} else{
		?>
			<h3 class="bad">¡Por favor complete los campos!</h3>
			<?php
	}
}
?>