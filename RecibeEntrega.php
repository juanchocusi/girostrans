<?php
date_default_timezone_set("America/Lima");
require_once("controles/classRecibeEntrega.php");
/*$datRE = new RecibeEntrega();*/
$boton='nuevo';
$Fechahora = date("Y-m-d H:i:s", (strtotime ("-2 Hours")));
$FechaHoy = date("Y-m-d");
$tusuario= $_SESSION['tipousuario'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//ES"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Pantera Comunicaciones</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/offcanvas.css"/> 
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
<link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'/>
<link rel="stylesheet" type='text/css' href="css/alertify.core.css" />
<link rel="stylesheet" type='text/css' href="css//alertify.default.css" />


<script type="text/javascript" src="js/jquery.1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
<script type="text/javascript" src="js/FuncionesRecibeEntrega.js"></script>
<script type="text/javascript" src="js/jquery.alerts.js"></script>
<script type="text/javascript" src="js/CreaTablas.js"></script>

<link rel="stylesheet" type="text/css" href="css/style_recibe_entrega.css"/>
</head>
<body> 
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation" >
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Mas Opciones</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Transferencias</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <!--<li class="active"><a href="#">Recibidos</a></li>-->            
            <li><a href="cierrediario.php" target="_blank">CierreDiario</a></li>
            <li><a href="#contact">Cruce</a></li>
            <li><a href="#contact">Supervisa</a></li>
            <li><a href="Clientes.php" target="_blank">Tablas</a></li> 
            <li><a href="Help.html">Reportes</a></li>
            <li><a href="agentes.php">Agentes</a></li>
            <li><a href="#contact">Hoy:<?=$FechaHoy ?></a></li>
          </ul>
        </div><!-- /.nav-collapse -->
    </div><!-- /.container -->
</div><!-- /.navbar -->
<!-- ********************** CUERPO ***********************************************************************-->
<div id="regresa"</div>
<div class="container-fluid">
<div id="tabs-min">
    <ul>
    <li><a href="#tabs-1">RECEPCION</a></li>
    <li><a href="#tabs-2">ENTREGA</a></li>
  </ul>
    
<div id="tabs-1">
<div class="row row-offcanvas row-offcanvas-right">
<div class="col-xs-12 col-sm-9">
              <p class="pull-right visible-xs">
                <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Opciones</button>
              </p>  
<div class="row">
<!--  Beneficiario Remitente   -->
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">
      <div class="input-group input-group-sm has-warning">
        <span class="input-group-addon">Beneficiario</span>     
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnib" name="dnib" placeholder="DNI Beneficiario">
        <span class="input-group-btn">          
          <a href="#" id="busca_beneficiario" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_b" onclick="limpia_tabla_b();"></a>
        </span>
      </div>
      <input type="text" class="form-control" id="nombresb" placeholder="Nombres Beneficiario" readonly="readonly">
    
      <div class="input-group input-group-sm has-success">
        <span class="input-group-addon">Remitente</span> 
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnir" name="dnir" placeholder="DNI Remitente">
        <span class="input-group-btn">          
          <a href="#" id="busca_remitente" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_r" onclick="limpia_tabla_r(); "></a>
        </span>
      </div>
      <input type="text" class="form-control" id="nombresr" placeholder="Nombres Remitente" readonly="readonly">     
    </div><!--/span-->
<!--  Sucursal   -->
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group has-feedback input-group-sm">
        <div class="input-group input-group-sm">
            <span class="input-group-addon">Destino</span> 
            <input type="text" class="form-control" id="destino" name="destino" placeholder="Sucursal Destino" onkeyup='javascript:this.value=this.value.toUpperCase();' >
                <span class="input-group-btn">
                    <a href="#" id="busca_sucursal" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_s" onclick="limpia_tabla_s(); "></a>
                </span>
        </div>  

        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="ciudaddestino" id="ciudaddestino" placeholder="Ciudad Destino (BOLETAS)">
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="observa" id="observa" placeholder="Observaciones">
        <div class="input-group input-group-sm">                
            <input type="text" class="form-control" id="cuentas" name="cuentas" placeholder="Cuentas" readonly="readonly"/>
            <span class="input-group-btn">
                <a id="busca_cuentas" title="Buscar Cuentas" class="btn btn-info glyphicon glyphicon-home"></a>
            </span>
        </div> 

    </div><!--/span-->
                <!-- MONEY -->
<div class="col-xs-6 col-sm-6 col-lg-4 input-group-sm">
    <div class="input-group input-group-sm ">
        <span class="input-group-addon">Importe</span>                
        <input type="text" class="form-control" id="importe_r" name="importe_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();"  onkeyup="calcula_total();"/>
    </div>  
    <div class="input-group input-group-sm">
        <span class="input-group-btn">                    
            <!-- <a href="#" class="btn btn-warning glyphicon glyphicon-new-window" data-placement="right" title="Nuevo" data-toggle="modal tooltip" data-target="#modal_guardar" onclick="limpia_tabla_b();"></a>-->
        </span>  
        <span class="input-group-addon">Cargo</span>
        <input type="text" class="form-control" id="cargo_r" name="cargo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>  

    <div class="input-group input-group-sm">  
        <span class="input-group-btn">                    
            <!--<a href="#" class="btn btn-danger glyphicon glyphicon-remove" data-placement="right" title="Cancelar" data-toggle="modal tooltip" data-target="#modal_guardar" onclick="limpia_tabla_b();"></a>-->
        </span>  
        <span class="input-group-addon">Otros</span>
        <input type="text" class="form-control" id="otros_r" name="otros_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>

    <div class="input-group input-group-sm has-error"> 
        <span id="desactivame" class="input-group-btn"></span>  
        <span class="input-group-addon">Total</span>
        <input type="text" class="form-control" id="total_r" value="0" readonly="readonly"/> 

    </div>
</div> 
<!--  Porcentajes   -->
            <div class="col-xs-6 col-sm-6 col-lg-4 input-group-sm" >
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Porcentaje</span> 
                    <select class="form-control input-sm" id="listaporcentajes" onblur="calcula_total();" onchange="calcula_cargo();">                
                    <option value="1.5">1.5 %</option> <option value="2.0">2.0 %</option> <option value="2.5">2.5 %</option> 
                    <option value="3.0">3.0 %</option> <option value="3.5">3.5 %</option> <option value="4.0">4.0 %</option> 
                    <option value="4.5">4.5 %</option> <option value="5.0">5.0 %</option> <option value="5.5">5.5 %</option> 
                    <option value="6.0">6.0 %</option> <option value="6.5">6.5 %</option> <option value="7.0">7.0 %</option>
                    <option value="7.5">7.5 %</option> <option value="8.0">8.0 %</option> <option value="8.5">8.5 %</option>
                    <option value="9.0">9.0 %</option> <option value="9.5">9.5 %</option> <option value="10.0">10.0 %</option> 
                  </select>
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">I.G.V.</span> 
                    <input type="text" class="form-control" id="igv_r" value="0" readonly="readonly">
                </div>
            </div>
<!--  vuelto   -->
            <div class="col-xs-6 col-sm-6 col-lg-4 input-group-sm" >                        
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Efectivo</span> 
                    <input type="text" class="form-control " id="efectivo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onkeyup="calcula_vuelto();">
                </div>  
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Vuelto</span> 
                    <input type="text" class="form-control" id="vuelto_r" value="0" readonly="readonly">
                </div>                  
            </div>
</div><!--/row-->
                      
</div><!--/span-->
 <!-- /////////////////// Sidebar RERERE////////////////////////-->
 <!--<form name="form_imprime" action="Imprime_Recibidos.php" target="_blank" method='post'>-->
 <form name="form_imprime" >
     <div class="col-xs-6 col-sm-3 sidebar-offcanvas " id="sidebar" role="navigation" >
         <div class="list-group">
             <a href="#" id="nombresucursal" class="list-group-item active"><?php echo $_SESSION['sucursal'] ?>                
                 <span id="codigosucursal" class="badge"><?php echo $_SESSION['codsucursal'] ?></span>
             </a>
             <a href="#" id='nombreusuario' class="list-group-item"><?php echo $_SESSION['usuario'] ?>                        
             </a>                              
             <a href="#" class="list-group-item">
                 <input type="text" id="fecha_r"  name="fecha_r" placeholder="Otra Fecha"/>
                 <input type="button" class="btn btn-primary btn-xs" id="nuevo" name="nuevo" value="Nuevo" onclick="ControlesNuevo();" />
                 <input type="button" class='btn btn-warning btn-xs' id="btn_cancelar" name="btn_cancelar" value='Cancelar' onclick='ControlesCancelar();'/>
                 <input type="button" class="btn btn-default btn-xs" id="vermasdatos" name="vermasdatos" value="Ver +" onclick="fnVerMasDatos( $('#opver').val() );" />
                 
             </a>
             <!--</form>--> 

             <a href="#" class="list-group-item ">
                 <div id="carga" style="display:none"> <img src="img/cargando.gif" /> </div>
                 <input type="button" id="guardar" name="guardar" value="Guardar" class="btn btn-success btn-xs" onclick="Inserta_Recibidos();" />                 
                 <input type="button" id="imprimir_r"  name="imprimir_r" class='btn btn-info btn-xs' value='Imprimir' onclick="fnImprimeRecibidos('manualmente');"/> 
                 <input type="button" id="anular" name="anular" value="Anular" class="btn btn-danger btn-xs" onclick="fnConfirmaAnulaRecibidos();" />
                <!-- <button type="button" id="imprime_ing" class="btn btn-success btn-xs">
                        <span class="glyphicon glyphicon-print"></span>
                 </button> -->
             </a>                        
            
             <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" value="" placeholder="Buscar" />
            <?php echo $_SESSION['codsucursal'] ?>             
         </div>         
    </div><!-- sidebar -->

    <input type="hidden" name="correlativo" id="correlativo">
    <input type="hidden" name="codgirosucursal" id="codgirosucursal">
    <input type="hidden" name="nick"  id="nick"                         value="<?php echo $_SESSION['nick']?>" >  
    <input type="hidden" name="codsucursal" id="codsucursal"            value="<?php echo $_SESSION['codsucursal']?>">
    <input type="hidden" name="codsucursald" id="codsucursald">    
    <input type="hidden" name="fechahoy" id="fechahoy"                  value="<?=$FechaHoy ?>">
    <input type="hidden" name="fechahorahoy" id="fechahorahoy"          value="<?=$Fechahora?>">
    <input type="hidden" name="tipousuario" id="tipousuario"            value="<?php echo $_SESSION['tipousuario']?>">    
    <input type="hidden" name="pdffecha" id="pdffecha">                 
    <input type="hidden" name="optbuscar" id="optbuscar" value="R">
    <input type="hidden" name="motivoanulacion" id="motivoanulacion">      
    <input type="hidden" name="pdfcoddestino" id="pdfcoddestino">
    <input type="hidden" name="pdfnomsucudestino" id="pdfnomsucudestino">      
    <input type="hidden" name="sele_fr" id="sele_fr" value="R[0]">
    <input type="hidden" name="sele_fe" id="sele_fe" value="[0]">
    <input type="hidden" name="anulado" id="anulado">                      
        <input type="hidden" name="opver" id="opver" value="mas">                      
    <input type="hidden" name="usuaentrega" id="usuaentrega"> <!-- para saber si esta pendiente-->
    
 </form>
</div>    <!--canvas-->
</div>   <!-- end tab 1  -->    
<!-- mmmmmmmmmmmmmmmmmmmm siguiente tab mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm -->
<!-- mmmmmmmmmmmmmmmmmmmm siguiente tab mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm -->
<!-- mmmmmmmmmmmmmmmmmmmm siguiente tab mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm -->
<div id="tabs-2">     
<div class="row row-offcanvas row-offcanvas-right">
<div class="col-xs-12 col-sm-9">
              <p class="pull-right visible-xs">
                <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
              </p>  
<div class="row">
<!--  Beneficiario Remitente   -->
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">
      <div class="input-group input-group-sm has-warning">
        <span class="input-group-addon">Beneficiario</span>     
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" id="ednib" name="ednib" placeholder="DNI Beneficiario">
        <span class="input-group-btn">
          <!--<button class="btn btn-success  glyphicon glyphicon-download-alt" id='buscaB' name='buscaB' ></button>*/-->
          <a href="#" id="ebusca_beneficiario" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_b" onclick="elimpia_tabla_b(); eRecuperaClientesBFast();"></a>
        </span>
      </div>
      <input type="text" class="form-control" id="enombresb" placeholder="Nombres Beneficiario" readonly="readonly">
    
      <div class="input-group input-group-sm has-success">
        <span class="input-group-addon">Remitente</span> 
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" id="ednir" name="ednir" placeholder="DNI Remitente">
        <span class="input-group-btn">
          <!--<button class="btn btn-info  glyphicon glyphicon-search" id ="buscaR" name="buscaR" type="submit"></button>-->          
          <!--<button class="btn btn-success  glyphicon glyphicon-download-alt" id='buscaS' name='buscaS'></button>-->
          <a href="#" id="ebusca_remitente" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_r" onclick="elimpia_tabla_r(); eRecuperaClientesRFast();"></a>
        </span>
      </div>
          <input type="text" class="form-control" id="enombresr" name="enombresr" placeholder="Nombres Remitente" readonly="readonly">     
    </div><!--/span-->
<!--  Sucursal   -->
      <div class="col-xs-6 col-sm-6 col-lg-4 form-group has-success input-group-sm">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Codigo</span> 
                  <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" id="ecod_sucu" name="ecod_sucu" placeholder="CODIGO">
                  <span class="input-group-btn">
                  <!--<button class="btn btn-success  glyphicon glyphicon-download-alt" id='buscaS' name='buscaS'></button>-->
                  <a href="#" id="ebusca_sucursal" class="btn btn-info glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_s" onclick="elimpia_tabla_s(); eRecuperaSucursalFast();"></a>
                    </span>
                </div>  
            <input type="text" class="form-control" name="edestino" id="edestino" placeholder="Sucursal Origen" readonly="readonly">
            <div class="input-group input-group-sm">
                <span class="input-group-btn">                    
                    <a href="#" id="boton_editar" class="btn btn-primary glyphicon glyphicon-hand-right" data-placement="right" title="Editar Nro. Operacion" data-toggle="modal tooltip" onclick="FnHabilitaEdicion('editar');"></a>
                </span>      
                <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="operacion" id="operacion" placeholder="Nro Operacion">
                <span class="input-group-btn">                    
                    <a href="#" id="boton_pagar" class="btn btn-warning glyphicon glyphicon-flash" data-placement="right" title="Pagar Transferencia" data-toggle="modal tooltip" onclick="FnPagar();"></a>
                </span>              
            </div>      
      </div><!--/span-->
<!-- MONEY -->
            <div class="col-xs-6 col-sm-6 col-lg-4 input-group-sm">
                <div class="input-group input-group-sm ">
                  <span class="input-group-addon">Importe</span>
                  <input type="text" class="form-control" id="eimporte_r" name="eimporte_r" value="0" onblur="eADecimal();" onkeyup="ecalcula_total();"/>
                </div>                 
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Porcentaje</span> 
                    <select class="form-control input-sm" id="elistaporcentajes" onblur="ecalcula_total();" onchange="ecalcula_cargo();">                
                    <option value="1.5">1.5 %</option> <option value="2.0">2.0 %</option> <option value="2.5">2.5 %   </option> 
                    <option value="3.0">3.0 %</option> <option value="3.5">3.5 %</option> <option value="4.0">4.0 %   </option> 
                    <option value="4.5">4.5 %</option> <option value="5.0">5.0 %</option> <option value="5.5">5.5 %   </option> 
                    <option value="6.0">6.0 %</option> <option value="6.5">6.5 %</option> <option value="7.0">7.0 %   </option>
                    <option value="7.5">7.5 %</option> <option value="8.0">8.0 %</option> <option value="8.5">8.5 %   </option>
                    <option value="9.0">9.0 %</option> <option value="9.5">9.5 %</option> <option value="10.0">10.0 % </option>
                  </select>
                </div>
                
                <div class="input-group input-group-sm">                  
                  <span class="input-group-addon">Cargo</span>
                  <input type="text" class="form-control" id="ecargo_r" name="ecargo_r" value="0" onblur="eADecimal();" onkeyup="ecalcula_total();"/>
                </div>                  
            </div>             
</div><!--/row-->                      
</div><!--/span-->
 <!-- /////////////////// Sidebar BBB ////////////////////////-->
 <form name="eform_imprime" action="Imprime_Entregados.php" target="_blank" method='post'>
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas " id="sidebar" role="navigation" >
                    <div class="list-group">
                    <a href="#" id="nombresucursal" class="list-group-item active"><?php echo $_SESSION['sucursal']?>
                        <span id="codigosucursal" class="badge"><?php echo $_SESSION['codsucursal']?></span>
                    </a>
                    <a href="#" id='nombreusuario' class="list-group-item"><?php echo $_SESSION['usuario']?>                        
                    </a>
                        <a href="#" class="list-group-item">
                        <input type="text" id="efecha_r" name="efecha_r" placeholder="Otra Fecha"/>
                        <input type="button" id="enuevo" name="enuevo" value="Nuevo" class="btn btn-warning btn-xs" onclick="eControlesNuevo();"/>
                        <!--<input type="button" class='btn btn-default btn-xs' id="bancos" name="bancos" value='Bancos' onclick=''/> -->
                        <input type="button" class='btn btn-default btn-xs' id="ecuentas" name="ecuentas" value='Cancelar' onclick='eControlesCancelar();'/>
                        </a>
                        <a href="#" class="list-group-item "> 
                            <div id="ecarga" style="display:none"> <img src="img/cargando.gif" /> </div>
                            <input type="button" id="eguardar" name="eguardar" value="Guardar" class="btn btn-success btn-xs" onclick="eInserta_Recibidos();"/>
                            <!--<input type="button" id="imprimir_r"  name="imprimir_r" class='btn btn-info btn-xs'  value='Imprimir' onclick="ImprimeR('Imprime_Recibidos.php');"/> -->
                            <input type="submit" id="eimprimir_r"  name="eimprimir_r" class='btn btn-info btn-xs'  value='Imprimir' /> 
                            <input type="button" id="eanular" name="eanular" value="Anular" class="btn btn-danger btn-xs" onclick="PideConfirmacion($('#optbuscar').val());"/>
                        </a>                                                
                        <input type="text" style="text-transform:uppercase" class="form-control" id="ebuscador" placeholder="Buscar" />                    
                    </div>             
            </div><!-- sidebar -->
    <input type="hidden" name="epdffecha" id="epdffecha">
    <input type="hidden" name="emotivoanulacion" id="emotivoanulacion">
    <input type="hidden" name="epdfremitente" id="epdfremitente">
    <input type="hidden" name="epdfbeneficiario" id="epdfbeneficiario">
    <input type="hidden" name="epdfimporte" id="epdfimporte">
    <input type="hidden" name="epdfcargo" id="epdfcargo">
    <input type="hidden" name="epdfotros" id="epdfotros">
    <input type="hidden" name="epdftotal" id="epdftotal">
    <input type="hidden" name="epdfcodorigen" id="epdfcodorigen">
    <input type="hidden" name="epdfcoddestino" id="epdfcoddestino">
    <input type="hidden" name="epdfnomsucursal" id="epdfnomsucursal">
    <input type="hidden" name="ecodgirosucursal" id="ecodgirosucursal">
    <input type="hidden" name="epdfnick" id="epdfnick">
    
    <!--<input type="hidden" name="correlativo" id="correlativo">-->                  
 </form>
 </div>    <!--canvas-->
</div> <!-- tab 2 -->  
        
</div> <!-- tabs min -->
</div><!--/.container fuid-->
<!-- ***************************** TABLA PRINCIPAL ****************************************************************-->
<div id="contiene_tabla" class="table-responsive" name="contiene_tabla"  >    
    <!--<table class="table table-hover table-condensed"  id="TRecibidos">*/-->
    <table  id="TRecibidos" class="table  table-condensed" >
        <thead >
            <tr>
                <th>Nro</th>                
                <th>Codigo</th>
                <th>Fecha</th>
                <th class="oculto">DNI-B</th>               
                <th>Beneficiario</th>
                <th class="oculto">DNI-R</th>               
                <th>Remitente</th>
                <th>Destino</th>
                <th>Importe</th>
                <th>Cargo</th>
                <th class="oculto">IGV</th>
                <th class="oculto">ITF</th>
                <th>Otros</th>
                <th>Total</th>
                <th>Nro.Cuenta</th>
                <th>N.Operacion</th>
                <th class="oculto">UsuaRgstra</th>
                <th class="oculto">fechaEntrega</th>
                <th class="oculto">UsuaEntrega</th>
                <th>Observa</th>
                <th class="oculto">Destino</th>                
                <th class="oculto">NomSucursal</th>
                <th class="oculto">A</th>
                
            </tr>
         </thead>
         <tbody id="tablarecibidos" 
           
         </tbody> 
    </table>
</div>
<!-- ******** END TABLA ***********************************************************************-->
<div id="econtiene_tabla" class="table-responsive" name="econtiene_tabla" >    
    <!--<table class="table table-hover table-condensed"  id="TRecibidos">*/-->
    <table  id="TEntregados" class="table table-condensed" >
        <thead >
            <tr>
                <th>Itm</th>                
                <th>Nro</th>                
                <th>Fecha</th>
                <th>dniB</th>
                <th>Beneficiario</th>
                <th>dniR</th>
                <th>Remitente</th>
                
                <th>Importe</th>
                
                <th>Nro.Operacion</th>
                <th>Nro.Cuenta</th>
                
                <th>Usuario</th>
                <th>FechaHora</th>
                <th>A</th>                
            </tr>
         </thead>
        <tbody id="tablaentregados" 
           
         </tbody>            
          
    </table>
</div>
<!-- ******** END TABLA ***********************************************************************-->
<div id="invisible"  >    
    <!--<table class="table table-hover table-condensed"  id="TRecibidos">*/-->
    <table  id="tablainvisible" style="display: none" >
        
        <tbody id="tinvisible" 
           
         </tbody>                      
    </table>
</div>

<!-- DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD  DIALOGOS   DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD -->
<div class="modal fade" id="modal_b" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="myModalLabel_B">Busca BENEFICIARIO</h4>
        <input type="text" style="text-transform:uppercase" id="dni_b" name="dni_b" />
        <select id="opciones_b" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
        <input type="button" Value="BUSCAR" onclick="RecuperaClientesB();"/>
      </div>      
        <div class="modal-body" id="resultado_b"> 
           
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="limpia_tabla_b();">Cerrar</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modal_r" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="myModalLabel1_R">Busca REMITENTE</h4>
        <input type="text" style="text-transform:uppercase" id="dni_r" name="dni_r" />
        <select id="opciones_r" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
        <input type="button" Value="BUSCAR" onclick="RecuperaClientesR();"/>
      </div>
      <!-- se carga los datos dinamicamente -->
        <div class="modal-body" id="resultado_r"> 
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="limpia_tabla_r();">Cerrar</button>        
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modal_s" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="myModalLabel_S">Busca SUCURSAL</h4>
        <input type="text" style="text-transform:uppercase" id="codsucu" name="codsucu" />            
        <input type="button" value="Buscar Sucursal" onclick="RecuperaSucursal();"/>
      </div>
      <!-- se carga los datos dinamicamente -->
        <div class="modal-body" id="resultado_s"> 
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="limpia_tabla_s();">Cerrar</button>        
      </div>
    </div>
  </div>
</div>
<!--DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD -->
<div class="modal fade" id="emodal_b" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="emyModalLabel_B">BENEFICIARIO</h4>
        <input type="text" style="text-transform:uppercase" id="edni_b" name="edni_b" />    
        <select id="eopciones_b" > <option value='A'>Apellidos</option> <option value='D'>DNI</option> </select>
        <input type="button" value="BUSCAR" onclick="eRecuperaClientesB();"/>
      </div>
      <!-- se carga los datos dinamicamente -->
        <div class="modal-body" id="eresultado_b">
            
        </div>        
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_b();">Cerrar</button>        
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="emodal_r" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="emyModalLabel_R">Busca REMITENTE</h4>
        <input type="text" style="text-transform:uppercase" id="edni_r" name="dni_r" />    
        <select id="eopciones_r" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
        <input type="button" Value="BUSCAR" onclick="eRecuperaClientesR();"/>
      </div>
      <!-- se carga los datos dinamicamente -->
        <div class="modal-body" id="eresultado_r"> 
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_r();">Cerrar</button>        
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="emodal_s" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>-->
        <h4 class="modal-title" id="emyModalLabel_S">Busca SUCURSAL</h4>
        <input type="text" style="text-transform:uppercase" id="ecodsucu" name="ecodsucu" />            
        <input type="button" value="Buscar Sucursal" onclick="eRecuperaSucursal();"/>
      </div>
      <!-- se carga los datos dinamicamente -->
        <div class="modal-body" id="eresultado_s"> 
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_s();">Cerrar</button>        
      </div>
    </div>
  </div>
</div>
<!--DDDDDDDDDDDDDDDDDDDDDDDDDD END DIALOGOS  DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD-->

        <!--================================================================================== 
            ============================ DIALOGO ASIGNA CUENTAS ============================== -->
        <div id="dialogo_asigcuenta" title="Cuentas"  > 
            <div class="input-group-sm">    
                <input type="text" id="txt_datocliente" name="txt_datoscliente" readonly="readonly" />     
                <!--Autocompleta -->
                <input type="text" id="txt_bancos" name="txt_bancos" style="text-transform:uppercase"  placeholder="Bancos" /> 

                <input type="text" id="txt_nrocuenta" name="txt_nrocuenta" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Nro. de Cuenta" />

                <button type="button" id="btn_asignacuenta"  onclick="" title="Guardar" class="btn btn-success btn-xs">
                    <span class="glyphicon glyphicon-save "></span>
                </button>
                <button type="button" id="btn_nuevacuenta"  onclick="" title="Nuevo" class="btn btn-primary btn-xs">
                    <span class="glyphicon glyphicon-file "></span>
                </button>
                <button type="button" id="btn_eliminacuenta"  onclick="" title="Eliminar" class="btn btn-warning btn-xs">
                    <span class="glyphicon glyphicon-remove "></span>
                </button>
            </div>    
            <div class="table-responsive" > 
                <table id="tabla_cuentas" class="table table-condensed ">
                    <thead>
                        <tr>
                            <th>Nro. </th>
                            <th>Nro. Cuenta</th>
                            <th>Banco</th>                            
                        </tr>
                    </thead>
                    <tbody id="tbody_cuentas" title="Para ELIMINAR -->Doble Click" >

                    </tbody>
                </table>

            </div>
        </div>
    <input type="hidden" id="opproceso" name="opproceso" value="L">  <!-- opciones para proceso lista cuentas -->
    <input type="hidden" name="txt_idbanco" id="txt_idbanco" >        
    <input type="hidden" name="sele_asc"  id="sele_asc" value="[0]"> <!-- como bandera al seleccionar filas -->
    <input type="hidden" name="opt" id="opt" value="AUTOCOMPLETA">
    <input type="hidden" name="nick"  id="nick" value="<?php echo $_SESSION['nick'] ?>" >
    <input type="hidden" name="tipousuario" id="tipousuario" value="<?php echo $_SESSION['tipousuario'] ?>">
    <input type="hidden" name="idclienteb"  id="idclienteb" >
    <input type="hidden" name="idclienter"  id="idclienter">
    <input type="hidden" name="idcliente"  id="idcliente">
    <input type="hidden" name="hid_idbanco"  id="hid_idbanco" >
    <input type="hidden" name="sele"  id="sele" value="[0]">
    <input type="hidden" name="sele_as"  id="sele_as" value="[0]">
<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster-->
    <script type="text/javascript" language="javascript" src="js/bootstrap.min.js"></script> 
    <script type="text/javascript" language="javascript" src="js/offcanvas.js"></script>
    <script type="text/javascript" language="javascript" src="js/validacampos.js"></script>
    <script type="text/javascript" language="javascript" src="js/alertify.js"></script>
<script type="text/javascript">

</script>      

</body>
</html>