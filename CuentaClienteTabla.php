<div class="container-fluid">
    <div class="mensaje"></div>
    <!--<div class="container-fluid">-->
    <div class="row">
        <div class="col-lg-12">                        
            <a href="#menu-toggle" class="btn btn-default btn-xs dorado" id="menu-toggle"  title="Menu Lateral">Menu</a>
            <div  class="table-responsive">
                <table id="TMovsCuentaCliente" class="table-condensed table-bordered table-hover">
                    <thead >
                        <tr>                            
                            <th>Nro</th>
                            <th style="display: none" >idtran</th>                            
                            <th>                        Nro. Cuenta</th>
                            <th>                        Fecha Registro</th>
                            <th>                        Motivo</th>              
                            <th>                        Datos Adicionales</th>
                            <th align='right'>          Ingreso</th>               
                            <th align='right'>          Salida</th>                
                            <th align='right'>          Saldo</th>
                            <th style="display: none">  N</th>
                            <th width='80'></th>

                        </tr>
                    </thead>
                    <tfoot >
                        <tr>                            
                            <th>Nro</th>
                            <th style="display: none" ></th>                            
                            <th>                        Nro. Cuenta</th>
                            <th>                        Fecha Registro</th>
                            <th>                        Motivo</th>              
                            <th>                        Datos Adicionales</th>
                            <th id='total_i' ></th>               
                            <th id='total_s' ></th>
                            <th align='right'> </th>
                            <th style="display: none">  N</th>  
                            <th ></th>

                        </tr>
                    </tfoot>
                    <tbody id="tbody_MovsCuentaCliente" 

                </tbody>
            </table>
        </div>

    </div>
</div>

</div> 


<!--//////////////////////// dialogos/////////////////////////////////-->    
<div id="dialogo_edita">
    <div class="input-group-sm">
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Motivo</span>
            <input type="text" class="form-control"  id="motivo_edit" readonly>
            <span id="span_idcliente" class="input-group-addon"></span>
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Datos Adicionales</span>
            <input type="text" class="form-control" id="observa_edit" onkeyup='javascript:this.value = this.value.toUpperCase();' >
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Fecha Registro</span>
            <input type="text" class="form-control" id="fecha_registro" disabled>
        </div>
        <div class="input-group input-group-sm"> 
            <span class="input-group-addon">Nuevo Monto</span>
            <input type="text" class="form-control" id="monto_edit">
        </div>

    </div> 
</div>    
