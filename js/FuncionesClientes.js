
function ControlesNuevo()
{
    document.getElementById("dni_c").value = '';
    document.getElementById("apellidos_c").value = '';
    document.getElementById("nombres_c").value = '';
    document.getElementById("direccion_c").value = '';
    document.getElementById("telefono_c").value = '';
    document.getElementById("email_c").value = '';

    document.getElementById("btn_guardar").disabled = false;
    document.getElementById("nuevo").disabled = true;

    document.getElementById("dni_c").disabled = false;
    document.getElementById("apellidos_c").disabled = false;
    document.getElementById("nombres_c").disabled = false;
    document.getElementById("direccion_c").disabled = false;
    document.getElementById("telefono_c").disabled = false;
    document.getElementById("email_c").disabled = false;
    document.getElementById("busca_cli").disabled = true;

}
function ControlesAlGuardar()
{
    document.getElementById("btn_guardar").disabled = true;
    document.getElementById("nuevo").disabled = false;

    document.getElementById("dni_c").disabled = true;
    document.getElementById("apellidos_c").disabled = true;
    document.getElementById("nombres_c").disabled = true;
    document.getElementById("direccion_c").disabled = true;
    document.getElementById("telefono_c").disabled = true;
    document.getElementById("email_c").disabled = true;
    document.getElementById("busca_cli").disabled = false;
}
function CotrolesCancelar()
{
    ControlesNuevo();
    ControlesAlGuardar();
    document.getElementById("nuevo").disabled = false;
    document.getElementById("busca_cli").disabled = false;
    document.getElementById("btn_guardar").disabled = true;
}

function fnCreaTablaUsuarioCuentas(json)
{

    var html;
    for (var contador = 0; contador < json.length; contador++) {
        html += "<tr id='us.[" + contador + "]' onclick='RecuperaFilaCuentas(this.id);'>";
        var i = contador + 1;
        html += "<td>" + i + "</td>";
        html += "<td>" + json[contador].nrocuenta + "</td>";
        html += "<td>" + json[contador].desc_banco + "</td>";
        html += "</tr>";
    }
    $("#tbody_cuentas").html(html);
}

function fnListaInsertaCuentas(){
    switch ($("#opproceso").val()) {
        case "I":
            if (($('#hid_idbanco').val().trim() !=='' ) && ($('#txt_nrocuenta').val().length > 9))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#hid_idbanco').val(), idcliente: $('#hid_idcliente').val(), usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {$('.mensaje1').css('display', 'block');$(".mensaje1").html("<img src='img/cargando.gif'>");},
                    complete: function (objeto) {$('.mensaje1').css('display', 'none');},
                    success: fnCreaTablaUsuarioCuentas
                });
                $("#opproceso").val("L");
                $('#btn_asignacuenta').attr("disabled", false);
                $("#hid_idbanco").val("");
                $("#txt_nrocuenta").val("");
                $("#hid_idcliente").val("");
                $("#txt_bancos").css("display","none");
                $("#txt_nrocuenta").css("display","none");
            } else {
                jAlert("Datos incompletos, Verifique ...", "Agentes");
            }
            break;
        case "A" :
            if (($('#txt_bancos').val().trim() !== "") && ($('#txt_nrocuenta').val().trim() !== ""))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#hid_idbanco').val(), idcliente: $('#hid_idcliente').val(), usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
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
                data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#hid_idbanco').val(), idcliente: $('#hid_idcliente').val(), usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
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
            break;
    } /* end CASE */

return false;
}

function fnAnulaCliente() {

    if ($('#hid_idcliente').val().trim() === '') {
        jError('No ha seleccionado Cliente, Verifique...', 'Giros - Transferencias');
    } else {
        jConfirm("¿Esta seguro de Eliminar CLIENTE: \n " + $('#nombres_c').val() + " " + $('#apellidos_c').val(), "Giros - Transferencias", function (r) {
            if (r) {                
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {opcion: 'ANULAR', id: $("#hid_idcliente").val()},
                    url: "controles/ManteClientes.php",
                    beforeSend: function (objeto) {$(".mensaje").html("<img src='img/loading.gif'>");},
                    complete: function () { $('.mensaje').css('display', 'none');}
                    //success: fnMuestraBancos
                });
                $('#hid_idcliente').val('');
                ocultarFila( $('#sele_as').val(),false );
            } /*else {$('#hid_idcliente').val('');}*/
        });
    }

}

/* ============================ recupera fila ===============================
 ===============================================================================*/
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
}

function fnRecuperaFilaCliente(idfila) {
    
    if ($("#sele").val() === "S") { /* Paa diferenciarlo de la edicion al vuelo */
        var idfila1 = $('#sele_as').val();
        var elTableRow = document.getElementById(idfila);
        var elTableRow1 = document.getElementById(idfila1);
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
        if (idfila1 !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
        }
        var elTableCells = elTableRow.getElementsByTagName("td");                    
            $('#hid_idcliente').val(elTableCells[1].innerHTML);
            var dni = elTableCells[2].innerHTML;            document.getElementById("dni_c").value = dni.substring(6, dni.length - 7);
            var apel = elTableCells[3].innerHTML;           document.getElementById("apellidos_c").value = apel.substring(6, apel.length - 7);
            var nom = elTableCells[4].innerHTML;            document.getElementById("nombres_c").value = nom.substring(6, nom.length - 7);
            var dir = elTableCells[5].innerHTML;            document.getElementById("direccion_c").value = dir.substring(6, dir.length - 7);
            var fono = elTableCells[6].innerHTML;           document.getElementById("telefono_c").value = fono.substring(6, fono.length - 7);            
        document.getElementById("sele_as").value = idfila;        
    }
}

function fnInsertaCliente() {
    var Table = document.getElementById("tabla_clientes");
    Table.innerHTML = "";
    var cabecera = " <tr> <th>Itm</th><th class='ocultamee' >ID</th> <th>D.N.I.</th> <th>Apellidos</th> <th>nombres</th> <th>Direccion</th> <th>Telefono</th><th>e-mail</th> <th class='ocultame'>Usuario</th> <th class='ocultame'>Fecha</th></tr> ";
    $.ajax({async: true, type: "POST",
        data: {opcion: 'INSERTA', dniruc: $('#dni_c').val(), apelrazon:$('#apellidos_c').val(),nombre:$('#nombres_c').val(),direccion:$('#direccion_c').val(),
               fono:$('#telefono_c').val(),email:$('#email_c').val(),usuamodi:$('#nick').val()},
        url: "controles/ManteClientes.php",        
        beforeSend: function (objeto) {$(".mensaje").html("<img src='img/loading.gif'>");},
        complete: function () { $('.mensaje').css('display', 'none');}
    }).done(function (json) {
        $("#tabla_clientes").html(cabecera);
        json = $.parseJSON(json);        
        for (var i = 0; i < json.length; i++)
        {
            var x = i + 1; var rpta='';
            $('.editinplace').append(
                    "<tr id='b[" + i + "]' onclick='fnRecuperaFilaCliente(this.id);'>" +
                    "<td >" + x + "</td>" +
                    "<td class='ocultamee id'>"                             + json[i].id + "</td>" +
                    "<td class='editable' data-campo='dni_ruc'><span>"      + json[i].dni_ruc + "</span></td>" +
                    "<td class='editable' data-campo='apel_razon'><span>"   + json[i].apel_razon + "</span></td>" +
                    "<td class='editable' data-campo='nombres'><span>"      + json[i].nombres + "</span></td>" +
                    "<td class='editable' data-campo='direccion'><span>"    + json[i].direccion + "</span></td>" +
                    "<td class='editable' data-campo='telefono'><span>"     + json[i].telefono + "</span></td>" +
                    "<td class='editable' data-campo='e_mail'><span>"       + json[i].e_mail + "</span></td>" +
                    "<td class='ocultame' >"                                + json[i].usua_modi + "</td>" +
                    "<td class='ocultame'>"                                 + json[i].fecha_modi + "</td>" +
                    "<td>" + "<button id='btn_anular' onclick='fnAnulaCliente();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>" +
                    "</tr>");
            rpta = json[i].flag;
        }        
        
        if ( rpta === '1'){
            jWarning('DNI ya EXISTE, Verifique...','Giros - Transferencias');
        }
        if ( rpta === '2'){
            jWarning('CLIENTE ya EXISTE, Verifique...','Giros - Transferencias');
        }
        
    });

ControlesAlGuardar();
return false;
}

/*============================ documentReady ================================= 
 ===========================================================================*/
$(document).ready(function () {
    ControlesAlGuardar();
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 140;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 140;
        $('.mygrid-wrapper-div').height(content_height);
    });
    
    $( "#btn_cancelar" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    $( "#mas_informacion" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#menu-toggle" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#btn_cuentas" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#btn_asignacuenta" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#btn_nuevacuenta" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#btn_eliminacuenta" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    
/* ============================ DIALOGOS =====================================*/
 
$("#dialogo_asigcuenta").dialog({autoOpen: false, resizable:true, 
        modal:true, height: 350, width: 350,
        open: function( event, ui ) { $("#txt_nrocuenta").css("display","none");
                                      $("#txt_bancos").css("display","none"); },
        close: function( event, ui ) {
            $("#txt_nrocuenta").val("");
            $("#txt_bancos").val("");
            $("#txt_nrocuenta").css("display","none");
            $("#txt_bancos").css("display","none");
            $("#opproceso").val("L"); 
        }
    });

$("#btn_cuentas").click(function () {
            var datos_usuario = $("#nombres_c").val() + " " + $("#apellidos_c").val();
            if (datos_usuario === " ") {
                jAlert("Seleccione un Cliente", "Agentes");
            }
            else {
                $("#txt_datoscliente").val(datos_usuario);
                $("#dialogo_asigcuenta").dialog("open");
                /*$("#opproceso").val("L");*/
                fnListaInsertaCuentas();
            }
        });
/* ================================= EVENTOS CLICK ================== */ 
        $("#btn_asignacuenta").click(function(){
            $("#opproceso").val("I");
            fnListaInsertaCuentas();
            
        });
        $("#btn_nuevacuenta").click(function(){
            $("#txt_bancos").css("display","block");
            $("#txt_nrocuenta").css("display","block");
            $("#txt_bancos").val("");
            $("#hid_idbanco").val("");
            $("#txt_nrocuenta").val("");
            
        });        
        $("#btn_eliminacuenta").click(function(){
            $("#opproceso").val("A"); /* anular */
            jConfirm("¿Esta seguro de Eliminar a :"+$('#txt_nrocuenta').val(), "Agentes", function(r) {
            if(r) {
                fnListaInsertaCuentas();
                $("#opproceso").val("L");
                $("#hid_idbanco").val("");
                $("#txt_nrocuenta").val("");
                $('#btn_eliminacuenta').attr("disabled", false);
                $("#txt_bancos").css("display","none");
                $("#txt_nrocuenta").css("display","none");
                } /* end if */
            });/* end jconfirm */    
        });
        
        $("#btn_guardar").click(function(){
            if ($('#dni_c').val().trim() === '' || $('#apellidos_c').val().trim() === '' || $('#nombres_c').val().trim() === '' ){
                jError('Faltan datos, verifique...','Giros - Transferencias');
            }else{
                fnInsertaCliente();
            }            
         });

        $("#mas_informacion").click(function(){
            fnVerMasDatos($('#opver').val());
         });
         
        $("#btn_anular").click(function(){
            
            
         });

/*========================= AUTOCOMPLETA =====================================*/
/* enciando mnas de un para metro en autocompletar */
$('#txt_bancos').autocomplete({ 
            source: function (request, response) {
                $.ajax({
                    url: "controles/ManteBancos.php",
                    dataType: "json",
                    data: {
                        term: request.term,
                        opcion: $("#opt").val()
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            minLength: 2
});
$("#txt_bancos").focusout(function() {
    if ($("#txt_bancos").val().trim() !== '' ){
        $.ajax({
        url: 'controles/ManteBancos.php',
        type: 'POST',
        dataType: 'json', /* quitando espacion */
        data: {descbanco: $.trim($('#txt_bancos').val()), opcion:"BUSCADATO" }
        }).done(function(respuesta) {    
            $("#hid_idbanco").val(respuesta.idbanco);
        });
    }    
});


/* ============================ MANIPULANDO TABLA =================================================
$(document).ready(function () {
    /* OBTENEMOS TABLA */
    $("#busca_cli").keypress(function (e) {
        if (e.which === 13) {
            if ($('#busca_cli').val().trim() !== '' && $('#busca_cli').val().length > 2)
            {
                var Table = document.getElementById("tabla_clientes");
                Table.innerHTML = "";
                var cabecera = " <tr> <th>Itm</th><th class='ocultamee' >ID</th> <th>D.N.I.</th> <th>Apellidos</th> <th>nombres</th> <th>Direccion</th> <th>Telefono</th><th>e-mail</th> <th class='ocultame'>Usuario</th> <th class='ocultame'>Fecha</th></tr> ";
                $.ajax({async: true,type: "POST",
                    data: {opcion:'BUSCAR', buscacli: $('#busca_cli').val(), opt: $('#optBusca').val()},
                    url: "controles/ManteClientes.php",                    
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    beforeSend: function (objeto) {$(".mensaje").html("<img src='img/loading.gif'>");},
                    complete: function () {$('.mensaje').css('display', 'none');}
                }).done(function (json) {
                    $("#tabla_clientes").html(cabecera);
                    json = $.parseJSON(json);
                    for (var i = 0; i < json.length; i++)
                    {
                        var x = i + 1;
                        $('.editinplace').append(
                        "<tr id='b[" + i + "]' onclick='fnRecuperaFilaCliente(this.id);'>"+
                        "<td >"+ x +"</td>"+
                        "<td class='ocultamee id'>"                             +json[i].id         +"</td>"+
                        "<td class='editable' data-campo='dni_ruc'><span>"      +json[i].dni_ruc    +"</span></td>"+
                        "<td class='editable' data-campo='apel_razon'><span>"   +json[i].apel_razon +"</span></td>"+
                        "<td class='editable' data-campo='nombres'><span>"      +json[i].nombres    +"</span></td>"+
                        "<td class='editable' data-campo='direccion'><span>"    +json[i].direccion  +"</span></td>"+
                        "<td class='editable' data-campo='telefono'><span>"     +json[i].telefono   +"</span></td>"+
                        "<td class='editable' data-campo='e_mail'><span>"       +json[i].e_mail     +"</span></td>"+
                        "<td class='ocultame'>"                                 +json[i].usua_modi  +"</td>"+
                        "<td class='ocultame'>"                                 +json[i].fecha_modi +"</td>"+                
                        "<td>"+"<button id='btn_anular' onclick='fnAnulaCliente();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>"+"</td>"+
                        "</tr>");                        
                    }
                });
            } else {
                jAlert("Ingrese datos a buscar...", "Transferencias");

            }
        } /*end if 13*/
    });

    var td, campo, valor, id;
    $(document).on("dblclick", "td.editable span", function (e)
    {
        $("#sele").val("N");
        e.preventDefault();
            $("td:not(.id)").removeClass("editable");
            td = $(this).closest("td");
            campo = $(this).closest("td").data("campo");
            valor = $(this).text();
            id = $(this).closest("tr").find(".id").text();
        td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guarda</a> <a class='enlace cancelar' href='#'>Cancelar</a> ");
    });
    
    $(document).on("click", ".guardar", function (e)
    {
        //$(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
       var  nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() !== "")
        {
            $.ajax({type: "POST", url: "controles/ManteClientes.php", data: {opcion: 'ACTUALIZA', campo: campo, valor: nuevovalor, id: id,usuario:$("#nick").val()}
            }).done(function (msg) {$('.mensaje').css('display', 'block'); $(".mensaje").html(msg);
                td.html("<span>" + nuevovalor + "</span>"); $("td:not(.id)").addClass("editable");
                setTimeout(function () {$('.ok,.ko').fadeOut('fast'); }, 2000);});
        }
        else { $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");}
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
        $("#sele").val("S");
    });


}); 

function fnVerMasDatos(opcion) {
    switch (opcion) {
        case "mas":
            $(".ocultame").css("display", "block");
            $("#opver").val('menos');
            break;
        case "menos":
            $(".ocultame").css("display", "none");
            $("#opver").val('mas');
            break;
    }
}

function ocultarFila(num,ver) {
  dis= ver ? '' : 'none';
  tab=document.getElementById('tabla_clientes');
  tab.getElementsByTagName('tr')[num].style.display=dis;
}