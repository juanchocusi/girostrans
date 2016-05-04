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

    <title>Asociados-Usuarios</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">      
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    <link rel="stylesheet" type="text/css" href="css/css_usuarios.css">
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
        
</head>
<style type="text/css">
        
        th {padding:5px;background:#555;color:#fff}
        td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
        
        .editable span{display:block;}
        .editable span:hover {background:url(img/edit.png) 80% 50% no-repeat;cursor:pointer}
        
        td input{height:24px;width:200px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
        a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
        .guardar{background:url(img/save.png) 0 0 no-repeat}
        .guardatipo{background:url(img/save.png) 0 0 no-repeat}
        .cancelar{background:url(img/cancel.png) 0 0 no-repeat}
        .anular{background:url(img/eliminar.png) 0 0 no-repeat}

        .mensaje{display:block;text-align:center;margin:0 0 20px 0}
        .ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
        .ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
        .ocultame {display: none}

    </style>
<body>

<div id="wrapper">

    <?php include ("menu.php");  ?>
    
    <div id="page-content-wrapper">
        <!--formulario-->
        <div class="container-fluid">
            <div class="col-xs-6 col-sm-3">                
                     <div class="input-group input-group-sm">
                        <span class="input-group-addon">DNI</span>
                        <input type="text" class="form-control" id="dni_u" onkeyup='javascript:this.value = this.value.toUpperCase();' maxlength="10">        
                     </div>
                     <div class="input-group input-group-sm">
                        <span class="input-group-addon">Nombres</span>
                        <input type="text" class="form-control" id="nombres_u" onkeyup='javascript:this.value = this.value.toUpperCase();' >
                     </div>
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon">Apellidos</span>
                        <input type="text" class="form-control" id="apellidos_u" onkeyup='javascript:this.value = this.value.toUpperCase();'>
                    </div>
            </div>
            <div class="col-xs-6 col-sm-3">
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon">Nick</span>
                        <input type="text" class="form-control" id="nick_u"  onkeyup='javascript:this.value = this.value.toUpperCase();'     placeholder="">
                    </div>
                    <div class="input-group input-group-sm">
                        <span id="cuenta" class="input-group-addon" title="Tipo de Usuario">TipoUsuario</span>             
                        <select id="tusuario" class="form-control input-sm"> <option value="OPERADOR">OPERADOR </option> <option value="ENCARGADO">ENCARGADO</option> <option value="ADMIN">ADMIN</option> </select>
                    </div>
                    <div class="input-group input-group-sm">
                        <span class="input-group-addon">Password</span>
                        <input type="password" class="form-control" id="pass"  placeholder="Digita CONTRASEÑA">
                    </div>
            </div>
            <div class="col-xs-6 col-sm-3">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" id="direccion_u" onkeyup='javascript:this.value = this.value.toUpperCase();' placeholder="Direccion">
                    <input type="text" class="form-control" id="telefono_u" onkeyup='javascript:this.value = this.value.toUpperCase();'  placeholder="Telefonos">
                    <input type="text" class="form-control" id="email_u"  onkeyup='javascript:this.value = this.value.toUpperCase();'     placeholder="e-mail">                    
                </div>
                
                <div id="divpass" class="input-group input-group-sm ocultame">
                    <input type="password" class="form-control" id="newpass"  placeholder="Nueva contraseña">
                    <input type="password" class="form-control" id="repass"   placeholder="Repite contraseña">
                                        
                    <button type="button" id="btn_cancelapass" class="btn btn-default btn-xs blue">Cancelar</button>
                    <button type="button" id="btn_guardapass"  class="btn btn-default btn-xs blue">Guardar</button>                                                   
                </div>
            </div>
            <div class="col-xs-6 col-sm-3">
            
                <div id="divbotones" class="input-group input-group-sm">
                    <button type="button" id="btn_nuevo" title="Nuevo"       class="btn btn-default btn-xs blue">Nuevo</button>
                    <button type="button" id="btn_guardar" title="Guardar"   class="btn btn-default btn-xs blue ">Guardar</button>                   
                    <button type="button" id="btn_cancelar" title="Cancelar" class="btn btn-default btn-xs blue">Cancelar</button>
                    <br>
                    <button type="button" id="btn_pass" title="Cambiar Password" class="btn btn-default btn-xs blue">Password</button>
                    <button type="button" id="btn_sucursal" title="Asigna Sucursal" class="btn btn-default btn-xs  blue">Sucursal</button>
                    <button type="button" id="btn_cuentas" title="Asigna Nro de Cuenta" class="btn btn-default btn-xs blue">Cuentas</button>
                    
                    <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Buscar...">                                                   
                </div>
                <div id="divpass" class="input-group input-group-sm ocultame">
                    <input type="password" class="form-control" id="newpass"  placeholder="Nueva contraseña">
                    <input type="password" class="form-control" id="repass"   placeholder="Repite contraseña">
                                        
                    <button type="button" id="btn_cancelapass" class="btn btn-default btn-xs blue">Cancelar</button>
                    <button type="button" id="btn_guardapass"  class="btn btn-default btn-xs blue">Guardar</button>                                                   
                </div>
                
            </div>    
        </div>
        
        <div class="mensaje"></div>
        <!--tabla-->
        <div class="container-fluid">
            <div class="col-lg-12">                        
                <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle" title="Oculta Barra Lateral">Menu</a>

                <div id="contiene_tabla" class="table-responsive mygrid-wrapper-div">                                                   
                    <table id="tabla_usuarios" class="editinplace table table-condensed table-hover ">
                        <tr>
                            <th>ID.</th>
                            <th>D.N.I.</th>
                            <th>Apellidos</th>
                            <th>Nombres</th>
                            <th>Nick</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>e-mail</th>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
        
    </div>
    <!--page content-->   
</div>
<!--wrapper-->
<?php include("usuariosDialogo.php"); ?>

    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>    
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" language="javascript" src="js/custom.js"></script>
    
    <script type="text/javascript" src="js/validacampos.js"></script>
    <script type="text/javascript" src="js/FuncionesUsuarios.js"></script>
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
</body>

</html>