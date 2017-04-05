
function FnCalculaTotales(){
var ti=0; var tr=0; var ten=0; var teg=0; var ts=0; var gti=0; var gte=0;
    ti=parseFloat(document.getElementById("tingresos").value);    
    tr =parseFloat(document.getElementById("trecepcion").value);    
    ten =parseFloat(document.getElementById("tentrega").value);
    teg =parseFloat(document.getElementById("tegresos").value);
    if (isNaN(ti))  ti=0;    if (isNaN(tr))  tr=0;    if (isNaN(ten)) ten=0;    if (isNaN(teg)) teg=0;
    gti = ti + tr;    gte = ten + teg;    ts = gti - gte;    
    document.getElementById("total_ingresos").value = parseFloat(Math.round(gti*100)/100).toFixed(2);    
    document.getElementById('total_egresos').value = parseFloat(Math.round(gte*100)/100).toFixed(2);
    document.getElementById('total_saldo').value = parseFloat(Math.round(ts*100)/100).toFixed(2);
    $("#saldo_final").val($("#total_saldo").val());
    if(ts<0){
        $('#total_saldo').css('background-color','tomato');
        $('#saldo_final').css('background-color','tomato');
        }
        else {
            $('#total_saldo').css('background-color','#428bca');
            $('#saldo_final').css('background-color','#428bca');
        }
}

function TotalesTransferencias() {
var sumae = 0; var sumar = 0; var sumap = 0;
$('#transferencias tr.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    sumae += parseFloat($(this).find('td').eq(7).text()||0,10); //numero de la celda 5*/
    sumar += parseFloat($(this).find('td').eq(8).text()||0,10); 
    sumap += parseFloat($(this).find('td').eq(9).text()||0,10); 
});
document.getElementById('tentrega').value=sumae;
$("#total_en").text(sumae.toFixed(2));
document.getElementById('trecepcion').value=sumar;
$("#total_re").text(sumar.toFixed(2));
document.getElementById('tpendiente').value=sumap;
$("#total_pe").text(sumap.toFixed(2));
}

function FnCreaNuevoCierre() {
  var existe = $('#codcierrediario').val();
  if (existe === '') {
    var sucursal = $('#codsucursal').val();
    var fechacrea = $('#fecha_cierre').val();
    //var fechahoradehoy=$('#fechahoradehoy').val();
    var nusuario = $('#nusuario').val();
    jConfirm("¿Esta seguro de crear nuevo Diario con fecha :" + fechacrea, "Transferencias", function (r) {
      if (r) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opt: 'ND', codsucu: sucursal, fechacrea: fechacrea, usuamodi: nusuario},
          url: "controles/ManteCierreDiario.php",
          beforeSend: function () { $('#carga').css({display: 'block'});},
          complete: function () { $('#carga').css('display', 'none');}
        }).done(function (respuesta) {
          $("#codcierrediario").val(respuesta[0].codigo);
          $("#fechacierrediario").val(respuesta[0].fecha);
          $("#fechacierrediario").val($("#fechacierrediario").val().substring(0, 10));
          jWarning("Se creó un Nuevo Diario con fecha: " + $("#fechacierrediario").val().substring(0, 10), "Transferencias - Cierre Diario");
        });
      }
    });
  } else {
    jAlert('Ya existe un Diario, Verifique...', 'Giros - Transferencias');
  }
  return false;
}

function fnMuestraDiario(idfila) {
    var idfila1 = $('#seleldd').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "#428bca") ? color : '#428bca';
    if (idfila1 !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? '#428bca' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    var fecha = elTableCells[0].innerHTML;
    document.getElementById("seleldd").value = idfila;
    $("#saldo_ala_fecha").val(elTableCells[2].innerHTML);
    
    $('#fecha_cierre').val(fecha);
    FnUbicaDiario();
}

function FnUbicaDiario() {
  $('#IngresosDet').dataTable().fnDestroy();
  $('#EgresosDet').dataTable().fnDestroy();
  $('#transferencias').dataTable().fnDestroy();     
  $.ajax({async: true, type: "POST", dataType: 'json', cache: false,
    data: {opt: "B", codsucu: $('#codsucursal').val(), fecha: $('#fecha_cierre').val()},
    url: "controles/ManteCierreDiario.php"
  }).done(function (respuesta) {
    $("#codcierrediario").val(respuesta.codigo);
    $("#fechacierrediario").val(respuesta.fechadiario);
    $("#estado").val(respuesta.estado);
    FnCargaDetalle();
    if ($("#estado").val() === 'ABIERTO') {
      $('#span_abierto').css('display', 'block');
      $('#span_cerrado').css('display', 'none');
      $("table th").css("background", " #428bca");
      $("table th").css("color", "white");
      $("#div_btns_ingreso").css("display", "block");
      $("#div_btns_egreso").css("display", "block");

    } else {
      $('#span_cerrado').css('display', 'block');
      $('#span_abierto').css('display', 'none');
      $("table th").css("background", "lightgray");
      $("table th").css("color", "black");
      $("#div_btns_ingreso").css("display", "none");
      $("#div_btns_egreso").css("display", "none");
    }
    
    if ($("#fechadehoy").val() === $("#fecha_cierre").val()) {
        $("#div_btns_ingreso").css("display", "block");
        $("#div_btns_egreso").css("display", "block");
        
    } else {
      
      if ($("#tusuario").val() === 'ADMIN') {
        $("#div_btns_ingreso").css("display", "block");
        $("#div_btns_egreso").css("display", "block");
      } else {
        $("#div_btns_ingreso").css("display", "none");
        $("#div_btns_egreso").css("display", "none");
      }
    }
  });
}

function FnCargaDetalle(){
var existe = $('#codcierrediario').val().trim();
if (existe !== ''){
    FnCargaIngresos();   
    FnCargaEgresos();
    FnMuestraCierre( $('#fecha_cierre').val(),'T');
    FnCargaListaDiarios();
       
    FnCalculaTotales();
    $('#btn_nuevo').css('display','none');
    $('#btn_vergiros').css('display','none');
    } else {
        jWarning('Debe CREAR un nuevo Diario...:', 'Transferencias');        
        $('#btn_nuevo').css('display','block');
        fnLimpiaTabla();
    }
}  

function FnInsertaIngresos() {
  jConfirm("¿Esta seguro de agregar: S/. " + $("#ingreso").val(), "Giros - Transferencias", function (rpta) {
    if (rpta) {
      if ($("#opt_insert").val() === 'II') {
        $("#ingreso").val($("#ingreso").val().replace(",", ""));
        var monto = parseFloat($("#ingreso").val());
        if (monto > 0 && $("#lista_conceptos_ing").val() !== '0') {
          $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opt: $("#opt_insert").val(), coddiario: $("#codcierrediario").val(), monto: monto,idconcepto:$("#lista_conceptos_ing").val(),
                    sucu_destino:$("#lista_sucursales").val(),concepto: $("#masdatos_ing").val(),responsable: $("#responsable_ing").val(),usuamodi: $("#nusuario").val()},
            url: "controles/ManteCierreDiario.php",
            complete: FnCargaIngresos
          });
          $("#div_txt_ingreso").toggle(700);
          LimpiaIng();
        } else { jError('Faltan datos, Verifique...', 'Giros - Transferencias');}
      } else {jWarning('Pulse el boton  +   para agregar nuevo item', 'Transferencias - Ingresos');}
    }
  });
  return false;
}

function FnCargaIngresos(){
  $('#IngresosDet').dataTable().fnDestroy();
    $.ajax({async: true,type: "POST",dataType: "json",cache: false,
      data: {coddiario: $("#codcierrediario").val(), opt:'LI'},      
      url: "controles/ManteCierreDiario.php",    
      beforeSend:function(){ $('#carga').css({display:'block'}); },
      complete:function(){$('#carga').css('display','none'); },
      success:  CreaTablaIngresos            
      });   
}

function CreaTablaIngresos( detingresos ){  
var html;
var i=0;
    for(var contador=0; contador < detingresos.length; contador++) {
        i=contador+1;   
        html += "<tr id='I[" + contador + "]' class='dato' onclick='RecuperaFilaIng(this.id);'>";
        html += "<td>" + " <button id='btn_anulari' onclick='fnAnulaDetalleIng();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td >" + i  + "</td>";
        html += "<td class='ocultame'>"                                         + detingresos[contador].iddetalle +"</td>";
        html += "<td class='ocultame'>"                                         + detingresos[contador].idconcepto +"</td>";
        html += "<td class='editable' data-campo='concepto'> <span>"            + detingresos[contador].concepto +"</span> </td>";
        html += "<td class='editable' data-campo='responsable'> <span>"         + detingresos[contador].responsable + "</span> </td>";        
        html += "<td align='right' class='editable' data-campo='ing'> <span>"   + detingresos[contador].ing + "</span> </td>";   
        html += "</tr>";
      }
      $("#body_ingresos").html( html );      
      TotalIngresos();
      FnCalculaTotales();
      // crea datables
      $('#IngresosDet').dataTable({
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
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 130), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //"bJQueryUI": true,
      });// en dataTables
}

function FnInsertaEgresos(respo) {
  var optionSelected = $('#lista_conceptos').val();  
  jConfirm("¿Esta seguro de agregar: S/. " + $("#egreso").val(), "Giros - Transferencias", function (rpta) {
    if (rpta) {      
      if ($("#opt_insert").val() === 'IE') {
        $("#egreso").val($("#egreso").val().replace(",", ""));
        var monto = parseFloat($("#egreso").val());
        if (monto > 0 && $("#lista_conceptos").val() !== '0') {
          $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opt: $("#opt_insert").val(),coddiario:$("#codcierrediario").val(), monto: monto,idconcepto:$("#lista_conceptos").val(),
                    sucu_destino:$("#lista_sucursales").val(),concepto: $("#masdatos_eg").val(), responsable: respo, usuamodi: $("#nusuario").val()},
            url: "controles/ManteCierreDiario.php",
            complete: FnCargaEgresos
          });          
            switch (optionSelected) {
                case '35' :
                    fnInsertaTransaccionAsociado();
                    break;
                case '36':
                    fnInsertaTransaccionAgente(optionSelected);
                    break;
                case '70':
                    fnInsertaTransaccionAgente(optionSelected);
                    break;    
            }
          $("#div_txt_egreso").toggle(700);
          LimpiaEg();
        } else { jAlert('Ingrese datos...', 'Diario - Egresos'); }
      } else { jAlert('Pulse el boton  +   para agregar nuevo item', 'Cierre Diario - Egresos');}
    }
  });
  return false;
}

function FnCargaEgresos() {
    $('#EgresosDet').dataTable().fnDestroy();
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {coddiario: $("#codcierrediario").val(), opt: 'LE'},
    url: "controles/ManteCierreDiario.php",
    beforeSend: function () { $('#carga').css({display: 'block'}); },
    complete: function () { $('#carga').css('display', 'none'); },
    success: CreaTablaEgresos
  });
}

function CreaTablaEgresos( detingresos ){
var html;
var i=0;
for(var contador=0; contador < detingresos.length; contador++) {
        i=contador+1;   
        html += "<tr id='E[" + contador + "]' class='dato' onclick='RecuperaFilaEg(this.id);'>";
        html += "<td>" + " <button id='btn_anulare' onclick='fnAnulaDetalleEg();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td>" + i  + "</td>";
        html += "<td class='ocultame'>"                                         + detingresos[contador].iddetalle +"</td>";        
        html += "<td class='ocultame'>"                                         + detingresos[contador].idconcepto +"</td>";
        html += "<td class='editable' data-campo='concepto'> <span>"            + detingresos[contador].concepto + "</span> </td>";
        html += "<td class='editable' data-campo='responsable'> <span>"         + detingresos[contador].responsable + "</span> </td>";        
        html += "<td align='right' class='editable' data-campo='sal'> <span>"   + detingresos[contador].sal + "</span> </td>";                
        html += "</tr>";
      } 
      $("#body_egresos").html( html );
      TotalEgresos();
      FnCalculaTotales();
      // crea datatables
      $('#EgresosDet').dataTable({
        "fnDrawCallback": function (oSettings) {
          // Need to redo the counters if filtered or sorted 
          if (oSettings.bSorted || oSettings.bFiltered) {
            for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
            { $('td:eq(1)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
          }
        },
        "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 130), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //"bJQueryUI": true,
      }); //end dataTables
}

function CreaTablaListaDiario( datos ){
var html;
var i = 0;
for(var contador=0; contador < datos.length; contador++) {
        i=contador+1;   
        html += "<tr id='LD[" + contador + "]' class='dato' onclick='RecuperaFilaDiario(this.id);' ondblclick='fnMuestraDiario(this.id);' >";                
        html += "<td >"                 + datos[contador].fecha_diario + " </td>";
        html += "<td align='right'>"    + datos[contador].saldo_i + "</td>";                        
        html += "<td align='right'>"    + datos[contador].saldo_f + "</td>";
        html += "<td > "                + datos[contador].estado + "</td>";                        
        html += "</tr>";
      }                 
      $("#body_listadiario").html( html );
      //TotalEgresos();
}

function FnCargaListaDiarios(){
if ( $("#codcierrediario").val().trim() !== "" ){    
    $.ajax({async: true,type: "POST",dataType: "json",cache: false,
      data: {opt: 'LISTA',codsucu: $("#codsucursal").val(), fecha: $('#fecha_cierre').val() },      
      url: "controles/ManteCierreDiario.php",
      beforeSend:function(){ $('#carga').css({display:'block'}); },
      complete:function(){$('#carga').css('display','none'); },
      success:  CreaTablaListaDiario
      });
  }  
}

function FnMuestraCierre(fechacierre,opt){
if ( $('#codcierrediario').val().trim() !== "") {
    //LimpiaDetalle();
    
    var sucursal=$('#codsucursal').val();
        $.ajax({async: true,type: "POST",dataType: "json",cache: false,
        data: {sucursal:sucursal, fecha:fechacierre, opt:opt},        
        url: "controles/ManteCierreDiario.php",      
        beforeSend:function(objeto){ $('#carga').css({display:'block'}); },
        success:CreaTablaTransferencias, 
        complete:function(){$('#carga').css('display','none'); }
        });          
}          
return false;
}

function CreaTablaTransferencias( json ){
var html;
var i=0;

    for(var contador=0; contador < json.length; contador++) {
        i=contador+1;   
        html += "<tr id='R[" + contador + "]' class='dato'>";
            html += "<td >" +  i +  "</td>";        
            html += "<td >" + json[contador].cod_girosucu +         "</td>";
            html += "<td >" + json[contador].cod_sucursald +        "</td>";
            html += "<td >" + json[contador].fechahora_registro +   "</td>";
            html += "<td >" + json[contador].fechahora_entrega +    "</td>";
            html += "<td >" + json[contador].beneficiario +         "</td>";
            html += "<td >" + json[contador].remitente +            "</td>";
            html += "<td align='right'>" + json[contador].entregado +   "</td>";
            html += "<td align='right'>" + json[contador].recibido +    "</td>";
            html += "<td align='right'>" + json[contador].pendiente +   "</td>";        
        html += "</tr>";
      } 
      $("#body_giros").html( html );
      TotalesTransferencias();
      FnCalculaTotales();

      $('#transferencias').dataTable({
        "fnDrawCallback": function (oSettings) {
          // Need to redo the counters if filtered or sorted 
          if (oSettings.bSorted || oSettings.bFiltered) {
            for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
            { $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
          }
        },
        "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 40), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
      });
      
}

function TotalIngresos() {
var sumai = 0;
$('#IngresosDet tr.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    sumai += parseFloat($(this).find('td').eq(6).text()||0,10); //numero de la celda 6*/        
});
document.getElementById('tingresos').value=sumai;
$("#total_i").text(sumai.toFixed(2));
$('#total_i').priceFormat({
   prefix: '',
    centsSeparator: '.',
    thousandsSeparator: ','
});
}

function TotalEgresos() {
  var sumaeg = 0;
  $('#EgresosDet tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    sumaeg += parseFloat($(this).find('td').eq(6).text() || 0, 10); //numero de la celda 6*/        
  });
  document.getElementById('tegresos').value = sumaeg;
  $("#total_e").text(sumaeg.toFixed(2));
  $('#total_e').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
}

var txt_concepto='';
var txt_masdatos='';
var posicion=0;
function RecuperaFilaIng(idfila) {
  var idfila1 = $('#selei').val();
  var elTableRow = document.getElementById(idfila);
  var elTableRow1 = document.getElementById(idfila1);
  var color = elTableRow.style.backgroundColor;
  elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
  if (idfila1 !== idfila) {
    elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
  }
  var elTableCells = elTableRow.getElementsByTagName("td");

  document.getElementById("id_detalle").value = elTableCells[2].innerHTML;
  $("#id_concepto_i").val(elTableCells[3].innerHTML);
  var concepto_i = elTableCells[4].innerHTML; document.getElementById("masdatos_ing").value = concepto_i.substring(7, concepto_i.length - 8);
  
  txt_concepto =  $("#masdatos_ing").val();
  posicion=txt_concepto.lastIndexOf("-");
  txt_masdatos = txt_concepto.substr(posicion + 1, 70);
  txt_concepto = txt_concepto.substr(0,posicion);
  
  var respo_i = elTableCells[5].innerHTML; document.getElementById("responsable_ing").value = respo_i.substring(7, respo_i.length - 8);
  var ing = elTableCells[6].innerHTML;  document.getElementById("ingreso").value = ing.substring(7, ing.length - 8);

  document.getElementById("selei").value = idfila;
  document.getElementById("opt_insert").value = ""; // valor que permite agregar un nuevo item
  $("#opt_sele").val("ing"); //permite saber que tabla sera actualizada
  console.log($("#id_detalle").val());
}

function RecuperaFilaEg(idfila) {
  var idfila1 = $('#selee').val();  
  var elTableRow = document.getElementById(idfila);
  var elTableRow1 = document.getElementById(idfila1);
  var color = elTableRow.style.backgroundColor;
  elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
  if (idfila1 !== idfila) {
    elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
  }
  var elTableCells = elTableRow.getElementsByTagName("td");

  document.getElementById("id_detalle").value = elTableCells[2].innerHTML;
  $("#id_concepto_e").val(elTableCells[3].innerHTML);
  var concepto_e = elTableCells[4].innerHTML;  document.getElementById("masdatos_eg").value = concepto_e.substring(7, concepto_e.length - 8);
  
  txt_concepto =  $("#masdatos_eg").val();
  posicion=txt_concepto.lastIndexOf("-");
  txt_masdatos = txt_concepto.substr(posicion + 1, 70);
  txt_concepto = txt_concepto.substr(0,posicion);
  
  var respo_e = elTableCells[5].innerHTML; document.getElementById("responsable_eg").value = respo_e.substring(7, respo_e.length - 8);
  var eg = elTableCells[6].innerHTML;  document.getElementById("egreso").value = eg.substring(7, eg.length - 8);

  document.getElementById("selee").value = idfila;
  document.getElementById("opt_insert").value = ""; //                
  $("#opt_sele").val("sal"); //permite saber que tabla sera actualizada
} 

function RecuperaFilaDiario(idfila){
    var idfila1 = $('#seleld').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    var color = elTableRow.style.backgroundColor;
    if (elTableRow1.style.backgroundColor !== 'LightSalmon') {
        elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
        if (idfila1 !== idfila) {
            elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
        }
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    document.getElementById("seleld").value = idfila;
    document.getElementById("opt_insert").value = ""; //                
    $("#opt_sele").val("sal"); //permite saber que tabla sera actualizada
} 

function ADecimal(){
    nimporte=document.getElementById("ingreso").value;
    document.getElementById("ingreso").value = parseFloat(Math.round(nimporte*100)/100).toFixed(2);      
}

function ActivaControles(op){
if (op==="I"){
    ControlesIng();
    ControlesEg();
    ControlesGuardaE();
    document.getElementById("opt_insert").value ="II"; // para daber en que parte de la tabala hacer la insercion
    }
if (op==="E"){
    ControlesEg();
    ControlesIng();
    ControlesGuardaI();
    document.getElementById("opt_insert").value ="IE";
    }
if (op==="G"){
    ControlesGuardaI();    
    }    
}

function ControlesIng(){
    document.getElementById("masdatos_ing").disabled=false;
    document.getElementById("responsable_ing").disabled=false;
    document.getElementById("ingreso").disabled=false;        
    document.getElementById("masdatos_ing").value="";
    document.getElementById("responsable_ing").value="";
    document.getElementById("ingreso").value="";    
}

function ControlesEg(){
    document.getElementById("masdatos_eg").disabled=false;
    document.getElementById("responsable_eg").disabled=false;
    document.getElementById("egreso").disabled=false;
    document.getElementById("masdatos_eg").value="";
    document.getElementById("responsable_eg").value="";
    document.getElementById("egreso").value="";    
}

function ControlesGuardaI(){
    document.getElementById("masdatos_ing").disabled=true;
    document.getElementById("responsable_ing").disabled=true;
    document.getElementById("ingreso").disabled=true;    
}

function ControlesGuardaE(){
    document.getElementById("masdatos_eg").disabled=true;
    document.getElementById("responsable_eg").disabled=true;
    document.getElementById("egreso").disabled=true;
}

function LimpiaDetalle(){
var Table = document.getElementById("body_ingresos");
Table.innerHTML = "";    
    
var Table = document.getElementById("body_egresos");
Table.innerHTML = "";    
    
}

function LimpiaCamposDetalleIng(){
    $('#masdatos_ing').attr('value','');
    $('#responsable_ing').attr('value','');
    $('#ingreso').attr('value','');
}

function LimpiaCamposDetalleEg(){
    //$('#mas_datos').attr('value','');
    $('#responsable_eg').attr('value','');
    $('#egreso').attr('value','');
}

function fnImprimeDiario(){

    $.ajax({async: true,type: "POST",dataType: "json",cache: false,
      data: {coddiario: $("#codcierrediario").val(), fecha: $('#fecha_cierre').val() },      
      url: "reportes/rptDiario.php"
//      beforeSend:function(){ $('#carga').css({display:'block'}); },
//      complete:function(){$('#carga').css('display','none'); },
//      success:  CreaTablaListaDiario
      });

}
////////////////////// Document Ready //////////////////////////////
$(document).ready(function(){
// oculta menu lateral  
$("#wrapper").toggleClass("toggled");

$(window).resize(function() {
  $('#transferencias').dataTable().fnDestroy(); 
  var objDataTable = $('#transferencias').dataTable({
          "fnDrawCallback": function (oSettings) {
            // Need to redo the counters if filtered or sorted 
            if (oSettings.bSorted || oSettings.bFiltered) {
              for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
              { $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
            }
          },
          "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
          "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 30), "bPaginate": false,
          "bLengthChange": false, "bFilter": false, "bSort": true,
          "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
  objDataTable.fnSettings().oScroll.sY = 101;
  objDataTable.fnDraw();

$('#IngresosDet').dataTable().fnDestroy(); 
  var objDataTable1 = $('#IngresosDet').dataTable({
//          "fnDrawCallback": function (oSettings) {
//            // Need to redo the counters if filtered or sorted 
//            if (oSettings.bSorted || oSettings.bFiltered) {
//              for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
//              { $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
//            }
//          },
          "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
          "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 120), "bPaginate": false,
          "bLengthChange": false, "bFilter": false, "bSort": true,
          "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
  objDataTable1.fnSettings().oScroll.sY = 101;
  objDataTable1.fnDraw();
  
  $('#EgresosDet').dataTable().fnDestroy(); 
  var objDataTable2 = $('#EgresosDet').dataTable({
//          "fnDrawCallback": function (oSettings) {
//            // Need to redo the counters if filtered or sorted 
//            if (oSettings.bSorted || oSettings.bFiltered) {
//              for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
//              { $('td:eq(0)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
//            }
//          },
          "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
          "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 120), "bPaginate": false,
          "bLengthChange": false, "bFilter": false, "bSort": true,
          "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
        });
  objDataTable2.fnSettings().oScroll.sY = 101;
  objDataTable2.fnDraw();


});

//$('#ingreso').validacampos('.0123456789');
//$('#egreso').validacampos('.0123456789');
$('#egreso').priceFormat({
   prefix: '',
    centsSeparator: '.',
    thousandsSeparator: ','
});
$('#ingreso').priceFormat({
   prefix: '',
    centsSeparator: '.',
    thousandsSeparator: ','
});
$('#fraccion').priceFormat({ prefix: 'S/. ', centsSeparator: '.', thousandsSeparator: ','});

$('#total_saldo').priceFormat({
   prefix: '',
    centsSeparator: '.',
    thousandsSeparator: ','
});

$('#span_abierto').css('display','none');
$('#span_cerrado').css('display','none');
$('#total_ingresos').attr('value','0');
$('#total_egresos').attr('value','0');
$('#total_saldo').attr('value','0');
$('#recarga_dataTables').val('N');
//fnReiniciaDataTablesIng();
$("#btn_inserta_fraccion" ).tooltip({ 
  show: {effect: "explode", delay: 250 }, 
  position: { my: "left top", at: "right+5 top-5"} });

ControlesGuardaI();
ControlesGuardaE();
ActivaControles('G');
//ResizeDivG(); ResizeDivI(); ResizeDivE(); 
ResizeDivD();

$("#div_txt_ingreso").toggle(700);

$("#div_txt_egreso").toggle(700);

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
    });

$("#imprimediario").click(function () {
  console.log($("#tpendiente").val());
        if ($("#codcierrediario").val() !== '') {
            jConfirm("¿Se imprimira DIARIO con fecha:\n" + $("#fechacierrediario").val(), "Transferencias", function (r) {
                if (r) {
                    var codsucu = $("#codsucursal").val();                    
                    var fecha = $("#fecha_cierre").val();
                    var coddiario = $("#codcierrediario").val();
                    var nombresucu = $("#nombresucursal").val();
                    var totaling = $("#total_ingresos").val();
                    var totalsal = $("#total_egresos").val();
                    var saldof = $("#total_saldo").val();
                    var nusuario = $("#nusuario").val();
					var tentrega= parseFloat($("#tentrega").val());
					var trecepcion= parseFloat($("#trecepcion").val());
					var tpendiente= parseFloat($("#tpendiente").val());
					var efectivoneto = parseFloat($("#total_saldo").val()) - tpendiente; // parseFloat($("#total_saldo").val())
                    window.open('reportes/rptDiario.php?codsucu=' + codsucu + '&fecha=' + fecha + '&coddiario=' + coddiario + '&nombresucu=' + nombresucu
                            + '&tingresos=' + totaling + '&tegresos=' + totalsal + '&saldofinal=' + saldof + '&nusuario=' + nusuario
                            + '&tentregados='+ tentrega.toFixed(2) +'&trecibidos='+trecepcion.toFixed(2)+'&tpendientes='+tpendiente.toFixed(2)+'&efectivo_neto='+efectivoneto.toFixed(2), '_blank');  // changed here (cambiado aquí)
//                    window.open('reportes/rptDiario.php?coddiario=' + coddiario +'&tingresos='+totaling +'&tegresos='+totalsal +'&saldofinal='+saldof, '_blank');  // changed here (cambiado aquí)                
//                    fnImprimeDiario();
                }
            });
        } else {
            jAlert('Seleccione Diario a imprimir, verifique...', 'Transferencias');
        }
    });
 
$("#imprime_ing").click(function(){
if ($("#estado").val() !== 'CERRADO') {    
    var ingreso =$("#ingreso").val();
    if($("#codcierrediario").val() !== '' && ingreso>0){
        jConfirm("¿Se imprimira Recibo de Ingresos :\n"+ txt_concepto +' --> '+$("#ingreso").val() , "Transferencias", function(r) {
            if(r) { 
            var responsable = $("#responsable_ing").val();            
            var num_letras = covertirNumLetras(ingreso);
            //var concepto = $("#lista_conceptos_ing").val()+'-'+$("#masdatos_ing").val();
            var nombreusuario = $("#nombreusuario").val();
            var opt = 'IN';
            window.open('ImprimeRecibos.php?responsable='+responsable+'&ingreso='+ingreso+'&num_letras='+num_letras+'&concepto='+txt_concepto
                          +'&masdatos='+txt_masdatos+'&nombreusuario='+nombreusuario+'&opt='+opt,'_blank');  // changed here (cambiado aquí)
            }
          });      
    } else { jAlert ('Seleccione item a imprimir, verifique...','Transferencias'); }     
} 
 }); 
 
$("#imprime_eg").click(function () {
 if ($("#estado").val() !== 'CERRADO') {   
        var egreso = $("#egreso").val();
        if ($("#codcierrediario").val() !== '' && egreso > 0) {
            jConfirm("¿Se imprimira Recibo de Egresos :\n" + txt_concepto + ' --> ' + $("#egreso").val(), "Transferencias", function (r) {
                if (r) {
                    var responsable = $("#responsable_eg").val();
                    var num_letras = covertirNumLetras(egreso);
                    //var concepto = $("#lista_conceptos").val()+'-'+$("#masdatos_eg").val();                    
                    var nombreusuario = $("#nombreusuario").val();
                    var opt = 'SA';
                    //window.open('imprimediario.php?codsucu='+codsucu+'&fecha='+fecha,'_blank');  // changed here (cambiado aquí)
                    window.open('ImprimeRecibos.php?responsable=' + responsable + '&egreso=' + egreso + '&num_letras=' + num_letras + '&concepto=' + txt_concepto
                          +'&masdatos='+txt_masdatos  + '&nombreusuario=' + nombreusuario + '&opt=' + opt, '_blank');  // changed here (cambiado aquí)
                }
            });
        } else {
            jAlert('Seleccione item a imprimir, verifique...', 'Transferencias');
        }
}    
});
// fecha en Español
$(function($){
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
});
 
$("#fecha_cierre").datepicker({dateFormat: 'yy/mm/dd',showOn: 'both',buttonImageOnly: true,changeYear: true,
        buttonImage: 'img/calendar.ico',
        beforeShow: function(){$(".ui-datepicker").css('font-size', 12);},
        numberOfMonths: 1,
        //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
        onSelect: function (dateText){
          FnUbicaDiario( );
        }              
   }); 

////////////////////////////// CLICK ////////////////////////////////////////
$("#btn_cancelaing").click(function(){
   $("#div_txt_ingreso").toggle(700);
   LimpiaIng();
});

$("#nuevo_ing").click(function(){
   $("#div_txt_ingreso").toggle(700);
   $("#lista_conceptos_ing").prop("selectedIndex", 0);
   LimpiaIng();
   $("#div_txt_egreso").css('display','none');
});

$("#inserta_ing").click(function(){
   FnInsertaIngresos();   
}); 
 
$("#btn_cancelaeg").click(function(){
   $("#div_txt_egreso").css("display","none");
   $("#div_sucursales").css("display","none");
   $("#div_agente_asociado").css("display","none");
   $("#div_asociado").css("display", "none");   $("#txt_asociado").val("");
   $("#div_agente").css("display", "none");     $("#txt_agente").val("");
   $("#lista_sucursales").prop("selectedIndex", 0);
   $("#lista_conceptos").prop("selectedIndex", 0);
   LimpiaIng();
});

$("#nuevo_eg").click(function(){
   $("#div_txt_egreso").toggle(700);
   $("#lista_conceptos").prop("selectedIndex", 0);
   $('#responsable_eg').attr("disabled",false);
   LimpiaEg();
});

$("#inserta_eg").click(function() {
        if ($("#lista_conceptos").val() === '20') {
            var responsable;
            responsable = $("#codsucursal").val() + "-->" + $("#lista_sucursales").val();
            FnInsertaEgresos(responsable);
        } else {
            FnInsertaEgresos($("#responsable_eg").val());
        }
        //$("#lista_conceptos").prop("selectedIndex", 0);
    });
 
$('#btn_nuevo').click(function(){
    FnCreaNuevoCierre();
}); 
 
$("#btn_cerrar").click(function(){
   FnCierreDiario(); 
});
 
$("#btn_span").click(function(){
     if ( $("#fechadehoy").val() === $("#fecha_cierre").val() ){
         FnAbreDiario();
     }else {
        if ($("#tusuario").val() === 'ADMIN'){
            FnAbreDiario();
        } else {
          jWarning("Solicite al ADMINSTRADOR","Giros - Transferencias");
        }
     }        
});
 
$("#btn_actualizasaldos").click(function(){
   jConfirm("¿Esta seguro de Recalcular ? \n Los SALDOS se MODIFICARAN desde: "+ $("#fecha_cierre").val()+"-> Hacia ADELANTE", "Giros - Transferencias", function(r) {
        if(r) 
        {
            fnActualizaSaldos();
       }
   });    
});

$("#btn_dinero").click(function(){
    if ( $("#codcierrediario").val().trim() !== "" ) {
        //alert($("#codcierrediario").val());
        $("#dialogo_dinero").dialog("open");
    } else {
        jWarning("Debe crear un nuevo Diario","Giros - Transferencias");
    }
});

$("#dialogo_dinero").dialog({autoOpen: false, resizable: true, modal: true,
    height: 600, width: 360,
    show: {effect: "blind", duration: 700},
    hide: {effect: "fade", duration: 700},
    open: function (event, ui) {
      var ntitulo = "Dinero de:" + $('#codcierrediario').val() + '// Fecha:' + $('#fecha_cierre').val();
      $("span.ui-dialog-title").css("font-size", 10);
      $("span.ui-dialog-title").text(ntitulo);
      fnCargaDinero();
    },
    close: function (event, ui) {
      var html;
      $("#tbody_masdatos").html(html);
    }
  });
        
$("#dialogo_distribucion").dialog({autoOpen: false, resizable: true, modal: true,
    height: 450, width: 510,
    show: {effect: "fade", duration: 500},
    hide: {effect: "fade", duration: 500},
    open: function (event, ui) {
      var ntitulo = "Distribuir: S/. " + $('#ingreso').val();
      $("span.ui-dialog-title").css("font-size", 12);
      $("span.ui-dialog-title").text(ntitulo);
      $("#lista_asociados").prop("selectedIndex", 0);
      $("#lista_agentes").prop("selectedIndex", 0);
      $("#opciones_distribucion").prop("selectedIndex", 0);
      $("#txt_fraccion_distro").val("");
      ListaDistro( $("#id_detalle").val() );
	  //console.log($("#id_detalle").val());
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

$("#dialogo_asociados").dialog({autoOpen: false, resizable: true, modal: true,
    height: 480, width: 350,
    show: {effect: "blind", duration: 700},
    hide: {effect: "fade", duration: 700},
    open: function (event, ui) {
      var ntitulo = "Selecciona Asociados " + $('#fecha_cierre').val();
      $("span.ui-dialog-title").css("font-size", 10);
      $("span.ui-dialog-title").text(ntitulo);
      fnMuestraUsuarioCuenta('XXX','G');
    },
    close: function (event, ui) {
      var html;
      $("#tbody_masdatos").html(html);
    }
  });

$("#dialogo_agentes").dialog({autoOpen: false, resizable: true, modal: true,
    height: 480, width: 500,
    show: {effect: "blind", duration: 700},
    hide: {effect: "fade", duration: 700},
    open: function (event, ui) {
      var ntitulo = "Selecciona Agentes " + $('#fecha_cierre').val();
      $("span.ui-dialog-title").css("font-size", 10);
      $("span.ui-dialog-title").text(ntitulo);
      fnMuestraUsuarioAgente();
    },
    close: function (event, ui) {
      var html;
      $("#tbody_masdatos").html(html);
    }
  });

$("#imprime_dinero").click(function(){
    var confirma_impresion=VerificaImprimirDinero();
   //$('#d_diferencia').css('background-color', 'white');
   if (confirma_impresion === 'SI'){
   $('#d_diferencia').css('color', 'white');
   imprSelec("dialogo_dinero");
   }
});

$("#div_sucursales").css("display","none");
$("#div_asociado").css("display","none");
$("#div_agente").css("display","none");
var optionSelectedAgt;
$("#lista_conceptos").change( function (){
  optionSelectedAgt = $('#lista_conceptos').val();
  console.log(optionSelectedAgt);
        if (optionSelectedAgt === '20') { // SALIDA DE EFECTIVO A OTRA SUCURSAL
            $("#div_sucursales").toggle(700);
            $("#lista_sucursales").prop("selectedIndex", 0);
        } else {
            $("#div_sucursales").css("display", "none");
            $("#lista_sucursales").prop("selectedIndex", 0);
        }
        if (optionSelectedAgt === '35') { // SALIDA DE EFECTIVO A Asociado
            $("#dialogo_asociados").dialog("open");
            $("#div_asociado").toggle(700);            
            //console.log(optionSelected);
        } else {
            $("#div_asociado").css("display", "none");
            $("#txt_asociado").val("");
        }
        if (optionSelectedAgt === '36') { // SALIDA DE EFECTIVO A Agentes
            $("#dialogo_agentes").dialog("open");
            $("#div_agente").toggle(700);
        } else {
            $("#div_agente").css("display", "none");
            $("#txt_agente").val("");
        }
        if (optionSelectedAgt === '70') { // TRANSFERENCIAS DE EFECTIVO>>AGENTE
            $("#dialogo_agentes").dialog("open");
            $("#div_agente").toggle(700);
        } else {
            $("#div_agente").css("display", "none");
            $("#txt_agente").val("");
        }
});

$("#lista_sucursales").change( function (){
  var optionSelected = $('#lista_sucursales').val();
  sucudestino=$('#lista_sucursales option:selected').html();
  if (optionSelected === $('#codsucursal').val() ) { // SALIDA DE EFECTIVO A OTRA SUCURSAL
    $("#lista_sucursales").prop("selectedIndex", 0);
  }
  //alert(sucudestino);
  $('#responsable_eg').attr("disabled",true);
});

$("#opciones_distribucion").change( function (){
  var optionSelected = $('#opciones_distribucion').val();
  if (optionSelected === 'A' ) { // SALIDA DE EFECTIVO A OTRA agente
    $("#lista_agentes").toggle(700);
    $("#lista_asociados").css("display","none");
	$("#lista_sucursales_distro").css("display","none");
    $("#cuenta_destino").val($("#lista_agentes").val());
    //alert( $("#cuenta_destino").val() );
    $("#lista_agentes").prop("selectedIndex", 0);
	//$("#lista_sucursales_distro").prop("selectedIndex", 0);
  }
  if (optionSelected === 'U' ) { // SALIDA DE EFECTIVO A OTRA Asociado
    $("#lista_asociados").toggle(700);
    $("#lista_agentes").css("display","none");
	$("#lista_sucursales_distro").css("display","none");
    $("#cuenta_destino").val($("#lista_asociados").val());
    //alert( $("#cuenta_destino").val() );
    $("#lista_asociados").prop("selectedIndex", 0);
  }
  if (optionSelected === 'S' ) { // SALIDA DE EFECTIVO A OTRA SUCURSAL
    $("#lista_sucursales_distro").toggle(700);
    $("#lista_agentes").css("display","none");
	$("#lista_asociados").css("display","none");
    $("#cuenta_destino").val($("#lista_sucursales_distro").val());
    //alert( $("#cuenta_destino").val() );
    $("#lista_sucursales_distro").prop("selectedIndex", 0);
  }
  if (optionSelected === '0' ) { // no elige ninguno
    $("#lista_asociados").css("display","none");
    $("#lista_agentes").css("display","none");
	$("#lista_sucursales_distro").css("display","none");
    $("#cuenta_destino").val("");
    //alert( $("#cuenta_destino").val() );
  }
  console.log(optionSelected);
});

$("#btn_inserta_distro").click(function(){
  if ($("#opciones_distribucion").val()==='Agente'){
    $("#cuenta_destino").val($("#lista_agentes").val());
  }
});

$("#btn_distribucion").click(function () {
    if ($("#id_detalle").val().trim() !== "") {
      if ($("#id_concepto_i").val().trim() === "17") {
        $("#dialogo_distribucion").dialog("open");
      }
    } else {
      jWarning("Debe Seleccionar Ingreso a Distribuir ", "Giros - Transferencias");
    }
	console.log();
  });

$("#btn_inserta_fraccion").click(function () {
    var existe,posible;
    if ($("#opciones_distribucion").val() === 'A') {
      existe = BuscaEnTablaDistro($("#lista_agentes").val());
      if ($("#lista_agentes").val() === existe) {
        jWarning("Cuenta ya Existe, verifique...", "Giros - Transferencias");
      }
      else {
        if (parseFloat($("#txt_fraccion_distro").val().trim()) === 0 || $("#lista_agentes").val() === '0') {
          jWarning("Datos incorrectos..., verifique", "Giros - Transferencias");
          $("#txt_fraccion_distro").focus();
        } else {          
          posible=VerificaFraccion();
          if ( posible === 'SI' ){
            $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
            $("#dialogo_distribucion").dialog("close");
            $("#lista_agentes").css("display", "none");
            InsertaItmDistro($("#lista_agentes").val());
          } else { jAlert("esta EXCEDIENDO \n El monto a Distribuir es: S/. "+$('#ingreso').val(),"Distribución");}
        }
      }
    }

    if ($("#opciones_distribucion").val() === 'U') {
      existe = BuscaEnTablaDistro($("#lista_asociados").val());
      if ($("#lista_asociados").val() === existe) {
        jWarning("Cuenta ya Existe, verifique...", "Giros - Transferencias");
      }
      else {
        if (parseFloat($("#txt_fraccion_distro").val().trim()) === 0 || $("#lista_asociados").val() === '0') {
          jWarning("Datos incorrectos..., verifique", "Giros - Transferencias");
          $("#txt_fraccion_distro").focus();
        } else {
          posible=VerificaFraccion();
          if ( posible === 'SI' ){
            $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
            $("#dialogo_distribucion").dialog("close");
            $("#lista_asociados").css("display", "none");
            InsertaItmDistro($("#lista_asociados").val());
          } else { jAlert("esta EXCEDIENDO \n El monto a Distribuir es: S/. "+$('#ingreso').val(),"Distribución");}
        }
      }
    }
	
	if ($("#opciones_distribucion").val() === 'S') {
      existe = BuscaEnTablaDistro($("#lista_sucursales_distro").val());
      if ($("#lista_asociados").val() === existe) {
        jWarning("Sucursal ya Existe, verifique...", "Giros - Transferencias");
      }
      else {
        if (parseFloat($("#txt_fraccion_distro").val().trim()) === 0 || $("#lista_sucursales_distro").val() === '0') {
          jWarning("Datos incorrectos..., verifique", "Giros - Transferencias");
          $("#txt_fraccion_distro").focus();
        } else {
          posible=VerificaFraccion();
          if ( posible === 'SI' ){
            $("#txt_fraccion_distro").val($("#txt_fraccion_distro").val().replace(",", ""));
            $("#dialogo_distribucion").dialog("close");
            $("#lista_sucursales_distro").css("display", "none");
            InsertaItmDistro_S($("#lista_sucursales_distro").val());
          } else { jAlert("esta EXCEDIENDO \n El monto a Distribuir es: S/. "+$('#ingreso').val(),"Distribución");}
        }
      }
    }
  });
  
$("#btn_cancela_distro").click(function () {
    fnCancelaDistro(); 
});
  
$("#btn_aplica_distro").click(function () {
    fnAplicaDistribucion();
});

$('#txt_fraccion_distro').priceFormat({ prefix: '', centsSeparator: '.', thousandsSeparator: ','});

FnUbicaDiario();

}); // FIN DcoReady 

var sucu_destino;
function MiAjax(){
  
}

function FnInsertaFraccion() {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opt: 'INSERTA_FRACCION', iddetalle: $("#id_detalle").val(), fraccion: $("#txt_fraccion_distro").val(), nrocuenta_destino: $("#cuenta_destino").val(),
      fecha_mov: $("#fechacierrediario").val(), usuario: $("#nusuario").val()},
    url: "controles/ManteCierreDiario.php",
    success: CreaTablaIngresos
  });
}

function imprSelec(nombre) {
  var ficha = document.getElementById(nombre);
  var ventimp = window.open(' ', 'popimpr');
  ventimp.document.write(ficha.innerHTML);
  ventimp.document.close();
  ventimp.print( );
  ventimp.close();
}

function LimpiaIng(){
   $("#masdatos_ing").val("");
   $("#responsable_ing").val("");   
   $("#ingreso").val("");
   
}

function LimpiaEg(){
   //$("#mas_datos").val("");
   $("#responsable_eg").val("");   
   $("#egreso").val("");
}

function ResizeDivI(){
    var altura = $(window).height();
    $('.mygrid-wrapper-divi').height(altura/2 - 100);
}

function ResizeDivE(){
    var altura = $(window).height();
    $('.mygrid-wrapper-dive').height(altura/2 - 100);
}

function ResizeDivG(){
    var altura = $(window).height();
    $('.mygrid-wrapper-divgiros').height(altura/2 - 10);
}

function ResizeDivD(){
    var altura = $(window).height();
    $('.mygrid-wrapper-divd').height(altura/2 - 10);
}

function fnLimpiaTabla(){
var html;    
    html += "<tr>";
        html += "<td>" + " <button id='btn_anulari' type='button' aria-hidden='true' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td ></td>";
        html += "<td ></td>";        
        html += "<td > NO hay datos </td>";
        html += "<td > </td>";        
        html += "<td > </td>";   
        html += "</tr>";
        $("#body_ingresos").html( html );
        $("#body_egresos").html( html );
var html1;
    html1 += "<tr>";
        html1 += "<td></td>";        
        html1 += "<td ></td>";
        html1 += "<td ></td>";
        html1 += "<td ></td>";
        html1 += "<td > NO hay datos</td>";
        html1 += "<td ></td>";
        html1 += "<td ></td>";
        html1 += "<td ></td>";
        html1 += "<td ></td>";
        html1 += "<td ></td>";        
        html1 += "</tr>";
        $("#body_giros").html( html1 );
}

function FnCierreDiario() {
  FnCalculaTotales();
  if ($("#estado").val() === 'ABIERTO') {
    jConfirm("¿Esta seguro de Cerrar DIARIO \n de fecha: " + $("#fecha_cierre").val(), "Transferencias", function (r) {
      if (r) {
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opt: 'CIERRE', coddiario: $("#codcierrediario").val(), saldof: $("#total_saldo").val(), valor: 'CERRADO'},
          url: "controles/ManteCierreDiario.php"
        }).done(function (respuesta) {
          $("#codcierrediario").val(respuesta[0].codigo);
          $("#estado").val(respuesta[0].estado);
          if ($("#estado").val() === 'ABIERTO') {
            $('#span_abierto').css('display', 'block');
            $('#span_cerrado').css('display', 'none');
            $("table th").css("background", " #428bca");
            $("table th").css("color", "white");
            $("#div_btnsingreso").css("display", "block");
            $("#div_btnsegreso").css("display", "block");
          } else {
            $('#span_cerrado').css('display', 'block');
            $('#span_abierto').css('display', 'none');
            $("table th").css("background", "lightgray");
            $("table th").css("color", "black");
            $("#div_btnsingreso").css("display", "none");
            $("#div_btnsegreso").css("display", "none");
          }
        });
      }
    });
  } else {
    jAlert('Diario CERRADO, verifique...', 'Giros - Transferencias');
  }
}

function FnAbreDiario(){
FnCalculaTotales();
if($("#estado").val() === 'CERRADO' ){
    jConfirm("¿Esta seguro de ABRIR DIARIO con fecha:"+ $("#fecha_cierre").val(), "Giros - Transferencias", function(r) {
        if(r) {
            $.ajax({async: true,type: "POST",dataType: "json",cache: false,
            data: {opt:'CIERRE',coddiario: $("#codcierrediario").val(), saldof:$("#total_saldo").val(),valor:'ABIERTO'},
            url: "controles/ManteCierreDiario.php"
            }).done(function(respuesta){
            $("#codcierrediario").val(respuesta[0].codigo);
            $("#estado").val(respuesta[0].estado);
            if($("#estado").val() === 'ABIERTO' ){
                $('#span_abierto').css('display','block');
                $('#span_cerrado').css('display','none');
                $("table th").css("background"," #428bca");  $("table th").css("color","white");
                //$("#btn_actualizasaldos").css("display","block");
            }else { 
                $('#span_cerrado').css('display','block'); 
                $('#span_abierto').css('display','none'); 
                $("table th").css("background","lightgray"); $("table th").css("color","black");
                //$("#btn_actualizasaldos").css("display","none");                
                }
                
            if ( $("#fechadehoy").val() === $("#fecha_cierre").val() ){
                $("#div_btnsingreso").css("display","block"); 
                $("#div_btnsegreso").css("display","block");
                
            } else {
                if ($("#tusuario").val() === 'ADMIN'){
                    
                    $("#div_btnsingreso").css("display","block"); 
                    $("#div_btnsegreso").css("display","block");
                } else {
                    
                    $("#div_btnsingreso").css("display","none"); 
                    $("#div_btnsegreso").css("display","none");
                }
            }
            //FnCargaListaDiarios();       
        });                

        }
    });
} else { jAlert ('Diario ya esta CERRADO, verifique...','Giros - Transferencias'); } 
}

function fnActualizaSaldos(){
    $.ajax({async: true,type: "POST",dataType: "json",cache: false,
            data: {opt:'ACTUALIZA',coddiario: $("#codcierrediario").val(),fecha:$("#fecha_cierre").val(),saldofecha:$("#saldo_ala_fecha").val()},
            url: "controles/ManteCierreDiario.php"
            }).done(function(respuesta){
                FnCargaListaDiarios();
                //$("#btn_actualizasaldos").css("display","none");
            });
}

function fnAnulaDetalleIng() {
  if ($("#estado").val() !== 'CERRADO') {
    var puedeanular = fnValidaIdConcepto($("#id_concepto_e").val());
    if (puedeanular === 'SI') {
      if ($("#fechadehoy").val() === $("#fecha_cierre").val()) {
        jConfirm("¿Esta seguro de Anular : \n" + $("#masdatos_ing").val() + " - " + $("#ingreso").val(), "Giros - Transferencias", function (r) {
          if (r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
              data: {opt: 'ANULA', id_detalle: $("#id_detalle").val(), nusuario: $("#nusuario").val()},
              url: "controles/ManteCierreDiario.php"
            }).done(function (respuesta) {
              if ($("#opt_sele").val() === "ing") {
                FnCargaIngresos();
                TotalIngresos();
              } else {
                FnCargaEgresos();
                TotalEgresos();
              }
              FnCalculaTotales();
            });
          }
        });
      } else {
        if ($("#tusuario").val() === 'ADMIN') {
          jConfirm("¿Esta seguro de Anular Ingreso : \n" + $("#masdatos_ing").val() + "\n" + $("#ingreso").val(), "Giros - Transferencias", function (r) {
            if (r) {
              $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {opt: 'ANULA', id_detalle: $("#id_detalle").val(), nusuario: $("#nusuario").val()},
                url: "controles/ManteCierreDiario.php"
              }).done(function (respuesta) {
                if ($("#opt_sele").val() === "ing") {
                  FnCargaIngresos();
                  TotalIngresos();
                } else {
                  FnCargaEgresos();
                  TotalEgresos();
                }
                FnCalculaTotales();
              });
            }
          });
        } else {
          jError("Solo Administrador", "Giros - Transferencias");
        }
      }
    }
  } else {
    jError("Diario esta CERRADO", "Giros - Transferencias");
  }
}

function fnAnulaDetalleEg() {
  if ($("#estado").val() !== 'CERRADO') {
    var puedeanular = fnValidaIdConcepto($("#id_concepto_i").val());
    if (puedeanular === 'SI') {
      if ($("#fechadehoy").val() === $("#fecha_cierre").val()) {
        jConfirm("¿Esta seguro de Anular : \n" + $("#masdatos_eg").val() + "\n" + $("#egreso").val(), "Giros - Transferencias", function (r) {
          if (r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
              data: {opt: 'ANULA', id_detalle: $("#id_detalle").val(), nusuario: $("#nusuario").val()},
              url: "controles/ManteCierreDiario.php"
            }).done(function (respuesta) {
              if ($("#opt_sele").val() === "ing") {
                FnCargaIngresos();
                TotalIngresos();
              } else {
                FnCargaEgresos();
                TotalEgresos();
              }
              FnCalculaTotales();
            });
          }
        });
      } else {
        if ($("#tusuario").val() === 'ADMIN') {
          jConfirm("¿Esta seguro de Anular : \n" + $("#masdatos_eg").val() + "\n" + $("#egreso").val(), "Giros - Transferencias", function (r) {
            if (r) {
              $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {opt: 'ANULA', id_detalle: $("#id_detalle").val(), nusuario: $("#nusuario").val()},
                url: "controles/ManteCierreDiario.php"
              }).done(function (respuesta) {
                if ($("#opt_sele").val() === "ing") {
                  FnCargaIngresos();
                  TotalIngresos();
                } else {
                  FnCargaEgresos();
                  TotalEgresos();
                }
                FnCalculaTotales();
              });
            }
          });
        } else {
          jError("Solo Administrador", "Giros - Transferencias");
        }
      }
    }
  } else {
    jError("Diario esta CERRADO", "Giros - Transferencias");
  }
}

function fnCreaTablaDinero(datosd) {
    var html;
    var i = 0;
    for (var ii = 0; ii < datosd.length; ii++) {
        i = ii + 1;
        html += "<tr id='d[" + ii + "]' class='dato' onclick='fnSeleFilaDinero(this.id);'>";
        html += "<td>" + i + "</td>";
        html += "<td class='ocultame'>" + datosd[ii].cod_diario + "</td>";
        html += "<td align='center'>" + datosd[ii].denominacion + " </td>";
        html += "<td align='center' class='editabled' data-campo='cantidad'> <span>" + datosd[ii].cantidad + "</span></td>";
        html += "<td align='right' >" + datosd[ii].total + "</td>";
        html += "</tr>";
    }
    $("#body_dinero").html(html);
    fnTotalDinero();
}

function fnCargaDinero() {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'DINERO', coddiario: $("#codcierrediario").val(), fecha: $("#fecha_cierre").val()},
        url: "controles/ManteCierreDiario.php",
//        beforeSend: function () {$('#carga').css({display: 'block'});},
//        complete: function () {  $('#carga').css('display', 'none'); },
        success: fnCreaTablaDinero
    });
}

function fnTotalDinero() {
    var sumai = 0;
    var d_saldo_final = 0;
    var d_diferencia = 0;
    $('#tabla_dinero tr.dato').each(function () {
        sumai += parseFloat($(this).find('td').eq(4).text() || 0, 10); //numero de la celda 5*/        
    });
    $("#total_dinero").text(sumai.toFixed(2));
    d_saldo_final = parseFloat($("#total_saldo").val());
    d_diferencia = d_saldo_final - sumai;
    $("#d_saldo_final").text(d_saldo_final.toFixed(2));
    $("#d_total_efectivo").text(sumai.toFixed(2));
    $("#d_diferencia").text(d_diferencia.toFixed(2));
    if (parseFloat(d_diferencia) !== 0) {
        $('#d_diferencia').css('background-color', 'tomato');
        $('#d_saldo_final').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#d_total_efectivo').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#d_diferencia').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#total_dinero').priceFormat({            prefix: '',            centsSeparator: '.',            thousandsSeparator: ','        });
    } else {
        $('#d_diferencia').css('background-color', 'white');
        $('#d_saldo_final').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#d_total_efectivo').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#d_diferencia').priceFormat({
            prefix: '',
            centsSeparator: '.',
            thousandsSeparator: ','
        });
        $('#total_dinero').priceFormat({            prefix: '',            centsSeparator: '.',            thousandsSeparator: ','        });
    }

}

function fnLimpiaTablaDinero() {
    var html;
    html += "<tr >";
    html += "<td></td>";
    html += "<td </td>";
    html += "<td </td>";
    html += "<td </div></td>";
    html += "<td </td>";
    html += "</tr>";
    $("#body_dinero").html( html );

}

function fnSeleFilaDinero(idfila){
    var idfila1=$('#seled').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfila1);
    elTableRow.style.backgroundColor =(elTableRow.style.backgroundColor==="LightSkyBlue")?'white':'LightSkyBlue';
    if (idfila1 !== idfila){
        elTableRow1.style.backgroundColor=(elTableRow.style.backgroundColor==="white")?'LightSkyBlue':'white';       
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
        $("#denominacion").val(elTableCells[2].innerHTML);
        document.getElementById("seled").value =idfila;
        //alert($("#denominacion").val());
}

function MuestraIngresos() {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    url: 'controles/ManteCierreDiario.php',
    data: {coddiario: $("#codcierrediario").val(), opt: 'LISTA_ING'},
    beforeSend: function (objeto) {
      $('#carga').css('display', 'block');
      $("#carga").html("<img src='img/loader.gif'>");
    },
    complete: function (objeto) {
      $('#carga').css('display', 'none');
    },
    success: function (data) { // creamos tabla
      if (data.success) {
        var i = 0;
        $.each(data, function (index, record) {
          if ($.isNumeric(index)) {
            i = i + 1;
            var row = $("<tr id='I[" + i + "]' class='dato' onclick='RecuperaFilaIng(this.id);' > </tr>");
            $("<td>" + " <button id='btn_anulari' onclick='fnAnulaDetalle();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='fa fa-times blue'></span></button>" + "</td>").text(record.itm2).appendTo(row);
            $("<td> </td>").text(i).appendTo(row);
            $("<td class='ocultame'> </td>").text(record.iddetalle).appendTo(row);
            $("<td class='editable' data-campo='concepto'><span> </span></td>").text(record.concepto).appendTo(row);
            $("<td class='editable' data-campo='responsable'> </td>").text(record.responsable).appendTo(row);
            $("<td align='right' class='editable' data-campo='ing'> </td>").text(record.ing).appendTo(row);
            row.appendTo("#IngresosDet");
          }
        });
        TotalIngresos();
        FnCalculaTotales();

      }
// CARGA TABLA
      $('#IngresosDet').dataTable({
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
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() / 2 - 120), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //"bJQueryUI": true,
      });// en dataTables
      
    }
  });
  return false;
}
var anula;
function ListaDistro(id_detalle) {
  $('#tabla_distribucion').dataTable().fnDestroy();
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opt: 'LISTA_DISTRO', iddetalle:id_detalle},
    url: "controles/ManteCierreDiario.php",
    beforeSend: function () { $('#carga').css('display','block'); },
    complete:   function () { $('#carga').css('display', 'none'); },
    success: function (data) {
        var html;        var i = 0;
        for (var x = 0; x < data.length; x++) {
          i = x + 1;
          html += "<tr id='dt[" + i + "]' class='dato' onclick='SeleFilaDistro(this.id);'>";
          html += "<td>" + " <button id='btn_anular_distro' onclick='fnAnulaItmDistro();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs'><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
          html += "<td>" + i + "</td>";
          html += "<td class='ocultame'>" + data[x].iddistribucion + "</td>";
          html += "<td class='ocultame'>" + data[x].grupo + "</td>";
          html += "<td >" + data[x].cuenta + " </td>";
          html += "<td >" + data[x].propietario + " </td>";
          html += "<td class='ocultame'>" + data[x].estado + "</td>";
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
	  var  estado_distro=data[1].estado;
      switch (estado_distro) {
        case '0':
          $("#div_btns_distribucion").css("display", "block");
          $("#btn_inserta_fraccion").css("display", "block");
          //$("#tabla_distribucion tr:nth-child(1)").hide();
          ocultarFila(2,true);
          anula = "NO";
          break;
        case 'P':
          $("#div_btns_distribucion").css("display", "block");
          $("#btn_inserta_fraccion").css("display", "block");
          anula = "SI";
          $("#mensajito").css("display", "none");
          break;
		case 'S':
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
      console.log(estado_distro);
    }
  });
}

function BuscaEnTablaDistro(nrocuenta) {
  var texto_nrocuenta;
  var nro_cuenta;
  var posicion;
  var hallado;
  $("#tabla_distribucion tr").find('td:eq(3)').each(function() {
	texto_nrocuenta = $(this).html();
	posicion = texto_nrocuenta.lastIndexOf(":");
	nro_cuenta = texto_nrocuenta.substr(posicion + 1, 30);
	if (nrocuenta.trim() === nro_cuenta.trim()) {
	  hallado = nro_cuenta.trim();
	}
  });
  return hallado;
}

function fnAnulaItmDistro() {
if (anula==="SI") {  
  jConfirm("¿Esta seguro de Anular : \n" + NroCuenta + "\n" + agente_asociado + "\n S/. " + $("#fraccion").val(), "Giros - Transferencias", function (r) {
    if (r) {
      $("#dialogo_distribucion").dialog("close");
      $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'DEL_ITM_DISTRO', iddetalle: $("#id_distro").val()},
        url: "controles/ManteCierreDiario.php",
        success:function () { $("#dialogo_distribucion").dialog("open"); }
      });
    }
  });
  }
}

var NroCuenta,agente_asociado;
function SeleFilaDistro(id_fila){
  var id_fila1 = $('#seledistro').val();
  var elTableRow = document.getElementById(id_fila);
  var elTableRow1 = document.getElementById(id_fila1);
  
  elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
  if (id_fila1 !== id_fila) {
    elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
  }
  var elTableCells = elTableRow.getElementsByTagName("td");  
  $("#id_distro").val(elTableCells[2].innerHTML);
  $("#fraccion").val(elTableCells[5].innerHTML);
  agente_asociado=elTableCells[4].innerHTML;
  NroCuenta=elTableCells[3].innerHTML;
  $('#seledistro').val(id_fila);
  //alert($("#id_distro").val());  
}

function InsertaItmDistro(cuenta_destino) { // cuenta_destino, para saber si es Agente o Usuario
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opt: 'IN_ITM_DISTRO', iddetalle: $("#id_detalle").val(), fraccion: $("#txt_fraccion_distro").val(), cuentadestino: cuenta_destino, 
          fechamov: $("#fechacierrediario").val(), usuario: $("#nusuario").val()},
    url: "controles/ManteCierreDiario.php",
    beforeSend: function () { $('#carga').css('display','block');},
    complete:   function () { $('#carga').css('display', 'none');}

  }).done(function (respuesta) {
      $("#dialogo_distribucion").dialog("open");
    });
}

function InsertaItmDistro_S(cuenta_destino) { // cuenta_destino, para saber si es Agente o Usuario
  var nro_cuenta_s = cuenta_destino + '::' + $('#lista_sucursales_distro option:selected').html() ;
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opt: 'IN_ITM_DISTRO_S', iddetalle: $("#id_detalle").val(), fraccion: $("#txt_fraccion_distro").val(), cuentadestino: nro_cuenta_s, 
          fechamov: $("#fechacierrediario").val(), usuario: $("#nusuario").val()},
    url: "controles/ManteCierreDiario.php",
    beforeSend: function () { $('#carga').css('display','block');},
    complete:   function () { $('#carga').css('display', 'none');}

  }).done(function (respuesta) {
      $("#dialogo_distribucion").dialog("open");
    });
}

function fnCancelaDistro(){
jConfirm("¿Esta seguro de Cancelar Distribucion ? \n se Borraran TODOS LOS DATOS." , "Giros - Transferencias", function (r) {
    if (r) {
      $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'CANCELA_DISTRO', iddetalle: $("#id_detalle").val()},
        url: "controles/ManteCierreDiario.php",
        complete: function() { $("#dialogo_distribucion").dialog("close"); $("#lista_agentes").css("display", "none"); $("#lista_asociados").css("display", "none");}
      });
    }
  });
  console.log($("#id_detalle").val());//
}

function fnValidaIdConcepto(idconcepto) {
  var rpta;
  switch (idconcepto) {
    case '17': //INGRESO DE EFECTIVO DESDE AGENTE
      rpta = 'NO';      break;
    case '18': //INGRESO DE EFECTIVO DESDE ASOCIADO
      rpta = 'NO';      break;
    case '21': // TRASLADO DE EFECTIVO DESDE SUCURSAL
      rpta = 'NO';      break;
    case '22': //saldo inicial
      rpta = 'NO';      break;
    
    default:
      rpta = 'SI';
  }
  
  return rpta;
}

function fnAplicaDistribucion() {
  jConfirm("¿Esta seguro de hacer la DISTRIBUCION de: S/. " + $("#sumafraccion").val(), "Distribuciónd e Efectivo", function (r) {
    if (r) {
      var grupo, nro_cuenta, monto_fraccion,posicion,id_concepto,nrocuenta,codsucu;
      $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: 'LISTA_DISTRO', iddetalle: $("#id_detalle").val()},
        url: "controles/ManteCierreDiario.php",
        beforeSend: function () { $('#carga2').css('display', 'block'); },
        complete:   function () { $('#carga2').css('display', 'none');  }
      }).done(function (respuesta) {
        //jWarning("Se creó un Nuevo Diario con fecha: " + $("#fechacierrediario").val().substring(0, 10), "Transferencias - Cierre Diario");
		procesado=respuesta[1].estado;
        console.log(procesado);
        if ( procesado === 'P' ){
        for (var i = 0; i < respuesta.length; i++) {
          grupo=respuesta[i].grupo; // especifica si pertenece a Agente, Sucursal, Asociado
          nro_cuenta=respuesta[i].cuenta;
		  codsucu=respuesta[i].cuenta;
          posicion = nro_cuenta.lastIndexOf(":"); 
		  nro_cuenta = nro_cuenta.substr(posicion + 1, 30); 
		  nro_cuenta=nro_cuenta.trim();
          monto_fraccion=respuesta[i].fraccion;
          nrocuenta=respuesta[i].cuenta;
//        console.log(nro_cuenta);
//        console.log(respuesta[i].fraccion);
          switch (grupo) {
            case 'A':
              fnInsertaCuentaAgente(nro_cuenta,monto_fraccion);
              FnInsertaFraccionEnEgresos(monto_fraccion,'32',nrocuenta);
              break;
            case 'C':
              fnInsertaCuentaAsociado(nro_cuenta,monto_fraccion);
              FnInsertaFraccionEnEgresos(monto_fraccion,'33',nrocuenta);
              break;
			case 'S':              
              FnInsertaFraccionEnEgresos(monto_fraccion,'38',nrocuenta);
			  FnInsertaFraccionEnIngresos(monto_fraccion,'39',nrocuenta,codsucu); // HACE UN INGRESO EN LA SUCURSAL DE DESTINO
              break;  
          }
        }
        jWarning("Verifique Saldos...","Distribución");
        fnMarcaDistro();
        FnCargaEgresos();
      } else { if(procesado==='D'){
              jError ("Ya fue DISTRIBUIDO","Distribución");
            } else {
                if(respuesta[0].propietario==="---") {
                  jError ("IMPOSIBLE hacer la Distribución, Verifique...","Distribución");
                }
            }
      } 
              
      });
      
    }
  });
}

function fnInsertaCuentaAgente(nro_cuenta,monto_fraccion){
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: "IT",nrocuenta:nro_cuenta,nrocuentadest:$('#id_detalle').val().trim(),dinero:'C',monto:monto_fraccion,ttran:'168',
                origen:$('#codsucursal').val(),idgiro:'0',nroop:'00-00',nromovs:'0',observa:$('#nombresucursal').val(),
                respo:'Sistema',modifica:$('#nusuario').val(),fechamov:$('#fechacierrediario').val(),opsql:'I' },
        url: "controles/ManteAgentes.php"
//        beforeSend: function () { $('#carga2').css('display', 'block'); },
//        complete:   function () { $('#carga2').css('display', 'none');  }
      });
}

function fnInsertaCuentaAsociado(nro_cuenta,monto_fraccion) {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opcion: "IT", nrocuenta:nro_cuenta, nrocuentadest:$('#id_detalle').val(), monto:monto_fraccion, nroop: '---', ttran:'169',
          destino: $("#codsucursal").val(), idgiro: '0', observa: $('#nombresucursal').val(), respo: 'Sistema', usuacrea: $('#nusuario').val(),
          fechamov: $('#fechacierrediario').val(), opsql:'I'},
    url: "controles/ManteCuentaUsuario.php"
//        beforeSend: function () { $('#carga2').css('display', 'block'); },
//        complete:   function () { $('#carga2').css('display', 'none');  }
  });
}

function TotalesDistribucion() {
  var suma_frac = 0; 
  $('#tabla_distribucion tr.dato').each(function () { //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    if ($(this).find('td').eq(7).text() !== '0') {
      suma_frac += parseFloat($(this).find('td').eq(7).text() || 0, 10); //numero de la celda 5*/    
    }
  });
  if (suma_frac === 0){
    $("#suma_fraccion").text('0.00'); // campo en la tabla
    $("#sumafraccion").val('0.00');        
  }
  else {
    $("#sumafraccion").val(suma_frac.toFixed(2));
    $("#suma_fraccion").text(suma_frac.toFixed(2));    
    $('#suma_fraccion').priceFormat({prefix: '', centsSeparator: '.', thousandsSeparator: ','});
  }
 
}

function VerificaFraccion(){
  var suma=0; var sumafraccion=0; var fraccion=0; distribucion=0;
  $("#txt_fraccion_distro").val( $("#txt_fraccion_distro").val().replace(",", "") );
  sumafraccion=parseFloat( $("#sumafraccion").val() );
  fraccion=parseFloat($("#txt_fraccion_distro").val());
  suma=sumafraccion+fraccion;
  distribucion=parseFloat($('#ingreso').val());
//  console.log($('#ingreso').val());
//  console.log( sumafraccion );
//  console.log(fraccion);
//  console.log(suma);
  if (suma <= distribucion){
    return 'SI';
  } else{
    return 'NO';
  }
}

function FnInsertaFraccionEnEgresos(fraccion,id_concepto,cuenta) {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    url: "controles/ManteCierreDiario.php",
    data: {opt: 'IE', coddiario: $("#codcierrediario").val(), monto: fraccion, idconcepto:id_concepto,
      sucu_destino:'XX', concepto:cuenta , responsable: $("#codsucursal").val(), usuamodi: $("#nusuario").val()}
    //complete: FnCargaEgresos
  });
  return false;
}

function FnInsertaFraccionEnIngresos(fraccion,id_concepto,cuenta,codsucu) {
  var n_coddiario=$("#codcierrediario").val();
  var n_concepto=$("#codsucursal").val();
  n_coddiario=codsucu.substr(0,3) + n_coddiario.substr(3,10);
  n_concepto=n_concepto+'>>'+codsucu.substr(0,3);
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    url: "controles/ManteCierreDiario.php",
    data: {opt: 'II', coddiario:n_coddiario, monto: fraccion, idconcepto:id_concepto,
      sucu_destino:'XX', concepto:n_concepto, responsable:n_concepto, usuamodi: $("#nusuario").val()}
    //complete: FnCargaEgresos
  });
  return false;
}

function fnMarcaDistro() {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opt: 'MARCA_DISTRO', usua: $("#nusuario").val(),iddetalle: $("#id_detalle").val()},
    url: "controles/ManteCierreDiario.php",
    complete: function () {
      $("#dialogo_distribucion").dialog("close");
      $("#lista_agentes").css("display", "none");
      $("#lista_asociados").css("display", "none");
    }
  });
}

function fnCreaTablaUsuarioCuenta(jsoncxu){
    var html;
    for (var contador = 0; contador < jsoncxu.length; contador++) {
        html += "<tr id='cu[" + contador + "]' ondblclick='fnSeleccionaCuentaAsociado(this.id);'>";
        var i = contador + 1;
        html += "<td>" + jsoncxu[contador].nusuario +  "</td>";
        html += "<td>" + jsoncxu[contador].iniciales + "</td>";
        html += "<td>" + jsoncxu[contador].nrocuenta + "</td>";
        html += "</tr>";
    } 
    $("#tbody_usuarioucenta").html(html);
}

function fnMuestraUsuarioCuenta(valorabuscar,optsql) {
    if ( valorabuscar !=='' )
    {    
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,     
            data: {opcion: "CxU2", valor: valorabuscar, idempresa:$('#codsucursal').val().substr(0,1),opsql: optsql}, 
            url: "controles/ManteCuentaUsuario.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete: function (objeto) {$('#carga').css('display', 'none');},
            success: fnCreaTablaUsuarioCuenta
        });
    } else {
        jAlert("Ingrese datos a buscar...", "Cuentas");
    }
    return false;
}

function fnSeleccionaCuentaAsociado(idfila) {    
    var idfilac = $('#sele_cu').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
        $("#txt_asociado").val( elTableCells[0].innerHTML + '=>' + elTableCells[1].innerHTML + ':' + elTableCells[2].innerHTML );
        $("#nrocuenta_asociado").val( elTableCells[2].innerHTML );
        //alert($("#cta_destino").val());
     $("#sele_cu").val(idfila);
     $('#dialogo_asociados').dialog('close');
}

function fnCreaTablaUsuarioAgente(jsoncxu){
    var html;
    for (var contador = 0; contador < jsoncxu.length; contador++) {
        html += "<tr id='ag[" + contador + "]' ondblclick='fnSeleccionaCuentaAgente(this.id);'>";
        var i = contador + 1;
        html += "<td>" + jsoncxu[contador].nrocuenta +  "</td>";
        html += "<td>" + jsoncxu[contador].iniciales + "</td>";
        html += "<td>" + jsoncxu[contador].desc_banco + "</td>";
        html += "</tr>";
    } 
    $("#tbody_cuentaagente").html(html);
}

function fnMuestraUsuarioAgente(valorabuscar,optsql) {
    if ( valorabuscar !=='' ){
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,     
            data: {opcion: "AGENTES_DIARIO", valor: valorabuscar,idempresa:$('#codsucursal').val().substr(0,1), opsql: optsql}, 
            url: "controles/ManteBancos.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete: function (objeto) {$('#carga').css('display', 'none');},
            success: fnCreaTablaUsuarioAgente
        });
    } else {
        jAlert("Ingrese datos a buscar...", "Cuentas");
    }
    return false;
}

function fnSeleccionaCuentaAgente(idfila) {    
    var idfilac = $('#sele_ag').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
        $("#txt_agente").val( elTableCells[0].innerHTML + '=>' + elTableCells[1].innerHTML + ':' + elTableCells[2].innerHTML );
        $("#nrocuenta_agente").val( elTableCells[0].innerHTML );
        console.log($("#nrocuenta_agente").val());
     $("#sele_ag").val(idfila);
     $('#dialogo_agentes').dialog('close');
}

function fnInsertaTransaccionAsociado() {
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opcion: "IT", nrocuenta: $('#nrocuenta_asociado').val(), nrocuentadest: '---', monto: $('#egreso').val(), nroop: '---', ttran: "168",
    destino: $("#codsucursal").val(), idgiro: '0', observa: $('#masdatos_eg').val(), respo: $('#responsable_eg').val(), 
    usuacrea: $('#nusuario').val(), fechamov: $('#fechacierrediario').val(), opsql:"I"},
    url: "controles/ManteCuentaUsuario.php",
    beforeSend: function(objeto)  {   },
    complete: function(objeto)    {   }
  });
}

function fnInsertaTransaccionAgente(opcion) {
    console.log("opcion="+opcion);
//    console.log(opcion);
    var tipotransaccion;
    var op_dinero='';
    if (opcion === "36") {
        tipotransaccion = "201";
        op_dinero = 'C';        
    }
    if (opcion === "70") {
        tipotransaccion = "200";
        op_dinero = 'E';        
    }
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opt: "IT", nrocuenta: $('#nrocuenta_agente').val(), nrocuentadest: '---', dinero: op_dinero, monto: $('#egreso').val(), ttran: tipotransaccion,
            origen: $("#codsucursal").val(), idgiro: '0', nroop: '---', nromovs: '0', observa: $('#masdatos_eg').val(),
            respo: $('#responsable_eg').val(), modifica: $('#nusuario').val(), fechamov: $('#fechacierrediario').val(), opsql: 'I'},
        url: "controles/ManteAgentes.php"
    });
    console.log("opcion_="+opcion);
    console.log("tipotran="+tipotransaccion);    
    console.log("dinero="+op_dinero);
}

function ocultarFila(num,ver) {
  dis= ver ? '' : 'none';
  tab=document.getElementById('tabla_distribucion');
  tab.getElementsByTagName('tr')[num].style.display='none';
  console.log(num);
}

function VerificaImprimirDinero(){
    var usuario=$("#tusuario").val();
    var fecha_elegida = $('#fecha_cierre').val();
    var fecha_php = $('#fechadehoy').val();    
    var rpta;
    if (Date.parse(fecha_elegida) < Date.parse(fecha_php)) {
        
            if (usuario === 'ADMIN')    { rpta='SI';}
            if (usuario === 'OPERADOR') { rpta='NO';}
        
    }
    if (Date.parse(fecha_elegida) === Date.parse(fecha_php)) {
        
            if (usuario === 'ADMIN')    { rpta='SI';}
            if (usuario === 'OPERADOR') { rpta='SI';}
        
    }
    
    return rpta;
}
