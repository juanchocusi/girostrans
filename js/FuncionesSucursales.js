function fnListaSucursal() {
    var url = "controles/ManteSucursales.php";
    var cabecera = " <tr> <th>Itm</th> <th>NombreSucursal</th> <th>Codigo</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th> <th>empresa</th> </tr> ";
    $("#tabla_sucursales thead").html(cabecera);
    $("#tabla_sucursales tbody").html("");
    $.getJSON(url, {opcion: "LISTA",idempresa:$("#codsucursal").val().substr(0,1)}, function (sucus)
    {
        $.each(sucus, function (i, sucus) {
            if (sucus.flag === '1') {
                jError($("#codigo").val() + ' ya existe, seleccione otro...', 'Giros - Transferencias');
            }
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaSucursal(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + sucus.idsucursal + "</td>"
                    + "<td class='editable' data-campo='nom_sucursal'><span>" + sucus.nom_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='cod_sucursal'><span>" + sucus.cod_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='dir_sucursal'><span>" + sucus.dir_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='fono_sucursal'><span>" + sucus.fono_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='e_mail'><span>" + sucus.e_mail + "</span></td>"
                    + "<td class='editable' data-campo='empresa'><span>" + sucus.empresa + "</span></td>"
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaSucursal();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_sucursales tbody");
        });
    });
}

function fnInsertaSucursal() {
    var url = "controles/ManteSucursales.php";
    var cabecera = " <tr> <th>Itm</th> <th>NombreSucursal</th> <th>Codigo</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th>  </tr> ";
    $("#tabla_sucursales thead").html(cabecera);
    $("#tabla_sucursales tbody").html("");
    $.getJSON(url, {opcion: "INSERTA", nombre: $("#nombre").val(), codigo: $("#codigo").val(), dir: $("#direccion").val(), fono: $("#telefono").val(), email: $("#email").val(),idempresa:$("#codsucursal").val().substr(0,1)}, function (sucus)
    {
        $.each(sucus, function (i, sucus) {
            if (sucus.flag === '1') {
                jError($("#codigo").val() + ' ya existe, Digite otro...', 'Giros - Transferencias');
            }
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaSucursal(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + sucus.idsucursal + "</td>"
                    + "<td class='editable' data-campo='nom_sucursal'><span>" + sucus.nom_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='cod_sucursal'><span>" + sucus.cod_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='dir_sucursal'><span>" + sucus.dir_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='fono_sucursal'><span>" + sucus.fono_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='e_mail'><span>" + sucus.e_mail + "</span></td>"
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaSucursal();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_sucursales tbody");
        });

    });
}

function fnSeleccionaSucursal(idfila) {

    var idfilac = $("#sele_as").val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor;
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    /*for (var i = 0; i < elTableCells.length; i++) {        
     
     }*/
    var id_sucu = elTableCells[1].innerHTML;
    id_sucu = id_sucu.substring(6, id_sucu.length - 7);
    var desc_sucu = elTableCells[2].innerHTML;
    desc_sucu = desc_sucu.substring(6, desc_sucu.length - 7);
    var cod_sucu = elTableCells[3].innerHTML;
    cod_sucu = cod_sucu.substring(6, cod_sucu.length - 7);
    var dir_sucu = elTableCells[4].innerHTML;
    dir_sucu = dir_sucu.substring(6, dir_sucu.length - 7);
    var fono_sucu = elTableCells[5].innerHTML;
    fono_sucu = fono_sucu.substring(6, fono_sucu.length - 7);
    var email_sucu = elTableCells[6].innerHTML;
    email_sucu = email_sucu.substring(6, email_sucu.length - 7);
    $("#idsucu").val(id_sucu);
    $("#nombre").val(desc_sucu);
    $("#codigo").val(cod_sucu);
    $("#direccion").val(dir_sucu);
    $("#telefono").val(fono_sucu);
    $("#email").val(email_sucu);
    $("#sele_as").val(idfila);

}

function fnAnulaSucursal() {
    if ($("#tipo_usuario").val().trim() === "ADMIN") {
        jConfirm("Seguro de Eliminar: " + $('#nombre').val() + "--" + $("#codigo").val(), "Giros - Transferencias", function (r) {
            if (r) {
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {opcion: 'ANULA', idsucu: $("#idsucu").val(),codsucu:$("#codsucursal").val()},
                    url: "controles/ManteSucursales.php",
                    beforeSend: function (objeto) {
                        $("#carga").html("<img src='img/loader.gif'>");
                    },
                    complete: function (objeto) {
                        $('#carga').css('display', 'none');
                    }
                    //success: fnMuestraBancos
                });
                fnListaSucursal();
            }
        });
    } else {
        jError('Solo Administrador', 'Giros - Transferencias');
    }
}
////////////////////////////////////////////////////////
$(document).ready(function () {
//  $("#wrapper").toggleClass("toggled");
    fnDeshabilita();
    $("#menu-toggle11").click(function (e) {
//      var $table = $('#tabla_sucursales');
//      $table.bootstrapTable( );
        $('#tabla_sucursales').bootstrapTable({
            height: "400"
        });

//      $('#tabla_sucursales').bootstrapTable('resetView');

    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
//        $('#tabla_sucursales').css('width', '100%');

//        $('#tabla_sucursales').bootstrapTable({
//            height: 400,
//            striped: false
//        });
//        var $table = $('#tabla_sucursales');
//        $table.bootstrapTable( );
    });

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


    $("#menu-toggle").tooltip({show: {effect: "slideDown", delay: 250}});

    var url = "controles/ManteSucursales.php";
    var cabecera = " <tr> <th>Itm</th> <th>NombreSucursal</th> <th>Codigo</th> <th>Direccion</th> <th>Telefono</th> <th>e-mail</th> </tr> ";
    $("#tabla_sucursales thead").html(cabecera);
    $("#tabla_sucursales tbody").html("");
    $.getJSON(url, {opcion: "LISTA",idempresa:$("#codsucursal").val().substr(0,1)}, function (sucus) {

        $.each(sucus, function (i, sucus) {
            i = i + 1;
            var newRow =
                    "<tr id='b[" + i + "]' onclick='fnSeleccionaSucursal(this.id);'>"
                    + "<td>" + i + "</td>"
                    + "<td class ='ocultame id'><span>" + sucus.idsucursal + "</td>"
                    + "<td class='editable' data-campo='nom_sucursal'><span>" + sucus.nom_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='cod_sucursal'><span>" + sucus.cod_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='dir_sucursal'><span>" + sucus.dir_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='fono_sucursal'><span>" + sucus.fono_sucursal + "</span></td>"
                    + "<td class='editable' data-campo='e_mail'><span>" + sucus.e_mail + "</span></td>"                    
                    + "<td>" + "<button id='btn_anular' onclick='fnAnulaSucursal();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>" + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tabla_sucursales tbody");
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
            if (campo !== 'empresa') {
                td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a> ");
            } else {
                td.text("").html("<select name='grupo'><option value='M'>MONEY FLASH</option><option value='P'>PANTERA</option></select><a class='enlace guardagrupo' href='#'>GuardaGrupo</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            }
        } else {
            jError('Solo Administrador', 'Giros - Transferencias');
        }
    });

    $(document).on("click", ".guardar", function (e)
    {
        $(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() !== "")
        {
            $.ajax({type: "POST", url: "controles/ManteSucursales.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: nuevovalor, id: id}
            }).done(function (msg) {
                $('.mensaje').css('display', 'block');
                $(".mensaje").html(msg);
                td.html("<span>" + nuevovalor + "</span>");
                $("td:not(.id)").addClass("editable");
                setTimeout(function () {
                    $('.ok,.ko').fadeOut('fast');
                }, 2000);
            });
        }
        else {
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
    });

    $(document).on("click", ".guardagrupo", function (e)
    {
        $(".mensaje").html("<img src='img/loader.gif'>");
        e.preventDefault();
        empresa = $(this).closest("td").find("select").val();
        if (empresa.trim() !== "")
        {
            var campo = 'empresa';
            $.ajax({type: "POST", url: "controles/ManteSucursales.php",
                data: {opcion: 'ACTUALIZA', campo: campo, valor: empresa, id: id}
            }).done(function (msg) {
                $('.mensaje').css('display', 'block');
                $(".mensaje").html(msg);
                td.html("<span>" + empresa + "</span>");
                $("td:not(.id)").addClass("editable");
                setTimeout(function () {
                    $('.ok,.ko').fadeOut('fast');
                }, 3000);
            });
        } else {
            $(".mensaje").html("<p class='ko'>Debes seleccionar un valor</p>");
        }
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
    });


    /*======================= click =========================================
     =======================================================================*/
    $('#btn_nuevo').click(function () {
        fnLimpia();
        fnHabilita();
        //dar enfoque desc_banco    

    });
    
    $('#btn_guardar').click(function () {
        if ($("#nombre").val().trim() === '' || $("#codigo").val().trim() === '') {
            jError('Datos incompletos, Verifique...', 'Giros - Transferencias');
        } else {
            fnInsertaSucursal();
            fnDeshabilita();
        }

    });
    
    $('#btn_cancelar').click(function () {
        fnLimpia();
        fnDeshabilita();

    });

    $("#btn_anular").tooltip({show: {effect: "explode", delay: 250}});


    $("#buscador").keyup(function () {
        if ($(this).val() !== "")
        {
            $("#tabla_sucursales tbody>tr").hide();
            $("#tabla_sucursales td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {
            $("#tabla_sucursales tbody>tr").show();
        }
    });
    $.extend($.expr[":"],
            {
                "contains-ci": function (elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

//    $('#tabla_sucursales').dataTable( {
//        "paging":   false,
//        "ordering": false,
//        "info":     false,
//        "bFilter": true,
//        "bSort": true,
////        "bAutoWidth": true,
//        
////       "scrollX": true,
//        "sScrollY": ($(window).height() - 220)
//    } );
//    $(window).bind('resize', function () {
//        /*the line below was causing the page to keep loading.
//        $('#tableData').dataTable().fnAdjustColumnSizing();
//        Below is a workaround. The above should automatically work.*/
//        $('#tabla_sucursales').css('width', '100%');
//    } );    
//var $table = $('#tabla_sucursales');
//$table.bootstrapTable( );

//    $('#tabla_sucursales').bootstrapTable({
////        striped: true,
//        height: 400
//    });
console.log($("#codsucursal").val().substr(0,1));
console.log($("#codsucursal").val());
});

function fnLimpia() {
    $("#codigo").val('');
    $("#nombre").val('');
    $("#direccion").val('');
    $("#telefono").val('');
    $("#email").val('');
    $("#nombre").focus();
}

function fnDeshabilita() {
    $("#codigo").attr('disabled', true);
    $("#nombre").attr('disabled', true);
    $("#direccion").attr('disabled', true);
    $("#telefono").attr('disabled', true);
    $("#email").attr('disabled', true);
    //$( "#btn_guardar" ).attr('disabled','true');
}
function fnHabilita() {
    $("#codigo").attr('disabled', false);
    $("#nombre").attr('disabled', false);
    $("#direccion").attr('disabled', false);
    $("#telefono").attr('disabled', false);
    $("#email").attr('disabled', false);
}

function cargatabla() {

}