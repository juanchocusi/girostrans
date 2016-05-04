<?php

date_default_timezone_set("America/Lima");
require 'ConectaMySql.php';

if (isset($_GET['term']))
/* if($_GET["opcion"]==="AUTOCOMPLETA") */ {
    $myArray = array();
    $consulta = "SELECT idbanco,desc_banco FROM bancos WHERE desc_banco like CONCAT('%','" . $_GET["term"] . "','%') and grupo='C' order by desc_banco";
    if ($result = $mysqli->query($consulta)) {
        while ($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array(
                'value' => $row['desc_banco'],
                'id' => $row['idbanco']
            );
        }
        echo json_encode($myArray);
    }
    $result->close();
    $mysqli->close();
} else {

    if ($_POST["opcion"] === "SOLOAGENTES") { // se deberia cambiar por la palabra SOLOCUENTA
        $query = $mysqli->query("SELECT idbanco,desc_banco FROM bancos WHERE grupo='C' order by desc_banco");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $json = json_encode($datos);
        echo ( $json );
    }
    if ($_POST["opcion"] === "BUSCADATO") {
        $consulta = "SELECT idbanco from bancos where desc_banco='" . $_POST["descbanco"] . "'";
        $result = $mysqli->query($consulta);
        $respuesta = new stdClass();
        if ($result->num_rows > 0) {
            $fila = $result->fetch_array();
            $respuesta->idbanco = $fila['idbanco'];
        }
        echo json_encode($respuesta);
    }
    /* acciones para USUARIO */
    if ($_POST["opcion"] === "U") {
        $query = $mysqli->query("call spInsertaListaCuentas('" . $_POST["nrocuenta"] . "','" . $_POST["idbanco"] . "','0','" . $_POST["idusuario"] . "','" . $_POST["usuamodifica"] . "','" . $_POST["opcion"] . "','".$_POST["opproce"]."','".$_POST["codempresa"]."')");
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

    if ($_POST["opcion"] === "C")/* acciones para CLIENTE */ {
        $query = $mysqli->query("call spInsertaListaCuentas('" . $_POST["nrocuenta"] . "','" . $_POST["idbanco"] . "','" . $_POST["idcliente"] . "','0','" . $_POST["usuamodifica"] . "','" . $_POST["opcion"] . "','".$_POST["opproce"]."','".$_POST["idempresa"]."')");
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

    /* devuelve cuenta por BANCO */
    if ($_POST["opcion"] === "CxU") {
        $codbanco = $_POST["idbanco"];
        $idbanco = (int) $codbanco;
        $query = $mysqli->query("call spMuestraCuentaxUsuario($idbanco,'".$_POST["idempresa"]."')");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "nusuario" => $cierre["nusuario"],
                "iniciales" => $cierre["iniciales"],
                "nrocuenta" => $cierre["nrocuenta"]
            );
        }
        $jsoncxu = json_encode($datos);
        echo ( $jsoncxu );
    }
    /***************** filtra bancos para hacer el pago de giros ******************************************/
    if ($_POST["opcion"] === "CxU2") {
    $query = $mysqli->query("call spBuscaUsuarioCuenta('".$_POST["valor"]."','".$_POST["idempresa"]."','".$_POST["opsql"]."')");
    $datos = array();
    while ($cierre = $query->fetch_array()) {
        $datos[] = array
            (
            "nusuario" => $cierre["nusuario"],
            "iniciales" => $cierre["iniciales"],
            "nrocuenta" => $cierre["nrocuenta"]
            
        );
    }
    $jsoncxu = json_encode($datos);
    echo ( $jsoncxu );
}
    if ($_POST["opcion"] === "MB") /* muestra banco con limite */ {
        $query = $mysqli->query("select DISTINCT(b.idbanco),b.iniciales,b.desc_banco from bancos b JOIN cuentas c on b.idbanco = c.idbanco where b.anulado='N' and c.usuamodifica <> 'sistema' ");
        //$query = $mysqli->query("select DISTINCT(b.idbanco),b.iniciales,b.desc_banco from bancos b JOIN cuentas c on b.idbanco = c.idbanco where b.anulado='N' and b.grupo = '".$_POST["grupo"]."' ");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }
//    muestra bancos funcion pagar
    if ($_POST["opcion"] === "MBANCOS") {
        $query = $mysqli->query(" select idbanco,iniciales,desc_banco from bancos where grupo = 'C' and anulado='N' ");
        //$query = $mysqli->query("select DISTINCT(b.idbanco),b.iniciales,b.desc_banco from bancos b JOIN cuentas c on b.idbanco = c.idbanco where b.anulado='N' and b.grupo = '".$_POST["grupo"]."' and c.idempresa='".$_POST["idempresa"]."' ");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "TRANS") {
        $query = $mysqli->query("select idbanco,iniciales,desc_banco from bancos where anulado='N' and grupo = '" . $_POST["grupo"] . "'  ORDER by idbanco ASC ");
        //$query = $mysqli->query("select DISTINCT(b.idbanco),b.iniciales,b.desc_banco from bancos b JOIN cuentas c on b.idbanco = c.idbanco where b.anulado='N' and b.grupo = '".$_POST["grupo"]."' ");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "AGENTES") {
        $query = $mysqli->query(" select b.idbanco,c.nrocuenta,b.iniciales,b.desc_banco from bancos b left JOIN cuentas c on b.idbanco=c.idbanco where b.grupo='A' and b.anulado='N' and c.anulado='N' and c.idempresa='".$_POST["idempresa"]."' order by 2; ");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "nrocuenta" => $cierre["nrocuenta"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "AGENTES_DIARIO") {
        $query = $mysqli->query(" select c.nrocuenta,b.iniciales,b.desc_banco from bancos b  JOIN cuentas c on b.idbanco=c.idbanco where b.grupo='A' and b.anulado='N' and c.anulado='N' and c.idempresa='".$_POST["idempresa"]."' order by 2; ");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "nrocuenta" => $cierre["nrocuenta"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "MBB") {
        $query = $mysqli->query("SELECT idbanco,iniciales,desc_banco FROM bancos where desc_banco like CONCAT('%','" . $_POST["valor"] . "','%') and anulado='N' order by desc_banco");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $cierre["idbanco"],
                "iniciales" => $cierre["iniciales"],
                "desc_banco" => $cierre["desc_banco"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }
    
//    if ($_POST["opcion"] === "CxU2")/* devuelve cuenta por usuario */ {
//
//        $query = $mysqli->query("call spBuscaUsuarioCuenta('" . $_POST["valor"] . "','" . $_POST["opsql"] . "' )");
//        $datos = array();
//        while ($cierre = $query->fetch_array()) {
//            $datos[] = array
//                (
//                "iniciales" => $cierre["iniciales"],
//                "nrocuenta" => $cierre["nrocuenta"],
//                "nusuario" => $cierre["nusuario"]
//            );
//        }
//        $jsoncxu = json_encode($datos);
//        echo ( $jsoncxu );
//    }

    if ($_POST["opcion"] === "LISTA")/* LISTA BANCOS */ {
        $query = $mysqli->query("select idbanco,desc_banco,iniciales,direccion,web,telefono,CASE grupo WHEN grupo='A' THEN 'BANCO' ELSE 'AGENTE' END as grupo from bancos WHERE anulado='N' order BY desc_banco,grupo");
        $datos = array();
        while ($lbanco = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $lbanco["idbanco"],
                "desc_banco" => $lbanco["desc_banco"],
                "iniciales" => $lbanco["iniciales"],
                "direccion" => $lbanco["direccion"],
                "web" => $lbanco["web"],
                "telefono" => $lbanco["telefono"],
                "grupo" => $lbanco["grupo"]
            );
        }
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "INSERTA") {
        $query = $mysqli->query("call spInsertaListaBancos ('" . $_POST["descripcion"] . "','" . $_POST["iniciales"] . "','" . $_POST["direccion"] . "','" . $_POST["web"] . "','" . $_POST["telefono"] . "','" . $_POST["grupo"] . "','".$_POST["nrocuenta"]."','".$_POST["idempresa"]."')");
        $datos = array();
        while ($lbanco = $query->fetch_array()) {
            $datos[] = array
                (
                "idbanco" => $lbanco["idbanco"],
                "desc_banco" => $lbanco["desc_banco"],
                "iniciales" => $lbanco["iniciales"],
                "direccion" => $lbanco["direccion"],
                "web" => $lbanco["web"],
                "telefono" => $lbanco["telefono"],
                "grupo" => $lbanco["grupo"]
            );
        }
        //echo "<span class='ok'>Banco agregado correctamente.</span>";
        $jsonbancos = json_encode($datos);
        echo ( $jsonbancos );
    }

    if ($_POST["opcion"] === "ACTUALIZA") /* ============== Actualiza =========== */ {
        $query = $mysqli->query("update bancos set " . $_POST["campo"] . "='" . $_POST["valor"] . "' where idbanco='" . intval($_POST["id"]) . "' ");
        if ($query)
            echo "<span class='ok'>Valores modificados correctamente.</span>";
        else
            echo "<span class='ko'>" . $db->error . "</span>";
    }

    if ($_POST["opcion"] === "ANULA") /* ================= Anula ============ */ {
        $query = $mysqli->query("update bancos set anulado ='S' where idbanco='" . $_POST["idbanco"] . "' ");
        if ($query)
            echo "<span class='ok'>Anulado correctamente.</span>";
        else
            echo "<span class='ko'>" . $db->error . "</span>";
    }






    /* $result->close(); */
    $mysqli->close();
}/* end de ELSE*/