<?php
date_default_timezone_set("America/Lima");

if (!isset($_SESSION)) {
    session_start();
    $Fechahora = date("Y-m-d H:i:s");
    $FechaHoy = date("Y/m/d");
    if (!isset($_SESSION["nick"])) {
        Header("Location : Logout.php");
        exit;
    }

    $tusuario = $_SESSION['tipousuario'];
    $codsucu = $_SESSION['codsucursal'];
    $usuamodi = $_SESSION['nick'];
    $idempresa = $_SESSION['codsucursal'];

    require 'controles/ConectaMySql.php';
// iniciamos saldos
    $consulta = "call spIniciaSaldos(); ";
    $result = $mysqli->query($consulta);

    $sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('" . $idempresa . "',1,1) order BY nom_sucursal";
    $result_sucursal = $mysqli->query($sql_sucursales);
    $optsucursales = '<option value="T">Todas las Sucursales</option>';
    while ($fila = $result_sucursal->fetch_array()) {
        $optsucursales.='<option value="' . $fila["cod_sucursal"] . '">' . $fila["nom_sucursal"] . '</option>';
    }
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

    <title>Inicio</title>

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>
    <!--<link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">-->
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    <!--<link rel="stylesheet" type="text/css" href="css/jquery.dataTables-1.10.5.min.css"/>-->

    <link rel="stylesheet" type="text/css" href="css/css_inicio.css">
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
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
      <div class="page-content-wrapper">
        
      
      </div>
    </div>
    
    <input type="hidden" id="sele_f" value="G[0]" >
    
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" src="js/custom.js"></script>

    <!--<script type="text/javascript" src="js/FuncionesInicio.js"></script>-->    
    <script type="text/javascript" src="js/validacampos.js"></script>   
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>   
  </body>

</html>


