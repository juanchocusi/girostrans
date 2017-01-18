<?php
date_default_timezone_set("America/Lima");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
$iempresa = $_SESSION['codsucursal'];

$Consulta = "SELECT CONCAT(idtipotransaccion,tipo) as tipo,descripcion from tipotransaccion WHERE grupo='CC' AND anulado = 'N' ORDER by 1;";
$result = $mysqli->query($Consulta);
$opciones = '<option value="0"> Tipo Transacción </option>';
while ($fila = $result->fetch_array()) {
    $opciones.='<option value="' . $fila["tipo"] . '">' . $fila["descripcion"] . '</option>';
}

//$sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('".$iempresa."',1,1) order BY nom_sucursal;";
//$result_sucursal = $mysqli->query($sql_sucursales);
//$optsucursales = '<option value="'.$iempresa.'">Sucursal Destino</option>';
//while ($fila = $result_sucursal->fetch_array()) {
//    $optsucursales.='<option value="' . $fila["cod_sucursal"] . '">' . $fila["nom_sucursal"] . '</option>';
//}
//
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Cuenta-Clientes</title>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.min-3.3.6.css">
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
        <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>

        <link rel="stylesheet" type="text/css" href="css/css_cuentascliente.css">
        <link rel="stylesheet" type="text/css" href="css/jquery-confirm.min.css"/>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->            
    </head>    
    <body>
        <div id="wrapper">
            <?php include("menu.php"); ?> 
            <div id="page-content-wrapper">
                <?php include("CuentaClienteForm.php"); ?> 

                <?php include("CuentaClienteTabla.php"); ?> 

            </div>
            <!--content wrapper-->
        </div>
        <!--wrapper-->    
        <input type="hidden" id="sele_cc" value="cc[0]">
        <input type="hidden" id="sele_mv" value="mv[0]">
        <input type="hidden" id="nro_cuenta">
        <input type="hidden" id="idtran">
                
        <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >
        <input type="hidden" id="usuario" value="<?php echo $_SESSION['nick'] ?>" >
        <input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal'] ?>" >
        
        <!-- jQuery -->
        <script type="text/javascript" language="javascript" src="js/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery-ui-1.10.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/bootstrap.min-3.3.6.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.dataTables.min.js" ></script>
        <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>
        <script type="text/javascript" language="javascript" src="js/custom.js"></script>

        <script type="text/javascript" language="javascript" src="js/FuncionesCuentasCliente.js"></script>        
        <script type="text/javascript" language="javascript" src="js/CierraSesionInactivo.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery.price_format.2.0.min.js"></script>
        <script type="text/javascript" language="javascript" src="js/jquery-confirm.min.js"></script>
    </body>

</html>