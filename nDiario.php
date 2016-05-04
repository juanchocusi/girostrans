<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y/m/d");

if (!isset($_SESSION["nick"])) {
    Header("Location : Logout.php");
    exit;
}
$idempresa = $_SESSION['codsucursal'];
$sql_agt = "select c.nrocuenta,b.iniciales,b.desc_banco from bancos b  JOIN cuentas c on b.idbanco=c.idbanco where b.grupo='A' and b.anulado='N' order by 2;";
$resultado = $mysqli->query($sql_agt);
$agt = '<option value="0">Elige Agente...</option>';
while ($mifila = $resultado->fetch_array()) {
    $agt.='<option value="'.$mifila["nrocuenta"].'">' . $mifila["desc_banco"] . '</option>';
}

$sql_i = "select idconcepto,descripcion from conceptos WHERE anulado = 'N' and idgasto='100';";
$resultado_i = $mysqli->query($sql_i);
$conceptos_i= '<option value="0"> Elige Concepto...</option>';
while ($fila = $resultado_i->fetch_array()) {
    $conceptos_i.='<option value="' . $fila["idconcepto"] . '">' . $fila["descripcion"] . '</option>';
}

$sql_e = "select idconcepto,descripcion from conceptos WHERE anulado = 'N' and idgasto <>'100' order by descripcion;";
$resultado_e = $mysqli->query($sql_e);
$conceptos_e = '<option value="0"> Elige Concepto...</option>';
while ($fila = $resultado_e->fetch_array()) {
    $conceptos_e.='<option value="' . $fila["idconcepto"] . '">' . $fila["descripcion"] . '</option>';
}

$sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('".$idempresa."',1,1) and cod_sucursal <> '".$idempresa."' order BY nom_sucursal";
$result_sucursal = $mysqli->query($sql_sucursales);
$optsucursales = '<option value="0">Elige Destino...</option>';
while ($fila = $result_sucursal->fetch_array()) {
    $optsucursales.='<option value="'.$fila["cod_sucursal"].'">' . $fila["nom_sucursal"] . '</option>';
}

$sql_asociado = "call spBuscaUsuarioCuenta('xx','".$idempresa."','D');";
$result_asociado = $mysqli->query($sql_asociado);
$asociados = '<option value="0">Elige Asociado..</option>';
while ($fila = $result_asociado->fetch_array()) {
    $asociados.='<option value="'.$fila["nrocuenta"].'">' . $fila["descripcion"] . '</option>';
}

?>
<!--<!DOCTYPE html>-->
<!doctype html public "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="www.dataweb365.com">

    <title>Cierre Diario</title>
    
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>   
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    
    <link rel="stylesheet" type="text/css" href="css/css_diario.css">
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
</head>
<style type="text/css">
/***/
    th {font-size: 11px}
    .editable span{display:block;}
    .editable span:hover {background:url(img/edit.png) 80% 50% no-repeat;cursor:pointer}    
    a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
    .guardar{background:url(img/save.png) 0 0 no-repeat}
    .guardatipo{background:url(img/save.png) 0 0 no-repeat}
    .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        
    .guardard{background:url(img/save.png) 0 0 no-repeat}
    .cancelard{background:url(img/cancel.png) 0 0 no-repeat}
        
        /*//.anular{background:url(img/eliminar.png) 0 0 no-repeat}*/

        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        .ocultame {display: none}
        #egreso {text-align: center; font-size: 12pt; font-weight: bold}
        #ingreso {text-align: center; font-size: 12pt; font-weight: bold}
        
</style>
<body id="cuerpo">
<div id="wrapper">
    <?php include("menu.php"); ?>
    <div class="page-content-wrapper">        
        <div id="sideform" class="col-xs-6 col-md-4">            
            <?php include("DiarioSideForm.php"); ?>            
        </div>    
        <div class="col-xs-12 col-sm-6 col-md-8">            
            <?php include("DiarioTablas.php"); ?>            
        </div>    
        
        <?php include("DiarioDialogos.php"); ?>        
        
    </div>
    <!--content wrapper-->
</div>
<!--wrapper--> 
<!-- jQuery -->    
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>    
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" src="js/custom.js"></script>
    
    <script type="text/javascript" src="js/validacampos.js"></script>       
    <script type="text/javascript" src="js/FuncionesDiario.js"></script>
    <script type="text/javascript" src="js/FnNumeroALetras.js"></script>
    <script type="text/javascript" src="js/FuncionesEditaTablas.js"></script>
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
    <script type="text/javascript" src="js/jquery.price_format.2.0.min.js"></script>
</body>

</html>
