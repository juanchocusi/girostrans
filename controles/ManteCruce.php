<?php
date_default_timezone_set("America/Lima");

require 'ConectaMySql.php';

if( $_POST["OPCION"]==="LISTA" )    
{ 
    $query=$mysqli->query("call spCruceSucursal('".$_POST["origen"]."','".$_POST["destino"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."')");    
    $datos=array();
    while ($itms=$query->fetch_array()){
    $datos[]=array(        
        "cod_girosucu"      =>$itms["cod_girosucu"],
        "cod_sucursal"      =>$itms["cod_sucursal"],
        "fechahora_registro"=>$itms["fechahora_registro"],
        "beneficiario"      =>$itms["beneficiario"],
        "remitente"         =>$itms["remitente"],
        "cod_sucursald"     =>$itms["cod_sucursald"],
        "importe_giro"      =>$itms["importe_giro"],
        "cargo_giro"        =>$itms["cargo_giro"],
        "otros"             =>$itms["otros"], 
        "totalr"            =>$itms["totalr"],
        "total"             =>$itms["total"],
        "observagiro"       =>$itms["observagiro"],
        "usuario_registra"  =>$itms["usuario_registra"],
        "usuario_entrega"   =>$itms["usuario_entrega"],
        "fechahora_entrega" =>$itms["fechahora_entrega"],
        "datapago"          =>$itms["datapago"],
        "anulado"           =>$itms["anulado"]
        );
    }
    $jsonrpta=json_encode($datos);
    echo ( $jsonrpta );
    
    
}



//$datos->close();
$mysqli->close();