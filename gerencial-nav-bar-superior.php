<ul class="nav navbar-nav">
    
    <!-- Messages: style can be found in dropdown.less-->
    <li class="dropdown messages-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-envelope"></i>
            <!--<span class="label label-success">4</span>-->
            <span class="label label-default"></span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">Avance Mensual</li>
            <li>
                <!-- inner menu: contains the actual data -->
<!--                <ul class="menu">
                    <li> start message 
                        <a href="#">
                            <div class="pull-left">
                                <img src="img/avatar3.png" class="img-circle" alt="User Image"/>
                            </div>
                            <h4>
                                Support Team
                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li> end message 
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="img/avatar2.png" class="img-circle" alt="user image"/>
                            </div>
                            <h4>
                                Director Design Team
                                <small><i class="fa fa-clock-o"></i> 2 hours</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="img/avatar.png" class="img-circle" alt="user image"/>
                            </div>
                            <h4>
                                Developers
                                <small><i class="fa fa-clock-o"></i> Today</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="img/avatar2.png" class="img-circle" alt="user image"/>
                            </div>
                            <h4>
                                Sales Department
                                <small><i class="fa fa-clock-o"></i> Yesterday</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pull-left">
                                <img src="img/avatar.png" class="img-circle" alt="user image"/>
                            </div>
                            <h4>
                                Reviewers
                                <small><i class="fa fa-clock-o"></i> 2 days</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                </ul>-->
                
            </li>
            <li class="footer"><a href="#">En construccion</a></li>
        </ul>
    </li>
<!--    <li> <a>
        <span> <input type="text" >  </span> 
        </a>
    </li>-->
    <li class="dropdown tasks-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-tasks"></i>
            <!--<span class="label label-danger">9</span>-->
            <span class="label label-default"></span>
        </a>
        <ul class="dropdown-menu">

            <li class="header">Tareas Pendientes</li>
            <li>
                <!-- inner menu: contains the actual data -->
<!--                <ul class="menu">
                    <li> Task item 
                        <a href="#">
                            <h3>
                                Pendientes
                                <small class="pull-right">20%</small>
                            </h3>
                            <div class="progress progress-striped xs">
                                <div class="progress-bar progress-bar-success" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                    <span class="sr-only">20% Complete</span>
                                </div>
                            </div>
                        </a>
                    </li> end task item 
                    <li> Task item 
                        <a href="#">
                            <h3>
                                Create a nice theme
                                <small class="pull-right">40%</small>
                            </h3>
                            <div class="progress progress-striped xs">
                                <div class="progress-bar progress-bar-danger" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                    <span class="sr-only">40% Complete</span>
                                </div>
                            </div>
                        </a>
                    </li> end task item 
                     end task item 
                </ul>-->
            </li>
            <li class="footer">
                <a href="#">Proximamente...</a>
            </li>

        </ul>
    </li>
    <!-- User Account: style can be found in dropdown.less -->
    <li class="dropdown user user-menu">

        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-user"></i>
            <span> <?php echo $_SESSION['nick'] ?>
            <i class="caret"></i></span>
        </a>
        
        <ul class="dropdown-menu dropdown-custom dropdown-menu-right">
<!--            <li class="dropdown-header text-center">Account</li>

            <li>
                <a href="#">
                    <i class="fa fa-clock-o fa-fw pull-right"></i>
                    <span class="badge badge-success pull-right">10</span> Updates</a>
                <a href="#">
                    <i class="fa fa-envelope-o fa-fw pull-right"></i>
                    <span class="badge badge-danger pull-right">5</span> Messages</a>
                <a href="#"><i class="fa fa-magnet fa-fw pull-right"></i>
                    <span class="badge badge-info pull-right">3</span> Subscriptions</a>
                <a href="#"><i class="fa fa-question fa-fw pull-right"></i> <span class=
                                                                                  "badge pull-right">11</span> FAQ</a>
            </li>

            <li class="divider"></li>
-->
            <li>
                <a href="#">
                    <i class="fa fa-user fa-fw pull-right"></i>
                    <?php echo $_SESSION['usuario'] ?>
                </a>
<!--                <a data-toggle="modal" href="#modal-user-settings">
                    <i class="fa fa-cog fa-fw pull-right"></i>
                    Settings
                </a>-->
            </li>

            <li class="divider"></li>

            <li>
                <a href="logoutgerencial.php"><i class="fa fa-ban fa-fw pull-right"></i>Salir</a>
            </li>
        </ul>

    </li>
</ul>