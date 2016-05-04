<section class="content">
    <div class="row">
        <!--///////////////////////// Agentes /////////////////////////////////-->
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">        
            <h4>Movimientos Agente</h4>
            <div class="table-responsive ">
                <table id="TResumenAgente" class="table-condensed table-bordered table-striped" >
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
        <div class=" col-sm-12 col-xs-12 col-md-12 col-lg-6">
            <h4>Movimientos Asociados</h4>
            <div  class="table-responsive ">
                <table id="TResumenAsociado" class="table-condensed table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Usuario</th>
                            <th>Banco</th>
                            <th>Nro. Cuenta</th>
                            <th>Otros Gastos</th>
                            <th>Comision Internet Salida</th>
                            <th>Comision Internet Ing</th>                        
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
    </div><!-- /.row -->
<!--///////////////////////////////// INGRESOS X SUCURSAL /////////////////////////////////////////-->    
    <div class="row">    
        <div class="col-sm-12 col-md-12">            
            <h4> Ingresos x Sucursal</h4>
            <div id="divtabla" class="table-responsive ">                
                <table id="TIngresosxSucursal" class=" table-condensed table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th>Fecha       </th>
                            <th>Sucu        </th>
                            <th>Saldo Ininical</th>
                            <th>Retiro Bancos</th>
                            <th>Transf. Recibidas </th>
                            <th>Cuentas x Cobrar</th>                            
                            <th>Otros Ingresos</th>
                            <th>Traslados de Efectivo </th>
                            <th>Total Ingresos</th>                        
                        </tr>
                    </thead>                
                    <tbody id="body_IngresosxSucursal" >
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th id="ti_saldoi"></th>
                            <th id="ti_retiro_banco"></th>
                            <th id="ti_transf_recibidas"></th>
                            <th id="ti_ctasxcobras"></th>                            
                            <th id="ti_otros_ing"></th>
                            <th id="ti_traslado_efectivo"></th>
                            <th id="ti_totales_i"></th>                        
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    
    <!--////////////////////////////// GASTOS X SUCURSAL ////////////////////////////////////////////////////////-->
    <div class="row">         
        <div class="col-sm-12 col-md-12">
            <!--<a href="#menu-toggle" class="btn btn-default btn-xs blue" id="btn_vergiros" title="Oculta Barra Lateral">Ver Giros</a>-->
            <h4>Gastos x Sucursal</h4>
            <div class="table-responsive ">                
                <table id="TGastosxSucursal" class=" table-condensed table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th>Fecha       </th>
                            <th>Sucu        </th>
                            
                            <th>Pendientes</th>
                            <th>Varios</th>
                            <th>Letras      </th>
                            <th>Combustibles      </th>
                            <th>Alimentos      </th>
                            <th>Viaticos      </th>
                            <th>Cta x Pagar   </th>
                            <th>Otros       </th>
                            <th>Entregados  </th>                            
                            <th>Traslado Efectivo  </th>
                            <th>Totales  </th>
                            <th>Total Gastos</th>
                        </tr>
                    </thead>                
                    <tbody id="body_GastosxSucursal" >
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>                            
                            <th>Total</th>
                            
                            <th id="tpendientes"></th>
                            <th id="tvarios"></th>                                                        
                            <th id="tletras"></th>
                            <th id="tcombustibles"></th>
                            <th id="talimentos"></th>
                            <th id="tviaticos"></th>
                            <th id="tctasxpagar"></th>
                            <th id="totros"></th>                                                        
                            <th id="tentragados"></th>
                            <th id="ttraslado_efectivo"></th>
                            <th id="ttotales_s" ></th>
                            <th id="totalesgastos" ></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    

    <div class="row">
    <!--///////////////////////////////// FLUJO DE CAJA /////////////////////////////////////////-->    
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            <h4>FLUJO DE CAJA EFECTIVO REAL</h4>
            <div id="" class="table-responsive ">                
                <table id="TFlujoCaja" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Fecha       </th>
                            <th>Sucu        </th>
                            <th>Ingresos - Egresos</th>                            
                            <th>Transf. Pendientes </th>
                            <th>Efectivo Neto</th>                                                        
                        </tr>
                    </thead>                
                    <tbody id="body_FlujoCaja" >
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total</th>                            
                            <th id="ingresos_salidas"></th>
                            <th id="transf_pendientes"></th>                            
                            <th id="efectivo_neto"></th>                            
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    
<!--    <div class="row">
    ///////////////////////////////// FLUJO DE CAJA /////////////////////////////////////////    
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            FLUJO DE CAJA
            <div id="" class="table-responsive ">                
                <table id="TFlujoCajaE" class=" table-condensed table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th>Descripcion </th>
                            <th>Monto </th>                                                                             
                        </tr>
                    </thead>                
                    <tbody id="body_FlujoCajaE" >
                        <tr>
                            <td> aaaaaaaaaaa</td>
                            <td> 11111111111</td>
                        </tr>
                        <tr>
                            <td> bbbbbbbb</td>
                            <td> 2222222222222222</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th id="total_flujocajae" ></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    -->
    
</section>