<?php

date_default_timezone_set("America/Lima");
$fecha = date("Y-m-d");
require 'ConectaMySql.php';

if ($_POST["opcion"] === "MOSTRAR") {
    $query = $mysqli->query("call spTotalizaSaldos_Agente('".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["idempresa"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" => $col["fecha"],
            "iniciales" => $col["iniciales"],
            "nrocuenta" => $col["nrocuenta"],
            "comision_itf" => $col["comision_itf"],
            "otrosgastos" => $col["otrosgastos"],
            "saldo_cuenta" => $col["saldo_cuenta"],
            "saldo_efectivo" => $col["saldo_efectivo"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
//    $datos['success'] = true;
//    echo json_encode($datos);
    //$datos->close();
    //$mysqli->close();
}

if ($_POST["opcion"] === "MOSTRAR_A") {
    $query = $mysqli->query("call spTotalizaSaldos_Asociados('".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["idempresa"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" => $col["fecha"],
            "nusuario" => $col["nusuario"],
            "iniciales" => $col["iniciales"],
            "nrocuenta" => $col["nrocuenta"],
            "otrosgastos" => $col["otrosgastos"],
            "comision_inter" => $col["comision_inter"],
            "bono" => $col["bono"],
            "comision_itf" => $col["comision_itf"],            
            "saldo" => $col["saldo"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
//    $datos['success'] = true;
//    echo json_encode($datos);
    //$datos->close();
    //$mysqli->close();
}

if ($_POST["opcion"] === "MOSTRAR_G") {
    $query = $mysqli->query("call spRptGastosxSucursal('" . $_POST["fechai"] . "','" . $_POST["fechaf"] . "','".$_POST["idempresa"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" =>          $col["fecha"],
            "codsucu" =>        $col["codsucu"],
            
            "pendientes" =>     $col["pendientes"],
            "varios" =>         $col["varios"],
            "letras" =>         $col["letras"],
            "combustibles" =>   $col["combustibles"],
            "alimentos" =>      $col["alimentos"],
            "viaticos" =>       $col["viaticos"],
            "ctaxpagar" =>      $col["ctaxpagar"],
            "otros" =>          $col["otros"],
            "entregados" =>     $col["entregados"],            
            "traslado_efectivo" => $col["traslado_efectivo"],
            "total" =>          $col["total"],
            "totalgastos" =>    $col["totalgastos"]
                
        );
    }
    $json = json_encode($datos);
    echo ( $json );
}

if ($_POST["opcion"] === "T_ING_SAL") {
    $query = $mysqli->query(" select fecha,codsucu,tingresos-tsalidas as saldofinal,pendientes, tingresos-tsalidas-pendientes as efectivo_neto from tmp_totales_ingresos_salidas ");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" =>         $col["fecha"],
            "codsucu" =>       $col["codsucu"],
            "saldofinal" =>    $col["saldofinal"],
            "pendientes" =>    $col["pendientes"],
            "efectivo_neto" => $col["efectivo_neto"]            
        );
    }
    $json = json_encode($datos);
    echo ( $json );
}

if ($_POST["opcion"] === "MOS_INGXSUCURSAL") {
    $query = $mysqli->query("call spRptIngresosxSucursal('" . $_POST["fechai"] . "','" . $_POST["fechaf"] . "','".$_POST["idempresa"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" =>             $col["fecha"],
            "codsucu" =>           $col["codsucu"],
            "saldo_inicial" =>     $col["saldo_inicial"],
            "retiro_bancos" =>     $col["retiro_bancos"],
            "transf_recibidas" =>  $col["transf_recibidas"],
            "ctaxcobrar" =>        $col["ctaxcobrar"],
            "otros_ing" =>         $col["otros_ing"],
            "traslado_efectivo" => $col["traslado_efectivo"],
            "total" =>             $col["total"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
//    $datos['success'] = true;
//    echo json_encode($datos);
//    $datos->close();
//    $mysqli->close();
}

if ($_POST["opcion"] === "MSASOCIADO") {
    $consulta = " call spTotalSaldoAsociado('".$_POST["fecha_f"]."') ";
        //$consulta = " call spTotalSaldoAsociado('2015-12-17') ";
        $result = $mysqli->query($consulta);
        $respuesta = new stdClass();
        if ($result->num_rows > 0) {
            $fila = $result->fetch_array();
            $respuesta->total_saldo_asociado = $fila["total_saldo_asociado"];            
        }
        echo json_encode($respuesta);
 }

if ($_POST["opcion"] === "MSAGENTE") {
    $consulta = " call spTotalSaldoAgente('".$_POST["fecha_f"]."') ";
    //    $consulta = " call spTotalSaldoAgente('2015-12-17') ";
        $result = $mysqli->query($consulta);
        $respuesta = new stdClass();
        if ($result->num_rows > 0) {
            $fila = $result->fetch_array();
            $respuesta->tsaldo_cuentaf = $fila["tsaldo_cuentaf"];            
            $respuesta->tsaldo_efectivof = $fila["tsaldo_efectivof"];            
        }
        echo json_encode($respuesta);
 }
if($_POST["opcion"]==="LIMPIA") /*Limpia tabla tmp_totales_ingresos_salidas*/
{    
    $result = $mysqli->query("truncate table tmp_totales_ingresos_salidas;");
}