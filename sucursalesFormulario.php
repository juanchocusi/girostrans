<div class="row">
    <div class="col-xs-6 col-sm-4">
        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">Nombre</span>    
            <input type="text" class="form-control" id="nombre" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Nombre" >
        </div>    
        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">Codigo</span>    
            <input type="text" class="form-control" id="codigo" maxlength="3" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Codigo">                            
        </div>
        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">Direccion</span>    
            <input type="text" class="form-control" id="direccion" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Direccion">
        </div>    
    </div>    
    <div class="col-xs-6 col-sm-4">    
        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">Telefonos</span>                        
            <input type="text" class="form-control" id="telefono" onkeyup='javascript:this.value = this.value.toUpperCase();'  placeholder="Telefonos">
        </div>    
        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">e-mail</span>                        
            <input type="text" class="form-control" id="email"  onkeyup='javascript:this.value = this.value.toUpperCase();'     placeholder="e-mail">
        </div>    
<!--        <div id="divmonto" class="input-group input-group-sm">
            <span class="input-group-addon">Empresa</span>                        
            <select class=" form-control input-sm"   id="listaempresa"> 
                <option value="0">Seleccione...</option>
                <option value="M">MONEY FLASH</option>
                <option value="P">PANTERA</option>
            </select>
        </div>    -->
    </div>
    <div class="col-xs-6 col-sm-4">
        <button type="button" id="btn_nuevo"    class="btn btn-default btn-xs blue">Nuevo</button>
        <button type="button" id="btn_guardar"  class="btn btn-default btn-xs blue">Guardar</button>
        <button type="button" id="btn_cancelar" class="btn btn-default btn-xs blue">Cancelar</button>                    

        <div class="input-group input-group-sm ">
            <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">                        
        </div>            
    </div>
</div>
