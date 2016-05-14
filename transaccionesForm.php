<div class="row">
<div class="col-xs-6 col-sm-4">
    <div class="input-group input-group-sm">
        <span id="tipo" class="input-group-addon">Descripcion</span>
        <input type="text" class="form-control" id="descripcion" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Descripcion">
    </div>
    <div class="input-group input-group-sm">
        <span id="tipo" class="input-group-addon" title="Con respecto al EFECCTIVO">Tipo</span>
        <select class="form-control" id="select_tipo" > <option value="I">Ingreso</option> <option value="S">Salida</option> </select>
    </div>

    <div class="input-group input-group-sm">
        <span id="cuenta" class="input-group-addon" title="Afecta a:">Afecta a:</span>             
        <select class="form-control" id="select_afecta"  > <option value="C">Efectivo</option> <option value="C">Cuenta</option> <option value="EC">Efectivo-Cuenta</option> </select>
    </div>      
</div>
<div class="col-xs-6 col-sm-4">    
    <div class="input-group input-group-sm">
        <span id="cuenta" class="input-group-addon" title="Pertenece a:">Pertenece a:</span>             
        <select class="form-control" id="select_pertence"  > <option value="A">Agente</option> <option value="CA">CtaAsociado</option> </select>
    </div>      
    <input type="button" id="btn_nuevo"    class="btn btn-default  btn-xs blue" value="Nuevo" >
    <input type="button" id="btn_guardar"  class="btn btn-default  btn-xs blue" value="Guardar">
    <input type="button" id="btn_cancelar" class="btn btn-default  btn-xs blue" value="Cancelar">

    <input type="text" class="form-control blue" id="buscador" placeholder="Buscar" style="text-transform:uppercase" >
</div>    
</div>