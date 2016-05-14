
var suma_ci = 0;
var suma_sc = 0;
var suma_se = 0;
var suma_og = 0;
var suma_oga = 0;
var sumaci = 0;
var suma_tsa = 0;
var ssaldoi = 0;
var suma_comi_inter = 0;
var suma_bono = 0;
var sum_saldoi_s = 0;
var sum_pendientes = 0;
var sum_varios = 0;
var sum_letras = 0;
var sum_combustibles = 0;
var sum_alimentos = 0;
var sum_viaticos = 0;
var sum_ctaxpagar = 0;
var sum_otros_s = 0;
var sum_entregados = 0;
var sum_traslado_efectivo_s = 0;
var sum_ttotal_s = 0;
var sum_saldoi_i = 0;
var sum_retiro_banco = 0;
var sum_transf_recibidas = 0;
var sum_ctaxcobrar = 0;
var sum_otros_i = 0;
var sum_traslado_efecectivo_i = 0;
var sum_ttotal_i = 0;
var sum_ingresos_salidas = 0;
var sum_transf_pendientes = 0;
var sum_efectivo_neto = 0;
var sum_total_flujocajae = 0;

function fnTotalesRGastosxSucursal() {
    sum_saldoi_s = 0;
    sum_pendientes = 0;
    sum_varios = 0;
    sum_letras = 0;
    sum_combustibles = 0;
    sum_alimentos = 0;
    sum_viaticos = 0;
    sum_ctaxpagar = 0;
    sum_otros_s = 0;
    sum_entregados = 0;
    sum_traslado_efectivo_s = 0;
    sum_ttotal_s = 0;
    $('#TRGastosxSucursal tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            sum_saldoi_s += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        }
        sum_pendientes += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        sum_varios += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        sum_letras += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        sum_combustibles += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        sum_viaticos += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        sum_alimentos += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        sum_ctaxpagar += parseFloat($(this).find('td').eq(9).text() || 0, 10);
        sum_otros_s += parseFloat($(this).find('td').eq(10).text() || 0, 10);
        sum_entregados += parseFloat($(this).find('td').eq(11).text() || 0, 10);
        sum_traslado_efectivo_s += parseFloat($(this).find('td').eq(12).text() || 0, 10);
        sum_ttotal_s += parseFloat($(this).find('td').eq(13).text() || 0, 10);
    });
    $("#tsaldoi").text(sum_saldoi_s.toFixed(2));
    $("#tpendientes").text(sum_pendientes.toFixed(2));
    $("#tvarios").text(sum_varios.toFixed(2));
    $("#tletras").text(sum_letras.toFixed(2));
    $("#tcombustibles").text(sum_combustibles.toFixed(2));
    $("#tviaticos").text(sum_viaticos.toFixed(2));
    $("#talimentos").text(sum_alimentos.toFixed(2));
    $("#tctasxpagar").text(sum_ctaxpagar.toFixed(2));
    $("#totros").text(sum_otros_s.toFixed(2));
    $("#tentragados").text(sum_entregados.toFixed(2));
    $("#ttraslado_efectivo").text(sum_traslado_efectivo_s.toFixed(2));
    $("#ttotales_s").text(sum_ttotal_s.toFixed(2));
}
function fnTotalesRIngxSucursal() {
    svarios = 0;
    sletras = 0;
    sotros = 0;
    sctasxp = 0;
    sctasxc = 0;
    spendientes = 0;
    $('#TIngresosxSucursal tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            sum_saldoi_i += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        }
        sum_retiro_banco += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        sum_transf_recibidas += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        sum_ctaxcobrar += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        sum_otros_i += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        sum_traslado_efecectivo_i += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        sum_ttotal_i += parseFloat($(this).find('td').eq(8).text() || 0, 10);

    });
    $("#ti_saldoi").text(sum_saldoi_i.toFixed(2));
    $("#ti_retiro_banco").text(sum_retiro_banco.toFixed(2));
    $("#ti_transf_recibidas").text(sum_transf_recibidas.toFixed(2));
    $("#ti_ctasxcobras").text(sum_ctaxcobrar.toFixed(2));
    $("#ti_otros_ing").text(sum_otros_i.toFixed(2));
    $("#ti_traslado_efectivo").text(sum_traslado_efecectivo_i.toFixed(2));
    $("#ti_totales_i").text(sum_ttotal_i.toFixed(2));
}
function fnTotalesRAgente() {
    suma_ci = 0;
    suma_sc = 0;
    suma_se = 0;
    suma_og = 0;
    $("#fechaf").val($("#fechaf").val().replace("/", "-"));
    $('#TResumenAgente tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas    
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            suma_sc += parseFloat($(this).find('td').eq(5).text() || 0, 10);
            suma_se += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        }
        suma_ci += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        suma_og += parseFloat($(this).find('td').eq(4).text() || 0, 10);
    });
    //console.log($("#fechaf").val().replace("/","-"));
    $("#t_ci").text(suma_ci.toFixed(2));
    $("#tsaldo_cuenta").text(suma_sc.toFixed(2));
    $("#t_ogastos").text(suma_og.toFixed(2));
    $("#tsaldo_efectivo").text(suma_se.toFixed(2));
}
function fnTotalesRAsociado() {
    sumaci = 0;
    suma_tsa = 0;
    $("#fechaf").val($("#fechaf").val().replace("/", "-"));
    $('#TResumenAsociado tr.dato').each(function () {
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            suma_tsa += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        }
        suma_oga += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        suma_comi_inter += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        suma_bono += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        sumaci += parseFloat($(this).find('td').eq(7).text() || 0, 10);
    });
    $("#t_ogastosa").text(suma_oga.toFixed(2));
    $("#t_comi_internet").text(suma_comi_inter.toFixed(2));
    $("#t_bono").text(suma_bono.toFixed(2));
    $("#total_ci").text(sumaci.toFixed(2));
    $("#tsaldo_asociado").text(suma_tsa.toFixed(2));
}
function fnTotalesFlujoCaja() {
    sum_ingresos_salidas = 0;
    sum_transf_pendientes = 0;
    sum_efectivo_neto = 0;
    $('#TFlujoCaja tr.dato').each(function () {
        sum_ingresos_salidas += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        sum_transf_pendientes += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        sum_efectivo_neto += parseFloat($(this).find('td').eq(4).text() || 0, 10);
    });
    $("#ingresos_salidas").text(sum_ingresos_salidas.toFixed(2));
    $("#transf_pendientes").text(sum_transf_pendientes.toFixed(2));
    $("#efectivo_neto").text(sum_efectivo_neto.toFixed(2));

}
function fnTotalesFlujoCajaE() {
    sum_total_flujocajae = 0;
    $('#TFlujoCajaE tr.dato').each(function () {
        sum_total_flujocajae += parseFloat($(this).find('td').eq(1).text() || 0, 10);
        console.log(sum_total_flujocajae.toFixed(2));
    });
    $("#total_flujocajae").text(sum_total_flujocajae.toFixed(2));
}

function FnTotalGeneral() {
    var total1 = 0;
    tsaldo_efectivo = 0;
    var tsaldo_asociado = 0;
    var suma_saldos_asoc_agente = 0;
    var suma_comi_itf = 0;
    var suma_saldoi = 0;
    var suma_gastos = 0;
    suma_saldos_asoc_agente = parseFloat(suma_tsa.toFixed(2)) + parseFloat(suma_sc.toFixed(2)) + parseFloat(suma_se.toFixed(2));
    $("#total_AsociadosAgentes").val(suma_saldos_asoc_agente.toFixed(2));
    suma_comi_itf = parseFloat(suma_ci.toFixed(2)) + parseFloat(suma_og.toFixed(2)) + parseFloat(sumaci.toFixed(2)) + parseFloat(suma_oga.toFixed(2)) + parseFloat(suma_comi_inter.toFixed(2));
    $("#suma_comi_itf").val(suma_comi_itf.toFixed(2));
    totlal1 = parseFloat(suma_saldos_asoc_agente.toFixed(2)) - parseFloat(suma_comi_itf.toFixed(2)) + parseFloat(suma_bono.toFixed(2));
    $("#total_1").val(totlal1.toFixed(2));

//    $("#suma_ctaxpagar").val(sctasxp.toFixed(2));    
//    $("#suma_ctaxcobrar").val(sctasxc.toFixed(2));    
//    $("#suma_pendientes").val(spendientes.toFixed(2));
//
//    suma_gastos=parseFloat(svarios.toFixed(2)) + parseFloat(sletras.toFixed(2)) + parseFloat(sotros.toFixed(2));
//    $("#total_gastos_sucursales").val(suma_gastos.toFixed(2));    

    //console.log(parseFloat( suma_tsa.toFixed(2))+'-'+parseFloat(suma_sc.toFixed(2)+'-'+ parseFloat(suma_se.toFixed(2)) );    
}

function FnMuestraRAgente() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOSTRAR', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val()},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        success: CreaTablaRAgente
                //complete:  fnTotalesRAgente

    });
    return false;
}

function FnMuestraRAsociado() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOSTRAR_A', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val()},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        //complete: function () {      $('#carga').css('display', 'none');    },
        success: CreaTablaRAsociado
    });
    return false;
}

function CreaTablaRAgente(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='AG[" + x + "]' class='dato' >";
        html += "<td>" + json[x].fecha + "</td>";
        html += "<td>" + json[x].iniciales + "</td>";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td align='right'>" + json[x].comision_itf + "</td>";
        html += "<td align='right'>" + json[x].otrosgastos + "</td>";
        html += "<td align='right'>" + json[x].saldo_cuenta + "</td>";
        html += "<td align='right'>" + json[x].saldo_efectivo + "</td>";
        html += "</tr>";
    }
    //$('#carga').css('display', 'none');
    $("#body_ResumenAgente").html(html);
    fnTotalesRAgente();
    //FnMuestraTSaldoAgente();

    $('#TResumenAgente').dataTable({
        "sScrollY": 240, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });

}

function CreaTablaRAsociado(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='AS[" + x + "]' class='dato' >";
        html += "<td>" + json[x].fecha + "</td>";
        html += "<td>" + json[x].nusuario + "</td>";
        html += "<td>" + json[x].iniciales + "</td>";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td align='right'>" + json[x].otrosgastos + "</td>";
        html += "<td align='right'>" + json[x].comision_inter + "</td>";
        html += "<td align='right'>" + json[x].bono + "</td>";
        html += "<td align='right'>" + json[x].comision_itf + "</td>";
        html += "<td align='right'>" + json[x].saldo + "</td>";
        html += "</tr>";
    }
    $('#carga').css('display', 'none');
    $("#body_ResumenAsociado").html(html);
    fnTotalesRAsociado();
    //FnMuestraTSaldoAsociado();
//    console.log('Hola:'+$("#tsaldo_efectivo").text());
    $('#TResumenAsociado').dataTable({
        "sScrollY": 260, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function fnSeleFila(idfila) {
    var idfila1 = $('#sele_f').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfila1 !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    document.getElementById("sele_f").value = idfila;

}

$(document).ready(function () {
//var jc1= $.alert({title: 'awesome'});
    var jc;
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

    $("#wrapper").toggleClass("toggled");
    //$("#btn_totalizar").attr("disabled",true);

    $(window).resize(function () {
        if ($.fn.dataTable.isDataTable('#TResumenAgente')) {
            $('#TResumenAgente').dataTable().fnDestroy();
            var objDataTable = $('#TResumenAgente').dataTable({
                "sScrollY": 260, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable.fnSettings().oScroll.sY = 181;
            objDataTable.fnDraw();
        }
        if ($.fn.dataTable.isDataTable('#TResumenAsociado')) {
            $('#TResumenAsociado').dataTable().fnDestroy();
            var objDataTable1 = $('#TResumenAsociado').dataTable({
                "sScrollY": 260, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable1.fnSettings().oScroll.sY = 181;
            objDataTable1.fnDraw();
        }
        if ($.fn.dataTable.isDataTable('#TGastosxSucursal')) {
            $('#TGastosxSucursal').dataTable().fnDestroy();
            var objDataTable1 = $('#TGastosxSucursal').dataTable({
                "sScrollY": 260, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable1.fnSettings().oScroll.sY = 181;
            objDataTable1.fnDraw();
        }
        if ($.fn.dataTable.isDataTable('#TIngresosxSucursal')) {
            $('#TIngresosxSucursal').dataTable().fnDestroy();
            var objDataTable1 = $('#TIngresosxSucursal').dataTable({
                "sScrollY": 260, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable1.fnSettings().oScroll.sY = 181;
            objDataTable1.fnDraw();
        }
        if ($.fn.dataTable.isDataTable('#TFlujoCaja')) {
            $('#TFlujoCaja').dataTable().fnDestroy();
            var objDataTable1 = $('#TFlujoCaja').dataTable({
                "sScrollY": 260, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable1.fnSettings().oScroll.sY = 181;
            objDataTable1.fnDraw();
        }


    });

    $('#total_AsociadosAgentes').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $('#suma_comi_itf').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $('#suma_ctaxpagar').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $('#suma_ctaxcobrar').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $('#suma_pendientes').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $("#total_efectivo_neto").priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    $('#total_gastos_sucursales').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});

// fecha en Español
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

    $("#fechai").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
        buttonImage: 'img/calendar.ico',
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 11);
        },
        numberOfMonths: 1,
        onSelect: function (dateText) { }
    });

    $("#fechaf").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 11);
        },
        numberOfMonths: 1,
        //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
        onSelect: function (dateText) { }
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        FnTotalGeneral();
    });

    $("#btn_muestra_resultados").click(function () {
//      $.blockUI({ message: $('#question'), css: { width: '275px' } }); 
        //$.blockUI({ message: '<h1><img src="img/loader32.gif" /> Just a moment...</h1>' }); 
        FnLimpiaTabla();
        $.confirm({title: 'Giros-Transferencias', confirmButton: 'Continuar', cancelButton: 'Cancelar',
            confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
            content: 'Se mostraran Moviminetos desde: \n' + $("#fechai").val() + '  Hasta:' + $("#fechaf").val(),
            confirm: function () {
                FnMuestraRAsociado();
                FnMuestraRAgente();
                FnMuestraIngxSucursal();
                FnMuestraGastosxSucursal();
                $("#btn_totalizar").attr("disabled", false);
            },
            cancel: function () {
//              $.alert('Canceled!')
            }
        });
    });

    $("#btn_totalizar").click(function (e) {
        FnTotalGeneral();
        fnCargaTablaFlujoCajaE();

    });
    /***************************** Funciones cuadro de dialogo **********************************************/
    $("#yes").click(function () {
//        $.blockUI({ message: "<h1><img src='img/loader32.gif'/>Cargando datos desde el servidor...</h1>" }); 
        $.blockUI({message: $('#mensaje_carga'), css: {width: '275px'}});
        if ($.fn.dataTable.isDataTable('#TResumenAsociado')) {
            $('#TResumenAsociado').dataTable().fnDestroy();
        }
        FnMuestraRAsociado();
        if ($.fn.dataTable.isDataTable('#TResumenAgente')) {
            ('#TResumenAgente').dataTable().fnDestroy();
        }
        FnMuestraRAgente();
        if ($.fn.dataTable.isDataTable('#TIngresosxSucursal')) {
            ('#TIngresosxSucursal').dataTable().fnDestroy();
        }
        FnMuestraIngxSucursal();
        if ($.fn.dataTable.isDataTable('#TGastosxSucursal')) {
            ('#TGastosxSucursal').dataTable().fnDestroy();
        }
        FnMuestraGastosxSucursal();
        if ($.fn.dataTable.isDataTable('#TFlujoCaja')) {
            ('#TFlujoCaja').dataTable().fnDestroy();
        }
        FnMuestraFlujoCaja();
        $("#btn_totalizar").attr("disabled", false);
    });
    $('#no').click(function () {
        $.unblockUI();
        return false;
    });
    /*****************************  **********************************************/
//$(document).ajaxStop(jc1.close);
});

function FnMuestraGastosxSucursal() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOSTRAR_G', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val()},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        //complete: function () {      $('#carga').css('display', 'none');    },
        success: CreaTablaRGastosxSucursal
    }).done(function (datos) {
//     if($.fn.dataTable.isDataTable('#TFlujoCaja')){('#TFlujoCaja').dataTable().fnDestroy();}
        FnMuestraFlujoCaja();

    });



    return false;
}
function CreaTablaRGastosxSucursal(jsong) {
    var html;
    var i = 0;
    for (var x = 0; x < jsong.length; x++) {
        i = x + 1;
        html += "<tr id='G[" + x + "]' class='dato'>";
        html += "<td>" + jsong[x].fecha + "</td>";
        html += "<td>" + jsong[x].codsucu + "</td>";

        html += "<td align='right'>" + jsong[x].pendientes + "</td>";
        html += "<td align='right'>" + jsong[x].varios + "</td>";
        html += "<td align='right'>" + jsong[x].letras + "</td>";
        html += "<td align='right'>" + jsong[x].combustibles + "</td>";
        html += "<td align='right'>" + jsong[x].alimentos + "</td>";
        html += "<td align='right'>" + jsong[x].viaticos + "</td>";
        html += "<td align='right'>" + jsong[x].ctaxpagar + "</td>";
        html += "<td align='right'>" + jsong[x].otros + "</td>";
        html += "<td align='right'>" + jsong[x].entregados + "</td>";
        html += "<td align='right'>" + jsong[x].traslado_efectivo + "</td>";
        html += "<td align='right'>" + jsong[x].total + "</td>";
        html += "<td align='right'>" + jsong[x].totalgastos + "</td>";
        html += "</tr>";
    }
    $("#body_GastosxSucursal").html(html);
    fnTotalesRGastosxSucursal();
    $('#TGastosxSucursal').dataTable({
        "sScrollY": 260, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function FnMuestraIngxSucursal() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOS_INGXSUCURSAL', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val()},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        //complete: function () {      $('#carga').css('display', 'none');    },
        success: CreaTablaRIngxSucursal
    });
    return false;
}
function CreaTablaRIngxSucursal(jsong) {
    var html;
    for (var x = 0; x < jsong.length; x++) {

        html += "<tr id='ixs[" + x + "]' class='dato'>";
        html += "<td>" + jsong[x].fecha + "</td>";
        html += "<td>" + jsong[x].codsucu + "</td>";
        html += "<td align='right'>" + jsong[x].saldo_inicial + "</td>";
        html += "<td align='right'>" + jsong[x].retiro_bancos + "</td>";
        html += "<td align='right'>" + jsong[x].transf_recibidas + "</td>";
        html += "<td align='right'>" + jsong[x].ctaxcobrar + "</td>";
        html += "<td align='right'>" + jsong[x].otros_ing + "</td>";
        html += "<td align='right'>" + jsong[x].traslado_efectivo + "</td>";
        html += "<td align='right'>" + jsong[x].total + "</td>";
        html += "</tr>";
    }
    $("#body_IngresosxSucursal").html(html);
    fnTotalesRIngxSucursal();
    $('#TIngresosxSucursal').dataTable({
        "sScrollY": 260, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function FnMuestraFlujoCaja() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'T_ING_SAL'},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        success: CreaTablaFlujoCaja
    });
    return false;
}
function CreaTablaFlujoCaja(jsong) {
    var html;
    for (var x = 0; x < jsong.length; x++) {
        html += "<tr id='ixs[" + x + "]' class='dato'>";
        html += "<td>" + jsong[x].fecha + "</td>";
        html += "<td>" + jsong[x].codsucu + "</td>";
        html += "<td align='right'>" + jsong[x].saldofinal + "</td>";
        html += "<td align='right'>" + jsong[x].pendientes + "</td>";
        html += "<td align='right'>" + jsong[x].efectivo_neto + "</td>";
        html += "</tr>";
    }
    $("#body_FlujoCaja").html(html);
    fnTotalesFlujoCaja();
    $('#TFlujoCaja').dataTable({
        "sScrollY": 260, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
    fnCargaTablaFlujoCajaE();
}

function FnMuestraTSaldoAgente() {
    $.ajax({async: true, type: "POST", dataType: 'json', cache: false,
        data: {opcion: "MSAGENTE", fecha_f: $('#fechaf').val()},
        url: "controles/ManteGerencial.php"
    }).done(function (rpta) {
        $("#tsaldo_cuenta").text(rpta.tsaldo_cuentaf);
        $("#tsaldo_efectivo").text(rpta.tsaldo_efectivof);

        //fnTotalesRAgente();
    });
    return false;
}

function FnMuestraTSaldoAsociado() {
    $.ajax({async: true, type: "POST", dataType: 'json', cache: false,
        data: {opcion: "MSASOCIADO", fecha_f: $('#fechaf').val()},
        url: "controles/ManteGerencial.php"
    }).done(function (respuesta) {
        $("#tsaldo_asociado").text(respuesta.total_saldo_asociado);

    });
    return false;
}

function fnCargaTablaFlujoCajaE() {
    var html;
    html += "<tr class='dato'>";
    html += "<td> Total Neto Bancos (AGENTE+ASOCIADOS)</td>";
    html += "<td>" + $('#total_1').val() + "</td>";
    html += "</tr>";
    html += "<tr class='dato'>";
    html += "<td> Efectivo Neto Sucursales</td>";
    html += "<td>" + $('#ingresos_salidas').text() + "</td>";
    html += "</tr>";
    $("#body_FlujoCajaE").html(html);
    fnTotalesFlujoCajaE();
}

function FnLimpiaTabla() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'LIMPIA'},
        url: "controles/ManteGerencial.php"
//    beforeSend: function (objeto) { $('#carga').css({display: 'block'});},    
//    success: CreaTablaFlujoCaja
    });
    return false;
}


