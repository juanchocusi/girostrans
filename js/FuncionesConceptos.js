function fnMuestraConceptos() {  
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
    url: 'controles/ManteConceptos.php',
    data: {opcion: 'LISTA'},    
    beforeSend: function (objeto) {$('#carga').css('display', 'block');$("#carga").html("<img src='img/loader.gif'>");},
    complete: function (objeto) {$('#carga').css('display', 'none');},
    success: function (data) {
      if (data.success) {
        var i=0;
        $.each(data, function (index, record) {
          if ($.isNumeric(index)) {
            i=i+1;
            var row = $("<tr id='c[" + i + "]' onclick='fnSeleccionaConceptos(this.id);' > </tr>");
            $("<td>" + " <button id='btn_anular' onclick='fnAnulaConceptos();'  title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='fa fa-times blue'></span></button>" + "</td>").text(record.itm2).appendTo(row);
            $("<td>" + " <button id='btn_editar' onclick='fnEditaConceptos();'  title='Editar' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='fa fa-pencil-square-o blue'></span></button>" + "</td>").text(record.itm3).appendTo(row);            
            $("<td> </td>").text(i).appendTo(row);
            $("<td class='ocultame'> </td>").text(record.idconcepto).appendTo(row);
            $("<td />").text(record.descripcion).appendTo(row);
            $("<td />").text(record.grupo).appendTo(row);            
            row.appendTo("#mitable");
          }
        });
      }

      $('#mitable').dataTable({
        "fnDrawCallback": function (oSettings) {
          // Need to redo the counters if filtered or sorted 
          if (oSettings.bSorted || oSettings.bFiltered) {
            for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++)
            { $('td:eq(2)', oSettings.aoData[ oSettings.aiDisplay[i] ].nTr).html(i + 1);}
          }
        },
        "aoColumnDefs": [{"bSortable": false, "aTargets": [0]}],
        "aaSorting": [[1, 'asc']], "sScrollY": ($(window).height() - 180),  "bPaginate": false, 
        "bLengthChange": false,    "bFilter": false,                        "bSort": true,        
        "bInfo": false,            "bAutoWidth": true,                      "bSortClasses": false //"bJQueryUI": true,
      }); 
    }
  }); 
return false;  
}

function fnInsertaConcepto() {
$('#mitable').empty();  
$('#mitable').dataTable().fnDestroy();
$.ajax({async: true, type: "POST", dataType: "json", cache: false,
    url: 'controles/ManteConceptos.php',
    data: {opcion: 'INSERTA', descripcion:$("#descripcion").val(), idgasto:$("#listagastos").val()},
    complete: function (objeto) { fnMuestraConceptos(); }
    
  }); 
return false;
}
var edita="N";
function fnSeleccionaConceptos(idfila) {

    var idfilac = $("#sele_as").val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    var id = elTableCells[3].innerHTML;   // id = id.substring(6,id.length -7); 
    var descripcion = elTableCells[4].innerHTML;
    $("#id").val(id);
    $("#descripcion").val(descripcion);
    //alert($("#id").val());
    $("#sele_as").val(idfila);
}

function fnEditaConceptos(){
  fnHabilita();
  edita="S";
  $("#btn_nuevo").attr("disabled",true);
}

function fnGuardaEditaConceptos(){
  
   
        $('#mitable').empty();  
        $('#mitable').dataTable().fnDestroy();
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opcion: 'EDITA', idconcepto: $("#id").val(), descripcion: $("#descripcion").val(), idgasto: $("#listagastos").val()},
          url: "controles/ManteConceptos.php",          
          //success: function (data) {  }
          complete: function (objeto) { fnMuestraConceptos(); }
        });
}

function fnAnulaConceptos() {
  if ($("#tipo_usuario").val().trim() === "ADMIN") {
    jConfirm("Seguro de Eliminar: " + $('#descripcion').val(), "Giros - Transferencias", function (r) {
      if (r) {
        $('#mitable').empty();  
        $('#mitable').dataTable().fnDestroy();
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opcion: 'ANULA', idconcepto: $("#id").val()},
          url: "controles/ManteConceptos.php",          
          //success: function (data) {  }
          complete: function (objeto) { fnMuestraConceptos(); }
        });
      }
    });
  } else {
    jError('Solo Administrador', 'Giros - Transferencias');
  }
}
  
$(document).ready(function () {

fnMuestraConceptos();
// redimensiona altura de tabla con respecto a la ventana principal
$(window).resize(function() {
  //console.log($(window).height());
  $('.dataTables_scrollBody').css('height', ($(window).height() - 180));
});
    fnDeshabilita();
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $( "#btn_nuevo" ).tooltip({         show: {effect: "slideDown", delay: 250  }});
    $( "#btn_cancelar" ).tooltip({      show: {effect: "explode",   delay: 250  }});
    $( "#btn_guardar" ).tooltip({       show: {effect: "explode",   delay: 250  }});
    
    $("#menu-toggle").tooltip({show: {effect: "slideDown", delay: 250}});

    $('#btn_nuevo').click(function () {
        fnLimpia();
        fnHabilita();
        $('#btn_nuevo').attr("disabled",true);
    });

    $('#btn_guardar').click(function () {
    if ($("#tipo_usuario").val().trim() === "ADMIN") {
      if ($("#descripcion").val().trim() === '' || $("#listagrupo").val() === '0') {
        jError('Datos incompletos, Verifique...', 'Giros - Transferencias');
      } else {
        if (edita === "S") {
          jConfirm('¿Esta seguro de EDITAR?', "Giros - Transferencias", function (r) {
            if (r) {
              fnGuardaEditaConceptos();
              fnDeshabilita();
              $("#btn_nuevo").attr("disabled", false);
            }
          });
        }
        else {
          jConfirm('¿Esta seguro de agregar CONCEPTO: ' + $('#descripcion').val(), "Giros - Transferencias", function (r) {
            if (r) {

              fnInsertaConcepto();
              fnDeshabilita();
              $("#btn_nuevo").attr("disabled", false);
            }
          });
        }
      }
    } else {
      jError('Solo Administrador', 'Giros - Transferencias');
    }
  });

    $('#btn_cancelar').click(function () {
        fnLimpia();
        fnDeshabilita();

    });

//    $("#btn_anular").click(function (){
//        if ( $('#descripcion').val().trim() === "" ){
//            jError("Seleccione, antes de proceder", "Giros - Transferencias");
//        }
//        else
//        {
//            fnAnulaConceptos();
//        }
//        
//    });

    $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#mitable tbody>tr").hide();
            $("#mitable td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {
            $("#mitable tbody>tr").show();
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

function fnLimpiaTabla() {
    var html;
    html += "<tr>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "</tr>";
    $("#mitable tbody").html(html);
}

function fnLimpia() {
    $("#descripcion").val('');
    $("#listagastos").prop("selectedIndex", 0);

}

function fnDeshabilita() {
    $("#descripcion").attr('disabled', true);
    $("#listagastos").attr('disabled', true);
    $("#btn_guardar").attr('disabled', true);
    $("#btn_cancelar").attr('disabled', true);
    
}

function fnHabilita() {
    $("#descripcion").attr('disabled', false);
    $("#listagastos").attr('disabled', false);
    $("#btn_guardar").attr('disabled', false);
    $("#btn_cancelar").attr('disabled', false);
    $("#descripcion").focus();
}

