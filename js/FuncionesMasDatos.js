
function fnMuestraMasDatos() {
  $('#TMasDatos').dataTable().fnDestroy();  
  $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {opcion: "LISTA",idempresa:$("#codsucursal").val()},
        url: "controles/ManteMasDatos.php",
        beforeSend: function (objeto) {$('#carga').css('display', 'block');$("#carga").html("<img src='img/loader.gif'>");},
        complete: function (objeto) {$('#carga').css('display', 'none');},
        success: fnCreaTablaMasDatos
    });
    return false;
}

function fnCreaTablaMasDatos(jsonmovs) {
//LimpiaTabla();
    var html;
    for (var contador = 0; contador < jsonmovs.length; contador++) {
        html += "<tr id='c[" + contador + "]' class='dato' onclick='fnSeleccionaMasDatos(this.id);'>";
        var i = contador + 1;
        html += "<td>" + " <button id='btn_anular' onclick='fnAnulaMasDatos();'  title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove blue'></span></button>" + "</td>";
        html += "<td>" + " <button id='btn_editar' onclick='fnEditaMasDatos();'  title='Editar' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-pencil'></span></button>" + "</td>";        
        html += "<td style='display: none'>" + jsonmovs[contador].idmasdatos + "</td>";
        html += "<td >" + jsonmovs[contador].descripcion + "</td>";
        html += "</tr>";
    }

    $("#body_masdatos").html(html);    
    $('#TMasDatos').dataTable({
    "sScrollY": ($(window).height() - 220), "bPaginate": false,
        "bLengthChange": false, "bFilter": false, "bSort": true,
        "bInfo": false, "bAutoWidth": true, "bSortClasses": false //, "bJQueryUI": true
    });

}

function fnInsertaMasDatos() {
$('#TMasDatos').empty();  
$('#TMasDatos').dataTable().fnDestroy();
$.ajax({async: true, type: "POST", dataType: "json", cache: false,    
    data: {opcion: 'INSERTA', descripcion:$("#descripcion").val(),idempresa:$("#codsucursal").val()},
    url: 'controles/ManteMasDatos.php',
    complete: function (objeto) { fnMuestraMasDatos(); }
    
  }); 
return false;
}
var edita="N";
function fnSeleccionaMasDatos(idfila) {
    var idfilac = $("#sele_as").val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");

    var id = elTableCells[2].innerHTML;   // id = id.substring(6,id.length -7); 
    var descripcion = elTableCells[3].innerHTML;
    $("#id").val(id);
    $("#descripcion").val(descripcion);
    console.log($("#id").val());
    $("#sele_as").val(idfila);
}

function fnEditaMasDatos(){
  fnHabilita();
  edita="S";
  $("#btn_nuevo").attr("disabled",true);
}

function fnGuardaEditaMasDatos(){     
        
        $('#TMasDatos').dataTable().fnDestroy();
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opcion: 'EDITA', idmasdatos: $("#id").val(), descripcion: $("#descripcion").val()},
          url: "controles/ManteMasDatos.php",          
          complete: function (objeto) {fnMuestraMasDatos();}
          
        });
}

function fnAnulaMasDatos() {
  if ($("#tipo_usuario").val().trim() === "ADMIN") {
    jConfirm("Seguro de Eliminar: " + $('#descripcion').val(), "Giros - Transferencias", function (r) {
      if (r) {
        
        $('#TMasDatos').dataTable().fnDestroy();
        $.ajax({async: true, type: "POST", dataType: "json", cache: false,
          data: {opcion: 'ANULA', idmasdatos: $("#id").val()},
          url: "controles/ManteMasDatos.php",          
          //success: function (data) {  }
          complete: function (objeto) { fnMuestraMasDatos(); }
        });
      }
    });
  } else {
    jError('Solo Administrador', 'Giros - Transferencias');
  }
}
  
$(document).ready(function () {
fnMuestraMasDatos();
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
              fnGuardaEditaMasDatos();
              fnDeshabilita();
              $("#btn_nuevo").attr("disabled", false);
              
            }
          });
        }
        else {
          jConfirm('¿Esta seguro de agregar: ' + $('#descripcion').val(), "Giros - Transferencias", function (r) {
            if (r) {
              fnInsertaMasDatos();
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
        $('#btn_nuevo').attr("disabled",false);
    });

    $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#TMasDatos tbody>tr").hide();
            $("#TMasDatos td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {
            $("#TMasDatos tbody>tr").show();
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
    $("#TMasDatos tbody").html(html);
}

function fnLimpia() {
    $("#descripcion").val('');
    

}

function fnDeshabilita() {
    $("#descripcion").attr('disabled', true);
    $("#listagastos").attr('disabled', true);
    $("#btn_guardar").attr('disabled', true);
    $("#btn_cancelar").attr('disabled', true);
    
}

function fnHabilita() {
    $("#descripcion").attr('disabled', false);
    
    $("#btn_guardar").attr('disabled', false);
    $("#btn_cancelar").attr('disabled', false);
    $("#descripcion").focus();
}

