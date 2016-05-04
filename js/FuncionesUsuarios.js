
function RecuperaFilaUS(idfila) {
    var idfila1 = $('#sele_us').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfila1 !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    //for (var i = 0; i < elTableCells.length; i++) {                }
        //var codigo = elTableCells[3].innerHTML;
        document.getElementById("codsucursal").value =elTableCells[3].innerHTML; //codigo.substring(0, 3);
        document.getElementById("nick_u").value = elTableCells[2].innerHTML;        
        document.getElementById("sele_us").value = idfila;
        $('#datossucursal').val(elTableCells[4].innerHTML);
}

function fnCreaTablaUS( json ){
var html; 
var i=0;
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='u.s[" + contador + "]' onclick='RecuperaFilaUS(this.id);'>";
        i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td class='ocultame'>" + json[contador].flag         + "</td>";
        html += "<td>"                  + json[contador].nusuario     + "</td>";
        html += "<td class='ocultame'>" + json[contador].cod_sucursal + "</td>";
        html += "<td>"                  + json[contador].nom_sucursal + "</td>";        
        html += "<td> <button id='btn_anularus' onclick='fnAnulaUS();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button> </td>"; 
      html += "</tr>";
    } 
    $("#tbody_usuariosucursal").html( html );
}

function fnListaInsertaUS(){
        $.ajax({ async: true,type: "POST",dataType: "json",cache: false,        
        data: {opcion:'USUARIOSUCURSAL', nick:$('#nick_u').val(),codsucu:$('#codsucursal').val(),op:$("#opproceso").val()},        
        url: "controles/ManteUsuarios.php",
        beforeSend:function(objeto){$('.mensaje1').css('display','block'); $(".mensaje1").html("<img src='img/cargando.gif'>"); },
        complete:function(objeto){$('.mensaje1').css('display','none');},
        success: fnCreaTablaUS        
        });
return false;
}

function fnAnulaUS() {
    jConfirm("¿Esta seguro de Eliminar ? \n" + $('#nick_u').val() + " ==> " + $('#datossucursal').val(), "Giros - Transferencias", function (r) {
        if (r) {
            if ($('#codsucursal').val() !== '' || $('#datossucursal').val() !== '') {
                $("#opproceso").val("A"); //ANULA EN EL SP_
                fnListaInsertaUS();
            } else {
                jAlert("Seleccione datos a eliminar", "Transferencias");
            }
        }
    });
    return false;
}

function RecuperaFilaCuentas(idfila) {
    var idfilac = $('#sele_asc').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {               
        document.getElementById("txt_nrocuenta").value = elTableCells[1].innerHTML;
        document.getElementById("txt_bancos").value = elTableCells[2].innerHTML;
        document.getElementById("sele_asc").value = idfila;
    }   
    document.getElementById("sele_asc").value = idfila;
}

function fnCreaTablaUsuarioCuentas( json ){
var html; 
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='us[" + contador + "]' onclick='RecuperaFilaCuentas(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td>" + json[contador].nrocuenta + "</td>";
        html += "<td>" + json[contador].desc_banco + "</td>";
        html += "<td> <button id='btn_eliminacuenta' onclick='fnAnulaCuenta();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button> </td>"; 
      html += "</tr>";
    } 
    $("#tbody_cuentas").html( html );
}

function fnCargaBancos() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'SOLOAGENTES'},
        url: "controles/ManteBancos.php",        
        success: fnCreaTablaBancos
    });
}   

function fnCreaTablaBancos( json ){
var html; 
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='b[" + contador + "]' onclick='fnSeleccionaFilaBancos(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td class='ocultame' >" + json[contador].idbanco + "</td>";
        html += "<td>" + json[contador].desc_banco + "</td>";        
      html += "</tr>";
    } 
    $("#body_bancos").html( html );
}

function fnSeleccionaFilaBancos(idfila) {
    var idfilac = $('#sele_b').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
        document.getElementById("txt_idbanco").value = elTableCells[1].innerHTML;
        document.getElementById("txt_bancos").value = elTableCells[2].innerHTML;
        document.getElementById("sele_b").value = idfila;
        $("#tabla_bancos").css("display","none");
}

function fnAnulaCuenta(){
    if ( $("#txt_nrocuenta").val().trim() !== 'No tiene Cuentas')
    {
        $("#opproceso").val("A"); /* anular */
        jConfirm("¿Esta seguro de Eliminar a :"+$('#txt_nrocuenta').val(), "Agentes", function(r) {
            if(r) {
                fnListaInsertaCuentas();
                $("#opproceso").val("L");
                $("#txt_idbanco").val("");
                $("#txt_nrocuenta").val("");
                //$('#btn_eliminacuenta').attr("disabled", true);
                $("#txt_bancos").css("display","none");
                $("#txt_nrocuenta").css("display","none");
                $("#dialogo_asigcuenta").dialog('close');
            }
         });
     } else { $("#dialogo_asigcuenta").dialog('close'); }     
}

function fnListaInsertaCuentas(){
    switch ($("#opproceso").val()) {
        case "I":
            if (($('#txt_idbanco').val().length > 0) && ($('#txt_nrocuenta').val().length > 9))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(),idcliente:'XXX',idusuario: $('#idusuario').val(),
                    usuamodifica: $('#nick').val(), opcion: "U", opproce: $("#opproceso").val(),codempresa:$("#cod_sucursal").val().substring(0,1)},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {$('.mensaje1').css('display', 'block'); $(".mensaje1").html("<img src='img/cargando.gif'>");},
                    complete: function (objeto) {$('.mensaje1').css('display', 'none');},
                    success: fnCreaTablaUsuarioCuentas
                });
                $('#btn_asignacuenta').attr("disabled", false);
                $("#txt_idbanco").val("");
                $("#txt_nrocuenta").val("");
                $("#txt_bancos").css("display","none");
                $("#txt_nrocuenta").css("display","none");
            } else {
                jAlert("Datos a incompletos, Verifique ...", "Agentes");
            }
            break;
        case "A" :
            if (($('#txt_bancos').val().trim() !== "") && ($('#txt_nrocuenta').val().trim() !== ""))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(),idcliente:'XXX',idusuario: $('#idusuario').val(), usuamodifica: $('#nick').val(), opcion: "U", opproce: $("#opproceso").val(),codempresa:$("#cod_sucursal").val().substring(0,1)},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {
                        $('.mensaje1').css('display', 'block');
                        $(".mensaje1").html("<img src='img/cargando.gif'>");
                    },
                    complete: function (objeto) {
                        $('.mensaje1').css('display', 'none');
                    },
                    success: fnCreaTablaUsuarioCuentas
                });
            } else {
                jAlert("Seleccione una cuenta a Eliminar, Verifique ...", "Agentes");
            }
            break;
        case "L":
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {nrocuenta:'XXX', idbanco:'XXX',idcliente:'XXX', idusuario: $('#idusuario').val(), usuamodifica: $('#nick').val(),opcion:'U',opproce: $("#opproceso").val(),codempresa:$("#cod_sucursal").val().substring(0,1)},
                url: "controles/ManteBancos.php",
                beforeSend: function (objeto) {$('.mensaje1').css('display', 'block');$(".mensaje1").html("<img src='img/cargando.gif'>");},
                complete: function (objeto) {$('.mensaje1').css('display', 'none');},
                success: fnCreaTablaUsuarioCuentas
            });
            break;
    }

return false;
}
       
function fnInsertaUsuarios(){
        var Table = document.getElementById("tabla_usuarios");
    Table.innerHTML = "";
    var cabecera=" <tr> <th>ID </th> <th>D.N.I.</th> <th>Apellidos</th> <th>Nombres</th> <th>NICK</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th> <th>TipoUsuario</th> </tr> ";
        $.ajax({ async: true, type: "POST", cache: 'false',
            data: { opcion:'INSERTA',dni:$('#dni_u').val(),apellidos:$('#apellidos_u').val(),nombres:$('#nombres_u').val(),nick: $('#nick_u').val(),direccion:$('#direccion_u').val(),
                telefono:$('#telefono_u').val(),email:$('#email_u').val(),pw:$('#pass').val(),tipo:$('#tusuario').val(),idempresa:$('#cod_sucursal').val()},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",            
            url: "controles/ManteUsuarios.php",
            beforeSend:function(objeto){ $(".mensaje").html("<img src='img/cargando.gif'>"); },
            complete:function(objeto){$('.mensaje').css('display','none');}
	}).done(function( json ) {
            $("#tabla_usuarios").html( cabecera );
            json = $.parseJSON(json);
            //alert(json.length);
            for(var i = 0; i < json.length; i++)
            {
            var x = i + 1;
            $('.editinplace').append(
                    "<tr id='u[" + i + "]' onclick='fnSeleccionaFilaUsuario(this.id);'>" +
                    "<td >" + x + "</td>" +
                    "<td class='ocultame id'>" + json[i].id + "</td>" +
                    "<td class='editable' data-campo='dni_usuario'><span>"          +json[i].dni_usuario       + "</span></td>" +
                    "<td class='editable' data-campo='apellidos_usuario'><span>"    +json[i].apellidos_usuario + "</span></td>" +
                    "<td class='editable' data-campo='nombres_usuario'><span>"      +json[i].nombres_usuario   + "</span></td>" +
                    "<td class='editable' data-campo='nusuario'><span>"             +json[i].nusuario          + "</span></td>" +
                    "<td class='editable' data-campo='direccion_usuario'><span>"    +json[i].direccion_usuario + "</span></td>" +
                    "<td class='editable' data-campo='telefono_usuario'><span>"     +json[i].telefono_usuario  + "</span></td>" +
                    "<td class='editable' data-campo='e_mail'>"                     +json[i].e_mail            + "</span></td>" +
                    "<td class='editable' data-campo='tipousuario'>"                +json[i].tipousuario       + "</span></td>" +
                    "<td>" + "<button id='btn_anular' onclick='fnAnulaUsuario();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>" +
                    "</tr>");
            }
	});
}

function fnListaUsuarios(){
        var Table = document.getElementById("tabla_usuarios");
    Table.innerHTML = "";
    var cabecera=" <tr> <th>ID </th> <th>D.N.I.</th> <th>Apellidos</th> <th>Nombres</th> <th>NICK</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th> <th>TipoUsuario</th> </tr> ";
        $.ajax({ async: true, type: "POST", cache: 'false',
            data: { opcion:'L',idempresa:$('#cod_sucursal').val().substr(0,1)},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",            
            url: "controles/ManteUsuarios.php",
            beforeSend:function(objeto){ $(".mensaje").html("<img src='img/cargando.gif'>"); },
            complete:function(objeto){$('.mensaje').css('display','none');}
	}).done(function( json ) {
            $("#tabla_usuarios").html( cabecera );
            json = $.parseJSON(json);
            //alert(json.length);
            for(var i = 0; i < json.length; i++)
            {
            var x = i + 1;
            $('.editinplace').append(
                    "<tr id='u[" + i + "]' onclick='fnSeleccionaFilaUsuario(this.id);'>" +
                    "<td >" + x + "</td>" +
                    "<td class='ocultame id'>" + json[i].id + "</td>" +
                    "<td class='editable' data-campo='dni_usuario'><span>"          +json[i].dni_usuario       + "</span></td>" +
                    "<td class='editable' data-campo='apellidos_usuario'><span>"    +json[i].apellidos_usuario + "</span></td>" +
                    "<td class='editable' data-campo='nombres_usuario'><span>"      +json[i].nombres_usuario   + "</span></td>" +
                    "<td class='editable' data-campo='nusuario'><span>"             +json[i].nusuario          + "</span></td>" +
                    "<td class='editable' data-campo='direccion_usuario'><span>"    +json[i].direccion_usuario + "</span></td>" +
                    "<td class='editable' data-campo='telefono_usuario'><span>"     +json[i].telefono_usuario  + "</span></td>" +
                    "<td class='editable' data-campo='e_mail'>"                     +json[i].e_mail            + "</span></td>" +
                    "<td class='editable' data-campo='tipousuario'>"                +json[i].tipousuario       + "</span></td>" +
                    "<td>" + "<button id='btn_anular' onclick='fnAnulaUsuario();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>" +
                    "</tr>");
            }
	});
}

function fnAnulaUsuario(){
if ($("#tipo_usuario").val().trim() === "ADMIN") { 
    jConfirm("Seguro de Eliminar: " + $('#nombres_u').val()+" "+$("#apellidos_u").val(),"Giros - Transferencias", function(r) { 
        if(r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opcion:'ANULA', idusuario:$("#idusuario").val()},
            url: "controles/ManteUsuarios.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete:   function (objeto) {$('#carga').css('display', 'none');}
            //success: fnMuestraBancos
            });
            fnListaUsuarios();            
            }
    });
} else {jError('Solo Administrador', 'Giros - Transferencias');}        
return false;
}

function fnSeleccionaFilaUsuario(idfila){
    var idfila1 = $('#sele_as').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfila1 !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    /*for (var i = 0; i < elTableCells.length; i++) {*/
        document.getElementById("idusuario").value = elTableCells[1].innerHTML;
        var dni = elTableCells[2].innerHTML;         document.getElementById("dni_u").value = dni.substring(6, dni.length - 7);
        var apel = elTableCells[3].innerHTML;        document.getElementById("apellidos_u").value = apel.substring(6, apel.length - 7);
        var nombre = elTableCells[4].innerHTML;      document.getElementById("nombres_u").value = nombre.substring(6, nombre.length - 7);
        var nick = elTableCells[5].innerHTML;        document.getElementById("nick_u").value = nick.substring(6, nick.length - 7);
        var direccion = elTableCells[6].innerHTML;   document.getElementById("direccion_u").value = direccion.substring(6, direccion.length - 7);
        var tele = elTableCells[7].innerHTML;        document.getElementById("telefono_u").value = tele.substring(6, tele.length - 7);
        var email = elTableCells[8].innerHTML;       document.getElementById("email_u").value = email.substring(6, email.length - 7);
        document.getElementById("sele_as").value = idfila;
        $('#btn_sucursal').attr('disabled',false);
        $('#btn_cuentas').attr('disabled',false);    
        $("#btn_pass").attr('disabled',false);
}

/*==============================================================================
============================== DOCUMENT  READY  ================================*/
$(document).ready(function(){
 //console.log($("#cod_sucursal").val().substring(0,1));

fnDeshabilita();
//$("#wrapper").toggleClass("toggled");
 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 190;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 190;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $( "#dialog" ).dialog({autoOpen: false,resizable:true, modal:true, height: 500, width: 420,
            close:function(){ }        
        });
    $("#open_dialog").click(function(){
        $( "#dialog" ).dialog("open");
        });

    $("#dialogo_asigcuenta").dialog({autoOpen: false, resizable:true, 
        modal:true, height: 400, width: 420,
        open: function( event, ui ) { $("#txt_nrocuenta").css("display","none");
                                      $("#txt_bancos").css("display","none"); 
                                      $("#tabla_bancos").css("display","none"); },
        close: function( event, ui ) {
            $("#txt_nrocuenta").val("");
            $("#txt_bancos").val("");
            $("#txt_nrocuenta").css("display","none");
            $("#txt_bancos").css("display","none");
            $("#opproceso").val("L"); 
        }
    });    

    $("#dialogo_asigsucursal").dialog({autoOpen: false, resizable:true, 
        modal:true, height: 400, width: 420,
        open:  function( event, ui ) { $("#txt_datosusuario").val();   $("#txt_sucursal").val(); },
        close: function( event, ui ) { $("#txt_datosusuario").val(""); $("#txt_sucursal").val(""); $('#datossucursal').val("");$('#codsucursal').val("");nick:$('#nick_u').val("");}
    });    
    
        $("#btn_cuentas").click(function () {
            var datos_usuario = $("#nombres_u").val() + " " + $("#apellidos_u").val();
            if (datos_usuario === " ") {
                jError("Seleccione un Usuario", "Giros - Transferencias");
            }
            else {
                $("#txt_datosusuario").val(datos_usuario);
                $("#dialogo_asigcuenta").dialog("open");
                $("#opproceso").val("L");
                fnListaInsertaCuentas();
            }
        });

        $("#btn_sucursal").click(function () {
            var datos_usuario = $("#nombres_u").val() + " " + $("#apellidos_u").val();
            if (datos_usuario === " ") {
                jError("Seleccione un Usuario", "Giros - Transferencias");
            }
            else {
                $("#txt_datosus").val(datos_usuario);                
                $("#dialogo_asigsucursal").dialog("open");                
                $("#opproceso").val("L");
                fnListaInsertaUS();
            }
        });
                

        $("#btn_asignacuenta").click(function(){
            $("#opproceso").val("I");
            fnListaInsertaCuentas();
            $("#tabla_cuentas").css("display","block");
        });
        $("#btn_nuevacuenta").click(function(){
            $("#txt_bancos").css("display","block");
            $("#txt_nrocuenta").css("display","block");
            $("#txt_bancos").val("");
            $("#txt_idbanco").val("");
            $("#txt_nrocuenta").val("");
            $("#tabla_bancos").css("display","block"); 
            fnCargaBancos();
            $("#tabla_cuentas").css("display","none"); 
            
        });        
        $("#btn_cancelacuenta").click(function(){            
                $("#opproceso").val("L");
                $("#txt_idbanco").val("");
                $("#txt_nrocuenta").val("");
                $('#btn_eliminacuenta').attr("disabled", true);
                $("#txt_bancos").css("display","none");
                $("#txt_nrocuenta").css("display","none");            
        });
        $("#btn_nuevasucursal").click(function(){                        
                $("#codsucursal").val("");
                $("#txt_sucursal").val("");
                $("#txt_sucursal").css("display","block");
                $('#btn_asignacuenta').attr("disabled", false);
                
        });
        $("#btn_asignasucursal").click(function(){
            jConfirm("¿Esta seguro de dar Acceso: \n"+$('#txt_datosus').val() +" ==> "+ $('#txt_sucursal').val(), "Giros - Transferencias", function(r) {
            if(r) {
                $("#opproceso").val("I");
                fnListaInsertaUS();
                $("#opproceso").val("L");
                $('#btn_asignacuenta').attr("disabled", true);
                $("#codsucursal").val("");
                $("#txt_sucursal").val("");
                $("#txt_sucursal").css("display","none");
                }
            });    
        });
    
        $("#btn_nuevo").click(function(){
            fnLimpia();
            fnHabilita();
        });
        $("#btn_cancelar").click(function(){
            fnLimpia();
            fnDeshabilita();
        });        
        $("#btn_guardar").click(function(){
            if ( $("#dni_u").val().trim() === '' || $("#nombres_u").val().trim() === '' ||  $("#apellidos_u").val().trim() === '' || $("#nick_u").val().trim() === '' || $("#pass").val().trim() === ''){
                jWarning('Faltan datos, verifique...','Giros - Transferencias');            
            } else { fnInsertaUsuarios();}
         fnDeshabilita();
        });                
        $("#btn_pass").click(function(){
         if ( $("#nick_u").val().trim() && $("#idusuario").val().trim() === ''){
            jWarning('Selecione Usuario...,','Giros - Transferencias');            
         } else {
              $("#divpass").css("display","block");
              $("#divbotones").css("display","none");  
         }
         //fnDeshabilita();
        });
        $("#btn_cancelapass").click(function(){
            $("#divpass").css("display","none");
            $("#divbotones").css("display","block");  
        });
    $("#btn_guardapass").click(function () {
        if ($("#newpass").val().trim() === '' || $("#repass").val().trim() === '') {
            jWarning('NO coinciden, verifique...,', 'Giros - Transferencias');
        } else {
            if ($("#newpass").val().trim() === $("#repass").val().trim()) {
                jConfirm("Esta seguro de cambiar pass de :" + $('#nick_u').val(), "Giros - Transferencias", function (r) {
                    if (r) {
                        fnActualizaPass();
                        $("#divpass").css("display", "none");
                        $("#divbotones").css("display", "block");
                    }
                });
            } else {
                        jWarning('NO coinciden, verifique...,', 'Giros - Transferencias');
                   }
        }
    });

    var Table = document.getElementById("tabla_usuarios");
    Table.innerHTML = "";
    var cabecera=" <tr> <th>ID </th> <th>D.N.I.</th> <th>Apellidos</th> <th>Nombres</th> <th>NICK</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th> <th>TipoUsuario</th> </tr> ";
        $.ajax({ async: true, type: "POST", cache: 'false',
            data: { opcion:'L',idempresa:$('#cod_sucursal').val().substr(0,1)},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",            
            url: "controles/ManteUsuarios.php",
            beforeSend:function(objeto){ $(".mensaje").html("<img src='img/cargando.gif'>"); },
            complete:function(objeto){$('.mensaje').css('display','none');}
	}).done(function( json ) {
            $("#tabla_usuarios").html( cabecera );
            json = $.parseJSON(json);
            //alert(json.length);
            for(var i = 0; i < json.length; i++)
            {
            var x = i + 1;
            $('.editinplace').append(
                    "<tr id='u[" + i + "]' onclick='fnSeleccionaFilaUsuario(this.id);'>" +
                    "<td >" + x + "</td>" +
                    "<td class='ocultame id'>" + json[i].id + "</td>" +
                    "<td class='editable' data-campo='dni_usuario'><span>"          +json[i].dni_usuario       + "</span></td>" +
                    "<td class='editable' data-campo='apellidos_usuario'><span>"    +json[i].apellidos_usuario + "</span></td>" +
                    "<td class='editable' data-campo='nombres_usuario'><span>"      +json[i].nombres_usuario   + "</span></td>" +
                    "<td class='editable' data-campo='nusuario'><span>"             +json[i].nusuario          + "</span></td>" +
                    "<td class='editable' data-campo='direccion_usuario'><span>"    +json[i].direccion_usuario + "</span></td>" +
                    "<td class='editable' data-campo='telefono_usuario'><span>"     +json[i].telefono_usuario  + "</span></td>" +
                    "<td class='editable' data-campo='e_mail'><span>"               +json[i].e_mail            + "</span></td>" +
                    "<td class='editable' data-campo='tipousuario'><span>"          +json[i].tipousuario       + "</span></td>" +
                    "<td>" + "<button id='btn_anular' onclick='fnAnulaUsuario();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>" +
                    "</tr>");
            }
	});

    var td, campo, valor, id;
    $(document).on("dblclick", "td.editable span", function (e)
    {
        if ($("#tipo_usuario").val().trim() === "ADMIN") {
            e.preventDefault();
            $("td:not(.id)").removeClass("editable");
            td = $(this).closest("td");
            campo = $(this).closest("td").data("campo");
            valor = $(this).text();
            id = $(this).closest("tr").find(".id").text();
            if (campo !== 'tipousuario') {
                td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a></a>");
            } else {
                td.text("").html("<select name='tusuario' ><option value='ADMIN'>ADMIN</option><option value='OPERADOR'>OPERADOR</option><option value='ENCARGADO'>ENCARGADO</option></select><a class='enlace guardatipo' href='#'>GuardaTipo</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            }
        } else {jError('Solo Administrador', 'Giros - Transferencias');}
    });

    $(document).on("click", ".guardar", function (e)
    {
        $(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() !== "")
        {
            $.ajax({type: "POST", url: "controles/ManteUsuarios.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: nuevovalor, id: id}
            }).done(function (msg) {$('.mensaje').css('display', 'block');$(".mensaje").html(msg);
                td.html("<span>" + nuevovalor + "</span>");$("td:not(.id)").addClass("editable");
                setTimeout(function () {$('.ok,.ko').fadeOut('fast');}, 2000);
            });
        }
        else {$(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");}
    });

    $(document).on("click", ".guardatipo", function (e)
    {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
//nuevovalor=$(this).closest("td").find("input").val();
        tusuario = $(this).closest("td").find("select").val();
        if (tusuario.trim() !== "")
        {
            var campo = 'tipousuario';
            $.ajax({type: "POST", url: "controles/ManteUsuarios.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: tusuario, id: id}
            }).done(function (msg) {$('.mensaje').css('display', 'block');$(".mensaje").html(msg);
                td.html("<span>" + tusuario + "</span>");$("td:not(.id)").addClass("editable");
                setTimeout(function () {$('.ok,.ko').fadeOut('fast');}, 2000);
            });
        } else { $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");}

    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
    });
    
/*============================================================================*/
/*========================= AUTOCOMPLETA =====================================*/
    $('#txt_bancoszzz').autocomplete({ 
            source: function (request, response) {
                $.ajax({
                    url: "controles/ManteBancos.php",
                    dataType: "json",
                    data: {
                        term: request.term,
                        /*opcion: $("#opt").val()*/
                        opcion: "A" /*agentes*/
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            minLength: 2
});
    
    $("#txt_bancoszzz").focusout(function() {
    if ($("#txt_bancos").val().trim() !== '' ){
        $.ajax({
        url: 'controles/ManteBancos.php',
        type: 'POST',
        dataType: 'json',
        data: {descbanco: $.trim($('#txt_bancos').val()), opcion:"BUSCADATO" }
        }).done(function(respuesta) {    
            $("#txt_idbanco").val(respuesta.idbanco);
        });
    }    
});

    $("#txt_sucursal").autocomplete({
        source: "controles/ManteSucursales.php",
        Length: 2,
        select: function(event, data) {
                $("#codsucursal").val(data.item.id);
                $("#txt_sucursal").val(data.item.value);
                }
    });

 /*============================================================================*/   
 /*============================= BUSCA ========================================*/
 $("#buscador").keyup(function(){
        // When value of the input is not blank
        if( $(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#tabla_usuarios tbody>tr").hide();
            $("#tabla_usuarios td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {   // When there is no input or clean again, show everything back
            $("#tabla_usuarios tbody>tr").show();
        }
    });
$.extend($.expr[":"], 
{
    "contains-ci": function(elem, i, match, array) 
    { return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0; }
});    
  
  
});
function fnLimpia(){
    $('#dni_u').val('');          $('#nombres_u').val('');    $('#apellidos_u').val('');    $('#nick_u').val('');    $('#pass').val('');
    $('#direccion_u').val('');    $('#telefono_u').val('');   $('#email_u').val('');
}

function fnDeshabilita(){           
    $('#dni_u').attr('disabled',true);    $('#nombres_u').attr('disabled',true);    $('#apellidos_u').attr('disabled',true);  $('#nick_u').attr('disabled',true);
    $('#pass').attr('disabled',true);     $('#direccion_u').attr('disabled',true);  $('#telefono_u').attr('disabled',true);   $('#email_u').attr('disabled',true);
    $('#tusuario').attr('disabled',true); $('#divpass').attr('disabled',true);
    /*$("#btn_nuevo").attr('disabled',true);*/ 
    $("#btn_guardar").attr('disabled',true);
    $("#btn_cancelar").attr('disabled',true);
    $("#btn_sucursal").attr('disabled',true);
    $("#btn_cuentas").attr('disabled',true);
    $("#btn_pass").attr('disabled',true);
}   

function fnHabilita(){           
    $('#dni_u').attr('disabled',false);     $('#nombres_u').attr('disabled',false);    $('#apellidos_u').attr('disabled',false);  $('#nick_u').attr('disabled',false);
    $('#pass').attr('disabled',false);      $('#direccion_u').attr('disabled',false);  $('#telefono_u').attr('disabled',false);   $('#email_u').attr('disabled',false);
    $('#tusuario').attr('disabled',false);  $('#divpass').attr('disabled',false);
    $("#btn_nuevo").attr('disabled',false);
    $("#btn_guardar").attr('disabled',false);
    $("#btn_cancelar").attr('disabled',false);
    $("#btn_sucursal").attr('disabled',false);
    $("#btn_gcuentas").attr('disabled',false);
    $("#btn_pass").attr('disabled',false);
}
function fnActualizaPass()
{
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion:'PASS',idusuario:$("#idusuario").val(),password:$("#newpass").val()},
        url: "controles/ManteUsuarios.php",
        beforeSend: function (objeto) {$('.mensaje1').css('display', 'block');$(".mensaje1").html("<img src='img/cargando.gif'>");},
        complete: function (objeto) {$('.mensaje1').css('display', 'none');},
        success: fnCreaTablaUsuarioCuentas
    });
}

