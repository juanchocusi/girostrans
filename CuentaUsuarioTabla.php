<div class="container-fluid">
    <div class="mensaje"></div>
    <!--<div class="container-fluid">-->
    <div class="row">
        <div class="col-lg-12">                        
            <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Menu Lateral">Menu</a>

            <input type="text" id="fechai" value="<?php echo date("Y/m/d"); ?>">
            <input type="text" id="fechaf" value="<?php echo date("Y/m/d"); ?>">  
            <button id="btn_movscuenta" type="button" class="btn btn-default btn-xs blue" >Mostrar Movimientos</button>
            <button id="btn_masmovs" type="button" class="btn btn-default btn-xs blue" >+ Información</button>
	    <button id="btn_imprime_movs" type="button" class="btn btn-default btn-xs" >Imprimir</button>
            <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-form"  title="Formulario Principal">Formulario</a>
            <div  class="table-responsive mygrid-wrapper-div">
                <table id="TMovsCuenta" class="editinplace table table-condensed">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Nro</th>
                            <th style="display: none" > ID</th>
                            <th style="display: none" > ID</th>
                            <th>                        Fecha</th>
                            <th>                        Fecha Registro</th>
                            <th>                        Motivo</th>              
                            <th>                        Datos Adicionales</th>
                            <th >                       Datos Pago</th>
                            <th >                       Datos Beneficiario</th>
                            <th class="ocultamovs">     Usuario Paga</th>
                            <th  align='right'>          Ingreso</th>               
                            <th  align='right'>          Salida</th>                
                            <th align='right'>          Saldo</th>
                            <th style="display: none">  N</th>
                        </tr>
                    </thead>
                    <tbody id="tbody_MovsCuenta" 

                </tbody>
            </table>
        </div>

    </div>
</div>

</div> 
