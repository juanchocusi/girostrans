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
    if ($(this).find('td').eq(17).text() === 'Pendiente') {      $(this).css('color', 'Blue'); } ;
    if ($(this).find('td').eq(21).text() === 'S') { $(this).css('color', 'tomato'); } ;
    //if ($(this).find('td').eq(27).text() !== '---') { $(this).css('font-weight', 'bold'); };//boleta
  });

  $("#t_importe").text(sumai.toFixed(2));
  $("#t_cargo").text(sumac.toFixed(2));
  $("#t_otros").text(sumao.toFixed(2));
  $("#t_total").text(sumat.toFixed(2));
  //console.log(sumat);
}

function FnMuestraGiros() {
  var sucursal = $('#lista_sucursales').val();
  var op=$('#lista_sucursales').val();
  if (op !== "T"){ op='S'; } // S = Solo una Susursal
  else { op="T"; } // T = todas las Sucursales
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    data: {opcion:'MOSTRAR', codsucu: sucursal, empresa: 'M', fechai: $('#fechai').val(), fechaf: $('#fechai').val(), opt: op},
    url: "controles/ManteInicio.php",
    beforeSend: function (objeto) { $('#carga').css({display: 'block'});    },    
    //complete: function () {      $('#carga').css('display', 'none');    },
    success: CreaTablaGiros
  });
  return false;
}

function CreaTablaGiros(json) {
  var html;  var i = 0;
  for (var x = 0; x < json.length; x++) {
    i = x + 1;
    html += "<tr id='G[" + x + "]' class='dato' onclick='fnSeleFila(this.id);'>";
      html += "<td>" + i + "</td>";
      html += "<td>" + json[x].cod_girosucu +               "</td>";
      html += "<td>" + json[x].fechahora_registro +         "</td>";
      html += "<td>" + json[x].dni_rucb +                   "</td>";
      html += "<td>" + json[x].beneficiario +               "</td>";
      html += "<td>" + json[x].dni_ruc +                    "</td>";    

      html += "<td>" + json[x].remitente +                  "</td>";    
      html += "<td>" + json[x].cod_sucursald +              "</td>";
      html += "<td align='right'>" + json[x].importe_giro + "</td>";
      html += "<td align='right'>" + json[x].cargo_giro +   "</td>";
      html += "<td align='right'>" + json[x].otros +        "</td>";

      html += "<td align='right'>" + json[x].total +        "</td>";
      html += "<td >" + json[x].nro_cuenta +                "</td>";
      html += "<td >" + json[x].nro_operacion +             "</td>";
      html += "<td >" + json[x].usuario_registra +          "</td>";
      html += "<td >" + json[x].observagiro +               "</td>";

      html += "<td >" + json[x].ciudad_destino + "</td>";
      html += "<td >" + json[x].usuario_entrega +           "</td>";
      html += "<td >" + json[x].fechahora_entrega +         "</td>";    
      html += "<td class='ocultame'>" + json[x].nom_sucursal +   "</td>";
      html += "<td >" + json[x].datapago +                  "</td>";

      html += "<td class='ocultame'>" + json[x].anulado +     "</td>";  
      html += "<td >" + json[x].data_edita +                "</td>";
      html += "<td class='ocultame'>" + json[x].nro_boleta +  "</td>";
    html += "</tr>";
  }
  $('#carga').css('display', 'none');
  $("#BodyGiros").html( html );
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
    "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 150), "bPaginate": false,
    "bLengthChange": false, "bFilter": false, "bSort": true,
    "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
  });

}

function fnSeleFila(idfila) {
  var idfila1 = $('#sele_f').val();
  var elTableRow = document.getElementById(idfila);
  var elTableRow1 = document.getElementById(idfila1);
  var color=elTableRow.style.backgroundColor;
  elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
  if (idfila1 !== idfila) {
    elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
  }
  var elTableCells = elTableRow.getElementsByTagName("td"); 

//  document.getElementById("id_detalle").value = elTableCells[2].innerHTML;
//  $("#id_concepto_i").val(elTableCells[3].innerHTML);
//  var concepto_i = elTableCells[4].innerHTML;  
//  document.getElementById("masdatos_ing").value = concepto_i.substring(7, concepto_i.length - 8);
//  var respo_i = elTableCells[5].innerHTML;
//  document.getElementById("responsable_ing").value = respo_i.substring(7, respo_i.length - 8);
//  var ing = elTableCells[6].innerHTML;
//  document.getElementById("ingreso").value = ing.substring(7, ing.length - 8);
//
  document.getElementById("sele_f").value = idfila;
//  document.getElementById("opt_insert").value = ""; // valor que permite agregar un nuevo item
//  $("#opt_sele").val("ing"); //permite saber que tabla sera actualizada
//  //alert($("#id_concepto").val());
  console.log(idfila);
}

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
      "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 150), "bPaginate": false,
      "bLengthChange": false, "bFilter": false, "bSort": true,
      "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
    });
    objDataTable.fnSettings().oScroll.sY = 151;
    objDataTable.fnDraw();

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
    beforeShow: function () {      $(".ui-datepicker").css('font-size', 12);    },
    numberOfMonths: 1,
    //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
    onSelect: function (dateText) {          }
  });

  $("#fechaf").datepicker({dateFormat: 'yy/mm/dd', showOn: 'both', buttonImageOnly: true, changeYear: true,
    buttonImage: 'img/calendar.ico',
    beforeShow: function () {      $(".ui-datepicker").css('font-size', 12);    },
    numberOfMonths: 1,
    //onSelect: function (dateText){FnMuestraCierre( $('#fecha_cierre').val(),'T'); FnCargaListaDiarios();}*/
    onSelect: function (dateText) {        }
  });
  
  $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
    });
  
  $("#btn_buscar").click(function(){
   jConfirm("Se mostraran movimientos con fecha: \n "+ $("#fechai").val(), "Giros - Transferencias", function(r) {
        if(r) 
        {
         $('#TablaGiros').dataTable().fnDestroy();     
         FnMuestraGiros();
       }
   });    
});

  $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#TablaGiros tbody>tr").hide();
            $("#TablaGiros td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
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
  
  
});