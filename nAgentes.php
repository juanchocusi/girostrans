<?php
date_default_timezone_set("America/Lima");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
$iempresa = $_SESSION['codsucursal'];

/*$sql_bancos = "SELECT concat(b.iniciales,':',b.idbanco,':',c.nrocuenta) as nrocuenta,b.desc_banco 
                     FROM bancos b join cuentas c on b.idbanco=c.idbanco where c.usuamodifica='Sistema' and b.anulado='N' order by 2;"; // Busca solo agente... 
 */
$sql_bancos = "SELECT concat(b.iniciales,':',b.idbanco,':',c.nrocuenta) as nrocuenta,b.desc_banco 
FROM bancos b right join cuentas c on b.idbanco=c.idbanco where b.grupo='A' and b.anulado='N' and c.anulado='N' and c.idempresa=mid('".$iempresa."',1,1) order by 2;";

$result_bancos = $mysqli->query($sql_bancos);
$optbancos = '<option value="0"> Elige un AGENTE</option>';
while ($fila = $result_bancos->fetch_array()) {
    $optbancos.='<option value="' . $fila["nrocuenta"] . '">' . $fila["desc_banco"] . '</option>';
}

$Consulta = "SELECT CONCAT(tipo,dinero,idtipotransaccion) as idttran,descripcion from tipotransaccion where grupo='A' and anulado='N' order by descripcion;";
$result = $mysqli->query($Consulta);
$opttipotrans = '<option value="0"> Elige Transacción</option>';
while ($fila = $result->fetch_array()) {
    $opttipotrans.='<option value="' . $fila["idttran"] . '">' . $fila["descripcion"] . '</option>';
}

$sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('".$iempresa."',1,1) order BY nom_sucursal";
$result_sucursal = $mysqli->query($sql_sucursales);
$optsucursales = '<option value="'.$iempresa.'" >Sucursal de Origen/Destino</option>';
while ($fila = $result_sucursal->fetch_array()) {
    $optsucursales.='<option value="' . $fila["cod_sucursal"] . '">' . $fila["nom_sucursal"] . '</option>';
}

$sql_nusuario = "SELECT nusuario,nusuario from usuariosistema where idempresa=mid('".$iempresa."',1,1) and anulado='N' order BY 2;";
$result_nusuarios = $mysqli->query($sql_nusuario);
$optusuarios = '<option value="0"> Responsable...</option>';
while ($fila = $result_nusuarios->fetch_array()) {
    $optusuarios.='<option value="' . $fila["nusuario"] . '">' . $fila["nusuario"] . '</option>';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Agentes</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">      
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    
    <link rel="stylesheet" type='text/css' href="css/css_agentes.css">
        
    <style type="text/css">
        th {background:darkkhaki;color:black}
        /*td {padding:5px;border:solid #ddd;border-width:0 0 1px;}*/
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
        td input{height:24px;width:80px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle; text-align: right}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        /*//.anular{background:url(img/eliminar.png) 0 0 no-repeat}*/	
        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        /*#sidebar-wrapper{border:1px solid #003366;}*/
        /*#contiene-formulario { border:2px solid darkkhaki;}*/
        /*#contiene-tabla { border:2px solid darkkhaki;}*/
        #fechai {text-align: center; width: 100px; font-size: 14px; font-weight: bold; color: #428bca }
        #fechaf {text-align: center; width: 100px; font-size: 14px; font-weight: bold;}
    </style>

</head>

<body id="cuerpo" >

<div id="wrapper">
    <?php include("menu.php"); ?>    

    <div id="page-content-wrapper">
        <?php include("AgentesForm.php"); ?>    
        <div class="mensaje"></div>
        <div class="container-fluid">
            <?php include("AgentesTabla.php"); ?> 
        </div>    
        <?php include("AgentesDialogo.php"); ?> 
        
    </div> <!-- page-content-wrapper -->    

</div> <!-- wrapper -->    

    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" src="js/custom.js"></script>
    
    <script type="text/javascript" src="js/FuncionesAgente.js"></script>    
    <script type="text/javascript" src="js/validacampos.js"></script>       
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>

</body>
</html>
