<?php
date_default_timezone_set("America/Lima");
require_once("controles/classRecibeEntrega.php");
$Fechahora = date("Y-m-d H:i:s");
$FechaHoy = date("Y-m-d");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
        <meta charset="utf-8">
        <title>Transferencias</title>
        <meta name="generator" content="Bootply" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel='stylesheet' type='text/css' href='css/jquery.alerts.css'>
        <link rel='stylesheet' type='text/css' href='css/Style_Clientes.css'>
        <link rel="shortcut icon" href="/bootstrap/img/favicon.ico">       
        <script src="js/FuncionesClientes.js"></script>
        <!-- CSS code from Bootply.com editor -->
        <script type="text/javascript" src="js/jquery.1.7.1.min.js"></script>
        <script type="text/javascript" src="js/jquery.alerts.js"></script>
        
<style type="text/css">
#jumbo{ padding-top: 10px; padding-bottom: 10px; }
#canvitas{ padding-top: 0px; padding-bottom: 0px; }
body { padding-top: 70px;}
footer { padding-left: 15px;  padding-right: 15px; }

/*
 * Off Canvas
 * --------------------------------------------------
 */
@media screen and (max-width: 768px) {
  .row-offcanvas { position: relative; -webkit-transition: all 0.25s ease-out;  -moz-transition: all 0.25s ease-out; transition: all 0.25s ease-out; }
  .row-offcanvas-left  .sidebar-offcanvas { left: -50%;  }
  .row-offcanvas-left.active { left: 50%;  }
  .sidebar-offcanvas {  position: absolute;    top: 0;    width: 50%;    margin-left: 12px;  }
}
#contiene_tabla{font-family:sans-serif;font-size:12px}
table {width:100%;box-shadow:0 0 10px #ddd;text-align:left}
th {padding:5px;background:#555;color:#fff}
td {padding:5px;border:solid #ddd;border-width:0 0 1px;}
.editable span{display:block;}
.editable span:hover {background:url(img/edit4.ico) 90% 50% no-repeat;cursor:pointer}
td input{height:24px;width:200px;border:1px solid #ddd;padding:0 5px;margin:0;border-radius:6px;vertical-align:middle}
a.enlace{display:inline-block;width:24px;height:24px;margin:0 0 0 5px;overflow:hidden;text-indent:-999em;vertical-align:middle}
.guardar{background:url(img/save2.png) 0 0 no-repeat}
.cancelar{background:url(img/cancel.png) 0 0 no-repeat}
.anular{background:url(img/eliminar.png) 0 0 no-repeat}	
.mensaje{display:block;text-align:center;margin:0 0 20px 0}
.ok{display:block;padding:10px;text-align:center;background:green;color:#fff}
.ko{display:block;padding:10px;text-align:center;background:red;color:#fff}
</style>


<script type='text/javascript' src="js/bootstrap.min.js"></script>
<script type='text/javascript'>
$(document).ready(function() {
  ControlesAlGuardar();   
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

</script>
</head>
    
<body>            
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Transferencias</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="#contact"><?php echo $_SESSION['sucursal']?></a></li> 
            <li class="active"><a href="#"><?php echo $_SESSION['usuario']?></a></li>
            <li class="active"><a href="#"><?php echo $_SESSION['tipousuario']?></a></li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
    </div><!-- /.navbar -->
    
<div class="container">

<div id="canvitas" class="row row-offcanvas row-offcanvas-left">
        
         <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
           <p class="visible-xs">
            <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas"><i class="glyphicon glyphicon-chevron-left"></i></button>
          </p>
          <div class="well sidebar-nav">
            <ul class="nav">
                <li><h4> Tablas </h4> </li>
              <li class="active"><a href="ManteClientes.php">Clientes</a></li>
              <li><a href="ManteUsuarios.php" >Usuarios</a></li>
              <li><a href="Sucursales.php" >Sucursales</a></li>              
            <!--  <li><a href="#">Bancos</a></li>
              <li><a href="#">Tipo Cuenta</a></li>
            -->
            </ul>
           
          </div><!--/.well -->
        </div><!--/span-->

<div class="col-xs-12 col-sm-9">
          <p class="pull-left visible-xs">
            <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Opciones</button>
          </p>
<!--          <div id="jumbo" class="jumbotron"> <h4> Clientes </h4> </div> <!-- Jumbotron -->      
<div>  <h4> Clientes </h4> </div> 
<div class="row">
    
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">
        <div class="input-group input-group-sm has-error">
            <span class="input-group-addon">D.N.I.</span>     
            <input type="text" style="text-transform:uppercase" maxlength="10" class="form-control" id="dni_c" name="dni_c" onkeyup='javascript:this.value=this.value.toUpperCase();' placeholder="DNI Cliente">        
        </div>
        <div class="input-group input-group-sm has-warning">
          <span class="input-group-addon">Nombres</span> 
          <input type="text" style="text-transform:uppercase" class="form-control" id="nombres_c" name="nombres_c" onkeyup='javascript:this.value=this.value.toUpperCase();' placeholder="Nombres del Cliente" >
        </div>  
        <div class="input-group input-group-sm has-warning">
          <span class="input-group-addon">Apellidos</span> 
          <input type="text" style="text-transform:uppercase" class="form-control" id="apellidos_c" name="apellidos_c" onkeyup='javascript:this.value=this.value.toUpperCase();' placeholder="Apelldos del Cliente">       
      </div>
    </div>
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">
            <div class="input-group input-group-sm has-warning">
                <span class="input-group-addon">Direccion</span> 
                <input type="text" style="text-transform:uppercase" class="form-control" id="direccion_c" value="---" onkeyup='javascript:this.value=this.value.toUpperCase();' name="direccion" placeholder="Direccion del Cliente">       
            </div>
            <div class="input-group input-group-sm has-success">
                <span class="input-group-addon">Telefono</span> 
                <input type="text" style="text-transform:uppercase" class="form-control" id="telefono_c" value="---" onkeyup='javascript:this.value=this.value.toUpperCase();' name="telefono" placeholder="Telefonos del Cliente">
            </div>  
            <div class="input-group input-group-sm has-success">
                <span class="input-group-addon">e-mail</span> 
                <input type="text" style="text-transform:uppercase" class="form-control" id="email_c" value="---" onkeyup='javascript:this.value=this.value.toUpperCase();' name="email" placeholder="e-mail del Cliente">       
            </div>                  
    </div><!--/span--> 
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">
            <div class="input-group input-group-sm has-success">
                <span class="input-group-addon">NroCuenta</span> 
                <input type="text" class="form-control" id="nrocuenta" onkeyup='javascript:this.value=this.value.toUpperCase();' name="direccion" placeholder="Direccion del Cliente">       
            </div>

    </div><!--/span-->     
    <div class="col-xs-6 col-sm-6 col-lg-4 form-group input-group-sm">    
            <button type="button" id="nuevo" name="nuevo" onclick="ControlesNuevo();" class="btn btn-info btn-xs">Nuevo</button>
            <input type="submit" id="guardar" name="guardar" class="btn btn-primary btn-xs" value="Guardar" onclick="FnInsertaCliente();">
            <button type="button" id="cancelar" name="cancelar" onclick="CotrolesCancelar();" class="btn btn-warning btn-xs">Cancelar</button>
            
            <button type="button" id="verfull" name="verfull" onclick="FnMuestraClientesFull();" class="btn btn-default btn-xs">Ver-Full</button>
            <div class="input-group input-group-sm has-success">
                <input type="text" style="text-transform:uppercase" class="form-control" id="busca_cli" name="busca_cli" placeholder="Buscar...">
                <span class="input-group-btn">          
                    <select id="optBusca"  class="btn btn-success"> <option value="A">Apellido </option> <option value="D">DNI </option> </select>
                </span>      
            </div>
       
    </div><!--/span-->     
</div><!--/row-->

<input type="hidden" name="nick"  id="nick" value="<?php echo $_SESSION['nick']?>" >  

</div> <!--class span-->
        
</div><!--/row- offcanvas-->

<div id="contiene_tabla" class="table-responsive" > 
    <div class="mensaje"></div>
    <table id="tabla_clientes" class="editinplace table table-hover table-responsive ">
        <tr>
            <th>ID.</th>
            <th>D.N.I.</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Nro.Cuenta</th>
            <th>Direccion</th>                        
        </tr>
    </table>
</div>
<hr>  <footer>       <p>© dataweb365 2014</p>      </footer>
</div><!--container-->

<script>
$(document).ready(function(){
   
		/* OBTENEMOS TABLA */
$("#busca_cli").keypress(function(e) {
if(e.which === 13) {
    if($('#busca_cli').val()!=='' && $('#busca_cli').val().length >2)
    {
    var Table = document.getElementById("tabla_clientes");
    Table.innerHTML = "";
    var cabecera=" <tr> <th>ID.</th> <th>D.N.I.</th> <th>Apellidos</th> <th>nombres</th> <th>Nro.Cuenta</th> <th>Direccion</th> </tr> ";
        $.ajax({
        async: true,
	type: "POST",
	url: "controles/Tablas_ListaClientes.php",                       
        data: { buscacli: $('#busca_cli').val(),opt:$('#optBusca').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        beforeSend:function(objeto){ $(".mensaje").html("<img src='img/loading.gif'>"); },
        complete:function(){$('.mensaje').css('display','none');}
	}).done(function(json) {
            $("#tabla_clientes").html( cabecera );
            json = $.parseJSON(json) 
            for(var i=0;i<json.length;i++)
            {
                $('.editinplace').append(                                                        
		"<tr><td class='id'>"+json[i].id+
                "</span></td><td class='editable' data-campo='dni_ruc'><span>"+json[i].dni_ruc+
		"</td><td class='editable' data-campo='apel_razon'><span>"+json[i].apel_razon+
		"</span></td><td class='editable' data-campo='nombres'><span>"+json[i].nombres+
                "</span></td><td class='editable' data-campo='nro_cuenta'><span>"+json[i].nro_cuenta+
		"</span></td><td class='editable' data-campo='direccion'><span>"+json[i].direccion+		
		"</span></td></tr>");
            }
	});
    } else { jAlert("Ingrese datos a buscar...","Transferencias"); 
            
            }
} /*end if 13*/        
});            

var td,campo,valor,id;
$(document).on("dblclick","td.editable span",function(e)
{
    e.preventDefault();
    $("td:not(.id)").removeClass("editable");
    td=$(this).closest("td");
    campo=$(this).closest("td").data("campo");
    valor=$(this).text();
    id=$(this).closest("tr").find(".id").text();
    td.text("").html("<input type='text' style='text-transform:uppercase;' onkeyup='javascript:this.value=this.value.toUpperCase();' name='"+campo+"' value='"+valor+"'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a>  <a class='enlace anular' href='#'>Cancelar</a>");
});
		
$(document).on("click",".guardar",function(e)
    {
			$(".mensaje").html("<img src='img/loading.gif'>");
			e.preventDefault();
			nuevovalor=$(this).closest("td").find("input").val();
			if(nuevovalor.trim()!="")
			{
				$.ajax({
					type: "POST",
					url: "controles/ActualizaCliente.php",
					data: { campo: campo, valor: nuevovalor, id:id }
				})
				.done(function( msg ) {
                                        $('.mensaje').css('display','block');
					$(".mensaje").html(msg);
					td.html("<span>"+nuevovalor+"</span>");
					$("td:not(.id)").addClass("editable");
					setTimeout(function() {$('.ok,.ko').fadeOut('fast');}, 3000);
                                        
				});
			}
			else $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
		});

$(document).on("click",".cancelar",function(e)
{
    e.preventDefault();
    td.html("<span>"+valor+"</span>");
    $("td:not(.id)").addClass("editable");
});

$(document).on("click",".anular",function(e)
{
    $(".mensaje").html("<img src='img/loading.gif'>");
    e.preventDefault();
    jConfirm("¿Esta seguro de Eliminar a:", "Transferencias", function(r) {
    if(r) {
        $.ajax({
        type: "POST",
        url: "controles/EliminaCliente.php",
        data: { id:id }        
        }).done(function( msg ) {
            $('.mensaje').css('display','block');
            $(".mensaje").html(msg);
            /*td.html("<span>"+nuevovalor+"</span>");*/
            $("td:not(.id)").addClass("editable");
            /*setTimeout(function() {$('.ok,.ko').fadeOut('fast');}, 2000);*/
            var Table = document.getElementById("tabla_clientes");
            Table.innerHTML = "";
            MuestraClientes();
        }); /* end done ajax*/
    }
    else $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
    }); /* end jconfirm*/
    
}); /* onclick*/
                
}); 
</script>
</body>
</html>