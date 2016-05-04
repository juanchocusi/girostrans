<?php

date_default_timezone_set("America/Lima");
$fecha = date("Y-m-d");
require 'ConectaMySql.php';

if ($_POST["opcion"] === "MOSTRAR") {
    $query = $mysqli->query(" call spMuestraTotales('".$_POST["codsucu"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["empresa"]."',
                                                    '".$_POST["xsucu"]."','".$_POST["diames"]."') ");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "periodo" => $col["periodo"],
            "importe" => $col["importe"],
            "cargo"   => $col["cargo"],
            "otros"   => $col["otros"],
            "total"   => $col["total"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
//    $datos['success'] = true;
//    echo json_encode($datos);
//    $datos->close();
//    $mysqli->close();
}
