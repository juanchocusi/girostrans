var s_tpendientes = 0;
var s_tgiro_banco = 0;
var s_tcomi_giros = 0;
    
var    s_tcomi_retiros = 0;
var    s_ttransporte = 0;
var    s_tletras = 0;
var    s_tutil_mante = 0;
var    s_tservicios = 0;
    
var    s_talimentos = 0;
var    s_tviaticos = 0;
var    s_thonorarios = 0;
var    s_totros = 0;
var    s_timpuestos = 0;
var    s_talquileres=0;
    
var    s_tentregados= 0;
var    s_tcta_agte= 0;
var    s_tefec_sucu= 0;
var    s_tefec_asociado= 0;
var    s_ttotal= 0;
var    s_ttotal_gastos= 0;

var    s_ti_saldoi = 0;
var    s_ti_importe = 0;
var    s_ti_cargo = 0;
var    s_ti_otros = 0;
var    s_ti_total_trecibidas = 0;
var    s_ti_justes = 0;
var    s_ti_comi_recargas=0;
var    s_ti_otros_ing=0;
var    s_ti_traslado_efe_age_sucu=0;
var    s_ti_traslado_efe_sucu_sucu=0;
var    s_ti_ingresos=0;
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

var suma_comi_agente = 0;
var suma_ga = 0;
var suma_un = 0;

function fnTotalesRGastosxSucursal() {
    s_tpendientes = 0;
    s_tgiro_banco = 0;
    s_tcomi_giros = 0;
    
    s_tcomi_retiros = 0;
    s_ttransporte = 0;
    s_tletras = 0;
    s_tutil_mante=0;
    s_tservicios = 0;
    
    s_talimentos = 0;
    s_tviaticos = 0;
    s_thonorarios = 0;
    s_totros = 0;
    s_timpuestos = 0;
    s_talquileres
    
    s_tentregados= 0;
    s_tcta_agte= 0;
    s_tefec_sucu= 0;
    s_tefec_asociado= 0;
    s_ttotal= 0;
    s_ttotal_gastos= 0;
    
    $('#TGastosxSucursal tr.dato').each(function () { 
        s_tpendientes += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        s_tgiro_banco += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        s_tcomi_giros += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        
        s_tcomi_retiros += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        s_ttransporte += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        s_tletras += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        s_tutil_mante += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        s_tservicios += parseFloat($(this).find('td').eq(9).text() || 0, 10);
        
        s_talimentos += parseFloat($(this).find('td').eq(10).text() || 0, 10);
        s_tviaticos += parseFloat($(this).find('td').eq(11).text() || 0, 10);
        s_thonorarios += parseFloat($(this).find('td').eq(12).text() || 0, 10);
        s_totros += parseFloat($(this).find('td').eq(13).text() || 0, 10);
        s_timpuestos += parseFloat($(this).find('td').eq(14).text() || 0, 10);
        s_talquileres += parseFloat($(this).find('td').eq(15).text() || 0, 10);
        
        s_tentregados += parseFloat($(this).find('td').eq(16).text() || 0, 10);
        s_tcta_agte += parseFloat($(this).find('td').eq(17).text() || 0, 10);
        s_tefec_sucu += parseFloat($(this).find('td').eq(18).text() || 0, 10);
        s_tefec_asociado += parseFloat($(this).find('td').eq(19).text() || 0, 10);
        s_ttotal += parseFloat($(this).find('td').eq(20).text() || 0, 10);
        s_ttotal_gastos += parseFloat($(this).find('td').eq(21).text() || 0, 10);
    });
    $("#tpendientes").text(s_tpendientes.toFixed(2));
    $("#tgiro_banco").text(s_tgiro_banco.toFixed(2));
    $("#tcomi_giros").text(s_tcomi_giros.toFixed(2));
    
    $("#tcomi_retiros").text(s_tcomi_retiros.toFixed(2));
    $("#ttransporte").text(s_ttransporte.toFixed(2));
    $("#tletras").text(s_tletras.toFixed(2));
    $("#tutil_mante").text(s_tutil_mante.toFixed(2));
    $("#tservicios").text(s_tservicios.toFixed(2));
    
    $("#talimentos").text(s_talimentos.toFixed(2));
    $("#tviaticos").text(s_tviaticos.toFixed(2));
    $("#thonorarios").text(s_thonorarios.toFixed(2));
    $("#totros").text(s_totros.toFixed(2));
    $("#timpuestos").text(s_timpuestos.toFixed(2));
    $("#talquileres").text(s_talquileres.toFixed(2));
    
    $("#tentregados").text(s_tentregados.toFixed(2));
    $("#tcta_agte").text(s_tcta_agte.toFixed(2));
    $("#tefec_sucu").text(s_tefec_sucu.toFixed(2));
    $("#tefec_asociado").text(s_tefec_asociado.toFixed(2));
    $("#ttotal").text(s_ttotal.toFixed(2));
    $("#ttotal_gastos").text(s_ttotal_gastos.toFixed(2));
}
function fnTotalesRIngxSucursal() {
    s_ti_saldoi = 0;
    s_ti_importe = 0;
    s_ti_cargo = 0;
    s_ti_otros = 0;
    s_ti_total_trecibidas = 0;
    s_ti_justes = 0;
    s_ti_comi_recargas=0;
    s_ti_otros_ing=0;
    s_ti_traslado_efe_age_sucu=0;
    s_ti_traslado_efe_sucu_sucu=0;
    s_ti_ingresos=0;
    //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
    $('#TIngresosxSucursal tr.dato').each(function () {
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            s_ti_saldoi += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        }
        s_ti_importe += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        s_ti_cargo += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        s_ti_otros += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        s_ti_total_trecibidas += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        s_ti_justes += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        s_ti_comi_recargas += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        s_ti_otros_ing += parseFloat($(this).find('td').eq(9).text() || 0, 10);
        s_ti_traslado_efe_age_sucu += parseFloat($(this).find('td').eq(10).text() || 0, 10);
        s_ti_traslado_efe_sucu_sucu += parseFloat($(this).find('td').eq(11).text() || 0, 10);
        s_ti_ingresos += parseFloat($(this).find('td').eq(12).text() || 0, 10);
    });
    $("#ti_importe").text(s_ti_importe.toFixed(2));
    $("#ti_cargo").text(s_ti_cargo.toFixed(2));
    $("#ti_otros").text(s_ti_otros.toFixed(2));
    $("#ti_total_trecibidas").text(s_ti_total_trecibidas.toFixed(2));
    $("#ti_justes").text(s_ti_justes.toFixed(2));
    $("#ti_comi_recargas").text(s_ti_comi_recargas.toFixed(2));
    $("#ti_otros_ing").text(s_ti_otros_ing.toFixed(2));
    $("#ti_traslado_efe_age_sucu").text(s_ti_traslado_efe_age_sucu.toFixed(2));
    $("#ti_traslado_efe_sucu_sucu").text(s_ti_traslado_efe_sucu_sucu.toFixed(2));
    $("#ti_ingresos").text(s_ti_ingresos.toFixed(2));
}
function fnTotalesRAgente() {
    suma_itf = 0;
    suma_sc = 0;
    suma_se = 0;
    suma_og = 0;
    suma_ga = 0;
    suma_un = 0;
    $("#fechaf").val($("#fechaf").val().replace("/", "-"));
    $('#TResumenAgente tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas            
        suma_itf += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        suma_comi_agente += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        suma_og += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            suma_sc += parseFloat($(this).find('td').eq(6).text() || 0, 10);
            suma_se += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        }
        suma_ga += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        suma_un += parseFloat($(this).find('td').eq(9).text() || 0, 10);

    });
    //console.log($("#fechaf").val().replace("/","-"));
    $("#t_itf").text(suma_itf.toFixed(2));
    $("#t_comi_agente").text(suma_comi_agente.toFixed(2));
    $("#t_otros_gastos").text(suma_og.toFixed(2));
    $("#t_saldo_cuenta").text(suma_sc.toFixed(2));
    $("#t_saldo_efectivo").text(suma_se.toFixed(2));
    $("#t_gasto_Agente").text(suma_ga.toFixed(2));
    $("#t_utilidad_Agente").text(suma_un.toFixed(2));
}
function fnTotalesRAsociado() {
    s_totros_gastos = 0;
    s_tcant_giros=0;
    s_ttelegiro=0;
    s_titf=0;
    s_tsaldo=0;
    s_tgastos=0;
    s_tutilidad = 0;
    $("#fechaf").val($("#fechaf").val().replace("/", "-"));
    $('#TResumenAsociado tr.dato').each(function () {
        s_totros_gastos += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        s_tcant_giros += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        s_ttelegiro += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        s_titf += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        if ($(this).find('td').eq(0).text() === $("#fechaf").val().replace("/", "-")) {
            s_tsaldo += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        }
        s_tgastos += parseFloat($(this).find('td').eq(9).text() || 0, 10);
        s_tutilidad += parseFloat($(this).find('td').eq(10).text() || 0, 10);
    });
    $("#totros_gastos").text(s_totros_gastos.toFixed(2));
    $("#tcant_giros").text(s_tcant_giros.toFixed(2));
    $("#ttelegiro").text(s_ttelegiro.toFixed(2));
    $("#titf").text(s_titf.toFixed(2));
    $("#tsaldo").text(s_tsaldo.toFixed(2));
    $("#tgastos").text(s_tgastos.toFixed(2));
    $("#tutilidad").text(s_tutilidad.toFixed(2));
}
function fnTotalesFlujoCaja() {
    var sum_fc_ingresos = 0;
    var sum_fc_egresos = 0;
    var sum_fc_saldototal = 0;
    var sum_fc_pendientes = 0;
    var sum_fc_efectivoneto = 0;
    var sum_fc_utilxsucursal = 0;
    var sum_fc_gastosnetos = 0;
    var sum_fc_ingresopasivo = 0;
    $('#TFlujoCaja tr.dato').each(function () {
        sum_fc_ingresos += parseFloat($(this).find('td').eq(2).text() || 0, 10);
        sum_fc_egresos += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        sum_fc_saldototal += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        sum_fc_pendientes += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        sum_fc_efectivoneto += parseFloat($(this).find('td').eq(6).text() || 0, 10);
        sum_fc_utilxsucursal += parseFloat($(this).find('td').eq(7).text() || 0, 10);
        sum_fc_gastosnetos += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        sum_fc_ingresopasivo += parseFloat($(this).find('td').eq(9).text() || 0, 10);
    });
    $("#t_ingresos").text(sum_fc_ingresos.toFixed(2));
    $("#t_egresos").text(sum_fc_egresos.toFixed(2));
    $("#t_saldototal").text(sum_fc_saldototal.toFixed(2));
    $("#t_pendientes").text(sum_fc_pendientes.toFixed(2));
    $("#t_efectivoneto").text(sum_fc_efectivoneto.toFixed(2));
    $("#t_utilxsucursal").text(sum_fc_utilxsucursal.toFixed(2));
    $("#t_gastosnetos").text(sum_fc_gastosnetos.toFixed(2));
    $("#t_ingresopasivo").text(sum_fc_ingresopasivo.toFixed(2));

}
function fnTotalesFlujoCajaE() {
    sum_total_flujocajae = 0;
    $('#TFlujoCajaE tr.dato').each(function () {
        sum_total_flujocajae += parseFloat($(this).find('td').eq(1).text() || 0, 10);
        console.log(sum_total_flujocajae.toFixed(2));
    });
    $("#total_flujocajae").text(sum_total_flujocajae.toFixed(2));
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
        html += "<td align='right'>" + json[x].comision_agente + "</td>";
        html += "<td align='right'>" + json[x].otros_gastos + "</td>";
        html += "<td align='right'>" + json[x].saldo_cuenta + "</td>";
        html += "<td align='right'>" + json[x].saldo_efectivo + "</td>";
        html += "<td align='right'>" + json[x].gasto_agente + "</td>";
        html += "<td align='right'>" + json[x].utilidad_neta + "</td>";
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
        html += "<td align='right'>" + json[x].cantidad_telegiro + "</td>";
        html += "<td align='right'>" + json[x].comision_telegiro + "</td>";
        html += "<td align='right'>" + json[x].comision_itf + "</td>";
        html += "<td align='right'>" + json[x].saldo + "</td>";
        html += "<td align='right'>" + json[x].gastos + "</td>";
        html += "<td align='right'>" + json[x].utilidad_neta + "</td>";
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
        fnResumenEfectivo();
        fnResumenUtilidad();
        fnResumenGastos();
        fnResumenPasivo();
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
        data: {opcion: 'MOSTRAR_G', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val(), token: $('#token_g').val()},
        url: "controles/ManteGerencial.php",
        success: CreaTablaRGastosxSucursal
    }).done(function (respuesta) {
        $("#miflag").val(respuesta[0].fecha);
        console.log($("#miflag").val());
        if ($("#miflag").val().length < 1) {
            FnMuestraFlujoCaja();
        }
    });
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
        html += "<td align='right'>" + jsong[x].pago_giros_bancos + "</td>";
        html += "<td align='right'>" + jsong[x].pago_comi_giro + "</td>";

        html += "<td align='right'>" + jsong[x].pago_comi_retiro + "</td>";
        html += "<td align='right'>" + jsong[x].transporte + "</td>";
        html += "<td align='right'>" + jsong[x].pago_letras_bancos + "</td>";
        html += "<td align='right'>" + jsong[x].pago_util_mante + "</td>";
        html += "<td align='right'>" + jsong[x].pago_servicios + "</td>";

        html += "<td align='right'>" + jsong[x].alimentos + "</td>";
        html += "<td align='right'>" + jsong[x].viaticos + "</td>";
        html += "<td align='right'>" + jsong[x].honorarios + "</td>";
        html += "<td align='right'>" + jsong[x].otros + "</td>";
        html += "<td align='right'>" + jsong[x].impuestos + "</td>";

        html += "<td align='right'>" + jsong[x].alquileres + "</td>";
        html += "<td align='right'>" + jsong[x].entregados + "</td>";
        html += "<td align='right'>" + jsong[x].traslado_cta_agte + "</td>";
        html += "<td align='right'>" + jsong[x].traslado_efec_sucu + "</td>";
        html += "<td align='right'>" + jsong[x].traslado_efec_asociado + "</td>";
        html += "<td align='right'>" + jsong[x].totales + "</td>";
        html += "<td align='right'>" + jsong[x].total_gastos + "</td>";
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
        data: {opcion: 'MOS_INGXSUCURSAL', fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), idempresa: $('#idempresa').val(), token: $('#token_g').val()},
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
        html += "<td align='right'>" + jsong[x].importe + "</td>";
        html += "<td align='right'>" + jsong[x].cargo + "</td>";

        html += "<td align='right'>" + jsong[x].otros + "</td>";
        html += "<td align='right'>" + jsong[x].transf_recibidas + "</td>";
        html += "<td align='right'>" + jsong[x].ajustes + "</td>";
        html += "<td align='right'>" + jsong[x].otros_ing + "</td>";
        html += "<td align='right'>" + jsong[x].comi_recargas + "</td>";

        html += "<td align='right'>" + jsong[x].tras_efectivo_agt_sucu + "</td>";
        html += "<td align='right'>" + jsong[x].tras_efectivo_sucu_sucu + "</td>";
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
        data: {opcion: 'FLUJOCAJA'},
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
        html += "<td align='right'>" + jsong[x].ingresos + "</td>";
        html += "<td align='right'>" + jsong[x].egresos + "</td>";
        html += "<td align='right'>" + jsong[x].saldototal + "</td>";
        html += "<td align='right'>" + jsong[x].pendientes + "</td>";
        html += "<td align='right'>" + jsong[x].efectivo_neto + "</td>";
        html += "<td align='right'>" + jsong[x].utilxsucursal + "</td>";
        html += "<td align='right'>" + jsong[x].gastos_netos + "</td>";
        html += "<td align='right'>" + jsong[x].ingreso_pasivo + "</td>";
        html += "</tr>";
    }
    $("#body_FlujoCaja").html(html);
    fnTotalesFlujoCaja();
    $('#TFlujoCaja').dataTable({
        "sScrollY": 260, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
//    fnCargaTablaFlujoCajaE();
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

function fnResumenEfectivo() {
    var total_agente=0;
    var total_cuentas=0;
    var total_efectivo_neto=0;
    var total_liquidez=0;
    var total_trans_pendientes=0;
    var liquidez_neta=0;
    
    total_agente=parseFloat($("#t_saldo_cuenta").text()) + parseFloat($("#t_saldo_efectivo").text());
    total_cuentas=parseFloat($("#tsaldo").text());
    total_efectivo_neto=parseFloat($("#t_efectivoneto").text()); 
    total_liquidez=total_agente + total_cuentas + total_efectivo_neto;
    total_trans_pendientes=parseFloat($("#t_pendientes").text());
    liquidez_neta = total_liquidez - total_trans_pendientes;
    var html;
    html += "<tr>";
        html += "<td>" + $('#fechai').val() + "</td>";
        html += "<td>" + $('#fechaf').val() + "</td>";
        html += "<td>" + total_agente.toFixed(2) + "</td>";
        html += "<td>" + total_cuentas.toFixed(2) + "</td>";
        html += "<td>" + total_efectivo_neto.toFixed(2) + "</td>";
        html += "<td>" + total_liquidez.toFixed(2)+ "</td>";
        html += "<td>" + liquidez_neta.toFixed(2) + "</td>";
    html += "</tr>";
    $("#body_ResumenEfectivo").html(html);
    console.log(total_agente);
    console.log($("#t_saldo_cuenta").text());
    console.log($("#t_saldo_efectivo").text());
}

var total_utilidad=0;    
function fnResumenUtilidad() {
    var total_util_agente=0;
    var total_util_asociado=0;
    var total_util_sucursales = 0;
    total_utilidad = 0;
    
    total_util_agente=parseFloat($("#t_utilidad_Agente").text());
    total_util_asociado=parseFloat($("#tutilidad").text());
    total_util_sucursales=parseFloat($("#ti_cargo").text());
    total_utilidad=total_util_agente+total_util_asociado+total_util_sucursales;
    var html;
    html += "<tr>";
        html += "<td>" + $('#fechai').val() + "</td>";
        html += "<td>" + $('#fechaf').val() + "</td>";
        html += "<td>" + total_util_agente.toFixed(2) + "</td>";        
        html += "<td>" + total_util_asociado.toFixed(2) + "</td>";
        html += "<td>" + total_util_sucursales.toFixed(2) + "</td>";
        html += "<td>" + total_utilidad + "</td>";
    html += "</tr>";
    $("#body_ResumenUtilidad").html(html);
}
var total_gastos = 0;
function fnResumenGastos() {
    var total_gas_agente=0;
    var total_gas_asociado=0;
    var total_gas_sucursales = 0;
    total_gastos = 0;
    
    total_gas_agente=parseFloat($("#t_gasto_Agente").text());
    total_gas_asociado=parseFloat($("#tgastos").text());
    total_gas_sucursales=parseFloat($("#ttotal_gastos").text());
    total_gastos=total_gas_agente+total_gas_asociado+total_gas_sucursales;
    var html;
    html += "<tr>";
        html += "<td>" + $('#fechai').val() + "</td>";
        html += "<td>" + $('#fechaf').val() + "</td>";
        html += "<td>" + total_gas_agente + "</td>";        
        html += "<td>" + total_gas_asociado + "</td>";
        html += "<td>" + total_gas_sucursales + "</td>";
        html += "<td>" + total_gastos + "</td>";
    html += "</tr>";
    $("#body_ResumenGastos").html(html);
}

function fnResumenPasivo() {
    var total_pasivo=0.00;
        
    total_pasivo= total_utilidad - total_gastos;
    
    var html;
    html += "<tr>";
        html += "<td>" + $('#fechai').val() + "</td>";
        html += "<td>" + $('#fechaf').val() + "</td>";
        html += "<td>" + total_pasivo.toFixed(2) + "</td>";
    html += "</tr>";
    $("#body_ResumenPasivo").html(html);
}
