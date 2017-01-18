function fnTotalesIngSal() {
    var sumai = 0;
    var sumas = 0;
    $('#TMovsCuentaCliente tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas  
        if ($(this).find('td').eq(9).text() === 'S') {
            $(this).css('color', 'tomato');
        }
        ;
        if ($(this).find('td').eq(9).text() !== 'S') {
            sumai += parseFloat($(this).find('td').eq(7).text() || 0, 10);
            sumas += parseFloat($(this).find('td').eq(8).text() || 0, 10);
        }
        ;
    });
    $("#total_i").text(sumai.toFixed(2));
    $("#total_s").text(sumas.toFixed(2));
}

function BuscaCuentasCliente() {
    $('#TBuscaCuentasCliente').dataTable().fnDestroy();
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'BUSCA', valor: $('#dato_buscar').val(), op: $('#optBusca').val()},
        url: "controles/ManteCuentasCliente.php",
        beforeSend: function (objeto) {
            alertb = $.alert({theme: 'black', title: 'Procesando... ', content: 'Buscando ...', icon: 'fa fa-spinner fa-spin'});
        },
        //complete: function () {      $('#carga').css('display', 'none');    },
        //success: CreaTablaBuscaCuentasCliente
    }).done(function (rpta) {
        CreaTablaBuscaCuentasCliente(rpta);
    });
    return false;
}

function CreaTablaBuscaCuentasCliente(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='cc[" + x + "]' class='dato' ondblclick='fnSeleccionaCuenta(this.id);'>";
        html += "<td>" + i + "</td>";
        html += "<td>" + json[x].dni_ruc + "</td>";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td>" + json[x].nombres + "</td>";
        html += "<td align='right'>" + json[x].saldof + "</td>";
        html += "</tr>";
    }
    $("#tbody_BuscaCuentasCliente").html(html);

    $('#TBuscaCuentasCliente').dataTable({
        "sScrollY": 100, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
    alertb.close();
}

function MuestraMovsCliente() {
    $('#TMovsCuentaCliente').dataTable().fnDestroy();
    jc = $.dialog({theme: 'black', title: 'Trabajando... ', content: 'Procesando ...', icon: 'fa fa-spinner fa-spin'});
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MUESTRAMOVS', cuenta: $('#nro_cuenta').val(), fechai: $('#fechai').val(), fechaf: $('#fechaf').val()},
        url: "controles/ManteCuentasCliente.php",
        beforeSend: function (objeto) {
            //   $('#carga').css({display: 'block'});
        },
        //complete: function () {      $('#carga').css('display', 'none');    },
        //success: CreaTablaMovsCliente
    }).done(function (json) {
        CreaTablaMovsCliente(json);

    });
    return false;
}

function CreaTablaMovsCliente(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='mv[" + x + "]' class='dato' onclick='fnSeleccionaMov(this.id);'>";
        html += "<td>" + i + "</td>";
        html += "<td style='display:none'>" + json[x].idtrancliente + "</td>";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td>" + json[x].fechahora_tran + "</td>";
        html += "<td>" + json[x].descripcion + "</td>";
        html += "<td>" + json[x].observacion + "</td>";
        html += "<td align='right'>" + json[x].monto_ing + "</td>";
        html += "<td align='right'>" + json[x].monto_sal + "</td>";
        html += "<td align='right'>" + json[x].saldofinal + "</td>";
        html += "<td style='display:none'>" + json[x].anulado + "</td>";
        html += "<td>" + " <button id='btn_anular' title='' onclick='fnAnulaFilaCliente(this.id);' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove'></span></button> <button id='btn_editar' onclick='fnEditaFilaCliente(this.id);' title='' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='fa fa-pencil'></span></button>" + "</td>";
        html += "</tr>";
    }
    $("#tbody_MovsCuentaCliente").html(html);
    fnTotalesIngSal();
    $('#TMovsCuentaCliente').dataTable({
        "sScrollY": ($(window).height() - 290), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
    jc.close();
}

function fnSeleccionaCuenta(idfila) {
    var idfilacc = $('#sele_cc').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilacc);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "GoldenRod") ? color : 'GoldenRod';
    if (idfilacc !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'GoldenRod' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#datos_cuenta").val(elTableCells[3].innerHTML);
    $("#nro_cuenta").val(elTableCells[2].innerHTML);
    $("#sele_cc").val(idfila);
}

function fnSeleccionaMov(idfila) {
    var idfilamv = $('#sele_mv').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilamv);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "GoldenRod") ? color : 'GoldenRod';
    if (idfilamv !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'GoldenRod' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#idtran").val(elTableCells[1].innerHTML);
    $("#nro_cuenta").val(elTableCells[2].innerHTML);
    $("#fecha_registro").val(elTableCells[3].innerHTML);
    $("#motivo_edit").val(elTableCells[4].innerHTML);
    $("#observa_edit").val(elTableCells[5].innerHTML);
    $("#sele_mv").val(idfila);
    $("#monto").val(elTableCells[6].innerHTML);
    if ($("#monto").val() === '0.00') {
        $("#monto").val(elTableCells[7].innerHTML);
        $("#monto_edit").val(elTableCells[7].innerHTML);
        opt = 'ES'
    } else {
        $("#monto").val(elTableCells[6].innerHTML);
        $("#monto_edit").val(elTableCells[6].innerHTML);
        opt = 'EI'
    }
}
var jc;
var jc_edit;
var alertb;
var opt; //opcion para el procedimiento almacenado
var monto = 0;
var monto_n = 0;
$(document).ready(function () {
    ////////////////// key press ///////////////////////////
    $("#dato_buscar").keypress(function (e) {
        if (e.which === 13) {
            BuscaCuentasCliente();
        }
    });

    fnDesactivaBotones();
    $("#fechai").datepicker({dateFormat: 'yy-mm-dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
        buttonImage: 'img/calendar.ico',
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 11);
        },
        numberOfMonths: 1,
        onSelect: function (dateText) { }
    });

    $("#fechaf").datepicker({dateFormat: 'yy-mm-dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
        buttonImage: 'img/calendar.ico',
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 11);
        },
        numberOfMonths: 1,
        //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
        onSelect: function (dateText) { }
    });
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
            dateFormat: 'dd-mm-yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);
    });
    $(window).resize(function () {
        if ($.fn.dataTable.isDataTable('#TMovsCuentaCliente')) {
            $('#TMovsCuentaCliente').dataTable().fnDestroy();
            var objDataTable = $('#TMovsCuentaCliente').dataTable({
                "sScrollY": ($(window).height() - 290), "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable.fnSettings().oScroll.sY = 181;
            objDataTable.fnDraw();
        }
        if ($.fn.dataTable.isDataTable('#TBuscaCuentasCliente')) {
            $('#TBuscaCuentasCliente').dataTable().fnDestroy();
            var objDataTable1 = $('#TBuscaCuentasCliente').dataTable({
                "sScrollY": 100, "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "ordering": false,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
            });
//        objDataTable1.fnSettings().oScroll.sY = 181;
            objDataTable1.fnDraw();
        }
    });
    $('#monto').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});

    $("#dialogo_edita").dialog({autoOpen: false, resizable: true,
        modal: true, height: 280, width: 380,
        open: function (event, ui) {
            var ntitulo = $('#datos_cuenta').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
        },
        buttons: {
            'Aceptar': function () {
                $.confirm({title: 'Esta Seguro de continuar...? ', confirmButton: 'Continuar', cancelButton: 'Cancelar',
                    confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
                    content: 'La transaccion de S/.' + $("#monto").val() + '<br>Se guardara con la fecha de Hoy.',
                    confirm: function () {
                        fnEditaTransaccion();
                    }
//                cancel: function () {//$.alert('Canceled!')}
                });

            },
            'Cancelar': function () {
                $(this).dialog("close");
            }
        }
    });

    $("#btn_buscarcuentas").click(function () {
        if ($("#dato_buscar").val().trim() !== "") {
            $.confirm({title: 'Esta Seguro de continuar...? ', confirmButton: 'Continuar', cancelButton: 'Cancelar',
                confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
                content: 'Giros-Transferencias',
                confirm: function () {
                    $("#datos_cuenta").val("");
                    $("#nro_cuenta").val("");
                    BuscaCuentasCliente();
                },
                cancel: function () {
                    //$.alert('Canceled!')
                }
            });
        } else {
//            jc = $.dialog();
//            jc.setTitle('Holaaaa');
//            jc.setContent('Yjmhjhjhjh');
            jc = $.dialog({theme: 'black', title: 'Ingrese valor a Buscar ', content: 'Verifique...'});
        }
    });

    $("#btn_movscuenta").click(function () {
        $.confirm({title: 'Movimientos de Cuenta', confirmButton: 'Continuar', cancelButton: 'Cancelar',
            confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
            content: 'Desde:' + $("#fechai").val() + '<br>  Hasta:' + $("#fechaf").val(),
            confirm: function () {

                MuestraMovsCliente();
            },
            cancel: function () {
                //$.alert('Canceled!')
            }
        });
    });

    $("#btn_nuevatran").click(function () {
        if ($("#nro_cuenta").val().trim() !== "") {
            fnLimpiaTexto();
            fnActivaBotones();
        } else {
            $.dialog({theme: 'black', title: 'Seleccione un Cliente', content: 'Verifique...'});
        }
    });

    $("#btn_cancelatran").click(function () {
        fnDesactivaBotones();
        fnLimpiaTexto();
    });

    $("#btn_guardatran").click(function () {
        $("#monto").val($("#monto").val().replace(",", ""));
        if ($("#listatipotran").val() !== "0" && $("#monto").val().trim() !== "") {
            $.confirm({title: 'Esta Seguro de continuar...? ', confirmButton: 'Continuar', cancelButton: 'Cancelar',
                confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
                content: 'La transaccion de S/.' + $("#monto").val() + '<br>Se guardara con la fecha de Hoy.',
                confirm: function () {
                    GuardaTransaccion();
                    fnDesactivaBotones();
                }
//                cancel: function () {//$.alert('Canceled!')}
            });
        } else {
            $.alert({theme: 'black', title: 'Datos Incompletos !', content: 'Verifique...'});
//            $.dialog('Just to let you know');
        }
    });
});

function fnActivaBotones() {
    $("#listatipotran").attr("disabled", false);
    $("#monto").attr("disabled", false);
    $("#observa").attr("disabled", false);

    $("#btn_cancelatran").attr("disabled", false);
    $("#btn_guardatran").attr("disabled", false);
    //$("#btn_anula_cuenta").attr("disabled",false);
}

function fnDesactivaBotones() {
    $("#listatipotran").attr("disabled", true);
    $("#monto").attr("disabled", true);
    $("#observa").attr("disabled", true);

    $("#btn_cancelatran").attr("disabled", true);
    $("#btn_guardatran").attr("disabled", true);
}

function fnLimpiaTexto() {
    $("#listatipotran").prop("selectedIndex", 0);
    $("#monto").val("");
    $("#observa").val("");
}

function GuardaTransaccion() {
    console.log($('#nro_cuenta').val());
    console.log($('#monto').val());
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'GUARDATRAN', cuenta: $('#nro_cuenta').val(), idtran: $('#idtran').val(), monto: $('#monto').val(),
            tipotran: $('#listatipotran').val().substring(0, 3), observa: $('#observa').val(), usuamodi: $('#usuario').val(),
            idempresa: $('#codsucursal').val(), op: $('#listatipotran').val().substring(3, 4)},
        url: "controles/ManteCuentasCliente.php",
        beforeSend: function (objeto) { },
        //complete: function () {      $('#carga').css('display', 'none');    },
        //success: MuestraMovsCliente
    }).done(function (rpta) {
        var respuesta = rpta[0].idtrancliente;
        MuestraMovsCliente();
        console.log(respuesta);
    });
    return false;
}

function fnEditaFilaCliente() {
    $("#dialogo_edita").dialog("open");
}

function fnEditaTransaccion() {
    monto = parseFloat($('#monto').val());
    monto_n = parseFloat($('#monto_edit').val());
    if (monto !== monto_n) {
        monto = monto_n - monto;
        $('#monto').val(monto);
    }
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'GUARDATRAN', cuenta: '', idtran: $('#idtran').val(), monto: $('#monto').val(),
            tipotran: '', observa: $('#observa_edit').val(), usuamodi: $('#usuario').val(), idempresa: '', op: opt},
        url: "controles/ManteCuentasCliente.php",
        beforeSend: function (objeto) { },
        //complete: function () {      $('#carga').css('display', 'none');    },
        //success: MuestraMovsCliente
    }).done(function (rpta) {
        var rpta = rpta[0].idtrancliente;
        MuestraMovsCliente();
        $('#monto').val('');
        $('#monto_edit').val('');
        $("#dialogo_edita").dialog("close");
    });
    return false;
}

function fnAnulaFilaCliente() {
    $.confirm({
        title: 'Esta seguro de ANULAR',
        content: $('#motivo_edit').val()+': '+$('#monto').val()+ '<div class="form-group">  <label>Motivo de Anulacion</label> <input autofocus type="text" id="input-name" placeholder="" class="form-control" onkeyup="javascript:this.value = this.value.toUpperCase();"> </div> <p class="text-danger" style="display:none">Debe ingresar un motivo para anular transaccion</p>',
        confirmButton: 'Continuar', cancelButton: 'Cancelar',
        confirm: function () {
            var input = this.$b.find('input#input-name');
            var errorText = this.$b.find('.text-danger');
            if (input.val() === '') {
                errorText.show();
                return false;
            } else {
                fnAnulaTransaccion(input.val());
                //$.alert('Hello ' + input.val());
            }
        }
    });
}

function fnAnulaTransaccion(motivo_anulacion) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'GUARDATRAN', cuenta: '', idtran: $('#idtran').val(), monto: $('#monto').val(),
            tipotran: '', observa: motivo_anulacion, usuamodi: $('#usuario').val(), idempresa: '', op: 'A'},
        url: "controles/ManteCuentasCliente.php",
        beforeSend: function (objeto) { },
        //complete: function () {      $('#carga').css('display', 'none');    },
        //success: MuestraMovsCliente
    }).done(function (rpta) {
        var rpta = rpta[0].idtrancliente;
        MuestraMovsCliente();
        $('#monto').val('');
        $('#monto_edit').val('');
        console.log(motivo_anulacion);
    });
    return false;
}


