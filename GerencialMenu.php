
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
                <?php
                if ($_SESSION['tipousuario'] === 'ADMIN') {
                    echo "<li> <a href=''><i class='fa fa-gear fa-spin fa-lg'></i>Gerencial<span class='fa arrow'></span></a>";
                    echo "<ul class='nav nav-second-level'>";
                    echo "  <li> <a href='nInicio_admin.php'>Giros-Transferencias</a>  </li>";
                    echo "  <li> <a href='nTotales.php'>Totales</a> </li>";
                    echo "</ul> </li>";
                }
                ?>
                
                <li> <a href="nGrencial.php"><i class="fa fa-desktop"></i>Gestion</a> </li>
<!--                <li> <a href="nEntrega.php" ><i class="fa fa-money "></i>Entrega</a> </li>                        
                <li> <a href=""><i class="fa fa-wrench"></i>Herramientas<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">                                
                        <li> <a href="ngirosxcliente.php">Supervisa</a>  </li>
                        <li> <a href="nDiario.php" >Cierre Diario</a> </li>
                        <li> <a href="ncrucesucursales.php" >Cruce</a> </li>
                        <li> <a href="nboleta.php" >Boletas</a> </li>
    
                    </ul>
                </li>
                <li> <a href=""><i class="fa fa-table"></i>Tablas<span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="nusuarios.php" >Asociados-Usuarios </a></li>                                
                        <li> <a href="nbancos.php" >Bancos </a> </li>                                                               
                        <li> <a class="fa fa-users" href="nClientes.php" >  Clientes </a> </li>                        
                        <li> <a href="nsucursales.php" >Sucursales </a> </li>
                        <li> <a href="ntransacciones.php" >Transacciones</a> </li>
                        <li> <a href="nconceptos.php" >Conceptos </a></li>
                    </ul>
                </li>

                <li> <a href=""> <i class="fa fa-credit-card"></i>Cuentas<span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="nAgentes.php">Agentes </a></li>
                        <li> <a href="nCuentaUsuario.php" >Cuentas de Asociado </a> </li>
                    </ul>
                </li>
                <li> <a href=""><i class="fa fa-user"></i>Login <span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li> <a href="indexLoginTrans.php">Iniciar Sesion</a> </li>
                        <li> <a href="Logout.php">Cerrar Sesion</a>  </li>
                    </ul>
                </li>
            </ul>
-->
        </div>

    </nav>        
</div>
<!-- /. NAV SIDE  -->
