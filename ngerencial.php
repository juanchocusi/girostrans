<?php
date_default_timezone_set("America/Lima");
session_start();
require 'controles/ConectaMySql.php';
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
if (!isset($_SESSION["nick"])) {
    Header("Location : logoutgerencial.php");
    exit;
}
$idempresa = $_SESSION['idempresa'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Modulo Gerencial</title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!--<meta name="description" content="Developed By M Abdur Rokib Promy">
        <meta name="keywords" content="Admin, Bootstrap 3, Template, Theme, Responsive">-->
        <!-- bootstrap 3.0.2 -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
<!--        <link rel="stylesheet" type="text/css" href="css/dataTables.bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/responsive.bootstrap.min.css"/>-->
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>        
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/ionicons.min.css"/>        
        
        <link rel="stylesheet" type="text/css" href="css/css_gerencial_style.css"/>
        
        <link rel="stylesheet" type="text/css" href="css/jquery-confirm.min.css"/>

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        
        <![endif]-->
        <style type="text/css">
/*            #mensajito{text-align: center; font-weight: bold; width: 10px;}*/
    </style>
    </head>
    <body class="skin-blue">
        <!-- header logo: style can be found in header.less -->
        <header class="header">
            <a href="#" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                <?php  if ($_SESSION['idempresa']==="M"){
                    echo 'Money Flash';
                    } else {
                        echo 'Pantera';
                    }
                ?>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle Menu</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                
                <div class="navbar-right">
                    <?php include("gerencial-nav-bar-superior.php"); ?>
                </div>
            </nav>
        </header>
        <div class="wrapper row-offcanvas row-offcanvas-left">
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="left-side sidebar-offcanvas">
                <!-- sidebar: style can be found in sidebar.less -->
                <?php include("gerencial-left-side.php"); ?>
                <!-- /.sidebar -->
            </aside>
            <!-- Right side column. Contains the navbar and content of the page -->
            <aside class="right-side">
                <!-- Main content -->
                <?php include("gerencial-right-side.php"); ?>
                <!-- /.content -->
                <div class="footer-main">
                    Copyright &copy dataweb, 2017
                </div>
            </aside><!-- /.right-side -->
        </div><!-- ./wrapper -->
<div id="question" style="display:none; cursor: default"> 
    <h1 id="mensajito">Seguro de Continuar ?...</h1> 
        <input type="button" id="yes" value="Si" /> 
        <input type="button" id="no" value="No" /> 
</div>
<div id="mensaje_carga" style="display:none; cursor: default"> 
    <h1><img src='img/loader32.gif'/>Cargando datos del servidor...</h1> 
        
</div>        
        <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>        
        <script type="text/javascript" src="js/jquery-ui-1.11.4.min.js"></script>        
        <script type="text/javascript" src="js/bootstrap.min.js" ></script>
        <script type="text/javascript" src="js/jquery.dataTables.min.js" ></script>
        <script type="text/javascript" src="js/jquery.blockUI.js" ></script>
        <!--<script type="text/javascript" src="js/chili-1.7.pack.js" ></script>-->
        
        <script type="text/javascript" src="js/FuncionesGerencial.js"></script>
        <script type="text/javascript" src="js/app.js"></script> <!--  -->
        <!--<script type="text/javascript" src="js/bootbox.min.js"></script>   -->
        <script type="text/javascript" src="js/CierraSesionInactivoG.js"></script>
        <script type="text/javascript" src="js/jquery.price_format.2.0.min.js"></script>
        <script type="text/javascript" src="js/jquery-confirm.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/css_gerencial.css"/>
        
    </body>
    <input type="hidden" id="idempresa" value="<?php echo $_SESSION['idempresa']?>">
    <input type="hidden" id="token_g" value="<?php echo $_SESSION['mi_token1']?>">
    <input type="hidden" id="miflag" >
</html>
