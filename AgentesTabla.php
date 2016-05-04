
<!--<div class="container-fluid">-->
<div id="contiene-tabla" class="row">
  <a href="#menu-toggle" class="blue btn btn-default btn-xs" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>
  <input type="text" id="fechai" value="<?php echo date("Y/m/d"); ?>">
  <input type="text" id="fechaf" value="<?php echo date("Y/m/d"); ?>">  
  <button id="btn_movscuenta" type="button" class="btn btn-default btn-xs blue" title="Muestra Movimientos de Agente" >Movimientos</button>
  <a href="#menu-toggle" class="blue btn btn-default btn-xs" id="formulario-toggle"  title="Ocultar Formulario">Formulario</a>
  <button id="btn_imprime_movs" type="button" class="btn btn-default btn-xs" title="Imprime Movimientos de Agente" >Imprimir</button>
  <div  class="table-responsive">
    <table id="TMovsAgente" class="editinplace table-condensed table-bordered">
      <thead >
        <tr>
          <th></th>	  
          <th>Itm</th>
<!--1-->  <th style="display: none">  ID</th>
          <th style="display: none">  ID</th>
          <th>                        Fecha</th>
          <th>                        Fecha Registro</th>
<!--5--> <th>                        Motivo</th>
          <th style='display: none'>  CtaDestino</th>
          <th >                       DatosAdicionales</th>
          <th>                        DatosTransferencia</th>
          <th>                        DatosBeneficiario</th>
<!--10--> <th style="display: none">  Usuario Modifica</th>
          <th style="display: none">  Nro Operacion</th>
          <th >                       NroOPs</th>                
          <th align='right'>          Ingreso</th>               
          <th align='right'>          Salida</th>                
<!--15--> <th align='right'>          Saldo Agente</th>
          <th align='right'>          Saldo Caja</th>
          <th style='display: none'>  A</th>                
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
<!--1-->  <th style="display: none">  ID</th>
          <th style="display: none">  ID</th>
          <th>                  Fecha</th>
          <th>            Fecha Registro</th>
<!--5-->  <th>             Motivo           </th>
          <th style="display: none">  </th>
          <th >                       DatosAdicionales</th>
          <th>                        DatosTransferencia</th>
          <th>                        DatosBeneficiario</th>
<!--10--> <th style="display: none">  </th>
          <th style="display: none">  </th>
          <th id='total_o'>           </th>                
          <th id='total_i' >          </th>               
          <th id='total_s' >          </th>                
          <th >          Saldo Agente</th>
          <th >          Saldo Caja</th>
<!--17--> <th style='display: none'> </th>                
        </tr>
      </tfoot>
      <tbody id="tbody_MovsAgente" >

      </tbody>                                                
    </table>
  </div>


</div> <!-- ROW -->
