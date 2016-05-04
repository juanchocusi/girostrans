<?php
date_default_timezone_set("America/Lima");
session_start();
require 'controles/ConectaMySql.php';
$idempresa = $_SESSION['codsucursal'];
$FechaHoy = date("Y-m-d");        
    $sql_sucursales = "SELECT cod_sucursal,nom_sucursal from sucursal where anulado='N' and idempresa=mid('".$idempresa."',1,1) and cod_sucursal<>'".$idempresa."' order BY nom_sucursal;";
	$result_sucursal = $mysqli->query($sql_sucursales);
	$optsucursales = '<option value="0">Sucursal de Destino</option>';
	while( $fila = $result_sucursal->fetch_array() )
	{
		$optsucursales.='<option value="'.$fila["cod_sucursal"].'">'.$fila["nom_sucursal"].'</option>';
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

    <title>Cruce Sucursales</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">      
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    
    <link rel="stylesheet" type='text/css' href="css/css_cruce.css">

</script>
</head>    
<body>
<div id="wrapper">
    <?php include("menu.php"); ?>    
    <div id="page-content-wrapper">
        <!--formulario-->
        <div id="formulario" class="container-fluid">
            <div class="col-xs-6 ">            
                <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>
                <div class="input-group input-group-sm">
                    <input type="text" id="txtnick" class="form-control" value="<?php echo $_SESSION['nick'] ?>" readonly="readonly" >
                    <input type="text" id="txtsucursal" class="form-control" value="<?php echo $_SESSION['sucursal'] ?>" readonly="readonly">
                    <select class="form-control input-sm"   id="listasucursales"><?php echo $optsucursales; ?>     </select>
                </div>
                
            </div>    
            <div class="col-xs-6 ">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" id="fechai" value="<?php echo date("Y/m/d"); ?>">
                    <input type="text" class="form-control " id="fechaf" value="<?php echo date("Y/m/d"); ?>">  
                
                <div id="divbotones" class="input-group input-group-sm">
                    <button type="button" id="btn_pantalla" class="btn btn-default btn-xs blue">Pantalla</button>
                </div>
                
                <form action="ficheroExcel.php" method="post" target="_blank" id="FormularioExportacion">
                    <button  class="botonExcel" ><img src="img/export_to_excel.gif" /></button>
                    <input type="hidden" id="datos_a_enviar" name="datos_a_enviar" />
                </form>
                <input type="text" id="buscador" placeholder="Buscar..." >
                </div>
                <div id="carga" style="display:none"> <img src="img/cargando.gif" /> </div>
            </div>

        </div>
        <!--tabla-->
        <div id="formulario" class="container-fluid">
            <div class="row">
                <div class="col-lg-12">                        
                    <!--<a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>-->
                    <div id="Exportar_a_Excel">

                        <label class="oculto" >Origen: </label> <label class="oculto" id="lbl_origen" ><?php echo $_SESSION['sucursal'] ?> </label> 
                        <label class="oculto" >Destino: </label> <label class="oculto" id="lbl_destino"> </label> 
                        <br>
                        <label class="oculto" >Desde: </label> <label class="oculto" id="desde"></label>
                        <label class="oculto" >Hasta: </label> <label class="oculto" id="hasta"></label>
                        
                        <div  class="table-responsive mygrid-wrapper-div">
                            <table id="TCruce" class="editinplace table-condensed ">
                                <thead >
                                    <tr>
                                        <th></th>
                                        <th>Codigo</th>
                                        <th>               Origen</th>
                                        <th>               Fecha</th>              
                                        <th>               Beneficiaro</th>
                                        <th>               Remitente</th>
                                        <th>               Destino</th>
                                        <th align='right'> Importe</th>
                                        <th align='right'> Cargo</th>
                                        <th align='right'> Otros</th>
                                        <th align='right'> TotalR</th>
                                        <th align='right'> TotalG</th>
                                        <th >              Observa</th>
                                        <th >              Registra</th>                
                                        <th >              Entrega</th>                
                                        <th >              Fecha Entrega</th>
                                        <th >              Cuenta</th>
                                        <th style='display: none'>  A</th>                
                                    </tr>
                                </thead>
                                <tbody id="body_cruce" >

                                </tbody>                                                
                            </table>
                        </div>
                    </div>
                </div> <!-- col-lg-12 -->
            </div> <!-- ROW -->    
        </div>
        
        
    </div>   
    <!--wrapper--> 
 </div>
    <input type="hidden" id="sele" value="cr[0]">
    <input type="hidden" id="origen" value="<?php echo $_SESSION['codsucursal'] ?>" >

    <input type="hidden" id="usuariosistema" value="<?php echo $_SESSION['nick'] ?>" >    
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" language="javascript" src="js/custom.js"></script>
    <script type="text/javascript" src="js/FuncionesCruce.js"></script>
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
</body>

</html>    