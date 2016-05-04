function fnTotalesIngSal() {
    $('#TCruce tr.dato').each(function () {        
        if ($(this).find('td').eq(15).text() === 'Pendiente') {
            $(this).css('color', 'blue');};
        if ($(this).find('td').eq(16).text() === 'S') {
            $(this).css('color', 'tomato');};
    });
}

function fnCreaTablaMovs(jsonmovs)
{
    var i = 0;
    var html;
    for (var y = 0; y < jsonmovs.length; y++) {
        html += "<tr id='cr[" + y + "]' class='dato' onclick='fnSeleccionaMov(this.id);'>";
        i = y + 1;
        html += "<td>" + i + "</td>";
        html += "<td>" + jsonmovs[y].cod_girosucu + "</td>";
        html += "<td>" + jsonmovs[y].cod_sucursal + "</td>";
        html += "<td>" + jsonmovs[y].fechahora_registro + "</td>";
        html += "<td>" + jsonmovs[y].beneficiario + "</td>";
        html += "<td>" + jsonmovs[y].remitente + "</td>";
        html += "<td>" + jsonmovs[y].cod_sucursald + "</td>";
        html += "<td align='right'>" + jsonmovs[y].importe_giro + "</td>";
        html += "<td align='right'>" + jsonmovs[y].cargo_giro + "</td>";
        html += "<td align='right'>" + jsonmovs[y].otros + "</td>";
        html += "<td align='right'>" + jsonmovs[y].totalr + "</td>";
        html += "<td align='right'>" + jsonmovs[y].total + "</td>";
        html += "<td >"             + jsonmovs[y].observagiro + "</td>";
        html += "<td >"             + jsonmovs[y].usuario_registra+ "</td>";
        /*14*/  html += "<td >"   + jsonmovs[y].usuario_entrega + "</td>";
        html += "<td >"             + jsonmovs[y].fechahora_entrega + "</td>";
        html += "<td >"             + jsonmovs[y].datapago + "</td>";
        html += "<td style='display: none'>" + jsonmovs[y].anulado + "</td>";
        html += "</tr>";
    }
    $("#body_cruce").html(html);
    fnTotalesIngSal();
}

function fnSeleccionaMov(idfila) {
    var idfilac = $('#sele').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $('#sele').val(idfila);
}

function fnMuestraCruce() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {OPCION:'LISTA', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), origen: $('#origen').val(), destino:$("#listasucursales").val()},
        url: "controles/ManteCruce.php",
        beforeSend: function (objeto) { $('#carga').css({display: 'block'}); }, 
        complete: function (objeto) { $('#carga').css({display: 'none'});},
        success: fnCreaTablaMovs
    });
    return false;
}

function fnReporteExcel() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {OPCION:'LISTA', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), origen: $('#origen').val(), destino:$("#listasucursales").val()},
        url: "CruceExcel.php",
        beforeSend: function (objeto) { $('#carga').css({display: 'block'}); }, 
        complete: function (objeto) { $('#carga').css({display: 'none'}); fnDescargaExcel(); }
        //success: fnDescargaExcel
    });
    return false;
}

function fnDescargaExcel(){
    window.location='RptCruceSucursales.xls';
}

///////////////////////////////////////////////////////////////////////////////
////////////////////////// Document ready /////////////////////////////////////
$(document).ready(function () {
$(".botonExcel").toggle(1000);

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 175;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 175;
        $('.mygrid-wrapper-div').height(content_height);
    });
    $("#btn_movscuenta").attr("title", $("#txtsucursal").val());


    /*====================== datepicker =======================================*/
    $("#fechai").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImage: 'img/calendar.ico', buttonImageOnly: true, changeYear: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12);
        },
        numberOfMonths: 1,
        onSelect: function (dateText) {
        }
    });

    $("#fechaf").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImage: 'img/calendar.ico', buttonImageOnly: true, changeYear: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12);
        },
        numberOfMonths: 1,
        onSelect: function (dateText) {
        }
    });

    /*============================= BUSCA ========================================*/
    $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#body_cruce tbody>tr").hide();
            $("#body_cruce td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {
            $("#body_cruce tbody>tr").show();
        }
    });
    $.extend($.expr[":"],
            {
                "contains-ci": function (elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

    $(function ($) {
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);
    });

//////////////////////////// click /////////////////////////////////
    $("#btn_pantalla").click(function () {
        $('#desde').val($('#fechai').val());
        $('#hasta').val($('#fechaf').val());
        
        if ( $("#listasucursales").val() !== "0" ){
            jConfirm("¿Este proceso puede demorar: \n"+$('#fechai').val() +" ==> "+ $('#fechaf').val(), "Giros - Transferencias", function(r) {
                if(r) {
                        
                        fnMuestraCruce();
                        $(".botonExcel").toggle(1000);
                }
            }); 
        } else { jError ("Seleccione Sucursal de Destino","Giros - Transferencias"); }       
    });

$("#btn_excelzzz").click(function () {
    if ( $("#listasucursales").val() !== "0" ){
            jConfirm("¿Este proceso puede demorar: \n"+$('#fechai').val() +" ==> "+ $('#fechaf').val(), "Giros - Transferencias", function(r) {
                if(r) {
                        fnReporteExcel();
                        jMessage("Busca el Archivo en la carpeta DESCARGAS","Giros - Transferencias");    
                }
            }); 
        } else { jError ("Seleccione Sucursal de Destino","Giros - Transferencias"); }       
});

$(".botonExcel").click(function (event) {
        $("#lbl_destino").html($("#listasucursales option:selected").html());
        $("#desde").html($('#fechai').val());
        $("#hasta").html($('#fechaf').val());
        $("#datos_a_enviar").val($("<div>").append($("#Exportar_a_Excel").eq(0).clone()).html());
        $("#FormularioExportacion").submit();
        $(".botonExcel").toggle(1000);
    });
$("#listasucursales").change(function(){
    $(".botonExcel").css("display","none");
});  
    
    
    
    
});
