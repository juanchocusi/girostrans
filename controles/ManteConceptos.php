<?php
require 'ConectaMySql.php';

if (isset($_GET['opcionZZZ'])) {
    if ($_GET["opcion"] === "LISTA") {
        $sql = " call spListaInsertaConceptos('','','L'); ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                "idconcepto"  => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"],
                "grupo"       => $fila["grupo"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $json_string = json_encode($data);
        echo $json_string;
    }
    
} else {

    if ($_POST["opcion"] === "ACTUALIZA") {
        $query = $mysqli->query("update listaconceptos  set " . $_POST["campo"] . "='" . $_POST["valor"] . "' where idconceptos='" . intval($_POST["id"]) . "' ");
        if ($query)
            echo "<span class='ok'>Valores modificados correctamente.</span>";
        else
            echo "<span class='ko'>" . $mysqli->error . "</span>";
    }

    if ($_POST["opcion"] === "ANULA") {
        $query = $mysqli->query("update listaconceptos set anulado ='S' where idconceptos='" . $_POST["id"] . "'");
        if ($query)
            echo "<span class='ok'>Anulado correctamente.</span>";
        else
            echo "<span class='ko'>" . $db->error . "</span>";
    }
    
if ($_POST["opcion"] === "INSERTA") {
        $sql = "call spListaInsertaConceptos('','" . $_POST["descripcion"] . "','" . $_POST["idgasto"] . "','I'); ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                "idconcepto"  => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"],
                "grupo"       => $fila["grupo"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
		echo json_encode($data);
    }
    
    if ($_POST["opcion"] === "LISTA") {
        $sql = "call spListaInsertaConceptos('','','','L') ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                
                "idconcepto" => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"],
                "grupo"       => $fila["grupo"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
		echo json_encode($data);
    }    
    
    if ($_POST["opcion"] === "ANULA") {
        $sql = "call spListaInsertaConceptos('".$_POST["idconcepto"]."','','','A') ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(                
                "idconcepto" => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"],
                "grupo"       => $fila["grupo"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
		echo json_encode($data);
    }
    
    if ($_POST["opcion"] === "EDITA") {
        $sql = "call spListaInsertaConceptos('".$_POST["idconcepto"]."','".$_POST["descripcion"]."','".$_POST["idgasto"]."','E') ";
        if (!$result = mysqli_query($mysqli, $sql)) {
            die();
        }
        $data = array();
        while ($fila = mysqli_fetch_assoc($result)) {
            $data[] = array(
                
                "idconcepto" => $fila["idconcepto"],
                "descripcion" => $fila["descripcion"],
                "grupo"       => $fila["grupo"]
            );
        }
        $close = mysqli_close($mysqli); //or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        $data['success'] = true;
		echo json_encode($data);
    }
    
    
}
