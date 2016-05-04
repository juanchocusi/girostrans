function checkDecimal(el) {
    var ex = /^[0-9]+\.?[0-9]*$/;
    if (ex.test(el.value) === false) {
        el.value = el.value.substring(0, el.value.length - 1);
    }
}

 
var td,campo,valor,id;
$(document).on("dblclick","td.editable span",function(e)
{
if($("#estado").val() === 'ABIERTO' ){
    if ( $("#fechadehoy").val() === $("#fecha_cierre").val() ){
        e.preventDefault();
        $("td:not(.id)").removeClass("editable");
        td=$(this).closest("td");
        campo=$(this).closest("td").data("campo");
        valor=$(this).text();
        id=$(this).closest("tr").find(".id").text();
        td.text("").html("<input type='text' style='text-transform:uppercase;' onkeyup='javascript:this.value=this.value.toUpperCase();' name='"+campo+"' value='"+valor+"'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
     } else { 
        if ($("#tusuario").val() === 'ADMIN'){
           e.preventDefault();
           $("td:not(.id)").removeClass("editable");
           td=$(this).closest("td");
           campo=$(this).closest("td").data("campo");
           valor=$(this).text();
           id=$(this).closest("tr").find(".id").text();
           td.text("").html("<input type='text' style='text-transform:uppercase;' onkeyup='javascript:this.value=this.value.toUpperCase();' name='"+campo+"' value='"+valor+"'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            } else { jError('No puede modificar...:'+$("#fechadehoy").val(), 'Giros - Transferencias'); }
        }
} else { jError("Diario Cerrado, Verifique...","Giros - Transferencias"); }

});
		
$(document).on("click",".guardar",function(e)
{
    $(".mensaje").html("<img src='img/loader32.gif'>");
    e.preventDefault();
    nuevovalor=$(this).closest("td").find("input").val();
    if(nuevovalor.trim()!=="")
    {
        $.ajax({type: "POST",
            url: "controles/ManteCierreDiario.php",
            data: {opt:'update', campo: campo, valor: nuevovalor, id_detalle: $("#id_detalle").val()}
        }).done(function( msg ) {
            td.html("<span>"+nuevovalor+"</span>");
            $("td:not(.id)").addClass("editable");
            if ($("#opt_insert").val() === 'II'){
                FnCargaIngresos();
                TotalIngresos();
            } else {
                FnCargaEgresos();
                TotalEgresos();
            }
        });
    }
    else $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
});

$(document).on("click",".cancelar",function(e)
{
    e.preventDefault();
    td.html("<span>"+valor+"</span>");
    $("td:not(.id)").addClass("editable");
});

$(document).on("click",".anular",function(e)
{    
    jConfirm("¿Esta seguro de Eliminar?", "Giros - Transferencias", function(r) {      
    if(r) {
        $.ajax({ type: "POST",
        url: "controles/ManteCierreDiario.php",
        data: { coddiario: $("#codcierrediario").val(), item:$("#item").val(), opt:'EI' }        
        }).done(function( msg ) {
            $('.mensaje').css('display','block');
            $(".mensaje").html(msg);
            /*td.html("<span>"+nuevovalor+"</span>");*/
            $("td:not(.id)").addClass("editable");
            /*setTimeout(function() {$('.ok,.ko').fadeOut('fast');}, 2000);*/            
            FnCargaDetalle();
        }); /* end done ajax*/
    }
    else $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
    }); /* end jconfirm*/

}); /* onclick*/
 
////////////////////////////// DINERO ///////////////////////////

    $(document).on("dblclick", "td.editabled span", function (e)
    {
        var confirma_edicion=VerificaImprimirDinero();
       $("#unclick").val("N");
//        if ( $("#fechadehoy").val() === $("#fecha_cierre").val()) {
        if (confirma_edicion === 'SI'){    
            e.preventDefault();
            $("td:not(.id)").removeClass("editabled");
            td = $(this).closest("td");
            campo = $(this).closest("td").data("campo");
            valor = $(this).text();
            id = $(this).closest("tr").find(".id").text();
            
                td.text("").html("<input value='" + valor + "' onkeyup='checkDecimal(this);' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardard' href='#'></a> <a class='enlace cancelard' href='#'></a>");
            }else { jError('No puede modificar...', 'Giros - Transferencias'); }    
//        } else {
//            if ($("#tusuario").val() === 'ADMIN' ) {
//                e.preventDefault();
//                $("td:not(.id)").removeClass("editabled");
//                td = $(this).closest("td");
//                campo = $(this).closest("td").data("campo");
//                valor = $(this).text();
//                id = $(this).closest("tr").find(".id").text();
//                    td.text("").html("<input value='" + valor + "' onkeyup='checkDecimal(this);' align='right' name='" + campo + "' value='" + valor + "'><a class='enlace guardard' href='#'></a> <a class='enlace cancelard' href='#'></a>");
//            }
//            else { jError('No puede modificar...', 'Giros - Transferencias'); }
//        }
    });

    $(document).on("click", ".guardard", function (e){
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        
        if (nuevovalor.trim() !== "")
        {   
            $.ajax({type: "POST",
                url: "controles/ManteCierreDiario.php",
                data: {opt: 'UPDINERO', campo: campo, valor: nuevovalor,coddiario:$("#codcierrediario").val(),denomina:$("#denominacion").val()}
            }).done(function (msg) {
                td.html("<span>" + nuevovalor + "</span>");
                $("td:not(.id)").addClass("editabled");
                fnCargaDinero();
            });
        }
        else { jWarning("Debes ingresar un valor"); }
  //      $("#unclick").val("S");
    });

    $(document).on("click", ".cancelard", function (e)
    {
        e.preventDefault();
        td.html("<span>" + valor + "</span>");
        $("td:not(.id)").addClass("editabled");
//        $("#unclick").val("S");
    });

