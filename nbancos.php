<?php
date_default_timezone_set("America/Lima");
//require_once("controles/classRecibeEntrega.php");
session_start();
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Bancos</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    
    <link rel="stylesheet" type="text/css" href="css/css_bancos.css">
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
        
<style type="text/css">
        
        th {padding:5px;background: lightslategray; color:#fff}
        td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 90% 50% no-repeat;cursor:pointer}
        td input{height:24px;width:200px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .guardagrupo{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        .anular{background:url(img/eliminar.png) 0 0 no-repeat}	
        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        .ocultame {display: none}

 </style>

</head>    
<body>
    <div id="wrapper">
        <?php include("menu.php"); ?>
        <!--formulario-->
        <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="col-xs-6 col-sm-4">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Descripcion</span>
                    <input type="text" class="form-control" id="desc_banco" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Iniciales</span>
                    <input type="text" maxlength="10" class="form-control" id="inicial_banco" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Dirección</span>
                    <input type="text" class="form-control" id="direccion_banco" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                </div>
            </div>
            <div class="col-xs-6 col-sm-4">
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">WEB</span>
                    <input type="text" class="form-control" id="web_banco" placeholder="WEB">
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Telefono</span>    
                    <input type="text" class="form-control" id="fono_banco" placeholder="Telefono">
                </div>    
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Tipo</span>             
                    <select class="form-control" id="select_tipocuenta" > <option value="C">BANCO</option> <option value="A">AGENTE</option> </select>
                </div>
            </div>    
            <div class="col-xs-6 col-sm-4">    
                <input type="text" class="form-control ocultame" id="nrocuenta_agente" style="text-transform:uppercase" placeholder="Nro de Cuenta AGENTE">
                <div class="input-group input-group-sm">
                    <input type="button" id="btn_nuevo"    class="btn btn-default  btn-xs blue" value="Nuevo" >
                    <input type="button" id="btn_guardar"  class="btn btn-default  btn-xs blue" value="Guardar">
                    <input type="button" id="btn_cancelar" class="btn btn-default  btn-xs blue" value="Cancelar">

                    <input type="text" class="form-control blue" id="buscador" placeholder="Buscar" style="text-transform:uppercase" >
                </div>
            </div>
        </div>
            <!--tabla-->
        <div class="container-fluid">
                <div class="mensaje"></div>
                <div class="row">
                    <div class="col-lg-12">                        
                        <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>
                        <div id="contiene_tabla" class="table-responsive mygrid-wrapper-div">                                        
                            <table id="tabla_bancos" class="editinplace table table-condensed table-hover">

                            </table>                
                        </div>
                </div>
            </div>                
        </div>
            
        </div>
        <!--content wrapper-->
    </div>
    <!--wrapper-->  
    <input type="hidden" id="nick" value="<?php echo $_SESSION['nick'] ?>" >
    <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['tipousuario'] ?>" >
    <input type="hidden" id="codsucursal" value="<?php echo $_SESSION['codsucursal'] ?>" >
    <input type="hidden" id="idbanco">
    <input type="hidden" id="descbanco" >
    <input type="hidden" id="sele" value="b[0]">
    <input type="hidden" id="sele_as" value="[0]">
    
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" language="javascript" src="js/custom.js"></script>
    
    <script type="text/javascript" src="js/FuncionesBancos.js"></script>    
    <script type="text/javascript" src="js/validacampos.js"></script>   
   <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>      
</body>

</html>
