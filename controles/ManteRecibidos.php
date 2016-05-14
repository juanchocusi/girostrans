<?php
date_default_timezone_set("America/Lima");
$fecha= date("Y-m-d");
require 'ConectaMySql.php';

if( $_POST["opt"]==="R" )    
{ 
    $query=$mysqli->query("call spRecuperaRecibidos('".$_POST["codsucu"]."','".$_POST["fecha"]."','".$_POST["opt"]."')");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "cod_girosucu"          =>$recibidos["cod_girosucu"],
        "idcr"                  =>$recibidos["idcr"],
        "idcb"                  =>$recibidos["idcb"],
        "cod_girosucu"          =>$recibidos["cod_girosucu"],
        "fechahora_registro"    =>$recibidos["fechahora_registro"],
        "dni_rucb"              =>$recibidos["dni_rucb"],
        "beneficiario"          =>$recibidos["beneficiario"],
        "dni_ruc"               =>$recibidos["dni_ruc"],
        "remitente"             =>$recibidos["remitente"], 
        "cod_sucursald"         =>$recibidos["cod_sucursald"],
        "importe_giro"          =>$recibidos["importe_giro"],
        "cargo_giro"            =>$recibidos["cargo_giro"],
        "igv_giro"              =>$recibidos["igv_giro"],
        "itf_giro"              =>$recibidos["itf_giro"],
        "otros"                 =>$recibidos["otros"],
        "total"                 =>$recibidos["total"],        
        "nro_cuenta"            =>$recibidos["nro_cuenta"],
        "nro_operacion"         =>$recibidos["nro_operacion"],        
        "usuario_registra"      =>$recibidos["usuario_registra"],
        "fechahora_entrega"     =>$recibidos["fechahora_entrega"],
        "usuario_entrega"       =>$recibidos["usuario_entrega"],
        "observagiro"           =>$recibidos["observagiro"],
        "ciudad_destino"        =>$recibidos["ciudad_destino"],        
        "nom_sucursal"          =>$recibidos["nom_sucursal"],
        "datapago"              =>$recibidos["datapago"],
        "anulado"               =>$recibidos["anulado"],
        "data_edita"            =>$recibidos["data_edita"],
        "nro_boleta"            =>$recibidos["nro_boleta"],
	"en_efectivo"           =>$recibidos["en_efectivo"],
        "correlativo"           =>$recibidos["correlativo"],
        "voucher"               =>$recibidos["voucher"]    
        );
    }
    $jsonre=json_encode($datos);
    echo ( $jsonre );
    
    /*$cierre->close();
    $db->close();*/
}

if( $_POST["opt"]==="E" )    
{ 
    $query=$mysqli->query("call spRecuperaRecibidos('".$_POST["codsucu"]."','".$_POST["fecha"]."','".$_POST["opt"]."' )");
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "cod_girosucu"          =>$recibidos["cod_girosucu"],
        "fechahora_registro"    =>$recibidos["fechahora_registro"],
        "dni_rucb"              =>$recibidos["dni_rucb"],
        "beneficiario"          =>$recibidos["beneficiario"],
        "dni_ruc"               =>$recibidos["dni_ruc"],
        "remitente"             =>$recibidos["remitente"], 
        "cod_sucursald"         =>$recibidos["cod_sucursald"],
        "importe_giro"          =>$recibidos["importe_giro"],
        "cargo_giro"            =>$recibidos["cargo_giro"],
        "igv_giro"              =>$recibidos["igv_giro"],
        "itf_giro"              =>$recibidos["itf_giro"],
        "otros"                 =>$recibidos["otros"],
        "total"                 =>$recibidos["total"],        
        "nro_cuenta"            =>$recibidos["nro_cuenta"],
        "nro_operacion"         =>$recibidos["nro_operacion"],        
        "usuario_registra"      =>$recibidos["usuario_registra"],        
        "fechahora_entrega"     =>$recibidos["fechahora_entrega"],
        "usuario_entrega"       =>$recibidos["usuario_entrega"],
        "observagiro"           =>$recibidos["observagiro"],
        "ciudad_destino"        =>$recibidos["ciudad_destino"],        
        "nom_sucursal"          =>$recibidos["nom_sucursal"],
        "datapago"              =>$recibidos["datapago"],
        "anulado"               =>$recibidos["anulado"],
        "correlativo"           =>$recibidos["correlativo"],
        "voucher"               =>$recibidos["voucher"]    
        );
    }
    
    $jsonre=json_encode($datos);    
    echo ( $jsonre );
    
    /*$cierre->close();
    $db->close();*/
}
/*================= Insertando =======================*/
if($_POST["opt"]==="I")  
{    
    $result=$mysqli->query("call spGuardaRecibidos('".$_POST["fechagiro"]."','".$_POST["origen"]."','".$_POST["remitente"]."','".$_POST["destino"]."',
                            '".$_POST["beneficiario"]."','".$_POST["importe"]."','".$_POST["cargo"]."','".$_POST["igv"]."','".$_POST["itf"]."','".$_POST["otro"]."','".$_POST["total"]."','".$_POST["efectivo"]."',
                            '".$_POST["ciudestino"]."','".$_POST["obsgiro"]."','".$_POST["nrocuenta"]."','".$_POST["nusuario"]."')");    
    $respuesta = new stdClass();
    if($result->num_rows > 0){
        $fila = $result->fetch_array();
        $respuesta->codgirosucu = $fila["cod_girosucu"];
        $respuesta->otro_ing = $fila["otros"];
    }
    echo json_encode($respuesta);
}    

if ($_POST["opt"] === "ANULA")
    { // ANULA RECIBIDOS
    $consulta = "UPDATE giros set anulado ='S', observagiro= '". $_POST["motivo"] ."'  where correlativo ='". $_POST["correlativo"] ."' ";
    $result = $mysqli->query($consulta);
}

if($_POST["opt"]==="BC")
{ 
    $query=$mysqli->query("call spMuestraClientexBusqueda('".$_POST["valor"]."','".$_POST["op"]."')");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "idcliente"=>$recibidos["idcliente"],
        "dni_ruc"=>$recibidos["dni_ruc"],
        "apel_razon"=>$recibidos["apel_razon"],
        "nombres"=>$recibidos["nombres"]
        );
    }
    $jsoncli=json_encode($datos);
    echo ( $jsoncli );
}

if($_POST["opt"]==="PAGA"){ 
    $query=$mysqli->query( "call spPagaGiro('".$_POST["idgiro"]."','".$_POST["nrooperacion"]."','".$_POST["usuaentrega"]."','".$_POST["sucuentrega"]."',
                            '".$_POST["datospago"]."','".$_POST["monto"]."','".$_POST["opsql"]."')");
}

if($_POST["opt"]==="PAGA1"){ 
    $query=$mysqli->query( "call spInsertaNuevoDiario('".$_POST["sucuentrega"]."','".$fecha."','".$_POST["usuaentrega"]."') " );
}

if($_POST["opt"]==="PAGA2"){
       $query=$mysqli->query( "call spInsertaDiarioDetalle('".$_POST["sucuentrega"]."','".$_POST["datospago"]."','".$_POST["usuaentrega"]."')");
}

if($_POST["opt"]==="PAGA3"){ 
    $query=$mysqli->query( "call spComisionPagoxInternet('".$_POST["nrocuenta"]."','".$_POST["correlativo"]."','".$_POST["usuacrea"]."')");                                 
}

if($_POST["opt"]==="Inserta_Otros_en_Transaccion"){ 
    $query=$mysqli->query( "call spIngresaComisionPagoxInternet('".$_POST["nrocuenta"]."','".$_POST["monto"]."','".$_POST["idgiro"]."')");
}

if($_POST["opt"]==="BCLIENTE") 
{ 
$consulta = "call spRecuperaCliente('".$_POST["dni"]."')";
$result = $mysqli->query($consulta);	
$respuesta = new stdClass();
if($result->num_rows > 0){
	$fila = $result->fetch_array();
        $respuesta->idcliente = $fila['idcliente'];
	$respuesta->nombres = $fila['apelnombre'];
}
echo json_encode($respuesta);
}

if($_POST["opt"]==="B") /* Recupera datos de sucursal cuando se usa con ajax...done()*/
{ 
$consulta = "call spDatosSucursal ('".$_POST["codsucu"]."','".$_POST["idempresa"]."')";
$result = $mysqli->query($consulta);	
$respuesta = new stdClass();
if($result->num_rows > 0){
	$fila = $result->fetch_array();
        $respuesta->codsucursal = $fila['cod_sucursal'];
	$respuesta->nomsucursal = $fila['nom_sucursal'];
        $respuesta->dirsucursal = $fila['dir_sucursal'];
}
echo json_encode($respuesta);
}

if($_POST["opt"]==="BUSCASUCU"){ 
    $query=$mysqli->query(" SELECT cod_sucursal,nom_sucursal,dir_sucursal from sucursal WHERE nom_sucursal LIKE CONCAT('%','".$_POST["nomsucu"]."','%') and idempresa='".$_POST["idempresa"]."' order by nom_sucursal ");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "cod_sucursal"=>$recibidos["cod_sucursal"],
        "nom_sucursal"=>$recibidos["nom_sucursal"],
        "dir_sucursal"=>$recibidos["dir_sucursal"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ( $jsonsucu );
}

if($_POST["opt"]==="BUSCASUCU1"){ 
    $query=$mysqli->query(" SELECT cod_sucursal,nom_sucursal,dir_sucursal from sucursal WHERE nom_sucursal LIKE CONCAT('%','".$_POST["nomsucu"]."','%') and mid(cod_sucursal,1,1)='".$_POST["codsucu"]."' order by nom_sucursal ");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "cod_sucursal"=>$recibidos["cod_sucursal"],
        "nom_sucursal"=>$recibidos["nom_sucursal"],
        "dir_sucursal"=>$recibidos["dir_sucursal"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ( $jsonsucu );
}

if($_POST["opt"]==="BCLIENTEzzzzzzz") 
{
    $sql =  " call spRecuperaCliente('".$_POST["dni"]."') ";
if (!$result = mysqli_query($mysqli, $sql)) {
    die();
}
$sucus = array();
while ($sucu = mysqli_fetch_assoc($result)) {
    $sucus[] = array(
        "idcliente" => $sucu["idcliente"],
        "nombres"   => $sucu["apelnombre"]
        
    );
   echo json_encode($sucus); 
}

}

if($_POST["opt"]==="EDITACAB")
{ 
    $query=$mysqli->query(" call spEditaCabTransaccion('".$_POST["idgiro"]."','".$_POST["dnib"]."','".$_POST["dnir"]."','". $_POST["codsucursald"]."','". $_POST["nrocuenta"]."','". $_POST["nick"]."') ");    
    $datos=array();
    while ($itms=$query->fetch_array()){
    $datos[]=array(        
        "cod_girosucu"  =>$itms["cod_girosucu"],
        "data_edita"    =>$itms["data_edita"]
        );
    }
    $respuesta=json_encode($datos);
    echo ( $respuesta );
}
/*============== Actualiza ===========*/
if($_POST["opt"]==="update")  
    {    
    $query = $mysqli->query("update giros set ".$_POST["campo"]."='".$_POST["valor"]."',data_edita='".$_POST["datosedita"]."',total=total-'".$_POST["diferencia"]."' where correlativo='".intval($_POST["idgiro"])."' ");    
    if ($query) echo "<span class='ok'>Valores modificados correctamente.</span>";
		else echo "<span class='ko'>".$db->error."</span>";    
    }

if($_POST["opt"]==="BOLETA")
{ 
    $query=$mysqli->query("call spAdministraBoletas('".$_POST["serie"]."','".$_POST["nro"]."','".$_POST["codsucu"]."','".$_POST["dni"]."','".$_POST["direccion"]."','".$_POST["descripcion"]."','".$_POST["fecha"]."','".$_POST["importe"]."','".$_POST["userprint"]."','".$_POST["idgiro"]."','---','".$_POST["idempresa"]."','id_boleta','valor','dni_o_apel','fechai','fechaf','I')");
     $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "nro"           =>$recibidos["nro"],
        "nombres"       =>$recibidos["nombres"],
        "fechahora_crea"    =>$recibidos["fechahora_crea"],
        "usuaimprime"   =>$recibidos["usuaimprime"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ( $jsonsucu );
}

if($_POST["opt"]==="ULTIMABOLETA")
{ 
    $query=$mysqli->query("call spRecuperaUltimaBoleta('".$_POST["codsucu"]."','".$_POST["nomdoc"]."','".$_POST["idempresa"]."')");
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "serie"     =>$recibidos["serie"],
        "ultimo"    =>$recibidos["ultimo"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ( $jsonsucu );
}

if($_POST["opt"]==="LISTASUCUS")
{ 
    $query=$mysqli->query(" SELECT cod_sucursal,nom_sucursal from sucursal WHERE anulado='N' and idempresa=mid('".$_POST["codsucu"]."',1,1) and cod_sucursal <> '".$_POST["codsucu"]."' order BY nom_sucursal  ");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(        
        "cod_sucursal"=>$recibidos["cod_sucursal"],
        "nom_sucursal"=>$recibidos["nom_sucursal"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ( $jsonsucu );
}

if($_POST["opt"]==="DISPONIBILIDAD"){ 
    $query=$mysqli->query(" call spSaldoDisponibleCuentas('".$_POST["fecha"]."','".$_POST["idempresa"]."') ");    
    $datos=array();
    while ($recibidos=$query->fetch_array()){
    $datos[]=array(
        "nrocuenta"=>$recibidos["nrocuenta"],
        "usuario"=>$recibidos["usuario"],
        "banco"=>$recibidos["banco"],
        "total_movs"=>$recibidos["total_movs"],
        "saldo_cta"=>$recibidos["saldo_cta"],
        
        "disponible"=>$recibidos["disponible"]
        );
    }
    $jsonsucu=json_encode($datos);
    echo ($jsonsucu);
}

if($_POST["opt"]==="VOUCHER"){ 
    $query=$mysqli->query("call spInsertaListaVoucher('".$_POST["correlativo"]."','".$_POST["codgirosucu"]."','".$_POST["fechai"]."','".$_POST["fechaf"]."','".$_POST["usuariocarga"]."','".$_POST["descripcion"]."','".$_POST["usuarioimprime"]."','".$_POST["op"]."')");
    if ($_POST["op"] === 'L'){
        $datos=array();
        while ($recibidos=$query->fetch_array()){
        $datos[]=array(        
            "idvoucher"=>$recibidos["idvoucher"],
            "correlativo"=>$recibidos["correlativo"],
            "codgirosucu"=>$recibidos["codgirosucu"],
            "fechahora_carga"=>$recibidos["fechahora_carga"],
            "usuario_carga"=>$recibidos["usuario_carga"],        
            "observacion"=>$recibidos["observacion"],
            "fechahora_imprime"=>$recibidos["fechahora_imprime"],        
            "usuario_imprime"=>$recibidos["usuario_imprime"]        
            );
    }
    $jsonsucu=json_encode($datos);
    echo ($jsonsucu);
    }
}

$mysqli->close();