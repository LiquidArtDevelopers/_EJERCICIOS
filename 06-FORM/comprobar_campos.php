<?php

    $destino = "correo@gmail.com";
    $nombre = $_POST["nombre"];    
    $telefono = $_POST["correo"];
    $correo = $_POST["telefono"];
    $edad = $_POST["edad"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nEdad de Nacimiento: " . $edad;

    mail($destino,"Consulta de la Web",$contenido);
    header("location:gracias.html");
?>