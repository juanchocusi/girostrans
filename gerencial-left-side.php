<section class="sidebar">
    <!-- Sidebar user panel -->
<!--    <div class="user-panel">
        <div class="pull-left image">
            <img src="img/avatar3.png" class="img-circle" alt="User Image" />
        </div>
        <div class="pull-left info">
            <p>Hello, Jane</p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>
     search form 
    <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="Search..."/>
            <span class="input-group-btn">
                <button type='submit' name='seach' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
            </span>
        </div>
    </form>-->
    
    <ul class="sidebar-menu">
        <li>            
            <a href="#">                
                <input type="text" id="fechai" value="<?php echo date("Y/m/d"); ?>">
                <input type="text" id="fechaf" value="<?php echo date("Y/m/d"); ?>">
                <i class="fa fa-search-plus" id="btn_muestra_resultados" ></i>
<!--                <span class="input-group-btn">
                    <button id="btn_buscar" class="btn btn-flat" ><i class="fa fa-search"></i></button>
                </span>-->
            </a>
        </li>
        <li>            
            <a href="#">
                <i class="fa fa-calendar-o"></i> <span>Asociados + Agentes</span>
                <input type="text" id="total_AsociadosAgentes" class="txt_totales" placeholder=""> 
                <span>Comisio + ITF + Gastos</span>
                <input type="text" id="suma_comi_itf" class="txt_totales">
                <span>Total+Bono </span>
                <input type="text" id="total_1" class="txt_totales">
            </a>
        </li>
<!--        <li>
            <a href="#">
                <i class="fa fa-tasks"></i> <span>Cuentas x Pagar</span>
                <input type="text" id="suma_ctaxpagar" class="txt_totales"> 
                <span>Cuentas x Cobrar</span>
                <input type="text" id="suma_ctaxcobrar" class="txt_totales"> 
                <span>Pendientes</span>
                <input type="text" id="suma_pendientes" class="txt_totales">
                <span>Efectivo Neto Sucursales</span>
                <input type="text" id="total_efectivo_neto" class="txt_totales">
                <span>Total Gastos Sucursales</span>
                <input type="text" id="total_gastos_sucursales" class="txt_totales">
                
            </a>
        </li>

        <li>
            <a href="#">
                <i class="fa fa-globe"></i> <span>Neto Agente+Asociados</span>
                <input type="text" class="txt_totales">
                <span>Efectivo Neto Sucursales</span>
                <input type="text" class="txt_totales">
                <span>Totales</span>
                <input type="text" class="txt_totales">
            </a>
        </li>        
        -->
        <li>        
    <!--///////////////////////////////// FLUJO DE CAJA /////////////////////////////////////////-->    
        <div class="">            
            FLUJO DE CAJA
            <div id="" class="table-responsive ">                
                <table id="TFlujoCajaE" class=" table-condensed table-bordered table-striped ">
                    <thead>
                        <tr>
                            <th>Descripcion </th>
                            <th>Monto </th>                                                                             
                        </tr>
                    </thead>                
                    <tbody id="body_FlujoCajaE" >
<!--                        <tr>
                            <td> aaaaaaaaaaa</td>
                            <td> 11111111111</td>
                        </tr>
                        <tr>
                            <td> bbbbbbbb</td>
                            <td> 2222222222222222</td>
                        </tr>-->
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th id="total_flujocajae" ></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    
        </li>
        <li>
            <a href="#">
            <button type="button" id="btn_totalizar"> Totalizar</button>
            <!--<button type="button" id="" > Otro</button>-->
            </a>
        </li>
        
    </ul>
</section>