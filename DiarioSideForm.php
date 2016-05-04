<div class="input-group input-group-sm">
    <input type="text" id="txtnick" class="form-control" value="<?php echo $_SESSION['nick'] ?>" readonly="readonly" >
    <input type="text" id="txtsucursal" class="form-control" value="<?php echo $_SESSION['sucursal'] ?>" readonly="readonly">
</div>                		
<div class="input-group input-group-sm">
    <input type="text" class="form-control" readonly="readonly" id="codcierrediario">
    <input type="text" class="form-control" readonly="readonly" id="fechacierrediario">
    <button type="button" id="btn_span" class="btn btn-default btn-sm blue">  <span id="span_abierto" class="glyphicon glyphicon-thumbs-up"></span> 
        <span id="span_cerrado" class="glyphicon glyphicon-lock"></span> </button>    
        <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>
</div>                                    
<div class="input-group input-group-sm">
    <span class="input-group-addon">Total Ingresos</span>
    <input type="text" class="form-control" id="total_ingresos" readonly="readonly">
</div>
<div class="input-group input-group-sm">
    <span class="input-group-addon">Total Egresos</span>
    <input type="text" class="form-control" id="total_egresos" readonly="readonly">
</div>                    
<div class="input-group input-group-sm">
    <span class="input-group-addon">Saldo Final</span>
    <input type="text" class="form-control" id="total_saldo" readonly="readonly">
</div>

<input type="text" id="fecha_cierre"  readonly="readonly" value="<?php echo $FechaHoy ?>">

<div id="divbotones" class="input-group input-group-sm">
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
</div>

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
