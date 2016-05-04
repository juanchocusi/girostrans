function CalculaTotalesR() {
    var sumai = 0;
    var sumac = 0;
    var sumav = 0;
    var sumat = 0;
    var sumao = 0;
    var sumag = 0;
    $('#TRecibidos tr.dato').each(function () {
        if ($(this).find('td').eq(23).text() !== 'S') {
            sumai += parseFloat($(this).find('td').eq(8).text() || 0, 10);
            sumac += parseFloat($(this).find('td').eq(9).text() || 0, 10);
            sumav += parseFloat($(this).find('td').eq(10).text() || 0, 10);
            sumat += parseFloat($(this).find('td').eq(11).text() || 0, 10);
            sumao += parseFloat($(this).find('td').eq(12).text() || 0, 10);
            sumag += parseFloat($(this).find('td').eq(13).text() || 0, 10);
        }
        if ($(this).find('td').eq(17).text() === 'Pendiente') {
            $(this).css('color', 'Blue');        };
        if ($(this).find('td').eq(23).text() === 'S') {
            $(this).css('color', 'tomato');        };
        if ($(this).find('td').eq(27).text() !== '---') {
            $(this).css('font-weight', 'bold');};
    });
    $("#total_i").text(sumai.toFixed(2));
    $("#total_c").text(sumac.toFixed(2));
    $("#total_o").text(sumao.toFixed(2));
    $("#total_g").text(sumag.toFixed(2));
}

function calcula_cargo() {
    var entero, cargo, midecimal, centimal;
    var numero = parseFloat(document.getElementById("importe_r").value);
    var porcentaje = parseFloat(document.getElementById("listaporcentajes").value);

    cargo = parseFloat(numero * (porcentaje / 100)).toFixed(2);//1.23
    entero = parseInt(cargo);      //1
    midecimal = (cargo - entero); //0.23
    centimal = midecimal * 100 % 10;
    if (centimal > 1 && centimal < 5) {
        midecimal = midecimal + 0.05;
        cargo = entero + midecimal;
    }
    cargo = parseFloat(cargo).toFixed(1);
    $("#cargo_r").val(cargo);
    var suma = parseFloat($("#importe_r").val()) + parseFloat($("#cargo_r").val()) + parseFloat($("#otros_r").val());
    $("#total_r").val(parseFloat(suma).toFixed(2));

}

function CalculaCargo() {
    var entero, cargo, midecimal, centimal, nentero;
    var numero = parseFloat($("#importe_r").val());  //41
    cargo = parseFloat(numero * 0.03).toFixed(2);//1.23
    entero = parseInt(cargo);      //1
    midecimal = (cargo - entero); //0.23
    centimal = midecimal * 100 % 10;
    if (centimal > 1 && centimal < 5) {
        midecimal = midecimal + 0.05;
        cargo = entero + midecimal;
    }
    cargo = parseFloat(cargo).toFixed(1);
    $("#cargo_r").val(cargo);
    var suma = parseFloat($("#importe_r").val()) + parseFloat($("#cargo_r").val()) + parseFloat($("#otros_r").val());
    $("#total_r").val(parseFloat(suma).toFixed(2));
}

function calcula_total() {
    var m1 = 0;
    var m2 = 0;
    var m3 = 0;
    m1 = parseFloat(document.getElementById("importe_r").value);
    m2 = parseFloat(document.getElementById("cargo_r").value);
    m3 = parseFloat(document.getElementById("otros_r").value);

    r = m1 + m2 + m3;
    r = parseFloat(Math.round(r * 100) / 100).toFixed(1);
    document.getElementById("total_r").value = parseFloat(r).toFixed(2);
//    var igv=0;
//    igv=parseFloat(document.getElementById("cargo_r").value);
//    igv=igv-parseFloat(igv/1.18).toFixed(2);
//    document.getElementById("igv_r").value = parseFloat(igv).toFixed(2);   
}

function calcula_vuelto() {
    var efectivo = parseFloat(document.getElementById("efectivo_r").value);
    var total = parseFloat(document.getElementById("total_r").value);
    var vuelto = efectivo - total;
    document.getElementById("vuelto_r").value = parseFloat(Math.round(vuelto * 100) / 100).toFixed(2);
}

function ADecimal() {
    nimporte = document.getElementById("importe_r").value;
    nimporte = parseFloat(Math.round(nimporte * 100) / 100).toFixed(1);
    document.getElementById("importe_r").value = parseFloat(nimporte).toFixed(2);

    ncargo = document.getElementById("cargo_r").value;
    ncargo = parseFloat(Math.round(ncargo * 100) / 100).toFixed(1);
    document.getElementById("cargo_r").value = parseFloat(ncargo).toFixed(2);

    notros = document.getElementById("otros_r").value;
    notros = parseFloat(Math.round(notros * 100) / 100).toFixed(1);
    document.getElementById("otros_r").value = parseFloat(notros).toFixed(2);

    var suma = parseFloat($("#importe_r").val()) + parseFloat($("#cargo_r").val()) + parseFloat($("#otros_r").val());
    $("#total_r").val(parseFloat(suma).toFixed(2));
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
    $("#sele_cli").val(idfila);
}

function RecuperaFilaB(idfilaB) {
    var elTableRow = document.getElementById(idfilaB);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';
    var elTableCells = elTableRow.getElementsByTagName("td");
    if ($("#remite_beneficia").val() === "B") {
        document.getElementById("idclienteb").value = elTableCells[0].innerHTML;
        document.getElementById("dnib").value = elTableCells[1].innerHTML;
        document.getElementById("nombresb").value = elTableCells[2].innerHTML + ' ' + elTableCells[3].innerHTML;
        $("#dialogo_buscaclib").dialog("close");
    }
    if ($("#remite_beneficia").val() === "R") {
        document.getElementById("idclienter").value = elTableCells[0].innerHTML;
        document.getElementById("dnir").value = elTableCells[1].innerHTML;
        document.getElementById("nombresr").value = elTableCells[2].innerHTML + ' ' + elTableCells[3].innerHTML;
        $("#dialogo_buscaclib").dialog("close");
    }
}

function RecuperaFilaR(idfilaR) {
    var elTableRowR = document.getElementById(idfilaR);
    elTableRowR.style.backgroundColor = (elTableRowR.style.backgroundColor === "LightSkyBlue") ? 'cyan' : 'LightSkyBlue';
    var elTableCellsR = elTableRowR.getElementsByTagName("td");

    document.getElementById("idclienter").value = elTableCellsR[0].innerHTML;
    document.getElementById("dnir").value = elTableCellsR[1].innerHTML;
    document.getElementById("nombresr").value = elTableCellsR[2].innerHTML;
    $("#dialogo_buscaclir").dialog("close");

}

function RecuperaFilaS(idfilaS) {
    var elTableRow = document.getElementById(idfilaS);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "green") ? 'cyan' : 'green';
    if (elTableRow.style.backgroundColor === 'green') {
        var elTableCells = elTableRow.getElementsByTagName("td");
        document.getElementById("codsucursald").value = elTableCells[0].innerHTML;
        document.getElementById("destino").value = elTableCells[1].innerHTML;
        $("#ciudaddestino").val(elTableCells[2].innerHTML);
    }
    if ($('#codsucursald').val() !== $('#codsucursal').val()) {//verificamos sucursal diferente
        $("#dialogo_buscasucu").dialog("close");
    } else
        jAlert("Elija una SUCURSAL diferente...", "Giros - Transferencias");
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

function RecuperaClientesR() {
    if ($('#dni_r').val() !== '' && $('#dni_r').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {valor: $('#dni_r').val(), op: $('#opciones_r').val(), opt: "BC"},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            success: CreaTablaR
        });
        ResizeDivR();
    } else {
        jAlert("Escriba datos a buscar", "Giros - Transferencias");
    }
    return false;
}

function RecuperaSucursal() {
    if ($('#codsucu').val().trim() !== '' && $('#codsucu').val().length > 2) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opt: "BUSCASUCU", nomsucu: $('#codsucu').val().trim(), idempresa: $("#codsucursal").val().substr(0, 1)},
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            url: "controles/ManteRecibidos.php",
            success: CreaTablaS
        });
        ResizeDivS();
    } else {
        jAlert("Escriba datos a buscar", "Giros - Transferencias");
    }
    return false;
}

function RecuperaFilaCuentas(idfila) {
    var idfilac = $('#sele_cta').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    document.getElementById("txt_nrocuenta").value = elTableCells[1].innerHTML;
    document.getElementById("txt_bancos").value = elTableCells[2].innerHTML;
    document.getElementById("sele_cta").value = idfila;
}

function RecuperaFila(idfila) {
    if ($("#unclick").val() === "S") {
        ControlesAlCancelar();
        var idfilar = $('#sele_fr').val();
        var elTableRow = document.getElementById(idfila);
        var elTableRow1 = document.getElementById(idfilar);
        var color = elTableRow.style.backgroundColor;
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
        if (idfilar !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
        var elTableCells = elTableRow.getElementsByTagName("td");
        document.getElementById("pdffecha").value = elTableCells[2].innerHTML;
        $("#fecha_seleccionada").val(elTableCells[2].innerHTML);
        document.getElementById("md_dnib").value = elTableCells[3].innerHTML;
        document.getElementById("dnib").value = elTableCells[3].innerHTML;
        document.getElementById("nombresb").value = elTableCells[4].innerHTML;
        document.getElementById("md_dnir").value = elTableCells[5].innerHTML;
        document.getElementById("dnir").value = elTableCells[5].innerHTML;
        document.getElementById("nombresr").value = elTableCells[6].innerHTML;
        var importe = elTableCells[8].innerHTML;
        importe = importe.substr(6, importe.length - 13);
        $("#importe_r").val(importe);
        var cargo = elTableCells[9].innerHTML;
        cargo = cargo.substr(6, cargo.length - 13);
        $("#cargo_r").val(cargo);
        var otros = elTableCells[12].innerHTML;
        otros = otros.substr(6, otros.length - 13);
        $("#otros_r").val(otros);
        var total = elTableCells[13].innerHTML;
        total = total.substr(6, total.length - 13);
        $("#total_r").val(total);
        document.getElementById("md_igv").value = elTableCells[10].innerHTML;
        document.getElementById("md_itf").value = elTableCells[11].innerHTML;
        document.getElementById("md_usuaregistra").value = elTableCells[16].innerHTML;
        document.getElementById("md_fechaentrega").value = elTableCells[17].innerHTML;
        document.getElementById("md_usuaentrega").value = elTableCells[18].innerHTML;
        var obs = elTableCells[19].innerHTML;
        obs = obs.substring(6, obs.length - 7);
        $("#observa").val(obs);

        document.getElementById("ciudaddestino").value = elTableCells[20].innerHTML;
        document.getElementById("destino").value = elTableCells[21].innerHTML;
        document.getElementById("pdfnomsucudestino").value = elTableCells[21].innerHTML;
        //var correla = elTableCells[1].innerHTML;
        //document.getElementById("correlativo").value = correla.substring(3, 8);
        document.getElementById("codgirosucursal").value = elTableCells[1].innerHTML;
        document.getElementById("codgirosucursal").value = elTableCells[1].innerHTML;
        document.getElementById("codsucursald").value = elTableCells[7].innerHTML;
        document.getElementById("pdfcoddestino").value = elTableCells[7].innerHTML;
        $("#usuaentrega").val(elTableCells[18].innerHTML);
        $("#cuentas").val(elTableCells[14].innerHTML);
        $("#anulado").val(elTableCells[23].innerHTML);
        $("#idclienter").val(elTableCells[24].innerHTML);
        $("#idclienteb").val(elTableCells[25].innerHTML);
        $("#datos_edita").val(elTableCells[26].innerHTML);
        $("#nroboleta").val(elTableCells[27].innerHTML);
        $("#en_efectivo").val(elTableCells[28].innerHTML);
        $("#correlativo").val(elTableCells[29].innerHTML);
        $("#sele_fr").val(idfila);
        //alert($("#total_r").val());
        DeshabilitaControles();
        document.getElementById("btn_anular").disabled = false;
        document.getElementById("imprimir_r").disabled = false;
        $("#btn_masdatos").attr("disabled", false);
        console.log($("#correlativo").val());
    }
}

function MuestraRecibidos(fecha_busqueda, opt) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {codsucu: $("#codsucursal").val(), fecha: fecha_busqueda, opt: opt},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        success: CreaTablaRecibidos,
        complete: function () {
            $('#carga').css('display', 'none');
        }
    });
    return false;
}

function CreaTablaRecibidos(jsonrecibe) {
    var html;
    for (var contador = 0; contador < jsonrecibe.length; contador++) {
        var i = contador + 1;
        html += "<tr id='R[" + contador + "]' class='dato' onclick='RecuperaFila(this.id);'>";
        /* 0 */ html += "<td>" + i + "</td>";
        html += "<td id='correlativo'>" + jsonrecibe[contador].cod_girosucu + "</td>";
        html += "<td>" + jsonrecibe[contador].fechahora_registro + "</td>";
        html += "<td >" + jsonrecibe[contador].dni_rucb + "</td>";
        html += "<td>" + jsonrecibe[contador].beneficiario + "</td>";
        /* 5 */ html += "<td >" + jsonrecibe[contador].dni_ruc + "</td>";
        html += "<td>" + jsonrecibe[contador].remitente + "</td>";
        html += "<td>" + jsonrecibe[contador].cod_sucursald + "</td>";
        html += "<td align='right' class='editable' data-campo='importe_giro'><span>" + jsonrecibe[contador].importe_giro + "</span></td>";
        html += "<td align='right' class='editable' data-campo='cargo_giro'><span>" + jsonrecibe[contador].cargo_giro + "</span></td>";
        /*10 */ html += "<td align='right' class='oculto'>" + jsonrecibe[contador].igv_giro + "</td>";
        html += "<td align='right' class='oculto'>" + jsonrecibe[contador].itf_giro + "</td>";
        html += "<td align='right' class='editable' data-campo='otros'><span>" + jsonrecibe[contador].otros + "</span></td>";
        html += "<td align='right' class='editable' data-campo='total'><span>" + jsonrecibe[contador].total + "</span></td>";
        html += "<td>" + jsonrecibe[contador].nro_cuenta + "</td>";
        /*15 */ html += "<td class='editable' data-campo='nro_operacion'><span>" + jsonrecibe[contador].nro_operacion + "</span></td>";
        html += "<td >" + jsonrecibe[contador].usuario_registra + "</td>";
        html += "<td >" + jsonrecibe[contador].fechahora_entrega + "</td>";
        html += "<td >" + jsonrecibe[contador].usuario_entrega + "</td>";
        html += "<td class='editable' data-campo='observagiro'><span>" + jsonrecibe[contador].observagiro + "</span></td>";
        /*20 */ html += "<td class='oculto'>" + jsonrecibe[contador].ciudad_destino + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].nom_sucursal + "</td>";
        html += "<td>" + jsonrecibe[contador].datapago + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].anulado + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].idcr + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].idcb + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].data_edita + "</td>";
        /*27*/  html += "<td class='oculto'>" + jsonrecibe[contador].nro_boleta + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].en_efectivo + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[contador].correlativo + "</td>";
        html += "</tr>";
    }

    $("#tablarecibidos").html(html);

    $("#tablarecibidos_1").html(html);

    CalculaTotalesR();

    $('#TRecibidos').dataTable({
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
        "sScrollY": ($(window).height() - 300), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
    });
}

function MuestraEntregados(fecha_busqueda, opt) {
    /*var fecha_busqueda = $('#fecha_r').val();*/
    $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {fecha: fecha_busqueda, opt: opt},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/BuscaRecibidos.php",
        beforeSend: function (objeto) {
            $('#ecarga').css({display: 'block'});
        },
        success: CreaTablaEntregados,
        timeout: 4000,
        complete: function () {
            $('#ecarga').css('display', 'none');
        }

    });
    return false;
}

function Inserta_Recibidos() {
    var otro_ing = 0; /*valor devuelto por el procedimiento, este sirve para saber si se hace un ingreso en transaccion ()*/
    var fechagiro = $("#fecha_r").val();
    var origen = $("#codsucursal").val();
    var remitente = $("#dnir").val();
    var destino = $("#codsucursald").val();
    var beneficiario = $("#dnib").val();
    var importe = parseFloat(document.getElementById('importe_r').value);
    var cargo = parseFloat(document.getElementById('cargo_r').value);
    var igv = parseFloat(document.getElementById('igv_r').value);
    var itf = '0';
    var otro = parseFloat(document.getElementById('otros_r').value);
    var total = parseFloat(document.getElementById('total_r').value);
    var efectivo = parseFloat(document.getElementById('efectivo_r').value);
    var ciudestino = $("#ciudaddestino").val();
    var obsgiro = $("#observa").val();
    var nrocuenta = $("#cuentas").val(); //$("input#otros").val();    
    var nusuario = $("#nick").val();

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
            fnImprimeRecibidos("alguardar");
            $('#TRecibidos').dataTable().fnDestroy();
            MuestraRecibidos($('#fechahoy').val(), $('#optbuscar').val());
            ControlesAlGuardar();
            $('#carga').css('display', 'none');
            LimpiaCampos();
        }
    }).done(function (respuesta) {
        $("#codgirosucursal").val(respuesta.codgirosucu);
        $("#otros_ing").val(respuesta.otro_ing);
        console.log($("#otros_ing").val());
        if ($("#otros_ing").val() > 0) {
            if ($("#codgirosucursal").val().substring(0, 1) === 'M') { /* verificamos a que empresa corresponde M=Money */
                fnInserta_Otros_en_Transaccion(otro, '100100100', $("#codgirosucursal").val().substring(3, 10));
            } else {
                fnInserta_Otros_en_Transaccion(otro, '200200200', $("#codgirosucursal").val().substring(3, 10));
            }
        }
    });
    document.getElementById("imprimir_r").disabled = true;
    document.getElementById("btn_guardar").disabled = true;

    return false;
}

function fnImprimeRecibidos(accion) {
    if ($("#codsucursald").val() === 'MBC') {
        var observanrocuenta = $("#cuentas").val();
    } else {
        observanrocuenta = $("#observa").val();
    }
    fnFechaHoraActual();
    var vuelto = parseFloat($('#en_efectivo').val()) - parseFloat($('#total_r').val());
    vuelto = vuelto.toFixed(2);
    if (vuelto < 0) {
        vuelto = 0.00;
    }
    var confirma_impresion=VerificaImprimir();
    
    switch (accion) {
        case "manualmente":
            //imprime cualquiera en fecha actual y no debe estar anulado
            //if ($('#fechahoy').val() === $('#fecha_r').val() && $("#anulado").val() === 'N') {
            if (confirma_impresion === 'SI'){    
                window.open('ImprimeRecibidos.php?codgirosucursal=' + $('#codgirosucursal').val() + '&coddestino=' + $('#codsucursald').val() + '&ciudestino=' + $('#ciudaddestino').val() + '&observa_nrocuenta=' + observanrocuenta + '&pdffecha=' + $('#pdffecha').val() + '&pdfremitente=' + $('#nombresr').val() + '&pdfcoddestino=' + $('#pdfcoddestino').val() +
                        '&pdfnomsucudestino=' + $('#destino').val() + '&pdfbeneficiario=' + $('#nombresb').val() + '&pdfimporte=' + $('#importe_r').val() + '&pdfcargo=' + $('#cargo_r').val() +
                        '&pdfotros=' + $('#otros_r').val() + '&pdftotal=' + $('#total_r').val() + '&en_efectivo=' + $('#en_efectivo').val() + '&vuelto=' + vuelto + '&nick=' + $('#nick').val(), '_blank');
            } else {
                        jAlert("NO tienes permiso para imprimir, comunicate con el Administrador", "Giros - Transferencias");
                    }
            
            //imprime solo ADMIN  y no debe estar anulado
//            else {
//                if ($("#tipousuario").val() === 'ADMIN' && $("#anulado").val() === 'N') {
//                    window.open('ImprimeRecibidos.php?codgirosucursal=' + $('#codgirosucursal').val() + '&coddestino=' + $('#codsucursald').val() + '&ciudestino=' + $('#ciudaddestino').val() + '&observa_nrocuenta=' + observanrocuenta + '&pdffecha=' + $('#pdffecha').val() + '&pdfremitente=' + $('#nombresr').val() + '&pdfcoddestino=' + $('#pdfcoddestino').val() +
//                            '&pdfnomsucudestino=' + $('#destino').val() + '&pdfbeneficiario=' + $('#nombresb').val() + '&pdfimporte=' + $('#importe_r').val() + '&pdfcargo=' + $('#cargo_r').val() +
//                            '&pdfotros=' + $('#otros_r').val() + '&pdftotal=' + $('#total_r').val() + '&en_efectivo=' + $('#en_efectivo').val() + '&vuelto=' + vuelto + '&nick=' + $('#nick').val(), '_blank');
//                } else {
//                    if ($("#anulado").val() !== 'N') {
//                        jAlert("Selecciona GIRO a imprimir...", "Giros y Transferencias");
//                    } else {
//                        jAlert("NO tienes permiso para imprimir, comunicate con el Administrador", "Giros - Transferencias");
//                    }
//                }
//            }
            break;
        case "alguardar":
            var vuelto_ag = parseFloat($('#efectivo_r').val()) - parseFloat($('#total_r').val());
            vuelto_ag = vuelto_ag.toFixed(2);
            var efectivor = parseFloat($('#efectivo_r').val());
            efectivor = efectivor.toFixed(2);
            window.open('ImprimeRecibidos.php?codgirosucursal=' + $('#codgirosucursal').val() + '&coddestino=' + $('#codsucursald').val() + '&ciudestino=' + $('#ciudaddestino').val() + '&observa_nrocuenta=' + observanrocuenta + '&pdffecha=' + $('#fechahorahoy').val() + '&pdfremitente=' + $('#nombresr').val() + '&pdfcoddestino=' + $('#pdfcoddestino').val() +
                    '&pdfnomsucudestino=' + $('#pdfnomsucudestino').val() + '&pdfbeneficiario=' + $('#nombresb').val() + '&pdfimporte=' + $('#importe_r').val() + '&pdfcargo=' + $('#cargo_r').val() +
                    '&pdfotros=' + $('#otros_r').val() + '&pdftotal=' + $('#total_r').val() + '&en_efectivo=' + efectivor + '&vuelto=' + vuelto_ag + '&nick=' + $('#nick').val(), '_blank');  // changed here (cambiado aquí)
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
    html += "<td>" + $('#destino').val() + "</td>";
    html += "<td>" + $('#datos_edita').val() + "</td>";
    html += "<td>" + $('#nroboleta').val() + "</td>";
    html += "</tr>";
    $("#tbody_masdatos").html(html);
}

function fnConfirmaAnulaRecibidos() {
    /* anulado: no, Admin: solo de diferentes fechas, operador: solo en fecha actual y que la transfeencia este pendiente */
    if ($("#anulado").val() !== 'S') {
        var fechahoy = $("#fechahoy").val();
        var fechasele = $("#pdffecha").val().substr(0, 10);
        if (fechahoy === fechasele && $("#usuaentrega").val() === '---') {
            if ($("#tipousuario").val() !== 'ADMIN') {
                jPrompt('Esta seguro de ANULAR ?' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        $('#TRecibidos').dataTable().fnDestroy();
                        MuestraRecibidos($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Giros - Transferencias");
                    }
                });
            }
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Esta seguro de ANULAR ?' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        $('#TRecibidos').dataTable().fnDestroy();
                        MuestraRecibidos($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Giros - Transferencias");
                    }
                });
            }
        } else {
            jAlert("NO puede Anular esta operacion, comuniquese con el Administrador.", "Giros - Transferencias");
        }

        if (fechahoy !== fechasele) {
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Esta seguro de ANULAR ?' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");

                    } else {
                        jAlert("Digita motivo de Anulacion", "Giros - Transferencias");
                    }
                });
            }
        }
    } else {
        jAlert("Ya esta anulado, verifique...", "Giros - Transferencias");
    }
}

function fnAnulaRecibidos(cadena) {
    var corr = document.getElementById("correlativo").value;
    var correla = parseInt(corr);
    var motivos = cadena + " (" + $("#nick").val() + '==' + $("#fechahorahoy").val() + ")";
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {motivo: motivos, correlativo: correla, opt: "ANULA"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        complete: function () {
            $('#TRecibidos').dataTable().fnDestroy();
            MuestraRecibidos($('#fecha_r').val(), 'R');
            jAlert("Anulado: " + $("#codgirosucursal").val(), "Giros - Transferencias");
        }
    });
    //alert(corr);
    return false;
}

function fnSeleccionaCuenta(idfila) {
    var elTableRow = document.getElementById(idfila);
    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {
        var inicial = elTableCells[2].innerHTML;
        inicial = inicial.substring(0, 3);
        $("#cuentas").val(inicial + ':' + elTableCells[1].innerHTML);
        $("#dialogo_asigcuenta").dialog("close");
    }

}

function fnListaInsertaCuentas(id_cliente) {
    var txt_nrocuenta;
    txt_nrocuenta = $('#txt_nrocuenta').val();
    txt_nrocuenta = txt_nrocuenta.replace(/\s+/g, '');
    switch ($("#opproceso").val()) {
        case "I":
            if (($('#hid_idbanco').val().length > 0) && ($('#txt_nrocuenta').val().length > 9))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: txt_nrocuenta, idbanco: $('#hid_idbanco').val(), idcliente: $('#idcliente').val(), usuamodifica: $('#nick').val(),
                        opcion: "C", opproce: $("#opproceso").val(), idempresa: $("#codsucursal").val().substring(0, 1)},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {
                        $('.mensaje1').css('display', 'block');
                        $(".mensaje1").html("<img src='img/cargando.gif'>");
                    },
                    complete: function (objeto) {
                        $('.mensaje1').css('display', 'none');
                    },
                    success: fnCreaTablaClienteCuentas
                });
            } else {
                jAlert("Datos incompletos, Verifique ...", "Agentes");
            }
            break;
        case "A" :
            if (($('#txt_bancos').val().trim() !== "") && ($('#txt_nrocuenta').val().trim() !== ""))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(), idcliente: $('#idcliente').val(), usuamodifica: $('#nick').val(),
                        opcion: "C", opproce: $("#opproceso").val(), idempresa: $("#codsucursal").val().substring(0, 1)},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {
                        $('.mensaje1').css('display', 'block');
                        $(".mensaje1").html("<img src='img/cargando.gif'>");
                    },
                    complete: function (objeto) {
                        $('.mensaje1').css('display', 'none');
                    },
                    success: fnCreaTablaClienteCuentas
                });
            } else {
                jAlert("Seleccione una cuenta a Eliminar, Verifique ...", "Agentes");
            }
            break;
            /*Listar*/  case "L":
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(), idcliente: id_cliente, usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val(), idempresa: $("#codsucursal").val().substr(0, 1)},
                url: "controles/ManteBancos.php",
                beforeSend: function (objeto) {
                    $('.mensaje1').css('display', 'block');
                    $(".mensaje1").html("<img src='img/cargando.gif'>");
                },
                complete: function (objeto) {
                    $('.mensaje1').css('display', 'none');
                },
                success: fnCreaTablaClienteCuentas
            });
            break;
    } /* end CASE */

    return false;
}

function fnMuestraBancos() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "TRANS", grupo: "C"},
        url: "controles/ManteBancos.php",
        beforeSend: function (objeto) {
            $("#carga").html("<img src='img/carga.gif'>");
        },
        complete: function (objeto) {
            $('#carga').css('display', 'none');
        },
        success: fnCreaTablaBancos
    });
    return false;
}

function fnSeleccionaBanco(idfila) {
    var elTableRow = document.getElementById(idfila);
    var elTableCells = elTableRow.getElementsByTagName("td");

    //var inicial=elTableCells[2].innerHTML;
    $("#hid_idbanco").val(elTableCells[1].innerHTML);
    $("#txt_bancos").val(elTableCells[2].innerHTML + ':' + elTableCells[3].innerHTML);
    $("#divbanco").css("display", "none");
    //$("#tabla_cuentas").css("display","block");        

}

$(document).ready(function () {
    $("#unclick").val("S");
    //ResizeDivs();    

    ControlesAlGuardar();
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".edita").toggle(1000);
    $("#nombresb").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_masdatos").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_anular").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_editar").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_boleta").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_boleta_guardar").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_boleta_cancelar").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_boleta_editar").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#btn_boleta_editar").tooltip({show: {effect: "slideDown", delay: 250}});

/////////////////// KEY PRESS //////////////////////////////////////////////
    $("#dnib").keypress(function (e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#dnib').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                $("#idclienteb").val(respuesta.idcliente);
                $("#nombresb").val(respuesta.nombres);

            });
        }
    });

    $("#dnir").keypress(function (e) {
        if (e.which === 13) {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {opt: 'BCLIENTE', dni: $('#dnir').val()},
                beforeSend: function () {
                    $("#nombresr").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                $("#idclienter").val(respuesta.idcliente);
                $("#nombresr").val(respuesta.nombres);
            });
        }
    });

    $("#destino").keypress(function (e) {
        if ($('#destino').val() !== $('#codsucursal').val()) {//verificamos sucursal diferente
            if (e.which === 13) {
                $.ajax({type: 'POST', dataType: 'json',
                    url: 'controles/ManteRecibidos.php',
                    data: {codsucu: $('#destino').val(), idempresa: $("#codsucursal").val().substr(0, 1), opt: "B"}
                }).done(function (respuesta) {
                    $("#codsucursald").val(respuesta.codsucursal);
                    $("#destino").val(respuesta.nomsucursal);
                    $("#ciudaddestino").val(respuesta.dirsucursal);
                    $("#pdfdestino").val(respuesta.nomsucursal);/*para la impresion*/
                    //$("#destino").attr("readonly",true);
                });
            }
        } else
            jAlert("Elija una SUCURSAL diferente...", "Giros - Transferencias");
    });

    $("#dni_b").keypress(function (e) {
        if (e.which === 13) {
            if ($('#dni_b').val().trim() !== "") {
                RecuperaClientesB();
            } else
                jWarning("Ingrese datos a buscar...", "Giros - Transferencias");
        }
    });

    $("#dni_r").keypress(function (e) {
        if (e.which === 13) {
            if ($('#dni_r').val().trim() !== "") {
                RecuperaClientesR();
            } else
                jWarning("Ingrese datos a buscar...", "Giros - Transferencias");
        }
    });

    $("#codsucu").keypress(function (e) {
        if (e.which === 13) {
            if ($('#codsucu').val().trim() !== "") {
                RecuperaSucursal();
            } else
                jWarning("Ingrese datos a buscar...", "Giros - Transferencias");
        }
    });

    $("#ednib").keypress(function (e) {
        if (e.which === 13) {
            $.ajax({type: 'POST', dataType: 'json',
                data: {opt: 'BCLIENTE', dni: $('#ednib').val()},
                url: 'controles/DatosCliente.php',
                beforeSend: function () {
                    $("#enombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                $("#enombresb").val(respuesta.nombres);

            });
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

    $("#destino").focus(function () {
        $("#destino").val("");
        $("#codsucursald").val("");
    });

//////////////////////////// click /////////////////////////////           
    $("#nombresb").click(function () {
        $("#idcliente").val($("#idclienteb").val());/*sirve para hacer la busqueda cuentas x cliente*/
        $("#txt_datocliente").val($("#nombresb").val());
    });
    $("#nombresr").click(function () {
        $("#idcliente").val($("#idclienter").val());
        $("#txt_datocliente").val($("#nombresr").val());
    });

    $("#btn_guardar").click(function () {
        var nulo = "N";
        var existe = "N";
        if ($("#dnib").val().trim() === "" || $("#nombresb").val().trim() === "") {
            nulo = "S";
            jError("Datos de BENEFICIARIO incompletos..., verifique", "Giros - Transferencias");
        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#dnib').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del BENEFICIARIO no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#dnir").val().trim() === "" || $("#nombresr").val().trim() === "") {
            jError("Datos de REMITENTE incompletos..., verifique", "Giros - Transferencias");
            nulo = "S";

        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#dnir').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del REMITENTE no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#codsucursald").val().trim() === "") {
            jError("SUCURSAL DESTINO invalido, Verifique...", "Giros - Transferencias");
            nulo = "S";
        }
        if (parseInt($("#importe_r").val()) === 0) {
            jError("Ingrese un IMPORTE..., verifique", "Giros - Transferencias");
            nulo = "S";
        }
        if (parseFloat($("#cargo_r").val()) === 0) {
            jError("Falta CARGO..., verifique", "Giros - Transferencias");
            nulo = "S";
        }
        if (nulo === "N") {
            jConfirm("¿Esta seguro guardar:\n" + $('#nombresb').val() + "\n" + $('#nombresr').val() + "\n" + $("#importe_r").val(), "Giros - Transferencias", function (r) {
                if (r) {
                    Inserta_Recibidos();
                }
            });
        }
    });

    $("#busca_cuentas").click(function () {
        if ($("#idcliente").val().trim() === '') {
            jAlert("Seleccione un cliente...", "Agentes");
        } else {
            $("#dialogo_asigcuenta").dialog("open");
            $("#divbanco").css("display", "none");
            fnListaInsertaCuentas($("#idcliente").val());
            $('#btn_asignacuenta').attr("disabled", true);
            $('#btn_eliminacuenta').attr("disabled", true);
        }
    });

    $("#btn_asignacuenta").click(function () {
        $("#opproceso").val("I");
        fnListaInsertaCuentas($("#idcliente").val());
        $("#opproceso").val("L");
        $('#btn_asignacuenta').attr("disabled", true);
        $('#btn_nuevacuenta').attr("disabled", false);
        $('#btn_eliminacuenta').attr("disabled", false);

        $("#txt_nrocuenta").val("");
        $("#txt_bancos").css("display", "none");
        $("#txt_nrocuenta").css("display", "none");

        $("#divcta").css("display", "block");
    });
    $("#btn_nuevacuenta").click(function () {
        $("#txt_bancos").css("display", "block");
        $("#txt_nrocuenta").css("display", "block");
        $("#txt_bancos").val("");
        $("#hid_idbanco").val("");
        $("#txt_nrocuenta").val("");
        $('#btn_asignacuenta').attr("disabled", false);
        $('#btn_eliminacuenta').attr("disabled", true);
        $("#divcta").css("display", "none");
        $("#divbanco").css("display", "block");
        fnMuestraBancos();
        ResizeDivBan();
    });
    $("#btn_eliminacuenta").click(function () {
        $("#opproceso").val("A"); /* anular */
        jConfirm("¿Esta seguro de Eliminar a :" + $('#txt_nrocuenta').val(), "Agentes", function (r) {
            if (r) {
                fnListaInsertaCuentas($("#idcliente").val());
                $("#opproceso").val("L");
                $("#txt_idbanco").val("");
                $("#txt_nrocuenta").val("");
                $('#btn_eliminacuenta').attr("disabled", true);
                $('#btn_asignacuenta').attr("disabled", true);
                $('#btn_nuevacuenta').attr("disabled", false);
                $("#txt_bancos").css("display", "none");
                $("#txt_nrocuenta").css("display", "none");
            } /* end if */
        });/* end jconfirm */
    });

    $('#btn_masdatos').click(function () {
        $('#dialogo_masdatos').dialog('open');
    });
    var menu_activo = "S";
    $('#menu_toggle').click(function () {
        if (menu_activo === "N") {
            $('#formulario').css("display", "block");
            var mi_height = $("#formulario").height();
            var tabla_height = $('.mygrid-wrapper-div').height();
            $('.mygrid-wrapper-div').height(tabla_height - mi_height);
            menu_activo = "S";
        } else {
            $('#formulario').css("display", "none");
            var mi_height = $("#formulario").height();
            var tabla_height = $('.mygrid-wrapper-div').height();
            $('.mygrid-wrapper-div').height(tabla_height + mi_height);
            menu_activo = "N";
        }
    });

    $("#busca_beneficiario").click(function () {
        $("#dialogo_buscaclib").dialog("open");
        $("#remite_beneficia").val("B");
    });

    $("#busca_remitente").click(function () {
        $("#dialogo_buscaclib").dialog("open");
        $("#remite_beneficia").val("R");
    });

    $("#busca_sucursal").click(function () {
        $("#dialogo_buscasucu").dialog("open");
    });

    $("#btn_nuevo").click(function () {
        ControlesNuevo();
        $("#dnib").focus();
    });

    $("#btn_cancelar").click(function () {
        ControlesAlCancelar();
//        $("#tablarecibidos_1").css("display","none");
//        $("#cab_trecibidos").css("display","none");
//        $(".mygrid-wrapper-divclon").css("overflow-x","auto");
//        $(".mygrid-wrapper-divclon").css("overflow-y","hidden");
//        $("#divclon").css("width","97%");

    });

    $("#btn_llamaclientesb").click(function () {
        $("#dialogo_cliente").dialog("open");
    });

    $("#btn_llamaclientesr").click(function () {
        window.open("clientes.php", "_blank", "toolbar=0, location=0, menubar=0,scrollbars=yes, resizable=yes, width=900, height=400");
    });

    var fechahoy = $("#fechahoy").val();
    var fechasele = $("#fecha_seleccionada").val();
    var tipousuario = $("#tipousuario").val();

    $("#btn_editar").click(function () {
        //alert($("#fecha_seleccionada").val().substr(0,10) );
        if (fechahoy === $("#fecha_seleccionada").val().substr(0, 10)) {
            if ($("#correlativo").val() !== "") {
                if ($("#usuaentrega").val() === "---") {
                    $(".normal").toggle(1000);
                    $(".edita").toggle(1000);
                    ControlesAlEditar();
                } else {
                    jWarning("No puede EDITAR, ya fue pagado, verifique...", "Giros - Transferencias");
                }
            } else {
                jError("Selccione algun Giro para editar...", "Giros - Transferencias");
            }
        } else {
            if (fechahoy !== fechasele && tipousuario === "ADMIN") {
                if ($("#correlativo").val() !== "") {
                    if ($("#usuaentrega").val() === "---") {
                        $(".normal").toggle(1000);
                        $(".edita").toggle(1000);
                        ControlesAlEditar();
                    } else {
                        jWarning("No puede EDITAR, ya fue pagado, verifique...", "Giros - Transferencias");
                    }
                } else {
                    jError("Selccione algun Giro para editar...", "Giros - Transferencias");
                }
            } else {
                jError("Solo esta permitido en fecha actual.", "Giros - Transferencias");
            }
        }
    });

    $("#btn_guardaedicion").click(function () {
        var nulo = "N";
        if ($("#dnib").val().trim() === "" || $("#nombresb").val().trim() === "") {
            nulo = "S";
            jError("Datos de BENEFICIARIO incompletos..., verifique", "Giros - Transferencias");
        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#dnib').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del BENEFICIARIO no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#dnir").val().trim() === "" || $("#nombresr").val().trim() === "") {
            jError("Datos de REMITENTE incompletos..., verifique", "Giros - Transferencias");
            nulo = "S";

        } else {
            $.ajax({type: 'POST', dataType: 'json',
                url: 'controles/ManteRecibidos.php',
                data: {dni: $('#dnir').val(), opt: "BCLIENTE"},
                beforeSend: function () {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function (respuesta) {
                existe = respuesta.idcliente;
                if (existe === "XXX") {
                    jError("DNI del REMITENTE no existe..., verifique", "Giros - Transferencias");
                    nulo = "S";
                }
            });
        }

        if ($("#codsucursald").val().trim() === "") {
            jError("SUCURSAL DESTINO invalido, Verifique...", "Giros - Transferencias");
            nulo = "S";
        } else {
            nulo = "N";
        }

        if (nulo === "N") {
            jConfirm("¿Esta seguro guardar los cambios hechos a: " + $('#codgirosucursal').val(), "Giros - Transferencias", function (r) {
                if (r) {
                    $(".normal").toggle(1000);
                    $(".edita").toggle(1000);
                    FnGuardaEdicion();
                    ControlesAlGuardar();
                }
            });
        }
    });

    $("#btn_cancelaedicion").click(function () {
        $(".normal").toggle(1000);
        $(".edita").toggle(1000);
        ControlesAlCancelar();

    });

    $("#boleta_cargo").blur(function () {
        var num_letras = covertirNumLetras($("#boleta_cargo").val());
        $("#boleta_numeroletras").val(num_letras);
    });

    $("#boleta_nro").blur(function () {
        var nnumero = parseInt($("#boleta_nro").val());
        if (nnumero > 0) {
            nnumero = fnAddZeros(nnumero);
            $("#boleta_nro").val(nnumero);
        }
    });

    $("#btn_boleta").click(function () {
        if ($("#nroboleta").val() === "---") {
            $("#boleta_fecha").val($("#pdffecha").val().substring(0, 10));
            $("#dialogo_boleta").dialog("open");
            $("#boleta_nombres").val($("#nombresr").val());
            $("#boleta_destino").val($("#ciudaddestino").val());
            $("#boleta_describe").val("Comision por envio de: " + $("#importe_r").val());
            $("#boleta_cargo").val($("#cargo_r").val());
            var num_letras = covertirNumLetras($("#boleta_cargo").val());
            $("#boleta_numeroletras").val(num_letras);
        }
    });

    $("#btn_boleta_guardar").click(function () {
        if ($("#boleta_nro").val().trim() === "" || $("#boleta_destino").val().trim() === "" || $("#boleta_describe").val().trim() === "" || $("#boleta_cargo").val().trim() === "") {
            $.alert("Faltan datos verifique", "Giros - Transferencias");
        } else {
            $.confirm({title: 'Giros-Transferencias', confirmButton: 'Continuar', cancelButton: 'Cancelar',
                confirmButtonClass: 'btn-warning', cancelButtonClass: 'btn-default',
                content: 'Esta seguro de guardar Boleta:' + $("#boleta_nro").val(),
                confirm: function () {
                    fnGuardarBoleta();
                },
                cancel: function () {//              $.alert('Canceled!')
                }
            });
        }
    });

    $("#btn_cliente_nuevo").click(function () {
        fnLimpiaCamposClientes();
        fnHabilitaCamposCliente();
        $("#id_cliente").val("");
        $("#span_idcliente").html("ID");
        $("#div_MasDatosCliente").css("display", "block");
        $("#btn_cliente_editar").attr("disabled", true);
    });

    $("#btn_cliente_editar").click(function () {
        if ($("#dni_cliente").val().trim() === "" || $("#nom_cliente").val().trim() === "" || $("#apel_cliente").val().trim() === "") {
            jWarning('Faltan datos, Verifique...', 'Giros - Transferencias');
        } else {
            fnHabilitaCamposCliente();
            $("#btn_cliente_nuevo").attr("disabled", true);
        }
    });

    $("#btn_cliente_guardar").click(function () {
        jConfirm("¿Esta seguro guardar:\n" + $('#dni_cliente').val() + "\n" + $('#nom_cliente').val() + "\n" + $("#apel_cliente").val(), "Giros - Transferencias", function (r) {
            if (r) {
                if ($("#id_cliente").val().trim() === "") {
                    if ($("#dni_cliente").val().trim() === "" || $("#nom_cliente").val().trim() === "" || $("#apel_cliente").val().trim() === "") {
                        jWarning('Faltan datos, Verifique...', 'Giros - Transferencias');
                    } else {
                        fnInsertaCliente();
                        //$("#dialogo_cliente").dialog("close");
                        //$("#div_MasDatosCliente").css("display", "none");
                    }
                } ///////// editando /////////
                else {
                    fnEditaCliente();
//                    $("#dialogo_cliente").dialog("close");
//                    $("#div_MasDatosCliente").css("display", "block");
                }
            }
        });
    });

    $("#btn_voucher").click(function () {        
        $("#dialogo_voucher").dialog("open");        
    });
    
    $("#btn_imprime_voucher").click(function () {       
        var mode = 'iframe';
        var close = mode ==='popup';
        var options = { mode:mode, popClose:close };
        $("div.printableArea").printArea( options );
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

    $("#fecha_r").datepicker({
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
            //si9 la fecha es mayor no arga datos
            fnVerificaFecha();
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });

    $("#boleta_fecha").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: 'both',
        buttonImage: 'img/calendar.ico',
        buttonImageOnly: true,
        changeYear: true,
        beforeShow: function () {
            $(".ui-datepicker").css('font-size', 10);
        },
        numberOfMonths: 1
    });

///////////////////// autocompleta ///////////////////////////

    $("#txt_bancos").autocomplete({
        source: "controles/ManteBancos.php",
        Length: 2,
        select: function (event, data) {
            $("#hid_idbanco").val(data.item.id);
            $("#txt_bancos").val(data.item.value);
        }
    });

///////////////////////////////// Dialogos ////////////////////////////

    $("#dialogo_masdatos").dialog({autoOpen: false, resizable: true,
        modal: true, height: 270, width: 600,
        show: {effect: "blind", duration: 1000},
        hide: {effect: "fade", duration: 1000},
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
            $("#tbody_masdatos").html(html);
        }
    });

    $("#dialogo_asigcuenta").dialog({autoOpen: false, resizable: true,
        modal: true, height: 350, width: 420,
        open: function (event, ui) {
            $("#txt_nrocuenta").css("display", "none");
            $("#txt_bancos").css("display", "none");
        },
        close: function (event, ui) {
            $("#txt_nrocuenta").val("");
            $("#txt_bancos").val("");
            $("#txt_nrocuenta").css("display", "none");
            $("#txt_bancos").css("display", "none");
            $("#opproceso").val("L");
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

    $("#dialogo_buscaclir").dialog({autoOpen: false, resizable: true,
        modal: true, height: 450, width: 400,
        show: {effect: "blind", duration: 500},
        hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Busca Remitente";
            $("span.ui-dialog-title").css("font-size", 10);
            $("span.ui-dialog-title").text(ntitulo);
            $("#dni_r").val("");
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

    $("#dialogo_boleta").dialog({autoOpen: false, resizable: true,
        modal: true, height: 300, width: 350,
        show: {effect: "blind", duration: 500},
        hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Imprime Boleta";
            $("span.ui-dialog-title").css("font-size", 12);
            $("span.ui-dialog-title").text(ntitulo);
            //$("#codsucu").val("");
            //fnCreaTablaMasDatos();
        },
        close: function (event, ui) {
            $("#boleta_nombres").val("");
            $("#boleta_destino").val("");
            $("#boleta_describe").val("");
            $("#boleta_cargo").val("");
            $("#boleta_nro").val("");
            $("#boleta_numeroletras").val("");
        }
    });

    $("#dialogo_cliente").dialog({autoOpen: false, resizable: true,
        modal: true, height: 270, width: 330, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
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
    
    $("#dialogo_voucher").dialog({autoOpen: false, resizable: true,
        modal: false, height: 400, width: 500, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Voucher Disponibles";
            $("span.ui-dialog-title").css("font-size", 12);
            $("span.ui-dialog-title").text(ntitulo);
            fnCargaVoucher();
        },
        close: function (event, ui) {
            
        }
    });
    
    $("#dialogo_voucher_img").dialog({autoOpen: false, resizable: true,
        modal: true, height: 500, width: 400, show: {effect: "blind", duration: 500}, hide: {effect: "fade", duration: 500},
        open: function (event, ui) {
            var ntitulo = "Imprimir Voucher";
            $("span.ui-dialog-title").css("font-size", 12);
            $("span.ui-dialog-title").text(ntitulo);
        },
        
        close: function (event, ui) {

        }
    });    

    $("#listaporcentajes").blur(function () {
        $("#listaporcentajes").prop("selectedIndex", 0);
    });

    $(window).resize(function () {
        $('#TRecibidos').dataTable().fnDestroy();
        var objDataTable = $('#TRecibidos').dataTable({
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
            "sScrollY": ($(window).height() - 300), "bPaginate": false,
            "bLengthChange": false, "bFilter": false, "bSort": true,
            "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
        objDataTable.fnSettings().oScroll.sY = 301;
        objDataTable.fnDraw();

    });

    MuestraRecibidos($('#fechahoy').val(), $('#optbuscar').val());
});

function fnFechaHoraActual() { // Convierte a formato MySql
    var currentdate = new Date();
    var datetime = currentdate.getFullYear()
            + "-" + strpad00((currentdate.getMonth() + 1))
            + "-" + strpad00((currentdate.getDate()))
            + " " + currentdate.toLocaleTimeString();
    $('#fechahorahoy').val(datetime);
}

function strpad00(s)
{
    s = s + '';
    if (s.length === 1)
        s = '0' + s;
    return s;
}

function fnVerificaFecha() {
    var fecha1 = $('#fecha_r').val();
    var fecha2 = $('#fechahoy').val();
    if (Date.parse(fecha1) > Date.parse(fecha2)) {
        $('#fecha_r').val($('#fechahoy').val());
    } else {
        $('#TRecibidos').dataTable().fnDestroy();
        MuestraRecibidos($('#fecha_r').val(), $('#optbuscar').val());
        $("#cuentas").css("display", "block");
    }
}

function fnAddZeros(num) {

    if (num < 10000 && num > 999) {
        num = "00" + num;
    } else if (num < 1000 && num > 99) {
        num = "000" + num;
    } else if (num < 100 && num > 9) {
        num = "0000" + num;
    } else if (num < 10) {
        num = "00000" + num;
    } else if (num < 100000 && num > 9999) {
        num = "0" + num;
    }
    return num;
}

$(function () {
    //Para escribir solo letras
    $('#dnir').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#dnib').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#codsucu').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#buscador').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    //Para escribir solo numeros    
    $('#importe_r').validacampos('.0123456789');
    $('#cargo_r').validacampos('.0123456789');
    /*$('#itf_r').validacampos('0123456789');*/
    $('#otros_r').validacampos('.0123456789');
    $('#efectivo_r').validacampos('.0123456789');
    $('#boleta_nro').validacampos('.0123456789');
    $('#boleta_serie').validacampos('0123456789');
    $('#boleta_cargo').validacampos('.0123456789');
    $('#dni_cliente').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');

});

function LimpiaCampos() {
    $("#dnir").val("");
    $("#dnib").val("");
    $("#nombresb").val("");
    $("#nombresr").val("");
    $("#destino").val("");
    $("#ciudaddestino").val("");
    $("#observa").val("");
    $("#cuentas").val("");
    $("#importe_r").val("0");
    $("#cargo_r").val("0");
    //$("#igv_r").val("0");
    $("#otros_r").val("0");
    $("#total_r").val("0");
    $("#listaporcentajes").prop("selectedIndex", 0);
    $("#efectivo_r").val("0");
    $("#vuelto_r").val("0");

    $("#codsucursald").val("");
    $("#idclienteb").val("");
    $("#idclienter").val("");
}

function HabilitaControles() {
    $("#dnir").attr("disabled", false);
    $("#dnib").attr("disabled", false);
    $("#destino").attr("disabled", false);
    $("#ciudaddestino").attr("disabled", false);
    $("#observa").attr("disabled", false);
    $("#importe_r").attr("disabled", false);
    $("#cargo_r").attr("disabled", false);
    $("#otros_r").attr("disabled", false);
    $("#total_r").attr("disabled", false);
    $("#listaporcentajes").attr("disabled", false);

    $("#busca_beneficiario").attr("disabled", false);
    $("#busca_remitente").attr("disabled", false);
    $("#busca_sucursal").attr("disabled", false);
    $("#busca_cuentas").attr("disabled", false);

}

function DeshabilitaControles() {
    $("#dnir").attr("disabled", true);
    $("#dnib").attr("disabled", true);
    $("#destino").attr("disabled", true);
    $("#ciudaddestino").attr("disabled", true);
    $("#observa").attr("disabled", true);
    $("#importe_r").attr("disabled", true);
    $("#cargo_r").attr("disabled", true);
    $("#otros_r").attr("disabled", true);
    $("#total_r").attr("disabled", true);
    $("#listaporcentajes").attr("disabled", true);

    $("#busca_beneficiario").attr("disabled", true);
    $("#busca_remitente").attr("disabled", true);
    $("#busca_sucursal").attr("disabled", true);
    $("#busca_cuentas").attr("disabled", true);

}

function ControlesAlGuardar() {
    DeshabilitaControles();

    $("#btn_nuevo").attr("disabled", false);
    $("#btn_guardar").attr("disabled", true);
    $("#btn_anular").attr("disabled", true);
    $("#imprimir_r").attr("disabled", true);
    $("#btn_masdatos").attr("disabled", true);
}

function ControlesAlCancelar() {
    LimpiaCampos();
    DeshabilitaControles();

    $("#btn_nuevo").attr("disabled", false);
    $("#btn_guardar").attr("disabled", true);
    $("#btn_anular").attr("disabled", true);
    $("#imprimir_r").attr("disabled", true);
    $("#btn_masdatos").attr("disabled", true);
}

function ControlesNuevo() {
    LimpiaCampos();
    HabilitaControles();

    $("#btn_nuevo").attr("disabled", true);
    $("#btn_guardar").attr("disabled", false);
    $("#btn_anular").attr("disabled", true);
    $("#imprimir_r").attr("disabled", true);
    $("#btn_masdatos").attr("disabled", true);
}

function ControlesAlEditar() {
    $("#dnir").attr("disabled", false);
    $("#dnib").attr("disabled", false);
    $("#destino").attr("disabled", false);

    $("#busca_beneficiario").attr("disabled", false);
    $("#busca_remitente").attr("disabled", false);
    $("#busca_sucursal").attr("disabled", false);
    $("#busca_cuentas").attr("disabled", false);
}

function ResizeDivs() {
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 235;

        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 230;
        $('.mygrid-wrapper-div').height(content_height);
    });

//    $(function () {
//        var window_width = $("#divrecepcion").width();
//        
//        $('#divclone').width(window_width);
//        alert($('#divclone').width());
//    });
//    

}

function ResizeDivB() {
    var dialog_altura = $("#dialogo_buscaclib").height();
    $('.mygrid-wrapper-divb').height(dialog_altura - 40);
}

function ResizeDivR() {
    var dialog_altura = $("#dialogo_buscaclir").height();
    $('.mygrid-wrapper-divr').height(dialog_altura - 40);
}

function ResizeDivS() {
    var dialog_altura = $("#dialogo_buscasucu").height();
    $('.mygrid-wrapper-divs').height(dialog_altura - 40);
}

function ResizeDivCta() {
    var dialog_altura = $("#dialogo_asigcuenta").height();
    $('.mygrid-wrapper-divcta').height(dialog_altura - 40);
}

function ResizeDivBan() {
    var dialog_altura = $("#dialogo_asigcuenta").height();
    $('.mygrid-wrapper-divban').height(dialog_altura - 120);
}

function FnGuardaEdicion() {

    $.ajax({async: true, type: "POST", cache: false, dataType: 'json',
        data: {opt: "EDITACAB", idgiro: $('#correlativo').val(), dnib: $('#dnib').val(), dnir: $('#dnir').val(), codsucursald: $('#codsucursald').val(), nrocuenta: $('#cuentas').val(), nick: $('#nick').val()},
        url: "controles/ManteRecibidos.php"
    }).done(function (respuesta) {
        var codigo = respuesta[0].cod_girosucu;
        var mensaje = respuesta[0].data_edita;
        $('#TRecibidos').dataTable().fnDestroy();
        MuestraRecibidos($('#fechahoy').val(), $('#optbuscar').val());
        jMessage("Transaccion modificada: " + codigo + " por:" + mensaje, "Giros - Transferencias");
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

function fnLimpiaCuentas() {
    var html;
    html += "<tr>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "<td > </td>";
    html += "</tr>";
    $("#tbody_cuentas").html(html);
}

function fnLimpiaBancos() {
    var html;
    html += "<tr>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "<td > </td>";
    html += "</tr>";
    $("#tbody_banco").html(html);
}

function fnLimpiaSucursales() {
    var html;
    html += "<tr>";
    html += "<td ></td>";
    html += "<td ></td>";
    html += "</tr>";
    $("#resultado_s").html(html);
}

function fnGuardarBoleta() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'BOLETA', serie: $("#boleta_serie").val(), nro: $("#boleta_nro").val(), dni: $("#dnir").val(), direccion: $("#boleta_destino").val(), descripcion: $("#boleta_describe").val(),
            fecha: $("#boleta_fecha").val(), importe: $("#boleta_cargo").val(), userprint: $("#nick").val(), idgiro: $("#correlativo").val(), idempresa: $("#codsucursal").val()},
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        complete: function () {
            $('#carga').css('display', 'none');
        }
    }).done(function (respuesta) {
        var nro = respuesta[0].nro;
        var nombres = respuesta[0].nombres;
        var fecha = respuesta[0].fechahora_crea;
        var user = respuesta[0].usuaimprime;
        if (nro !== "---" && nombres !== "---") {
            $.alert("Nro de Boleta ya existe: " + nro + "\n pertenece a :" + nombres + "\n Impreso el: " + fecha + "\n Por: " + user, "Giros - Transferencias", "Giros - Transferencias");
        } else {
//            $.alert("Se creo correctamente...","Giros - Transferencias");
            $("#dialogo_boleta").dialog("close");
        }
    });
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

function fnInsertaCliente() {
    $.ajax({async: true, type: "POST",
        data: {opcion: 'INSERTA', dniruc: $('#dni_cliente').val().trim(), apelrazon: $('#apel_cliente').val().trim(), nombre: $('#nom_cliente').val().trim(), direccion: $('#dir_cliente').val(),
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

function fnEditaCliente() {
    $.ajax({async: true, type: "POST",
        data: {opcion: 'EDITA', idcliente: $('#id_cliente').val(), dniruc: $('#dni_cliente').val().trim(), nombre: $('#nom_cliente').val().trim(), apelrazon: $('#apel_cliente').val().trim(), usuamodi: $('#nick').val()},
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

function fnInserta_Otros_en_Transaccion(otro, nrocuenta, id_giro) {
    $.ajax({type: "POST",
        data: {opt: 'Inserta_Otros_en_Transaccion', nrocuenta: nrocuenta, monto: otro, idgiro: id_giro},
        url: "controles/ManteRecibidos.php"
    }).done(function (msg) {

    });
}

function fnCargaVoucher() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt:'VOUCHER',correlativo:'XXX',codgirosucu:$('#codsucursal').val(),fechai:$('#fecha_r').val(),fechaf:$('#fecha_r').val(),
        usuariocarga:$('#nick').val(),descripcion:'XXX',usuarioimprime:'XXX',op:'L'},
        url: "controles/ManteRecibidos.php"        
    }).done(function(json){
        fnMuestraVoucher(json);
    });        
}

function fnMuestraVoucher(jsonrecibe){
var html;
    for (var i = 0; i < jsonrecibe.length; i++) {        
        html += "<tr id='V[" + i + "]' class='dato' onclick='RecuperaFilaV(this.id);'>";        
        html += "<td class='oculto'>" + jsonrecibe[i].idvoucher + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[i].correlativo         + "</td>";
        html += "<td <a style='cursor:pointer'> " + jsonrecibe[i].codgirosucu + "</a> </td>";
        html += "<td >" + jsonrecibe[i].observacion         + "</td>";
        html += "<td >" + jsonrecibe[i].fechahora_carga     + "</td>";
        html += "<td class='oculto'>" + jsonrecibe[i].usuario_carga       + "</td>";        
        html += "<td >" + jsonrecibe[i].fechahora_imprime   + "</td>";
        html += "<td >" + jsonrecibe[i].usuario_imprime     + "</td>";
        html += "</tr>";
    }
    $("#tbody_voucher").html(html);    
    $('#TVoucher').dataTable({        
    "sScrollY": 240, "bPaginate": false,
    "bLengthChange": false, "bFilter": false, "ordering":false,
    "bInfo": false, "bAutoWidth": true, "bSortClasses": false,"destroy": true //, "bJQueryUI": true
  });       
}

function cambiaImagen(codigo) {
    $("#dialogo_voucher_img").dialog("open");
    var valor = "php/uploads/" + codigo + ".jpg";
    $("#dialogo_voucher_img img").attr("src", valor);    
}

function RecuperaFilaV(idfilaV) {
    var idfilac = $('#sele_v').val();
    var elTableRow = document.getElementById(idfilaV);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfilaV) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    $("#codigovoucher").val(elTableCells[2].innerHTML);
    cambiaImagen($("#codigovoucher").val().trim());
}

function VerificaImprimir(){
    var usuario=$("#tipousuario").val();
    var fecha_elegida = $('#fecha_r').val();
    var fecha_php = $('#fechahoy').val();    
    var rpta;
    if (Date.parse(fecha_elegida) < Date.parse(fecha_php)) {
        if ( $("#anulado").val() === 'N'){
            if (usuario === 'ADMIN')    { rpta='SI';}
            if (usuario === 'OPERADOR') { rpta='NO';}
        } else { rpta='NO';}
    }
    if (Date.parse(fecha_elegida) === Date.parse(fecha_php)) {
        if ( $("#anulado").val() === 'N'){
            if (usuario === 'ADMIN')    { rpta='SI';}
            if (usuario === 'OPERADOR') { rpta='SI';}
        } else { rpta='NO';}    
    }
    
    return rpta;
}