<?php
require 'ConectaMySql.php';
// if(isset($_POST["idmarca"]))
// {
//    $opciones = '<option value="0">Elige Sucursal</option>';
////    $conexion= new mysqli("servidor","usuario","password","base",3306);
//    $strConsulta = "select id, modelo from modelo where idmarca = ".$_POST["idmarca"];
//    $result = $conexion->query($strConsulta);
//    while( $fila = $result->fetch_array() )
//    {
//       $opciones.='<option value="'.$fila["id"].'">'.$fila["modelo"].'</option>';
//    }
//     echo $opciones;
// }
if(isset($_POST["idempresa"]))
 {
    $sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('".$_POST["idempresa"]."',1,1) order BY nom_sucursal";
    $result_sucursal = $mysqli->query($sql_sucursales);
    $optsucursales = '<option value="T">Selecciona Sucursal</option>';
    while ($fila = $result_sucursal->fetch_array()) {
        $optsucursales.='<option value="' . $fila["cod_sucursal"] . '">' . $fila["nom_sucursal"] . '</option>';
    }
    echo $optsucursales;
    }