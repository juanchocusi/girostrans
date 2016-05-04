        
        <div id="dialogo_asigcuenta" title="Asigna Cuentas a Usuario"  > 
            <div class="input-group-sm">    
                <input type="text" id="txt_datosusuario" readonly="readonly" />     
                <!--Autocompleta -->
                <input type="text" id="txt_bancos" style="text-transform:uppercase"  placeholder="Bancos" /> 

                <input type="text" id="txt_nrocuenta" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Nro. de Cuenta" />

                <button type="button" id="btn_asignacuenta"  onclick="" title="Guardar" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-floppy-disk blue"></span>
                </button>
                <button type="button" id="btn_nuevacuenta"  onclick="" title="Nuevo" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-file blue"></span>
                </button>
                <button type="button" id="btn_cancelacuenta"  onclick="" title="Eliminar" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-remove-circle blue"></span>
                </button>
            </div>
            
            <div class="table-responsive" > 
                <table id="tabla_bancos" class="table table-condensed ">
                    <thead>
                        <tr>
                            <th>Itm</th>
                            <th class="ocultame" >idbanco</th>
                            <th>Descripcion</th>                    
                        </tr>
                    </thead>
                    <tbody id="body_bancos"> </tbody>
                </table>
            </div>
            
            <div class="table-responsive" > 
                <table id="tabla_cuentas" class="table table-condensed ">
                    <thead>
                        <tr>
                            <th>Nro. </th>
                            <th>Nro. Cuenta</th>
                            <th>Banco</th>                    
                        </tr>
                    </thead>
                    <tbody id="tbody_cuentas" title="Para EDITAR - ELIMINAR --> Click" >
                    </tbody>
                </table>
            </div>
        </div>        
        
        <div id="dialogo_asigsucursal" title="Asigna Sucursal a Usuario"  > 
            <div class="input-group-sm">    
                <input type="text" id="txt_datosus" readonly="readonly" />                     

                <button type="button" id="btn_asignasucursal" title="Guardar" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-floppy-disk blue"></span>
                </button>
                <button type="button" id="btn_nuevasucursal" title="Agregar Sucursal" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-file blue"></span>
                </button>
                <button type="button" id="btn_eliminasucursal" title="Cancelar" class="btn btn-default btn-xs">
                    <span class="glyphicon glyphicon-remove-circle blue"></span>
                </button>
                <!--Autocompleta -->
                <input type="text" id="txt_sucursal" class="ocultame" style="text-transform:uppercase"  placeholder="Busca Sucursales" />
            </div>    
            <div class="table-responsive" > 
                <table id="tabla_usuariosucursal" class="table table-condensed ">
                    <thead>
                        <tr>
                            <th>Nro. </th>
                            <th>Usuario</th>
                            <th>Sucursal</th>                    
                        </tr>
                    </thead>
                    <tbody id="tbody_usuariosucursal" title="Para ELIMINAR --> Click" >
                    </tbody>
                </table>
            </div>
        </div>

        <input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" > 
        <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" > 
        <input type="hidden" id="opproceso" value="L">
        <input type="hidden" id="idusuario" >
        <input type="hidden" id="codsucursal" >
        <input type="hidden" id="cod_sucursal"           value="<?php echo $_SESSION['codsucursal']?>">
        <input type="hidden" id="datossucursal" >
        <input type="hidden" id="txt_idbanco" >
        <input type="hidden" id="opver" value="mas">
        <input type="hidden" id="sele_us" value="u.s[0]" >
        <input type="hidden" id="sele_as" value="u[0]"> <!-- como bandera al seleccionar filas -->
        <input type="hidden" id="sele_asc" value="us[0]">
        <input type="hidden" id="sele_b" value="b[0]">