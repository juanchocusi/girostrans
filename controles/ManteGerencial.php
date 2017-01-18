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
            "iniciales"      => $col["iniciales"],
            "nrocuenta"      => $col["nrocuenta"],
            "comision_itf"   => $col["comision_itf"],
            "comision_agente"=> $col["comision_agente"],
            "otros_gastos"   => $col["otros_gastos"],
            "saldo_cuenta"   => $col["saldo_cuenta"],
            "saldo_efectivo" => $col["saldo_efectivo"],
            "gasto_agente"   => $col["gasto_agente"],
            "utilidad_neta"  => $col["utilidad_neta"]
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
            "fecha"             => $col["fecha"],
            "nusuario"          => $col["nusuario"],
            "iniciales"         => $col["iniciales"],
            "nrocuenta"         => $col["nrocuenta"],
            "otrosgastos"       => $col["otrosgastos"],
            "cantidad_telegiro" => $col["cantidad_telegiro"],
            "comision_telegiro" => $col["comision_telegiro"],
            "comision_itf"      => $col["comision_itf"],
            "saldo"             => $col["saldo"],
            "gastos"            => $col["gastos"],
            "utilidad_neta"     => $col["utilidad_neta"]
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
    $query = $mysqli->query("call spRptGastosxSucursal('" . $_POST["fechai"] . "','" . $_POST["fechaf"] . "','".$_POST["idempresa"]."','".$_POST["token"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha" =>                  $col["fecha"],
            "codsucu" =>                $col["codsucu"],            
            "pendientes" =>             $col["pendientes"],
            "pago_giros_bancos" =>      $col["pago_giros_bancos"],
            "pago_comi_giro" =>         $col["pago_comi_giro"],
            "pago_comi_retiro" =>       $col["pago_comi_retiro"],
            "transporte" =>             $col["transporte"],
            "pago_letras_bancos" =>     $col["pago_letras_bancos"],
            "pago_util_mante" =>        $col["pago_util_mante"],
            "pago_servicios" =>         $col["pago_servicios"],
            "alimentos" =>              $col["alimentos"],
            "viaticos" =>               $col["viaticos"],
            "honorarios" =>             $col["honorarios"],
            "otros" =>                  $col["otros"],
            "impuestos" =>              $col["impuestos"],            
            "alquileres" =>             $col["alquileres"],
            "entregados" =>             $col["entregados"],
            "traslado_cta_agte" =>      $col["traslado_cta_agte"],
            "traslado_efec_sucu" =>     $col["traslado_efec_sucu"],
            "traslado_efec_asociado" => $col["traslado_efec_asociado"],
            "totales" =>                $col["totales"],
            "total_gastos" =>           $col["total_gastos"]                
        );
    }
    $json = json_encode($datos);
    echo ( $json );
}

if ($_POST["opcion"] === "MOS_INGXSUCURSAL") {
    $query = $mysqli->query("call spRptIngresosxSucursal('" . $_POST["fechai"] . "','" . $_POST["fechaf"] . "','".$_POST["idempresa"]."','".$_POST["token"]."')");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(            
            "codsucu" =>                $col["codsucu"],
            "fecha" =>                  $col["fecha"],
            "saldo_inicial" =>          $col["saldo_inicial"],
            "importe" =>                $col["importe"],
            "cargo" =>                  $col["cargo"],            
            "otros" =>                  $col["otros"],
            "transf_recibidas" =>       $col["transf_recibidas"],            
            "ajustes" =>                $col["ajustes"],
            "otros_ing" =>              $col["otros_ing"],
            "comi_recargas" =>          $col["comi_recargas"],            
            "tras_efectivo_agt_sucu" => $col["tras_efectivo_agt_sucu"],
            "tras_efectivo_sucu_sucu"=> $col["tras_efectivo_sucu_sucu"],            
            "total" =>                  $col["total"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
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

if ($_POST["opcion"] === "FLUJOCAJA") {
    $query = $mysqli->query("call spFlujoEfectivoCaja()");
    $datos = array();
    while ($col = $query->fetch_array()) {
        $datos[] = array(
            "fecha"         => $col["fecha"],
            "codsucu"       => $col["codsucu"],
            "ingresos"      => $col["ingresos"],
            "egresos"       => $col["egresos"],
            "saldototal"    => $col["saldototal"],
            "pendientes"    => $col["pendientes"],
            "efectivo_neto" => $col["efectivo_neto"],
            "utilxsucursal" => $col["utilxsucursal"],
            "gastos_netos"  => $col["gastos_netos"],
            "ingreso_pasivo"=> $col["ingreso_pasivo"]
        );
    }
    $json = json_encode($datos);
    echo ( $json );
}


