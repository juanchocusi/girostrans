function fnTotalesGiros() {
    var sumai = 0;
    var sumac = 0;
    var sumao = 0;
    var sumat = 0;
    $('#TablaGiros tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
        if ($(this).find('td').eq(21).text() !== 'S') {
            sumai += parseFloat($(this).find('td').eq(8).text() || 0, 10); //numero de la celda 5*/
            sumac += parseFloat($(this).find('td').eq(9).text() || 0, 10);
            sumao += parseFloat($(this).find('td').eq(10).text() || 0, 10);
            sumat += parseFloat($(this).find('td').eq(11).text() || 0, 10);
        }
        if ($(this).find('td').eq(17).text() === 'Pendiente') {
            $(this).css('color', 'Blue');
        }
        ;
        if ($(this).find('td').eq(21).text() === 'S') {
            $(this).css('color', 'tomato');
        }
        ;
        //if ($(this).find('td').eq(27).text() !== '---') { $(this).css('font-weight', 'bold'); };//boleta
    });

    $("#t_importe").text(sumai.toFixed(2));
    $("#t_cargo").text(sumac.toFixed(2));
    $("#t_otros").text(sumao.toFixed(2));
    $("#t_total").text(sumat.toFixed(2));
    //console.log(sumat);
}
//opt=opcion de busqueda en el sp_; valor=criterio de busqueda, opv=opcion de busqueda segun criterio
function FnMuestraGiros(idempresa, opt, valor, opv) {
    var sucursal = $('#lista_sucursales').val();
    // T = todas las Sucursales
//    if (opt !== 'B') {
//        if (opt !== "T") {
//            opt = 'S'; // S = Solo una Susursal
//        } else {
//            opt = "T";
//        }
//    }
    jc = $.dialog({theme: 'black', title: 'Procesando... ', content: '...', icon: 'fa fa-spinner fa-spin'});
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOSTRAR', codsucu: sucursal, empresa: idempresa, fechai: $('#fechai').val(), fechaf: $('#fechaf').val(), opt: opt, valor: valor, opv: opv},
        url: "controles/ManteInicio.php",
//        beforeSend: function (objeto) {
//            $('#carga').css({display: 'block'});
//        },
//        //complete: function () {      $('#carga').css('display', 'none');    },
        success: CreaTablaGiros
    });
    return false;
}

function CreaTablaGiros(json) {
    var html;
    var i = 0;
    var boucher;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='G[" + x + "]' class='dato' onclick='fnSeleFila(this.id);'>";
        html += "<td>" + i + "</td>";
        boucher = json[x].boucher;
        if (boucher === 'XXX') {
            html += "<td>" + " <button id='btn_anular' title='' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove'></span></button>" + "</td>";
        } else {
            html += "<td>" + " <button id=" + json[x].cod_girosucu + " title='Boucher' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-picture blue'></span></button>" + "</td>";
        }
        html += "<td>" + json[x].cod_girosucu + "</td>";
        html += "<td>" + json[x].fechahora_registro + "</td>";
        html += "<td>" + json[x].dni_rucb + "</td>";
        html += "<td>" + json[x].beneficiario + "</td>";
        html += "<td>" + json[x].dni_ruc + "</td>";

        html += "<td>" + json[x].remitente + "</td>";
        html += "<td>" + json[x].cod_sucursald + "</td>";
        html += "<td align='right'>" + json[x].importe_giro + "</td>";
        html += "<td align='right'>" + json[x].cargo_giro + "</td>";
        html += "<td align='right'>" + json[x].otros + "</td>";

        html += "<td align='right'>" + json[x].total + "</td>";
        html += "<td >" + json[x].fechahora_entrega + "</td>";
        html += "<td >" + json[x].nro_cuenta + "</td>";
        html += "<td >" + json[x].nro_operacion + "</td>";
        html += "<td >" + json[x].usuario_registra + "</td>";
        html += "<td >" + json[x].observagiro + "</td>";

        html += "<td >" + json[x].usuario_entrega + "</td>";

        html += "<td >" + json[x].datapago + "</td>";
        html += "<td >" + json[x].correlativo + "</td>";
        html += "<td class='ocultame'>" + json[x].anulado + "</td>";
        html += "</tr>";
    }
    $('#carga').css('display', 'none');
    $("#BodyGiros").html(html);
    fnTotalesGiros();
//  FnCalculaTotales();

    $('#TablaGiros').dataTable({
        "fnDrawCallback": function (oSettings) {
            // Need to redo the counters if filtered or sorted 
            if (oSettings.bSorted || oSettings.bFiltered) {
                for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
                {
                    $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);
                }
            }
        },
        "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 200), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
    });
    jc.close();
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

    usuaentrega = elTableCells[18].innerHTML;
    benficiario = elTableCells[6].innerHTML;
    $("#correlativo").val(elTableCells[20].innerHTML);
    $("#codgirosucu").val(elTableCells[2].innerHTML);
    $("#importe").val(elTableCells[9].innerHTML);
    $("#fecha_entrega").val(elTableCells[13].innerHTML);

    $("#sele_f").val(idfila);
    console.log($("#correlativo").val());
    console.log($("#codgirosucu").val());
    console.log($("#importe").val());
    console.log($("#fecha_entrega").val());

}
/////////////*************** Variables  ***********************//////////////////
var jc;
var usuaentrega = '';
var beneficiario = '';
var importe = '';
var desde_agente = '';
var is_check = '';
/////////////***************  ***********************//////////////////
$(document).ready(function () {

    $(window).resize(function () {
        $('#TablaGiros').dataTable().fnDestroy();
        var objDataTable = $('#TablaGiros').dataTable({
            "fnDrawCallback": function (oSettings) {
                // Need to redo the counters if filtered or sorted 
                if (oSettings.bSorted || oSettings.bFiltered) {
                    for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
                    {
                        $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);
                    }
                }
            },
            "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
            "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 160), "bPaginate": false,
            "bLengthChange": false, "bFilter": false, "bSort": true,
            "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
        objDataTable.fnSettings().oScroll.sY = 161;
        objDataTable.fnDraw();

    });
    $("#check_money").prop("checked", true);
    $("#check_pantera").prop("checked", true);
    $("#lista_sucursales").attr('disabled', true);
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
            $(".ui-datepicker").css('font-size', 12);
        },
        numberOfMonths: 1,
        //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
        onSelect: function (dateText) { }
    });

    $("#fechaf").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
        buttonImage: 'img/calendar.ico',
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12);
        },
        numberOfMonths: 1,
        //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
        onSelect: function (dateText) { }
    });

    //////////// DIALOGOS  //////////////
    $("#dialogo_asigcuenta").dialog({autoOpen: false, resizable: true,
        modal: true, height: 440, width: 380,
        open: function (event, ui) {
            var ntitulo = "Pagar a: " + $('#enombresb').val() + ' S/.' + $('#eimporte_r').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            desde_agente = 'N';
            $("#descbanco").val("");
            $("#datoscuenta").val("");
            $("#nrodeoperacion").val("");
            fnMuestraBancos();
        },
        buttons: {
            '<<Regresar': function () {
                $("#tabla_cuentas").css("display", "none");
                $("#tabla_bancos").css("display", "block");
                $("#idbanco").val("");
                $("#descbanco").val("");
                $("#datoscuenta").val("");
                $("#nrodeoperacion").val("");
            },
            'Pagar': function () {
                if ($("#nrodeoperacion").val().trim() !== '' && $("#nrodeoperacion").val().length > 5) {
                    fnPagar();
                    $(this).dialog("close");
                } else {
                    jAlert("Nro de OPERACION invalido, Verifique...", "Giros");
                }
            },
            'Cancelar': function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) {
            $("#tabla_cuentas").css("display", "none");
            $("#tabla_bancos").css("display", "block");
        }
    });

    $("#dialogo_SaldoDisponible").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 500, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Saldo Disponible";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            fnMuestraSaldoDisponible();
        }
    });

    $("#dialogo_CargaImagen").dialog({autoOpen: false, resizable: true,
        modal: true, height: 500, width: 400, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Cargar Voucher";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
        }
    });

    $("#dialogo_pagaagente").dialog({autoOpen: false, resizable: true,
        modal: true, height: 440, width: 380,
        open: function (event, ui) {
            var ntitulo = "Pagar a: " + $('#enombresb').val() + ' S/.' + $('#eimporte_r').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#nro_deoperacion").val("");
            $("#descbanco").val("");
            $("#datoscuenta").val("");
            $("#nrodeoperacion").val("");
            fnMuestraAgentes();
        },
        buttons: {
            'Aceptar': function () {
                if ($("#nro_deoperacion").val().trim() !== '' && $("#nro_deoperacion").val().length > 5) {
                    fnPagarConAgente();
                    $(this).dialog("close");

                } else {
                    jAlert("Nro de OPERACION invalido, Verifique...", "Giros - Transferencias");
                }
            },
            'Cancelar': function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) {
            $("#tabla_cuentas").css("display", "none");
            $("#tabla_bancos").css("display", "block");
        }
    });

    $("#dialogo_paga_con_sucu").dialog({autoOpen: false, resizable: true,
        modal: true, height: 440, width: 380,
        open: function (event, ui) {
            var ntitulo = "Pagar a: " + $('#enombresb').val() + ' S/.' + $('#eimporte_r').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#descbanco").val("");
            $("#nro_deoperacion").val("");
            $("#datoscuenta").val("");
            $("#nrodeoperacion").val("");
            fnMuestraSucursales();
        },
        buttons: {
            'Aceptar': function () {
                if ($("#txt_motivo").val().length > 2) {
                    fnPagaEfectivoSucursal();
                    $(this).dialog("close");

                } else {
                    jAlert("Ingrese motivo de la transaccion, Verifique...", "Giros - Transferencias");
                }
            },
            'Cancelar': function () {
                $(this).dialog("close");
            }
        }
    });

    $("#dialogo_distribucion").dialog({autoOpen: false, resizable: true, modal: true,
        height: 500, width: 510,
        show: {effect: "fade", duration: 500},
        hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Distribuir: S/. " + $('#eimporte_r').val();
            $("span.ui-dialog-title").css("font-size", 12);
            $("span.ui-dialog-title").text(ntitulo);
            $("#lista_agentes").prop("selectedIndex", 0);
            $("#txt_fraccion_distro").val("");
            ListaDistro($("#correlativo").val());
        },
//    buttons: {
//      'Aplicar Distribución': function () {        fnAplicaDistribucion();      },
//      'Cancelar Distribución' : function () {        CancelaDistro();      }
//    },
        close: function (event, ui) {
//      $("#tabla_cuentas").css("display", "none");
//      $("#tabla_bancos").css("display", "block");
        }
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");

    });

    $("#btn_muestra_giros").click(function () {
        $('#TablaGiros').dataTable().fnDestroy();
        var opt = ''; //;
        var idempresa = porEmpresa();
        if (idempresa === 'T') {
            opt = 'T'
        } else {
            opt = 'E'
        }
        if ($('#lista_sucursales').val().length > 1) {
            opt = 'S'
        }
        console.log(idempresa + '==' + opt);
        if (idempresa !== 'NO') {
            FnMuestraGiros(idempresa, opt, 'valor', 'opv');
        } else {
            $.alert({theme: 'black', title: 'Seleccione Empresa', content: 'Pantera o Money'});
        }
    });

    $("#btn_busca_en_bd").click(function () {
        $('#TablaGiros').dataTable().fnDestroy();
        var idempresa = porEmpresa();
        console.log(idempresa);
        FnMuestraGiros(idempresa, 'B', $('#busca_en_bd').val().trim(), $('#optbusca').val());
    });

    $("#disponibilidad").click(function () {
        $("#dialogo_SaldoDisponible").dialog("open");
    });

    $('#carga_imagen').click(function () {
        if ($("#correlativo_img").val().trim() !== '') {
            if ($("#md_fechaentrega").val() !== 'Pendiente') {
                $("#dialogo_CargaImagen").dialog("open");
            } else {
                jAlert("Transferencia esta pendiente, Verifique...", "Transferecnias")
            }
        } else {
            jAlert("Seleccione una Transferencia...", "Transferecnias")
        }
    });

    $('#btn_guarda_voucher').click(function () {
        if ($("#descripcion_img").val().trim() !== '') {
            uploadObj.startUpload();
        } else {
            jAlert("Falta descripcion... ", "Transferecnias")
        }
    });
    var uploadObj = $("#fileuploader").uploadFile({
        url: "php/upload.php", //url donde se enviará la petición
        multiple: false, //defino que no se puedan arrastrar y soltar mas de 1 archivo
        allowedTypes: "png,jpg,jpeg,pdf", // extensiones permitidas
        fileName: "myfile", //nombre del archivo a enviar por $_Files
        showDelete: false, //mostrar botón eliminar
        showDone: false, //ocultar botón de Hecho
        showProgress: true, //mostrar barra de progreso
        showPreview: true, //mostrar previsualización de las imagenes a cargar        
        previewHeight: "150px",
        previewWidth: "100px",
        autoSubmit: false, //deshabilitar el envio del archivo automaticamente, para poder ser enviado se utiliza la función startUpload()
        showStatusAfterSuccess: true, //mostrar estado despues de haber cargado correctamente las imagenes
        //maxFileCount: 1, //número máximo de archivos a subir
        maxFileSize: 3145728, //tamaño máximo permitido de los archivos en bytes, en MB: 3MB
        maxFileCountErrorStr: "Acción no permitida, el número máximo de archivos a subir es: ", //string que aparece al momento de tener un error del número máximo de archivos
        dragDropStr: "<span><b>. ---</b></span>", //string que aparece al momento de tener un error de arrastrar y soltar varios archivos cuando la opción multiple está en false
        sizeErrorStr: "Acción no permitida, el tamaño máximo del archivo es: ", //string que aparece cuando los archivos superan el tamaño máximo permitido
        extErrorStr: "Acción no permitida, las extensiones válidas son: ", //string que aparece cuando existe un error en las extensiones de los archivos a cargar
        cancelStr: "Cancelar", //string del botón cancelar
        uploadStr: "Buscar Voucher", //string del botón cancelar
        uploadButtonClass: "btn btn-info", //clase del botón de carga, se definió una clase de bootstrap
        dragdropWidth: "300px", //defino el ancho del area donde se arrastra y sueltan los archivos
        statusBarWidth: "300px", //defino el acho de la barra de estado.
        //Datos del formulario dinámico, estos son los datos que se envian además de las imagenes, se recuperan con
        returnType: "json",
        maxFileSize:1024 * 5120,
                //maxFileCount:5,        
                showDelete: true,
                deleteCallback: function (data, pd) {
                    for (var i = 0; i < data.length; i++) {
                        $.post("php/delete.php", {op: "delete", name: data[i]},
                                function (resp, textStatus, jqXHR) {
                                    //Show Message  
                                    console.log("File Deleted");
                                    jAlert("Archivo Eliminado...", "Transferencia de Archivos")
                                });
                    }
                    pd.statusbar.hide();
                },
        onSuccess: function (files, data, xhr, pd) {
            fnInsertaVoucher();
            pd.statusbar.hide();
        },
        onError: function (files, status, errMsg, pd) {
            //$("#eventsmessage").html($("#eventsmessage").html()+"<br/>Error for: "+JSON.stringify(files));
            jAlert("Error al cargar archivos, Verifique...", "Transferencia de Archivos")
        }
    });

    $("#btn_pagar").click(function () {
        if ($("#correlativo").val().trim() === '') {
            if ($("#fecha_entrega").val().trim() !== 'Pendiente') {
                $.alert({theme: 'black', title: 'Ya esta Pagado!', content: 'Seleccione Otra Transaccion...'});
            } else {
                //$("#grupo").val("C");
                $("#dialogo_asigcuenta").dialog("open");
            }
        } else {
            $.alert({theme: 'black', title: 'Seleccione Transaccion  !', content: 'Elija una Transaccion de la Tabla...'});
        }
    });

    $("#btn_pagadeagente").click(function () {
        if ($("#usuaentrega").val() === '---') {
            if ($("#enombresb").val().trim() === '' && $("#enombresr").val().trim() === '')
            {
                jAlert("Seleccione un cliente...", "Agentes");
            } else {
                $("#grupo").val("A");
                $("#dialogo_pagaagente").dialog("open");
            }
        } else {
            jAlert("Ya esta pagado, Seleccione otro ..." + $("#usuaentrega").val(), "Agentes");
        }
    });

    $("#btn_efectivo").click(function () {
        //alert($("#usuaentrega").val());
        if ($("#usuaentrega").val() === '---') {
            if ($("#enombresb").val().trim() === '' && $("#enombresr").val().trim() === '')
            {
                jAlert("Seleccione un cliente...", "Agentes");
            } else {
                fnPagaEfectivo();
            }
        } else {
            jAlert("Ya esta pagado, Seleccione otro ...", "Agentes");
        }
    });

    $("#btn_efectivo_sucu").click(function () {
        if ($("#usuaentrega").val() === '---') {
            if ($("#enombresb").val().trim() === '' && $("#enombresr").val().trim() === '')
            {
                jAlert("Seleccione un cliente...", "Agentes");
            } else {
                $("#dialogo_paga_con_sucu").dialog("open");
            }
        } else {
            jAlert("Ya esta pagado, Seleccione otro ...", "Agentes");
        }
    });

    $("#btn_distribucion").click(function () {
        if ($("#correlativo").val().trim() !== "") {
            $("#dialogo_distribucion").dialog("open");
        } else {
            jWarning("Debe Seleccionar Ingreso a Distribuir ", "Giros - Transferencias");
        }
    });

    $("#btn_inserta_fraccion").click(function () {
        var existe, posible;
        if ($("#opciones_distribucion").val() === 'A') {
            existe = BuscaEnTablaDistro($("#lista_agentes").val());
            //console.log($("#lista_agentes").val());
            if ($("#lista_agentes").val() === existe) {
                jWarning("Cuenta ya Existe, verifique...", "Giros - Transferencias");
            } else {
                if (parseFloat($("#txt_fraccion_distro").val().trim()) === '0' || $("#lista_agentes").val() === '0') {
                    jWarning("Faltan datos, Verifique..., verifique", "Giros - Transferencias");
                    $("#txt_fraccion_distro").focus();
                } else {
                    posible = VerificaFraccion();
                    if (posible === 'SI') {
                        $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
                        $("#dialogo_distribucion").dialog("close");
                        //$("#lista_agentes").css("display", "none");
                        InsertaItmDistro($("#lista_agentes").val());
                    } else {
                        console.log($("#txt_fraccion_distro").val());
                        jAlert("esta EXCEDIENDO \n El monto a Distribuir es: S/. " + $('#eimporte_r').val(), "Distribución");
                    }
                }
            }
        }
    });

    $('#check_money').click(function () {
        if ($("#check_money").is(':checked')) {
            $("#check_money").val('M')
            //$("#lista_sucursales").html('<option>Money Flash</option>');            
        } else {$("#lista_sucursales").attr('disabled', false);}
        if ($("#check_pantera").is(':checked') && $("#check_money").is(':checked')) {
            $("#lista_sucursales").attr('disabled', true);
        }
    });
    $('#check_pantera').click(function () {
        if ($("#check_pantera").is(':checked')) {
            $("#check_pantera").val('P')
        } else {$("#lista_sucursales").attr('disabled', false);}
        if ($("#check_pantera").is(':checked') && $("#check_money").is(':checked')) {
            $("#lista_sucursales").attr('disabled', true);
        }
    });
    $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#TablaGiros tbody>tr").hide();
            $("#TablaGiros td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        {
            $("#TablaGiros tbody>tr").show();
        }
    });

    $.extend($.expr[":"],
            {
                "contains-ci": function (elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

    $("#btn_carga_sucursales").click(function () {
        var empresa=porEmpresa();
        if (empresa === 'M' || empresa === 'P') {
            $.ajax({url: "controles/select_sucursales.php", type: "POST",
                data: "idempresa=" + porEmpresa(), //data: porEmpresa(),
                success: function (opciones) {
                    $("#lista_sucursales").html(opciones);
                }
            })
        }
    });

    console.log($("#mi_token").val());
    
    
});

function fnMuestraSaldoDisponible() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'DISPONIBILIDAD', fecha: $('#fechaf').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
        },
        success: CreaTablaSaldoDisponible
    });
    return false;
}

function CreaTablaSaldoDisponible(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='AG[" + x + "]' class='dato' >";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td>" + json[x].usuario + "</td>";
        html += "<td>" + json[x].banco + "</td>";
        html += "<td align='right'>" + json[x].total_movs + "</td>";
        html += "<td align='right'>" + json[x].saldo_cta + "</td>";

        html += "<td align='right'>" + json[x].disponible + "</td>";
        html += "</tr>";
    }
    $('#carga').css('display', 'none');
    $("#body_SaldoDisponible").html(html);

    $('#TSaldoDisponible').dataTable({
        "sScrollY": 300, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });

}

function fnMuestraAgentes() {
    //alert($("#grupo").val());
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "AGENTES", idempresa: $("#codsucursal").val().substr(0, 1)},
        url: "controles/ManteBancos.php",
        beforeSend: function (objeto) {
            $("#carga1").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            $('#carga1').css('display', 'none');
        },
        success: fnCreaTablaAgentes
    });
    return false;
}

function fnCreaTablaAgentes(jsonbancos) {
    var html;
    for (var contador = 0; contador < jsonbancos.length; contador++) {
        html += "<tr id='a[" + contador + "]' onclick='fnSeleccionaAgente(this.id);'>";
        var i = contador + 1;
        html += "<td>" + i + "</td>";
        html += "<td class='eoculto' >" + jsonbancos[contador].idbanco + "</td>";
        html += "<td >" + jsonbancos[contador].nrocuenta + "</td>";
        html += "<td >" + jsonbancos[contador].iniciales + "</td>";
        html += "<td>" + jsonbancos[contador].desc_banco + "</td>";
        html += "</tr>";
    }

    $("#body_agentes").html(html);
}

function ListaDistro(correla) {
    $('#tabla_distribucion').dataTable().fnDestroy();
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'LISTA_DISTRO_E', iddetalle: correla},
        url: "controles/ManteCierreDiario.php",
        beforeSend: function () {
            $('#carga').css('display', 'block');
        },
        complete: function () {
            $('#carga').css('display', 'none');
        },
        success: function (data) {
            var html;
            var i = 0;
            for (var x = 0; x < data.length; x++) {
                i = x + 1;
                html += "<tr id='dt[" + i + "]' class='dato' onclick='SeleFilaDistro(this.id);'>";
                html += "<td>" + " <button id='btn_anular_distro' onclick='fnAnulaItmDistro();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
                html += "<td>" + i + "</td>";
                html += "<td class='oculto'>" + data[x].iddistribucion + "</td>";
                html += "<td class='oculto'>" + data[x].grupo + "</td>";
                html += "<td >" + data[x].cuenta + " </td>";
                html += "<td >" + data[x].propietario + " </td>";
                html += "<td class='oculto'>" + data[x].estado + "</td>";
                html += "<td align='right' > " + data[x].fraccion + " </td>";
                html += "<td align='right' > " + data[x].monto + "</td>";
                html += "</tr>";
            }
            $("#body_distribucion").html(html);
            TotalesDistribucion();

            $('#tabla_distribucion').dataTable({
                "fnDrawCallback": function (oSettings) {
                    // Need to redo the counters if filtered or sorted 
                    if (oSettings.bSorted || oSettings.bFiltered) {
                        for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
                        {
                            $('td:eq(1)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);
                        }
                    }
                },
                "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
                "aaSorting": [[1, 'asc']], "sScrollY": ($("#dialogo_distribucion").height() - 180), "bPaginate": false,
                "bLengthChange": false, "bFilter": false, "bSort": true,
                "bInfo": false, "bAutoWidth": true, "bSortClasses": false //"bJQueryUI": true,
            }); //end dataTables
            //}

            var estado_distro = data[1].estado;
            switch (estado_distro) {
                case '0':
                    $("#div_btns_distribucion").css("display", "block");
                    $("#btn_inserta_fraccion").css("display", "block");
                    //$("#tabla_distribucion tr:nth-child(1)").hide();
                    ocultarFila(2, true);
                    anula = "NO";
                    break;
                case 'P':
                    $("#div_btns_distribucion").css("display", "block");
                    $("#btn_inserta_fraccion").css("display", "block");
                    anula = "SI";
                    $("#mensajito").css("display", "none");
                    break;
                case 'D':
                    $("#div_btns_distribucion").css("display", "none");
                    $("#btn_inserta_fraccion").css("display", "none");
                    $("#tabla_distribucion").attr("disabled", true);
                    anula = "NO";
                    $("#mensajito").css("display", "block");
                    break;
            }

        }
    });
}

function fnMuestraBancos() {

    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "MBANCOS", grupo: $("#grupo").val(), idempresa: $("#codsucursal").val().substr(0, 1)},
        url: "controles/ManteBancos.php",
        beforeSend: function (objeto) {
            $("#carga1").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            $('#carga1').css('display', 'none');
        },
        success: fnCreaTablaBancos
    });
    return false;
}

function fnCreaTablaBancos(jsonbancos) {
    var html;
    for (var contador = 0; contador < jsonbancos.length; contador++) {
        html += "<tr id='ba[" + contador + "]' onclick='fnSeleccionaBanco(this.id);'>";
        var i = contador + 1;
        html += "<td>" + i + "</td>";
        html += "<td class='oculto'>" + jsonbancos[contador].idbanco + "</td>";
        html += "<td >" + jsonbancos[contador].iniciales + "</td>";
        html += "<td>" + jsonbancos[contador].desc_banco + "</td>";
        html += "</tr>";
    }
    $("#tbody_banco").html(html);
    return false;
}

function fnSeleccionaBanco(idfila) {
    var elTableRow = document.getElementById(idfila);
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#idbanco").val(elTableCells[1].innerHTML);
    $("#descbanco").val(elTableCells[2].innerHTML + ':' + elTableCells[3].innerHTML);
    console.log($("#idbanco").val());
    fnMuestraCuentasxUsuario();
    $("#tabla_bancos").css("display", "none");
    $("#tabla_cuentas").css("display", "block");
}

function fnMuestraCuentasxUsuario() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "CxU2", valor: $("#idbanco").val(), idempresa: $('#codsucursal').val(), opsql: 'L'},
        url: "controles/ManteBancos.php",
        success: fnCreaTablaCuentasxUsuario
    });
    return false;
}

function fnCreaTablaCuentasxUsuario(jsoncxu) {
    var html;
    for (var contador = 0; contador < jsoncxu.length; contador++) {
        html += "<tr id='cu[" + contador + "]' onclick='fnSeleccionaCuenta(this.id);'>";
        var i = contador + 1;
        html += "<td>" + i + "</td>";
        html += "<td>" + jsoncxu[contador].nusuario + "</td>";
        html += "<td >" + jsoncxu[contador].iniciales + "</td>";
        html += "<td>" + jsoncxu[contador].nrocuenta + "</td>";
        html += "</tr>";
    } /*End FOR*/

    $("#tbody_cuentasxusuario").html(html);
}

function fnSeleccionaCuenta(idfila) {
    var elTableRow = document.getElementById(idfila);
    var elTableCells = elTableRow.getElementsByTagName("td");

    var inicial = elTableCells[2].innerHTML;
    inicial = inicial.substring(0, 3);
    $("#datapago").val(elTableCells[1].innerHTML + '=> ' + elTableCells[2].innerHTML + ': ' + elTableCells[3].innerHTML);
    $("#txt_nrocuenta").val(elTableCells[3].innerHTML);
    $("#datoscuenta").val(elTableCells[1].innerHTML + '=> ' + elTableCells[2].innerHTML + ': ' + elTableCells[3].innerHTML);
    $("#txtnrooperacion").val($("#nrodeoperacion").val());
    console.log($("#txt_nrocuenta").val());
}

function fnPagar() {
    if ($("#nrodeoperacion").val().trim() !== '')
    {
        jConfirm("¿Esta seguro de pagar GIRO Nro: " + $('#codgirosucursal').val() + '  S/.' + $('#importe').val(), "Entregados", function (r) {
            if (r) {
                $.ajax({type: "POST",
                    data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#nrodeoperacion').val(), usuaentrega: $('#nick').val(),
                        sucuentrega: $('#codsucursal').val(), datospago: $('#datoscuenta').val(), monto: $('#importe').val(), opsql: 'decuenta'},
                    url: "controles/ManteRecibidos.php",
                    success: fnCreaNuevoDiario
                }).done(function (msg) {
                    //agregamos comision de s/. 3 por cada transaccion en internet
                    if ($("#idbanco").val().trim() === '101') {
                        fnGeneraComisionPagoxInternet($("#correlativo").val().trim());
//                        console.log($("#idbanco").val());
                    }
                    $('#TEntregados').dataTable().fnDestroy();
                    MuestraEntregados($('#efecha_r').val(), 'E');
                    fnImprimeEntregados('manualmente');
                });
            }
        });
    } else {
        jWarning("Nro de Operacion VACIO, verifique...", "Giros - Transferencias");
        document.getElementById("operacion").focus();
    }
}
// validamos los Check
function porEmpresa() {

    if ($("#check_money:checked").val() === 'M' && $("#check_pantera:checked").val() === 'P') {
        return 'T'
    } else {
        if ($("#check_money:checked").val()) {
            return 'M'
        }
        if ($("#check_pantera:checked").val()) {
            return 'P'
        }
    }
    
    if ($("#check_money:checked").val() === undefined && $("#check_pantera:checked").val() === undefined) {
        return 'NO'
    }
}

