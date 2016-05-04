function fnTotalesIngSal() {
    var sumai = 0;    var sumas = 0;    var saldo = 0;
    $('#TMovsCuenta tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
        if ($(this).find('td').eq(14).text() === 'S') { $(this).css('color', 'tomato'); };
        if ($(this).find('td').eq(14).text() !== 'S') {
            sumai += parseFloat($(this).find('td').eq(11).text() || 0, 10); //numero de la celda 8*/
            sumas += parseFloat($(this).find('td').eq(12).text() || 0, 10);
            //saldo = parseFloat($(this).find('td').eq(11).text() || 0, 10);
        }
    });
    $("#total_i").val(sumai.toFixed(2));
    $("#total_s").val(sumas.toFixed(2));    
}

function fnVerMasDatos(opcion) {
    switch (opcion) {
        case "mas":
            $(".ocultamovs").css("display", "block");
            $("#opver").val('menos');
            break;
        case "menos":
            $(".ocultamovs").css("display", "none");
            $("#opver").val('mas');
            break;
    }
}

function aDecimal(){    
    nimporte = $('#monto').val();
    $('#monto').val(parseFloat(Math.round(nimporte*100)/100).toFixed(2));    
}

function fnCreaTablaUsuarioCuenta(jsoncxu){
//LimpiaTabla();
    var html;
    for (var contador = 0; contador < jsoncxu.length; contador++) {
        html += "<tr id='cu[" + contador + "]' ondblclick='fnSeleccionaCuenta(this.id);'>";
        var i = contador + 1;
        //html += "<td>" + i + "</td>";
        html += "<td>" + jsoncxu[contador].nusuario +  "</td>";
        html += "<td>" + jsoncxu[contador].iniciales + "</td>";
        html += "<td>" + jsoncxu[contador].nrocuenta + "</td>";
        html += "</tr>";
    } /*End FOR*/
    $("#tbody_UsuarioCuenta").html(html);
}

function fnCreaTablaMovsCuenta(jsonmovs){
//LimpiaTabla();
    var html;
    for (var xx = 0; xx < jsonmovs.length; xx++) {
        html += "<tr id='mv[" + xx + "]' class='dato' onclick='fnSeleccionaMov(this.id);'>";
            var i = xx + 1;
            html += "<td>" + "<button id='btn_anular' onclick='fnAnulaMovCuenta();' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove'></span></button>" + "</td>";
            html += "<td>" + i + "</td>";
            html += "<td style='display: none'>" +  jsonmovs[xx].idtransaccion + "</td>";
            html += "<td style='display: none'>" +  jsonmovs[xx].idtipotransaccion + "</td>";
            html += "<td>" +                        jsonmovs[xx].fecha_tran + "</td>";
            html += "<td>" +                        jsonmovs[xx].fechahora_tran + "</td>";
            html += "<td>" +                        jsonmovs[xx].descripcion + "</td>";
            html += "<td>" +                        jsonmovs[xx].observacion + "</td>";
            html += "<td >" +                       jsonmovs[xx].datospago + "</td>";
            html += "<td >" +                       jsonmovs[xx].beneficiario + "</td>";
    /*10*/  html += "<td class='ocultamovs'>" +     jsonmovs[xx].usua_modifica + "</td>";
            html += "<td align='right' class='editable' data-campo='nromovs'><span>" +          jsonmovs[xx].monto_ing + "</span></td>";
            html += "<td align='right' class='editable' data-campo='nromovs'><span>" +          jsonmovs[xx].monto_sal + "</span></td>";
            html += "<td align='right'>" +          jsonmovs[xx].saldofinal + "</td>";
            html += "<td style='display: none'>" +  jsonmovs[xx].anulado+ "</td>";
        html += "</tr>";
    } 

    $("#tbody_MovsCuenta").html(html);
    fnTotalesIngSal();
}

function fnSeleccionaCuenta(idfila) {    
    var idfilac = $('#sele_cu').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

        $("#datos_cuenta").val(elTableCells[0].innerHTML + '=> ' + elTableCells[1].innerHTML + ': ' + elTableCells[2].innerHTML);
        $("#nro_cuenta").val(elTableCells[2].innerHTML);
        
    $("#sele_cu").val(idfila);
    $("#btn_nuevatran").attr("disabled",false);
    $("#btn_anula_cuenta").attr("disabled",false);
    $("#DivUsuarioCuenta").toggle(700);
	//console.log($("#nro_cuenta").val());
}

var seleccionado = "N";
var anulado="S";
var ing_o_salida=0;
function fnSeleccionaMov(idfila) {    
    if (seleccionado === "N") {
        var idfilamv = $('#sele_mv').val();
        var elTableRow = document.getElementById(idfila);
        var elTableRow1 = document.getElementById(idfilamv);
        var color = elTableRow.style.backgroundColor;
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
        if (idfilamv !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
        var elTableCells = elTableRow.getElementsByTagName("td");
        $("#idtransaccion").val(elTableCells[2].innerHTML);
        $("#idtipotransaccion").val(elTableCells[3].innerHTML);
        $("#fecha_transaccion").val(elTableCells[4].innerHTML);
        $("#descripcion").val(elTableCells[6].innerHTML);
        anulado = elTableCells[14].innerHTML;
        var ing = elTableCells[11].innerHTML;        ing = parseFloat(ing.substring(6, ing.length - 8));
        var sal = elTableCells[12].innerHTML;        sal = parseFloat(sal.substring(6, sal.length - 8));
        if (ing === 0){  $("#campo").val("monto_sal");}
        if (sal === 0){  $("#campo").val("monto_ing");}
        $("#montoanula").val(ing - sal); // solo para la opcion anular
        $("#ingreso").val(ing);
        $("#salida").val(sal);
        $("#sele_mv").val(idfila);
        ing_o_salida = Math.abs(ing - sal);
        //alert($("#idtipotransaccion").val());
    }
}

function fnAjaxEditaAnula(txtmotivo,monto_edita) {
    var AE;
    if ( monto_edita === 0 ){ //positivo  o  negativo
        AE="A";
    } else { $("#montoanula").val(monto_edita); AE="E";}
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion:"ANULA",idtran:$("#idtransaccion").val(),fechamov:$("#fecha_transaccion").val(),nrocuenta:$("#nro_cuenta").val(),
            tipo_tran: $("#idtipotransaccion").val(),motivo:txtmotivo,monto:$("#montoanula").val(),campo:$("#campo").val(),usuamodi:$("#usuariosistema").val(),anula_edita:AE},
        url: "controles/ManteCuentaUsuario.php",
        beforeSend: function (objeto) {
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            fnMuestraMovsCuenta($('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val());
            $('#carga').css('display', 'none');
        }
    });
    seleccionado = "N";
}

var var_idtipotran;
function fnAnulaMovCuenta(){
var evalua_ttran = ValidaTTran($("#idtipotransaccion").val());
//switch( $('#idtipotransaccion').val() ){ case "109": var_idtipotran="invalido"; break; case "145": var_idtipotran="invalido"; case "146": var_idtipotran="invalido"; case "166": var_idtipotran="invalido"; break; default: var_idtipotran="valido"; }
//alert(idtipotran);
    if( evalua_ttran === "SI") {      
        if( anulado === "N" && $("#tipo_usuario").val() === "ADMIN" ) {    
            if ( $("#idtransaccion").val().trim() === "" ){
                jAlert("Selecciona un Movimiento...");
                }    
            else { 
                jPrompt("¿Seguro de Anular?"+"\n"+$("#descripcion").val()+" : S/."+ ing_o_salida +"\n"+"Con fecha :"+$("#fecha_transaccion").val()+"\n"+"Escriba MOTIVO de Anulacion"," ", "Giros - Transferencias", function(txt) {    
                    if(txt) {           
                        if ( txt === " "){ jError("Escriba motivo de Anulacion...", "Giros - Transferecncias");
                        } else{
                            
                                fnAjaxEditaAnula(txt,0);
                                if ( $("#idtipotransaccion").val() === "160"){
                                    jWarning("Debera ACTUALIZAR CierreDiario con fecha: "+$("#fechai").val());
                                }
                        }                        
                    }
                }); 
            } //End IF   
        } //admin           
    } // valido
}

function fnMuestraUsuarioCuenta(valorabuscar,id_empresa,optsql) {
    //if ($("#buscacuentausuario").val().trim() !== '')
    if ( valorabuscar !=='' )
    {    
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,     
            data: {opcion: "CxU2", valor: valorabuscar, idempresa:id_empresa, opsql: optsql}, 
            url: "controles/ManteCuentaUsuario.php",
            beforeSend: function (objeto) {
                $("#carga").html("<img src='img/loader.gif'>");
            },
            complete: function (objeto) {
                $('#carga').css('display', 'none');
            },
            success: fnCreaTablaUsuarioCuenta
        });
    } else {
        jAlert("Ingrese datos a buscar...", "Cuentas");
        //$("#buscacuentausuario").focus();
    }
    return false;
}

function fnMuestraMovsCuenta(cuenta, fechai, fechaf) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "MOVSCUENTA",cuenta:cuenta, fecha_i: fechai, fecha_f: fechaf},
        url: "controles/ManteCuentaUsuario.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            $('#carga').css('display', 'none');
        },
        success: fnCreaTablaMovsCuenta
    });
    return false;
}

function fnInsertaTransaccion() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,      
        data: {opcion: "IT",nrocuenta:$('#nro_cuenta').val(),nrocuentadest:$('#datos_cuenta').val(),monto:$('#monto').val(),nroop:'---',ttran:$('#idtipotran').val(),
               destino:$("#listasucursales").val(),idgiro:'0',observa:$('#observa').val(),respo:'---',usuacrea:$('#usuariosistema').val(),fechamov:$('#fechai').val(),opsql:$('#ingsal').val()},
        url: "controles/ManteCuentaUsuario.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            fnMuestraMovsCuenta( $('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() );
            $('#carga').css('display', 'none');
        }
    });
}

///////////////// DOCUMENT //////////////////////////
$(document).ready(function () {
    $("#btn_anula_cuenta").attr("disabled",true);
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 250;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 250;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(function () {
        var window_height = $("#formulario").height(),
                content_height = window_height ;
        $('.mygrid-wrapper-div1').height(content_height);                
    });

    fnDesactivaControles();
    $("#listasucursales").attr("disabled",true);
    
    $("#btn_nuevatran").attr("disabled",true); 
       
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
   
    $('#monto').validacampos('.0123456789');
           
    fnMuestraUsuarioCuenta('XXX',$("#codsucursal").val().substr(0,1),'C');

    $('#monto').focusout( function(){
       aDecimal(); 
    });
    
    $('#btn_buscacuentausuario').click(function () {
        fnMuestraUsuarioCuenta( $('#buscacuentausuario').val(),$("#codsucursal").val().substr(0,1),'B');
    });

    $('#btn_nuevatran').click(function () {
        if ($('#datos_cuenta').val().trim() !== '') {
            fnActivaControles();
            $("#listatipotran").prop("selectedIndex", 0);
            $("#listasucursales").prop("selectedIndex", 0);
            $('#observa').val("");
            $('#monto').val("");
        } else {
            jAlert('Seleccione una cuenta...', 'Giros - Transferencias');
        }
        
    });
    
    $('#btn_cancelatran').click(function () {
        $('.ocultame').css('display', 'none');
        $('#observa').val("");
        $('#monto').val("");
        $("#listatipotran").prop("selectedIndex", 0);
        fnDesactivaControles();
    });

    $('#btn_guardatran').click(function () {
        
    if ( $('#idtipotran').val() === "160" ){
        if ($("#listasucursales").val() !== "0") {
            if ($('#fechai').val() === $('#fechaf').val()) {
                if ($('#monto').val().trim() === '' || $('#nro_cuenta').val().trim() === '' || $('#ingsal').val().trim() === '' || $('#listatipotran').val() === "0") {
                    jAlert('Faltan datos, Verifique', 'Giros - Transferencias');
                    $('.ocultame').css('display', 'none');
                } else {
                    jConfirm('¿Esta seguro de agregar : S/.' + $('#monto').val()+' con fecha: '+$('#fechai').val()+'\n'+'Se insertara S/. '+ $('#monto').val()+' en el CIERRE DIARIO de: '+$('#listasucursales option:selected').html()+'\n'+'con fecha: '+$('#fechai').val(), "Cuentas", function (r) {
                        if (r) {
                            masdatos=$('#observa').val() +':: INGRESADO A>>'+$("#listasucursales option:selected").html();
                            $('#observa').val(masdatos);
                            fnInsertaTransaccion();
                            $('.ocultame').css('display', 'none');
                            $('#observa').val("");
                            $('#monto').val("");
                            $("#listatipotran").prop("selectedIndex", 0);
                            $("#listasucursales").prop("selectedIndex", 0);
                        }
                    });
                }
            } else { jAlert('Las fechas deben ser IGUALES' + '\n' + $('#fechai').val() + '\n' + $('#fechaf').val() + '\n' + 'Verifique...', 'CUENTAS');}

        } else {jError("Debe elegir SUCURSAL de destino...", "Giros - Transferecnias");}
    }
    
    if ( $('#idtipotran').val() !== "160" ) {    
        if ($('#fechai').val() === $('#fechaf').val()) {
            if ($('#monto').val().trim() === '' || $('#nro_cuenta').val().trim() === '' || $('#ingsal').val().trim() === '' || $('#listatipotran').val() === "0" ) {
                jAlert('Faltan datos, Verifique', 'Giros - Transferencias');
                $('.ocultame').css('display', 'none');
            } else {
                jConfirm('¿Esta seguro de agregar : S/.' + $('#monto').val() +' con fecha: '+$('#fechai').val(), "Cuentas", function (r) {
                    if (r) {
                        fnInsertaTransaccion();
                        //fnMuestraMovsCuenta( $('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() );
                        $('.ocultame').css('display', 'none');
                        $('#observa').val("");
                        $('#monto').val("");
                        $("#listatipotran").prop("selectedIndex", 0);
                        $("#listasucursales").prop("selectedIndex", 0);
                    }
                });
            }
        } else {jAlert('Las fechas deben ser IGUALES' + '\n' + $('#fechai').val() + '\n' + $('#fechaf').val() + '\n' + 'Verifique...', 'CUENTAS');}
    }
    fnDesactivaControles();
    });
    
    $('#listatipotran').change( function () {
        var ttran = $('#listatipotran').val();
        is = ttran.substring(4,3);
        ttran = ttran.substring(0, 3);
        $('#idtipotran').val(ttran);
        $('#ingsal').val(is);
        
        if ( $('#idtipotran').val() === "160" ){
            $("#listasucursales").attr("disabled",false);
//            alert($('#idtipotran').val());
        }
        else {
            $("#listasucursales").attr("disabled",true);
            $("#listasucursales").prop("selectedIndex", 0);
        }
            
    });

    $('#btn_movscuenta').click(function () {
        if ($('#datos_cuenta').val().trim() !== '') {
            fnMuestraMovsCuenta( $('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() );
        } else {
            jAlert('Seleccione cuenta', 'CUENTAS');
        }
    });
    
    $('#btn_masmovs').click( function () {
        fnVerMasDatos( $('#opver').val() );
    });
    
    $("#menu-form").click(function(){
        $("#formulario").toggle(700);
        
    });
    
    $("#btn_muestratabla").click(function(){
        $("#DivUsuarioCuenta").toggle(700);
    });
    
    $("#fechai").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: 'both',
        buttonImage: 'img/calendar.ico',
        buttonImageOnly: true,
        changeYear: true,
        beforeShow: function() {           
            $(".ui-datepicker").css('font-size', 12);            
        },
        numberOfMonths: 1,
        onSelect: function(dateText) {
            //MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());
            //$("#cuentas").css("display","block");
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });

    $("#fechaf").datepicker({
        dateFormat: 'yy/mm/dd',
        showOn: 'both',
        buttonImage: 'img/calendar.ico',
        buttonImageOnly: true,
        changeYear: true,
        beforeShow: function() {           
            $(".ui-datepicker").css('font-size', 12);            
        },
        numberOfMonths: 1,
        onSelect: function(dateText) {
            //MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());
            //$("#cuentas").css("display","block");
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });
    
    $('#btn_anula_cuenta').click( function () {
    //AnulaCuenta();
        jConfirm('¿Esta seguro de ANULAR NroCuenta :' + $("#datos_cuenta").val(),"Asociados", function (r) {
                    if (r) {
                        AnulaCuenta();
                        $("#btn_anula_cuenta").attr("disabled",true);
                        
                    }
                });
    });
    
    
/////////////////////////////  EDICION /////////////////////////////////
///////////////////////////////////////////////////////////////////////
    var td, campo, valor, id;

    $(document).on("dblclick", "td.editable span", function (e)
    {
//        if ($("#fechai").val() === $("#fechaf").val()) {
            var evalua_ttran = ValidaTTran($("#idtipotransaccion").val());
            if (anulado === "N" && $("#tipo_usuario").val().trim() === "ADMIN" && evalua_ttran === "SI" ) {
                valor = $(this).text();
                if (valor !== '0.00') { // si es <> a O habilitamos la opcion guardar...
                    e.preventDefault();
                    $("td:not(.id)").removeClass("editable");
                    td = $(this).closest("td");
                    campo = $(this).closest("td").data("campo");
                    id = $(this).closest("tr").find(".id").text();
                    td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'></a> <a class='enlace cancelar' href='#'></a> ");
                } else {
                    e.preventDefault();
                    $("td:not(.id)").removeClass("editable");
                    td = $(this).closest("td");
                    campo = $(this).closest("td").data("campo");
                    id = $(this).closest("tr").find(".id").text();
                    td.text("").html("<input type='text' readonly='readonly' name='" + campo + "' value='" + valor + "'> <a class='enlace cancelar' href='#'>Cancelar</a> ");
                }
                seleccionado = "S";
            } else {
                jError('Deshabilitado...', 'Giros - Transferencias');
            }
//        }
//        else {
//            jError('Fecha Inicial y Fecha Final deben ser iguales para EDITAR\n' + $("#fechai").val() + ' <> ' + $("#fechaf").val(), 'Giros - Transferencias');
//        }
    });

    $(document).on("click", ".guardar", function (e)
    {
        n_valor = $(this).closest("td").find("input").val();
        if (n_valor.trim() !== "") {
            var n_valor, monto_a_editar;
            var monto_i = parseFloat($("#ingreso").val());
            var monto_s = parseFloat($("#salida").val());
            //$(".mensaje").html("<img src='img/cargando.gif'>");
            e.preventDefault();
            n_valor = parseFloat(n_valor);
            monto_a_editar = n_valor - valor; /* ira al sp_ con su propio signo*/
            //alert(monto_a_editar);
            jConfirm('¿Esta seguro de Editar :' + $("#descripcion").val() + "\n" + "Cambiar S/." + valor + "  por   S/." + n_valor, "Giros - Transferencias", function (r) {
                if (r) {
                    if (n_valor !== 0)
                    {
                        fnAjaxEditaAnula("txtmotivo",monto_a_editar);
                    }
                    else {
                        jError("Digita nuevo monto...", "Giros - Transferencias");
                    }
                }
            });
        }
    });

    $(document).on("click", ".guardagrupo", function (e)
    {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
        tusuario = $(this).closest("td").find("select").val();
        if (tusuario.trim() !== "")
        {
            var campo = 'grupo';
            fnEdiTransaccion();
        } else {$(".mensaje").html("<p class='ko'>Debes seleccionar un valor</p>");}

    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
        seleccionado = "N";
    });

    $("#btn_imprime_movs").click(function() {
	if ($("#nro_cuenta").val() !== '') {
	  jConfirm("¿Se imprimira Movimientos de Asociado: "+ $("#datos_cuenta").val() +"\n Del: " + $("#fechai").val() +" al: "+$("#fechaf").val(), "Asociados", function(r) {
		if (r) {
                    window.open('reportes/rptMovsAsociado.php?nombreasociado=' + $("#datos_cuenta").val() + '&nrocuenta=' + $("#nro_cuenta").val() + 
                                '&fecha_i=' + $("#fechai").val() +'&fecha_f=' + $("#fechaf").val() + '&nusuario=' + $("#usuariosistema").val(), '_blank');  
		}
	  });
	} else {
	  jAlert('Seleccione Asociado antes de imprimir, verifique...', 'Transferencias');
	}
  });
    
//    console.log($("#listasucursales").val());
});

function fnEdiTransaccion() {
    $.ajax({type: "POST", url: "controles/ManteCuentaUsuario.php",
        data: {opcion: 'ACTUALIZA', campo: campo, valor: tusuario, id: id}
    }).done(function (msg) {
        $('.mensaje').css('display', 'block');
        $(".mensaje").html(msg);
        td.html("<span>" + tusuario + "</span>");
        $("td:not(.id)").addClass("editable");
        setTimeout(function () { $('.ok,.ko').fadeOut('fast');}, 3000);
    });
}

function fnActivaControles(){
    $("#listatipotran").attr("disabled",false);
    $("#monto").attr("disabled",false);
    $("#observa").attr("disabled",false);        
    
    $("#btn_cancelatran").attr("disabled",false);
    $("#btn_guardatran").attr("disabled",false);
    //$("#btn_anula_cuenta").attr("disabled",false);
}

function fnDesactivaControles(){
    $("#listatipotran").attr("disabled",true);
    $("#monto").attr("disabled",true);
    $("#observa").attr("disabled",true);
    $("#listasucursales").attr("disabled",true);
    
    $("#btn_cancelatran").attr("disabled",true);
    $("#btn_guardatran").attr("disabled",true);
    //$("#btn_anula_cuenta").attr("disabled",true);
}

function ValidaTTran(ttran){    
    var rpta;
    switch (ttran) {
        case '98':
            rpta='NO'; break;        
        case '102':
            rpta='NO'; break;
        case '109':
            rpta='NO'; break;    
        case '145':
            rpta='NO'; break;
        case '146':
            rpta='NO'; break;            
        case '161':
            rpta='NO'; break;
        case '162':
            rpta='NO'; break;    
        case '163':
            rpta='NO'; break;
        case '164':
            rpta='NO'; break;
        case '165':
            rpta='NO'; break;            
        case '166':
            rpta='NO'; break;
        case '182':
            rpta='NO'; break;
        default:
            rpta='SI';
    }    
    //alert(rpta);
    return rpta;
    
}

function AnulaCuenta(){
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,      
        data: {opcion: "ANULACTA",nrocuenta:$('#nro_cuenta').val(),tipo:'asociado'},
        url: "controles/ManteCuentaUsuario.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            fnMuestraUsuarioCuenta('XXX',$("#codsucursal").val().substr(0,1),'L');
            $('#carga').css('display', 'none');
        }
    });
}

