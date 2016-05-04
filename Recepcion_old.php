<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
/* $datRE = new RecibeEntrega(); */
session_start();
$Fechahora = date("Y-m-d H:i:s", (strtotime("-2 Hours")));
$FechaHoy = date("Y-m-d");
$tusuario = $_SESSION['tipousuario'];
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
        <link rel="stylesheet" type="text/css" href="css/offcanvas.css"/> 
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'/>
        <!--<link rel="stylesheet" type='text/css' href="css/alertify.core.css" />-->
        <!--<link rel="stylesheet" type='text/css' href="css//alertify.default.css" />-->
        <link rel="stylesheet" type="text/css" href="css/style_recibe_entrega.css"/>
        
        <script type="text/javascript" src="js/jquery.1.7.1.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
        <script type="text/javascript" src="js/FuncionesRecepcion.js"></script>
        <script type="text/javascript" src="js/jquery.alerts.js"></script>
        <script type="text/javascript" src="js/CreaTablas.js"></script>

  </head>

  <body>

    <!-- Fixed navbar -->
    <nav id="minavbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
       <div class="container" >
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><?php echo $_SESSION['nick'] ?></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              <li><a href="#"><?php echo $_SESSION['sucursal'] ?></a> </li>                            
            <!--
            <li><a href="#" id="nuevo" onclick="ControlesNuevo();">Nuevo</a> </li>            
            <li><a href="#" id="btn_cancelar"   onclick="ControlesCancelar();" >Cancelar</a></li>
            <li><a href="#" id="guardar"        onclick="Inserta_Recibidos();" >Guardar</a></li>
            <li><a href=""  id="anular"         onclick="fnConfirmaAnulaRecibidos();">Anular</a></li>
            <!--<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li> -->
           </ul>
          <ul class="nav navbar-nav navbar-right">
            <li> <input type="text" id="buscador" style="text-transform:uppercase" placeholder="Buscar" class="form-control"> </li>            
            <li> <input type="text" id="fecha_r" name="fecha_r" value = "<?php echo date('Y-m-d') ?>"> </li>
            <!--<li><a href="" id="imprimir_r" onclick="fnImprimeRecibidos('manualmente');" >Imprimir</a></li>-->                        
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    
    <ul id="nav">
        <li class="nuevo">      <a id="nuevo"          onclick="ControlesNuevo();"      href="#" title="Nuevo"></a></li>
        <li class="cancelar">   <a id="btn_cancelar"   onclick="ControlesCancelar();"   href="#" title="Cacelar"></a></li>
        <li class="guardar">    <a id="guardar"        onclick="Inserta_Recibidos();"   href="#" title="Guardar"></a></li>
        <li class="anular">     <a id="anular"         onclick="fnConfirmaAnulaRecibidos();"   href="#" title="Anular"></a></li>
        <li class="imprimir">   <a id="imprimir_r"     onclick="fnImprimeRecibidos('manualmente');" href="#" title="Imprimir"></a></li>
        <li class="masdatos">   <a id="mas_datos"      href="#" title="Mas Datos"></a></li>
    </ul>

<div class="container-fluid">
    
<div class="row">
<!--  Beneficiario Remitente   -->
    <div class="col-xs-6 col-sm-3">
      <div class="input-group input-group-sm ">
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnib" name="dnib" placeholder="DNI Beneficiario">
        <span class="input-group-btn">          
          <a href="#" id="busca_beneficiario" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_b" onclick="limpia_tabla_b();"></a>
        </span>
      </div>
      <input type="text" class="form-control" id="nombresb" placeholder="Nombres Beneficiario" readonly="readonly">
    
      <div class="input-group input-group-sm ">        
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnir" name="dnir" placeholder="DNI Remitente">
        <span class="input-group-btn">          
          <a href="#" id="busca_remitente" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_r" onclick="limpia_tabla_r(); "></a>
        </span>
      </div>
      <input type="text" class="form-control" id="nombresr" placeholder="Nombres Remitente" readonly="readonly">     
    </div><!--/span-->
<!--  Sucursal   -->
    <div class="col-xs-6 col-sm-3 ">
        <div class="input-group input-group-sm">            
            <input type="text" class="form-control" id="destino" name="destino" placeholder="Sucursal Destino" onkeyup='javascript:this.value=this.value.toUpperCase();' >
                <span class="input-group-btn">
                    <a href="#" id="busca_sucursal" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_s" onclick="limpia_tabla_s(); "></a>
                </span>
        </div>  
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="ciudaddestino" id="ciudaddestino" placeholder="Ciudad Destino (BOLETAS)">
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="observa" id="observa" placeholder="Observaciones">
        <div class="input-group input-group-sm">                
            <input type="text" class="form-control" id="cuentas" name="cuentas" placeholder="Cuentas" readonly="readonly"/>
            <span class="input-group-btn">
                <a id="busca_cuentas" title="Buscar Cuentas" class="btn btn-default glyphicon glyphicon-home"></a>
            </span>
        </div> 

    </div><!--/span-->
                <!-- MONEY -->
<div class="col-xs-6 col-sm-3 ">
    <div class="input-group input-group-sm ">
        <span class="input-group-addon">Imprte</span>                
        <input type="text" class="form-control" id="importe_r" name="importe_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();"  onkeyup="calcula_total();"/>
    </div>  
    <div class="input-group input-group-sm">      
        <span class="input-group-addon">Cargo</span>
        <input type="text" class="form-control" id="cargo_r" name="cargo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>  
    <div class="input-group input-group-sm">         
        <span class="input-group-addon">Otros</span>
        <input type="text" class="form-control" id="otros_r" name="otros_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>
    
    <div class="input-group input-group-sm has-error">         
        <span class="input-group-addon">Total</span>
        <input type="text" class="form-control" id="total_r" value="0" readonly="readonly"/> 

    </div>
    
</div> 
<!--  Porcentajes   -->
    <div class="col-xs-6 col-sm-3" >
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">% %</span> 
                    <select class="form-control input-sm" id="listaporcentajes" onblur="calcula_total();" onchange="calcula_cargo();">                
                    <option value="1.5">1.5 %</option> <option value="2.0">2.0 %</option> <option value="2.5">2.5 %</option> 
                    <option value="3.0">3.0 %</option> <option value="3.5">3.5 %</option> <option value="4.0">4.0 %</option> 
                    <option value="4.5">4.5 %</option> <option value="5.0">5.0 %</option> <option value="5.5">5.5 %</option> 
                    <option value="6.0">6.0 %</option> <option value="6.5">6.5 %</option> <option value="7.0">7.0 %</option>
                    <option value="7.5">7.5 %</option> <option value="8.0">8.0 %</option> <option value="8.5">8.5 %</option>
                    <option value="9.0">9.0 %</option> <option value="9.5">9.5 %</option> <option value="10.0">10.0 %</option> 
                  </select>
                </div>
                <div class="input-group input-group-sm" style="display: none" >
                    <span class="input-group-addon">I.G.V.</span> 
                    <input type="text" class="form-control" id="igv_r" value="0" readonly="readonly">
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Efctvo</span> 
                    <input type="text" class="form-control " id="efectivo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onkeyup="calcula_vuelto();">
                </div>  
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Vuelto</span> 
                    <input type="text" class="form-control" id="vuelto_r" value="0" readonly="readonly">
                </div>
                <div id="carga" style="display:none"> <img src="img/cargando.gif" /> </div>
    </div>

</div><!--/row-->
                     
    <input type="hidden" name="correlativo" id="correlativo">
    <input type="hidden" name="codgirosucursal" id="codgirosucursal">
    <input type="hidden" name="nick"  id="nick"                         value="<?php echo $_SESSION['nick']?>" >  
    <input type="hidden" name="codsucursal" id="codsucursal"            value="<?php echo $_SESSION['codsucursal']?>">
    <input type="hidden" name="codsucursald" id="codsucursald">    
    <input type="hidden" name="fechahoy" id="fechahoy"                  value="<?= $FechaHoy ?>">
    <input type="hidden" name="fechahorahoy" id="fechahorahoy"          value="<?= $Fechahora ?>">
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
</div>    <!--container fluid-->

<!-- ***************************** TABLA PRINCIPAL ****************************************************************-->
<div  class="table-responsive mygrid-wrapper-div" >    
    <table  id="TRecibidos" class="table table-bordered table-condensed" >
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
                <th>Datos Pago</th>
                <th class="oculto">A</th>
                
            </tr>
         </thead>
         <tbody id="tablarecibidos" 
           
         </tbody> 
    </table>
</div>

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
            
           
<!-- ========================================================================================================= -->
            <div class="table-responsive" > 
                <table id="tabla_cuentas" class="table table-condensed table-bordered">
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

        <div id="dialogo_masdatos">
            <div class="table-responsive" > 
                <table id="tabla_masdatos" class="table table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>DNI-Bene</th>
                            <th>DNI-Remte</th>
                            <th>IGV</th>
                            <th>ITF</th>
                            <th>Usua.Rgstra</th>
                            <th>Fecha Entrega</th>
                            <th>Usua.Entrega</th>
                            <th>Ciudad Destino</th>
                            <th>Sucursal Destino</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_masdatos" >

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
    <input type="hidden" id="md_dnib"   >
    <input type="hidden" id="md_dnir"   >
    <input type="hidden" id="md_igv"  >
    <input type="hidden" id="md_itf"  > 
    <input type="hidden" id="md_usuaregistra" > 
    <input type="hidden" id="md_fechaentrega" > 
    <input type="hidden" id="md_usuaentrega" >  

<!--
        <footer>
            <p>&copy; dataweb 2014</p>
        </footer>
-->
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        
    <script type="text/javascript" language="javascript" src="js/bootstrap.min.js"></script> 
    <script type="text/javascript" language="javascript" src="js/offcanvas.js"></script>
    <script type="text/javascript" language="javascript" src="js/validacampos.js"></script>

    </body>
</html>

