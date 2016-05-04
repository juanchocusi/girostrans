<div class="container-fluid">
  
  <div class="col-xs-6 col-sm-4">
    <div class="input-group input-group-sm">
    <span class="input-group-addon">Periodo</span>  
      <select class=" form-control input-sm" id="lista_periodo">  
        <option value="DIA">Diario</option> <option value="MES">Mensual</option>
      </select>
    </div>
    
      <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">
    
  </div>
  
  <div class="col-xs-6 col-sm-4">
    <div class="input-group input-group-sm ">
      <span class="input-group-addon">Inicio</span>
      <input type="text" id="fechai" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
    </div>
    <div id="div_fechaf" class="input-group input-group-sm">
      <span class="input-group-addon ">Final.</span>
      <input type="text" id="fechaf" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
    </div>
  </div>

  <div class="col-xs-6 col-sm-4">
    <div class="input-group input-group-sm">
      <span class="input-group-addon">Empresa</span>  
      <select class=" form-control input-sm" id="lista_empresas">  
        <option value="M">Money</option> 
        <option value="P">Pantera</option>
      </select>
    </div>
    
    <div class="input-group input-group-sm">
      <select class=" form-control input-sm" id="lista_sucursales"> <?php echo $optsucursales ?> </select>
      <span class="input-group-btn">
        <button type="button" id="btn_buscar" class="btn fa fa-search blue"> </button>
      </span>
    </div>
  </div>

</div>
