<div id="dialogo_asigcuenta" title="Cuentas"  >
    <div class="input-group input-group-sm">                                
        <input type="text" id="descbanco" name="descbanco" style="text-transform:uppercase" class="form-control" placeholder="Nombre Banco" readonly/>
        <span class="input-group-btn">                    
            <a href="#" id="btnbuscabancos" class="btn btn-default glyphicon glyphicon-search"></a>
        </span>                
    </div>
    <input type="text" id="etxt_bancos" name="etxt_bancos" style="display:none" class="form-control" style="text-transform:uppercase" placeholder="Busca Banco" />    
    <input type="text" id="datoscuenta" name="datoscuenta" style="text-transform:uppercase"  class="form-control" placeholder="Cuenta" readonly/>
    <input type="text" id="nrodeoperacion" name="nrooperacion" style="text-transform:uppercase" class="form-control" placeholder="Nro de Operacion" />
    <div id="carga1" ></div>

    <table id="tabla_bancos" class="table table-condensed ">
        <thead>
            <tr>
                <th>Nro. </th>
                <th class="oculto">idbanco</th>
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

<!--============================ Saldo Disponible ============================== -->
<div id="dialogo_SaldoDisponible">
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
<!-- PAGA CON AGENTE -->
<div id="dialogo_pagaagente" title="Paga con cuenta de Agente"  >
    <input type="text" id="datos_cuenta"     style="text-transform:uppercase" class="form-control" placeholder="Cuenta" />
    <input type="text" id="nro_deoperacion"  style="text-transform:uppercase" class="form-control" placeholder="Nro. de Operación" />
    <div id="carga1" ></div>
    <table id="tabla_agentes" class="table table-condensed ">
        <thead>
            <tr>
                <th>Nro. </th>
                <th class="oculto">idbanco</th>
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

<input type="hidden" id="sele_f" value="G[1]" >
<input type="hidden" id="correlativo" >
<input type="hidden" id="nombresb" >
<input type="hidden" id="grupo" >
<input type="hidden" id="codsucursal"            value="<?php echo $_SESSION['codsucursal'] ?>">
<input type="hidden" id="nick"                   value="<?php echo $_SESSION['nick'] ?>" >
<input type="hidden" id="tipousuario"            value="<?php echo $_SESSION['tipousuario'] ?>">    
<input type="hidden" id="mi_token"               value="<?php echo $_SESSION['mi_token'] ?>">    
<input type="hidden" id="idbanco" >
<input type="hidden" id="datapago" >
<input type="hidden" id="txt_nrocuenta">
<input type="hidden" id="txtnrooperacion">
<input type="hidden" id="codgirosucu">
<input type="hidden" id="importe">
<input type="hidden" id="fecha_entrega">
