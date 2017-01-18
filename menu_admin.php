
<!-- /. NAV TOP  -->
<div id="sidebar-wrapper">
    <nav id="tools" class="navbar-default navbar-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="main-menu">
                <li class="text-center user-image-back">
                    <a id="dato_usuario" href="npanelinicio.php">
                        <div class="pull-left">
                            <img src="img/find_user.jpg"/>
                        </div>                                
                        <h5><?php echo $_SESSION['usuario'] ?></h5>
                    </a>                            
                </li>
                <!--<li rel="Recepcion.php"> </li>-->
                <li> <a href=""><i class="fa fa-gear fa-spin fa-lg"></i>Gerencial<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">                                
                      <li> <a href="nInicio.php">Giros-Transferencias</a>  </li>
                      <li> <a href="nTotales.php">Totales</a> </li>
                    </ul>
                </li>
                <li> <a href="nRecepcion.php"><i class="fa fa-desktop"></i>Recepción</a> </li>
                <li> <a href="nEntrega.php" ><i class="fa fa-money "></i>Entrega</a> </li>                        
                <li> <a href=""><i class="fa fa-wrench"></i>Herramientas<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">                                
                        <li> <a href="ngirosxcliente.php">Supervisa</a>  </li>
                        <li> <a href="nDiario.php" >Cierre Diario</a> </li>
                        <li> <a href="ncrucesucursales.php" >Cruce</a> </li>
                        <li> <a href="nboleta.php" >Boletas</a> </li>
                        <!--                                <li> <a href="javascript:window.open('GirosxCliente.php','','width=600,height=400,left=50,top=50,toolbar=no');void 0">Supervisa</a> </li>-->
                        <!--                                <li> <a href="GirosxCliente.php" target="_blank">Giros x Cliente</a> </li>-->
                    </ul>
                </li>
                <li> <a href=""><i class="fa fa-table"></i>Tablas<span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="nusuarios.php" >Asociados-Usuarios </a></li>                                
                        <li> <a href="nbancos.php" >Bancos-Agentes</a> </li>                                                               
                        <li> <a class="fa fa-users" href="nClientes.php" >  Clientes </a> </li>                        
                        <li> <a href="nsucursales.php" >Sucursales </a> </li>
                        <li> <a href="ntransacciones.php" >Transacciones</a> </li>
                        <li> <a href="nconceptos.php" >Conceptos </a></li>
                        <li> <a href="nmasdatos.php" >Mas Datos </a></li>
                    </ul>
                </li>

                <li> <a href=""> <i class="fa fa-credit-card"></i>Cuentas<span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="nAgentes.php">Agentes </a></li>
                        <li> <a href="nCuentaUsuario.php" >Cuentas Asociado </a> </li>
                        <li> <a href="nCuentasCliente.php">Cuentas Cliente </a> </li>
                    </ul>
                </li>
                <li> <a href=""><i class="fa fa-user"></i>Login <span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="indexLoginTrans.php">Iniciar Sesion</a> </li>
                        <li> <a href="Logout.php">Cerrar Sesion</a>  </li>
                    </ul>
                </li>
            </ul>

        </div>

    </nav>        
</div>
<!-- /. NAV SIDE  -->
