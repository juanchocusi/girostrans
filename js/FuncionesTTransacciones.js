function fnAnulaTTran() {
if ($("#tipo_usuario").val().trim() === "ADMIN") {
    jConfirm("Seguro de Eliminar: " + $('#descripcion').val(),"Giros - Transferencias", function(r) { 
        if(r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opcion:'ANULA', idttran:$("#idttran").val()},
            url: "controles/ManteTTransaccion.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete:   function (objeto) {$('#carga').css('display', 'none');}
            //success: fnMuestraBancos
            });
            fnListaTTran();            
            }
    });
} else {jError('Solo Administrador', 'Giros - Transferencias');}
}

function fnListaTTran(){
var url = "controles/ManteTTransaccion.php";
    var cabecera = " <tr> <th>Itm</th> <th>Descripcion</th> <th>Tipo</th> <th>Pertenece a:</th> <th>Afecta a:</th> <th> </th> </tr> ";
    $("#tabla_ttransaccion thead").html(cabecera);    $("#tabla_ttransaccion tbody").html("");
    $.getJSON(url, {opcion: "LISTA"}, function (tipotran) {
        //var i=0;
        $.each(tipotran, function (i, tipotran) {
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaTTran(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + tipotran.idtipotransaccion + "</td>"
                    + "<td class='editable' data-campo='descripcion'><span>" + tipotran.descripcion + "</span></td>"
                    + "<td class='editable' data-campo='tipo'><span>" + tipotran.tipo + "</span></td>"
                    + "<td class='editable' data-campo='grupo'><span>" + tipotran.grupo + "</span></td>"
                    + "<td class='editable' data-campo='dinero'><span>" + tipotran.dinero + "</span></td>"
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaTTran();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_ttransaccion tbody");
        });
    });    
}

function fnInsertaTTran(){
var url = "controles/ManteTTransaccion.php";
    var cabecera = " <tr> <th>Itm</th> <th>Descripcion</th> <th>Tipo</th> <th>Pertenece a:</th> <th>Afecta a:</th> <th> </th> </tr> ";
    $("#tabla_ttransaccion thead").html(cabecera);
    $("#tabla_ttransaccion tbody").html("");
    $.getJSON(url, {opcion: "INSERTA",nombre:$("#descripcion").val(),tipo:$("#select_tipo").val(), grupo:$("#select_pertence").val(), money:$("#select_afecta").val()}, function (tipotran) {
        //var i=0;
        $.each(tipotran, function (i, tipotran) {
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaTTran(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + tipotran.idtipotransaccion + "</td>"
                    + "<td class='editable' data-campo='descripcion'><span>" + tipotran.descripcion + "</span></td>"
                    + "<td class='editable' data-campo='tipo'><span>" + tipotran.tipo + "</span></td>"
                    + "<td class='editable' data-campo='grupo'><span>" + tipotran.grupo + "</span></td>"
                    + "<td class='editable' data-campo='dinero'><span>" + tipotran.dinero + "</span></td>"
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaTTran();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_ttransaccion tbody");
        });
    });    
}

function fnSeleccionaTTran(idfila) {
    var idfilac = $("#sele_as").val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
   
        var id_ttran = elTableCells[1].innerHTML; id_ttran = id_ttran.substring(6,id_ttran.length -7); 
        var descri = elTableCells[2].innerHTML;   descri = descri.substring(6, descri.length-7);   
        var tcuenta = elTableCells[3].innerHTML;  tcuenta = tcuenta.substring(6, tcuenta.length-7);   
        var grupo = elTableCells[4].innerHTML;    grupo = grupo.substring(6, grupo.length-7);   
        
        $("#idttran").val(id_ttran);
        $("#descripcion").val(descri);
        $("#select_tipo").val(tcuenta);
        $("#select_grupo").val(grupo);        
        $("#sele_as").val(idfila);         
}

////////////////////////// DocuentReady ///////////////////////////////////

$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    /*============= altura de tabla dinamico====================*/
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 180;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 180;
        $('.mygrid-wrapper-div').height(content_height);
    });
    fnDeshabilita();
    
    $("#menu-toggle").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#tipo").tooltip({show: {effect: "slideDown", delay: 250}});
    $("#cuenta").tooltip({show: {effect: "slideDown", delay: 250}});

    /* OBTENEMOS TABLA */
    var url = "controles/ManteTTransaccion.php";
    var cabecera = " <tr> <th>Itm</th> <th>Descripcion</th> <th>Tipo</th> <th>Pertenece a:</th> <th>Afecta a:</th> <th> </th> </tr> ";
    $("#tabla_ttransaccion thead").html(cabecera);
    $("#tabla_ttransaccion tbody").html("");
    $.getJSON(url, {opcion: "LISTA"}, function (tipotran) {
        //var i=0;
        $.each(tipotran, function (i, tipotran) {
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaTTran(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + tipotran.idtipotransaccion + "</td>"
                    + "<td class='editable' data-campo='descripcion'><span>" + tipotran.descripcion + "</span></td>"
                    + "<td class='editable' data-campo='tipo'><span>" + tipotran.tipo + "</span></td>"
                    + "<td class='editable' data-campo='grupo'><span>" + tipotran.grupo + "</span></td>"
                    + "<td class='editable' data-campo='dinero'><span>" + tipotran.dinero + "</span></td>"
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaTTran();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_ttransaccion tbody");
        });

    });

    var td, campo, valor, id;
    $(document).on("dblclick", "td.editable span", function (e)
    {
        if ($("#tipo_usuario").val().trim() === "ADMIN") {   
            e.preventDefault();
            $("td:not(.id)").removeClass("editable");
            td = $(this).closest("td");
            campo = $(this).closest("td").data("campo");
            valor = $(this).text();
            id = $(this).closest("tr").find(".id").text();
            if (campo === 'descripcion') {
                td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a> ");
            }
            if (campo === 'tipo') {
                td.text("").html("<select name='tipo' ><option value='S'>SALIDA</option><option value='I'>INGRESO</option></select><a class='enlace guardatipo' href='#'>GuardaTipo</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            }
            if (campo === 'grupo') {
                td.text("").html("<select name='grupo' ><option value='C'>CUENTA</option><option value='A'>AGENTE</option></select><a class='enlace guardagrupo' href='#'>GuardaTipo</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            }
        } else {jError('Solo Administrador', 'Giros - Transferencias');}
    });

    $(document).on("click", ".guardar", function (e)
    {
        $(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() !== "")
        {
            $.ajax({type: "POST", url: "controles/ManteTTransaccion.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: nuevovalor, id: id}
            }).done(function (msg) {
                $('.mensaje').css('display', 'block');
                $(".mensaje").html(msg);
                td.html("<span>" + nuevovalor + "</span>");
                $("td:not(.id)").addClass("editable");
                setTimeout(function () {
                    $('.ok,.ko').fadeOut('fast');
                }, 3000);
            });
        } else {
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
    });/**/

    $(document).on("click", ".guardatipo", function (e) {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
        tipo = $(this).closest("td").find("select").val();
        if (tipo.trim() !== "")
        {
            var campo = 'tipo';
            $.ajax({type: "POST", url: "controles/ManteTTransaccion.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: tipo, id: id}
            }).done(function (msg) {
                $('.mensaje').css('display', 'block');
                $(".mensaje").html(msg);
                td.html("<span>" + tipo + "</span>");
                $("td:not(.id)").addClass("editable");
                setTimeout(function () {
                    $('.ok,.ko').fadeOut('fast');
                }, 3000);
            });
        } else {
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
    });

    $(document).on("click", ".guardagrupo", function (e) {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
        grupo = $(this).closest("td").find("select").val();
        if (grupo.trim() !== "")
        {
            var campo = 'grupo';
            $.ajax({type: "POST", url: "controles/ManteTTransaccion.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: grupo, id: id}
            }).done(function (msg) {
                $('.mensaje').css('display', 'block');
                $(".mensaje").html(msg);
                td.html("<span>" + grupo + "</span>");
                $("td:not(.id)").addClass("editable");
                setTimeout(function () {
                    $('.ok,.ko').fadeOut('fast');
                }, 3000);
            });
        } else {
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
    });
    
/*
  ========================== Click ==============================================
 */
    $("#buscador").keyup(function () {
        if ($(this).val() !== "") {
            $("#tabla_ttransaccion tbody>tr").hide();
            $("#tabla_ttransaccion td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else {
            $("#tabla_ttransaccion tbody>tr").show();
        }
    });
    $.extend($.expr[":"],
            {
                "contains-ci": function (elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

$('#btn_nuevo').click(function (){
    fnLimpia();
    fnHabilita();
    //dar enfoque desc_banco    
    
});
$('#btn_guardar').click(function (){        
    if ( $("#descripcion").val().trim() === '' ){
        jError('Datos incompletos, Verifique...','Giros - Transferencias');
    } else {
        fnInsertaTTran();
        fnDeshabilita();
    }
        
});
$('#btn_cancelar').click(function (){
    fnLimpia();
    fnDeshabilita();    
    
});    
    
    
    
    
}); /* DocumentReady */

function fnLimpia(){
    $( "#descripcion" ).val('');
    $( "#select_tipo" ).val('');
    $( "#select_grupo" ).val('');        
}

function fnDeshabilita(){
    $( "#descripcion" ).attr('disabled',true);
    $( "#select_tipo" ).attr('disabled',true);
    $( "#select_grupo" ).attr('disabled',true);
    
}
function fnHabilita(){
    $( "#descripcion" ).attr('disabled',false);
    $( "#select_tipo" ).attr('disabled',false);
    $( "#select_grupo" ).attr('disabled',false);
    
}



