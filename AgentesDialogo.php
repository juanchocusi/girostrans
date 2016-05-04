<div id="dialogo_cuentas" >
    <div class="table-responsive"> 
        <table id="tabla_usuariocuenta" class="table table-condensed table-bordered">
            <thead >
                <tr>                            
                    <th>Usuario</th>
                    <th>Banco</th>
                    <th>NroCuenta</th>
                </tr>
            </thead>                                                   
            <tbody id="tbody_usuarioucenta">

            </tbody>
        </table>                    
    </div>        
</div>  
<!--
<div id="dialogo_masdatos" >
    <div class="table-responsive"> 
        <table id="tabla_usuariocuenta" class="table table-condensed table-bordered">
            <thead >
                <tr>                            
                    <th>CtaDestino</th>
                    <th>Banco</th>
                    <th>NroCuenta</th>
                </tr>
            </thead>                                                   
            <tbody id="tbody_usuarioucenta">

            </tbody>
        </table>                    
    </div>        
</div>  -->


<input type="hidden" id="sele_cu" value="cu[0]">
            <input type="hidden" id="sele_mv" value="mv[0]">
            <input type="hidden" id="nro_cuenta">
            <input type="hidden" id="nro_cuentadest">
            <input type="hidden" id="tipotran">
            <input type="hidden" id="ingsal">
            <input type="hidden" id="idtran">
            <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario']?>" >
            <input type="hidden" id="usuariosistema" value="<?php echo $_SESSION['nick']?>" >
            <input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal']?>" >
            <input type="hidden" id="opver" value="mas">
            <input type="hidden" id="iniciales" >
            <input type="hidden" id="idbanco" >
            <input type="hidden" id="tipodinero" > <!-- recoge tipo de operacion y dinero -->
            <input type="hidden" id="idtransaccion" >
            <input type="hidden" id="motivo" >
            <input type="hidden" id="ingreso">
            <input type="hidden" id="salida">
            <input type="hidden" id="ingresosalida" ><!-- para el prompt -->
            <input type="hidden" id="montoanula" > <!-- anular -->
            <input type="hidden" id="tipomov" > <!-- anular -->
            <input type="hidden" id="idtipotran" > <!-- anular -->      
            <input type="hidden" id="nrocuenta_destino" >
            <input type="hidden" id="iniciales_destino" >
            <input type="hidden" id="agente_origen" >
            <input type="hidden" id="fecha_tran">
	    <input type="hidden" id="nombre_agente">
