function CalculaTotalesR() {
var sumai = 0;
var sumac = 0;
var sumav = 0;
var sumat = 0;
var sumao = 0;
var sumag = 0;
$('#TRecibidos tr.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    sumai += parseFloat($(this).find('td').eq(8).text()||0,10); //numero de la celda 5*/
    sumac += parseFloat($(this).find('td').eq(9).text()||0,10); 
    sumav += parseFloat($(this).find('td').eq(10).text()||0,10); 
    sumat += parseFloat($(this).find('td').eq(11).text()||0,10); 
    sumao += parseFloat($(this).find('td').eq(12).text()||0,10); 
    sumag += parseFloat($(this).find('td').eq(13).text()||0,10); 
    if ($(this).find('td').eq(17).text() ==='Pendiente') { $(this).css('background', 'Pink')};
    /*if ($(this).find('td').eq(17).text() !=='Pendiente') { $(this).css('background', 'LightYellow')};*/
    if ($(this).find('td').eq(22).text() ==='S') { $(this).css('background', 'tomato')};        
})
//alert(suma);
$("#total_i").text(sumai.toFixed(2));
$("#total_c").text(sumac.toFixed(2));
$("#total_o").text(sumao.toFixed(2));
$("#total_g").text(sumag.toFixed(2));

}

function CalculaTotalesE() {
var sumai = 0;

$('#TEntregados tr.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas                                                                                                                                    
    sumai += parseFloat($(this).find('td').eq(7).text()||0,10); //numero de la celda 5*/
    if ($(this).find('td').eq(17).text() ==='Pendiente') { $(this).css('background', 'Pink')};
    if ($(this).find('td').eq(17).text() !=='Pendiente') { $(this).css('background', 'LightYellow')};
    if ($(this).find('td').eq(22).text() ==='S') { $(this).css('background', 'tomato')};        
})
//alert(suma);
$("#etotal_i").text(sumai.toFixed(2));
/*$("#total_c").text(sumac.toFixed(2));
$("#total_o").text(sumao.toFixed(2));
$("#total_g").text(sumag.toFixed(2));*/
//$("#total").html('S/. '+suma);
}

function calcula_cargo()
{
    var importe=parseFloat(document.getElementById("importe_r").value);
    var porcentaje=parseFloat(document.getElementById("listaporcentajes").value);
    cargo=importe*(porcentaje/100);
    document.getElementById("cargo_r").value = parseFloat(cargo).toFixed(2);
    document.getElementById("efectivo_r").focus();
}

function calcula_total(){ 

    var m1=0; var m2=0; var m3=0;
    m1 = parseFloat(document.getElementById("importe_r").value);
    m2 = parseFloat(document.getElementById("cargo_r").value);
    m3 = parseFloat(document.getElementById("otros_r").value);
    r = m1+m2+m3;
    document.getElementById("total_r").value = parseFloat(Math.round(r*100)/100).toFixed(2);    
    var igv=0;
    igv=parseFloat(document.getElementById("cargo_r").value);
    igv=igv-parseFloat(igv/1.18).toFixed(2);
    document.getElementById("igv_r").value = parseFloat(igv).toFixed(2);
    
}

function calcula_vuelto(){
        var efectivo=parseFloat(document.getElementById("efectivo_r").value);
        var total=parseFloat(document.getElementById("total_r").value);
        var vuelto=efectivo - total;
        document.getElementById("vuelto_r").value = parseFloat(Math.round(vuelto*100)/100).toFixed(2);   
}

function ecalcula_cargo()
{
    var importe=parseFloat(document.getElementById("eimporte_r").value);
    var porcentaje=parseFloat(document.getElementById("elistaporcentajes").value);
    cargo=importe*(porcentaje/100);
    document.getElementById("ecargo_r").value = parseFloat(cargo).toFixed(2);
    document.getElementById("ecargo_r").focus();
}

function ADecimal(){
    nimporte=document.getElementById("importe_r").value;
    document.getElementById("importe_r").value = parseFloat(Math.round(nimporte*100)/100).toFixed(2);  
    ncargo=document.getElementById("cargo_r").value;
    document.getElementById("cargo_r").value = parseFloat(Math.round(ncargo*100)/100).toFixed(2);  
    notros=document.getElementById("otros_r").value;
    document.getElementById("otros_r").value = parseFloat(Math.round(notros*100)/100).toFixed(2);  
}

function eADecimal(){
    nimporte=document.getElementById("eimporte_r").value;
    document.getElementById("eimporte_r").value = parseFloat(Math.round(nimporte*100)/100).toFixed(2);  
    ncargo=document.getElementById("ecargo_r").value;
    document.getElementById("ecargo_r").value = parseFloat(Math.round(ncargo*100)/100).toFixed(2);  
}

function RecuperaFilaB(idfilaB) {
  var elTableRow = document.getElementById(idfilaB);
  elTableRow.style.backgroundColor =(elTableRow.style.backgroundColor==="LightSkyBlue")?'cyan':'LightSkyBlue';
  //if(elTableRow.style.backgroundColor === 'LightSkyBlue'){
    var elTableCells = elTableRow.getElementsByTagName("td");
        for (var i=0; i<elTableCells.length; i++) {
          document.getElementById("idclienteb").value=elTableCells[0].innerHTML;     
          document.getElementById("dnib").value=elTableCells[1].innerHTML;     
          document.getElementById("nombresb").value=elTableCells[2].innerHTML;
          /*$('#otros').val(elTableCells[2].innerHTML);*/
        }
    //}
  } 

function RecuperaFilaR(idfilaR) {
  var elTableRowR = document.getElementById(idfilaR);
  elTableRowR.style.backgroundColor =(elTableRowR.style.backgroundColor=== "LightSkyBlue")?'cyan':'LightSkyBlue';
  /*if(elTableRowR.style.backgroundColor === 'green'){*/
    var elTableCellsR = elTableRowR.getElementsByTagName("td");
        for (var i=0; i<elTableCellsR.length; i++) {          
         document.getElementById("idclienter").value=elTableCellsR[0].innerHTML;        
          document.getElementById("dnir").value=elTableCellsR[1].innerHTML;     
          document.getElementById("nombresr").value=elTableCellsR[2].innerHTML;
        }
    //}
  } 

function RecuperaFilaS(idfilaS) {
  var elTableRow = document.getElementById(idfilaS);
  elTableRow.style.backgroundColor =(elTableRow.style.backgroundColor==="green")?'cyan':'green';
  if(elTableRow.style.backgroundColor === 'green'){
    var elTableCells = elTableRow.getElementsByTagName("td");
        for (var i=0; i<elTableCells.length; i++) {          
          document.getElementById("codsucursald").value=elTableCells[0].innerHTML;     
          document.getElementById("destino").value=elTableCells[1].innerHTML;
          if($('#codsucursald').val() === $('#codsucursal').val()){                    
                    $("#codsucursald").val("");
                    $("#destino").val("");
                }
        }
    }
  }

function RecuperaClientesB()
{
 if ( $('#dni_b').val().length > 2 ){   
       $.ajax({async: true,type: "POST",dataType: "json",cache: false,
        data: {valor: $('#dni_b').val(), op: $('#opciones_b').val(),opt:"BC"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        success: CreaTablaB,    
        error: errorEnvio
    });
} else { jAlert("Ingrese datos buscar", "Transferencias"); }
return false;
}

function RecuperaClientesBFast_nousar()
{
    if($('#dnib').val()!=='' && $('#dnib').val().length >2){
        $.ajax({async: true,        type: "POST",        dataType: "json",        cache: false,
        data: {valor: $('#dnib').val(), op:"A", opt:"BC"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        success: CreaTablaB,      
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias");}
return false;
}

function RecuperaClientesR()
{
if($('#dni_r').val()!==''  && $('#dni_r').val().length >2){
        $.ajax({async: true,        type: "POST",        dataType: "json",        cache: false,
        data: {valor: $('#dni_r').val(), op: $('#opciones_r').val(),opt:"BC"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        success: CreaTablaR,       
        error: errorEnvio
        });
    } else{  jAlert("Escriba datos a buscar", "Transferencias"); }    
return false;
}
function RecuperaClientesRFast_no_usar() //Busca Rapida
{
    if($('#dnir').val()!=='' && +$('#dnir').val().length >2){
        $.ajax({async: true,       type: "POST",        dataType: "json",        cache: false,
        data: {valor: $('#dnir').val(), op:"A", opt:"BC"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        success: CreaTablaR,        
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias");}    
return false;
}
function RecuperaSucursal()
{
    if($('#codsucu').val()!=='' && +$('#codsucu').val().length >2 ){
        $.ajax({async: true,        type: "POST",        dataType: "json",        cache: false,
        data: {codsucu: $('#codsucu').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/Busca_Sucursal.php",
        beforeSend: antesEnvio,
        success: CreaTablaS,        
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias");}
return false;
}
function RecuperaSucursalFast_no_usar()
{
    if($('#codsucursal').val()!=='' && +$('#codsucursal').val().length >2){
        $.ajax({async: true,        type: "POST",        dataType: "json",        cache: false,
        data: {codsucu: $('#codsucursal').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/Busca_Sucursal.php",
        beforeSend: antesEnvio,
        success: CreaTablaS,
        
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias"); }    
return false;
}

function eRecuperaClientesB()
{
    if($('#edni_b').val()!=='' && +$('#edni_b').val().length >2){
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {dni: $('#edni_b').val(), opt: $('#eopciones_b').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/BuscaCliente.php",
        beforeSend: antesEnvio,
        success: eCreaTablaB,
        timeout: 4000,
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias"); }      
return false;
}
function eRecuperaClientesR()
{
    if($('#edni_r').val()!=='' && +$('#edni_r').val().length >2){
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {dni: $('#edni_r').val(), opt: $('#eopciones_r').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/BuscaCliente.php",
        beforeSend: antesEnvio,
        success: eCreaTablaR,
        timeout: 4000,
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias"); }        
return false;
}
function eRecuperaSucursal()
{
if($('#ecodsucu').val()!=='' && +$('#ecodsucu').val().length >2){
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {codsucu: $('#ecodsucu').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/Busca_Sucursal.php",
        beforeSend: antesEnvio,
        success: eCreaTablaS,
        timeout: 4000,
        error: errorEnvio
        });
 } else { jAlert("Escriba datos a buscar", "Transferencias"); }      
return false;
}

function eRecuperaClientesBFast(){
if($('#ednib').val()!=='' && +$('#ednib').val().length >2){    
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {dni: $('#ednib').val(), opt:'A' },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/BuscaCliente.php",
        beforeSend: antesEnvio,
        success: eCreaTablaB,
        timeout: 4000,
        error: errorEnvio
        });
 } else { jAlert("Escriba datos a buscar", "Transferencias"); }      
return false;
}
function eRecuperaClientesRFast(){
    if($('#ednir').val()!=='' && +$('#ednir').val().length >2){  
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {dni: $('#ednir').val(), opt:'A'},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/BuscaCliente.php",
        beforeSend: antesEnvio,
        success: eCreaTablaR,
        timeout: 4000,
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias"); }              
return false;
}

function eRecuperaSucursalFast(){
if($('#ecodsucursal').val()!=='' && +$('#ecodsucursal').val().length >2){  
        $.ajax({
        async: true,
        type: "POST",
        dataType: "json",
        cache: false,
        data: {codsucu: $('#ecodsucursal').val()},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/Busca_Sucursal.php",
        beforeSend: antesEnvio,
        success: eCreaTablaS,
        timeout: 4000,
        error: errorEnvio
        });
    } else { jAlert("Escriba datos a buscar", "Transferencias"); }          
return false;
}
/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/
function limpia_tabla_b(){
var Table = document.getElementById("resultado_b");
Table.innerHTML = "";
}
function limpia_tabla_r(){
var Table = document.getElementById("resultado_r");
Table.innerHTML = "";
}
function limpia_tabla_s(){
var Table = document.getElementById("resultado_s");
Table.innerHTML = "";
}

function elimpia_tabla_b(){
var Table = document.getElementById("eresultado_b");
Table.innerHTML = "";
}
function elimpia_tabla_r(){
var Table = document.getElementById("eresultado_r");
Table.innerHTML = "";
}
function elimpia_tabla_s(){
var Table = document.getElementById("eresultado_s");
Table.innerHTML = "";
}
function limpia_tabla_clientes(){
var Table = document.getElementById("tabla_clientes");
Table.innerHTML = "";
}

function dialog_responsive(){
  /*Diseño responsable para los cuadros de diálogo*/
      $("div").each(function(){
          if ($(this).attr("role") === "dialog"){
          /*Modifica las propiedades CSS a tu gusto*/
          $(this).css({width: "45%", minWidth: "250px", minHeight: "150px", left: "10px", top: "50px"});
          }
      });
  } /*END dialog_responsive*/

function antesEnvio() {
$("#log").text("Se procesa la función 'antesEnvio()' antes de enviarse los datos...");
}
// En caso de error
function errorEnvio() {
$("#log").text("Ha ocurrido un error!");
}


function fnRegresa() {
    location.href = "#regresa";
}
function MuestraRecibidos(fecha_busqueda, opt) 
{
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {codsucu: $("#codsucursal").val(), fecha: fecha_busqueda, opt: opt},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: function (objeto) {
            $('#carga').css({display: 'block'});
        },
        success: CreaTablaRecibidos,
        complete: function () {
            $('#carga').css('display', 'none');
        }
    });
    return false;
}

function MuestraEntregados(fecha_busqueda,opt){
  /*var fecha_busqueda = $('#fecha_r').val();*/
  $.ajax({
  async: true,
  type: "POST",
  dataType: "json",
  cache: false,
  data: {fecha: fecha_busqueda,opt:opt},  
  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  url: "controles/BuscaRecibidos.php",
  /*beforeSend: antesEnvio,*/
  beforeSend:function(objeto){ 
                $('#ecarga').css({display:'block'}); },
  success:  CreaTablaEntregados,
  timeout: 4000,
  complete:function(){$('#ecarga').css('display','none');}
  
  });
return false;
}

/* IIIIIIIIIIIIIIIIIII  INSERTAR RRRRRRRRRRRRRRRRRRRRRR */
function Inserta_Recibidos(){                
    var fechagiro     = $("#fecha_r").val();    
    var origen        = $("#codsucursal").val();
    var remitente     = $("#dnir").val();
    var destino       = $("#codsucursald").val();
    var beneficiario  = $("#dnib").val();    
    var importe       = parseFloat(document.getElementById('importe_r').value);
    var cargo         = parseFloat(document.getElementById('cargo_r').value); 
    var igv           = parseFloat(document.getElementById('igv_r').value);
    var itf           = '0';
    var otro          = parseFloat(document.getElementById('otros_r').value); 
    var total         = parseFloat(document.getElementById('total_r').value);
    var efectivo      = parseFloat(document.getElementById('efectivo_r').value);
    var ciudestino    = $("#ciudaddestino").val();
    var obsgiro       = $("#observa").val();    
    var nrocuenta     = $("#cuentas").val(); //$("input#otros").val();    
    var nusuario      = $("#nick").val();    
        if (remitente.length === 0 || beneficiario.length === 0 || destino.length === 0 || importe === 0)  
        {   jAlert('Faltan datos verifique....',"Transferencias");
            return false;           
        } else {     
                $.ajax({ async: true,type: "POST",cache: false,dataType: 'json',
                  data: {opt:"I",fechagiro:fechagiro, origen:origen, remitente:remitente, destino:destino, beneficiario:beneficiario,
                  importe:importe, cargo:cargo, igv:igv, itf:itf, otro:otro, total:total, efectivo:efectivo,ciudestino:ciudestino,
                  obsgiro:obsgiro, nrocuenta:nrocuenta, nusuario:nusuario},
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  url: "controles/ManteRecibidos.php", 
                  beforeSend:function(objeto){ 
                            $('#carga1').css({display:'block'}); },                  
                  complete:function(){$('#carga1').css('display','none');fnImprimeRecibidos("alguardar"); MuestraRecibidos($('#fechahoy').val(),$('#optbuscar').val());ControlesAlGuardar();}
                }).done(function(respuesta){
                            $("#codgirosucursal").val(respuesta.codgirosucu);
                });
                document.getElementById("imprimir_r").disabled=true;
                document.getElementById("guardar").disabled=true;
                return false;                               
        }
return false;
}

function eInserta_Recibidos(){            
    var codgiro       = 'pop';
    var fechagiro     = $("input#fechahoy").val();
    var tipogiro      = 'G';   
    var origen        = $("input#ecodsucursal").val();
    var remitente     = $("input#ednir").val();
    var destino       = $("input#codsucursal").val();
    var beneficiario  = $("input#ednib").val();
    var ciudestino    = $("input#edestino").val();
    var importe       = parseFloat(document.getElementById('eimporte_r').value);
    var cargo         = parseFloat(document.getElementById('ecargo_r').value); 
    var igv           = '0'; /*parseFloat(document.getElementById('igv_r').value);*/
    var itf           = '0';
    var otro          = '0';/*parseFloat(document.getElementById('otros_r').value); */
    var total         = '0'; /*parseFloat(document.getElementById('etotal_r').value);*/
    var efectivo      = '0';/*parseFloat(document.getElementById('efectivo_r').value);*/
    var estado        ='R';
    var obsdest       = $("input#eotros").val(); 
    var obsgiro       = '---';
    var codbanco      = '---';
    var codtcuenta    = '---';
    var nrocuenta     = '---';
    var nrooperacion  = '---';    
    var nusuario      = $("input#nick").val(); 
    var userpc        = 'pctools365'; 
    var fechahora     = '<?php echo date("Y-m-d H:i:s");?>';
    var op            ='I';
   
//validando
if (origen !== destino ) { 
    if (remitente.length === 0 || beneficiario.length === 0 || destino.length === 0 || importe === 0 || importe.length === 0 )  
    {   alert('Faltan datos verifique....');
        return false;           
    } else {
 //Construimos la variable que se guardará en el data del Ajax para pasar al archivo php que procesará los datos    
            $.ajax({
              async: true,
              type: "POST",
              dataType: 'json',
              cache: false,              
              data: {codgiro:codgiro, fechagiro:fechagiro, tipogiro:tipogiro, origen:origen, remitente:remitente, destino:destino, beneficiario:beneficiario,
              ciudestino:ciudestino, importe:importe, cargo:cargo, igv:igv, itf:itf, otro:otro, total:total, efectivo:efectivo, estado:estado, obsdest:obsdest, 
              obsgiro:obsgiro, codbanco:codbanco, codtcuenta:codtcuenta, nrocuenta:nrocuenta, nrooperacion:nrooperacion, nusuario:nusuario, userpc:userpc, op:op},
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              url: "controles/InsertaRecibidos2.php",
              beforeSend:function(objeto){ 
                        $('#ecarga1').css({display:'block'}); },
              complete:function(){$('#ecarga1').css('display','none'); MuestraEntregados($('#fechahoy').val(),$('#optbuscar').val());}
            }).done(function(respuesta){
                        $("#ecodgirosucursal").val(respuesta.codgirosucu);                        
            });
            eValoresImpresion();
            eControlesAlGuardar();
            document.getElementById("eimprimir_r").disabled=true;
            return false;                               
    }
}else {
        alert('Origen y destiino deberian ser diferentes...');
        return false;}
}

/* INSERTAINSERTAINSERTA-INSERTA-INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA INSERTA */

function ControlesNuevo()
{    
document.getElementById("guardar").disabled=false;
document.getElementById("dnir").value='';
document.getElementById("dnib").value='';
/*document.getElementById("codsucursal").value='';*/
document.getElementById("importe_r").value='0';
document.getElementById("cargo_r").value='0';
document.getElementById("igv_r").value='0';
document.getElementById("otros_r").value='0';
document.getElementById("total_r").value='0';
document.getElementById("efectivo_r").value='0';
document.getElementById("vuelto_r").value='0';
document.getElementById("observa").value='';
document.getElementById("ciudaddestino").value='';
document.getElementById("destino").value='';
document.getElementById("nuevo").disabled=true;
document.getElementById("nombresb").value='';
document.getElementById("nombresr").value='';

document.getElementById("dnir").disabled=false;
document.getElementById("dnib").disabled=false;
/*document.getElementById("codsucursal").disabled=false;*/
document.getElementById("importe_r").disabled=false;
document.getElementById("cargo_r").disabled=false;
document.getElementById("otros_r").disabled=false;
document.getElementById("observa").disabled=false;
document.getElementById("ciudaddestino").disabled=false;
document.getElementById("destino").disabled=false;
document.getElementById("dnib").focus();
document.getElementById("imprimir_r").disabled=true;

document.getElementById("busca_beneficiario").disabled=false;
document.getElementById("busca_remitente").disabled=false;
document.getElementById("busca_sucursal").disabled=false;

$("#destino").attr("readonly",false);
}
function ControlesAlGuardar()
{
document.getElementById("guardar").disabled=true;
document.getElementById("anular").disabled=true;
document.getElementById("imprimir_r").disabled=false;
document.getElementById("nuevo").disabled=false;

document.getElementById("dnir").disabled=true;
document.getElementById("dnib").disabled=true;
/*document.getElementById("codsucursal").disabled=true;*/
document.getElementById("importe_r").disabled=true;
document.getElementById("cargo_r").disabled=true;
document.getElementById("otros_r").disabled=true;
document.getElementById("observa").disabled=true;
document.getElementById("ciudaddestino").disabled=true;
document.getElementById("destino").disabled=true;
document.getElementById("busca_beneficiario").disabled=true;
document.getElementById("busca_remitente").disabled=true;
document.getElementById("busca_sucursal").disabled=true;

}

function ControlesCancelar(){
    ControlesNuevo();
    ControlesAlGuardar();
}

function eControlesNuevo()
{
document.getElementById("eguardar").disabled=false;
document.getElementById("ednir").value='';
document.getElementById("ednib").value='';
document.getElementById("ecodsucursal").value='';
document.getElementById("eimporte_r").value='0';
document.getElementById("ecargo_r").value='0';
document.getElementById("enombresb").value='';
document.getElementById("enombresr").value='';

document.getElementById("edestino").value='';
document.getElementById("enuevo").disabled=true;

document.getElementById("ednir").disabled=false;
document.getElementById("ednib").disabled=false;
document.getElementById("ecodsucursal").disabled=false;
document.getElementById("eimporte_r").disabled=false;
document.getElementById("ecargo_r").disabled=false;
document.getElementById("edestino").disabled=false;
document.getElementById("ednib").focus();
document.getElementById("eimprimir_r").disabled=true;

document.getElementById("ebusca_beneficiario").disabled=false;
document.getElementById("ebusca_remitente").disabled=false;
document.getElementById("ebusca_sucursal").disabled=false;
    
}
function eControlesAlGuardar()
{
document.getElementById("eguardar").disabled=true;
document.getElementById("eanular").disabled=true;
document.getElementById("eimprimir_r").disabled=false;
document.getElementById("ednir").value='';
document.getElementById("ednib").value='';

document.getElementById("eimporte_r").value='0';
document.getElementById("ecargo_r").value='0';
document.getElementById("operacion").value='';
document.getElementById("edestino").value='';
document.getElementById("enuevo").disabled=false;

document.getElementById("ednir").disabled=true;
document.getElementById("ednib").disabled=true;

document.getElementById("eimporte_r").disabled=true;
document.getElementById("ecargo_r").disabled=true;
document.getElementById("operacion").disabled=true;
document.getElementById("edestino").disabled=true;

document.getElementById("ebusca_beneficiario").disabled=true;
document.getElementById("ebusca_remitente").disabled=true;
document.getElementById("ebusca_sucursal").disabled=true;

}
function eControlesCancelar(){
    eControlesNuevo();
    eControlesAlGuardar();
}

function RecuperaFilaCuentas(idfila) {
    var idfilac = $('#sele_asc').val();
    var elTableRow  = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilac);
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? 'white' : 'LightSkyBlue';
    if (idfilac !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === "white") ? 'LightSkyBlue' : 'white';
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {
        document.getElementById("txt_nrocuenta").value = elTableCells[1].innerHTML;
        document.getElementById("txt_bancos").value = elTableCells[2].innerHTML;
        document.getElementById("sele_asc").value = idfila;
    }
}

function fnImprimeRecibidos(accion){
    
switch(accion){
    case "manualmente":
    /*imprime solo ADMIN  y no debe estar anulado */
    if ( $("#tipousuario").val() === 'ADMIN' && $("#anulado").val() !== 'S' ) {           
        window.open('ImprimeRecibidos.php?codgirosucursal='+$('#codgirosucursal').val()+'&pdffecha='+$('#pdffecha').val()+'&pdfremitente='+$('#nombresr').val()+'&pdfcoddestino='+$('#pdfcoddestino').val()+
            '&pdfnomsucudestino='+$('#destino').val()+'&pdfbeneficiario='+$('#nombresb').val()+'&pdfimporte='+$('#importe_r').val()+'&pdfcargo='+$('#cargo_r').val()+
            '&pdfotros='+$('#otros_r').val()+'&pdftotal='+$('#total_r').val()+'&nick='+$('#nick').val(),'_blank');  // changed here (cambiado aquí)
    }else{    jAlert("NO tienes permiso para imprimir, comunicate con el Administrador", "Transferencias");    }
    break;
case "alguardar":
    //if ( $("#tipousuario").val() === 'ADMIN' && $("#anulado").val() !== 'S' ) {           
        window.open('ImprimeRecibidos.php?codgirosucursal='+$('#codgirosucursal').val()+'&pdffecha='+$('#fechahorahoy').val()+'&pdfremitente='+$('#nombresr').val()+'&pdfcoddestino='+$('#codsucursald').val()+
            '&pdfnomsucudestino='+$('#pdfnomsucudestino').val()+'&pdfbeneficiario='+$('#nombresb').val()+'&pdfimporte='+$('#importe_r').val()+'&pdfcargo='+$('#cargo_r').val()+
            '&pdfotros='+$('#otros_r').val()+'&pdftotal='+$('#total_r').val()+'&nick='+$('#nick').val(),'_blank');  // changed here (cambiado aquí)
    //}else{    jAlert("No se puede imprimir  Anulado ", "Transferencias");    }
}
return false;
}

function RecuperaFila(idfila) {
    ControlesAlGuardar();
    var idfilar = $('#sele_fr').val();
    var elTableRow = document.getElementById(idfila);
    var elTableRow1 = document.getElementById(idfilar);
    var color = elTableRow.style.backgroundColor; 
    elTableRow.style.backgroundColor = (elTableRow.style.backgroundColor === "LightSkyBlue") ? color : 'LightSkyBlue';
    if (idfilar !== idfila) {
        elTableRow1.style.backgroundColor = (elTableRow.style.backgroundColor === color ) ? 'LightSkyBlue' : color;
    }
    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {
        /*alert(elTableCells[i].innerHTML);*/
        document.getElementById("pdffecha").value = elTableCells[2].innerHTML;
        document.getElementById("nombresb").value = elTableCells[4].innerHTML;
        /*document.getElementById("pdfbeneficiario").value = elTableCells[4].innerHTML;*/
        document.getElementById("nombresr").value = elTableCells[6].innerHTML;
        /*document.getElementById("pdfremitente").value = elTableCells[6].innerHTML;*/
        document.getElementById("importe_r").value = elTableCells[8].innerHTML;
        /*document.getElementById("pdfimporte").value = elTableCells[8].innerHTML;*/
        document.getElementById("cargo_r").value = elTableCells[9].innerHTML;
        /*document.getElementById("pdfcargo").value = elTableCells[9].innerHTML;*/
        document.getElementById("otros_r").value = elTableCells[12].innerHTML;
        /*document.getElementById("pdfotros").value = elTableCells[12].innerHTML;*/
        document.getElementById("total_r").value = elTableCells[13].innerHTML;
        /*document.getElementById("pdftotal").value = elTableCells[13].innerHTML;*/
        document.getElementById("observa").value = elTableCells[19].innerHTML;
        document.getElementById("ciudaddestino").value = elTableCells[20].innerHTML;
        document.getElementById("destino").value = elTableCells[21].innerHTML;
        document.getElementById("pdfnomsucudestino").value = elTableCells[21].innerHTML;
        var correla = elTableCells[1].innerHTML;
        document.getElementById("correlativo").value = correla.substring(3, 8);
        document.getElementById("codgirosucursal").value = elTableCells[1].innerHTML;
        document.getElementById("pdfcoddestino").value = elTableCells[7].innerHTML;        
        $("#usuaentrega").val(elTableCells[18].innerHTML); /* para verificar si fue pagado (originalmente = '---')*/
        $("#anulado").val(elTableCells[22].innerHTML);
        $("#sele_fr").val(idfila);        
    }
    document.getElementById("anular").disabled = false;
    document.getElementById("imprimir_r").disabled = false;
} 

function eRecuperaFila(eidfila) {
    
var eelTableRow = document.getElementById(eidfila);
  var eelTableCells = eelTableRow.getElementsByTagName("td");
          for (var i=0; i<eelTableCells.length; i++) {
          /*alert(elTableCells[i].innerHTML);*/
          document.getElementById("ecodgirosucursal").value=eelTableCells[1].innerHTML;
          var correla = eelTableCells[1].innerHTML;
          document.getElementById("correlativo").value=correla.substring(3,8);
          var mifecha=eelTableCells[2].innerHTML;
          document.getElementById("epdffecha").value=mifecha.substring(0,10);
          document.getElementById("enombresb").value=eelTableCells[4].innerHTML;
          document.getElementById("epdfbeneficiario").value=eelTableCells[4].innerHTML;
          document.getElementById("enombresr").value=eelTableCells[6].innerHTML;
          document.getElementById("epdfremitente").value=eelTableCells[6].innerHTML;
          document.getElementById("eimporte_r").value=eelTableCells[7].innerHTML;
          document.getElementById("epdfimporte").value=eelTableCells[7].innerHTML;
                    
          var Micodsucu = eelTableCells[1].innerHTML;
          document.getElementById("ecodsucursal").value=Micodsucu.substring(0,3);
          document.getElementById("epdfcodorigen").value=Micodsucu.substring(0,3);
        } 
        document.getElementById("eanular").disabled=false;
        document.getElementById("eimprimir_r").disabled=false;
                
        document.getElementById("edestino").value=document.getElementById("tablainvisible").rows[eidfila].cells[1].innerHTML;
        document.getElementById("epdfnomsucursal").value=document.getElementById("edestino").value;
        document.getElementById("epdfnick").value=document.getElementById("nick").value;
        document.getElementById("boton_pagar").disabled=false;
        document.getElementById("operacion").disabled=false;
  } 

function fnConfirmaAnulaRecibidos() {
    /* anulado: no, Admin: solo de diferentes fechas, operador: solo en fecha actual y que la transfeencia este pendiente */
    if ( $("#anulado").val() !== 'S' ) {
        var fechahoy = $("#fechahoy").val();
        var fechasele = $("#pdffecha").val().substring(0, 10);
        if (fechahoy === fechasele && $("#usuaentrega").val() === '---') {
            if ($("#tipousuario").val() !== 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        MuestraRecibidos($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        MuestraRecibidos($('#fecha_r').val(), 'R');
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
        } else { jAlert("NO puede Anular esta operacion, comuniquese con el Administrador.", "Transferencias"); } 
        
        if (fechahoy !== fechasele) {
            if ($("#tipousuario").val() === 'ADMIN') {
                jPrompt('Anular' + '\n' + $('#nombresb').val() + '\n' + $('#nombresr').val() + '\n' + $('#importe_r').val() + '\n' + 'Escriba motivo de anulacion:', '', 'Transferencias', function (r) {
                    if (r) {
                        fnAnulaRecibidos(r);
                        $("#correlativo").val("");
                        /*MuestraRecibidos($('#fecha_r').val(), 'R');*/
                    } else {
                        jAlert("Digita motivo de Anulacion", "Transferencias");
                    }
                });/*jPrompt*/
            }/*endif*/
        }
    } else {
        jAlert("Ya esta anulado, verifique...", "Transferencias");
    }
}

function fnAnulaRecibidos(cadena) {
    var corr = document.getElementById("correlativo").value;
    var correla = parseInt(corr);
    var motivos = cadena + " (" + $("#nick").val() + '==' + $("#fechahorahoy").val() + ")";
    $.ajax({async: true, type: "POST", dataType: "json", cache: false,
        data: {motivo: motivos, correlativo: correla, opt:"ANULA"},
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "controles/ManteRecibidos.php",
        beforeSend: antesEnvio,
        complete: function () {
            MuestraRecibidos($('#fecha_r').val(), 'R');
            jAlert("Anulado: " + $("#codgirosucursal").val(), "Transferencias");
        }
    });
    //alert(corr);
    return false;
}
function eRecuperaFilaB(eidfilaB) {
  var elTableRow = document.getElementById(eidfilaB);
  elTableRow.style.backgroundColor =(elTableRow.style.backgroundColor==="green")?'cyan':'green';
  if(elTableRow.style.backgroundColor === 'green'){
    var elTableCells = elTableRow.getElementsByTagName("td");
        for (var i=0; i<elTableCells.length; i++) {
          /*alert(elTableCells[i].innerHTML);*/
          document.getElementById("ednib").value=elTableCells[0].innerHTML;     
          document.getElementById("enombresb").value=elTableCells[1].innerHTML;
          
        }
    }
    $(this).dialog('close');
  } 
/* END Funcion Recuperafila */
  function eRecuperaFilaR(eidfilaR) {
  var elTableRowR = document.getElementById(eidfilaR);
  elTableRowR.style.backgroundColor =(elTableRowR.style.backgroundColor==="green")?'cyan':'green';
  if(elTableRowR.style.backgroundColor === 'green'){
    var elTableCellsR = elTableRowR.getElementsByTagName("td");
        for (var i=0; i<elTableCellsR.length; i++) {
          /*alert(elTableCells[i].innerHTML);*/
          document.getElementById("ednir").value=elTableCellsR[0].innerHTML;     
          document.getElementById("enombresr").value=elTableCellsR[1].innerHTML;
        }
    }
  } 
/* END Recuperafila R*/
function eRecuperaFilaS(eidfilaS) {
  var elTableRow = document.getElementById(eidfilaS);
  elTableRow.style.backgroundColor =(elTableRow.style.backgroundColor==="green")?'cyan':'green';
  if(elTableRow.style.backgroundColor === 'green'){
    var elTableCells = elTableRow.getElementsByTagName("td");
        for (var i=0; i<elTableCells.length; i++) {
          document.getElementById("ecodsucursal").value=elTableCells[0].innerHTML;     
          document.getElementById("edestino").value=elTableCells[1].innerHTML;
        }
    }
  }

function fnSeleccionaCuenta(idfila){
    var elTableRow = document.getElementById(idfila);
    var elTableCells = elTableRow.getElementsByTagName("td");
    for (var i = 0; i < elTableCells.length; i++) {
        /*document.getElementById("txt_nrocuenta").value = elTableCells[1].innerHTML;
        document.getElementById("txt_bancos").value = elTableCells[2].innerHTML;*/
        var inicial=elTableCells[2].innerHTML;
        inicial=inicial.substring(0,3);        
        $("#cuentas").val(inicial+': '+elTableCells[1].innerHTML);
        $("#dialogo_asigcuenta").dialog("close");
    }    
    
}

function FnPagar(){
if (document.getElementById("operacion").value !== '')
{
    var codsucu= $('#ecodgirosucursal').val();
    codsucu=codsucu.substring(0,3);
    jConfirm("¿Esta seguro de pagar transferencia Nro: " + $('#ecodgirosucursal').val(), "Entregados", function(r) {
    if(r) {
        $.ajax({
                type: "POST",
                url: "controles/PagaEntregados.php", 
                data: {id:$('#ecodgirosucursal').val(), codsucu:codsucu, usuario:$('#nick').val(), valor:$('#operacion').val()}
                }).done(function( msg ) {
                    MuestraEntregados($('#efecha_r').val(),'E');
                    document.getElementById("boton_pagar").disabled=true;
                    document.getElementById("operacion").disabled=true;
                });
        } 
        });    
}else{
    jAlert("Nro de Operacion VACIO", "Transferencias");
    document.getElementById("operacion").focus();
}
}
  /* EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE EJEMPLO EEEEEEEEEEEEEEEEEEEEEEE  */
$(function() {
    $('#econtiene_tabla').hide("fast");
    $('#tabs-min').tabs({
        activate: function(event, ui) {
            var $activeTab = $('#tabs-min').tabs('option', 'active');
            if ($activeTab === 1) {
                $('#contiene_tabla').hide("fast");
                $('#econtiene_tabla').show();
                $("#optbuscar").attr("value", "E");

            }
            else {
                $('#contiene_tabla').show();
                $('#econtiene_tabla').hide("fast");
                $("#optbuscar").attr("value", "R");
            }
        }
    });
});

$(function() {    
    //Para escribir solo letras
    $('#dnir').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#dnib').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#codsucu').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    $('#buscador').validacampos('1234567890abcdefghijklmnñopqrstuvwxyz');
    //Para escribir solo numeros    
    $('#importe_r').validacampos('.0123456789');
    $('#cargo_r').validacampos('.0123456789');
    /*$('#itf_r').validacampos('0123456789');*/
    $('#otros_r').validacampos('.0123456789');
    $('#efectivo_r').validacampos('.0123456789');
    /*$('#total_r').validacampos('0123456789');*/

});

function fnListaInsertaCuentas(id_cliente){
    switch ($("#opproceso").val()) {
        case "I":
            if (($('#hid_idbanco').val().length > 0) && ($('#txt_nrocuenta').val().length > 9))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#hid_idbanco').val(), idcliente: $('#idcliente').val(), usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {
                        $('.mensaje1').css('display', 'block');
                        $(".mensaje1").html("<img src='img/cargando.gif'>");
                    },
                    complete: function (objeto) {
                        $('.mensaje1').css('display', 'none');
                    },
                    success: fnCreaTablaClienteCuentas
                });
            } else {
                jAlert("Datos incompletos, Verifique ...", "Agentes");
            }
            break;
        case "A" :
            if (($('#txt_bancos').val().trim() !== "") && ($('#txt_nrocuenta').val().trim() !== ""))
            {  /*opcion : opcion para el procedimeintos almacenado define a que tabla afecta( Usuario o Cliente), opproce: para listar o Insertar dentro del sp... */
                $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                    data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(), idcliente: $('#idcliente').val(), usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
                    url: "controles/ManteBancos.php",
                    beforeSend: function (objeto) {
                        $('.mensaje1').css('display', 'block');
                        $(".mensaje1").html("<img src='img/cargando.gif'>");
                    },
                    complete: function (objeto) {
                        $('.mensaje1').css('display', 'none');
                    },
                    success: fnCreaTablaClienteCuentas
                });
            } else {
                jAlert("Seleccione una cuenta a Eliminar, Verifique ...", "Agentes");
            }
            break;
/*Listar*/  case "L":
            $.ajax({async: true, type: "POST", dataType: "json", cache: false,
                data: {nrocuenta: $('#txt_nrocuenta').val(), idbanco: $('#txt_idbanco').val(), idcliente: id_cliente, usuamodifica: $('#nick').val(), opcion: "C", opproce: $("#opproceso").val()},
                url: "controles/ManteBancos.php",
                beforeSend: function (objeto) {
                    $('.mensaje1').css('display', 'block');
                    $(".mensaje1").html("<img src='img/cargando.gif'>");
                },
                complete: function (objeto) {
                    $('.mensaje1').css('display', 'none');
                },
                success: fnCreaTablaClienteCuentas
            });
            break;
    } /* end CASE */

return false;
}

/*=============================================================================
                        DocumentReady
 ==============================================================================*/
$(document).ready(function() {
    
    ControlesAlGuardar();
    eControlesAlGuardar();
    document.getElementById("imprimir_r").disabled = true;
    document.getElementById("anular").disabled = true;
    document.getElementById("eimprimir_r").disabled = true;
    document.getElementById("eanular").disabled = true;

    $("#dnib").keypress(function(e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            $.ajax({
                url: 'controles/DatosCliente.php',
                type: 'POST',
                dataType: 'json',
                data: {dni: $('#dnib').val()},
                beforeSend: function() {
                    $("#nombresb").html("Procesando, espere por favor...");
                }
            }).done(function(respuesta) {
                $("#idclienteb").val(respuesta.idcliente);
                $("#nombresb").val(respuesta.nombres);

            });
        } 
    });
    $("#dnir").keypress(function(e) {        
        if (e.which === 13) { 
            $.ajax({
                url: 'controles/DatosCliente.php',
                type: 'POST',
                dataType: 'json',
                data: {dni: $('#dnir').val()},
                beforeSend: function() {
                    $("#nombresr").html("Procesando, espere por favor...");
                }
            }).done(function(respuesta) {
                $("#idclienter").val(respuesta.idcliente);
                $("#nombresr").val(respuesta.nombres);

            });
        }

    }); 

    $("#destino").keypress(function(e) {
        if ($('#destino').val() !== $('#codsucursal').val()) {//verificamos sucursal diferente
            if (e.which === 13) {
                $.ajax({type: 'POST',dataType: 'json',
                    url: 'controles/ManteRecibidos.php',
                    data: {codsucu: $('#destino').val(),opt:"B"},
                    beforeSend: function() {
                        $("#destino").html("Procesando, espere por favor...");
                    }
                }).done(function(respuesta) {
                    $("#codsucursald").val(respuesta.codsucursal);
                    $("#destino").val(respuesta.nomsucursal);
                    $("#pdfdestino").val(respuesta.nomsucursal);/*para la impresion*/
                    $("#destino").attr("readonly",true);
                });
            }
        } else jAlert("Elija una SUCURSAL diferente...", "Transferencias");
    }); 
    
    $("#ednib").keypress(function(e) {    
        if (e.which === 13) {            
            $.ajax({type: 'POST',dataType: 'json',
                data: {dni: $('#ednib').val()},
                url: 'controles/DatosCliente.php',
                beforeSend: function() {
                    $("#enombresb").html("Procesando, espere por favor...");
                }
            }).done(function(respuesta) {
                $("#enombresb").val(respuesta.nombres);

            });
        }
    }); /*keypress*/
    $("#ednir").keypress(function(e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            /*alert('Has pulsado enter!');*/
            $.ajax({
                url: 'controles/DatosCliente.php',
                type: 'POST',
                dataType: 'json',
                data: {dni: $('#ednir').val()},
                beforeSend: function() {
                    $("#enombresr").html("Procesando, espere por favor...");
                }
            }).done(function(respuesta) {
                $("#enombresr").val(respuesta.nombres);

            });
        } /*END if*/

    }); /*keypress*/

    $("#ecodsucursal").keypress(function(e) {
        //13 es el código de la tecla
        if (e.which === 13) {
            $.ajax({
                url: 'controles/Datos_Sucursal.php',
                type: 'POST',
                dataType: 'json',
                data: {codsucu: $('#ecodsucursal').val()},
                beforeSend: function() {
                    $("#edestino").html("Procesando, espere por favor...");
                }
            }).done(function(respuesta) {
                $("#edestino").val(respuesta.nomsucursal);

            });
        } /*END if*/
    }); /*keypress*/
//var id_cliente="vacio";
$("#dnib").click(function(){
    $("#idcliente").val($("#idclienteb").val());
    $("#txt_datocliente").val($("#nombresb").val());
});
$("#dnir").click(function(){
    $("#idcliente").val($("#idclienter").val());
    $("#txt_datocliente").val($("#nombresr").val());
});
    $("#fecha_r").datepicker({
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
            MuestraRecibidos($('#fecha_r').val(), $('#optbuscar').val());
            $("#cuentas").css("display","block");
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });
    $("#efecha_r").datepicker({
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
            MuestraEntregados($('#efecha_r').val(), $('#optbuscar').val());
        }
        /*onClose: function (selectedDate){CalculaTotalesR();} */
    });

    $("#buscador").keyup(function() {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {  // Show only matching TR, hide rest of them
            $("#TRecibidos tbody>tr").hide();
            $("#TRecibidos td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        { // When there is no input or clean again, show everything back
            $("#TRecibidos tbody>tr").show();
        }
    });
    $.extend($.expr[":"],
            {
                "contains-ci": function(elem, i, match, array)
                {
                    return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                }
            });

    $("#ebuscador").keyup(function() {
        // When value of the input is not blank
        if ($(this).val() !== "")
        {// Show only matching TR, hide rest of them
            $("#TEntregados tbody>tr").hide();
            $("#TEntregados td:contains-ci('" + $(this).val() + "')").parent("tr").show();
        }
        else
        {   // When there is no input or clean again, show everything back
            $("#TEntregados tbody>tr").show();
        }
    });

/*==============================================================================
                                 Dialogos
 ===============================================================================*/
    $(function() {
        $("#dialogo_asigcuenta").dialog({autoOpen: false, resizable: true,
            modal: true, height: 400, width: 420,
            open: function(event, ui) {
                $("#txt_nrocuenta").css("display", "none");
                $("#txt_bancos").css("display", "none");
            },
            close: function(event, ui) {
                $("#txt_nrocuenta").val("");
                $("#txt_bancos").val("");
                $("#txt_nrocuenta").css("display", "none");
                $("#txt_bancos").css("display", "none");
                $("#opproceso").val("L");
            }
        });

        $("#busca_cuentas").click(function() {
            
            /*if ($("#nombresb").val().trim() === '')*/
            if ($("#idcliente").val().trim() === '')
            {
                jAlert("Seleccione un cliente...", "Agentes");
            }
            else {
                
                /*$("#txt_datocliente").val($("#nombresb").val());*/
                $("#dialogo_asigcuenta").dialog("open");
                fnListaInsertaCuentas($("#idcliente").val());
                $('#btn_asignacuenta').attr("disabled", true);
                $('#btn_eliminacuenta').attr("disabled", false);                
            }
        });
        /* ================================= EVENTOS CLICK ================== */
        $("#btn_asignacuenta").click(function() {
            $("#opproceso").val("I");
            fnListaInsertaCuentas($("#idcliente").val());
            $("#opproceso").val("L");
            $('#btn_asignacuenta').attr("disabled", true);
            $('#btn_nuevacuenta').attr("disabled", false);
            $('#btn_eliminacuenta').attr("disabled", false);                
            
            $("#txt_nrocuenta").val("");
            $("#txt_bancos").css("display", "none");
            $("#txt_nrocuenta").css("display", "none");
        });
        $("#btn_nuevacuenta").click(function() {
            $("#txt_bancos").css("display", "block");
            $("#txt_nrocuenta").css("display", "block");
            $("#txt_bancos").val("");
            $("#hid_idbanco").val("");
            $("#txt_nrocuenta").val("");
            $('#btn_asignacuenta').attr("disabled", false);
            $('#btn_eliminacuenta').attr("disabled", true);                
        });
        $("#btn_eliminacuenta").click(function() {
            $("#opproceso").val("A"); /* anular */
            jConfirm("¿Esta seguro de Eliminar a :" + $('#txt_nrocuenta').val(), "Agentes", function(r) {
                if (r) {
                    fnListaInsertaCuentas($("#idcliente").val());
                    $("#opproceso").val("L");
                    $("#txt_idbanco").val("");
                    $("#txt_nrocuenta").val("");
                    $('#btn_eliminacuenta').attr("disabled", true);
                    $('#btn_asignacuenta').attr("disabled", true);                    
                    $('#btn_nuevacuenta').attr("disabled", false);                    
                    $("#txt_bancos").css("display", "none");
                    $("#txt_nrocuenta").css("display", "none");
                } /* end if */
            });/* end jconfirm */
        });        
/*============================================================================*/
/*========================= AUTOCOMPLETA =====================================*/
/* enciando mnas de un para metro en autocompletar */
$('#txt_bancos').autocomplete({ 
            source: function (request, response) {
                $.ajax({
                    url: "controles/ManteBancos.php",
                    dataType: "json",
                    data: {
                        term: request.term,
                        opcion: $("#opt").val()
                    },
                    success: function (data) {
                        response(data);
                    }
                });
            },
            minLength: 2
});
$("#txt_bancos").focusout(function() {
    if ($("#txt_bancos").val().trim() !== '' ){
        $.ajax({
        url: 'controles/ManteBancos.php',
        type: 'POST',
        dataType: 'json', /* quitando espacion */
        data: {descbanco: $.trim($('#txt_bancos').val()), opcion:"BUSCADATO" }
        }).done(function(respuesta) {    
            $("#hid_idbanco").val(respuesta.idbanco);
        });
    }    
});


});

});
/*END document*/

function fnVerMasDatos(opcion) {
    switch (opcion) {
        case "mas":
            $(".oculto").css("display", "block");
            $("#opver").val('menos');
            break;
        case "menos":
            $(".oculto").css("display", "none");
            $("#opver").val('mas');
            break;
    }
}


