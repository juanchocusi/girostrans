<?php
date_default_timezone_set("America/Lima");
//$fechahora= date("Y-m-d H:i:s", (strtotime ("-7 Hours")));
//$fechahora= date("Y-m-d H:i:s);
include 'ConectaMySql.php';

if ($_POST["opcion"] === "MOVSCLIENTE") {
    $query = $mysqli->query(" call spBuscaGirosxCliente('".$_POST["fecha_i"]."','".$_POST["fecha_f"]."','".$_POST["dni"]."') ");
    $datos = array();
    while ($giros = $query->fetch_array()) {
        $datos[] = array(
            "correlativo"        => $giros["correlativo"],
            "fechahora_registro" => $giros["fechahora_registro"],
            "cod_sucursal"       => $giros["cod_sucursal"],
            "dni_ruc"            => $giros["dni_ruc"],
            "remitente"          => $giros["remitente"],
            "cod_sucursald"      => $giros["cod_sucursald"],
            "dni_rucb"           => $giros["dni_rucb"],
            "beneficiario"       => $giros["beneficiario"],            
            "importe_giro"       => $giros["importe_giro"],
            "cargo_giro"         => $giros["cargo_giro"],            
            "otros"              => $giros["otros"],
            "total"              => $giros["total"],
            "ciudad_destino"     => $giros["ciudad_destino"],
            "observagiro"        => $giros["observagiro"],
            "nro_cuenta"         => $giros["nro_cuenta"],
            "nro_operacion"      => $giros["nro_operacion"],
            "usuario_registra"   => $giros["usuario_registra"],
            "usuario_entrega"    => $giros["usuario_entrega"],
            "fechahora_entrega"  => $giros["fechahora_entrega"],
            "data_pago"          => $giros["datapago"],
            "anulado"            => $giros["anulado"]            
        );
    }
    $jsonmovs = json_encode($datos);
    echo ( $jsonmovs );
}

if ($_POST["opcion"] === "LISTACLIENTES") {    
    $query = $mysqli->query( "select dni_ruc, concat(apel_razon,' ',nombres) as nombres from cliente where apel_razon like concat('".$_POST["valor"]."','%') and anulado='N'" );
    $datos = array();
    while ($giros = $query->fetch_array()) {
        $datos[] = array(
            "dni_ruc" => $giros["dni_ruc"],
            "nombres" => $giros["nombres"]
        );
    }
    $jsoncli = json_encode($datos);
    echo ( $jsoncli );
}