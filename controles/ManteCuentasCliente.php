<?php

date_default_timezone_set("America/Lima");
require 'ConectaMySql.php';

if ($_POST["opcion"] === "BUSCA") {

    $query = $mysqli->query("call spBuscaCuentasCliente('".$_POST["valor"]."','".$_POST["op"]."')");
    $datos = array();
    while ($celda = $query->fetch_array()) {
        $datos[] = array
            (
            "dni_ruc"   => $celda["dni_ruc"],
            "nrocuenta" => $celda["nrocuenta"],
            "nombres"   => $celda["nombres"],
            "saldof"    => $celda["saldof"]
        );
    }
    $jsoncxc = json_encode($datos);
    echo ( $jsoncxc );
}

if ($_POST["opcion"] === "MUESTRAMOVS") {
    $query = $mysqli->query("call spMuestraMovsCliente('".$_POST["cuenta"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."')");
    $datos = array();
    while ($celda = $query->fetch_array()) {
        $datos[] = array(
            "idtrancliente"     => $celda["idtrancliente"],
            "nrocuenta"         => $celda["nrocuenta"],
            "fechahora_tran"    => $celda["fechahora_tran"],
            "descripcion"       => $celda["descripcion"],
            "observacion"       => $celda["observacion"],
            "monto_ing"         => $celda["monto_ing"],
            "monto_sal"         => $celda["monto_sal"],
            "saldofinal"        => $celda["saldofinal"],
            "anulado"           => $celda["anulado"]
        );
    }
    $jsoncxc = json_encode($datos);
    echo ( $jsoncxc );
}

//if ($_POST["opcion"] === "GUARDATRAN") { 
//        $consulta = "call spAdminTransaccionCliente('".$_POST["cuenta"]."','".$_POST["idtran"]."','".$_POST["monto"]."','".$_POST["tipotran"]."','".$_POST["observa"]."','".$_POST["usuamodi"]."','".$_POST["idempresa"]."','".$_POST["op"]."')";
//        $result = $mysqli->query($consulta);
//    }

if ($_POST["opcion"] === "GUARDATRAN") {
    $query = $mysqli->query(" call spAdminTransaccionCliente('".$_POST["cuenta"]."','".$_POST["idtran"]."','".$_POST["monto"]."','".$_POST["tipotran"]."','".$_POST["observa"]."','".$_POST["usuamodi"]."','".$_POST["idempresa"]."','".$_POST["op"]."') ");
    $datos = array();
    while ($celda = $query->fetch_array()) {
        $datos[] = array(
            "idtrancliente" => $celda["idtrancliente"]
        );
    }
    $jsoncxc = json_encode($datos);
    echo ( $jsoncxc );
}

    
    
    
$mysqli->close();

