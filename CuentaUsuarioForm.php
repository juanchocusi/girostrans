<div id="formulario" class="row">
    <div class="col-xs-6 col-sm-4">
        <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="datos_cuenta" readonly="readonly" >
            <span class="input-group-btn">          
                <a href="#" id="btn_anula_cuenta" class="btn btn-default blue glyphicon  glyphicon-remove " title="Anula Cuenta"></a>
            </span>
        </div>
        <div class="input-group input-group-sm">
            <select class="form-control input-sm" id="listatipotran">
                <?php echo $opciones; ?>
            </select>
            <span class="input-group-btn">          
                <a href="#" id="btn_nuevatran" class="btn btn-default glyphicon glyphicon-plus blue" title="Nuevo"></a>
            </span>
        </div>
        
        <div class="input-group input-group-sm">
            <select class="form-control input-sm" id="listasucursales">
                <?php echo $optsucursales; ?>
            </select>
            <span class="input-group-btn">          
                <a href="#" id="btn_cancelatran" class="btn btn-default glyphicon glyphicon-plus-sign blue" title="Cancelar"></a>
            </span>
        </div>
        
        <div class="input-group input-group-sm ">
            <input type="text" class="form-control" id="monto" placeholder="S/. 00.00">
            <span class="input-group-btn">          
                <a href="#" id="btn_guardatran" class="btn btn-default glyphicon glyphicon-floppy-disk blue" title="Guardar"></a>
            </span>
        </div>                
        <div class="input-group input-group-sm ">                    
            <input type="text" id="observa" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control" placeholder="Dato adicional">
            <span class="input-group-btn">          
                <a href="#" id="btn_muestratabla" class="btn btn-default fa fa-list-alt blue" title="Muestra Asociados"></a>
            </span>
        </div>
        <div class="input-group input-group-sm" style="display: none">                    
            <input type="text" id="buscacuentausuario" style="text-transform: uppercase" class="form-control" placeholder="Buscar cuenta de usuario">
            <span class="input-group-btn">          
                <a href="#" id="btn_buscacuentausuario" class="btn btn-default glyphicon glyphicon-search blue" title="Buscar Cuenta de USUARIO"></a>
            </span>
        </div>
    </div>

<div class="col-xs-6 col-sm-4">
    <div id="DivUsuarioCuenta" class="table-responsive mygrid-wrapper-div1"> 
        <table id="TUsuarioCuenta" class="table table-condensed table-bordered">
            <thead >
                <tr>
                    <!--<th>Nro</th> -->
                    <th>Usuario</th>
                    <th>Banco</th>
                    <th>NroCuenta</th>
                </tr>
            </thead>                                                   
            <tbody id="tbody_UsuarioCuenta">

            </tbody>
        </table>                    
    </div>
</div>    

</div>    