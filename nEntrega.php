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
} else {
    $tusuario = $_SESSION['tipousuario'];
    $iempresa = $_SESSION['codsucursal'];
}


$sql_agt = "SELECT c.nrocuenta,b.desc_banco FROM bancos b join cuentas c on b.idbanco=c.idbanco where c.usuamodifica='Sistema' and b.anulado='N' order by 2;";
$resultado = $mysqli->query($sql_agt);
$agt = '<option value="0">Elige Agente...</option>';
while ($mifila = $resultado->fetch_array()) {
    $agt.='<option value="' . $mifila["nrocuenta"] . '">' . $mifila["desc_banco"] . '</option>';
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//ES"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../../favicon.ico">

        <title>Entrega</title>

        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" /> 
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'/>  
        <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>

        <link rel="stylesheet" type="text/css" href="css/offcanvas.css"/>

        <link rel="stylesheet" type="text/css" href="css/style_recibe_entrega.css"/>
        <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
        <link rel="stylesheet" type="text/css" href="css/uploadfile.css">
        <link rel="stylesheet" type="text/css" href="css/jquery-confirm.min.css"/>
    </head>
    <body>

        <div id="wrapper">
<?php include("menu.php"); ?>    
            <div id="page-content-wrapper" >    
            <?php include("ECabecera.php"); ?>

                <?php include("EFormulario.php"); ?>

                <?php include("ETabla.php"); ?>
                                  
            </div> <!-- page-content-wrapper -->    

        </div> <!-- wrapper -->    
<?php include("EDialogo.php"); ?>      

        <script type="text/javascript" language="javascript" src="js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery-ui-1.10.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.alerts.mod.js"></script> 
        <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
        <script type="text/javascript" language="javascript" src="js/custom.js"></script>

        <script type="text/javascript" language="javascript" src="js/validacampos.js"></script>
        <script type="text/javascript" language="javascript" src="js/CreaTablas.js"></script>
        <script type="text/javascript" language="javascript" src="js/FuncionesEntrega.js"></script>
        <script type="text/javascript" language="javascript" src="js/CierraSesionInactivo.js"></script>    
        <script type="text/javascript" language="javascript" src="js/jquery.price_format.2.0.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.uploadfile.js"></script>
        <script type="text/javascript" src="js/jquery-confirm.min.js"></script>
    </body>
</html>

