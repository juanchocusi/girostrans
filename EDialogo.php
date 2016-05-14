
<!--DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD -->
<!--    <div class="modal fade" id="emodal_b" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="emyModalLabel_B">BENEFICIARIO</h4>
                    <input type="text" style="text-transform:uppercase" id="edni_b" name="edni_b" />    
                    <select id="eopciones_b"> <option value='A'>Apellidos</option> <option value='D'>DNI</option> </select>
                    <input type="button" value="BUSCAR" onclick="eRecuperaClientesB();"/>
                </div>
                 se carga los datos dinamicamente 
                <div class="modal-body" id="eresultado_b">

                </div>        
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_b();">Cerrar</button>        
                </div>
            </div>
        </div>
    </div>-->

<!--    <div class="modal fade" id="emodal_r" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="emyModalLabel_R">Busca REMITENTE</h4>
                    <input type="text" style="text-transform:uppercase" id="edni_r" name="dni_r" />    
                    <select id="eopciones_r" > <option value='A'>Apellido</option> <option value='D'>DNI</option> </select>
                    <input type="button" Value="BUSCAR" onclick="eRecuperaClientesR();"/>
                </div>
                 se carga los datos dinamicamente 
                <div class="modal-body" id="eresultado_r"> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_r();">Cerrar</button>        
                </div>
            </div>
        </div>
    </div>-->

<!--    <div class="modal fade" id="emodal_s" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="emyModalLabel_S">Busca SUCURSAL</h4>
                    <input type="text" style="text-transform:uppercase" id="ecodsucu" name="ecodsucu" />            
                    <input type="button" value="Buscar Sucursal" onclick="eRecuperaSucursal();"/>
                </div>
                 se carga los datos dinamicamente 
                <div class="modal-body" id="eresultado_s"> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="elimpia_tabla_s();">Cerrar</button>        
                </div>
            </div>
        </div>
    </div>-->
<!--DDDDDDDDDDDDDDDDDDDDDDDDDD END DIALOGOS  DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD-->    
<!--================================================================================== 
    ============================ DIALOGO ASIGNA CUENTAS ============================== -->
<div id="dialogo_asigcuenta" title="Cuentas"  >
    <div class="input-group input-group-sm">                                
        <input type="text" id="descbanco" name="descbanco" style="text-transform:uppercase" class="form-control" placeholder="Nombre Banco" />    
        <span class="input-group-btn">                    
            <a href="#" id="btnbuscabancos" class="btn btn-default glyphicon glyphicon-search"></a>
        </span>                
    </div>
    <input type="text" id="etxt_bancos" name="etxt_bancos" style="display:none" class="form-control" style="text-transform:uppercase" placeholder="Busca Banco" />    
    <input type="text" id="datoscuenta" name="datoscuenta" style="text-transform:uppercase"  class="form-control" placeholder="Cuenta" />
    <input type="text" id="nrodeoperacion" name="nrooperacion" style="text-transform:uppercase" class="form-control" placeholder="Nro de Operacion" />
    <div id="carga1" ></div>

    <table id="tabla_bancos" class="table table-condensed ">
        <thead>
            <tr>
                <th>Nro. </th>
                <th class="eoculto">idbanco</th>
                <th>Banco</th>
                <th>Descripcion</th>                            
            </tr>
        </thead>
        <tbody id="tbody_banco" title="Para Seleccionar --> Click" >

        </tbody>
    </table>                
    <div class="table-responsive" > 
        <table id="tabla_cuentas" style="display:none"  class="table table-condensed ">
        <!--<table id="tabla_cuentas" class="table table-condensed ">  -->
            <thead>
                <tr>
                    <th>Nro. </th>
                    <th>Asociado</th>
                    <th >Banco</th>
                    <th>Nro. Cuenta</th>                            
                </tr>
            </thead>
            <tbody id="tbody_cuentasxusuario" title="Para Seleccionar -->Doble Click" >

            </tbody>
        </table>
    </div>
</div>
<!--dialogo mas datos-->
<div id="dialogo_masdatose">
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
                    <th>Ciudad </th>
                    <th>Sucursal</th>
                </tr>
            </thead>
            <tbody id="tbody_masdatose" >

            </tbody>
        </table>
    </div>
</div> 
<!-- PAGA CON AGENTE -->
<div id="dialogo_pagaagente" title="Paga con cuenta de Agente"  >

    <input type="text" id="datos_cuenta"     style="text-transform:uppercase" class="form-control" placeholder="Cuenta" />
    <input type="text" id="nro_deoperacion"  style="text-transform:uppercase" class="form-control" placeholder="Nro. de Operación" />
    <div id="carga1" ></div>

    <table id="tabla_agentes" class="table table-condensed ">
        <thead>
            <tr>
                <th>Nro. </th>
                <th class="eoculto">idbanco</th>
                <th>Nro.Cuenta</th>
                <th>Banco</th>
                <th>Descripcion</th>                            
            </tr>
        </thead>
        <tbody id="body_agentes" >

        </tbody>
    </table>

</div>
<!--paga efectivo - sucursal-->
<div id="dialogo_paga_con_sucu" title="Paga en Efectivo otra Sucursal"  >
    <input type="text" id="txt_motivo" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Motivo..." />    
    <div id="carga1" ></div>
    <table id="tabla_agentes" class="table table-condensed ">
        <thead>
            <tr>
                <th>Itm</th>
                <th>codsucu</th>
                <th>Sucursal</th>                
            </tr>
        </thead>
        <tbody id="body_sucursales" >

        </tbody>
    </table>

</div>

<div id="dialogo_distribucion">  
    <select id="opciones_distribucion" > <option value='A'>Agente</option> </select>
    <select class=" form-control input-sm " id="lista_agentes"> <?php echo $agt ?> </select>
    <div class="row">
        <div class="col-lg-6">
            <div class="input-group input-group-sm">                                
                <input type="text" id="txt_fraccion_distro" class="form-control" placeholder="00.00"/>    
                <span class="input-group-btn">                    
                    <a href="#" id="btn_inserta_fraccion" class="btn btn-default fa fa-download fa-2x" title="Agregar Fraccion"></a>
                </span>                
            </div>

        </div>
    </div>
    <div class="table-responsive"> 
        <table id="tabla_distribucion" class="table-condensed table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>Itm</th>
                    <th class="oculto">id</th>  
                    <th class="oculto">id</th>  
                    <th>Nro.Cuenta</th>
                    <th>Agente</th>
                    <th class="oculto">estado</th>  
                    <th>Fraccion</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tfoot>
                <tr>                            
                    <th></th>
                    <th></th>
                    <th class="oculto"></th>
                    <th class="oculto"></th>
                    <th></th>
                    <th class="oculto"></th>
                    <th>Total</th>
                    <th id="suma_fraccion"></th>
                    <th></th>
                </tr>
            </tfoot>
            <tbody id="body_distribucion">

            </tbody>
        </table>

    </div>
    <div id="div_btns_distribucion" class="input-group input-group-sm">        
        <button type="button" id="btn_aplica_distro" class="btn btn-default btn-xs blue" > Aplicar Distribución
            <span class="glyphicon glyphicon-cloud-download"></span>
        </button>

        <button type="button" id="btn_cancela_distro" class="btn btn-default btn-xs blue" > Cancelar Distribución
            <span class="glyphicon glyphicon-remove-circle"></span>
        </button>
    </div>
    <label id="mensajito" class="oculto" for="mensaje">Monto ya fue DISTRIBUIDO...</label>
</div>

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
<div id="dialogo_buscasucu">
    <input type="text" style="text-transform:uppercase" id="codsucu" placeholder="Buscar Sucursal"/>    
    <input type="button" class="blue" Value="Buscar Sucursal" onclick="RecuperaSucursal();"/>    
    <div class="mygrid-wrapper-divs" id="resultado_s"> 

    </div>
</div>
<!--============================ DIALOGO ASIGNA CUENTAS ============================== -->
<div id="diag_SaldoDisponible">
    <div id="carga" style="display:none"> <img src="img/loading005.gif"> </div>
    <div class="table-responsive "> 
        <table id="TSaldoDisponible" class=" table-condensed table-bordered table-striped">
            <thead>
                <tr>
                    <th>nro cuenta</th>
                    <th>Usuario</th>
                    <th>Banco</th>
                    <th>Movs</th>
                    <th>Saldo Cuenta</th>

                    <th>Disponible</th>
                </tr>
            </thead>
<!--            <tfoot>
                <tr>                            
                    <th></th>
                    <th></th>
                    <th>Totales</th>
                    <th id="tmvos"></th>
                    <th id="tsaldocta"></th>                    
                    
                    <th id="disponible"></th>
                </tr>
            </tfoot>-->
            <tbody id="body_SaldoDisponible" >

            </tbody>

        </table>

    </div>
</div>
<!--============================ DIALOGO CARGA IMAGEN ============================== -->
<div id="dialogo_CargaImagen">
    <input type="hidden" id="correlativo_img" readonly="readonly">   
    <div class="input-group input-group-sm"> 
        <span class="input-group-addon">CODIGO</span>
        <input type="text" class="form-control" id="codgirosucu_img" readonly="readonly">
    </div>
    <div class="input-group input-group-sm"> 
        <span class="input-group-addon">Descripcion</span>
        <input type="text" class="form-control" id="descripcion_img" onkeyup='javascript:this.value = this.value.toUpperCase();'>        
    </div>
    <div id="fileuploader">Upload</div>
    <div class="form-group">        
        <button type="button" id="btn_guarda_voucher" class="btn btn-success">Guardar BOUCHER</button>
    </div>   
                
</div>

 

<input type="hidden" id="md_dnib">
<input type="hidden" id="md_dnir">
<input type="hidden" id="md_igv">
<input type="hidden" id="md_itf"> 
<input type="hidden" id="md_usuaregistra" > 
<input type="hidden" id="md_fechaentrega" > 
<input type="hidden" id="md_usuaentrega" > 
<input type="hidden" id="ciudaddestino" > 
<input type="hidden" id="desdeagente" >
<input type="hidden" id="sele_a" value="a[0]">

<input type="hidden" id="pdffecha">
<input type="hidden" id="emotivoanulacion">
<input type="hidden" id="epdfremitente">
<input type="hidden" id="epdfbeneficiario">
<input type="hidden" id="epdfimporte">
<input type="hidden" id="epdfcargo">
<input type="hidden" id="epdfotros">
<input type="hidden" id="epdftotal">
<input type="hidden" id="epdfcodorigen">
<input type="hidden" id="epdfcoddestino">
<input type="hidden" id="epdfnomsucursal">
<input type="hidden" id="codgirosucursal">     

<input type="hidden" id="correlativo">
<input type="hidden" id="eidclienteb">
<input type="hidden" id="eidclienter">
<input type="hidden" id="codsucursal"            value="<?php echo $_SESSION['codsucursal'] ?>">
<input type="hidden" id="codsucursalo">
<input type="hidden" id="optbuscar"              value="E">
<input type="hidden" id="nick"                   value="<?php echo $_SESSION['nick'] ?>" >
<input type="hidden" id="efechahoy"              value="<?= $FechaHoy ?>">
<input type="hidden" id="efechahorahoy"          value="<?= $Fechahora ?>">
<input type="hidden" id="tipousuario"            value="<?php echo $_SESSION['tipousuario'] ?>">    
<input type="hidden" id="sele_fe" value="R[0]">
<input type="hidden" id="anulado">
<input type="hidden" id="usuaentrega" >
<input type="hidden" id="idbanco" >
<input type="hidden" id="grupo">
<input type="hidden" id="sele_sucu" value="s[0]">
<input type="hidden" id="sele_su" value="su[0]">
<input type="hidden" id="sele_cli" value="B.[0]">
<input type="hidden" id="codsucursales">
<input type="hidden" id="seledistro" value="dt[1]">
<input type="hidden" id="id_distro">
<input type="hidden" id="fraccion">
<input type="hidden" id="sumafraccion">
<input type="hidden" id="id_cliente">
<input type="hidden" id="remite_beneficia">
<input type="hidden" id="cod_sucuo">
<input type="hidden" id="txt_nrocuenta">
