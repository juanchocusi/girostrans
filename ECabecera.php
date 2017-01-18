<nav id="minavbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container" >
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#menu-toggle" class=" blue" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>
    </div>

    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-left">
        <li><a href="#"> <?php echo $_SESSION['sucursal'] ?> </a> </li> 
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" class="glyphicon glyphicon-home " id="DisponibilidadAgente"  title="Saldo Agentes"></a></li>  
        <li><a href="#" class="glyphicon glyphicon-list-alt" id="FlujoSucursales"  title="Flujo Efectivo Sucursales"></a></li>  
        <li><a href="#" class="glyphicon glyphicon-tasks " id="disponibilidad"  title="Saldo Asociados"></a></li>
        <li><a href="#" class="glyphicon glyphicon-file " id="carga_imagen"  title="Subir Voucher"></a></li>
        <li> <input type="text" id="ebuscador" style="text-transform:uppercase" placeholder="Buscar" class="form-control"> </li>
        <li> <input type="text" id="efecha_r" name="efecha_r" value = "<?php echo date('Y-m-d') ?>"> </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pagar <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">            
            <li><a href="#" id="boton_pagar" >Desde Asociado</a></li>
            <li><a href="#" id="btn_pagadeagente" >Desde Agente</a></li>                            
            <li class="divider"></li>                                                            
            <li><a href="#" id="btn_efectivo_sucu" >Efectivo-Sucursal</a></li>
            <li><a href="#" id="btn_efectivo" >Efectivo</a></li>
            <li><a href="#" id="btn_distribucion" >Pago Distribuido</a></li>
          </ul>
        </li>
        <li><a href="#muestra_form" id="muestra_formulario"  title="Oculta/Muestra Formulario">Formulario</a></li>
        <li><a href="#menu-toggle" id="mas_datose" title="Muestra mas datos de la Transaccion">+Datos</a></li>
        <li><a href="#" class="glyphicon glyphicon-print" id="imprime_entregados"  title="Imprimir"></a></li>
      </ul>
    </div>
  </div>
</nav>