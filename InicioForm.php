<div class="container-fluid">
    <br>
    <div class="col-sm-6 col-xs-6 col-md-6 col-lg-4" >
        <div class="container-fluid" style="padding:0px 10px 0px 0px; ">
            <div class="row">
                <div class="col-lg-6 col-sm-12" >
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon">Inicio</span>
                        <input type="text" id="fechai" value="<?php echo date("Y/m/d"); ?>">
                    </div>
                </div>

                <div class="col-lg-6 col-sm-12" >
                    <div class="input-group input-group-sm ">
                        <span class="input-group-addon">Final.</span>
                        <input type="text" id="fechaf" class="form-control"  value="<?php echo date("Y/m/d"); ?>">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-xs-6 col-md-6 col-lg-3" >

        <div class="input-group input-group-sm">            
            <span class="input-group-btn">
                <button type="button" id="btn_carga_sucursales" class="btn fa fa-home fa-lg"> </button>
            </span>
            <select class=" form-control input-sm" id="lista_sucursales">                
                <option value="0">Elige una Sucursal</option>
            </select>
            <span class="input-group-btn">
                <button type="button" id="btn_muestra_giros" class="btn fa fa-binoculars fa-lg"> </button>
            </span>
        </div>

        <div class="input-group input-group-sm">
            <input class="" value="M" type="checkbox" id="check_money" />
            <span class="lbl">Money Flash .</span>

            <input class="" value="P" type="checkbox" id="check_pantera" />
            <span class="lbl ">Pantera </span>
        </div>

    </div>
    <div class="col-sm-6 col-xs-6 col-md-6 col-lg-3" >
        <div class="input-group input-group-sm">
            <input type="text" style="text-transform:uppercase" class="form-control" id="busca_en_bd" placeholder="en Base de Datos.....">
            <span class="input-group-btn">
                <select id="optbusca"  class="btn btn-default"> <option value="A">Apellido </option> <option value="D">DNI </option> </select>                
                <button type="button" id="btn_busca_en_bd" class="btn fa fa-search fa-lg"> </button>
            </span>
        </div>
        <div class="input-group input-group-sm ">
            <!--/**** botones *****/-->
            <button type="button" id="disponibilidad" class="btn fa fa-cc-visa fa-lg" title="Saldos"> </button>
            <button type="button" id="btn_carga_boucher" class="btn fa fa-file-picture-o fa-lg" title="Cargar Boucher"> </button>
            <button type="button" id="btn_imprime_entrega" class="btn fa fa-print fa-lg" title="Imprmir"> </button>
            <ul class="nav navbar-nav navbar-right">    
                <li class="dropdown"> <a href="#" style="padding: 5px 5px 0px 5px" title="Pagar" class="dropdown-toggle" data-toggle="dropdown"> <span  class="fa fa-money fa-lg" ></span></a>
                    <ul class="dropdown-menu" role="menu">            
                        <li><a href="#" id="btn_pagar" >Desde Asociado</a></li>
                        <li><a href="#" id="btn_pagadeagente" >Desde Agente</a></li>                            
                        <li class="divider"></li>                                                            
                        <li><a href="#" id="btn_efectivo_sucu" >Efectivo-Sucursal</a></li>
                        <li><a href="#" id="btn_efectivo" >Efectivo</a></li>
                        <li><a href="#" id="btn_distribucion" >Pago Distribuido</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</div>


