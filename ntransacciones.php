<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
session_start();
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>TipoTransaccion</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    
    <link rel="stylesheet" type="text/css" href="css/css_transacciones.css">
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
        
<style type="text/css">
        
        table {width:100%;box-shadow:0 0 10px #ddd;text-align:left}
        th {padding:5px;background:#555;color:#fff}
        td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
        td input{height:24px;width:200px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .guardatipo{background:url(img/save.png) 0 0 no-repeat}
        .guardagrupo{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        
        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}

 </style>
</head>    
<body>
<div id="wrapper">
    <?php include("menu.php"); ?> 
    <div id="page-content-wrapper">
        <?php include("transaccionesForm.php"); ?> 
        <?php include("transaccionesTabla.php"); ?> 
        
    </div>
    <!--content wrapper-->
</div>
<!--wrapper-->    
<input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" >
<input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >
<input type="hidden" id="idttran" >
<input type="hidden" id="descbanco" >
<input type="hidden" id="sele" value="b[0]">
<input type="hidden" id="sele_as" value="b[1]">              
<!-- jQuery -->

<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
<script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
<script type="text/javascript" language="javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/FuncionesTTransacciones.js"></script>
<script type="text/javascript" src="js/validacampos.js"></script>
<script type="text/javascript" src="js/CierraSesionInactivo.js"></script>        

</body>

</html>