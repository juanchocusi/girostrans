<?php
date_default_timezone_set("America/Lima");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");

$Consulta = "SELECT CONCAT(idtipotransaccion,tipo) as tipo,descripcion from tipotransaccion WHERE grupo='C' AND anulado = 'N' ORDER by 1;";
$result = $mysqli->query($Consulta);
$opciones = '<option value="0"> Elige una opcion</option>';
while ($fila = $result->fetch_array()) {
    $opciones.='<option value="' . $fila["tipo"] . '">' . $fila["descripcion"] . '</option>';
}
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>Cuentas de Usuario</title>
        <meta name="generator" content="Bootply" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">        
        <!--[if lt IE 9]>
                <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        <link rel="stylesheet" type='text/css' href="css/bootstrap.min.css">        
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'/>
        <link rel="stylesheet" type='text/css' href="css/css_cuentausuario.css">        
    </head>
    <body>
        
<div class="page-container">
    <!-- top navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".sidebar-nav">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Cuentas</a>

            </div>
        </div>
    </div>
        
<div class="container-fluid">
        
    <div class="row row-offcanvas row-offcanvas-left">

        <!-- sidebar -->
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <ul class="nav">
                <div id="carga" > </div>
                <!--<li class="active"><a href="#">Home</a></li> -->
                <!--<div class="input-group input-group-sm">
                     <span class="input-group-addon">Fecha Inicio</span>-->
                    
                <!--</div> -->
                <input type="text" class="form-control" id="datos_cuenta" readonly="readonly" >
                
                <div class="input-group input-group-sm">
                    <select class="form-control input-sm" id="listatipotran">
                        <?php echo $opciones; ?>
                    </select>
                    <span class="input-group-btn">          
                        <a href="#" id="btn_nuevatran" class="btn btn-default glyphicon glyphicon-plus blue" title="Nuevo"></a>
                    </span>
                </div>
                
                <div class="input-group input-group-sm ocultame">
                    <input type="text" class="form-control" id="monto" placeholder="S/. 00.00">
                    <span class="input-group-btn">          
                        <a href="#" id="btn_cancelatran" class="btn btn-default glyphicon glyphicon-remove blue" title="Cancelar"></a>
                    </span>
                </div>                
                <div class="input-group input-group-sm ocultame">                    
                    <input type="text" id="observa" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" placeholder="Dato adicional">
                    <span class="input-group-btn">          
                        <a href="#" id="btn_guardatran" class="btn btn-default glyphicon glyphicon-floppy-save blue" title="Guardar"></a>
                    </span>
                </div>
                <div class="input-group input-group-sm" style="display: none">                    
                    <input type="text" id="buscacuentausuario" style="text-transform: uppercase" class="form-control" placeholder="Buscar cuenta de usuario">
                    <span class="input-group-btn">          
                        <a href="#" id="btn_buscacuentausuario" class="btn btn-default glyphicon glyphicon-search blue" title="Buscar Cuenta de USUARIO"></a>
                    </span>
                </div>
            </ul>
            
            <div class="table-responsive mygrid-wrapper-div1"> 
                <table id="TUsuarioCuenta" class="table table-condensed table-bordered">
                    <thead >
                        <tr>
                            <!--<th>Nro</th> -->
                            <th>Usuario</th>
                            <th>Banco</th>
                            <th>NroCuenta</th>
                        </tr>
                    </thead>                                                   
                        <tbody id="tbody_UsuarioCuenta">

                        </tbody>
                </table>                    
             </div>
        <div class="input-group input-group-sm">
            <input type="text" id="txtnick" class="form-control" value="<?php echo $_SESSION['nick']?>" readonly="readonly" >
            <input type="text" id="txtsucursal" class="form-control" value="<?php echo $_SESSION['sucursal']?>" readonly="readonly">
        </div>
    </div>
        
<!--============================== main area ==========================-->

<div class="col-xs-12 col-sm-9">
 
<input type="text" id="fechai" value="<?php echo date("Y/m/d");?>">
<input type="text" id="fechaf" value="<?php echo date("Y/m/d");?>">  
<button id="btn_movscuenta" type="button" class="btn btn-default btn-xs" >Mostrar Movimientos</button>
<button id="btn_masmovs" type="button" class="btn btn-default btn-xs" >+ Información</button>
<div  class="table-responsive mygrid-wrapper-div">
    <table id="TMovsCuenta" class="table table-bordered table-condensed">
        <thead >
            <tr>
                <th></th>
                <th>Nro</th>
                <th style="display: none" > ID</th>
                <th>                        Fecha</th>
                <th>                        Motivo</th>              
                <th>                        DatosAdicionales</th>
                <th >                       Datos Pago</th>
                <th >                       Datos Beneficiario</th>
                <th class="ocultamovs">     Usuario Paga</th>
                <th  align='right'>          Ingreso</th>               
                <th  align='right'>          Salida</th>                
                <th align='right'>          Saldo</th>                                

            </tr>
        </thead>
        <tbody id="tbody_MovsCuenta" 

    </tbody>
</table>
</div>
<!--
<div  class="table-responsive">
    <table id="TMovsCuenta" class="table table-bordered table-condensed">
        <thead >
            <tr>
                <th></th>
                <th></th>
                <th style="display: none" > </th>
                <th>                        </th>
                <th>                        </th>
                <th>                        </th>
                <th >                       </th>
                <th >                       </th>
                <th class="ocultamovs">     Totales</th>
                <th id="total_i"  >         </th>
                <th id="total_s"  >         </th>
                <th id="total_sa" >         </th>
            </tr>
        </thead>
        
    </table>
</div>
-->
<input type="text" id="total_i" readonly="readonly" >
<input type="text" id="total_s" readonly="readonly" >
<input type="text" id="total_sa" readonly="readonly" >

</div><!-- /.col-xs-12 main -->

 </div><!--/.row-->
 </div><!--/.container-->
</div><!--/.page-container-->
<!-- script references -->

<input type="hidden" id="sele_cu" value="cu[0]">
<input type="hidden" id="sele_mv" value="mv[0]">
<input type="hidden" id="nro_cuenta">   
<input type="hidden" id="tipotran">
<input type="hidden" id="ingsal">
<input type="hidden" id="idtran">

<input type="hidden" id="usuariosistema" value="<?php echo $_SESSION['nick']?>" >
<input type="hidden" id="opver" value="mas">

<script type="text/javascript" src="js/jquery.1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<!--<script type="text/javascript" src="js/bootstrap-table.min.js "></script>-->

<script type="text/javascript" src="js/FuncionesCuentaUsuario.js"></script>    
<script type="text/javascript" src="js/jquery.alerts.js"></script>
<script type="text/javascript" src="js/validacampos.js"></script>


</body>

</html>
