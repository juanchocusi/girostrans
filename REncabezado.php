<nav id="minavbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
       <div class="container" >
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<a class="navbar-brand" href="#"><?php echo $_SESSION['nick'] ?></a>-->
          <a href="#menu-toggle" class=" blue" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              
              <li><a href="#"><?php echo $_SESSION['sucursal'] ?></a> </li>                            
            
           </ul>
          <ul class="nav navbar-nav navbar-right">
            <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu_toggle"  title="Oculta/Muestra Formulario">Formulario</a>
            <li> <input type="text" id="buscador" style="text-transform:uppercase" placeholder="Buscar" class="form-control"> </li>            
            <li> <input type="text" id="fecha_r" name="fecha_r" value = "<?php echo date('Y-m-d') ?>"> </li>
            
            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
