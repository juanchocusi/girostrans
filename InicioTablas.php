<div class="container-fluid">

  <div class="row">
    <div id="carga" style="display:none"> <img src="img/loading_bar.gif"> </div>
    <div class="col-lg-12"> 
      <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Menu Lateral">Menu</a>
      <div id="div_tabla_giros" class="table-responsive">
        <table id="TablaGiros" class="table-condensed table-bordered">
          <thead>
            <tr >
              <th>Nro</th>                
              <th>...</th>
              <th>Codigo</th>
              <th>Fecha</th>
              <th>DNI-B</th>               
              <th>Beneficiario</th>
              <th>DNI-R</th>

              <th>Remitente</th>
              <th>Destino</th>
              <th>Importe</th>
              <th>Cargo</th>
              <th>Otros</th>

              <th>Total</th>
              <th>Nro. Cuenta</th>
              <th>Nro. Operacion</th>
              <th>Usuario Rgstra</th>
              <th>Observa</th>

              <th>Destino</th>
              <th>Usuario Entrega</th>
              <th>Fecha Entrega</th>
              <th class="ocultame">NomSucursal</th>
              <th>Datos Pago</th>

              <th class="ocultame">A</th>
              <th>Datos Edicion</th>
              <th class="ocultame">NroBoleta</th>
            </tr>
          </thead>    
          <tfoot>
            <tr>
              <th></th>
              <th>...</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>

              <th></th>
              <th>Totales</th>
              <th id="t_importe"></th>
              <th id="t_cargo"></th>
              <th id="t_otros"></th>

              <th id="t_total"></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>

              <th></th>
              <th></th>
              <th></th>
              <th class="ocultame"></th>
              <th></th>

              <th class="ocultame"></th>
              <th></th>
              <th class="ocultame"></th>
            </tr>
          </tfoot>
          <tbody id="BodyGiros">

          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>
