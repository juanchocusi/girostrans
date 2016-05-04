<?php
date_default_timezone_set("America/Lima");
$Fechahora = date("Y-m-d H:i:s");
//$FechaHoy = date("Y-m-d");
require 'ConectaMySql.php';

if (isset($_GET['term']))
/* if($_GET["opcion"]==="AUTOCOMPLETA") */ {
    $myArray = array();
    if ($result = $mysqli->query("SELECT idbanco,desc_banco FROM bancos WHERE desc_banco like CONCAT('%','" . $_GET["term"] . "','%') order by desc_banco")) {
        while ($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row['desc_banco'];
        }
        echo json_encode($myArray);
    }
    $result->close();
    $mysqli->close();
} else { /* para evitar problemas al mezclar GET y POST  */

    if ($_POST["opcion"] === "BUSCADATO")
    {
        $consulta = "SELECT idbanco from bancos where desc_banco='" . $_POST["descbanco"] . "'";
        $result = $mysqli->query($consulta);
        $respuesta = new stdClass();
        if ($result->num_rows > 0) {
            $fila = $result->fetch_array();
            $respuesta->idbanco = $fila['idbanco'];
        }
        echo json_encode($respuesta);
    }

    if ($_POST["opcion"] === "U")/* acciones para USUARIO */ {
        $query = $mysqli->query("call spInsertaListaCuentas('" . $_POST["nrocuenta"] . "','" . $_POST["idbanco"] . "','0','" . $_POST["idusuario"] . "','" . $_POST["usuamodifica"] . "','" . $_POST["opcion"] . "','" . $_POST["opproce"] . "')");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "nrocuenta" => $cierre["nrocuenta"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $json = json_encode($datos);
        echo ( $json );
    }
    
    if ($_POST["opcion"] === "BUSCAR")/* acciones para USUARIO */ {
        if($_POST["opt"]=="D"){
            $query=$mysqli->query("select idcliente,dni_ruc,apel_razon,nombres,direccion,telefono,e_mail,usua_modi,fecha_modi from cliente where dni_ruc like '%".$_POST["buscacli"]."%' and anulado='N' limit 50");
            $datos=array();
        }
        if($_POST["opt"]=="A") {
            $query=$mysqli->query("select idcliente,dni_ruc,apel_razon,nombres,direccion,telefono,e_mail,usua_modi,fecha_modi from cliente where apel_razon like '".$_POST["buscacli"]."%' and anulado='N' limit 50");
            $datos=array();
        }
        while ($cliente=$query->fetch_array())
        {
            $datos[]=array(
            "id"            =>$cliente["idcliente"],
            "dni_ruc"       =>$cliente["dni_ruc"],
            "apel_razon"    =>$cliente["apel_razon"],
            "nombres"       =>$cliente["nombres"],
            "direccion"     =>$cliente["direccion"], 
            "telefono"      =>$cliente["telefono"], 
            "e_mail"        =>$cliente["e_mail"],
            "usua_modi"     =>$cliente["usua_modi"],
            "fecha_modi"    =>$cliente["fecha_modi"]
            );
        }
        echo json_encode($datos);
    }    
    
    if ($_POST["opcion"] === "ACTUALIZA") {
        $query = $mysqli->query("update cliente  set ".$_POST["campo"]."='".$_POST["valor"]."', usua_modi='".$_POST["usuario"]."',fecha_modi='".$Fechahora."' where idcliente='".intval($_POST["id"])."' ");
        if ($query)
            echo "<span class='ok'>Valores modificados correctamente.</span>";
        else
            echo "<span class='ko'>" . $mysqli->error . "</span>";
    }
    
    if ($_POST["opcion"] === "ACTUALIZATODO") {
        $query = $mysqli->query("update cliente  set dni_ruc ='".$_POST["dniruc"]."', apel_razon ='".$_POST["apelrazon"]."', 
        nombres ='".$_POST["nombre"]."',direccion='".$_POST["direccion"]."',telefono='".$_POST["fono"]."',e_mail='".$_POST["email"]."',
        usua_modi='".$_POST["usuamodi"]."',fecha_modi='".$Fechahora."' where idcliente='".intval($_POST["id"])."' ");
        if ($query)
            echo "<span class='ok'>Valores modificados correctamente.</span>";
        else
            echo "<span class='ko'>" . $mysqli->error . "</span>";
    }
    
    
    if ($_POST["opcion"] === "ANULAR") {
        $query = $mysqli->query("update cliente  set anulado = 'S'  where idcliente='" . intval($_POST["id"]) . "' ");
        if ($query)
            echo "<span class='ok'>Anulado correctamente.</span>";
        else
            echo "<span class='ko'>" . $mysqli->error . "</span>";
    }
    
    if ($_POST["opcion"] === "INSERTA")
    {
        $query = $mysqli->query("call spInsertaCliente('".$_POST["dniruc"]."','".$_POST["apelrazon"]."','".$_POST["nombre"]."','".$_POST["direccion"]."','" . $_POST["fono"]."','".$_POST["email"]."','".$_POST["usuamodi"]."')");
        $datos = array();
        while ($cliente = $query->fetch_array()) {
            $datos[]=array(
            "flag"          =>$cliente["flag"],
            "id"            =>$cliente["idcliente"],
            "dni_ruc"       =>$cliente["dni_ruc"],
            "apel_razon"    =>$cliente["apel_razon"],
            "nombres"       =>$cliente["nombres"],
            "direccion"     =>$cliente["direccion"], 
            "telefono"      =>$cliente["telefono"], 
            "e_mail"        =>$cliente["e_mail"],
            "usua_modi"     =>$cliente["usua_modi"],
            "fecha_modi"    =>$cliente["fecha_modi"]
            );
        }
        $json = json_encode($datos);
        echo ( $json );
    }
    
if ($_POST["opcion"] === "EDITA") {
        $query = $mysqli->query("call spEditaCliente('".$_POST["idcliente"]."','".$_POST["dniruc"]."','".$_POST["nombre"]."','".$_POST["apelrazon"]."','".$_POST["usuamodi"]."')");
        $datos = array();
        while ($cliente = $query->fetch_array()) {
            $datos[]=array(
            "flag"          =>$cliente["flag"],            
            "apel_razon"    =>$cliente["apel_razon"],
            "nombres"       =>$cliente["nombres"]        
            );
        }
        $json = json_encode($datos);
        echo ( $json );
    }   
    
    
    $mysqli->close();    
}/*fin else*/
