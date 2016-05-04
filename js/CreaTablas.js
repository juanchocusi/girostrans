
function CreaTablaB( json ){
var html; 

    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='B.[" + contador + "]' ondblclick='RecuperaFilaB(this.id);' onclick='fnRecuperaDatosCliente(this.id);'>";
      html += "<td class='oculto'>" + json[contador].idcliente  + "</td>";
      html += "<td>" + json[contador].dni_ruc    + "</td>";
      html += "<td>" + json[contador].apel_razon    + "</td>";
      html += "<td>" + json[contador].nombres + "</td>";
      
      html += "</tr>";
    } /*End FOR*/
//    html += "</table>";
    $("#resultado_b").html( html );
} 

function CreaTablaR( json ){
var html; 
    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th class='oculto' >id</th>";
    html +=             "<th >DNI</th>";
    html +=             "<th>Nombres</th>";
    html +=         "</tr>";
    html +=     "</thead>";
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='R.[" + contador + "]' onclick='RecuperaFilaR(this.id);'>";
      html += "<td class='oculto'>" + json[contador].idcliente  + "</td>";
      html += "<td>" + json[contador].dni_ruc    + "</td>";
      html += "<td>" + json[contador].apelnombre + "</td>";
      html += "</tr>";
    } 
    html += "</table>";
    $("#resultado_r").html( html );
} 


function CreaTablaS( return_arr ){
var html; 
/*html = "<p>Se encontraron [" + return_arr.length + "] registro(s)</p>";*/
  /*html += "<table border='1'>";*/

    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th>Codigo</th>";
    html +=             "<th>Sucursal</th>";
    html +=             "<th class='oculto' >dir</th>";
    html +=         "</tr>";
    html +=     "</thead>";
    for( var contador=0; contador < return_arr.length; contador++ ){
      html += "<tr id='su[" + contador + "]' ondblclick='RecuperaFilaS(this.id);'>";
      html += "<td>" + return_arr[contador].cod_sucursal + "</td>";
      html += "<td>" + return_arr[contador].nom_sucursal + "</td>";
      html += "<td class='oculto'>" + return_arr[contador].dir_sucursal + "</td>";
            
      html += "</tr>";
    } /*End FOR*/
    html += "</table>";
    $("#resultado_s").html( html );
} 


//function CreaTablaRecibidos(jsonrecibe) {
//    var html;
//    for (var contador = 0; contador < jsonrecibe.length; contador++) {
//        var i = contador + 1;
//        html += "<tr id='R[" + contador + "]' class='dato' onclick='RecuperaFila(this.id);'>";
//        /* 0 */ html += "<td>" + i + "</td>";
//        html += "<td id='correlativo'>"                     + jsonrecibe[contador].cod_girosucu + "</td>";        
//        html += "<td>"                                      + jsonrecibe[contador].fechahora_registro + "</td>";
//        html += "<td >"                                     + jsonrecibe[contador].dni_rucb + "</td>";
//        html += "<td>"                                      + jsonrecibe[contador].beneficiario + "</td>";
///* 5 */ html += "<td >"                                     + jsonrecibe[contador].dni_ruc + "</td>";
//        html += "<td>"                                      + jsonrecibe[contador].remitente + "</td>";
//        html += "<td>"                                      + jsonrecibe[contador].cod_sucursald + "</td>";
//        html += "<td align='right' class='editable' data-campo='importe_giro'><span>" + jsonrecibe[contador].importe_giro + "</span></td>";
//        html += "<td align='right' class='editable' data-campo='cargo_giro'><span>"   + jsonrecibe[contador].cargo_giro + "</span></td>";
//        /*10 */ html += "<td align='right' class='oculto'>" + jsonrecibe[contador].igv_giro + "</td>";
//        html += "<td align='right' class='oculto'>"         + jsonrecibe[contador].itf_giro + "</td>";
//        html += "<td align='right' class='editable' data-campo='otros'><span>"        + jsonrecibe[contador].otros + "</span></td>";
//        html += "<td align='right' class='editable' data-campo='total'><span>"        + jsonrecibe[contador].total + "</span></td>";
//        html += "<td>"                                      + jsonrecibe[contador].nro_cuenta + "</td>";
///*15 */ html += "<td class='editable' data-campo='nro_operacion'><span>" + jsonrecibe[contador].nro_operacion + "</span></td>";
//        html += "<td class='oculto'>"                       + jsonrecibe[contador].usuario_registra + "</td>";
//        html += "<td class='oculto'>"                       + jsonrecibe[contador].fechahora_entrega + "</td>";
//        html += "<td class='oculto'>"                       + jsonrecibe[contador].usuario_entrega + "</td>";
//        html += "<td class='editable' data-campo='observagiro'><span>" + jsonrecibe[contador].observagiro + "</span></td>";
//        /*20 */ html += "<td class='oculto'>"               + jsonrecibe[contador].ciudad_destino + "</td>";
//        html += "<td class='oculto'>"                       + jsonrecibe[contador].nom_sucursal + "</td>";
//        html += "<td>"                                      + jsonrecibe[contador].datapago + "</td>";
//        html += "<td class='oculto'>" + jsonrecibe[contador].anulado + "</td>";
//        html += "<td class='oculto'>" + jsonrecibe[contador].idcr + "</td>";
//        html += "<td class='oculto'>" + jsonrecibe[contador].idcb + "</td>";
//        html += "<td class='oculto'>" + jsonrecibe[contador].data_edita + "</td>";
///*27*/  html += "<td class='oculto'>" + jsonrecibe[contador].nro_boleta + "</td>";
//        html += "</tr>";
//    }
////    html += "<tr >";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th id='total_i'></th>";
////    html += "<th id='total_c'></th>";
////    html += "<th class='oculto' id='total_v'></th>";
////    html += "<th class='oculto' id='total_f'></th>";
////    html += "<th id='total_o'></th>";
////    html += "<th id='total_g'></th>";
////    html += "<th ></th>";
////    html += "<th ></th>";
////    html += "<th class='oculto'></th>";
////    html += "<th class='oculto'></th>";
////    html += "<th class='oculto'></th>";
////    html += "<th ></th>";
////    html += "<th class='oculto'></th>";
////    html += "<th class='oculto'></th>";
////    html += "<th ></th>";
////    html += "<th class='oculto'></th>";
////    html += "</tr>";
//    $("#tablarecibidos").html(html);
//    $("#tablarecibidos_1").html(html);
//    
//    CalculaTotalesR();
//}

//function CreaTablaEntregados(jsonrecibe) {
//    var html;
//    for (var contador = 0; contador < jsonrecibe.length; contador++) {
//        var i = contador + 1;
//        html += "<tr id='R[" + contador + "]' class='dato' ondblclick='eRecuperaFila(this.id);'>";
///* 0 */ html += "<td>" + i + "</td>";
//        html += "<td id='correlativo'>" + jsonrecibe[contador].cod_girosucu + "</td>";
//        html += "<td>"                  + jsonrecibe[contador].fechahora_registro + "</td>";
//        html += "<td >"  + jsonrecibe[contador].dni_rucb + "</td>";
//        html += "<td>"                  + jsonrecibe[contador].beneficiario + "</td>";
///* 5 */ html += "<td >"  + jsonrecibe[contador].dni_ruc + "</td>";
//        html += "<td>"                  + jsonrecibe[contador].remitente + "</td>";
//        html += "<td class='eoculto'>"  + jsonrecibe[contador].cod_sucursald + "</td>";
//        html += "<td align='right'>"    + jsonrecibe[contador].importe_giro + "</td>";
//        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].cargo_giro + "</td>";
///*10 */ html += "<td class='eoculto' align='right' class='oculto'>" + jsonrecibe[contador].igv_giro + "</td>";
//        html += "<td class='eoculto' align='right' class='oculto'>" + jsonrecibe[contador].itf_giro + "</td>";
//        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].otros + "</td>";
//        html += "<td class='eoculto' align='right'>" + jsonrecibe[contador].total + "</td>";
//        html += "<td>"                 + jsonrecibe[contador].nro_cuenta + "</td>";
///*15 */ html += "<td>"                 + jsonrecibe[contador].nro_operacion + "</td>";
//        html += "<td>"                 + jsonrecibe[contador].usuario_registra + "</td>";
//        html += "<td>"                 + jsonrecibe[contador].fechahora_entrega + "</td>";
//        html += "<td class='eoculto'>" + jsonrecibe[contador].usuario_entrega + "</td>";
//        html += "<td>"                 + jsonrecibe[contador].observagiro + "</td>";
///*20 */ html += "<td class='eoculto'>" + jsonrecibe[contador].ciudad_destino + "</td>";
//        html += "<td class='eoculto'>" + jsonrecibe[contador].nom_sucursal + "</td>";
//        html += "<td>"                 + jsonrecibe[contador].datapago + "</td>";
//        html += "<td class='eoculto'>" + jsonrecibe[contador].anulado + "</td>";
//        html += "</tr>";
//    }
//    html += "<tr >";
//    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
///*5*/html += "<th ></th>";
//    html += "<th class='eoculto'></th>";
//    html += "<th ></th>";
//    html += "<th id='etotal_i'></th>";
//    html += "<th class='eoculto'></th>";
///*10*/    html += "<th class='eoculto' id='total_v'></th>";
//    html += "<th class='eoculto' id='total_f'></th>";
//    html += "<th class='eoculto' id='total_o'></th>";
//    html += "<th class='eoculto' id='total_g'></th>";
//    html += "<th id='etotal_p' ></th>";
///*15*/    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
//    html += "<th ></th>";
///*20*/    html += "<th class='eoculto'></th>";
//    html += "<th class='eoculto'></th>";
//    html += "<th ></th>";
//    html += "<th class='eoculto'></th>";
//    html += "</tr>";
//    $("#tablaentregados").html(html);
//    eCalculaTotales();
//}

function eCreaTablaB( json ){
var html; 
/*html = "<p>Se encontraron [" + json.length + "] registro(s)</p>";
  html += "<table border='1'>";*/

    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th class='oculto' >id</th>";
    html +=             "<th>DNI</th>";
    html +=             "<th>Nombres</th>";
    html +=             "<th>Banco</th>";
    html +=             "<th>NroCuenta</th>";
    html +=         "</tr>";
    html +=     "</thead>";
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='B.[" + contador + "]' data-dismiss='modal' onclick='eRecuperaFilaB(this.id);'>";
      html += "<td class='oculto'>" + json[contador].idcliente  + "</td>";
      html += "<td>" + json[contador].dni_ruc    + "</td>";
      html += "<td>" + json[contador].apelnombre + "</td>";
      html += "<td>" + json[contador].iniciales  + "</td>";
      html += "<td>" + json[contador].nrocuenta  + "</td>";           
      html += "</tr>";
    } /*End FOR*/
    html += "</table>";
    $("#eresultado_b").html( html );
} 
 
function eCreaTablaR( json ){
var html; 
/*html = "<p>Se encontraron [" + json.length + "] registro(s)</p>";*/
  /*html += "<table border='1'>";*/

    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th class='oculto' >id</th>";
    html +=             "<th >DNI</th>";
    html +=             "<th>Nombres</th>";
    html +=             "<th>Banco</th>";
    html +=             "<th>NroCuenta</th>";
    html +=         "</tr>";
    html +=     "</thead>";
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='R.[" + contador + "]' data-dismiss='modal' onclick='eRecuperaFilaR(this.id);'>";
      html += "<td class='oculto'>" + json[contador].idcliente  + "</td>";
     html += "<td>" + json[contador].dni_ruc    + "</td>";
      html += "<td>" + json[contador].apelnombre + "</td>";
      html += "<td>" + json[contador].iniciales  + "</td>";
      html += "<td>" + json[contador].nrocuenta  + "</td>";           
      html += "</tr>";
    } /*End FOR*/
    html += "</table>";
    $("#eresultado_r").html( html );
} 

function eCreaTablaS( return_arr ){
var html; 
/*html = "<p>Se encontraron [" + return_arr.length + "] registro(s)</p>";*/
  /*html += "<table border='1'>";*/

    html +=     "<thead>";
    html +=         "<tr>";
    html +=             "<th>Codigo</th>";
    html +=             "<th>Sucursal</th>";
    
    html +=         "</tr>";
    html +=     "</thead>";
    for( var contador=0; contador < return_arr.length; contador++ ){
      html += "<tr id='S.[" + contador + "]' data-dismiss='modal' onclick='eRecuperaFilaS(this.id);'>";
      html += "<td>" + return_arr[contador].cod_sucursal + "</td>";
      html += "<td>" + return_arr[contador].nom_sucursal + "</td>";
      /*html += "<td>" + return_arr[contador].dir_sucursal + "</td>";*/
            
      html += "</tr>";
    } /*End FOR*/
    html += "</table>";
    $("#eresultado_s").html( html );
} 

function fnCreaTablaClienteCuentas( json )
{
//LimpiaTabla();
var html; 
    for( var contador=0; contador < json.length; contador++ ){
      html += "<tr id='us.[" + contador + "]' onclick='RecuperaFilaCuentas(this.id);' ondblclick='fnSeleccionaCuenta(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td>" + json[contador].nrocuenta + "</td>";
        html += "<td>" + json[contador].desc_banco + "</td>";
        //html += "<td class='btn btn-warning btn-xs'> <span class='glyphicon glyphicon-remove' ></span>" + "</td>";
      html += "</tr>";
    } /*End FOR*/

    $("#tbody_cuentas").html( html );
}

function fnCreaTablaCuentasxUsuario( jsoncxu )
{
//LimpiaTabla();
var html; 
    for( var contador=0; contador < jsoncxu.length; contador++ ){
      html += "<tr id='cu[" + contador + "]' onclick='fnSeleccionaCuenta(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td>"    + jsoncxu[contador].nusuario + "</td>";
        html += "<td >"   + jsoncxu[contador].iniciales + "</td>";
        html += "<td>"    + jsoncxu[contador].nrocuenta + "</td>";
      html += "</tr>";
    } /*End FOR*/

    $("#tbody_cuentasxusuario").html( html );
}

function fnCreaTablaBancos( jsonbancos )
{
var html; 
    for( var contador=0; contador < jsonbancos.length; contador++ ){
      html += "<tr id='ba[" + contador + "]' onclick='fnSeleccionaBanco(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td class='eoculto' >" + jsonbancos[contador].idbanco + "</td>";
        html += "<td >"                 + jsonbancos[contador].iniciales + "</td>";
        html += "<td>"                  + jsonbancos[contador].desc_banco + "</td>";
      html += "</tr>";
    } 

    $("#tbody_banco").html( html );
}

function fnCreaTablaAgentes( jsonbancos )
{
var html; 
    for( var contador=0; contador < jsonbancos.length; contador++ ){
      html += "<tr id='a[" + contador + "]' onclick='fnSeleccionaAgente(this.id);'>";
      var i=contador+1;
        html += "<td>" + i  + "</td>";
        html += "<td class='eoculto' >" + jsonbancos[contador].idbanco + "</td>";
        html += "<td >"                 + jsonbancos[contador].nrocuenta + "</td>";
        html += "<td >"                 + jsonbancos[contador].iniciales + "</td>";
        html += "<td>"                  + jsonbancos[contador].desc_banco + "</td>";
      html += "</tr>";
    }

    $("#body_agentes").html( html );
}

function fnCreaTablaSucursales( jsonsucus )
{
var html; 
    for( var ii=0; ii < jsonsucus.length; ii++ ){
      html += "<tr id='s[" + ii + "]' onclick='fnSeleccionaSucursales(this.id);'>";
      var i=ii+1;
        html += "<td>" + i  + "</td>";
        html += "<td>" + jsonsucus[ii].cod_sucursal + "</td>";
        html += "<td>" + jsonsucus[ii].nom_sucursal + "</td>";
        
      html += "</tr>";
    }

    $("#body_sucursales").html( html );
}