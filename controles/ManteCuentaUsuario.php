<?php

date_default_timezone_set("America/Lima");
require 'ConectaMySql.php';

if ($_POST["opcion"] === "CxU2") {

    $query = $mysqli->query("call spBuscaUsuarioCuenta('".$_POST["valor"]."','".$_POST["idempresa"]."','".$_POST["opsql"]."')");
    $datos = array();
    while ($cierre = $query->fetch_array()) {
        $datos[] = array
            (
            "iniciales" => $cierre["iniciales"],
            "nrocuenta" => $cierre["nrocuenta"],
            "nusuario" => $cierre["nusuario"]
        );
    }
    $jsoncxu = json_encode($datos);
    echo ( $jsoncxu );
}

if ($_POST["opcion"] === "MOVSCUENTA") {
    $query = $mysqli->query("call spMuestraMovsCuenta('" . $_POST["cuenta"] . "','" . $_POST["fecha_i"] . "','" . $_POST["fecha_f"] . "')");
    $datos = array();
    while ($recibidos = $query->fetch_array()) {
        $datos[] = array(
            "idtransaccion"     => $recibidos["idtransaccion"],
            "idtipotransaccion" => $recibidos["idtipotransaccion"],
            "fecha_tran"        => $recibidos["fecha_tran"],
            "fechahora_tran"    => $recibidos["fechahora_tran"],
            "descripcion"       => $recibidos["descripcion"],
            "observacion"       => $recibidos["observacion"],
            "datospago"         => $recibidos["datospago"],
            "beneficiario"      => $recibidos["beneficiario"],            
            "usua_modifica"     => $recibidos["usua_modifica"],
            "monto_ing"         => $recibidos["monto_ing"],
            "monto_sal"         => $recibidos["monto_sal"],
            "saldofinal"        => $recibidos["saldofinal"],
            "anulado"           => $recibidos["anulado"]
        );
    }
    $jsonmovs = json_encode($datos);
    echo ( $jsonmovs );
}

if($_POST["opcion"]==="IT")  {    
  $result = $mysqli->query("call spInsertaTransaccion ('" . $_POST["nrocuenta"] . "','" . $_POST["nrocuentadest"] . "','" . $_POST["monto"] . "','" . $_POST["nroop"] . "',
    '" . $_POST["ttran"] . "','" . $_POST["destino"] . "','" . $_POST["idgiro"] . "','" . $_POST["observa"] . "','" . $_POST["respo"] . "',
    '" . $_POST["usuacrea"] . "','" . $_POST["fechamov"] . "','".$_POST["opsql"]."')");
    /*
    $respuesta = new stdClass();
    if($result->num_rows > 0){
        $fila = $result->fetch_array();
        $respuesta->nrodecuenta = $fila["nrocuenta"];
    }
    echo json_encode($respuesta);     
     */
}    

if($_POST["opcion"]==="ANULA")  
{    
    $result = $mysqli->query("call spAnulaEditaMovsCuenta ('".$_POST["idtran"]."','".$_POST["nrocuenta"]."','".$_POST["fechamov"]."',
            '".$_POST["tipo_tran"]."','".$_POST["motivo"]."','".$_POST["monto"]."','".$_POST["campo"]."','".$_POST["usuamodi"]."','".$_POST["anula_edita"]."')");
}    

if($_POST["opcion"]==="ANULACTA")  
{    
    $result = $mysqli->query("call spAnulaCuenta('".$_POST["nrocuenta"]."','".$_POST["tipo"]."')");
}    

///* $result->close(); */
$mysqli->close();
