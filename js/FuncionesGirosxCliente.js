function CalculaTotales() {
var sumai = 0;var sumac = 0;var sumao = 0;var sumat = 0;;
$('#TMovsCliente tr.dato').each(function(){
    if ($(this).find('td').eq(23).text() !=='S') {
        sumai += parseFloat($(this).find('td').eq(9).text()||0,10);
        sumac += parseFloat($(this).find('td').eq(10).text()||0,10); 
        sumao += parseFloat($(this).find('td').eq(11).text()||0,10); 
        sumat += parseFloat($(this).find('td').eq(12).text()||0,10); 
    }     
});

$("#total_i").text(sumai.toFixed(2));
$("#total_c").text(sumac.toFixed(2));
$("#total_o").text(sumao.toFixed(2));
$("#total_t").text(sumat.toFixed(2));

}

function fnCreaTablaClientes(jsoncli){
    var html; 
    var i=0;
    for (var y = 0; y < jsoncli.length; y++ ){
        html += "<tr id='c[" + y + "]' ondblclick='fnSeleccionaClientes(this.id);'>";
        i = y + 1;        
        html += "<td>" + i + "</td>";
        html += "<td >"+ jsoncli[y].dni_ruc + "</td>";
        html += "<td >"+ jsoncli[y].nombres + "</td>";
        html += "</tr>";
    }    
    $("#body_TClientes").html(html);
}

function fnCreaTablaMovsCliente(jsonmovs)
{
//LimpiaTabla();
    var html;
    for (var x = 0; x < jsonmovs.length; x++) {
        html += "<tr id='mv[" + x + "]' class='dato' onclick='fnSeleccionaMovCliente(this.id);' ondblclick='fnMuestraMasDatso();'>";
        var i = x + 1;
        //html += "<td>" + " <button id='btn_anular' onclick='fnAnulaMovAgente();'  title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td>" + i + "</td>";
        html += "<td style='display: none'>"                                          + jsonmovs[x].correlativo + "</td>";
        html += "<td >"                                                               + jsonmovs[x].fechahora_registro + "</td>";
        html += "<td class='editable' data-campo='cod_sucursal'><span>"               + jsonmovs[x].cod_sucursal + "</span></td>";
        html += "<td class='editable' data-campo='dni_ruc'><span>"                    + jsonmovs[x].dni_ruc + "</span></td>";
        html += "<td >"                                                               + jsonmovs[x].remitente + "</td>";
        html += "<td class='editable' data-campo='cod_sucursald'><span>"              + jsonmovs[x].cod_sucursald + "</span></td>";
        html += "<td class='editable' data-campo='dni_rucb'><span>"                   + jsonmovs[x].dni_rucb + "</span></td>";       
        html += "<td >"                                                               + jsonmovs[x].beneficiario + "</td>";
        html += "<td align='right' class='editable' data-campo='importe_giro'><span>" + jsonmovs[x].importe_giro + "</span></td>";
        html += "<td align='right' class='editable' data-campo='cargo_giro'><span>"   + jsonmovs[x].cargo_giro + "</span></td>";        
        html += "<td align='right' class='editable' data-campo='otros'><span>"        + jsonmovs[x].otros + "</span></td>";
/*13*/  html += "<td align='right' class='editable' data-campo='total'><span>"        + jsonmovs[x].total + "</span></td>";
        html += "<td style='display: none'>" + jsonmovs[x].ciudad_destino + "</td>";
        html += "<td style='display: none'>" + jsonmovs[x].observagiro + "</td>";
        html += "<td style='display: none'>" + jsonmovs[x].nro_cuenta + "</td>";
/*17*/html += "<td >"                        + jsonmovs[x].nro_operacion + "</td>";
        html += "<td >"                      + jsonmovs[x].data_pago + "</td>";
        html += "<td style='display: none'>" + jsonmovs[x].usuario_registra + "</td>";
        html += "<td >"                      + jsonmovs[x].fechahora_entrega + "</td>";
        html += "<td >"                      + jsonmovs[x].usuario_entrega + "</td>";                
        html += "<td style='display: none'>" + jsonmovs[x].anulado + "</td>";    
        html += "</tr>";
    } /*End FOR*/
    
    $("#tbody_MovsCliente").html(html);
    //fnTotalesIngSal();
    CalculaTotales();
}

function fnSeleccionaMovCliente(idfila) {
    if ($("#sele_as").val() === "S") {
        var idfilac = $('#sele_mv').val();
        var elTableRow = document.getElementById(idfila);
        var elTableRow1 = document.getElementById(idfilac);
        var color = elTableRow.style.backgroundColor;
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
        if (idfilac !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
        var elTableCells = elTableRow.getElementsByTagName("td");
        $("#idgiro").val(elTableCells[1].innerHTML);
        $("#correlativo").text(elTableCells[1].innerHTML);
        $("#destino").text(elTableCells[13].innerHTML);
        $("#observa").text(elTableCells[14].innerHTML);
        $("#nrocuenta").text(elTableCells[15].innerHTML);
        $("#nrooperacion").text(elTableCells[16].innerHTML);
        $("#datapago").text(elTableCells[17].innerHTML);
        $("#registra").text(elTableCells[18].innerHTML); 

        $("#sele_mv").val(idfila);
        //$('#dialogo_cuentas').dialog('close');
    }
}

function fnSeleccionaClientes(idfila) {    
    var idfilac = $('#sele_c').val();
    var elTableRow = document.getElementById(idfila);
        var elTableRow1 = document.getElementById(idfilac);
        var color = elTableRow.style.backgroundColor;
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
        if (idfilac !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
        var elTableCells = elTableRow.getElementsByTagName("td");
        $("#txt_buscacli").val(elTableCells[1].innerHTML);        
        $("#sele_c").val(idfila);
        $("#divclientes").css("display","none");
        fnMuestraMovsCliente();
        //$("#sele_buscar").prop("selectedIndex", 0);
}

function fnMuestraClientes(){
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opcion: "LISTACLIENTES",valor:$("#txt_buscacli").val().trim() },
    url: "controles/ManteGirosxCliente.php",
    beforeSend: function (objeto) {$('#carga').css('display', 'block');$("#carga").html("<img src='img/loader.gif'>");},
    complete: function (objeto) {$('#carga').css('display', 'none');},
    success: fnCreaTablaClientes
    });
return false;   
}    

function fnMuestraMovsCliente(){
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opcion: "MOVSCLIENTE",fecha_i:$("#fechai").val(), fecha_f:$("#fechaf").val(), dni:$("#txt_buscacli").val().trim() },
    url: "controles/ManteGirosxCliente.php",
    beforeSend: function (objeto) {$('#carga').css('display', 'block'); $("#carga").html("<img src='img/loader.gif'>");},
    complete:   function (objeto) {$('#carga').css('display', 'none');},
    success: fnCreaTablaMovsCliente
    });
return false;   
}

function fnMuestraMasDatso(){
if ( $("#idgiro").val().trim() !=="" ) {
    $("#dialogo_masdatos").dialog("open");
    } else {
    jError("Elija una Transaccion...","Giros - Transferencias");
    }           
    
}

function fnImprimeReporte() {
    window.open('reportes/rptGirosxCliente.php?nombresucu=' + $("#nombresucursal").val() + '&fechai=' + $("#fechai").val() + '&fechaf=' + $("#fechaf").val() + '&dni=' + $("#txt_buscacli").val(), '_blank');  // changed here (cambiado aquí)
}

///////////////////////////////  DocumentReady //////////////////////////////
$(document).ready(function () {
    
    $("#btn_imprimir").attr("disabled",true);
    $("#sele_as").val("S");
    $("#divclientes").css("display","none");
        
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });    
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 220;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 220;
        $('.mygrid-wrapper-div').height(content_height);
    });
    $(function () {
        var window_height = $("#formulario").height(),
                content_height = window_height - 10;
        $('.mygrid-wrapper-divc').height(content_height);
    });

//    $(window).resize(function () {
//        var window_height = $(window).height(),
//                content_height = window_height - 500;
//        $('.mygrid-wrapper-divc').height(content_height);
//    });
    //$( "#btn_buscar" ).tooltip({         show: {effect: "slideDown", delay: 250  }});
    $( "#btn_masdatos" ).tooltip({      show: {effect: "explode",   delay: 250  }});
    $( "#btn_imprimir" ).tooltip({      show: {effect: "explode",   delay: 250  }});
    
    $("#fechai").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImage: 'img/calendar.ico', buttonImageOnly: true, changeYear: true,
        beforeShow: function() {$(".ui-datepicker").css('font-size', 12);},
        numberOfMonths: 1,
        onSelect: function(dateText) {            
        }        
    });

    $("#fechaf").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImage: 'img/calendar.ico', buttonImageOnly: true, changeYear: true,
        beforeShow: function() {$(".ui-datepicker").css('font-size', 12);},
        numberOfMonths: 1,
        onSelect: function(dateText) {
            //MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());
            //$("#cuentas").css("display","block");
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });
///////////////// KEY PRESS //////////////////////

    $("#txt_buscacli").keypress(function (e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            if ($("#txt_buscacli").val().trim() === '') {
                jWarning("Introduzca datos a buscar... ", "Giros - Transferencias");
            } else {
                if ($("#sele_buscar").val() === "A") {
                    //$("#dialogo_ubicacliente").dialog("open");
                    $("#divclientes").css("display","block");
                    fnMuestraClientes();
                }
                if ($("#sele_buscar").val() === "D") {
                    fnMuestraMovsCliente();
                    $("#btn_imprimir").attr("disabled",false); 
                }
            } 
        }
    });
//////////////////////////// CLICK ////////////////////////////
    $('#btn_buscar').click( function(){
        if ( $("#txt_buscacli").val().trim() === '' ){
            jWarning("Introduzca datos a buscar... ","Giros - Transferencias");
        } else {
            if ( $("#sele_buscar").val() ==="A" ) {
                    //$("#dialogo_ubicacliente").dialog("open");
                    $("#divclientes").css("display","block");
                    fnMuestraClientes();
                }
            if ( $("#sele_buscar").val() ==="D" ) {
                    fnMuestraMovsCliente();
                    $("#btn_imprimir").attr("disabled",false); 
                }            
            }
    });
    
    $('#btn_masdatos').click( function(){
        if ( $("#idgiro").val().trim() !=="" ) {
            $("#dialogo_masdatos").dialog("open");
        } else {
            jError("Elija una Transaccion...","Giros - Transferencias");
        }                    
    });
    
    $("#btn_imprimir").click(function(){
        
        fnImprimeReporte();
        
    });

//////////////////////// DIALOGO /////////////////////////    
/*    $("#dialogo_ubicacliente").dialog({autoOpen: false, resizable: true,
            modal: true, height: 350, width:340,
            show: {effect: "blind",duration: 500},
            hide: {effect: "fade",duration: 500},
            open: function (event, ui) {                
                var ntitulo = "Selecciona Cliente";
                $("span.ui-dialog-title").css("font-size", 10);
                $("span.ui-dialog-title").text(ntitulo);
                fnMuestraCliente( $('#txt_buscacli').val() ); 
            },
            buttons: {
                'Salir': function () {
                    $(this).dialog("close");
                }                
            },
            close: function (event, ui) {
                var html;
                $("#tbody_ubicacliente").html(html);
            }
        });
*/    
    $("#dialogo_masdatos").dialog({autoOpen: false, resizable: true,
            modal: true, height: 300, width:600,
            show: {effect: "blind",duration: 500},
            hide: {effect: "fade",duration: 500},
            open: function (event, ui) {
                var ntitulo = "Datos de : " + $('#datos_cliente').val();
                //var ntitulo = "Selecciona Cliente";
                $("span.ui-dialog-title").css("font-size", 10);
                $("span.ui-dialog-title").text(ntitulo);

            },
            buttons: {
                'Salir': function () {
                    $(this).dialog("close");
                }                
            },
            close: function (event, ui) {
                var html;
                //$("#tbody_adicional").html(html);
            }
        });    
    
////////////////////////////// editar tabla  //////////////////////////////////
/*===========================================================================*/
/*    var td, campo, valor, id;
    $(document).on("dblclick", "td.editable span", function (e)
    {
        $("#sele_as").val("N");
        e.preventDefault();
        $("td:not(.id)").removeClass("editable");
        td = $(this).closest("td");
        campo = $(this).closest("td").data("campo");
        valor = $(this).text();
        id = $(this).closest("tr").find(".id").text();
        td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'> <a class='enlace guardar' href='#'>Guardar</a> <a id='boton_cancelar' class='enlace cancelar' title='Cancelar' href='#'>Cancelar</a>");
        if ( campo === "cod_sucursal" || campo === "cod_sucursald" ){ $("#lista_sucursalo").css("display","block"); }
        if ( campo === "dni_ruc" || campo === "dni_rucb" ){ $("#lista_sucursalo").css("display","block"); }
    });

    $(document).on("click", ".guardar", function (e) {
        jConfirm("¿Esta seguro de Actualizar : \n " + $('#nombres_c').val() + " " + $('#apellidos_c').val(), "Giros - Transferencias", function (r) {
        if (r) {     
            $(".mensaje").html("<img src='img/cargando.gif'>");
            e.preventDefault();
            nuevovalor = $(this).closest("td").find("input").val();
            if (nuevovalor.trim() !== "")
            {
                $.ajax({type: "POST",
                    url: "controles/ManteClientes.php",
                    data: {opcion: 'ACTUALIZA', campo:campo, valor:nuevovalor, id:id, usuario:$('#nick').val()}
                }).done(function (msg) {$('.mensaje').css('display', 'block');$(".mensaje").html(msg);
                    td.html("<span>" + nuevovalor + "</span>");$("td:not(.id)").addClass("editable");
                    setTimeout(function () {$('.ok,.ko').fadeOut('fast');}, 2000);
                });
                $("#sele_as").val("S");
            }
            else $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
        }); 
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
        $("#sele_as").val("S");
    });
*/
    
    
    
}); 

function fnLimpiaCampos(){
    
    $("#lista_sucursalo").prop("selectedIndex", 0);
    $("#lista_sucursald").prop("selectedIndex", 0);
    $("#txt_remitente").val("");
    $("#txt_beneficiario").val("");
    $("#txt_importe").val("");
    $("#txt_cargo").val("");
    $("#txt_otros").val("");
    $("#txt_total").val("");
    
}