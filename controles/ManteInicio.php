<?php

date_default_timezone_set("America/Lima");
$fecha = date("Y-m-d");
require 'ConectaMySql.php';

if ($_POST["opcion"] === "MOSTRAR") {
    $query = $mysqli->query("call spMuestraGiros('".$_POST["codsucu"]."','".$_POST["empresa"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["opt"]."','".$_POST["valor"]."','".$_POST["opv"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "cod_girosucu"      => $col["cod_girosucu"],
            "fechahora_registro" => $col["fechahora_registro"],
            "dni_rucb"          => $col["dni_rucb"],
            "beneficiario"      => $col["beneficiario"],
            "dni_ruc"           => $col["dni_ruc"],
            
            "remitente"         => $col["remitente"],
            "cod_sucursald"     => $col["cod_sucursald"],
            "importe_giro"      => $col["importe_giro"],
            "cargo_giro"        => $col["cargo_giro"],            
            "otros"             => $col["otros"],
            
            "total"             => $col["total"],
            "nro_cuenta"        => $col["nro_cuenta"],
            "nro_operacion"     => $col["nro_operacion"],
            "usuario_registra"  => $col["usuario_registra"],
            "observagiro"       => $col["observagiro"],
            
            "usuario_entrega"   => $col["usuario_entrega"],
            "fechahora_entrega" => $col["fechahora_entrega"],
            "datapago"          => $col["datapago"],
            "correlativo"       => $col["correlativo"],
            "anulado"           => $col["anulado"],
        );
    }
    $json = json_encode($datos);
    echo ( $json );
//    $datos['success'] = true;
//    echo json_encode($datos);
//    $datos->close();
//    $mysqli->close();
}

if ($_POST["opcion"] === "MOSTRARzzzzz") {
        $sql = "call spMuestraGiros('" . $_POST["codsucu"] . "','" . $_POST["empresa"] . "','" . $_POST["fechai"] . "','" . $_POST["fechaf"] . "','" . $_POST["opt"] . "')";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($col = mysqli_fetch_assoc($result)) {
            $data[] = array(
            "cod_girosucu"      => $col["cod_girosucu"],
            "fechahora_registro" => $col["fechahora_registro"],
            "dni_rucb"          => $col["dni_rucb"],
            "beneficiario"      => $col["beneficiario"],
            "dni_ruc"           => $col["dni_ruc"],
            "remitente"         => $col["remitente"],
            "cod_sucursald"     => $col["cod_sucursald"],
            "importe_giro"      => $col["importe_giro"],
            "cargo_giro"        => $col["cargo_giro"],            
            "otros"             => $col["otros"],
            "total"             => $col["total"],
            "nro_cuenta"        => $col["nro_cuenta"],
            "nro_operacion"     => $col["nro_operacion"],
            "usuario_registra"  => $col["usuario_registra"],
            "observagiro"       => $col["observagiro"],
            "ciudad_destino"    => $col["ciudad_destino"],
            "usuario_entrega"   => $col["usuario_entrega"],
            "fechahora_entrega" => $col["fechahora_entrega"],
            "nom_sucursal"      => $col["nom_sucursal"],
            "datapago"          => $col["datapago"],
            "anulado"           => $col["anulado"],
            "data_edita"        => $col["data_edita"],
            "nro_boleta"        => $col["nro_boleta"]
            );
        }
        //$close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
		echo json_encode($data);
    }    
