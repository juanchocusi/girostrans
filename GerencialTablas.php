<div class="row">
<div class="row">
    <!--///////////////////////// Agentes /////////////////////////////////-->
    <div class="col-sm-6 col-xs-6 col-md-6">        
<!--        <div class="input-group input-group-sm ">
                <span class="input-group-addon">Inicio</span>
                <input type="text" id="fechai" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
                <span class="input-group-addon">Fin</span>
                <input type="text" id="fechaf" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
                
            </div>-->
        Movimientos Agente
        <div class="table-responsive ">
            <table id="TResumenAgente" class="table-condensed table-bordered" >
                <thead>
                    <tr>                        
                        <th>fecha</th>
                        <th>Banco</th>
                        <th>Nro.de.Cuenta AGENTE</th>
                        <th>Comision ITF</th>
                        <th>Otros Gastos</th>
                        <th>Saldo Cuenta</th>
                        <th>Saldo Efectivo</th>                        
                    </tr>
                </thead>
                <tfoot>
                    <tr>                        
                        <th></th>
                        <th></th>
                        <th>TOTAL</th>
                        <th id="t_ci"></th>
                        <th id="t_ogastos"></th>
                        <th id="tsaldo_cuenta"></th>
                        <th id="tsaldo_efectivo"></th>
                    </tr>
                </tfoot>
                <tbody id="body_ResumenAgente" >

                </tbody>

            </table>
        </div> 

    </div>
    <!--///////////////////////// asociados /////////////////////////////////-->
    <div class=" col-sm-6 col-xs-6 col-md-6 ">
        
<!--        <div class="input-group input-group-sm ">
        <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Menu Lateral">Menu</a>
        <button type="button" id="btn_buscar" class="btn fa fa-search blue"> </button>
        <div id="carga" style="display:none"> <img src="img/loading_bar.gif"> </div>
        </div>-->
        Movimientos Asociados
        <div  class="table-responsive ">
            <table id="TResumenAsociado" class="table-condensed table-bordered">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Banco</th>
                        <th>Nro. Cuenta</th>
                        <th>Otros Gastos</th>
                        <th>Comi Internet</th>
                        <th>Bono</th>                        
                        <th>Comision ITF</th>
                        <th>Saldo</th>                        
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>TOTAL</th>
                        <th id="t_ogastosa"> </th>
                        <th id="t_comi_internet"> </th>
                        <th id="t_bono"> </th>
                        <th id="total_ci"> </th>
                        <th id="tsaldo_asociado"> </th>
                    </tr>
                </tfoot>
                <tbody id="body_ResumenAsociado" >

                </tbody>
            </table>
        </div>
    </div>
</div>    
<!--/////////////////////////////////////////////////////////////////////////////////////////-->
<div class="row">         
    <div class="col-sm-12 col-md-12">
        
        <div id="divtabla" class="table-responsive ">
            Gastos x Sucursalasasa
            <table id="TRGastosxSucursal" class=" table-condensed table-bordered ">
                <thead>
                    <tr>
                        <th>Fecha       </th>
                        <th>Sucu        </th>
                        <th>S.Ini        </th>
                        <th>Varios      </th>
                        <th>Letras      </th>
                        <th>Otros       </th>
                        <th>Cta x Cobrar  </th>
                        <th>Cta x Pagar   </th>
                        <th>Pendientes  </th>
                    </tr>
                </thead>                
                <tbody id="body_GastosxSucursal" >
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th id="tsaldoi"></th>
                        <th id="tvarios"></th>
                        <th id="tletras"></th>
                        <th id="totros"></th>
                        <th id="tctasxp"></th>
                        <th id="tctasxc"></th>
                        <th id="tpendientes"></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<!--///////////////////////////////// RESUMEN : INGRESOS : SALDO INICIAL /////////////////////////////////////////-->
<div class="row">         
    <div class="col-sm-12 col-md-12">
        
        <div id="divtabla" class="table-responsive ">
            RESUMEN INGRESOS: SALDO INICIAL 
            <table id="TRGastosxSucursal" class=" table-condensed table-bordered ">
                <thead>
                    <tr>
                        <th>Fecha       </th>
                        <th>Sucu        </th>
                        <th>Saldo Ininical</th>
                        <th>Retiro Bancos</th>
                        <th>Transf. Recibidas </th>
                        <th>Cuentas x Cobrar</th>
                        <th>Pago Sobregiros</th>
                        <th>Otros Ingresos</th>
                        <th>Ingreso: Traslados de Efectivo </th>
                        <th>Total Ingresos</th>                        
                    </tr>
                </thead>                
                <tbody id="body_resumen_saldo_inicial" >
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th id="rsi_t_saldoi"></th>
                        <th id="rsi_t_retiros"></th>
                        <th id="rsi_t_transf_recibidas"></th>
                        <th id="rsi_t_ctasxcobras"></th>
                        <th id="rsi_t_sobregiro"></th>
                        <th id="rsi_t_otros_ing"></th>
                        <th id="rsi_t_traslado_efectivo"></th>
                        <th id="rsi_t_ingresos"></th>                        
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<!--///////////////////////////////// TRANSFERENCIAS ENTREGADAS Y GASTOS X SUCURSAL /////////////////////////////////////////-->
<div class="row">         
    <div class="col-sm-12 col-md-12">
        
        <div id="divtabla" class="table-responsive ">
            TRANSFERENCIAS ENTREGADAS Y GASTOS X SUCURSAL
            <table id="TRGastosxSucursal" class=" table-condensed table-bordered ">
                <thead>
                    <tr>
                        <th>Fecha       </th>
                        <th>Sucu        </th>
                        <th>Total Entregados</th>
                        <th>Costos Fijos </th>
                        <th>Letras Bancos</th>
                        <th>Gasolina</th>
                        <th>Alimentos</th>
                        <th>Sobregiro</th>
                        <th>Cuentas x Pagar</th>
                        <th>Viaticos</th>
                        <th>Otros Ajustes(Sal)</th>
                        <th>Pago de Giro</th>
                        <th>Salida de Efectivo</th>
                        <th>Total</th>
                    </tr>
                </thead>                
                <tbody id="body_te_gastosxsucursal" >
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th id="gxs_t_entregados"></th>
                        <th id="gxs_t_costos_fijos"></th>
                        <th id="gxs_t_letras"></th>
                        <th id="gxs_t_gasolina"></th>
                        <th id="gxs_t_alimentos"></th>
                        <th id="gxs_t_sobregiro"></th>
                        <th id="gxs_t_ctas_x_pagar"></th>
                        <th id="gxs_t_viaticos"></th>
                        <th id="gxs_t_otros_ajustes"></th>
                        <th id="gxs_t_pago_giros"></th>
                        <th id="gxs_t_salida_efectivo"></th>                        
                        <th id="gxs_t_total"></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>

</div>
