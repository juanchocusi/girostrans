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
            <div class="">
                <h4>Resumen Total Efectivo</h4>
                <div id="" class="table-responsive ">                
                    <table id="TResumenEfectivo" class=" table-condensed table-bordered ">
                        <thead id="body_ResumenEfectivo">

                        </thead>
                    </table>
                </div>

            </div>
        </li>

        <li>
            <div class="">
                <h4>Resumen Total Utilidad</h4>
                <div id="" class="table-responsive ">                
                    <table id="TResumenUtilidad" class=" table-condensed table-bordered ">
                        <thead id="body_ResumenUtilidad">

                        </thead>
                    </table>
                </div>
                
            </div>

        </li>
    <!--///////////////////////////////// RESUMEN GASTOS ////////////////////////////////////////-->    
        <li>
            
                <h4>Resumen Total Gastos</h4>
                <div id="" class="table-responsive ">                
                    <table id="TResumenGastos" class=" table-condensed table-bordered ">
                        <thead id="body_ResumenGastos">

                        </thead>
                    </table>
                </div>
                
            
        </li>        
    <!--///////////////////////////////// FLUJO DE CAJA /////////////////////////////////////////-->    
        <li>                    
            <div class="">
                <h4>Ingreso Pasivo</h4>

                <!--<h4>RESUMEN TOTAL DE EFECTIVO</h4>-->
                <div id="" class="table-responsive ">                
                    <table id="TResumePasivo" class=" table-condensed table-bordered ">
                        <thead id="body_ResumenPasivo">

                        </thead>
                    </table>
                </div>

            </div>
        </li>
        <li>
            <a href="#">
                <button type="button" id="btn_totalizar"> Totalizar</button>
                <!--<button type="button" id="btn_saldoinicial" >Liquidez Inicial</button>-->
            </a>
        </li>
        
        
        <!--///////////////////////////////// RESUMEN LIQUIDEZ ////////////////////////////////////////-->    
        <li>
            
                <h4>Resumen LIQUIDEZ TOTAL</h4>
                <div id="" class="table-responsive ">                
                    <table id="TResumenLiquidez" class=" table-condensed table-bordered ">
                        <thead id="body_ResumenLiquidez">

                        </thead>
                    </table>
                </div>
                
            
        </li>

    </ul>
</section>