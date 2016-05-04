<div class="container-fluid">
    <div class="row">
        <div class="col-xs-4 col-sm-6">
            <div class="input-group input-group-sm ">
                <span class="input-group-addon">Inicio</span>
                <input type="text" id="fechai" class="form-control"  value="<?php echo date("Y/m/d"); ?>">                
                <span class="input-group-addon">Fin</span>
                <input type="text" id="fechaf" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
                
            </div>
            
        </div>
        <!--  
          <div class="col-xs-4 col-sm-6">
            <div class="input-group input-group-sm">             
                <select class=" form-control input-sm" id="lista_sucursales"> <?php echo $optsucursales ?> </select>
              <span class="input-group-btn">
                <button type="button" id="btn_buscar" class="btn fa fa-search blue"> </button>
              </span>
            </div>
        
          </div>
        -->
        <!--
          <div class="col-xs-6 col-sm-4">
            <div class="input-group input-group-sm ">
              <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">
              <span class="input-group-btn">
                <select id="optBusca"  class="btn btn-default"> <option value="A">Apellido </option> <option value="D">DNI </option> </select>                
                <button type="button" id="busaca" class="btn fa fa-search blue"> </button>
              </span>
            </div>
          </div>
        -->
    </div>   
</div>
