<div class="row" id="formulario">
<!--  Beneficiario Remitente   -->
    <div class="col-xs-6 col-sm-3">
      <div class="input-group input-group-sm ">
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnib" name="dnib" placeholder="DNI Beneficiario">
        <span class="input-group-btn">          
          <a href="#" id="busca_beneficiario" class="btn btn-default glyphicon glyphicon-search blue"></a>
        </span>
      </div>
        <input type="text" class="form-control" id="nombresb" placeholder="Nombres Beneficiario" readonly="readonly">
    
      <div class="input-group input-group-sm ">        
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' maxlength="10" class="form-control" id="dnir" name="dnir" placeholder="DNI Remitente">
        <span class="input-group-btn">          
          <a href="#" id="busca_remitente" class="btn btn-default glyphicon glyphicon-search" ></a>
        </span>
      </div>
      <input type="text" class="form-control" id="nombresr" placeholder="Nombres Remitente" readonly="readonly">     
    </div><!--/span-->
<!--  Sucursal   -->
    <div class="col-xs-6 col-sm-3 ">
        <div class="input-group input-group-sm">            
            <input type="text" class="form-control" id="destino" name="destino" placeholder="Sucursal Destino" onkeyup='javascript:this.value=this.value.toUpperCase();' >
                <span class="input-group-btn">
                    <a href="#" id="busca_sucursal" class="btn btn-default glyphicon glyphicon-search" data-toggle="modal" data-target="#modal_s"></a>
                </span>
        </div>  
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="ciudaddestino" id="ciudaddestino" placeholder="Ciudad Destino (BOLETAS)">
        <input type="text" onkeyup='javascript:this.value=this.value.toUpperCase();' class="form-control" name="observa" id="observa" placeholder="Observaciones">
        <div class="input-group input-group-sm">                
            <input type="text" class="form-control" id="cuentas" name="cuentas" placeholder="Cuentas" readonly="readonly"/>
            <span class="input-group-btn">
                <a id="busca_cuentas" title="Buscar Cuentas" class="btn btn-default glyphicon glyphicon-home"></a>
            </span>
        </div> 

    </div><!--/span-->
 <!-- MONEY -->
<div class="col-xs-6 col-sm-3 ">
    <div class="input-group input-group-sm ">
        <span class="input-group-addon">Imprte</span>                
        <input type="text" class="form-control" id="importe_r" name="importe_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();"  onkeyup="CalculaCargo();"/>
    </div>  
    <div class="input-group input-group-sm">      
        <span class="input-group-addon">Cargo</span>
        <input type="text" class="form-control" id="cargo_r" name="cargo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>  
    <div class="input-group input-group-sm">         
        <span class="input-group-addon">Otros</span>
        <input type="text" class="form-control" id="otros_r" name="otros_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onblur="ADecimal();" onkeyup="calcula_total();"/>
    </div>
    
    <div class="input-group input-group-sm has-error">         
        <span class="input-group-addon">Total</span>
        <input type="text" class="form-control" id="total_r" value="0" readonly="readonly"/> 

    </div>
    
</div> 
<!--  Porcentajes   -->
    <div class="col-xs-6 col-sm-3" >
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">% %</span> 
                    <select class="form-control input-sm" id="listaporcentajes" onblur="calcula_total();" onchange="calcula_cargo();"> 
                    <option value="1.5">1.5 %</option> <option value="2.0">2.0 %</option> <option value="2.5">2.5 %</option> 
                    <option value="3.0">3.0 %</option> <option value="3.5">3.5 %</option> <option value="4.0">4.0 %</option> 
                    <option value="4.5">4.5 %</option> <option value="5.0">5.0 %</option> <option value="5.5">5.5 %</option> 
                    <option value="6.0">6.0 %</option> <option value="6.5">6.5 %</option> <option value="7.0">7.0 %</option>
                    <option value="7.5">7.5 %</option> <option value="8.0">8.0 %</option> <option value="8.5">8.5 %</option>
                    <option value="9.0">9.0 %</option> <option value="9.5">9.5 %</option> <option value="10.0">10.0 %</option> 
                  </select>
                </div>
                <div class="input-group input-group-sm" style="display: none" >
                    <span class="input-group-addon">I.G.V.</span> 
                    <input type="text" class="form-control" id="igv_r" value="0" readonly="readonly">
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Efctvo</span> 
                    <input type="text" class="form-control " id="efectivo_r" value="0" onfocus="if (this.value >= '0') {this.value = '';}" onkeyup="calcula_vuelto();">
                </div>  
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Vuelto</span> 
                    <input type="text" class="form-control" id="vuelto_r" value="0" readonly="readonly">
                </div>
                <button id="btn_nuevo" type="button"    class="normal btn btn-default btn-xs blue"><strong>Nuevo</strong></button> 
                <button id="btn_cancelar" type="button" class="normal btn btn-default btn-xs blue">Cancelar</button>
                <button id="btn_guardar" type="button"  class="normal btn btn-default btn-xs blue">
                    <span class="glyphicon glyphicon-floppy-disk"></span> 
                </button>
                <button id="btn_anular" type="button"   class="normal btn btn-default btn-xs blue" onclick="fnConfirmaAnulaRecibidos();" title="Anular Giro">
                        <span class="glyphicon glyphicon-remove"></span> 
                </button>
                <button id="imprimir_r" type="button"   class="normal btn btn-default btn-xs blue" onclick="fnImprimeRecibidos('manualmente');">
                    <span class="glyphicon glyphicon-print"></span> 
                </button>
                <button id="btn_masdatos" type="button" class="normal btn btn-default btn-xs blue" title="Obtener Mas Datos acerca de la transaccion">
                    <span class="fa fa-list-alt fa-lg"></span>
                </button>
                <button id="btn_boleta" type="button" class="normal btn btn-default btn-xs " title="Imprimir Boleta">
                    <span class="glyphicon glyphicon-bold"></span>
                    <!--<span class="fa fa-spinner fa-spin"></span>-->
                </button>                
                <button id="btn_editar" type="button"         class=" btn btn-default btn-xs" title="Editar Giro">Editar</button>
                <button id="btn_guardaedicion" type="button"  class="edita btn btn-default btn-xs" >Guardar Cambios</button>
                <button id="btn_cancelaedicion" type="button" class="edita btn btn-default btn-xs" >Cancelar</button>
                <button id="btn_voucher" type="button" class="normal btn btn-default btn-xs " title="Muestra Voucher">
                    <span class="glyphicon glyphicon-file"></span>                    
                </button>                
                <div id="carga" style="display:none"> <img src="img/cargando.gif" /> </div>
    </div>

</div><!--/row-->