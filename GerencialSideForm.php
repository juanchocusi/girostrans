<div class="input-group input-group-sm">
    <input type="text" id="txtnick" class="form-control" value="<?php echo $_SESSION['nick'] ?>" readonly="readonly" >    
</div>                		
<div class="input-group input-group-sm">    
    <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>
    <button type="button" id="btn_totalizar" class="btn btn-default btn-sm blue"> Totales <span class="fa fa-bars"></span>  </button>    
        
</div>                                    
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Saldos Asociados+Agentes</span>
    <input type="text" class="form-control blue" id="total_AsociadosAgentes" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Comisiones+ITF+Gastos</span>
    <input type="text" class="form-control blue" id="suma_comi_itf" readonly="readonly">
    
</div>
<input type="text" class="form-control blue" id="total_1" readonly="readonly">
<br>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Ctas x Pagar</span>
    <input type="text" class="form-control  blue" id="suma_ctaxpagar" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Ctas x Cobrar</span>
    <input type="text" class="form-control blue" id="suma_ctaxcobrar" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Pendientes</span>
    <input type="text" class="form-control blue" id="suma_pendientes" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Total Efectivo Neto Sucursales</span>
    <input type="text" class="form-control blue" id="total_efectivo_neto" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Suma Total Gastos Sucursales</span>
    <input type="text" class="form-control blue" id="total_gastos_sucursales" readonly="readonly">
</div>

<input type="text" id="fecha_cierre"  readonly="readonly" value="<?php echo $FechaHoy ?>">

<!--<div id="divbotones" class="input-group input-group-sm">
    <button type="button" id="btn_nuevo" class="btn btn-default btn-xs blue">Nuevo</button>
    <button type="button" id="btn_cerrar"  class="btn btn-default btn-xs blue" title="Cerrar Diario"><strong>Cerrar Diario</strong></button>
    <button type="button" id="btn_recargadetalle"   class="btn btn-default btn-xs blue" onclick="FnCargaDetalle();">CargaDetalles</button>
    <button type="button" id="btn_recalculatotales" class="btn btn-default btn-xs blue ocultame" onclick="FnCalculaTotales();">CalculaTotales</button>
    <button type="button" id="btn_actualizasaldos" class="btn btn-default btn-xs blue" title="Actualiza Saldos">Actualiza Saldos</button>
    <button type="button" id="imprimediario" class="btn btn-default btn-xs"><strong>Imprime Diario</strong></button>
    <button type="button" id="btn_dinero" class="btn btn-default btn-xs blue">
        <span class="fa fa-money fa-2x"></span>
    </button>
    <button type="button" id="btn_cargalistadiarios" class="btn btn-default btn-xs blue" onclick="FnCargaListaDiarios();" title="Carga Lista Diarios">
        <span class="fa fa-retweet fa-2x"></span>
    </button>
</div>-->

<div id="" class="mygrid-wrapper-divd">
    <table id="lista_diario" class="table table-condensed table-bordered table-hover table-striped">
        <thead>
            <tr>
                <td>Fecha</td>
                <td>SaldoI</td>                     
                <td>SaldoF</td>
                <td>Estado</td>
            </tr>
        </thead>
        <tbody id="body_listadiario" >

        </tbody>
    </table>
</div>
