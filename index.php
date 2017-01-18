<?php
date_default_timezone_set("America/Lima");
?>
<!DOCTYPE html>

<html lang="es">
    <head>
        <meta charset=utf-8>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Money Flash Prueba</title>
        <!-- Load Roboto font -->
        <!--<link href='http://fonts.googleapis.com/css?family=Roboto:400,300,700&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>-->
        <!-- Load css styles -->
        <link rel="stylesheet" type="text/css" href="pagina/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="pagina/css/bootstrap-responsive.css" />
        <link rel="stylesheet" type="text/css" href="pagina/css/style.css" />
        <link rel="stylesheet" type="text/css" href="pagina/css/pluton.css" />
        <!--[if IE 7]>
            <link rel="stylesheet" type="text/css" href="css/pluton-ie7.css" />
        <![endif]-->
        <link rel="stylesheet" type="text/css" href="pagina/css/jquery.cslider.css" />
        <link rel="stylesheet" type="text/css" href="pagina/css/jquery.bxslider.css" />
        <link rel="stylesheet" type="text/css" href="pagina/css/animate.css" />
        <!-- Fav and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="pagina/images/ico/apple-touch-icon-144.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="pagina/images/ico/apple-touch-icon-114.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="pagina/images/apple-touch-icon-72.png">
        <link rel="apple-touch-icon-precomposed" href="pagina/images/ico/apple-touch-icon-57.png">
        <link rel="shortcut icon" href="pagina/images/ico/favicon.ico">
    </head>

    <body>
        <?php include("pagina/menu_navbar.php"); ?>
        <!-- Start home section -->
        <!-- Start cSlider -->
        <?php include("pagina/home_slider.php"); ?>
        <!-- End home section -->
        <!-- Service section start -->
        <?php include("pagina/service.php"); ?>
        <!-- Service section end -->
        <!-- Portfolio section start -->
        <?php //include("portfolio.php"); ?>
        <!-- Portfolio section end -->
        <!-- About us section start -->
        <?php //include("about.php"); ?>
        <!-- Client section start -->
        <?php //include("clients.php"); ?>
        <!-- Price section start -->
        <?php //include("pagina/price.php"); ?>
        <!-- Newsletter section start -->
        <?php include("pagina/newsletter.php"); ?>
        <!-- Contact section start -->
        <?php include("pagina/contact.php"); ?>
        <!-- Footer section start -->
        <div class="footer">
            <p>&copy; 2017 Desarrollado por : <a href="http://www.dataweb.com">Dataweb Cusco</a></p>
            <!--<p>&copy; 2013 Theme by <a href="http://www.dataweb.com">Dataweb Cusco</a>, <a href="http://goo.gl/NM84K2">Documentation</a></p>-->            
        </div>
        <!-- Footer section end -->
        <!-- ScrollUp button start -->
        <div class="scrollup">
            <a href="#">
                <i class="icon-up-open"></i>
            </a>
        </div>
        <!-- ScrollUp button end -->
        <!-- Include javascript -->
        <script type="text/javascript" src="pagina/js/jquery.js"></script>
        <script type="text/javascript" src="pagina/js/jquery.mixitup.js"></script>
        <script type="text/javascript" src="pagina/js/bootstrap.js"></script>
        <script type="text/javascript" src="pagina/js/modernizr.custom.js"></script>
        <script type="text/javascript" src="pagina/js/jquery.bxslider.js"></script>
        <script type="text/javascript" src="pagina/js/jquery.cslider.js"></script>
        <script type="text/javascript" src="pagina/js/jquery.placeholder.js"></script>
        <script type="text/javascript" src="pagina/js/jquery.inview.js"></script>
        <script type="text/javascript" src="pagina/js/app.js"></script>        
        <!-- Load google maps api and call initializeMap function defined in app.js -->
        <!--<script async="" defer="" type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACSDq8BPWccF3JVXnDhNoqZUhuiQXOfKs"></script>-->
        <script async="" defer="" type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACSDq8BPWccF3JVXnDhNoqZUhuiQXOfKs&sensor=false&callback=initializeMap"></script>
        <!-- css3-mediaqueries.js for IE8 or older -->
        <!--[if lt IE 9]>
            <script src="js/respond.min.js"></script>
        <![endif]-->

    </body>
</html>


</body>
</html>