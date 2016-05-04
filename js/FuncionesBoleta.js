function fnCreaTablaBoletas(jsonboleta)
{
var i=0;
    var html;
    for (var x = 0; x < jsonboleta.length; x++) {
        html += "<tr id='b[" + x + "]' onclick='fnSeleccionaBoleta(this.id);'>";
        i = x + 1;
        html += "<td>" + "<button id='btn_anular' onclick='fnAnulaBoleta();' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-remove'></span></button>" + "</td>";
        html += "<td>" + i + "</td>";
/*2*/   html += "<td style='display: none'>"    +  jsonboleta[x].idboleta + "</td>";
        html += "<td >"                         +  jsonboleta[x].numero + "</td>";
        html += "<td>"                          +  jsonboleta[x].dnicliente + "</td>";
        html += "<td>"                          +  jsonboleta[x].nombres + "</td>";
        html += "<td style='display: none'>"    +  jsonboleta[x].direccion + "</td>";
/*7*/   html += "<td style='display: none'>"    +  jsonboleta[x].descripcion + "</td>";
        html += "<td >"                         +  jsonboleta[x].fecha_boleta + "</td>";
        html += "<td align='right'>"            +  jsonboleta[x].importe + "</td>";
        html += "<td style='display: none'>"    +  jsonboleta[x].usuaimprime + "</td>";
        html += "<td >"                         +  jsonboleta[x].fechahora_crea + "</td>";
        html += "<td style='display: none'"     +  jsonboleta[x].observa + "</td>";
        html += "<td style='display: none'>"    +  jsonboleta[x].anulado+ "</td>";
        html += "</tr>";
    } 
    $("#body_boletas").html(html);
}

function fnSeleccionaBoleta(idfila) {    
    var idfilac = $('#sele').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
        var serie = elTableCells[3].innerHTML;
        serie = serie.substring(0, 3);
        var numero = elTableCells[3].innerHTML;
        numero = numero.substring(4);        
        $("#serie").val(serie);
        $("#numero").val(numero);
        $("#idboleta").val(elTableCells[2].innerHTML);
        $("#dni").val(elTableCells[4].innerHTML);
        $("#nombres").val(elTableCells[5].innerHTML);
        $("#direccion").val(elTableCells[6].innerHTML);
        $("#descripcion").val(elTableCells[7].innerHTML);
        $("#fecha").val(elTableCells[8].innerHTML);
        $("#importe").val(elTableCells[9].innerHTML);
        $("#registra").val(elTableCells[10].innerHTML);
        $("#fechaimpresion").val(elTableCells[11].innerHTML);
        $("#observacion").val(elTableCells[12].innerHTML);
        
        $("#sele").val(idfila);
}

function fnBuscaBoleta(opListaBusca) {
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,     
            data: {opcion:"BUSCA", valor:$("#busca_boleta").val(), fechai:$("#fechai").val(),fechaf:$("#fechaf").val(),op:opListaBusca,dniapel:$("#optBusca").val()}, 
            url: "controles/ManteBoleta.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete: function (objeto) {$('#carga').css('display', 'none');},
            success: fnCreaTablaBoletas
        });
    return false;
}
////////////////////////////////////////////////////////////////
/////////////////// DOCUMENT READY /////////////////////////////
$(document).ready(function () {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 210;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 210;
        $('.mygrid-wrapper-div').height(content_height);
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

//////////////////////// click ////////////////////////
var opListaBusca="L";
$("#btn_mostrar").click(function(){
     if ( $("#busca_boleta").val().trim() ==='' ) {
         fnBuscaBoleta(opListaBusca);
      } else {
          opListaBusca="B";
          fnBuscaBoleta(opListaBusca);
        //jAlert("Ingrese datos a buscar...", "Boletas");
    }  
        
});



});



