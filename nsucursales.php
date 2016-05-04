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

    <title>Sucursales</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap-table.css"/>
    
    <link rel="stylesheet" type="text/css" href="css/css_sucursales.css">
        
    <style type="text/css">
/*        //#contiene_tabla{font-family:sans-serif;font-size:12px}
        //table {width:100%;box-shadow:0 0 10px #ddd;text-align:left}*/
        th {padding:5px;background:#555;color:#fff}
        td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
        td input{height:24px;width:200px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .guardagrupo{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        /*//.anular{background:url(img/eliminar.png) 0 0 no-repeat}*/	
        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        .ocultame {display: none}
        .ocultamee {display: none}
    </style>
</head>    
<body>
<div id="wrapper">
    <?php include("menu.php"); ?> 
    <div id="page-content-wrapper">
        <?php include("sucursalesFormulario.php"); ?> 
        <?php include("sucursalesTabla.php"); ?> 
        
    </div>
    <!--content wrapper-->
</div>
<!--wrapper-->    
<input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" >  
<input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >  
<input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal'] ?>" >  
<input type="hidden" id="opproceso" value="L">
<input type="hidden" id="idsucu" >
<input type="hidden" id="hid_idcliente" >
<input type="hidden" id="opver" value="mas">
<input type="hidden" id="sele" name="sele" value="S" >
<input type="hidden" id="sele_as" value="b[1]"> <!-- como bandera al seleccionar filas -->
<input type="hidden" id="sele_asc" value="[0]"> 

<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
<script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
<script type="text/javascript" language="javascript" src="js/custom.js"></script>

<script type="text/javascript" src="js/FuncionesSucursales.js"></script>
<script type="text/javascript" src="js/validacampos.js"></script>
<script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
<!--<script type="text/javascript" src="js/index.js"></script>-->
<script type="text/javascript" language="javascript" src="js/bootstrap-table.js"></script>
<script type="text/javascript" language="javascript"> 

</script>

</body>
</html>
        