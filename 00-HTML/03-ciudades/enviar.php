<?php

    $destino = "aranaz@gmail.com";
    $nombre = $_POST["Nombre"];
    $correo = $_POST["Telefono"];
    $telefono = $_POST["Correo"];
    $mensaje = $_POST["Mensaje"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;

    mail($destino,"Consulta de la Web",$contenido);
    header("location:gracias.html");
?>