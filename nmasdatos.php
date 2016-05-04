<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
if (!isset($_SESSION["nick"])) {
    Header("Location : Logout.php");
    exit;
}
//$sql = "SELECT idgasto,descripcion from gastos where anulado='N' order BY 2;";
//$resultado = $mysqli->query($sql);
//$gastos = '<option value="0"> Elige opcion...</option>';
//while ($fila = $resultado->fetch_array()) {
//    $gastos.='<option value="' . $fila["idgasto"] . '">' . $fila["descripcion"] . '</option>';
//}
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Mas Datos</title>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>

        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
        <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
        <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>


        <link rel="stylesheet" type="text/css" href="css/css_conceptos.css">


        <style type="text/css">
            /*//#contiene_tabla{font-family:sans-serif;font-size:12px}*/
            /*//table {width:100%;box-shadow:0 0 10px #ddd;text-align:left}*/
            th {padding:5px;background:#555;color:#fff; font-size: 10px}
            td {padding:5px;border:solid #ddd;border-width:0 0 1px; }
            .editable span{display:block;}
            .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
            td input{height:24px;width:100px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
            a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
            .guardar{background:url(img/save.png) 0 0 no-repeat}
            .guardagrupo{background:url(img/save.png) 0 0 no-repeat}
            .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
            /*//.anular{background:url(img/eliminar.png) 0 0 no-repeat}*/	
            .mensaje{display:block;text-align:center;margin:0 0 20px 0}
            .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
            .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
            .ocultame {display: none}
            .blue { color: #428bca } 
        </style>
    </head>    
    <body >
        <div id="wrapper">
            <?php include("menu.php"); ?>    
            <div id="page-content-wrapper">
                <!--FORMULARIO-->    
                <div class="row">
                    <div class="col-xs-6 col-sm-4">
                        <div id="divmonto" class="input-group input-group-sm">
                            <span class="input-group-addon">Descripcion</span>    
                            <input type="text" class="form-control" id="descripcion" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                        </div>    
                        
                    </div>        
                    <div class="col-xs-6 col-sm-4">
                        <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">                        
                        <button type="button" id="btn_nuevo" class="btn btn-default btn-xs blue" title="Nuevo"> 
                            <span class="fa fa-plus fa-lg"></span>
                        </button>
                        <button type="button" id="btn_guardar"  class="btn btn-default btn-xs blue" title="Guardar">
                            <span class="fa fa-check fa-lg"></span>
                        </button>
                        <button type="button" id="btn_cancelar" class="btn btn-default btn-xs blue" title="Cancelar">
                            <span class="fa fa-times-circle-o fa-lg"></span>
                        </button>
                        
                    </div>

                </div>
                <div id="carga" style="display:none"> <img src="img/cargando.gif"> </div>
                <!--tabla-->
                <div class="container-fluid">
                    <div class="mensaje"></div>
                    <!--<div class="container-fluid">-->
                    <div class="row">
                        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">
                            <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>                        
                            <div id="contiene_tabla" class="table-responsive ">
                                <table id="TMasDatos" class="table-condensed">
                                    <thead> 
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th class="ocultame">id</th>
                                            <th>Descripcion</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody id="body_masdatos">
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
            <!--content wrapper-->
        </div>    
        <!--wrapper--> 
        <input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" >
        <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >
        <input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal'] ?>" >
        <input type="hidden" id="sele_as" value="c[1]"> <!-- como bandera al seleccionar filas -->
        <input type="hidden" id="id" > 
        
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/jquery.dataTables-1.10.5.min.js"></script>
        
        <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
        <script type="text/javascript" src="js/jquery.metisMenu.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
        <script type="text/javascript" src="js/FuncionesMasDatos.js"></script>
        <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
        
    </body>

</html>





