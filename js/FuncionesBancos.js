function fnInsertaBanco(){
var cabecera=" <tr> <th>Itm</th> <th>Descripcion</th> <th>Iniciales</th> <th>Direccion</th> <th>WEB</th> <th>Telefono</th> <th>Grupo</th> <th> </th> </tr> ";    
var nrocuenta_agente = $("#nrocuenta_agente").val();
nrocuenta_agente = nrocuenta_agente.replace(/\s/g, '');
        $.ajax({async: true,type: "POST",
            data: {opcion: "INSERTA",descripcion:$('#desc_banco').val(),iniciales:$('#inicial_banco').val(),direccion:$('#direccion_banco').val(),web:$('#web_banco').val(),
                telefono:$('#fono_banco').val(),grupo:$('#select_tipocuenta').val(),nrocuenta:nrocuenta_agente,idempresa:$('#codsucursal').val()},
            url: "controles/ManteBancos.php",
            beforeSend: function (objeto) {$(".mensaje").html("<img src='img/loading.gif'>");},
            complete: function () {$('.mensaje').css('display', 'none');}
	}).done(function(json) {
            $("#tabla_bancos").html( '' );
            $("#tabla_bancos").html( cabecera );
            json = $.parseJSON(json);
            for(var i=0;i<json.length;i++)
            {
               var x = i + 1;
                $('.editinplace').append(
		"<tr id='b[" + i + "]' onclick='fnSeleccionaBancos(this.id);'>"+                
                "<td >"+ x +"</td>"+
                "<td class ='ocultame id'>"+json[i].idbanco+"</td>"+
                "<td class='editable' data-campo='desc_banco'><span>"   +json[i].desc_banco +"</span></td>"+
                "<td class='editable' data-campo='iniciales'><span>"    +json[i].iniciales  +"</span></td>"+
                "<td class='editable' data-campo='direccion'><span>"    +json[i].direccion  +"</span></td>"+
                "<td class='editable' data-campo='web'><span>"          +json[i].web        +"</span></td>"+
                "<td class='editable' data-campo='telefono'><span>"     +json[i].telefono   +"</span></td>"+
                "<td class='editable' data-campo='grupo'><span>"        +json[i].grupo      +"</span></td>"+
                "<td>"+"<button id='btn_anular' onclick='fnAnulaBanco();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>"+"</td>"+
		"</tr>");
            }
	});

}

function InsertaBanco(){
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,      
        data: {opcion: "INSERTA",descripcion:$('#desc_banco').val(),iniciales:$('#inicial_banco').val(),direccion:$('#direccion_banco').val(),
               web:$('#web_banco').val(),telefono:$('#fono_banco').val(),grupo:$('#select_tipocuenta').val()},
        url: "controles/ManteBancos.php",
        beforeSend: function (objeto) {
            $('#carga').css('display', 'block');
            $("#carga").html("<img src='img/loader.gif'>");
        },
        complete: function (objeto) {
            fnMuestraBancos();
            $('#carga').css('display', 'none');
        }        
    });
}   

function fnSeleccionaBancos(idfila) {    
    var idfilac = $('#sele').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    /*for (var i = 0; i < elTableCells.length; i++) {        
        
    }*/    
    //var id_banco = elTableCells[1].innerHTML;
        //id_banco = id_banco.substring(6,9); 
        var desc_banco = elTableCells[2].innerHTML;
        desc_banco = desc_banco.substring(6, desc_banco.length-7);   
        $("#idbanco").val(elTableCells[1].innerHTML);
        $("#descbanco").val(desc_banco);
    $("#sele").val(idfila);
}

function fnAnulaBanco() {
if ($("#tipo_usuario").val().trim() === "ADMIN") {
    jConfirm("Seguro de Eliminar: " + $('#descbanco').val(),"Giros - Transferencias", function(r) { 
        if(r) {
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
            data: {opcion:'ANULA', idbanco:$("#idbanco").val().trim()},
            url: "controles/ManteBancos.php",
            beforeSend: function (objeto) {$("#carga").html("<img src='img/loader.gif'>");},
            complete:   function (objeto) {$('#carga').css('display', 'none');}
            //success: fnMuestraBancos
            });
            fnMuestraBancos();            
            }
    });
} else { jError('Solo Administrador', 'Giros - Transferencias'); }   
return false;
}

function fnMuestraBancos(){
var cabecera=" <tr> <th>Itm</th> <th>Descripcion</th> <th>Iniciales</th> <th>Direccion</th> <th>WEB</th> <th>Telefono</th> <th>Grupo</th> <th> </th> </tr> ";    
        $.ajax({async: true,type: "POST",
            data: { opcion:'LISTA' },
            url: "controles/ManteBancos.php",
            beforeSend: function (objeto) {$(".mensaje").html("<img src='img/loading.gif'>");},
            complete: function () {$('.mensaje').css('display', 'none');}
	}).done(function(json) {
            $("#tabla_bancos").html( '' );
            $("#tabla_bancos").html( cabecera );
            json = $.parseJSON(json);
            for(var i=0;i<json.length;i++)
            {
               var x = i + 1;
                $('.editinplace').append(
		"<tr id='b[" + i + "]' onclick='fnSeleccionaBancos(this.id);'>"+                
                "<td >"+ x +"</td>"+
                "<td class ='ocultame id'>"+json[i].idbanco+"</td>"+
                "<td class='editable' data-campo='desc_banco'><span>"   +json[i].desc_banco +"</span></td>"+
                "<td class='editable' data-campo='iniciales'><span>"    +json[i].iniciales  +"</span></td>"+
                "<td class='editable' data-campo='direccion'><span>"    +json[i].direccion  +"</span></td>"+
                "<td class='editable' data-campo='web'><span>"          +json[i].web        +"</span></td>"+
                "<td class='editable' data-campo='telefono'><span>"     +json[i].telefono   +"</span></td>"+
                "<td class='editable' data-campo='grupo'><span>"        +json[i].grupo      +"</span></td>"+
                "<td>"+"<button id='btn_anular' onclick='fnAnulaBanco();' title='Anular' type='button' aria-hidden='true' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>"+"</td>"+
		"</tr>");
            }
	});
}

///////////////////////////////////DocumentReady ///////////////////////////

$(document).ready(function() {
  //ControlesGuarda();   
  $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  /*============= altura de tabla dinamico====================*/
    $(function () {
        var window_height = $(window).height(),
                content_height = window_height - 115;
        $('.mygrid-wrapper-div').height(content_height);
    });

    $(window).resize(function () {
        var window_height = $(window).height(),
                content_height = window_height - 115;
        $('.mygrid-wrapper-div').height(content_height);
    });
    fnDeshabilita();
   $( "#mas_informacion" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#menu-toggle" ).tooltip({show: {effect: "slideDown", delay: 250  }});
    $( "#btn_cuentas" ).tooltip({show: {effect: "slideDown", delay: 250  }});
/* OBTENEMOS TABLA */
    var cabecera=" <tr> <th>Itm</th> <th>Descripcion</th> <th>Iniciales</th> <th>Direccion</th> <th>WEB</th> <th>Telefono</th> <th>Grupo</th> <th> </th> </tr> ";
        $.ajax({async: true,type: "POST",
            data: { opcion:'LISTA' },
            url: "controles/ManteBancos.php",
            beforeSend: function(objeto){$(".mensaje").html("<img src='img/cargando.gif'>"); },
            complete:   function(objeto){$('.mensaje').css('display','none');}
	}).done(function(json) {
            $("#tabla_bancos").html( cabecera );
            json = $.parseJSON(json);
            for(var i=0;i<json.length;i++)
            {
               var x = i + 1;
                $('.editinplace').append(
		"<tr id='b[" + i + "]' onclick='fnSeleccionaBancos(this.id);'>"+                
                "<td >"+ x +"</td>"+
                "<td class='ocultame id'>"+json[i].idbanco+"</td>"+
                "<td class='editable' data-campo='desc_banco'><span>"   +json[i].desc_banco +"</span></td>"+
                "<td class='editable' data-campo='iniciales'><span>"    +json[i].iniciales  +"</span></td>"+
                "<td class='editable' data-campo='direccion'><span>"    +json[i].direccion  +"</span></td>"+
                "<td class='editable' data-campo='web'><span>"          +json[i].web        +"</span></td>"+
                "<td class='editable' data-campo='telefono'><span>"     +json[i].telefono   +"</span></td>"+
                "<td class='editable' data-campo='grupo'><span>"        +json[i].grupo      +"</span></td>"+
                "<td>"+"<button id='btn_anular' onclick='fnAnulaBanco();' title='Anular' type='button' class='btn btn-default btn-xs' ><span class='glyphicon glyphicon-trash blue'></span></button>"+"</td>"+
		"</tr>");
            }
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
            //alert(id);
            if (campo !== 'grupo') {
                td.text("").html("<input type='text' onkeyup='javascript:this.value=this.value.toUpperCase();' name='" + campo + "' value='" + valor + "'><a class='enlace guardar' href='#'>Guardar</a> <a class='enlace cancelar' href='#'>Cancelar</a> ");
            } else {
                td.text("").html("<select name='grupo' ><option value='C'>CUENTA</option><option value='A'>AGENTE</option></select><a class='enlace guardagrupo' href='#'>GuardaGrupo</a> <a class='enlace cancelar' href='#'>Cancelar</a>");
            }
        } else { jError('Solo Administrador', 'Giros - Transferencias');
        }
    });

    $(document).on("click", ".guardar", function (e)
    {
        $(".mensaje").html("<img src='img/cargando.gif'>");
        e.preventDefault();
        nuevovalor = $(this).closest("td").find("input").val();
        if (nuevovalor.trim() !== "")
        {
            $.ajax({type: "POST", url: "controles/ManteBancos.php",
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
        } else {
            $(".mensaje").html("<p class='ko'>Debes ingresar un valor</p>");
        }
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
    });


/*======================= click =========================================*/
    $('#btn_nuevo').click(function () {
        fnLimpia();
        fnHabilita();
        //dar enfoque desc_banco    

    });
    
    $('#btn_guardar').click(function () {
        if ($('#select_tipocuenta').val() === 'A') {
            if ($("#desc_banco").val().trim() === '' || $("#inicial_banco").val().trim() === '' || $("#nrocuenta_agente").val().length < 9) {
                jError('Datos incompletos, Verifique...', 'Giros - Transferencias');
            } else {
                fnInsertaBanco();
                $('#nrocuenta_agente').css('display', 'none');
                fnDeshabilita();
            }
        } else {
            if ($("#desc_banco").val().trim() === '' || $("#inicial_banco").val().trim() === '') {
                jError('Datos incompletos, Verifique...', 'Giros - Transferencias');
            } else {
                fnInsertaBanco();
                $('#nrocuenta_agente').css('display', 'none');
                fnDeshabilita();
            }
        }
    });
    $('#btn_cancelar').click(function () {
        fnLimpia();
        fnDeshabilita();

    });

    $("#buscador").keyup(function () {
        if ($(this).val() !== "") {
            $("#tabla_bancos tbody>tr").hide();
            $("#tabla_bancos td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        } else {
            $("#tabla_bancos tbody>tr").show();
        }
    });
    $.extend($.expr[":"], {"contains-ci": function (elem, i, match, array)
        {
            return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    $('#select_tipocuenta').on('change',function (){
        if (this.value === 'A'){
            $('#nrocuenta_agente').val('');
            $('#nrocuenta_agente').css('display','block');
        }
        else { $('#nrocuenta_agente').css('display','none'); $('#nrocuenta_agente').val('');}
        
    });


}); 

function fnLimpia(){
    $( "#desc_banco" ).val('');
    $( "#inicial_banco" ).val('');
    $( "#direccion_banco" ).val('');
    $( "#web_banco" ).val('');    
    $( "#fono_banco" ).val('');    
    //$( "#tipo_cuenta" ).val('');
}

function fnDeshabilita(){
    $( "#desc_banco" ).attr('disabled','true');
    $( "#inicial_banco" ).attr('disabled','true');
    $( "#direccion_banco" ).attr('disabled','true');
    $( "#web_banco" ).attr('disabled','true');
    $( "#fono_banco" ).attr('disabled','true');
    $("#select_tipocuenta").attr('disabled','true');
    $('#nrocuenta_agente').css('display','none');
    //$( "#btn_guardar" ).attr('disabled','true');
}
function fnHabilita(){
    document.getElementById("desc_banco").disabled=false;
    document.getElementById("inicial_banco").disabled=false;
    document.getElementById("direccion_banco").disabled=false;
    document.getElementById("web_banco").disabled=false;
    document.getElementById("fono_banco").disabled=false;
    //document.getElementById("btn_guardar").disabled=false;
    $("#select_tipocuenta").attr('disabled',false);
}
