<div class="container-fluid" id="formulario">
  <!--  Beneficiario Remitente   -->
  <div class="col-xs-6 col-sm-3 ">
    <div class="input-group input-group-sm">        
      <input type="text" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control" id="ednib" name="ednib" placeholder="DNI Beneficiario">
      <span class="input-group-btn">
        <a href="#" id="ebusca_beneficiario" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_b" onclick=></a>
      </span>
    </div>
    <input type="text" class="form-control" id="enombresb" placeholder="Nombres Beneficiario" readonly="readonly">                    

    <div class="input-group input-group-sm">        
      <input type="text" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control" id="ednir" name="ednir" placeholder="DNI Remitente">
      <span class="input-group-btn">          
        <a href="#" id="ebusca_remitente" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_r"></a>
      </span>
    </div>
    <input type="text" class="form-control" id="enombresr" placeholder="Nombres Remitente" readonly="readonly">                    
  </div>
  <!-- MONEY -->
  <div class="col-xs-6 col-sm-3 ">
    <div class="input-group input-group-sm ">
      <span class="input-group-addon">Imprte</span>
      <input type="text" class="form-control" id="eimporte_r" name="eimporte_r" value="0" onblur="eADecimal();" onkeyup=""/>
    </div>                 
    <div class="input-group input-group-sm">                  
      <span class="input-group-addon">Cargo</span>
      <input type="text" class="form-control" id="ecargo_r" name="ecargo_r" value="0" onblur="eADecimal();" onkeyup=""/>
    </div>
    <div class="input-group input-group-sm ">
      <span class="input-group-addon">% %</span> 
      <select class="form-control input-sm" id="elistaporcentajes" onchange="ecalcula_cargo();">                
        <option value="1.5">1.5 %</option> <option value="2.0">2.0 %</option> <option value="2.5">2.5 %   </option> 
        <option value="3.0">3.0 %</option> <option value="3.5">3.5 %</option> <option value="4.0">4.0 %   </option> 
        <option value="4.5">4.5 %</option> <option value="5.0">5.0 %</option> <option value="5.5">5.5 %   </option> 
        <option value="6.0">6.0 %</option> <option value="6.5">6.5 %</option> <option value="7.0">7.0 %   </option>
        <option value="7.5">7.5 %</option> <option value="8.0">8.0 %</option> <option value="8.5">8.5 %   </option>
        <option value="9.0">9.0 %</option> <option value="9.5">9.5 %</option> <option value="10.0">10.0 % </option>
      </select>
    </div>
    <input type="text" class="form-control" id="txtnrooperacion" placeholder="Nro Operacion">
  </div>
  <!--  Sucursal   -->
  <div class="col-xs-6 col-sm-3 ">
    <div class="input-group input-group-sm">        
      <input type="text" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control" id="origen" name="origen" placeholder="Sucursal de Origen">
      <span class="input-group-btn">                  
        <a href="#" id="busca_sucursal" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#emodal_s"></a>
      </span>
    </div>
    <input type="text" class="form-control" name="datapago" id="datapago" placeholder="Datos del Pago" readonly="readonly">
    <input type="text" onkeyup='javascript:this.value = this.value.toUpperCase();' class="form-control" id="eobserva" placeholder="Observaciones"/>

  </div>
  <div class="col-xs-6 col-sm-3 ">
    <button id="enuevo" type="button"       onclick="eControlesNuevo();"        class="btn btn-default btn-xs blue">Nuevo</button>
    <button id="ecancelar" type="button"    onclick="eControlesCancelar();"     class="btn btn-default btn-xs blue">Cancelar</button>
    <button id="btn_eguardar" type="button"        class="btn btn-default btn-xs blue" >Guardar</button>
    <button id="eanular" type="button"      onclick="fnConfirmaAnulaEntrega();" class="btn btn-default btn-xs blue" >Anular</button>
    <!--<button id="eimprimir_r" type="button"  onclick="fnImprimeRecibidos('manualmente');" class="btn btn-default btn-xs blue" >Imprimir</button>-->
    <!--<button id="mas_datose" type="button" class="btn btn-default btn-xs blue" >MasDatos</button>-->

  </div>

</div><!--/row-->
