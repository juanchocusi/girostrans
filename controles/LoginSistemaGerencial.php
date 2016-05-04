<?php

session_start();
//date_default_timezone_set("America/Lima");
require 'ConectaMySql.php';
$errmsg_arr = array();
$errflag = false;

$sql = " call spVerificaUsuarioG ('".$_POST["nusuario"]."','".$_POST["pass"]."','".$_POST["sucursal"]."' ) ";
if (!$result = mysqli_query($mysqli, $sql)) {
    die();
}
$sucus = array();
while ($sucu = mysqli_fetch_assoc($result)) {
    $sucus[] = array(
        "flag" => $sucu["flag"],
        "nombres" => $sucu["nombres"],
        "tipousuario" => $sucu["tipousuario"],
        "cod_sucursal" => $sucu["cod_sucursal"]
    );
    $logueo = $sucu["flag"];
    $_SESSION['usuario'] = $sucu['nombres'];
    $_SESSION['tipousuario'] = $sucu['tipousuario'];
    $_SESSION['nick'] = $_POST['nusuario'];
    $_SESSION['idempresa'] = $_POST['empresa'];
  //  $_SESSION['sucursal'] = $_POST['sucursal'];
}

if ($logueo > 0) {
    if ($_SESSION['tipousuario'] === 'ADMIN') {
        header("Location: ../nGerencial.php");
    } /*else {
        header("Location: ../nInicio.php");
    }*/
} else {
    $errmsg_arr[] = 'Usuario y/o Password no Autorizado';
    $errflag = true;
}
if ($errflag) {
    $_SESSION['ERRMSG_ARR'] = $errmsg_arr;
    session_write_close();
    header("location: ../LoginAdmin.php");
    exit();
}
$close = mysqli_close($mysqli) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
