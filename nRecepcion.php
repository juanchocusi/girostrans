<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
/* $datRE = new RecibeEntrega(); */
session_start();
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
//$tusuario = $_SESSION['tipousuario'];
if (!isset($_SESSION["nick"])) {
//    Header("Location : Logout.php"); 
    echo "<script languaje='javascript' type='text/javascript'>window.close();</script>";
    exit;
}
?>
<!DOCTYPE html >
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../../favicon.ico">

        <title>Recepción</title>

        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />  
        <link rel="stylesheet" type="text/css" href="css/offcanvas.css"/> 
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'/>        
        <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
        <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
        <link rel="stylesheet" type="text/css" href="css/style_recibe_entrega.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery-confirm.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/PrintArea.css"/>
        <style type="text/css">
            .editable span{display:block;}
            .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
            td input{height:24px;width:100px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle; text-align: center}
            a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
            .guardar{background:url(img/save.png) 0 0 no-repeat}
            .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        </style>
    </head>

    <body>
        <div id="wrapper">

            <?php include("menu.php"); ?>

            <div id="page-content-wrapper" >

                <?php include("REncabezado.php"); ?>

                <?php include("RFormulario.php"); ?>

                <?php include("RTabla.php"); ?>

            </div>    

        </div>        
        <?php include("RDialogos.php"); ?>      

        <script type="text/javascript" language="javascript" src="js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery-ui-1.10.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.alerts.mod.js"></script>        
        <script type="text/javascript" language="javascript" src="js/bootstrap.min.js"></script> 
        <script type="text/javascript" language="javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
        <script type="text/javascript" language="javascript" src="js/custom.js"></script>

        <script type="text/javascript" language="javascript" src="js/validacampos.js"></script>
        <script type="text/javascript" language="javascript" src="js/FuncionesRecepcion.js"></script>
        <script type="text/javascript" language="javascript" src="js/CreaTablas.js"></script>
        <script type="text/javascript" language="javascript" src="js/FnNumeroALetras.js"></script>
        <script type="text/javascript" language="javascript" src="js/FnEditaTablaRecibidos.js"></script>
        <script type="text/javascript" language="javascript" src="js/CierraSesionInactivo.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery-confirm.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.PrintArea.js"></script>

    </body>
</html>


