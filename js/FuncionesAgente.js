function fnTotalesIngSal() {
var sumai = 0; var sumas = 0; var sumao = 0;
    $('#TMovsAgente tr.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas  
        if ($(this).find('td').eq(18).text() ==='S') { $(this).css('color', 'tomato');};       
        if ($(this).find('td').eq(18).text() !=='S') {         
            sumao += parseInt($(this).find('td').eq(13).text()||0,10); //numero de la celda 12*/
            sumai += parseFloat($(this).find('td').eq(14).text()||0,10); 
            sumas += parseFloat($(this).find('td').eq(15).text()||0,10);
        };
    });
    $("#total_i").text(sumai.toFixed(2));
    $("#total_s").text(sumas.toFixed(2));
    $("#total_o").text(sumao);
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
    } 
    $("#tbody_usuarioucenta").html(html);
}

function fnCreaTablaMovsAgente(jsonmovs){
//LimpiaTabla();
    var html;
    for (var contador = 0; contador < jsonmovs.length; contador++) {
        html += "<tr id='mv[" + contador + "]' class='dato' onclick='fnSeleccionaMov(this.id);'>";
        var i = contador + 1;
        html += "<td>" + " <button id='btn_anular' onclick='fnAnulaMovAgente();'  title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td>" + i + "</td>";
/*1*/   html += "<td style='display: none'>" +  jsonmovs[contador].idtransaccion + "</td>";
        html += "<td style='display: none'>" +  jsonmovs[contador].idtipotransaccion + "</td>";
        html += "<td>" +                        jsonmovs[contador].fecha_tran + "</td>";
        html += "<td>" +                        jsonmovs[contador].fechahora_tran + "</td>";
/*5*/   html += "<td>" +                        jsonmovs[contador].descripcion + "</td>";
        html += "<td style='display: none'>" +  jsonmovs[contador].cuentadest + "</td>";
        html += "<td class='editable' data-campo='observacion'><span>" + jsonmovs[contador].observacion + "</span> </td>";
        html += "<td>" +                        jsonmovs[contador].datostran + "</td>";       
        html += "<td >" +                       jsonmovs[contador].beneficiario + "</td>";
/*10*/  html += "<td style='display: none'>" +  jsonmovs[contador].usua_crea + "</td>";
        html += "<td style='display: none'>" +  jsonmovs[contador].nrooperacion + "</td>";        
        html += "<td align='right' class='editable' data-campo='nromovs'><span>" +    jsonmovs[contador].nromovs + "</span> </td>";
/*13*/  html += "<td align='right' class='editable' data-campo='monto_ing'><span>" +  jsonmovs[contador].monto_ing + "</span> </td>";
/*14*/  html += "<td align='right' class='editable' data-campo='monto_sal'><span>" +  jsonmovs[contador].monto_sal + "</span> </td>";
        html += "<td align='right'>" +          jsonmovs[contador].saldofinalc + "</td>";
        html += "<td align='right'>" +          jsonmovs[contador].saldofinal + "</td>";
/*17*/  html += "<td style='display: none'>" +  jsonmovs[contador].anulado + "</td>";
        html += "</tr>";
    } 
    
    $("#tbody_MovsAgente").html(html);
    fnTotalesIngSal();
    
          $('#TMovsAgente').dataTable({
        "fnDrawCallback": function (oSettings) {
          // Need to redo the counters if filtered or sorted 
          if (oSettings.bSorted || oSettings.bFiltered) {
            for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
            { $('td:eq(1)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
          }
        },
        "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 220), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
      });

}

function fnSeleccionaCuenta(idfila) 
{    
    var idfilac = $('#sele_cu').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    //for (var i = 0; i < elTableCells.length; i++) {
        $("#cta_destino").val( elTableCells[0].innerHTML + '=>' + elTableCells[1].innerHTML + ':' + elTableCells[2].innerHTML );
        $("#nro_cuentadest").val( elTableCells[2].innerHTML );
        //alert($("#cta_destino").val());
    //}    
     $("#sele_cu").val(idfila);
     $('#dialogo_cuentas').dialog('close');
	 console.log($("#nro_cuentadest").val());
}

function fnMuestraUsuarioCuenta(valorabuscar,optsql) {
    //if ($("#buscacuentausuario").val().trim() !== '')
    if ( valorabuscar !=='' )
    {    
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,     
            data: {opcion: "CxU2", valor: valorabuscar,idempresa:$("#codsucursal").val().substr(0,1), opsql: optsql}, 
            url: "controles/ManteCuentaUsuario.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete: function (objeto) {$('#carga').css('display', 'none');},
            success: fnCreaTablaUsuarioCuenta
        });
    } else {
        jAlert("Ingrese datos a buscar...", "Cuentas");
        //$("#buscacuentausuario").focus();
    }
    return false;
}

function fnMuestraMovsAgente(cuenta, fechai, fechaf) {
  $('#TMovsAgente').dataTable().fnDestroy();  
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: "MOVSAGENTE",cuenta:cuenta, fecha_i: fechai, fecha_f: fechaf},
        url: "controles/ManteAgentes.php",
        beforeSend: function (objeto) {$('#carga').css('display', 'block');$("#carga").html("<img src='img/loader.gif'>");},
        complete: function (objeto) {$('#carga').css('display', 'none');},
        success: fnCreaTablaMovsAgente
    });
    return false;
}

function fnInsertaMovAgente(tipo,dinero,tipotran) {
    if ( $('#tipotran').val() === "102" ){
        var data_adicional;
        if ($('#observacion').val().trim() !== "") {
            data_adicional = $('#cta_destino').val() + ' ::' + $("#observacion").val();
            $('#observacion').val(data_adicional);
        } else {            
            data_adicional = $('#cta_destino').val()+'*'+$("#agente_origen").val();            
            $('#observacion').val(data_adicional);
        }
        /*seleccionado*/
        $('#cta_destino').val($('#nro_cuentadest').val()); 
        
    }
    
    if ( $('#tipotran').val() === "161" || $('#tipotran').val() === "163" ) {
        var data_adicional;
        if ($('#observacion').val().trim() !== "") {
            data_adicional = $("#iniciales_destino").val() + ':' + $("#nrocuenta_destino").val() + ' ::'+$('#observacion').val()+'*'+$("#iniciales").val() + ':' + $("#datos_cuenta").val();
            $('#observacion').val(data_adicional);
        } else {
            data_adicional = $("#iniciales_destino").val() + ':' + $("#nrocuenta_destino").val()+'*'+$("#iniciales").val() + ':' + $("#datos_cuenta").val();;
            $('#observacion').val(data_adicional);
        }
        $('#cta_destino').val($('#nrocuenta_destino').val());
        //alert($('#observacion').val());
    }
    
    if ( $('#tipotran').val() === "164" ){
        var data_adicional;
        if ($('#observacion').val().trim() !== "") {
            data_adicional = $('#cta_destino').val() + ' ::' + $("#observacion").val()+'*'+$("#agente_origen").val();
            $('#observacion').val(data_adicional);
        } else {            
            data_adicional = $('#cta_destino').val()+'*'+$("#agente_origen").val();
            //$('#nro_operacion').val( $("#agente_origen").val() ); /* solo para agregar observacion en el asociado*/
            $('#observacion').val(data_adicional);
        }
        $('#cta_destino').val($('#nro_cuentadest').val()); /*seleccionado*/
        //alert($('#nro_operacion').val());
    }
    /*********** traslado a otra sucursal (efectivo y cuenta)***********************/
    if ( $('#tipotran').val() === "165" || $('#tipotran').val() === "190"){ 
        var data_adicional;
        if ($('#observacion').val().trim() !== "") {
            data_adicional = $("#listasucursal option:selected").html()+' ::'+$('#observacion').val()+'*'+$('#iniciales').val()+'::'+$('#nro_cuenta').val();
            $('#observacion').val(data_adicional);
        } else {
            data_adicional = $("#listasucursal option:selected").html()+'*'+$('#iniciales').val()+'::'+$('#nro_cuenta').val();
            $('#observacion').val(data_adicional);
        }
        
    }

    $.ajax({async: true, type: "POST", dataType: "json", cache: false,      
        data: {opt: "IT",nrocuenta:$('#nro_cuenta').val(),nrocuentadest:$('#cta_destino').val().trim(),dinero:dinero, monto:$('#monto').val(),ttran:tipotran,
                origen:$('#listasucursal').val(),idgiro:'0',nroop:$('#nro_operacion').val(),nromovs:$('#nromovs').val(),observa:$('#observacion').val(),
                respo:$('#listausuarios').val(),modifica:$('#usuariosistema').val(),fechamov:$('#fechai').val(),opsql:tipo },
        url: "controles/ManteAgentes.php",
        beforeSend: function (objeto) {$('#carga').css('display', 'block');$("#carga").html("<img src='img/loader.gif'>");},
        complete: function (objeto) {fnMuestraMovsAgente( $('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() );
                                     $("#divmovis").css("display","none"); $('#carga').css('display', 'none'); 
                                     $("#btn_cancelar").css("display", "none"); $("#btn_guardar").css("display", "none"); $("#listatipotran").css("display", "none"); }
        //success: fnMuestraMovsCuenta( $('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() )
    });
}

function fnAnulaMovAgente() {
    var evalua_ttran = ValidaTTran($("#idtipotran").val());
    if (evalua_ttran === 'SI'){
        if (anulado === "N" && $("#tipo_usuario").val() === "ADMIN" && $('#idtipotran').val() !== "98") {
          if ($("#idtransaccion").val().trim() === "") {
            jAlert("Selecciona un Movimiento...");
          }
          else {
            jPrompt("¿Seguro de Anular?" + "\n" + $("#motivo").val() + " : S/." + $("#ingresosalida").val() + "\n" + "Escriba MOTIVO de Anulacion", " ", "Giros - Transferencias", function (txt) {
              if (txt) {
                if (txt === " ") {
                  jError("Escriba motivo de Anulacion...", "Giros - Transferecncias");
                } else {
                  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {opt: "ANULA", idtran: $("#idtransaccion").val(), fechamov: $("#fechai").val(), nrocuenta: $("#nro_cuenta").val(), idtipotran: $("#idtipotran").val(),
                      motivo: txt, monto: $("#montoanula").val(), usuamodi: $("#usuariosistema").val(), ingsal: $("#tipomov").val()},
                    url: "controles/ManteAgentes.php",
                    beforeSend: function (objeto) {
                      $("#carga").html("<img src='img/loader.gif'>");
                    },
                    complete: function (objeto) {
                      $('#carga').css('display', 'none');
                    },
                    success: function (objeto) {
                      fnLimpiaTabla();
                      fnMuestraMovsAgente($('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val());
                    }
                  });
                }
              }
            });
          }
        }
    }    
}

var seleccionado = "N";
var anulado="S";

function fnSeleccionaMov(idfila) {
if (seleccionado === "N" ){    
    var idfilamv = $('#sele_mv').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilamv);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilamv !== idfila) { 
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color; 
    }
    var elTableCells = elTableRow.getElementsByTagName("td"); 
    $("#idtransaccion").val(elTableCells[2].innerHTML);
    $("#idtipotran").val(elTableCells[3].innerHTML);
    $("#fecha_tran").val(elTableCells[4].innerHTML);
    $("#motivo").val(elTableCells[6].innerHTML);
    
    var ing = elTableCells[14].innerHTML;    ing = ing.substring(6, ing.length-8);    
    var sal = elTableCells[15].innerHTML;    sal = sal.substring(6, sal.length-8);
    anulado=elTableCells[18].innerHTML;
    $("#ingreso").val(ing);    $("#salida").val(sal);
    if (parseFloat(ing) > 0 ){ $("#montoanula").val(ing); $("#tipomov").val("I"); } 
    else {$("#montoanula").val(sal); $("#tipomov").val("S");}
    var montomov = parseFloat($("#ingreso").val()) + parseFloat($("#salida").val());
    $("#ingresosalida").val(montomov);
    //alert(montomov);
    $("#sele_mv").val(idfila);
    }
}

/////////////////////////// Document Ready  ////////////////////////////////////////
$(document).ready(function () {
//  $("#formulario_agente").toggle(700);
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#dato_usuario").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    
    $("#formulario-toggle").click(function(e) {
        e.preventDefault();
        $("#formulario_agente").toggle(700);
    });
    
    $( "#btn_nuevo" ).tooltip({         show: {effect: "slideDown", delay: 250  }});
    $( "#btn_cancelar" ).tooltip({      show: {effect: "explode",   delay: 250  }});
    $( "#btn_guardar" ).tooltip({       show: {effect: "explode",   delay: 250  }});
    $( "#btn_usuariocuenta" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    $( "#btn_movscuenta" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    $( "#btn_editar" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    $( "#btn_anular" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    //$( "#btn_anula_agente" ).tooltip({ show: {effect: "explode",   delay: 250  }});
    
    $("#dialogo_cuentas").dialog({autoOpen: false, resizable: true,
            modal: true, height: 400, width:360,
            show: {effect: "blind",duration: 500},
            hide: {effect: "fade",duration: 500},
            open: function (event, ui) {
                //var ntitulo = "Datos de : " + $('#codgirosucursal').val() + '// Fecha:' + $('#pdffecha').val();
                var ntitulo = "Selecciona Cuenta de Asociado";
                $("span.ui-dialog-title").css("font-size", 10);
                $("span.ui-dialog-title").text(ntitulo);
                fnMuestraUsuarioCuenta( $('#idbanco').val(),'G'); //lista solo cuentas que pertencen al agente
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
    
    $("#monto").focusout( function(){
        aDecimal();
    });
    
    $('#btn_usuariocuenta').click(function() {
        $('#dialogo_cuentas').dialog('open');
    });
    $("#btn_cancelar").css("display", "none");
    $("#btn_guardar").css("display", "none");                
    $('#btn_nuevo').click( function(){
        //alert($('#listabancos').val());
        if ( $('#listabancos').val() !== '0' ){
            $("#btn_cancelar").css("display", "block");
            $("#btn_guardar").css("display", "block");
            $("#listatipotran").css("display", "block");
            fnLimpiaNuevo();
            $("#listatipotran").prop("selectedIndex", 0);
            $("#divmovis").css("display","none");
        } else {jAlert ('Elija Banco...','Agentes'); }
       
    });
    $('#btn_cancelar').click( function(){       
       fnLimpiaNuevo();
       $("#listatipotran").prop("selectedIndex", 0);
       $("#divmovis").css("display","none");
       $("#btn_cancelar").css("display", "none");
       $("#btn_guardar").css("display", "none"); 
       $("#listatipotran").css("display", "none");
    });
    $('#btn_guardar').click( function()   {        
    if (  $('#tipotran').val() !== "98" ) { //TrASLADO DE EFECTIVO
        if ( $('#fechai').val() === $('#fechaf').val() ){
            if ($('#monto').val().trim() === '' || $('#listatipotran').val().trim() === 0 || $('#nro_cuenta').val().trim() === '' ) {
                jAlert('Elige TRANSACCION o Faltan datos, Verifique...', 'AGENTE');                
            } else {
                jConfirm('¿Esta seguro de agregar TRANSACCION de: S/.' + $('#monto').val()+'\n'+'Con Fecha: '+$('#fechai').val(), "AGENTE", function (r) {
                    if (r) {fnInsertaMovAgente($("#ingsal").val(),$('#tipodinero').val(),$('#tipotran').val());
                            $("#listaagentes").prop("selectedIndex", 0); $("#listatipotran").prop("selectedIndex", 0);
                            $("#listasucursal").prop("selectedIndex", 0); $("#listausuarios").prop("selectedIndex", 0);                            
                    }
                });
            }                
        }else { jAlert('Las fechas deben ser IGUALES'+'\n'+ $('#fechai').val()+'\n'+ $('#fechaf').val()+'\n'+ 'Verifique...', 'CUENTAS'); }              
    } else {
        if ( $('#fechai').val() === $('#fechaf').val() ){
            if ($('#monto').val().trim() === '' || $('#listasucursal').val().trim() === "98" ) {
                jAlert('Faltan datos, Verifique...', 'AGENTE');                
            } else {
                jConfirm('¿Esta seguro de agregar TRANSACCION de: S/.' + $('#monto').val()+'\n'+'Con Fecha: '+$('#fechai').val(), "AGENTE", function (r) {
                    if (r) {
                        fnInsertaMovAgente($("#ingsal").val(),$('#tipodinero').val(),$('#tipotran').val());
                        $("#listaagentes").prop("selectedIndex", 0); $("#listatipotran").prop("selectedIndex", 0);
                        $("#listasucursal").prop("selectedIndex", 0); $("#listausuarios").prop("selectedIndex", 0);
                    }
                });
            }                
        }else { jAlert('Elige una sucursal de destino...', 'Giros - Transferencias'); }              
    }
        
    });
    
    $('#btn_movscuenta').click(function () {
        if ($('#datos_cuenta').val().trim() !== '0') {
            /*var ctaagente = $('#datos_cuenta').val();
             ctaagente = ctaagente.substring(3,20);
             $('#nro_cuenta').val(ctaagente);*/
            $('#TMovsAgente').dataTable().fnDestroy();
            $('#nombre_agente').val($('#listabancos option:selected').html());
            fnMuestraMovsAgente($('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val());
        } else {
            jAlert('Seleccione Agente...', 'AGENTES');
        }
    });   
    
    $("#fechai").datepicker({ dateFormat: 'yy/mm/dd', showOn: 'both', buttonImage: 'img/calendar.ico', buttonImageOnly: true, changeYear: true,
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

    $('#listabancos').change(function () {
     
     var optionSelected = $('#listabancos').val();
     
     var n=optionSelected.indexOf(":"); // posicion desde donde empeza r a separar
     var last = optionSelected.lastIndexOf(":");
     
     $('#iniciales').val(optionSelected.substr(0,n));
     
     $('#idbanco').val(optionSelected.substr(n+1,3));
     $('#nro_cuenta').val(optionSelected.substr(last+1,30));
     
     $("#datoagente").val($('#nro_cuenta').val().trim());
     
     $("#datos_cuenta").val($('#nro_cuenta').val().trim());     
     $("#agente_origen").val($("#listabancos option:selected").html());
     
 });
 
    $("#listaagentes").change(function(){
     var optionSelected = $('#listaagentes').val();
     var last = optionSelected.lastIndexOf(":");
     var n=optionSelected.indexOf(":");     
        //alert(optionSelected.substring(last+1,30));
     if( $("#datos_cuenta").val().trim() === optionSelected.substr(last+1,30) ){
         jError("Seleccione Otro AGENTE...","Giros - Transferencias");
         $("#listaagentes").prop("selectedIndex", 0);
         $("#datos_cuenta").val("");
     } else {
         $("#nrocuenta_destino").val(optionSelected.substr(last+1,30));
         $("#iniciales_destino").val(optionSelected.substr(0,n));
         //alert($("#nrocuenta_destino").val());
     }
     
 });
 
$('#monto').validacampos('.0123456789');

$('#nromovs').validacampos('0123456789');

$("#listatipotran").css("display", "none"); 

$("#divmovis").css("display","none");

//$("#listasucursal").change(function(){
//    console.log($("#listasucursal option:selected").html());
//    console.log($("#listasucursal").val());
//});

$('#listatipotran').change(function () {
     var optionSelected = $('#listatipotran').val();
     console.log(optionSelected);
     optionSelected = optionSelected.substring(0,3);
     var sinum = optionSelected.substring(2,4);
     var ttran = $('#listatipotran').val();
     $("#ingsal").val($('#listatipotran').val().substring(0,1) );
     if (sinum === '1' || sinum === '9') { /*Verificamos con el tercer digito sea un nro*/
        optionSelected = $('#listatipotran').val();
        optionSelected = optionSelected.substring(0,2);
        $('#tipodinero').val(optionSelected.substring(2,1));
        ttran = ttran.substring(2,5);
        $('#tipotran').val(ttran);
     } else { optionSelected = $('#listatipotran').val();
              optionSelected = optionSelected.substring(0,3);
              $('#tipodinero').val(optionSelected.substring(1,3));
              ttran = ttran.substring(3,6);
              $('#tipotran').val(ttran);
          } 
     //alert(sinum);
     fnLimpiaNuevo();    
    $("#divmovis").css("display","block");
    switch(optionSelected) {
        case 'IC':                       
            $('#cta_destino').css('display','none');
            $('#listaagentes').css('display','none');
            $('#btn_usuariocuenta').css('display','none');
            
            $('#spannro_operacion').css('display','none');            
            $('#nro_operacion').css('display','none');
            $('#listasucursal').css('display','none');
            $('#listausuarios').css('display','none');
            $('#spannromovs').css('display','none');
            $('#nromovs').css('display','none');
            /*depo al agente*/
            if (ttran === '100'){$('#listasucursal').css('display','block'); 
                                 $('#listausuarios').css('display','block');
                                } 
            /*RETIRO CNTA A SOCIADO*/
            if (ttran === '105' ){$('#cta_destino').css('display','block'); $('#btn_usuariocuenta').css('display','block');
                                    $('#spannro_operacion').css('display','block');   $('#nro_operacion').css('display','block');
                                    $('#spannromovs').css('display','block'); $('#nromovs').css('display','block');} /*retiro cuenta asociado*/            
        break;
       
        case 'SC':
            $('#cta_destino').css('display','block');
            $('#listaagentes').css('display','none');
            $('#btn_usuariocuenta').css('display','block');
            
            $('#spannro_operacion').css('display','block'); 
            $('#nro_operacion').css('display','block');
            $('#listasucursal').css('display','none');
            $('#listausuarios').css('display','none');
            $('#spannromovs').css('display','block');       
            $('#nromovs').css('display','block');
            if (ttran === '115' || ttran === '148' || ttran === '136'){/*ITF,COMISION,AJUSTE*/
                $('#cta_destino').css('display','none');
                $('#btn_usuariocuenta').css('display','none');
                $('#spannro_operacion').css('display','none'); 
                $('#nro_operacion').css('display','none');
                $('#listasucursal').css('display','none');
                $('#listausuarios').css('display','none');
                $('#spannromovs').css('display','none');       
                $('#nromovs').css('display','none');
            }
            if ( ttran === '159'){
                $('#cta_destino').css('display','none');
                $('#btn_usuariocuenta').css('display','none');
                $('#listasucursal').css('display','block');
                $('#nromovs').css('display','none');
                $('#spannromovs').css('display','none');
            }
            if ( ttran === '161' || ttran === '163' ){
                $('#cta_destino').css('display','none');
                $('#listaagentes').css('display','block');
                $('#btn_usuariocuenta').css('display','none');
                $('#listasucursal').css('display','none');
                $('#nromovs').css('display','none');
                $('#spannromovs').css('display','none');
            }
            if ( ttran === '161' || ttran === '163' ){
                $('#cta_destino').css('display','none');
                $('#listaagentes').css('display','block');
                $('#btn_usuariocuenta').css('display','none');
                $('#listasucursal').css('display','none');
                $('#nromovs').css('display','none');
                $('#spannromovs').css('display','none');
            }
            if ( ttran === '190'){
                $('#cta_destino').css('display','none');
                $('#btn_usuariocuenta').css('display','none');
                $('#listasucursal').css('display','block');
                $('#nromovs').css('display','none');
                $('#spannromovs').css('display','none');
            }
            
            break;
        case 'IE':
            $('#cta_destino').css('display','none');
            $('#listaagentes').css('display','none');
            $('#btn_usuariocuenta').css('display','none');
            
            $('#spannro_operacion').css('display','none'); 
            $('#nro_operacion').css('display','none');
            $('#listasucursal').css('display','block');
            $('#listausuarios').css('display','block');
            $('#spannromovs').css('display','none');       
            $('#nromovs').css('display','none');
            if (ttran === '133'){$('#listasucursal').css('display','none'); /*ajuste efectivo*/
                                 $('#listausuarios').css('display','none');}
        break;
        case 'SE':
            $('#cta_destino').css('display','none');
            $('#listaagentes').css('display','none');
            $('#btn_usuariocuenta').css('display','none');
            
            $('#spannro_operacion').css('display','none'); 
            $('#nro_operacion').css('display','none');
            $('#listasucursal').css('display','block');
            $('#listausuarios').css('display','none');
            $('#spannromovs').css('display','none');
            $('#nromovs').css('display','none');
            if (ttran === '104'){/*retiro ctapropia,ajuste efectivo*/
                $('#spannro_operacion').css('display','block'); 
                $('#nro_operacion').css('display','block');
                $('#listasucursal').css('display','none');
                $('#spannromovs').css('display','block');
                $('#nromovs').css('display','block');
            }
            if (ttran === '134'){ $('#listasucursal').css('display','none');}
            
            if (ttran === '163'){
                $('#listaagentes').css('display','block');
                $('#listasucursal').css('display','none');
            }
            
            if (ttran === '164'){
                $('#cta_destino').css('display','block');
                $('#btn_usuariocuenta').css('display','block'); 
                $('#listasucursal').css('display','none');
            }
            
        break;
        case 'IEC':
            $('#cta_destino').css('display','none');
            $('#listaagentes').css('display','none');
            $('#btn_usuariocuenta').css('display','none');
            
            $('#spannro_operacion').css('display','block'); 
            $('#nro_operacion').css('display','block');
            $('#listasucursal').css('display','none');
            $('#listausuarios').css('display','none');
            $('#spannromovs').css('display','block');
            $('#nromovs').css('display','block');
            if (ttran === '104'){/*pago servicos,otros,recarga*/
                
            }            
        break;
    };
        
 });
///////////////////////////////////////////////////////////////////////
/////////////////////////// EDITA CAMPOS //////////////////////////////
    var td, campo, valor, id;

    $(document).on("dblclick", "td.editable span", function (e)
    {
        if ($("#fechai").val() === $("#fechaf").val()) {
            var evalua_ttran = ValidaTTran($("#idtipotran").val());
            if (anulado === "N" && $("#tipo_usuario").val().trim() === "ADMIN" && evalua_ttran === "SI" ) {
                valor = $(this).text();
                if (valor !== '0.00') {
                    e.preventDefault();
                    $("td:not(.id)").removeClass("editable");
                    td = $(this).closest("td");
                    campo = $(this).closest("td").data("campo");
                    id = $(this).closest("tr").find(".id").text();
                    td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'> </a> <a class='enlace cancelar' href='#'></a> ");
                } else {
                    e.preventDefault();
                    $("td:not(.id)").removeClass("editable");
                    td = $(this).closest("td");
                    campo = $(this).closest("td").data("campo");
                    id = $(this).closest("tr").find(".id").text();
                    td.text("").html("<input type='text' readonly='readonly' name='" + campo + "' value='" + valor + "'> <a class='enlace cancelar' href='#'></a> ");
                }
                seleccionado = "S";
            } else {
                jError('Deshabilitado...', 'Giros - Transferencias');
            }
        }
        else {
            jError('Fecha Inicial y Fecha Final deben ser iguales para EDITAR\n' + $("#fechai").val() + ' <> ' + $("#fechaf").val(), 'Giros - Transferencias');
        }
    });

    $(document).on("click", ".guardar", function (e)
    {    
        $(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        // definimos tipo de movimiento 
        var nuevomonto=0;
        var ing_o_sal=0;
        var monto_i = parseFloat($("#ingreso").val()); //dato capturados al seleccionar fila
        var monto_s = parseFloat($("#salida").val());  //dato capturados al seleccionar fila
        nuevomonto = parseFloat(nuevovalor);           // capturado al editar fila, tambien servira para actualizar transaccion
        if (monto_i === 0){ ing_o_sal = monto_s; } // para saber si columna tiene valor > 0
        if (monto_s === 0){ ing_o_sal = monto_i; } 
        
        actualizamonto = ing_o_sal - nuevomonto; // la diferencia a actualizar en saldos
        
        //alert($("#idtransaccion").val().trim());
        var mensaje = "Esta seguro de Editar ?";
//        if (  ){
//            var mensaje = "Esta seguro de Editar ? \n"+'Se ACTUALIZARA los SALDOS desde:'+$("#fechai").val()+' hasta la fecha de Actual';            
//        }
        jConfirm(mensaje, "Giros - Transferencias", function (r) {
            if (r) {
                if (nuevovalor.trim() !== "")
                {
                    $.ajax({type: "POST", url: "controles/ManteAgentes.php",
                        data: {opt: "EDITA", idtran: $("#idtransaccion").val().trim(), campo: campo, descripcion: nuevovalor, monto: actualizamonto, fechamov: $("#fechai").val(),
                            nrocuenta: $("#nro_cuenta").val(), usuamodi: $("#usuariosistema").val(), ingsal: $("#tipomov").val()}
                    }).done(function (msg) {
                        $('.mensaje').css('display', 'block');
                        $(".mensaje").html(msg);
                        td.html("<span>" + nuevovalor + "</span>");
                        $("td:not(.id)").addClass("editable");
                        setTimeout(function () { $('.ok,.ko').fadeOut('fast');}, 2000);
                        seleccionado = "N";
                        fnLimpiaTabla();
                        fnMuestraMovsAgente($('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val());
                    });
                }
                else { $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");}
            }
        });
            
    });

    $(document).on("click", ".guardagrupo", function (e)
    {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
        tusuario = $(this).closest("td").find("select").val();
        if (tusuario.trim() !== "")
        {
            var campo = 'grupo';
            $.ajax({type: "POST",url: "controles/ManteBancos.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: tusuario, id: id}
            }).done(function (msg) {$('.mensaje').css('display', 'block');$(".mensaje").html(msg);
                td.html("<span>" + tusuario + "</span>");$("td:not(.id)").addClass("editable");
                setTimeout(function () {$('.ok,.ko').fadeOut('fast');}, 3000);
            });
        } else {$(".mensaje").html("<p class='ko'>Debes seleccionar un valor</p>");}

    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
        seleccionado = "N";
    });
 /////////////////////////////////////////////////////////////////////////
 
 $(window).resize(function () {
    $('#TMovsAgente').dataTable().fnDestroy();
    var objDataTable = $('#TMovsAgente').dataTable({
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
      "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 220), "bPaginate": false,
      "bLengthChange": false, "bFilter": false, "bSort": true,
      "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
    });
    objDataTable.fnSettings().oScroll.sY = 220;
    objDataTable.fnDraw();
  });

  //fnMuestraMovsAgente($('#nro_cuenta').val(), $('#fechai').val(), $('#fechaf').val() );
  
  $("#btn_imprime_movs").click(function() {
	if ($("#datos_cuenta").val() !== '') {
	  jConfirm("¿Se imprimira Movimientos de agente: "+ $("#nombre_agente").val() +"\n Del: " + $("#fechai").val() +" al: "+$("#fechaf").val(), "Transferencias", function(r) {
		if (r) {
		  var nomagente = $("#nombre_agente").val();
		  var fecha_i = $("#fechai").val();
		  var fecha_f = $("#fechaf").val();
		  var nusuario = $("#usuariosistema").val();

		  window.open('reportes/rptMovsAgente.php?nombreagente=' + $("#nombre_agente").val() + '&nrocuenta=' + $("#datos_cuenta").val() + 
				  '&fecha_i=' + $("#fechai").val() +'&fecha_f=' + $("#fechaf").val() + '&nusuario=' + $("#usuariosistema").val(), '_blank');  
		}
	  });
	} else {
	  jAlert('Seleccione Agentes antes de imprimir, verifique...', 'Transferencias');
	}
  });
  
  $('#btn_anula_agente').click( function () {
    //AnulaCuenta();
        jConfirm('¿Esta seguro de ANULAR NroCuenta :' + $("#nro_cuenta").val(),"Asociados", function (r) {
                    if (r) {
                        AnulaCuenta();
                        $("#btn_anula_agente").attr("disabled",true);
                        
                    }
                });
    });
  
//  console.log($("#listasucursal option:selected").html());
//  console.log($("#listasucursal").val());
});

function fnLimpiaTabla(){
var html;
    
        html += "<tr >";        
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";
        html += "<td></td>";       
        html += "<td></td>";       
        html += "<td></td>";       
        html += "<td></td>";       
        html += "<td></td>";       
/*13*/  html += "<td></td>";       
        html += "<td></td>";       
        html += "<td></td>";       
        html += "<td></td>";       
/*17*/  html += "<td></td>";
        html += "</tr>";
    
    html += "<tr>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
        html += "<th ></th>";
    html += "</tr>";        
    $("#tbody_MovsAgente").html(html);
}

function fnLimpiaNuevo(){
    $( "#monto" ).val('');
    $( "#nro_operacion" ).val('');
    $( "#nromovs" ).val('');
    $( "#observacion" ).val('');    
    $( "#cta_destino" ).val('');
    
}

function fnCambiaLogo(){
if ( $('#iniciales').val() === '0' ){
    //alert($('#iniciales').val());
    $('#divimagen').css('display','none');
    }    
    else {
    var ellogo='img/'+$('#iniciales').val().trim()+'.jpg';
    $("#myimage").attr("src",ellogo);    
    $('#iniciales').val(ellogo);        
    $('#divimagen').css('display','block');
                            
    }    
}

function ValidaTTran(ttran) {
  var rpta;
  switch (ttran) {
    case '98':
      rpta = 'NO';      break;
    case '102':
      rpta = 'NO';      break;
    case '109':
      rpta = 'NO';      break;  
    case '158':
      rpta = 'NO';      break;    
    case '161':
      rpta = 'NO';      break;
    case '163':
      rpta = 'NO';      break;
    case '164':
      rpta = 'NO';      break;
    case '165':
      rpta = 'NO';      break;
    
    default:
      rpta = 'SI';
  }
  //alert(rpta);
  return rpta;

}

function AnulaCuenta(){
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,      
        data: {opcion: "ANULACTA",nrocuenta:$('#nro_cuenta').val(),tipo:'agente'},
        url: "controles/ManteCuentaUsuario.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {      
            $('#carga').css('display', 'none');
            window.location.reload();
        }
    });
}