<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
session_start();
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
if(! isset($_SESSION["nick"])){ 
    Header("Location : Logout.php"); 
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Conceptos</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/css_conceptos.css">
        
    <style type="text/css">
/*        //#contiene_tabla{font-family:sans-serif;font-size:12px}
        //table {width:100%;box-shadow:0 0 10px #ddd;text-align:left}*/
        th {padding:5px;background:#555;color:#fff}
        td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
        td input{height:24px;width:100px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .guardagrupo{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        /*//.anular{background:url(img/eliminar.png) 0 0 no-repeat}*/	
        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        .ocultame {display: none}
        .ocultamee {display: none}
    </style>
<script type="text/javascript">
//onInactive(300000, function () {
//    alert('Inactive for 5 seconds');
//    window.location.href = 'Logout.php';
//});
//
//function onInactive(ms, cb) {
//
//    var wait = setTimeout(cb, ms);
//
//    document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
//        clearTimeout(wait);
//        wait = setTimeout(cb, ms);
//
//    };
//}
</script>
</head>    
<body >
    <div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">Conceptos</a>
                </li>
                <!--<li>
                    <a href="#">Dashboard</a>
                </li> -->
                
                <div id="divmonto" class="input-group input-group-sm">
                    <span class="input-group-addon">Descripcion</span>    
                    <input type="text" class="form-control" id="descripcion" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                </div>    
                
                <div id="divmonto" class="input-group input-group-sm">
                    <span class="input-group-addon">Grupo</span>                        
                    <select class=" form-control input-sm"   id="listagrupo"> 
                        <option value="0">Seleccione...</option>
                        <option value="I">INGRESO</option>
                        <option value="S">SALIDA</option>
                    </select>
                </div>
                    <button type="button" id="btn_nuevo"    class="btn btn-default btn-xs blue">Nuevo</button>
                    <button type="button" id="btn_guardar"  class="btn btn-default btn-xs blue">Guardar</button>
                    <button type="button" id="btn_cancelar" class="btn btn-default btn-xs blue">Cancelar</button>                    
                    <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">                        
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="mensaje"></div>
            <!--<div class="container-fluid">-->
                <div class="row">
                    <div class="col-lg-12">                        
                        <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>                        
                        <div id="contiene_tabla" class="table-responsive mygrid-wrapper-div">
                            <table id="tabla_conceptos" class="editinplace table-condensed">
                                <thead >
                                    
                                </thead>
                                <tbody>
                    
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <!--</div>-->
        </div> <!-- /#page-content-wrapper -->
        <input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" >  
        <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >          
        <input type="hidden" id="sele_as" value="b[1]"> <!-- como bandera al seleccionar filas -->
        <input type="hidden" id="id" > 
    </div>
    <!-- /#wrapper -->                 
        
    <!-- jQuery -->
            
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" src="js/FuncionesConceptos.js"></script>
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
   
</body>

</html>
