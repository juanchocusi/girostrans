function checkDecimal(el) {
    var ex = /^[0-9]+\.?[0-9]*$/;
    if (ex.test(el.value) === false) {
        el.value = el.value.substring(0, el.value.length - 1);
    }
}
$(document).ready(function () {

    var td, campo, valor, id; 
 
    $(document).on("dblclick", "td.editable span", function (e)
    {
       $("#unclick").val("N");
        if ( $("#fechahoy").val() === $("#pdffecha").val().substring(0, 10) && $("#usuaentrega").val() === "---") {
            e.preventDefault();
            $("td:not(.id)").removeClass("editable");
            td = $(this).closest("td");
            campo = $(this).closest("td").data("campo");
            valor = $(this).text();
            id = $(this).closest("tr").find(".id").text();
            if (campo !== "observagiro") {
                td.text("").html("<input value='" + valor + "' onkeyup='checkDecimal(this);' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'></a> <a class='enlace cancelar' href='#'></a>");
            } else {
                td.text("").html("<input value='"+ valor +"' onkeyup='javascript:this.value=this.value.toUpperCase();' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'></a> <a class='enlace cancelar' href='#'></a>");
            }
        } else {
            if ($("#tipousuario").val() === 'ADMIN' && $("#usuaentrega").val() === "---") {
                e.preventDefault();
                $("td:not(.id)").removeClass("editable");
                td = $(this).closest("td");
                campo = $(this).closest("td").data("campo");
                valor = $(this).text();
                id = $(this).closest("tr").find(".id").text();
                if (campo !== "observagiro") {
                    td.text("").html("<input value='" + valor + "' onkeyup='checkDecimal(this);' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'></a> <a class='enlace cancelar' href='#'></a>");
                } else {
                    td.text("").html("<input value='" + valor + "' onkeyup='javascript:this.value=this.value.toUpperCase();' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'></a> <a class='enlace cancelar' href='#'></a>");
                }
            }
            else {
                jError('No puede modificar ya fue PAGADA...admin:' + $("#pdffecha").val(), 'Giros - Transferencias');
            }
        }
    });

    $(document).on("click", ".guardar", function (e) {
        if (campo !== "nro_operacion") {
            e.preventDefault();
            nuevovalor = $(this).closest("td").find("input").val();
            if (campo !== "total") {
                var dataedita = $("#nick").val() + '=> ' + $("#fechahoy").val();
                var diferencia = valor - nuevovalor;
            }
            if (nuevovalor.trim() !== "")
            {
                $.ajax({type: "POST",
                    url: "controles/ManteRecibidos.php",
                    data: {opt: 'update', campo: campo, valor: nuevovalor, idgiro: $("#correlativo").val(), datosedita: dataedita, diferencia: diferencia}
                }).done(function (msg) {
                    td.html("<span>" + nuevovalor + "</span>");
                    $("td:not(.id)").addClass("editable");
                    MuestraRecibidos($('#fecha_r').val(), $('#optbuscar').val());

                });
            } else {jWarning("Debes ingresar un valor");}
        } else {
            if ($("#nick").val() === "ADMIN") {
                e.preventDefault();
                nuevovalor = $(this).closest("td").find("input").val();
                if (campo !== "total") {
                    var dataedita = $("#nick").val() + '=> ' + $("#fechahoy").val();
                    var diferencia = valor - nuevovalor;
                }
                if (nuevovalor.trim() !== "")
                {
                    $.ajax({type: "POST",
                        url: "controles/ManteRecibidos.php",
                        data: {opt: 'update', campo: campo, valor: nuevovalor, idgiro: $("#correlativo").val(), datosedita: dataedita, diferencia: diferencia}
                    }).done(function (msg) {
                        td.html("<span>" + nuevovalor + "</span>");
                        $("td:not(.id)").addClass("editable");
                        MuestraRecibidos($('#fecha_r').val(), $('#optbuscar').val());

                    });
                } else {jWarning("Debes ingresar un valor");}
            }
        }
        $("#unclick").val("S");
    });

    $(document).on("click", ".cancelar", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editable");
        $("#unclick").val("S");
    });



});