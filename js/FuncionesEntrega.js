function eCalculaTotales() {
    var sumape = 0;
    var sumapa = 0;
    $('#TEntregados tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas        
        if ($(this).find('td').eq(18).text() === 'Pendiente') {
            $(this).css('color', 'purple');
            //$(this).css('color', 'DarkKhaki');
            sumape += parseFloat($(this).find('td').eq(9).text() || 0, 10);
        }
        ;
        if ($(this).find('td').eq(18).text() !== 'Pendiente') {
            sumapa += parseFloat($(this).find('td').eq(9).text() || 0, 10);
            $(this).css('color', 'blue');
        }
        ;
        if ($(this).find('td').eq(23).text() === 'S') {
            $(this).css('color', 'tomato');
        }
        ;
    });
//alert(suma);
    $("#etotal_i").text(sumapa.toFixed(2));
    $("#etotal_p").text(sumape.toFixed(2));
}

function calcula_cargo() {
    var importe = parseFloat(document.getElementById("importe_r").value);
    var porcentaje = parseFloat(document.getElementById("listaporcentajes").value);
    cargo = importe * (porcentaje / 100);
    document.getElementById("cargo_r").value = parseFloat(cargo).toFixed(2);
    document.getElementById("efectivo_r").focus();
}

function ecalcula_cargo() {
    var importe = parseFloat(document.getElementById("eimporte_r").value);
    var porcentaje = parseFloat(document.getElementById("elistaporcentajes").value);
    cargo = importe * (porcentaje / 100);
    document.getElementById("ecargo_r").value = parseFloat(cargo).toFixed(2);
    document.getElementById("ecargo_r").focus();
}

function ADecimal() {
    nimporte = document.getElementById("importe_r").value;
    document.getElementById("importe_r").value = parseFloat(Math.round(nimporte * 100) / 100).toFixed(2);
    ncargo = document.getElementById("cargo_r").value;
    document.getElementById("cargo_r").value = parseFloat(Math.round(ncargo * 100) / 100).toFixed(2);
    notros = document.getElementById("otros_r").value;
    document.getElementById("otros_r").value = parseFloat(Math.round(notros * 100) / 100).toFixed(2);
}

function eADecimal() {
    nimporte = document.getElementById("eimporte_r").value;
    document.getElementById("eimporte_r").value = parseFloat(Math.round(nimporte * 100) / 100).toFixed(2);
    ncargo = document.getElementById("ecargo_r").value;
    document.getElementById("ecargo_r").value = parseFloat(Math.round(ncargo * 100) / 100).toFixed(2);
}

function RecuperaFilaB(idfilaB) {
    var elTableRow = document.getElementById(idfilaB);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';
    var elTableCells = elTableRow.getElementsByTagName("td");
    if ($("#remite_beneficia").val() === "B") {
        document.getElementById("eidclienteb").value = elTableCells[0].innerHTML;
        document.getElementById("ednib").value = elTableCells[1].innerHTML;
        document.getElementById("enombresb").value = elTableCells[2].innerHTML + ' ' + elTableCells[3].innerHTML;
        $("#dialogo_buscaclib").dialog("close");
    }
    if ($("#remite_beneficia").val() === "R") {
        document.getElementById("eidclienter").value = elTableCells[0].innerHTML;
        document.getElementById("ednir").value = elTableCells[1].innerHTML;
        document.getElementById("enombresr").value = elTableCells[2].innerHTML + ' ' + elTableCells[3].innerHTML;
        $("#dialogo_buscaclib").dialog("close");
    }
}

function RecuperaFilaR(idfilaR) {
    var elTableRowR = document.getElementById(idfilaR);
    elTableRowR.style.backgroundColor = (elTableRowR.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';
    /*if(elTableRowR.style.backgroundColor === 'green'){*/
    var elTableCellsR = elTableRowR.getElementsByTagName("td");
    for (var i = 0; i < elTableCellsR.length; i++) {
        document.getElementById("idclienter").value = elTableCellsR[0].innerHTML;
        document.getElementById("dnir").value = elTableCellsR[1].innerHTML;
        document.getElementById("nombresr").value = elTableCellsR[2].innerHTML;
    }
    //}
}

function RecuperaFilaS(idfilaS) {
    var idfilac = $('#sele_su').val();
    var elTableRow = document.getElementById(idfilaS);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfilaS) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $('#codsucursalo').val(elTableCells[0].innerHTML);
    if ($('#codsucursalo').val().trim() !== $('#codsucursal').val().trim()) {
        $('#origen').val(elTableCells[1].innerHTML);
    } else {
        jAlert("Seleccione otra sucursal...", "Transferencias");
    }
    // console.log($('#cod_sucuo').val());
    $('#sele_su').val(idfilaS);
    $("#dialogo_buscasucu").dialog("close");
}

function eRecuperaClientesB() {
    if ($('#edni_b').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {valor: $('#edni_b').val(), op: $('#eopciones_b').val(), opt: "BC"},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            beforeSend: antesEnvio,
            success: eCreaTablaB,
            error: errorEnvio
        });
    } else {
        jAlert("Ingrese datos buscar", "Transferencias");
    }
    return false;
}

function RecuperaClientesR() {
    if ($('#dni_r').val() !== '' && $('#dni_r').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {valor: $('#dni_r').val(), op: $('#opciones_r').val(), opt: "BC"},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            beforeSend: antesEnvio,
            success: CreaTablaR,
            error: errorEnvio
        });
    } else {
        jAlert("Escriba datos a buscar", "Transferencias");
    }
    return false;
}

function RecuperaSucursal() {
    var ini_codsucu = $('#codsucursal').val();
    ini_codsucu = ini_codsucu.substr(0, 1);
    if ($('#codsucu').val().trim() !== '' && $('#codsucu').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opt: "BUSCASUCU1", nomsucu: $('#codsucu').val().trim(), codsucu: ini_codsucu},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            success: CreaTablaS
        });
//    ResizeDivS();        
    } else {
        jAlert("Escriba datos a buscar", "Giros - Transferencias");
    }
    return false;
}

function eRecuperaClientesR() {
    if ($('#edni_r').val() !== '' && $('#edni_r').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {valor: $('#edni_r').val(), op: $('#eopciones_r').val(), opt: "BC"},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            beforeSend: antesEnvio,
            success: eCreaTablaR,
            error: errorEnvio
        });
    } else {
        jAlert("Escriba datos a buscar", "Transferencias");
    }
    return false;
}

function eRecuperaSucursal() {
    if ($('#ecodsucu').val() !== '' && +$('#ecodsucu').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {codsucu: $('#ecodsucu').val()},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/Busca_Sucursal.php",
            beforeSend: antesEnvio,
            success: eCreaTablaS,
            error: errorEnvio
        });
    } else {
        jAlert("Escriba datos a buscar", "Transferencias");
    }
    return false;
}

function antesEnvio() {
    $("#log").text("Se procesa la función 'antesEnvio()' antes de enviarse los datos...");
}
// En caso de error
function errorEnvio() {
    $("#log").text("Ha ocurrido un error!");
}

function MuestraEntregados(fecha_busqueda, opt) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {codsucu: $("#codsucursal").val(), fecha: fecha_busqueda, opt: opt},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (data) {
            $('#carga').css({display: 'block'});
        },
        success: function (data) {
            if (jQuery.isEmptyObject(data))
            {
                var html;
                html = "";
//                var table = $('#TEntregados').DataTable();
//                    table.clear();
//                    table.draw();
                $("#tablaentregados").html(html);
            } else {
                CreaTablaEntregados(data);
            }
        },
        complete: function () {
            $('#carga').css('display', 'none');
        }
    });
    return false;
}

function eRecuperaFila(eidfila) {
    eControlesCancelar();
    $("#formulario").css("display", "none");
    var idfilar = $('#sele_fe').val();
    var elTableRow = document.getElementById(eidfila);
    var elTableRow1 = document.getElementById(idfilar);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilar !== eidfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    document.getElementById("pdffecha").value = elTableCells[3].innerHTML;
    document.getElementById("md_dnib").value = elTableCells[4].innerHTML;
    document.getElementById("enombresb").value = elTableCells[5].innerHTML;
    document.getElementById("md_dnir").value = elTableCells[6].innerHTML;
    document.getElementById("enombresr").value = elTableCells[7].innerHTML;
    document.getElementById("eimporte_r").value = elTableCells[9].innerHTML;
    document.getElementById("ecargo_r").value = elTableCells[10].innerHTML;
    document.getElementById("md_igv").value = elTableCells[11].innerHTML;
    document.getElementById("md_itf").value = elTableCells[12].innerHTML;
    document.getElementById("md_usuaregistra").value = elTableCells[17].innerHTML;
    document.getElementById("md_fechaentrega").value = elTableCells[18].innerHTML;
    document.getElementById("md_usuaentrega").value = elTableCells[19].innerHTML;
    document.getElementById("eobserva").value = elTableCells[20].innerHTML;
    document.getElementById("ciudaddestino").value = elTableCells[21].innerHTML;

    document.getElementById("codgirosucursal").value = elTableCells[2].innerHTML;
    $("#codgirosucu_img").val(elTableCells[2].innerHTML);
    var sucursalo = elTableCells[2].innerHTML;
    document.getElementById("codsucursalo").value = sucursalo.substring(0, 3);
    $("#usuaentrega").val(elTableCells[19].innerHTML); // para verificar si fue pagado (originalmente = '---')
    $("#anulado").val(elTableCells[24].innerHTML);
    $("#correlativo").val(elTableCells[25].innerHTML);
    $("#correlativo_img").val(elTableCells[25].innerHTML);
    $("#sele_fe").val(eidfila);
    document.getElementById("txtnrooperacion").disabled = false;
    document.getElementById("boton_pagar").disabled = false;
    document.getElementById("imprime_entregados").disabled = false;
    console.log($("#correlativo_img").val());
    console.log($("#anulado").val());
}

function CreaTablaEntregados(jsonrecibe) {
    var voucher;
    var html;
    for (var contador = 0; contador < jsonrecibe.length; contador++) {
        var i = contador + 1;
        html += "<tr id='R[" + contador + "]' class='dato' ondblclick='eRecuperaFila(this.id);'>";
        /* 0 */ html += "<td>" + i + "</td>";
        voucher = jsonrecibe[contador].voucher;
        if (voucher === 'XXX') {
            html += "<td>" + " <button id='btn_anular' title='' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove'></span></button>" + "</td>";
        } else {
            html += "<td>" + " <button id=" + jsonrecibe[contador].cod_girosucu + " title='Boucher' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-picture blue'></span></button>" + "</td>";
        }
        html += "<td id='correlativo'>" + jsonrecibe[contador].cod_girosucu + "</td>";
        html += "<td>" + jsonrecibe[contador].fechahora_registro + "</td>";
        html += "<td >" + jsonrecibe[contador].dni_rucb + "</td>";
        html += "<td>" + jsonrecibe[contador].beneficiario + "</td>";
        /* 6 */ html += "<td >" + jsonrecibe[contador].dni_ruc + "</td>";
        html += "<td>" + jsonrecibe[contador].remitente + "</td>";
        html += "<td class='eoculto'>" + jsonrecibe[contador].cod_sucursald + "</td>";
        html += "<td align='right'>" + jsonrecibe[contador].importe_giro + "</td>";
        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].cargo_giro + "</td>";
        /*11 */ html += "<td class='eoculto' align='right' class='oculto'>" + jsonrecibe[contador].igv_giro + "</td>";
        html += "<td class='eoculto' align='right' class='oculto'>" + jsonrecibe[contador].itf_giro + "</td>";
        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].otros + "</td>";
        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].total + "</td>";
        html += "<td>" + jsonrecibe[contador].nro_cuenta + "</td>";
        /*16 */ html += "<td>" + jsonrecibe[contador].nro_operacion + "</td>";
        html += "<td>" + jsonrecibe[contador].usuario_registra + "</td>";
        html += "<td>" + jsonrecibe[contador].fechahora_entrega + "</td>";
        html += "<td >" + jsonrecibe[contador].usuario_entrega + "</td>";
        html += "<td>" + jsonrecibe[contador].observagiro + "</td>";
        /*21 */ html += "<td class='eoculto'>" + jsonrecibe[contador].ciudad_destino + "</td>";
        html += "<td class='eoculto'>" + jsonrecibe[contador].nom_sucursal + "</td>";
        html += "<td>" + jsonrecibe[contador].datapago + "</td>";
        html += "<td class='eoculto'>" + jsonrecibe[contador].anulado + "</td>";
        /*25*/ html += "<td class='eoculto'>" + jsonrecibe[contador].correlativo + "</td>";
        html += "</tr>";
    }

    $("#tablaentregados").html(html);
    eCalculaTotales();

    $('#TEntregados').dataTable({
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
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 180), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function eInserta_Recibidos() {
    var fechagiro = $("#efecha_r").val();
    var origen = $("#codsucursalo").val();
    var remitente = $("#ednir").val();
    var destino = $("#codsucursal").val();
    var beneficiario = $("#ednib").val();
    var importe = parseFloat(document.getElementById('eimporte_r').value);
    var cargo = parseFloat(document.getElementById('ecargo_r').value);
    var igv = '0';  //parseFloat(document.getElementById('eigv_r').value);
    var itf = '0';
    var otro = '0'; //parseFloat(document.getElementById('eotros_r').value); 
    var total = '0'; //parseFloat(document.getElementById('etotal_r').value);
    var efectivo = '0'; //parseFloat(document.getElementById('efectivo_r').value);
    var ciudestino = '---';
    $("#ciudaddestino").val();
    var obsgiro = $("#eobserva").val();
    var nrocuenta = '---'; //$("#cuentas").val(); //$("input#otros").val();    
    var nusuario = $("#nick").val();
    if (remitente.length === 0 || beneficiario.length === 0 || destino.length === 0 || importe === 0)
    {
        jAlert('Faltan datos verifique....', "Transferencias");
        return false;
    } else {
        $.ajax({async: true, type: "POST", cache: false, dataType: 'json',
            data: {opt: "I", fechagiro: fechagiro, origen: origen, remitente: remitente, destino: destino, beneficiario: beneficiario,
                importe: importe, cargo: cargo, igv: igv, itf: itf, otro: otro, total: total, efectivo: efectivo, ciudestino: ciudestino,
                obsgiro: obsgiro, nrocuenta: nrocuenta, nusuario: nusuario},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            beforeSend: function (objeto) {
                $('#carga').css({display: 'block'});
            },
            complete: function () {
                $('#carga').css('display', 'none');
//        fnImprimeEntregados("alguardar");
                $('#TEntregados').dataTable().fnDestroy();
                MuestraEntregados($('#efechahoy').val(), $('#optbuscar').val());
                eControlesAlGuardar();
            }
        }).done(function (respuesta) {
            $("#ecodgirosucursal").val(respuesta.codgirosucu);
        });
    }
    return false;
}

function ControlesCancelar() {
    ControlesNuevo();
    ControlesAlGuardar();
}

function eControlesNuevo() {

    document.getElementById("ednir").value = '';
    document.getElementById("ednir").disabled = false;
    document.getElementById("ednib").value = '';
    document.getElementById("ednib").disabled = false;
    document.getElementById("enombresb").value = '';
    document.getElementById("enombresr").value = '';

    document.getElementById("eimporte_r").value = '0';
    document.getElementById("eimporte_r").disabled = false;
    document.getElementById("ecargo_r").value = '0';
    document.getElementById("ecargo_r").disabled = false;
    $("#txtnrooperacion").val("");
    document.getElementById("txtnrooperacion").disabled = false;

    $("#origen").val("");
    $("#origen").attr("disabled", false);
//  $("#datapago").val("") ;  
//  $("#datapago").attr("disabled",false) ;
    $("#eobserva").val("");
    $("#eobserva").attr("disabled", false);

    document.getElementById("enuevo").disabled = true;
    document.getElementById("eobserva").disabled = false;
    $("#ebusca_beneficiario").attr("disabled", false);
    $("#ebusca_remitente").attr("disabled", false);
    $("#busca_sucursal").attr("disabled", false);
    $("#ecancelar").attr("disabled", false);
    $("#eobserva").attr("disabled", false);

    document.getElementById("btn_eguardar").disabled = false;
    $("#elistaporcentajes").prop("selectedIndex", 0);
    document.getElementById("ednib").focus();
}

function eControlesAlGuardar() {
    document.getElementById("ednir").value = '';
    document.getElementById("ednir").disabled = true;
    document.getElementById("ednib").value = '';
    document.getElementById("ednib").disabled = true;

    document.getElementById("eimporte_r").value = '0';
    document.getElementById("eimporte_r").disabled = true;
    document.getElementById("ecargo_r").value = '0';
    document.getElementById("ecargo_r").disabled = true;
    document.getElementById("txtnrooperacion").value = '';
    document.getElementById("txtnrooperacion").disabled = true;

    $("#origen").val("");
    $("#origen").attr("disabled", true);
    $("#datapago").val("");
    $("#datapago").attr("disabled", true);
    $("#eobserva").val("");
    $("#eobserva").attr("disabled", true);

    document.getElementById("enuevo").disabled = false;
    document.getElementById("btn_eguardar").disabled = true;
    document.getElementById("eanular").disabled = true;

    $("#ebusca_beneficiario").attr("disabled", true);
    $("#ebusca_remitente").attr("disabled", true);
    $("#busca_sucursal").attr("disabled", true);
    $("#ecancelar").attr("disabled", true);

    $("#elistaporcentajes").prop("selectedIndex", 0);
}

function eControlesCancelar() {
    eControlesNuevo();
    eControlesAlGuardar();
    //$("#formulario").toggle(700);
}

function fnImprimeEntregados(accion) {
    var confirma_impresion = VerificaImprimir();
    switch (accion) {
        case "manualmente":
            if (confirma_impresion === "SI") {
                window.open('ImprimeEntregados.php?pdfcodgirosucursal=' + $('#codgirosucursal').val() + '&pdffecha=' + $('#pdffecha').val() + '&pdfcodsucursalo=' + $('#codsucursalo').val() +
                        '&pdforigen=' + $('#origen').val() + '&pdfenombresb=' + $('#enombresb').val() + '&pdfenombresr=' + $('#enombresr').val() + '&pdfeimporte_r=' + $('#eimporte_r').val() +
                        '&pdfnick=' + $('#nick').val(), '_blank');  // changed here (cambiado aquí)
            } else {
                $.alert("NO tienes permiso para volver a imprimir, comunicate con el Administrador...", "Giros - Transferencias");
            }
            break;
        case "alguardar":
            window.open('ImprimeEntregados.php?pdfcodgirosucursal=' + $('#codgirosucursal').val() + '&pdffecha=' + $('#pdffecha').val() + '&pdfcodsucursalo=' + $('#codsucursalo').val() +
                    '&pdforigen=' + $('#origen').val() + '&pdfenombresb=' + $('#enombresb').val() + '&pdfenombresr=' + $('#enombresr').val() + '&pdfeimporte_r=' + $('#eimporte_r').val() +
                    '&pdfnick=' + $('#nick').val(), '_blank');
    }
    return false;
}

function fnCreaTablaMasDatos() {
    var html;
    html += "<tr>";
    html += "<td>" + $('#md_dnib').val() + "</td>";
    html += "<td>" + $('#md_dnir').val() + "</td>";
    html += "<td>" + $('#md_igv').val() + "</td>";
    html += "<td>" + $('#md_itf').val() + "</td>";
    html += "<td>" + $('#md_usuaregistra').val() + "</td>";
    html += "<td>" + $('#md_fechaentrega').val() + "</td>";
    html += "<td>" + $('#md_usuaentrega').val() + "</td>";
    html += "<td>" + $('#ciudaddestino').val() + "</td>";
    html += "<td>" + $('#origen').val() + "</td>";
    html += "</tr>";
    $("#tbody_masdatose").html(html);
}

function fnConfirmaAnulaEntrega() {
    /* anulado: no, Admin: solo de diferentes fechas, operador: solo en fecha actual y que la transfeencia este pendiente */
    if ($("#anulado").val() !== 'S') {
        var fechahoy = $("#fechahoy").val();
        var fechasele = $("#pdffecha").val().substring(0, 10);
        if (fechahoy === fechasele && $("#usuaentrega").val() === '---') {
            if ($("#tipousuario").val() !== 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#enombresb').val() + '\n' + $('#enombresr').val() + '\n' + $('#eimporte_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        $('#TEntregados').dataTable().fnDestroy();
                        MuestraEntregados($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaEntrega(r);
                        $("#correlativo").val("");
                        $('#TEntregados').dataTable().fnDestroy();
                        MuestraEntregados($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
        } else {
            jAlert("NO puede Anular esta operacion, comuniquese con el Administrador.", "Transferencias");
        }

        if (fechahoy !== fechasele) {
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        /*MuestraRecibidos($('#fecha_r').val(), 'R');*/
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
        }
    } else {
        jAlert("Ya esta anulado, verifique...", "Transferencias");
    }
}

function fnAnulaEntrega(cadena) {
    var corr = document.getElementById("correlativo").value;
    var correla = parseInt(corr);
    var motivos = cadena + " (" + $("#nick").val() + '==' + $("#fechahorahoy").val() + ")";
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {motivo: motivos, correlativo: correla, opt: "ANULA"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        complete: function () {
            MuestraRecibidos($('#fecha_r').val(), 'R');
            $("#correlativo").val("");
            jAlert("Anulado: " + $("#codgirosucursal").val(), "Transferencias");
        }
    });
    //alert(corr);
    return false;
}

function eRecuperaFilaB(eidfilaB) {
    var elTableRow = document.getElementById(eidfilaB);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';

    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {
        document.getElementById("eidclienteb").value = elTableCells[0].innerHTML;
        document.getElementById("ednib").value = elTableCells[1].innerHTML;
        document.getElementById("enombresb").value = elTableCells[2].innerHTML;

    }

}

function eRecuperaFilaR(eidfilaR) {
    var elTableRowR = document.getElementById(eidfilaR);
    elTableRowR.style.backgroundColor = (elTableRowR.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';
    /*if(elTableRowR.style.backgroundColor === 'green'){*/
    var elTableCellsR = elTableRowR.getElementsByTagName("td");
    for (var i = 0; i < elTableCellsR.length; i++) {
        document.getElementById("eidclienter").value = elTableCellsR[0].innerHTML;
        document.getElementById("ednir").value = elTableCellsR[1].innerHTML;
        document.getElementById("enombresr").value = elTableCellsR[2].innerHTML;
    }
    //}
}

function eRecuperaFilaS(eidfilaS) {
    var elTableRow = document.getElementById(eidfilaS);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "green") ? 'cyan' : 'green';
    if (elTableRow.style.backgroundColor === 'green') {
        var elTableCells = elTableRow.getElementsByTagName("td");
        for (var i = 0; i < elTableCells.length; i++) {
            document.getElementById("codsucursalo").value = elTableCells[0].innerHTML;
            document.getElementById("origen").value = elTableCells[1].innerHTML;
            if ($('#codsucursalo').val() === $('#codsucursal').val()) {
                $("#ecodsucursald").val("");
                $("#origen").val("");
            }
        }
    }
}

///////////////////////////  DocumentReady ///////////////////////////////
$(document).ready(function () {
//  $("#wrapper").toggleClass("toggled");
    //$("#wrapper").toggle(700);
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#muestra_formulario").click(function (e) {
        //e.preventDefault();
        //$("#formulario").toggleClass("toggled");
        $("#formulario").toggle(700);
    });

    $("#btn_inserta_fraccion").tooltip({
        show: {effect: "explode", delay: 250},
        position: {my: "left top", at: "right+5 top-5"}
    });
    //solo letras
    $('#dnir').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#dnib').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#codsucu').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#buscador').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#dni_cliente').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    //Para escribir solo numeros    
    $('#importe_r').validacampos('.0123456789');

    $('#cargo_r').validacampos('.0123456789');

    $('#otros_r').validacampos('.0123456789');

    $('#efectivo_r').validacampos('.0123456789');
    $("#txt_fraccion_distro").val('0');
    $('#txt_fraccion_distro').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});

    //$("#formulario").css("display", "none");
    $("#formulario").toggle(2000); // .css("display", "none");
    eControlesAlGuardar();

//  document.getElementById("eimprimir_r").disabled = true;
    document.getElementById("imprime_entregados").disabled = true;
    document.getElementById("eanular").disabled = true;

    ///////////////////////////  KEY PRESS ///////////////////////////////
    /////////////////////////////////////////////////////////////////////
//  $("#ednib").change( function(){
//      alert("The text has been changed.");
//  });
//  
    $("#ednib").keypress(function (e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#ednib').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#enombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                $("#eidclienteb").val(respuesta.idcliente);
                $("#enombresb").val(respuesta.nombres);
            });
        }
    });

    $("#dni_b").keypress(function (e) {
        if (e.which === 13) {
            if ($('#dni_b').val().trim() !== "") {
                RecuperaClientesB();
            } else
                jWarning("Ingrese datos a buscar...", "Giros - Transferencias");
        }
    });



    $("#ednir").keypress(function (e) {

        if (e.which === 13) {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {opt: 'BCLIENTE', dni: $('#ednir').val()},
                beforeSend: function () {
                    $("#enombresr").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                $("#eidclienter").val(respuesta.idcliente);
                $("#enombresr").val(respuesta.nombres);
            });
        }

    });

    $("#origen").keypress(function (e) {
        if ($('#origen').val() !== $('#codsucursal').val()) {//verificamos sucursal diferente
            if (e.which === 13) {
                $.ajax({type: 'POST', dataType: 'json',
                    url: 'controles/ManteRecibidos.php',
                    data: {codsucu: $('#origen').val(), idempresa: $("#codsucursal").val().substr(0, 1), opt: "B"},
                    beforeSend: function () {
                        $("#origen").html("Procesando, espere por favor...");
                    }
                }).done(function (respuesta) {
                    $("#codsucursalo").val(respuesta.codsucursal);
                    $("#origen").val(respuesta.nomsucursal);
                    $("#epdforigen").val(respuesta.nomsucursal);/*para la impresion*/
                    if ($("#codsucursalo").val() !== 'XXX') {
                        $("#origen").attr("disabled", true);
                    }
                });
            }
        } else
            jAlert("Elija una SUCURSAL diferente...", "Transferencias");
    });

    $('#eimprimir_r').click(function () {
        if ($("#tipousuario").val().trim() === "ADMIN") {
            if ($("#usuaentrega").val().trim() === '---')
            {
                jAlert("No puede imprimir PENDIENTE, verifique...", "Giros - Transferencias");
            } else {
                fnImprimeEntregados('manualmente');
            }
        } else {
            jWarning("Solo Administrador, verifique...", "Giros - Transferencias");
        }
    });

    $('#imprime_entregados').click(function () {
        if ($("#usuaentrega").val().trim() === '---')
        {
            $.alert("No puede imprimir PENDIENTE, verifique...", "Giros - Transferencias");
            //$.alert({title: 'Giros - Transferencias', content:'No puede imprimir PENDIENTE, verifique...' });
        } else {
            fnImprimeEntregados('manualmente');
        }
    });

    $("#dnib").click(function () {
        $("#idcliente").val($("#idclienteb").val());
        $("#txt_datocliente").val($("#nombresb").val());
    });

    $("#dnir").click(function () {
        $("#idcliente").val($("#idclienter").val());
        $("#txt_datocliente").val($("#nombresr").val());
    });

    $("#efecha_r").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: 'both',
        buttonImage: 'img/calendar.ico',
        buttonImageOnly: true,
        changeYear: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 12);
        },
        numberOfMonths: 1,
        onSelect: function (dateText) {
            $('#TEntregados').dataTable().fnDestroy();
            $("#cuentas").css("display", "block");
            MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());
        }
    });

    $("#buscador").keyup(function () {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {  // Show only matching TR, hide rest of them
            $("#TRecibidos tbody>tr").hide();
            $("#TRecibidos td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        { // When there is no input or clean again, show everything back
            $("#TRecibidos tbody>tr").show();
        }
    });
    $.extend($.expr[":"],
            {
                "contains-ci": function (elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

    $("#ebuscador").keyup(function () {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#TEntregados tbody>tr").hide();
            $("#TEntregados td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        {   // When there is no input or clean again, show everything back
            $("#TEntregados tbody>tr").show();
        }
    });
    $("#busca_da").keyup(function () {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#TSaldoDisponibleAgente tbody>tr").hide();
            $("#TSaldoDisponibleAgente td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        {   // When there is no input or clean again, show everything back
            $("#TSaldoDisponibleAgente tbody>tr").show();
        }
    });
    $("#busca_sa").keyup(function () {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#TSaldoDisponible tbody>tr").hide();
            $("#TSaldoDisponible td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        {   // When there is no input or clean again, show everything back
            $("#TSaldoDisponible tbody>tr").show();
        }
    });
    $("#busca_fs").keyup(function () {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#TFlujoSucursales tbody>tr").hide();
            $("#TFlujoSucursales td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else
        {   // When there is no input or clean again, show everything back
            $("#TFlujoSucursales tbody>tr").show();
        }
    });
    
//////////////// DIALOGOS ////////////////

    $("#dialogo_asigcuenta").dialog({autoOpen: false, resizable: true,
        modal: true, height: 440, width: 380,
        open: function (event, ui) {
            var ntitulo = "Pagar a: " + $('#enombresb').val() + ' S/.' + $('#eimporte_r').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#desdeagente").val("N");
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

    $("#dialogo_masdatose").dialog({autoOpen: false, resizable: true,
        modal: true, height: 250, width: 600,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "fade",
            duration: 500
        },
        open: function (event, ui) {
            var ntitulo = "Datos de : " + $('#codgirosucursal').val() + '// Fecha:' + $('#pdffecha').val();
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            fnCreaTablaMasDatos();
        },
        buttons: {
            'Salir': function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) {
            var html;
            $("#tbody_masdatose").html(html);
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
//      $("#lista_asociados").prop("selectedIndex", 0);
            $("#lista_agentes").prop("selectedIndex", 0);
            //$("#opciones_distribucion").prop("selectedIndex", 0);
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

    $("#dialogo_buscaclib").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 400, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Busca Beneficiario";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#dni_b").val("");
            //fnCreaTablaMasDatos();
        },
        buttons: {
            'Salir': function () {
                $(this).dialog("close");
            }
        },
        close: function (event, ui) {
            fnLimpiaTablaClientes();
        }
    });

    $("#dialogo_cliente").dialog({autoOpen: false, resizable: true,
        modal: true, height: 270, width: 330,
        show: {effect: "blind", duration: 500},
        hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Editar datos de Cliente";
            $("span.ui-dialog-title").css("font-size", 12);
            $("span.ui-dialog-title").text(ntitulo);
            fnDeshabilitaCamposCliente();
            $("#btn_cliente_editar").attr("disabled", false);
            $("#btn_cliente_nuevo").attr("disabled", false);
            $("#div_MasDatosCliente").css("display", "none");
        },
        close: function (event, ui) {
            fnLimpiaCamposClientes();
        }
    });

    $("#dialogo_buscasucu").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 380, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Busca Sucursal";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#codsucu").val("");
        },
        buttons: {'Salir': function () {
                $(this).dialog("close");
            }},
        close: function (event, ui) {
            fnLimpiaSucursales();
        }
    });

    $("#diag_SaldoDisponible").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 550, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Saldo Disponible";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            fnMuestraSaldoDisponible();
        }
        //        buttons: {'Salir': function () {
        //                $(this).dialog("close");
        //            }},
        //        close: function (event, ui) {
        //            
        //        }
    });

    $("#diag_SaldoDisponibleAgente").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 500, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Saldo Disponible Agente";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            fnMuestraSaldoDisponibleAgente();
        }
    });

    $("#diag_FlujoSucursales").dialog({autoOpen: false, resizable: true,
        modal: true, height: 550, width: 500, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Flujo Neto Efectivo Sucursales";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            fnMuestraFlujoSucursales();
        }
    });

    $("#dialogo_CargaImagen").dialog({autoOpen: false, resizable: true,
        modal: true, height: 500, width: 400, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Cargar Voucher";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);

        }
//        buttons: {'Salir': function () {(this).dialog("close");},
//                  
//                 }
//        
//        close: function (event, ui) {
//            
//        }
    });

    ////////////////////////////////////////////////////////////////////////
    // ============================= CLICK =============================== 
    $("#boton_pagar").click(function () {
        if ($("#usuaentrega").val() === '---') {
            if ($("#enombresb").val().trim() === '' && $("#enombresr").val().trim() === '')
            {
                jAlert("Seleccione un cliente...", "Agentes");
            } else {
                $("#grupo").val("C");
                $("#dialogo_asigcuenta").dialog("open");
            }
        } else {
            jAlert("Ya esta pagado, Seleccione otro ..." + $("#usuaentrega").val(), "Agentes");
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

//    if ($("#opciones_distribucion").val() === 'U') {
//      existe = BuscaEnTablaDistro($("#lista_asociados").val());
//      if ($("#lista_asociados").val() === existe) {
//        jWarning("Cuenta ya Existe, verifique...", "Giros - Transferencias");
//      }
//      else {
//        if (parseFloat($("#txt_fraccion_distro").val().trim()) === 0 || $("#lista_asociados").val() === '0') {
//          jWarning("Datos incorrectos..., verifique", "Giros - Transferencias");
//          $("#txt_fraccion_distro").focus();
//        } else {
//          posible=VerificaFraccion();
//          if ( posible === 'SI' ){
//            $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
//            $("#dialogo_distribucion").dialog("close");
//            $("#lista_asociados").css("display", "none");
//            InsertaItmDistro($("#lista_asociados").val());
//          } else { jAlert("esta EXCEDIENDO \n El monto a Distribuir es: S/. "+$('#eimporte_r').val(),"Distribución");}
//        }
//      }
//    }
    });

    $('#btnbuscabancos').click(function () {
        fnMuestraBancosxBusqueda();
    });

    $("#btn_aplica_distro").click(function () {
        var posible_pagar = VerificaIntegridadPago();
        if (posible_pagar === 'SI') {
            fnAplicaDistribucion();
        } else {
            jWarning('Debe completar hasta llegar al monto TOTAL', 'Giros - Transferencias');
        }
    });

    $("#btn_cancela_distro").click(function () {
        fnCancelaDistro();
    });

    $('#mas_datose').click(function () {
        $('#dialogo_masdatose').dialog('open');
    });

    $('#etxt_bancos').autocomplete({
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

    $("#etxt_bancos").focusout(function () {
        if ($("#etxt_bancos").val().trim() !== '') {
            $.ajax({
                url: 'controles/ManteBancos.php',
                type: 'POST',
                dataType: 'json',
                data: {descbanco: $.trim($('#etxt_bancos').val()), opcion: "BUSCADATO"}
            }).done(function (respuesta) {
                $("#idbanco").val(respuesta.nrodecuenta);
            });
        }
    });

    $("#btn_llamaclientesb").click(function () {
        $("#dialogo_cliente").dialog("open");
    });

    $("#btn_llamaclientesr").click(function () {
        window.open("clientes.php", "_blank", "toolbar=0, location=0, menubar=0,scrollbars=yes, resizable=yes, width=900, height=400");
    });

    $("#btn_cliente_editar").click(function () {
        if ($("#dni_cliente").val().trim() === "" || $("#nom_cliente").val().trim() === "" || $("#apel_cliente").val().trim() === "") {
            jWarning('Faltan datos, Verifique...', 'Giros - Transferencias');
        } else {
            fnHabilitaCamposCliente();
            $("#btn_cliente_nuevo").attr("disabled", true);
        }
    });

    $("#ebusca_beneficiario").click(function () {
        $("#dialogo_buscaclib").dialog("open");
        $("#remite_beneficia").val("B");
    });

    $("#ebusca_remitente").click(function () {
        $("#dialogo_buscaclib").dialog("open");
        $("#remite_beneficia").val("R");
    });

    $("#btn_cliente_nuevo").click(function () {
        fnLimpiaCamposClientes();
        fnHabilitaCamposCliente();
        $("#id_cliente").val("");
        $("#span_idcliente").html("ID");
        $("#div_MasDatosCliente").css("display", "block");
        $("#btn_cliente_editar").attr("disabled", true);
    });

    $("#btn_cliente_guardar").click(function () {
        jConfirm("¿Esta seguro guardar:\n" + $('#dni_cliente').val() + "\n" + $('#nom_cliente').val() + "\n" + $("#apel_cliente").val(), "Giros - Transferencias", function (r) {
            if (r) {
                if ($("#id_cliente").val().trim() === "") {
                    if ($("#dni_cliente").val().trim() === "" || $("#nom_cliente").val().trim() === "" || $("#apel_cliente").val().trim() === "") {
                        jWarning('Faltan datos, Verifique...', 'Giros - Transferencias');
                    } else {
                        fnInsertaCliente();

                    }
                } ///////// editando /////////
                else {
                    fnActualizaCliente();
                    $("#dialogo_cliente").dialog("close");
                    $("#div_MasDatosCliente").css("display", "block");
                }
            }
        });
    });

    $("#btn_cliente_salir").click(function () {
        fnLimpiaCamposClientes();
        $("#dialogo_cliente").dialog("close");
        $("#id_cliente").val("");
        $("#span_idcliente").val("");
    });

    $("#busca_sucursal").click(function () {
        $("#dialogo_buscasucu").dialog("open");
    });

    $("#disponibilidad").click(function () {
        $("#diag_SaldoDisponible").dialog("open");
    });
    
    $("#DisponibilidadAgente").click(function () {
        $("#diag_SaldoDisponibleAgente").dialog("open");
    });
    
    $("#FlujoSucursales").click(function () {
        $("#diag_FlujoSucursales").dialog("open");
    });
    
    $("#btn_eguardar").click(function () {
        var nulo = "N";
        var existe = "N";
        if ($("#ednib").val().trim() === "" || $("#enombresb").val().trim() === "") {
            nulo = "S";
            jError("Datos de BENEFICIARIO incompletos..., verifique", "Giros - Transferencias");
        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#ednib').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#enombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del BENEFICIARIO no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#ednir").val().trim() === "" || $("#enombresr").val().trim() === "") {
            jError("Datos de REMITENTE incompletos..., verifique", "Giros - Transferencias");
            nulo = "S";

        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#ednir').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#enombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del REMITENTE no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#codsucursalo").val().trim() === "") {
            jError("SUCURSAL DESTINO invalido, Verifique...", "Giros - Transferencias");
            nulo = "S";
        }
        if (parseInt($("#eimporte_r").val()) === 0) {
            jError("Ingrese un IMPORTE..., verifique", "Giros - Transferencias");
            nulo = "S";
        }
        if (parseFloat($("#ecargo_r").val()) === 0) {
            jError("Falta CARGO..., verifique", "Giros - Transferencias");
            nulo = "S";
        }
        if (nulo === "N") {
            jConfirm("¿Esta seguro guardar:\n" + $('#enombresb').val() + "\n" + $('#enombresr').val() + "\n" + $("#eimporte_r").val(), "Giros - Transferencias", function (r) {
                if (r) {
                    eInserta_Recibidos();
                }
            });
        }
    });

//$("#elistaporcentajes").blur(function(){
//       $("#elistaporcentajes").prop("selectedIndex", 0); 
//    });

    $(window).resize(function () {
        $('#TEntregados').dataTable().fnDestroy();
        var objDataTable = $('#TEntregados').dataTable({
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
            "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 180), "bPaginate": false,
            "bLengthChange": false, "bFilter": false, "bSort": true,
            "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
        objDataTable.fnSettings().oScroll.sY = 181;
        objDataTable.fnDraw();

    });

    MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());

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
        maxFileSize: 1024 * 5120,
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
    
    console.log($("#mi_token").val());

});/* document*/

function fnMuestraCuentasxUsuario() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "CxU2", valor: $("#idbanco").val(), idempresa: $('#codsucursal').val(), opsql: 'L'},
        url: "controles/ManteBancos.php",
        success: fnCreaTablaCuentasxUsuario
    });
    return false;
}

function fnMuestraBancos() {
    //alert($("#grupo").val());
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

function fnMuestraSucursales() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: "LISTASUCUS", codsucu: $("#codsucursal").val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $("#carga1").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            $('#carga1').css('display', 'none');
        },
        success: fnCreaTablaSucursales
    });
    return false;
}

function fnMuestraBancosxBusqueda() {
    if ($("#descbanco").val().trim() !== '')
    {
        var campo = $('#descbanco').val().trim();
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opcion: "MBB", valor: campo},
            url: "controles/ManteBancos.php",
            beforeSend: function (objeto) {
                $("#carga1").html("<img src='img/loader.gif'>");
            },
            complete: function (objeto) {
                $('#carga1').css('display', 'none');
            },
            success: fnCreaTablaBancos
        });
    } else {
        jAlert("Ingrese banco a buscar...", "Transferencias");
        $("#descbanco").focus();
    }
    return false;
}

function fnSeleccionaAgente(idfila) {
    var idfilac = $('#sele_a').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#datapago").val('AGENTE=' + elTableCells[3].innerHTML + ': ' + elTableCells[2].innerHTML);
    $("#datos_cuenta").val('AGENTE=' + elTableCells[3].innerHTML + ': ' + elTableCells[2].innerHTML);
    $('#sele_a').val(idfila);
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

function fnSeleccionaSucursales(idfila) {
    $("#codsucursales").val("");
    var idfilac = $('#sele_sucu').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    $("#datapago").val('PAGADO POR ::' + elTableCells[2].innerHTML);
    $("#codsucursales").val($("#codsucursal").val() + ':' + elTableCells[1].innerHTML);
    $('#sele_sucu').val(idfila);
    console.log($("#codsucursales").val());
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

function fnPagarConAgente() {
    if ($("#nro_deoperacion").val().trim() !== '')
    {
        jConfirm("¿Esta seguro de pagar GIRO Nro: " + $('#codgirosucursal').val() + '  S/.' + $('#eimporte_r').val(), "Entregados", function (r) {
            if (r) {
                $.ajax({type: "POST", url: "controles/ManteRecibidos.php",
                    data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#nro_deoperacion').val(), usuaentrega: $('#nick').val(),
                        sucuentrega: $('#codsucursal').val(), datospago: $('#datos_cuenta').val(), monto: $('#eimporte_r').val(), opsql: 'decuenta'},
                    success: fnCreaNuevoDiario
                }).done(function (msg) {
                    $('#TEntregados').dataTable().fnDestroy();
                    MuestraEntregados($('#efecha_r').val(), 'E');
                    fnImprimeEntregados('manualmente');
                    $("#correlativo").val("");
                });
            }
        });
    } else {
        jAlert("Nro de Operacion VACIO", "Transferencias");
        document.getElementById("operacion").focus();
    }

}

function fnPagar() {

    if ($("#nrodeoperacion").val().trim() !== '')
    {
        jConfirm("¿Esta seguro de pagar GIRO Nro: " + $('#codgirosucursal').val() + '  S/.' + $('#eimporte_r').val(), "Entregados", function (r) {
            if (r) {
                $.ajax({type: "POST",
                    data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#nrodeoperacion').val(), usuaentrega: $('#nick').val(),
                        sucuentrega: $('#codsucursal').val(), datospago: $('#datoscuenta').val(), monto: $('#eimporte_r').val(), opsql: 'decuenta'},
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
/************* si no exixtse creo un nuevo diario**************************/
function fnCreaNuevoDiario() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'PAGA1', usuaentrega: $('#nick').val(), sucuentrega: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        complete: fnInsertaDetalleDiario
    });
}
/********** actualizo diario_detalle sumando el total de cada cuenta en tabla transaccion*/
function fnInsertaDetalleDiario() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'PAGA2', usuaentrega: $('#nick').val(), sucuentrega: $('#codsucursal').val(), datospago: $('#datapago').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $("#carga1").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            $('#carga1').css('display', 'none');
        }
    });
}

function fnPagaEfectivo() {
    jConfirm("¿Esta seguro de pagar GIRO Nro: " + $('#codgirosucursal').val() + '  S/.' + $('#eimporte_r').val(), "Entregados", function (r) {
        if (r) {
            $.ajax({type: "POST",
                url: "controles/ManteRecibidos.php",
                data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#nrodeoperacion').val(), usuaentrega: $('#nick').val(), sucuentrega: $('#codsucursal').val(), datospago: $('#datoscuenta').val(), monto: $('#eimporte_r').val(), opsql: 'efectivo'}
            }).done(function (msg) {
                $('#TEntregados').dataTable().fnDestroy();
                MuestraEntregados($('#efecha_r').val(), 'E');
                fnImprimeEntregados('manualmente');
                $("#correlativo").val("");
            });
        }
    });
}

function fnPagaEfectivoSucursal() {
    if ($("#txt_motivo").val().trim() !== '') {
        jConfirm("¿Esta seguro de pagar GIRO Nro: " + $('#codgirosucursal').val() + '  S/.' + $('#eimporte_r').val() + '\n' + 'Desde ' + $("#datapago").val(), "Entregados", function (r) {
            if (r) {
                $.ajax({type: "POST",
                    url: "controles/ManteRecibidos.php",
                    data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#txt_motivo').val(), usuaentrega: $('#nick').val(),
                        sucuentrega: $('#codsucursales').val(), datospago: $('#datapago').val(), monto: $('#eimporte_r').val(), opsql: 'efectivo_sucu'}
                }).done(function (msg) {
                    $('#TEntregados').dataTable().fnDestroy();
                    MuestraEntregados($('#efecha_r').val(), 'E');
                    fnImprimeEntregados('manualmente');
                    $("#txt_motivo").val("");
                    $("#correlativo").val("");
                });
            }
        });
    } else {
        jWarning("ingrese un motivo, verifique...", "Giros - Transferencias");
        document.getElementById("txt_motivo").focus();
    }
}

var anula;
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

function BuscaEnTablaDistro(nrocuenta) {
    var texto_nrocuenta;
    var nro_cuenta;
    var posicion;
    var hallado;
    $('#tabla_distribucion tr.dato').each(function () {
        texto_nrocuenta = $(this).find('td').eq(4).text();
        posicion = texto_nrocuenta.lastIndexOf(":");
        nro_cuenta = texto_nrocuenta.substr(posicion + 1, 30);
        if (nro_cuenta.trim() === nrocuenta.trim()) {
            hallado = nrocuenta;
        }
    });
    return hallado;
}

function fnAnulaItmDistro() {
    if (anula === "SI") {
        jConfirm("¿Esta seguro de Anular : \n" + NroCuenta + "\n" + agente_asociado + "\n S/. " + $("#fraccion").val(), "Giros - Transferencias", function (r) {
            if (r) {
                $("#dialogo_distribucion").dialog("close");
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {opt: 'DEL_ITM_DISTRO', iddetalle: $("#id_distro").val()},
                    url: "controles/ManteCierreDiario.php",
                    success: function () {
                        $("#dialogo_distribucion").dialog("open");
                    }
                });
            }
        });
    }
}

var NroCuenta, agente_asociado;
function SeleFilaDistro(id_fila) {

    var id_fila1 = $('#seledistro').val();
    var elTableRow = document.getElementById(id_fila);
    var elTableRow1 = document.getElementById(id_fila1);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';

    if (id_fila1 !== id_fila) {
        if (elTableRow1 === null) {
            elTableRow1 = document.getElementById('dt[1]');
        } else {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#id_distro").val(elTableCells[2].innerHTML);
    $("#fraccion").val(elTableCells[7].innerHTML);
    agente_asociado = elTableCells[5].innerHTML;
    NroCuenta = elTableCells[4].innerHTML;
    $('#seledistro').val(id_fila);

}

function InsertaItmDistro(cuenta_destino) { // cuenta_destino, para saber si es Agente o Usuario
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'IN_ITM_DISTRO', iddetalle: $("#correlativo").val(), fraccion: $("#txt_fraccion_distro").val(), cuentadestino: cuenta_destino,
            fechamov: $("#efechahoy").val(), usuario: $("#nick").val()},
        url: "controles/ManteCierreDiario.php",
        beforeSend: function () {
            $('#carga').css('display', 'block');
        },
        complete: function () {
            $('#carga').css('display', 'none');
        }
    }).done(function (respuesta) {
        $("#dialogo_distribucion").dialog("open");
    });
}

function fnCancelaDistro() {
    jConfirm("¿Esta seguro de Cancelar Distribucion ? \n se Borraran TODOS LOS DATOS.", "Giros - Transferencias", function (r) {
        if (r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {opt: 'CANCELA_DISTRO', iddetalle: $("#correlativo").val()},
                url: "controles/ManteCierreDiario.php",
                complete: function () {
                    $("#dialogo_distribucion").dialog("close");
                    $("#lista_agentes").css("display", "none");
                    $("#lista_asociados").css("display", "none");
                }
            });
        }
    });
    //console.log($("#id_detalle").val());
}

function fnValidaIdConcepto(idconcepto) {
    var rpta;
    switch (idconcepto) {
        case '17': //INGRESO DE EFECTIVO DESDE AGENTE
            rpta = 'NO';
            break;
        case '18': //INGRESO DE EFECTIVO DESDE ASOCIADO
            rpta = 'NO';
            break;
        case '21': // TRASLADO DE EFECTIVO DESDE SUCURSAL
            rpta = 'NO';
            break;
        case '22': //saldo inicial
            rpta = 'NO';
            break;

        default:
            rpta = 'SI';
    }

    return rpta;
}

function fnAplicaDistribucion() {
    jConfirm("¿Esta seguro de hacer la DISTRIBUCION de: S/. " + $("#sumafraccion").val(), "Distribuciónd de Efectivo", function (r) {
        if (r) {
            var grupo, nro_cuenta, monto_fraccion, posicion, id_concepto, nrocuenta;
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {opt: 'LISTA_DISTRO', iddetalle: $("#correlativo").val()},
                url: "controles/ManteCierreDiario.php",
                beforeSend: function () {
                    $('#carga').css('display', 'block');
                },
                complete: function () {
                    $('#carga').css('display', 'none');
                }
            }).done(function (respuesta) {
                //jWarning("Se creó un Nuevo Diario con fecha: " + $("#fechacierrediario").val().substring(0, 10), "Transferencias - Cierre Diario");
                procesado = respuesta[1].estado;
                console.log(procesado);
                if (procesado === 'P') {
                    for (var i = 0; i < respuesta.length; i++) {
                        grupo = respuesta[i].grupo;
                        nro_cuenta = respuesta[i].cuenta;
                        posicion = nro_cuenta.lastIndexOf(":");
                        nro_cuenta = nro_cuenta.substr(posicion + 1, 30);
                        nro_cuenta = nro_cuenta.trim();
                        monto_fraccion = respuesta[i].fraccion;
                        //nrocuenta=respuesta[i].cuenta;
                        console.log(nro_cuenta);
                        console.log(respuesta[i].fraccion);
                        switch (grupo) {
                            case 'A':
                                fnInsertaCuentaAgente(nro_cuenta, monto_fraccion);
                                //FnInsertaFraccionEnEgresos(monto_fraccion,'32',nrocuenta);
                                break;
                        }
                    }
                    fnPagaDistribuido();
                    fnMarcaDistro();
                    jWarning("Verifique Saldos...", "Distribución");
                } else {
                    if (procesado === 'D') {
                        jError("Ya fue DISTRIBUIDO", "Distribución");
                    } else {
                        if (respuesta[0].propietario === "---") {
                            jError("IMPOSIBLE hacer la Distribución, Verifique...", "Distribución");
                        }
                    }
                }
            });
        }
    });
}

function fnInsertaCuentaAgente(nro_cuenta, monto_fraccion) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: "IT", nrocuenta: nro_cuenta, nrocuentadest: $('#correlativo').val().trim(), dinero: 'C', monto: monto_fraccion, ttran: '170',
            origen: $('#codsucursal').val(), idgiro: $('#correlativo').val().trim(), nroop: '00-00', nromovs: '1', observa: $('#codgirosucursal').val(),
            respo: 'Sistema', modifica: $('#nick').val(), fechamov: $('#efechahoy').val(), opsql: 'S'},
        url: "controles/ManteAgentes.php"
    });
}

function TotalesDistribucion() {
    var suma_frac = 0;
    $('#tabla_distribucion tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
        if ($(this).find('td').eq(7).text() !== '0') {
            suma_frac += parseFloat($(this).find('td').eq(7).text() || 0, 10); //numero de la celda 5*/    
        }
    });
    if (suma_frac === 0) {
        $("#suma_fraccion").text('0.00'); // campo en la tabla
        $("#sumafraccion").val('0.00');
    } else {
        $("#sumafraccion").val(suma_frac.toFixed(2));
        $("#suma_fraccion").text(suma_frac.toFixed(2));
        $('#suma_fraccion').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
    }
}

function VerificaFraccion() {
    var suma = 0;
    var sumafraccion = 0;
    var fraccion = 0;
    distribucion = 0;
    $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
    sumafraccion = parseFloat($("#sumafraccion").val());
    fraccion = parseFloat($("#txt_fraccion_distro").val());
    suma = sumafraccion + fraccion;
    distribucion = parseFloat($('#eimporte_r').val());

    if (suma <= distribucion) {
        return 'SI';
    } else {
        return 'NO';
    }
}

function VerificaIntegridadPago() {
// verifica que que la suma de las fracciones sea igual al total
    var importe = 0;
    var sumafraccion = 0;
    sumafraccion = parseFloat($("#sumafraccion").val());
    importe = parseFloat($('#eimporte_r').val());
    if (importe === sumafraccion) {
        return 'SI';
    } else {
        return 'NO';
    }
}

function fnMarcaDistro() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'MARCA_DISTRO', usua: $("#nick").val(), iddetalle: $("#correlativo").val()},
        url: "controles/ManteCierreDiario.php",
        complete: function () {
            $("#dialogo_distribucion").dialog("close");
            $("#lista_agentes").css("display", "none");
            $("#lista_asociados").css("display", "none");
        }
    });
}

function ocultarFila(num, ver) {
    dis = ver ? '' : 'none';
    tab = document.getElementById('tabla_distribucion');
    tab.getElementsByTagName('tr')[num].style.display = 'none';
    console.log(num);
}

function fnPagaDistribuido() {
    $.ajax({type: "POST",
        url: "controles/ManteRecibidos.php",
        data: {opt: 'PAGA', idgiro: $('#correlativo').val(), nrooperacion: $('#txt_motivo').val(), usuaentrega: $('#nick').val(),
            sucuentrega: $('#codsucursales').val(), datospago: 'AGENTE: Pago Distribuido', monto: $('#eimporte_r').val(), opsql: 'DISTRIBUIDO'}
    }).done(function (msg) {
        $('#TEntregados').dataTable().fnDestroy();
        MuestraEntregados($('#efecha_r').val(), 'E');
        fnImprimeEntregados('manualmente');
        $("#txt_motivo").val("");
        $("#correlativo").val("");
    });
}

function fnLimpiaTablaClientes() {
    var html;
    html += "<tr>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "<td > </td>";
    html += "</tr>";
    $("#resultado_b").html(html);
    $("#resultado_r").html(html);
}

function RecuperaClientesB() {
    if ($('#dni_b').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {valor: $('#dni_b').val(), op: $('#opciones_b').val(), opt: "BC"},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            success: CreaTablaB
        });
        ResizeDivB();
    } else {
        jAlert("Ingrese datos buscar", "Giros - Transferencias");
    }
    return false;
}

function ResizeDivB() {
    var dialog_altura = $("#dialogo_buscaclib").height();
    $('.mygrid-wrapper-divb').height(dialog_altura - 40);
}

function fnRecuperaDatosCliente(idfila) {
    var idfilac = $('#sele_cli').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSalmon") ? color : 'LightSalmon';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSalmon' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#id_cliente").val(elTableCells[0].innerHTML);
    $("#span_idcliente").html(elTableCells[0].innerHTML);
    $("#dni_cliente").val(elTableCells[1].innerHTML);
    $("#apel_cliente").val(elTableCells[2].innerHTML);
    $("#nom_cliente").val(elTableCells[3].innerHTML);
    //alert($("#cta_destino").val());
    $("#sele_cli").val(idfila);
    //$('#dialogo_cuentas').dialog('close');    
}

function fnInsertaCliente() {
    $.ajax({async: true, type: "POST",
        data: {opcion: 'INSERTA', dniruc: $('#dni_cliente').val(), apelrazon: $('#apel_cliente').val(), nombre: $('#nom_cliente').val(), direccion: $('#dir_cliente').val(),
            fono: $('#fono_cliente').val(), email: $('#email_cliente').val(), usuamodi: $('#nick').val()},
        url: "controles/ManteClientes.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        complete: function () {
            $('#carga').css('display', 'none');
        }
    }).done(function (json) {
        json = $.parseJSON(json);
        rpta = json[0].flag;
        if (rpta === '0') {
            $("#dialogo_cliente").dialog("close");
            fnMuestraClienteUpdateSave();
            $("#id_cliente").val("");
            $("#span_idcliente").val("");
            $("#div_MasDatosCliente").css("display", "none");
            fnLimpiaCamposClientes();
        }
        if (rpta === '1') {
            jWarning('DNI ya EXISTE, Verifique...', 'Giros - Transferencias');
        }
        if (rpta === '2') {
            jWarning('CLIENTE ya EXISTE, Verifique...', 'Giros - Transferencias');
        }
    });
}

function fnActualizaCliente() {
    $.ajax({async: true, type: "POST",
        data: {opcion: 'ACTUALIZATODO', id: $('#id_cliente').val(), dniruc: $('#dni_cliente').val(), apelrazon: $('#apel_cliente').val(), nombre: $('#nom_cliente').val(), direccion: $('#dir_cliente').val(),
            fono: $('#fono_cliente').val(), email: $('#email_cliente').val(), usuamodi: $('#nick').val()},
        url: "controles/ManteClientes.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        complete: function () {
            $('#carga').css('display', 'none');
        }
    }).done(function (json) {
        fnMuestraClienteUpdateSave();
        $("#id_cliente").val("");
        $("#span_idcliente").val("");
    });
}

function fnMuestraClienteUpdateSave() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {valor: $('#dni_cliente').val(), op: "D", opt: "BC"},
        url: "controles/ManteRecibidos.php",
        success: CreaTablaB
    });
    ResizeDivB();
    return false;
}

function fnLimpiaCamposClientes() {
    //$("#id_cliente").val("");
    $("#dni_cliente").val("");
    $("#nom_cliente").val("");
    $("#apel_cliente").val("");
    $("#dir_cliente").val("");
    $("#fono_cliente").val("");
    $("#email_cliente").val("");
}

function fnDeshabilitaCamposCliente() {
    $("#dni_cliente").attr("disabled", true);
    $("#nom_cliente").attr("disabled", true);
    $("#apel_cliente").attr("disabled", true);
    $("#dir_cliente").attr("disabled", true);
    $("#fono_cliente").attr("disabled", true);
    $("#email_cliente").attr("disabled", true);
    $("#btn_cliente_guardar").attr("disabled", true);
    $("#btn_cliente_editar").attr("disabled", true);
}

function fnHabilitaCamposCliente() {

    $("#dni_cliente").attr("disabled", false);
    $("#nom_cliente").attr("disabled", false);
    $("#apel_cliente").attr("disabled", false);
    $("#dir_cliente").attr("disabled", false);
    $("#fono_cliente").attr("disabled", false);
    $("#email_cliente").attr("disabled", false);
    $("#btn_cliente_guardar").attr("disabled", false);
    $("#btn_cliente_editar").attr("disabled", false);
}

function fnLimpiaSucursales() {
    var html;
    html += "<tr>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "</tr>";
    $("#resultado_s").html(html);
}

function fnGeneraComisionPagoxInternet(correla) {
    $.ajax({type: "POST", async: true, dataType: "json", cache: false,
        data: {opt: 'PAGA3', nrocuenta: $('#txt_nrocuenta').val().trim(), correlativo: correla, usuacrea: $("#nick").val().trim()},
        url: "controles/ManteRecibidos.php"
    }).done(function (msg) {
//        $('#TEntregados').dataTable().fnDestroy();
//        MuestraEntregados($('#efecha_r').val(), 'E');
//        //fnImprimeEntregados('manualmente');
//        $("#correlativo").val("");        
        console.log('pagando con asociado');
        console.log($('#idbanco').val());
        console.log($("#txt_nrocuenta").val());
        console.log(correla);
    });
}

function fnMuestraSaldoDisponible() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'DISPONIBILIDAD', fecha: $('#efecha_r').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga_sa').css('display', 'block');
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
    $('#carga_sa').css('display', 'none');
    $("#body_SaldoDisponible").html(html);
    fnTotalesDisponibleAsociado();
    $('#TSaldoDisponible').dataTable({
        "sScrollY": 300, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function fnMuestraSaldoDisponibleAgente() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: 'MOSTRAR', fechai: $('#efecha_r').val(), fechaf: $('#efecha_r').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteGerencial.php",
        beforeSend: function (objeto) {
            $('#carga_da').css('display', 'block');
        },
        success: CreaTablaSaldoDisponibleAgente
    });
    return false;
}

function CreaTablaSaldoDisponibleAgente(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='SDA[" + x + "]' class='dato' >";
        html += "<td>" + json[x].iniciales + "</td>";
        html += "<td>" + json[x].nrocuenta + "</td>";
        html += "<td align='right'>" + json[x].saldo_cuenta + "</td>";
        html += "<td align='right'>" + json[x].saldo_efectivo + "</td>";
        html += "</tr>";
    }
    $('#carga_da').css('display', 'none');
    $("#body_SaldoDisponibleAgente").html(html);
    fnTotalesDisponibleAgente();
    $('#TSaldoDisponibleAgente').dataTable({
        "sScrollY": 300, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function fnMuestraFlujoSucursales() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'FLUJOSUCURSALES', fechai: $('#efecha_r').val(), fechaf: $('#efecha_r').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga_fs').css('display', 'block');
            fnIngresosxSucursal();
            fnEgresosxSucursal()
        },
        success: CreaTablaFlujoSucursales
    });
    return false;
}

function fnIngresosxSucursal() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'INGRESOSXSUCURSAL', fechai: $('#efecha_r').val(), fechaf: $('#efecha_r').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {            
        }        
    });
    return false;
}

function fnEgresosxSucursal() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'EGRESOSXSUCURSAL', fechai: $('#efecha_r').val(), fechaf: $('#efecha_r').val(), idempresa: $('#codsucursal').val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {            
        }        
    });
    return false;
}

function CreaTablaFlujoSucursales(json) {
    var html;
    var i = 0;
    for (var x = 0; x < json.length; x++) {
        i = x + 1;
        html += "<tr id='FS[" + x + "]' class='dato' >";
        html += "<td>" + json[x].fecha + "</td>";
        html += "<td>" + json[x].codsucu + "</td>";
        html += "<td align='right'>" + json[x].tingresos + "</td>";
        html += "<td align='right'>" + json[x].tsalidas + "</td>";
        html += "<td align='right'>" + json[x].saldofinal + "</td>";
        html += "<td align='right'>" + json[x].pendientes + "</td>";
        html += "<td align='right'>" + json[x].efectivo + "</td>";
        html += "</tr>";
    }
    $('#carga_fs').css('display', 'none');
    $("#body_TFlujoSucursales").html(html);
    fnTotalesFlujoSucursales();
    $('#TFlujoSucursales').dataTable({
        "sScrollY": 250, "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "ordering": false,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false, "destroy": true //, "bJQueryUI": true
    });
}

function fnInsertaVoucher() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'VOUCHER', correlativo: $("#correlativo_img").val(), codgirosucu: $('#codgirosucu_img').val(), fechai: $('#efechahoy').val(), fechaf: $('#efechahoy').val(),
            usuariocarga: $('#nick').val(), descripcion: $('#descripcion_img').val(), usuarioimprime: $('#nick').val(), op: 'I'},
        url: "controles/ManteRecibidos.php",
        success: function () {
            jAlert("Archivo Cargado, Verifique...", "Transferencia de Archivos");
            $("#correlativo_img").val("");
            $("#codgirosucu_img").val("");
            $("#descripcion_img").val("");
            $("#dialogo_CargaImagen").dialog("close");
        }
    });
    return false;
}

function VerificaImprimir() {
    var usuario = $("#tipousuario").val();
    var fecha_elegida = $('#efecha_r').val().replace('-', '/');
    var fecha_php = $('#efechahoy').val().replace('-', '/');
    var rpta;
    if (fecha_elegida < fecha_php) {
        if ($("#anulado").val() === 'N') {
            if (usuario === 'ADMIN') {
                rpta = 'SI';
            }
            if (usuario === 'OPERADOR') {
                rpta = 'NO';
            }

        } else {
            rpta = 'NO';
        }
    }
    if (fecha_elegida === fecha_php) {
        if ($("#anulado").val() === 'N') {
            if (usuario === 'ADMIN') {
                rpta = 'SI';
            }
            if (usuario === 'OPERADOR') {
                rpta = 'SI';
            }

        } else {
            rpta = 'NO';
        }
    }
    return rpta;

}

function fnTotalesDisponibleAgente() {
    var suma_cuenta = 0;
    var suma_efectivo = 0;
    $('#TSaldoDisponibleAgente tr.dato').each(function () {
        suma_cuenta += parseFloat($(this).find('td').eq(3).text() || 0, 10); //numero de la celda 12*/
        suma_efectivo += parseFloat($(this).find('td').eq(4).text() || 0, 10);
    });
    $("#t_saldo_cuenta").text(suma_cuenta.toFixed(2));
    $("#t_saldo_efectivo").text(suma_efectivo.toFixed(2));
}

function fnTotalesDisponibleAsociado() {
    var sum_saldo_cta = 0;
    var sum_disponible = 0;
    var sum_movs = 0;
    $('#TSaldoDisponible tr.dato').each(function () {
        //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas  
        sum_movs += parseFloat($(this).find('td').eq(3).text() || 0, 10); //numero de la celda 12*/
        sum_saldo_cta += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        sum_disponible += parseFloat($(this).find('td').eq(5).text() || 0, 10);
    });
    $("#t_movs").text(sum_movs.toFixed(2));
    $("#t_saldo_cta").text(sum_saldo_cta.toFixed(2));
    $("#t_disponible").text(sum_disponible.toFixed(2));
}

function fnTotalesFlujoSucursales() {
    var sum_ingresos = 0;
    var sum_egresos = 0;
    var sum_saldofinal = 0;
    var sum_pendiente = 0;
    var sum_efectivoneto = 0;
    
    $('#TFlujoSucursales tr.dato').each(function () {
        //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas  
        sum_ingresos += parseFloat($(this).find('td').eq(2).text() || 0, 10); //numero de la celda 12*/
        sum_egresos += parseFloat($(this).find('td').eq(3).text() || 0, 10);
        sum_saldofinal += parseFloat($(this).find('td').eq(4).text() || 0, 10);
        sum_pendiente += parseFloat($(this).find('td').eq(5).text() || 0, 10);
        sum_efectivoneto += parseFloat($(this).find('td').eq(6).text() || 0, 10);
    });
    $("#t_ingresos").text(sum_ingresos.toFixed(2));
    $("#t_egresos").text(sum_egresos.toFixed(2));
    $("#t_saldofinal").text(sum_saldofinal.toFixed(2));
    $("#t_pendiente").text(sum_pendiente.toFixed(2));
    $("#t_efectivoneto").text(sum_efectivoneto.toFixed(2));
}

function fnTablaResumen() {
    
    var html;
    html += "<tr>";
    html += "<td>" + $('#md_dnib').val() + "</td>";
    html += "<td>" + $('#md_dnir').val() + "</td>";
    html += "<td>" + $('#md_igv').val() + "</td>";
    html += "<td>" + $('#md_itf').val() + "</td>";
    html += "<td>" + $('#md_usuaregistra').val() + "</td>";
    html += "<td>" + $('#md_fechaentrega').val() + "</td>";
    html += "<td>" + $('#md_usuaentrega').val() + "</td>";
    html += "<td>" + $('#ciudaddestino').val() + "</td>";
    html += "<td>" + $('#origen').val() + "</td>";
    html += "</tr>";
    $("#tbody_masdatose").html(html);
}
