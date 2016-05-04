<?php

require 'ConectaMySql.php';

if (isset($_GET['opcionZZZ'])) {
    if ($_GET["opcion"] === "LISTAsasa") {
        $sql = " call spListaInsertaMasDatos('','','L'); ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                "idconcepto" => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $json_string = json_encode($data);
        echo $json_string;
    }
} else {

    if ($_POST["opcion"] === "INSERTA") {
        $sql = "call spListaInsertaMasDatos('','" . $_POST["descripcion"] . "','" . $_POST["idempresa"] . "','I'); ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
//        $data = array();
//        while ($fila = mysqli_fetch_assoc($result)) {
//            $data[] = array(
//                "idmasdatos" => $fila["idmasdatos"],
//                "descripcion" => $fila["descripcion"]
//            );
//        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
        echo json_encode($data);
    }

    if ($_POST["opcion"] === "LISTAzzzzzzzz") {
        $sql = "call spListaInsertaMasDatos('','','" . $_POST["idempresa"] . "','L') ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                "idmasdatos" => $fila["idmasdatos"],
                "descripcion" => $fila["descripcion"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
        echo json_encode($data);
    }

    if ($_POST["opcion"] === "ANULA") {
        $sql = "call spListaInsertaMasDatos('" . $_POST["idmasdatos"] . "','','','A') ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }

        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
        echo json_encode($data);
    }

    if ($_POST["opcion"] === "EDITA") {
         $consulta = "call spListaInsertaMasDatos('" . $_POST["idmasdatos"] . "','" . $_POST["descripcion"] . "','','E')";
        $result = $mysqli->query($consulta);
    }

    if ($_POST["opcion"] === "LISTA") {
        $query = $mysqli->query("call spListaInsertaMasDatos('','','" . $_POST["idempresa"] . "','L') ");
        $datos = array();
        while ($fila = $query->fetch_array()) {
            $datos[] = array(
                "idmasdatos" => $fila["idmasdatos"],
                "descripcion" => $fila["descripcion"]
            );
        }
        $data = json_encode($datos);
        echo ( $data );
    }
}
