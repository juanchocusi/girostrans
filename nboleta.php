<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Boletas</title>
        
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">                        
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css"/>  
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>    
    <link rel="stylesheet" type="text/css" href="css/simple-sidebar.css">
    <link rel="stylesheet" type="text/css" href="css/css_tools.css"/>
    <link rel="stylesheet" type="text/css" href="css/css_boleta.css">
    
</head>    
<body>
    <div id="wrapper">
        <?php include("menu.php"); ?>    
        <div id="page-content-wrapper">
            <!--FORMULARIO-->
            <div class="container-fluid">
                <div class="col-xs-6 col-sm-3">
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Serie</span>
                    <input type="text" class="form-control" id="serie" maxlength="3" >        
                </div>    
                <div class="input-group input-group-sm">
                    <span class="input-group-addon">Numero</span>
                    <input type="text" class="form-control" id="numero" maxlength="6" >
                </div>
                
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">DNI</span>
                    <input type="text" class="form-control" id="dni" maxlength="8">
                </div>    
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Nombres</span>
                    <input type="text" class="form-control" id="nombres" readonly="readonly">
                </div>
                </div>
                
                <div class="col-xs-6 col-sm-3">
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Direccion</span>    
                    <input type="text" class="form-control" id="direccion"   onkeyup='javascript:this.value = this.value.toUpperCase();' >
                </div>
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Descrip.</span>    
                    <input type="text" class="form-control" id="descripcion" onkeyup='javascript:this.value = this.value.toUpperCase();' >
                </div>
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Fecha-Boleta</span>    
                    <input type="text" class="form-control" id="fecha"   >
                </div>
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Importe S/.</span>    
                    <input type="text" class="form-control" id="importe" >
                </div>
                </div>
                <div class="col-xs-6 col-sm-3">
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Registro</span>    
                    <input type="text" class="form-control" id="registra" readonly="readonly" >
                </div>
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Fecha Impresion</span>    
                    <input type="text" class="form-control" id="fechaimpresion" readonly="readonly">
                </div>
                
                <div class="input-group input-group-sm"> 
                    <span class="input-group-addon">Observacion</span>    
                    <input type="text" class="form-control" id="observacion"  onkeyup='javascript:this.value = this.value.toUpperCase();' >
                </div>
                    <input type="text" id="fechai" value="<?php echo date("Y/m/d");?>">
                    <input type="text" id="fechaf" value="<?php echo date("Y/m/d");?>">      
                </div>
                <div class="col-xs-6 col-sm-3">
                    <button type="button" id="btn_nuevo"        class="btn btn-default btn-xs blue">Nuevo</button>
                    <button type="button" id="btn_guardar"  class="btn btn-default btn-xs blue">Guardar</button>
                    <button type="button" id="btn_cancelar"     class="btn btn-default btn-xs blue">Cancelar</button>
                    <button type="button" id="btn_editar"     class="btn btn-default btn-xs blue">Editar</button>
                    
                    
                    <input type="text" style="text-transform:uppercase" class="form-control" id="buscador" placeholder="Filtrar..." title="press ENTER">
                    <div class="input-group input-group-sm ">
                        <input type="text" style="text-transform:uppercase" class="form-control" id="busca_boleta" placeholder="Buscar" title="Press ENTER para buscar">
                        <span class="input-group-btn">          
                        <select id="optBusca"  class="btn btn-default"> <option value="A">Apellido </option> <option value="D">DNI </option> </select>
                        </span>
                    </div>            
                        
                        <button type="button" id="btn_mostrar" class="btn btn-default btn-xs blue">Mostrar Boletas</button>
                </div>
            </div>
            <!--tabla-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">                        
                        <a href="#menu-toggle" class="btn btn-default btn-xs blue" id="menu-toggle"  title="Oculta Barra Lateral">Menu</a>
                        
                        <div id="contiene_tabla" class="table-responsive mygrid-wrapper-div">
                        <table id="tabla_boletas" class="table table-condensed">
                            <tr >
                                <th>Itm</th>
                                <th class="ocultamee" >ID</th>
                                <th>Numero</th> 
                                <th>DNI</th>
                                <th>Nombres</th>
                                <th class="ocultame" >Direccion</th>
                                <th class="ocultame" >Descripcion</th>
                                <th>Fecha</th>
                                <th>Importe</th>
                                <th class="ocultame" >Usuario</th>
                                <th >FechaCrea</th>
                                <th class="ocultame" >Observa</th>
                                <th class="ocultame" >Anula</th>
                            </tr>
                            <tbody id="body_boletas" >
                                
                            </tbody>
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
    <input type="hidden" id="tipousuario" value="<?php echo $_SESSION['tipousuario'] ?>" >          
    <input type="hidden" id="sele" value="b[0]"> <!-- como bandera al seleccionar filas -->

    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.10.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.alerts.mod.js"></script>
    <script type="text/javascript" language="javascript" src="js/jquery.metisMenu.js"></script>        
    <script type="text/javascript" language="javascript" src="js/custom.js"></script>
    
    <script type="text/javascript" src="js/validacampos.js"></script>   
    <script type="text/javascript" src="js/FuncionesBoleta.js"></script>
    <script type="text/javascript" src="js/CierraSesionInactivo.js"></script>
</body>

</html>
        
        