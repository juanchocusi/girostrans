<div id="formulario" class="row">

    <div class="col-sm-12 col-xs-12 col-md-6 col-lg-4 ">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control dorado" id="dato_buscar" onkeyup='javascript:this.value = this.value.toUpperCase();'>
            <span class="input-group-btn">
                <select id="optBusca"  class="btn btn-default dorado"> 
                    <option value="D">DNI </option> 
                    <option value="A">Apellido </option>                  
                </select>                
                <button type="button" id="btn_buscarcuentas" class="btn fa fa-search dorado"> </button>
            </span>
        </div>    
        <div id="DivCuentaCliente" class="table-responsive"> 
            <table id="TBuscaCuentasCliente" class="table-condensed table-bordered table-hover">
                <thead >
                    <tr>
                        <th></th>
                        <th>DNI</th>
                        <th>Nro. Cuenta</th>
                        <th>Nombre de Cliente</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody id="tbody_BuscaCuentasCliente">
                    
                </tbody>
            </table>
        </div>
    </div>    

    <div class="col-sm-12 col-xs-12 col-md-6 col-lg-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control dorado" id="datos_cuenta" readonly="readonly" >
            <span class="input-group-btn">          
                <a href="#" id="btn_anula_cuenta" class="btn btn-default dorado glyphicon  glyphicon-user" title="Datos de Cliente"></a>
            </span>
        </div>
        <div class="input-group input-group-sm">
            <select class="form-control input-sm dorado" id="listatipotran">
                <?php echo $opciones; ?>
            </select>
            <span class="input-group-btn">          
                <a href="#" id="btn_nuevatran" class="btn btn-default glyphicon glyphicon-plus dorado" title="Nuevo"></a>
            </span>
        </div>       

        <div class="input-group input-group-sm ">
            <input type="text" class="form-control dorado" id="monto" placeholder="S/. 00.00">
            <span class="input-group-btn">          
                <a href="#" id="btn_guardatran" class="btn btn-default glyphicon glyphicon-floppy-disk dorado" title="Guardar"></a>
            </span>
        </div>                
        <div class="input-group input-group-sm ">                    
            <input type="text" id="observa" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control dorado" placeholder="Dato adicional">
            <span class="input-group-btn">          
                <a href="#" id="btn_cancelatran" class="btn btn-default fa fa-2x fa-ban dorado" title="Cancelar Transaccion"></a>
            </span>
        </div>
        
        <div class="input-group input-group-sm">
            <input type="text" class="dorado" id="fechai" value="<?php echo date("Y-m-d"); ?>">
            <input type="text" class="dorado" id="fechaf" value="<?php echo date("Y-m-d"); ?>"> 
            <button id="btn_movscuenta" type="button" class="btn btn-default btn-xs fa fa-list-ol dorado" ></button>
            <button id="btn_imprime_movs" type="button" class="btn btn-default btn-xs glyphicon glyphicon-print dorado" ></button>
        </div>            

    </div>

</div>