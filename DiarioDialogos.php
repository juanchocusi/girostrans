<div id="dialogo_dinero" >
    <?php echo $_SESSION['sucursal'] ?>    
    <div id="divdinero" class="table-responsive"> 
        <table id="tabla_dinero" class="table table-condensed table-bordered">
            <thead >
                <tr>                            
                    <th>Itm</th>
                    <th class="ocultame">coddiario</th>
                    <th>S/.</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tfoot>
                <tr>                            
                    <th></th>
                    <th class="ocultame"></th>
                    <th ></th>
                    <th align="right">Total</th>
                    <th id="total_dinero"></th>
                </tr>
            </tfoot>
            <tbody id="body_dinero">

            </tbody>
        </table>        
    </div>
    
    <div class="input-group input-group-sm">
        <span class="input-group-addon">Saldo Final::: </span>                
        <!--<input type="text" class="form-control" id="d_saldo_final" >-->
        <label id="d_saldo_final" for="female" class="form-control" ></label>
    </div>    
    <div class="input-group input-group-sm">
        <span class="input-group-addon">Efectivo::::::::: </span>
        <!--<input type="text" class="form-control " id="d_total_efectivo" READONLY>--> 
        <label id="d_total_efectivo" for="d_saldo_final" class="form-control" ></label>
    </div>
    <div class="input-group input-group-sm">
        <span class="input-group-addon">Diferencia::::: </span>
        <!--<input type="text" class="form-control " id="d_diferencia" READONLY>-->
        <label id="d_diferencia"  class="form-control" ></label>
    </div>        
    <?php echo $_SESSION['nick'] ?>
    <?php echo $Fechahora ?>
    <button type="button" id="imprime_dinero" class="btn btn-default btn-sm blue" title="Imprimir Ingreso">
        <span class="glyphicon glyphicon-print"></span>
    </button>
</div>  

<div id="dialogo_distribucion">
    <select id="opciones_distribucion" > 
	<option value='0'>Elige Opción</option> 
	<option value='A'>Agente</option> 
	<option value='U'>Asociado</option> 
	<option value='S'>Sucursal</option> 
    </select>
    <select class=" form-control input-sm ocultame" id="lista_agentes"> <?php echo $agt ?> </select>
    <select class=" form-control input-sm ocultame" id="lista_asociados"> <?php echo $asociados ?> </select>
    <select class=" form-control input-sm ocultame" id="lista_sucursales_distro"> <?php echo $optsucursales ?> </select>
    <div id="" class="input-group input-group-sm">
        <input type="text" id="txt_fraccion_distro" class=" form-control input-sm" placeholder="00.00"/>
        <button type="button" id="btn_inserta_fraccion" class="btn btn-default btn-sm blue" title="Inserta Fraccion">
        <span class="fa fa-download fa-lg"></span>
        </button>
    </div>
    
    <div class="table-responsive"> 
        <table id="tabla_distribucion" class="table-condensed table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>Itm</th>
                    <th class="ocultame">id</th>  
                    <th class="ocultame">id</th>  
                    <th>Nro.Cuenta</th>
                    <th>Agente Asociado</th>
                    <th class="ocultame">estado</th>  
                    <th>Fraccion</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tfoot>
                <tr>                            
                    <th></th>
                    <th></th>
                    <th class="ocultame"></th>
                    <th class="ocultame"></th>
                    <th></th>
                    <th class="ocultame"></th>
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
        <button type="button" id="btn_aplica_distro" class="btn btn-default btn-xs blue" title="Imprimir Ingreso"> Aplicar Distribución
            <span class="glyphicon glyphicon-cloud-download"></span>
        </button>
        
        <button type="button" id="btn_cancela_distro" class="btn btn-default btn-xs blue" title="Cancelar"> Cancelar Distribución
            <span class="glyphicon glyphicon-remove-circle"></span>
        </button>
    </div>
    <label id="mensajito" for="mensaje">Este Ingreso ya fue DISTRIBUIDO...</label>
</div>

<div id="dialogo_asociados" >
    <div class="table-responsive"> 
        <table id="tabla_usuariocuenta" class="table table-condensed table-bordered">
            <thead >
                <tr>                            
                    <th>Usuario</th>
                    <th>Banco</th>
                    <th>NroCuenta</th>
                </tr>
            </thead>                                                   
            <tbody id="tbody_usuarioucenta">

            </tbody>
        </table>                    
    </div>        
</div>  
<div id="dialogo_agentes" >
    <div class="table-responsive"> 
        <table id="tabla_cuentaagente" class="table table-condensed table-bordered">
            <thead >
                <tr>                            
                    <th>NroCuenta</th>
                    <th>Iniciales</th>
                    <th>Nombre Banco</th>                    
                </tr>
            </thead>                                                   
            <tbody id="tbody_cuentaagente">

            </tbody>
        </table>                    
    </div>        
</div>  

<!--</div>-->
</div> <!-- /#page-content-wrapper -->        
<input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal'] ?>">
<input type="hidden" id="nombresucursal" value="<?php echo $_SESSION['sucursal'] ?>">
<input type="hidden" id="nusuario" value="<?php echo $_SESSION['nick'] ?>">
<input type="hidden" id="nombreusuario" value="<?php echo $_SESSION['usuario'] ?>">
<input type="hidden" id="tusuario" value="<?php echo $_SESSION['tipousuario'] ?>">
<input type="hidden" id="id_detalle">
<input type="hidden" id="opt_insert">
<input type="hidden" id="tingresos">
<input type="hidden" id="trecepcion">
<input type="hidden" id="tegresos">
<input type="hidden" id="tentrega">
<input type="hidden" id="tpendiente">
<input type="hidden" id="fechadehoy" value="<?php echo $FechaHoy ?>" >
<input type="hidden" id="fechahoradehoy" value="<?php echo $Fechahora ?>" >
<input type="hidden" id="estado">
<input type="hidden" id="numletras">
<input type="hidden" id="selei" value="I[0]" >
<input type="hidden" id="selee" value="E[0]" >
<input type="hidden" id="seled" value="d[0]" >
<input type="hidden" id="seleld" value="LD[0]" >
<input type="hidden" id="seleldd" value="LD[0]" >
<input type="hidden" id="sele_cu" value="cu[0]" >
<input type="hidden" id="sele_ag" value="ag[0]" >
<input type="hidden" id="seledistro" value="dt[1]" >
<input type="hidden" id="old_saldofinal">
<input type="hidden" id="opt_sele">
<input type="hidden" id="denominacion">
<input type="hidden" id="saldo_ala_fecha">
<input type="hidden" id="recarga_dataTables">
<input type="hidden" id="cuenta_destino">
<input type="hidden" id="id_concepto_i">
<input type="hidden" id="id_concepto_e">
<input type="hidden" id="id_distro">
<input type="hidden" id="fraccion">
<input type="hidden" id="sumafraccion">
<input type="hidden" id="nrocuenta_asociado">
<input type="hidden" id="nrocuenta_agente">




