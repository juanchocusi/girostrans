<?php
date_default_timezone_set("America/Lima");
include 'ConectaMySql.php';
$FechaHoy = date("Y-m-d");
if ($_POST["opt"] === "MOVSAGENTE")
{
    $query = $mysqli->query("call spMuestraMovsAgente('" . $_POST["cuenta"] . "','" . $_POST["fecha_i"] . "','" . $_POST["fecha_f"] . "')");
    $datos = array();
    while ($recibidos = $query->fetch_array()) {
        $datos[] = array(
            "idtransaccion"     => $recibidos["idtransaccion"],
            "idtipotransaccion" => $recibidos["idtipotransaccion"],
            "fecha_tran"        => $recibidos["fecha_tran"],
            "fechahora_tran"    => $recibidos["fechahora_tran"],
            "descripcion"       => $recibidos["descripcion"],
            "cuentadest"        => $recibidos["cuentadest"],
            "observacion"       => $recibidos["observacion"],
            "datostran"         => $recibidos["datostran"],
            "beneficiario"      => $recibidos["beneficiario"],            
            "usua_crea"         => $recibidos["usua_crea"],
            "nrooperacion"      => $recibidos["nrooperacion"],            
            "nromovs"           => $recibidos["nromovs"],
            "monto_ing"         => $recibidos["monto_ing"],
            "monto_sal"         => $recibidos["monto_sal"],
            "saldofinalc"       => $recibidos["saldofinalc"],
            "saldofinal"        => $recibidos["saldofinal"],
            "anulado"           => $recibidos["anulado"]    
        );
    }
    $jsonmovs = json_encode($datos);
    echo ( $jsonmovs );
}

if($_POST["opt"]==="IT")  
{    
    $result=$mysqli->query("call spInsertaTransaccionAgente ('".$_POST["nrocuenta"]."','".$_POST["nrocuentadest"]."','".$_POST["dinero"]."','".$_POST["monto"]."',
            '".$_POST["ttran"]."','".$_POST["origen"]."','".$_POST["idgiro"]."','".$_POST["nroop"]."','".$_POST["nromovs"]."','".$_POST["observa"]."',
            '".$_POST["respo"]."','".$_POST["modifica"]."','".$_POST["fechamov"]."','".$_POST["opsql"]."')");
}

if($_POST["opt"]==="ANULA")  
{    
    $result = $mysqli->query("call spAnulaMovsAgente ('".$_POST["idtran"]."','".$_POST["fechamov"]."','".$_POST["nrocuenta"]."','".$_POST["idtipotran"]."','".$_POST["motivo"]."',
            '".$_POST["monto"]."','" . $_POST["usuamodi"] . "','" . $_POST["ingsal"] . "')");
    
}

if($_POST["opt"]==="EDITA")
{    
    $result = $mysqli->query("call spEditaMovsAgente ('".$_POST["idtran"]."','".$_POST["campo"]."','".$_POST["descripcion"]."','".$_POST["monto"]."','".$_POST["fechamov"]."','" . $_POST["nrocuenta"] . "','".$_POST["usuamodi"]."','".$_POST["ingsal"]."') ");
    
//    if ( $FechaHoy > $_POST["fechamov"] ){    
//        $result = $mysqli->query("call spActualizaSaldosAgente ('".$_POST["fechamov"]."','".$_POST["nrocuenta"]."','".$_POST["monto"]."','".$_POST["idtran"]."') ");
//    }
        
}

if($_POST["opt"]==="ASALDOS")
{    
    $result = $mysqli->query(" call spActualizaSaldos ('".$_POST["fechamov"]."','".$_POST["nrocuenta"]."','".$_POST["tipocuenta"]."','".$_POST["monto"]."', '".$_POST["dinero"]."') ");
}

$mysqli->close();
