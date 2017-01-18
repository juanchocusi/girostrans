<div class="container-fluid">

  <div class="row">
    <div class="col-lg-12"> 
      <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Menu Lateral">Menu</a>
      <input type="text" style="text-transform:uppercase"  id="buscador" placeholder="Filtrar ...">
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
              <th>Fecha Entrega</th>
              <th>Nro. Cuenta</th>
              <th>Nro. Operacion</th>
              <th>Usuario Rgstra</th>
              <th>Observa</th>

              <th>Usuario Entrega</th>
              
              <th>Datos Pago</th>
              <th>Correlativo</th>  
              <th class="ocultame">A</th>
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
