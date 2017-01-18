<section class="content">
<!--////////////////////////////////// Agentes ////////////////////////////////////////////-->
    <div class="row">
        <div class="col-sm-12 col-md-12">        
            <h4>Movimientos Agente</h4>
            <div class="table-responsive ">
                <table id="TResumenAgente" class="table-condensed table-bordered table-striped" >
                    <thead>
                        <tr>                        
                            <th>fecha</th>
                            <th>Banco</th>
                            <th>Nro. Cuenta</th>
                            <th>Comision ITF</th>
                            <th>Comision Atencion Agente</th>
                            <th>Otros Gastos</th>
                            <th>Saldo Cuenta</th>
                            <th>Saldo Efectivo</th>
                            <th>Gastos Agente</th>
                            <th>Utilidad Agente</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>                        
                            <th></th>
                            <th></th>
                            <th>TOTAL</th>
                            <th id="t_itf"></th>
                            <th id="t_comi_agente"></th>
                            <th id="t_otros_gastos"></th>
                            <th id="t_saldo_cuenta"></th>
                            <th id="t_saldo_efectivo"></th>
                            <th id="t_gasto_Agente"></th>
                            <th id="t_utilidad_Agente"></th>
                        </tr>
                    </tfoot>
                    <tbody id="body_ResumenAgente" >

                    </tbody>

                </table>
            </div> 

        </div>
    </div>
<!--////////////////////////////////// asociados ////////////////////////////////////////////-->
    <div class="row">    
        <div class=" col-sm-12 col-md-12">
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
                            <th>Cant. Giros</th>                            
                            <th>Comision Telegiro</th>
                            <th>Comision ITF</th>                            
                            <th>Saldo</th>
                            <th>Gastos</th>
                            <th>Utilidad</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>TOTAL</th>
                            <th id="totros_gastos"> </th>
                            <th id="tcant_giros"> </th>
                            <th id="ttelegiro"> </th>
                            <th id="titf"> </th>
                            <th id="tsaldo"> </th>
                            <th id="tgastos"> </th>
                            <th id="tutilidad"> </th>
                        </tr>
                    </tfoot>
                    <tbody id="body_ResumenAsociado" >

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--////////////////////////////// INGRESOS X SUCURSAL //////////////////////////////////-->    
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
                            <th>Importe </th>
                            <th>Cargo</th>

                            <th>Otros</th>
                            <th>Transf Recibidas</th>                            
                            <th>Ajustes</th>
                            <th>Otros Ing</th>
                            <th>Comision Recargas</th>                            

                            <th>Traslado Efe Agte>>Sucu</th>
                            <th>Traslado Efe Sucu>>Sucu</th>                            
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
                            <th id="ti_importe"></th>                            
                            <th id="ti_cargo"></th>  

                            <th id="ti_otros"></th>
                            <th id="ti_total_trecibidas"></th>
                            <th id="ti_justes"></th>
                            <th id="ti_comi_recargas"></th>                            
                            <th id="ti_otros_ing"></th>

                            <th id="ti_traslado_efe_age_sucu"></th>
                            <th id="ti_traslado_efe_sucu_sucu"></th>                            
                            <th id="ti_ingresos"></th>

                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    
    <!--////////////////////////////// GASTOS X SUCURSAL ////////////////////////////////////-->
    <div class="row">         
        <div class="col-sm-12 col-md-12">            
            <h4>Gastos x Sucursal</h4>
            <div class="table-responsive ">                
                <table id="TGastosxSucursal" class=" table-condensed table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th>Fecha       </th>
                            <th>Sucu        </th>
                            <th>Pendnts</th>
                            <th>Giro Bancos</th>
                            <th>Comision Giros</th>

                            <th>Comision Retiro</th>
                            <th>Transpo</th>
                            <th>Letras Bancos</th>
                            <th>Utiles Mante.</th>
                            <th>Servi</th>

                            <th>Aliment</th>                            
                            <th>Viaticos</th>
                            <th>Honors</th>
                            <th>Otros</th>
                            <th>Impuestos</th>
                            <th>Alquiler</th>

                            <th>Entregs</th>
                            <th>Tras. Cta Agte</th>
                            <th>Tras. Efec Sucu</th>
                            <th>Tras. Efec Asoc</th>
                            <th>Total</th>
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
                            <th id="tgiro_banco"></th>                                                        
                            <th id="tcomi_giros"></th>

                            <th id="tcomi_retiros"></th>
                            <th id="ttransporte"></th>
                            <th id="tletras"></th>
                            <th id="tutil_mante"></th>
                            <th id="tservicios"></th>                                                        

                            <th id="talimentos"></th>
                            <th id="tviaticos"></th>
                            <th id="thonorarios"></th>
                            <th id="totros" ></th>
                            <th id="timpuestos" ></th>
                            <th id="talquileres" ></th>

                            <th id="tentregados" ></th>
                            <th id="tcta_agte" ></th>
                            <th id="tefec_sucu" ></th>
                            <th id="tefec_asociado" ></th>
                            <th id="ttotal" ></th>
                            <th id="ttotal_gastos" ></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    
    <!--////////////////////////////// FLUJO DE CAJA ////////////////////////////////////////-->    
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 ">            
            <h4>FLUJO DE CAJA EFECTIVO REAL</h4>
            <div id="" class="table-responsive ">                
                <table id="TFlujoCaja" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Fecha       </th>
                            <th>Sucu        </th>
                            <th>Ingresos</th>
                            <th>Egresos</th>
                            <th>Saldo Total</th>
                            <th>Pendientes </th>
                            <th>Efectivo Neto</th>
                            <th>Utilidad x Sucursal</th>
                            <th>Gastos Netos</th>
                            <th>Ingreso Pasivo</th>
                        </tr>
                    </thead>                
                    <tbody id="body_FlujoCaja" >
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total</th>                            
                            <th id="t_ingresos"></th>
                            <th id="t_egresos"></th>
                            <th id="t_saldototal"></th>
                            <th id="t_pendientes"></th>
                            <th id="t_efectivoneto"></th>
                            <th id="t_utilxsucursal"></th>
                            <th id="t_gastosnetos"></th>
                            <th id="t_ingresopasivo"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>    
    <!--////////////////////////////// RESUMEN EFECTIVO /////////////////////////////////////-->    
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            <h4>RESUMEN TOTAL DE EFECTIVO</h4>
            <div id="" class="table-responsive ">                
                <table id="TResumenEfectivo" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Desde</th>
                            <th>Hasta</th>
                            <th>Suma Total Agente</th>
                            <th>Suma Total Saldo Ctas Asociado</th>
                            <th>Suma Total Efectivo Neto Sucursales</th>
                            <th>Liquidez Total</th>
                            <th>Total Transferencias Pendientes</th>
                            <th>Liquidez Total Neta</th>                            
                        </tr>
                    </thead>                
                    <tbody id="body_ResumenEfectivo" >
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
<!--////////////////////////////////// RESUMEN TOTAL DE UTILIDAD ////////////////////////////-->            
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            <h4>RESUMEN TOTAL DE UTILIDAD</h4>
            <div id="" class="table-responsive ">                
                <table id="TResumenUtilidad" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Desde</th>
                            <th>Hasta</th>
                            <th>TOTAL UTILIDAD AGENTE</th>
                            <th>TOTAL UTILIDAD ASOCIADO</th>
                            <th>TOTAL UTILIDAD SUCURSALES</th>
                            <th>TOTAL UTILIDAD</th>                            
                        </tr>
                    </thead>                
                    <tbody id="body_ResumenUtilidad" >
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
<!--///////////////////////////////// RESUMEN GASTOS ////////////////////////////////////////-->    
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            <h4>RESUMEN TOTAL DE EFECTIVO</h4>
            <div id="" class="table-responsive ">                
                <table id="TResumenGastos" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Desde</th>
                            <th>Hasta</th>
                            <th>Suma Gastos Agente</th>
                            <th>Suma Gastos Asociado</th>
                            <th>Suma Gastos Sucursales</th>                            
                            <th>Total Gastos</th>                            
                        </tr>
                    </thead>                
                    <tbody id="body_ResumenGastos" >
                    </tbody>
                </table>
            </div>
        </div>
    </div>
<!--///////////////////////////////// INGRESO PASIVO ////////////////////////////////////////-->    
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">            
            <h4>RESUMEN TOTAL DE EFECTIVO</h4>
            <div id="" class="table-responsive ">                
                <table id="TResumePasivo" class=" table-condensed table-bordered ">
                    <thead>
                        <tr>
                            <th>Desde</th>
                            <th>Hasta</th>
                            <th>Ingreso Pasivo</th>                                        
                        </tr>
                    </thead>                
                    <tbody id="body_ResumenPasivo" >
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
    
</section>