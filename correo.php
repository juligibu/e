<?php 

include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['message']) >= 1) {
	    $name = trim($_POST['name']);
	    $email = trim($_POST['email']);
        $mensaje = trim($_POST['message']);
	    $fechareg = date("d/m/y");
	    $consulta = "INSERT INTO datos(nombre, email, fecha_reg, mensaje) VALUES ('$name','$email','$fechareg', '$mensaje')";
	    $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
	    	header("Location: contacto.html");
	    }
}


?>