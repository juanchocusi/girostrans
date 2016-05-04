<?php
 date_default_timezone_set("America/Lima");
//$fechahora= date("Y-m-d H:i:s", (strtotime ("-7 Hours")));
//$fechahora= date("Y-m-d H:i:s);
include 'ConectaMySql.php';

if ($_POST["opcion"] === "BUSCA") {
    $query = $mysqli->query("call spListaBuscaBoleta('".$_POST["valor"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["op"]."','".$_POST["dniapel"]."') ");
    $datos = array();
    while ($fila = $query->fetch_array()) {
        $datos[] = array(
            "idboleta"       => $fila["idboleta"],
            "numero"         => $fila["numero"],
            "dnicliente"     => $fila["dnicliente"],
            "nombres"        => $fila["nombres"],
            "direccion"      => $fila["direccion"],
            "descripcion"    => $fila["descripcion"],
            "fecha_boleta"   => $fila["fecha_boleta"],
            "importe"        => $fila["importe"],            
            "usuaimprime"    => $fila["usuaimprime"],
            "fechahora_crea" => $fila["fechahora_crea"],            
            "observa"        => $fila["observa"],
            "anulado"        => $fila["anulado"]   
        );
    }
    $jsonmovs = json_encode($datos);
    echo ( $jsonmovs );
}
