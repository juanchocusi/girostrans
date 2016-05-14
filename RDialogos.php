<div id="dialogo_buscaclib">
    <input type="text" style="text-transform:uppercase" id="dni_b" placeholder="Buscar Beneficiario"/>
    <select id="opciones_b" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
    <input type="button" class="btn btn-default btn-xs  blue" Value="BUSCAR" onclick="RecuperaClientesB();"/>
    <a href="#menu-toggle" class="btn btn-default btn-xs glyphicon glyphicon-user blue" id="btn_llamaclientesb"  title="Crea/Edita Cliente"></a>
    <!--<a href="#menu-toggle" class="btn btn-default btn-xs glyphicon glyphicon-user " id="btn_llamaclientesb"  title="Editar Cliente"></a>-->
    <div class="table-responsive mygrid-wrapper-divb"> 
        <table id="tabla_busca_beneficiario" class="table table-condensed">
            <thead>
                <tr>
                    <th class="oculto"></th>
                    <th>DNI</th>
                    <th>Apellidos</th>
                    <th>Nombres</th>
                </tr>
            </thead>
            <tbody id="resultado_b" >

            </tbody>
        </table>

    </div>
</div>

<div id="dialogo_buscaclir">
    <input type="text" style="text-transform:uppercase" id="dni_r" placeholder="buscar Remitente"/>
    <select id="opciones_r" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
    <input type="button" class="blue" Value="BUSCAR" onclick="RecuperaClientesR();"/>
    <a href="#menu-toggle" class="btn btn-default btn-xs glyphicon glyphicon-user blue" id="btn_llamaclientesr"  title="Crea Nuevo Cliente"></a>
    <div class="mygrid-wrapper-divr" id="resultado_r"> 

    </div>
</div>

<div id="dialogo_buscasucu">
    <input type="text" style="text-transform:uppercase" id="codsucu" placeholder="Buscar Sucursal"/>    
    <input type="button" class="blue" Value="Buscar Sucursal" onclick="RecuperaSucursal();"/>    
    <div class="mygrid-wrapper-divs" id="resultado_s"> 

    </div>
</div>


<!--================================================================================== 
============================ DIALOGO ASIGNA CUENTAS ============================== -->
<div id="dialogo_asigcuenta" title="Cuentas"> 
    <div class="input-group-sm">    
        <input type="text" id="txt_datocliente" name="txt_datoscliente" readonly="readonly" />     
        <!--Autocompleta -->

        <input type="text" id="txt_bancos" name="txt_bancos" style="text-transform:uppercase"  placeholder="Bancos" /> 
        <input type="text" id="txt_nrocuenta" name="txt_nrocuenta" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Nro. de Cuenta" />

        <button type="button" id="btn_asignacuenta"  onclick="" title="Guardar" class="btn btn-default btn-xs blue">
            <span class="glyphicon glyphicon-floppy-disk "></span>
        </button>
        <button type="button" id="btn_nuevacuenta"  onclick="" title="Nuevo" class="btn btn-default btn-xs blue">
            <span class="glyphicon glyphicon-file "></span>
        </button>
        <button type="button" id="btn_eliminacuenta"  onclick="" title="Eliminar" class="btn btn-default btn-xs blue">
            <span class="glyphicon glyphicon-remove "></span>
        </button>
    </div>    


    <!-- ========================================================================================================= -->
    <div id="divcta" class="table-responsive mygrid-wrapper-divcta" > 
        <table id="tabla_cuentas" class="table table-condensed table-bordered">
            <thead>
                <tr>
                    <th>Nro. </th>
                    <th>Nro. Cuenta</th>
                    <th>Banco</th>                            
                </tr>
            </thead>
            <tbody id="tbody_cuentas" >

            </tbody> 
        </table>
    </div>
    <div id="divbanco" class="table-responsive mygrid-wrapper-divban" > 
        <table id="tabla_bancos " class="table table-condensed table-bordered table-hover">
            <thead>
                <tr>
                    <th>Itm </th>
                    <th class='oculto' >ID </th>
                    <th>Iniciales</th>
                    <th>Banco</th>                            
                </tr>
            </thead>
            <tbody id="tbody_banco">

            </tbody>
        </table>
    </div>

</div>

<div id="dialogo_masdatos">
    <div class="table-responsive" > 
        <table id="tabla_masdatos" class="table table-condensed table-bordered ">
            <thead>
                <tr>
                    <th>Beneficiario</th>
                    <th>Remitente</th>
                    <th>IGV</th>
                    <th>ITF</th>
                    <th>Usua.Rgstra</th>
                    <th>Fecha Entrega</th>
                    <th>Usua.Entrega</th>
                    <th>Ciudad Destino</th>
                    <th>Sucursal Destino</th>
                    <th>Datos Edita</th>
                    <th>NroBoleta</th>
                </tr>
            </thead>
            <tbody id="tbody_masdatos" >

            </tbody>
        </table>
    </div>
</div>    
<!--BOLETA-->
<div id="dialogo_boleta">
    <div class="input-group-sm">    
        <input type="text" id="boleta_serie" value="001" maxlength="3">
        <input type="text" id="boleta_nro" maxlength="6" >
        <input type="text" id="boleta_fecha" >

        <input type="text" id="boleta_nombres" class="form-control" readonly="radonly" >
        <input type="text" id="boleta_destino" class="form-control" onkeyup='javascript:this.value = this.value.toUpperCase();'/>

        <div class="input-group input-group-sm ">                    
            <input type="text" class="form-control" id="boleta_describe" >    
            <span class="input-group-addon"> <input type="text" id="boleta_cargo"> </span>                
        </div>  
        <input type="text" id="boleta_numeroletras" class="form-control" readonly="radonly" >
        <br>
        <button type="button" id="btn_boleta_guardar" title="Gurdar/Imprimir Boleta" class="btn btn-default btn-sm blue">
            <span class="glyphicon glyphicon-print"></span>
        </button>
        <button type="button" id="btn_boleta_cancelar" title="Cancelar" class="btn btn-default btn-sm blue">
            <span class="glyphicon glyphicon-remove-sign"></span>
        </button>
        <button type="button" id="btn_boleta_editar"  onclick="" title="Editar" class="btn btn-default btn-sm blue">
            <span class="fa fa-edit fa-lg"></span>
        </button>
    </div>
</div>   

<div id="dialogo_cliente">
    <div class="input-group-sm">
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">DNI</span>
            <input type="text" class="form-control"  id="dni_cliente" maxlength="8" onkeyup='javascript:this.value = this.value.toUpperCase();'>
            <span id="span_idcliente" class="input-group-addon"></span>
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Nombres</span>
            <input type="text" class="form-control" id="nom_cliente" onkeyup='javascript:this.value = this.value.toUpperCase();' >
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Apellidos</span>
            <input type="text" class="form-control" id="apel_cliente" onkeyup='javascript:this.value = this.value.toUpperCase();'>
        </div>
    </div>    
    <div id="div_MasDatosCliente" class="input-group-sm oculto">
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Direccion</span>
            <input type="text" class="form-control" id="dir_cliente" onkeyup='javascript:this.value = this.value.toUpperCase();'>
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Telefono</span>
            <input type="text" class="form-control" id="fono_cliente" onkeyup='javascript:this.value = this.value.toUpperCase();'>
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">e-mail</span>
            <input type="text" class="form-control" id="email_cliente" >
        </div>
    </div>    

    <button type="button" id="btn_cliente_nuevo" title="Nuevo Cliente" class="btn btn-default btn-xs blue">
        <span class="fa fa-lg fa-user"></span>
    </button>
    <button type="button" id="btn_cliente_guardar" title="Gurdar" class="btn btn-default btn-xs blue">
        <span class="glyphicon glyphicon-floppy-disk"></span>
    </button>
    <!--                <button type="button" id="btn_cliente_cancelar" title="Eliminar" class="btn btn-default btn-xs blue">
                        <span class="glyphicon glyphicon-remove"></span>
                    </button>-->
    <button type="button" id="btn_cliente_editar" title="Editar Cliente" class="btn btn-default btn-xs blue">
        <span class="fa fa-edit fa-lg blue"></span>
    </button>
    <button type="button" id="btn_cliente_salir" class="btn btn-default btn-xs blue">Salir</button>
</div>

<div id="dialogo_voucher">
    <div class="table-responsive" > 
        <table id="TVoucher" class="table-condensed table-bordered ">
            <thead>
                <tr>
                    <th class="oculto">idvoucher</th>
                    <th class="oculto">correlativo</th>
                    <th>CODIGO</th>
                    <th>OBSERVACION</th>
                    <th>FECHA</th>
                    <th class='oculto'>USUARIO</th>
                    <th>Impreso por</th>
                    <th>Fecha de Impresión</th>                    
                </tr>
            </thead>
            <tbody id="tbody_voucher" >

            </tbody>
        </table>
    </div>
</div>    

<div id="dialogo_voucher_img" title="Boucher">
    <div id="voucher_img" class="printableArea">
        <img src="php/uploads/juancho411.jpg" id="imagen"/>
    </div>
    <button type="button" id="btn_imprime_voucher" class="btn btn-default btn-xs blue">Imprimir Boucher</button>
</div>



<!--============================ DIALOGO ASIGNA CUENTAS ============================== -->        
<input type="hidden" id="opproceso" name="opproceso" value="L">  <!-- opciones para proceso lista cuentas -->
<input type="hidden" id="txt_idbanco" >        
<input type="hidden" id="sele_asc" value="[0]"> <!-- como bandera al seleccionar filas -->
<input type="hidden" id="opt" value="AUTOCOMPLETA">
<input type="hidden" id="idclienteb" >
<input type="hidden" id="idclienter">
<input type="hidden" id="idcliente">
<input type="hidden" id="hid_idbanco" >
<input type="hidden" id="sele" value="[0]">
<input type="hidden" id="sele_as" value="[0]">
<input type="hidden" id="sele_cta" value="us.[0]">
<input type="hidden" id="md_dnib"   >
<input type="hidden" id="md_dnir"   >
<input type="hidden" id="md_igv"  >
<input type="hidden" id="md_itf"  > 
<input type="hidden" id="md_usuaregistra" > 
<input type="hidden" id="md_fechaentrega" > 
<input type="hidden" id="md_usuaentrega" >
<input type="hidden" id="datos_edita" >
<input type="hidden" id="unclick" >
<input type="hidden" id="nroboleta" >

<input type="hidden" id="correlativo">
<input type="hidden" id="codgirosucursal">
<input type="hidden" id="nick"                  value="<?php echo $_SESSION['nick'] ?>" >  
<input type="hidden" id="codsucursal"           value="<?php echo $_SESSION['codsucursal'] ?>">
<input type="hidden" id="codsucursald">    
<input type="hidden" id="fechahoy"              value="<?= $FechaHoy ?>">
<input type="hidden" id="fechahorahoy"          value="<?= $Fechahora ?>">
<input type="hidden" id="tipousuario"           value="<?php echo $_SESSION['tipousuario'] ?>">    
<input type="hidden" id="pdffecha">                 
<input type="hidden" id="optbuscar" value="R">
<input type="hidden" id="motivoanulacion">      
<input type="hidden" id="pdfcoddestino">
<input type="hidden" id="pdfnomsucudestino">      
<input type="hidden" id="sele_fr" value="R[0]">
<input type="hidden" id="sele_fe" value="[0]">
<input type="hidden" id="sele_cli" value="B.[0]">
<input type="hidden" id="sele_v" value="V[0]">
<input type="hidden" id="anulado">                      
<input type="hidden" id="opver" value="mas">                      
<input type="hidden" id="usuaentrega"> <!-- para saber si esta pendiente-->    
<input type="hidden" id="id_cliente">
<input type="hidden" id="remite_beneficia">
<input type="hidden" id="fecha_seleccionada">
<input type="hidden" id="en_efectivo">
<input type="hidden" id="otros_ing">
<input type="hidden" id="codigovoucher">
<input type="hidden" id="correlativo_v">