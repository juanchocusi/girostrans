<div class="navbar">
    <div class="navbar-inner">
        <div class="container">
            <a href="#" class="brand">
                <!--<img src="images/logo.png" width="120" height="40" alt="Logo" />-->
                <!-- This is website logo -->
            </a>
            <!-- Navigation button, visible on small resolution -->
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <i class="icon-menu"></i>
            </button>
            <!-- Main navigation -->
            <div class="nav-collapse collapse pull-right">
                <ul class="nav" id="top-navigation">
                    <li><a> <input type="text" id="fechai" value="<?php echo date("Y/m/d"); ?>"> </a></li>
                    <li><a> <input type="text" id="fechaf" value="<?php echo date("Y/m/d"); ?>"> </a></li>
                    <li class="active "><a href="" > Iniciar </a></li>
                    <li><a href="#">Totalizar</a></li>
                    <li class="dropdown">
                        <a data-toggle="dropdown" href="#" class="dropdown-toggle">Usuario<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li class=""><a href="" >Configurar</a></li>                            
                            <li class="divider active"></li>
                            <li><a href="#" >Salir</a></li>                            
                        </ul>
                    </li>

                </ul>
            </div>
            <!-- End main navigation -->
        </div>
    </div>
</div>
