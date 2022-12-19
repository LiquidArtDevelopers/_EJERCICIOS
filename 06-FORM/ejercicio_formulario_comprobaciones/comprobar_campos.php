<?php

    $destino = "aranaz@gmail.com";
    $nombre = $_POST["nombre"];    
    $telefono = $_POST["correo"];
    $correo = $_POST["telefono"];
    $edad = $_POST["edad"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;

    mail($destino,"Consulta de la Web",$contenido);
    header("location:gracias.html");
?>