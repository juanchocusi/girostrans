<?php
require 'ConectaMySql.php';
date_default_timezone_set("America/Lima");
$fecha= date("Y-m-d");

if (isset($_GET['term']) || isset($_GET["opcion"])) {

    if (isset($_GET['term'])) {
        $return_arr = array();
        if ($result = $mysqli->query("SELECT cod_sucursal,nom_sucursal from sucursal WHERE nom_sucursal LIKE CONCAT('%','" . $_GET["term"] . "','%') order by nom_sucursal")) {
            while ($row = $result->fetch_array(MYSQL_ASSOC)) {
                //$return_arr[] = $row['nom_sucursal'];
                //$return_arr[] = $row['cod_sucursal'];
                $return_arr[] = array(
                    'value' => $row['nom_sucursal'],
                    'id' => $row['cod_sucursal']
                );
            }
            echo json_encode($return_arr);
        }
        $result->close();
        $mysqli->close();
    } else {

        if ($_GET["opcion"] === "LISTA") {
            //generamos la consulta
            $sql = " SELECT idsucursal,nom_sucursal,cod_sucursal,dir_sucursal,fono_sucursal,e_mail FROM sucursal WHERE anulado = 'N' and idempresa='".$_GET["idempresa"]."' order by cod_sucursal ";
            if (!$result = mysqli_query($mysqli, $sql)) {
                die();
            }
            $sucus = array(); //creamos un array
            while ($sucu = mysqli_fetch_assoc($result)) {
                $sucus[] = array(
                    "idsucursal"    => $sucu["idsucursal"],
                    "nom_sucursal"  => $sucu["nom_sucursal"],
                    "cod_sucursal"  => $sucu["cod_sucursal"],
                    "dir_sucursal"  => $sucu["dir_sucursal"],
                    "fono_sucursal" => $sucu["fono_sucursal"],
                    "e_mail"        => $sucu["e_mail"]                    
                );
            }
            //desconectamos la base de datos
            $close = mysqli_close($mysqli) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
            //Creamos el JSON
            $json_string = json_encode($sucus);
            echo $json_string;
            //Si queremos crear un ARCHIVO json, sería de esta forma:
            /*
              $file = 'clientes.json';
              file_put_contents($file, $json_string);
             */
        }

        if ($_GET["opcion"] === "INSERTA") {
            $sql = " CALL spInsertaListaSucursal('" . $_GET["nombre"] . "','" . $_GET["codigo"] . "','" . $_GET["dir"] . "','" . $_GET["fono"] . "','".$_GET["email"]."','".$_GET["idempresa"]."') ";
            if (!$result = mysqli_query($mysqli, $sql)) {
                die();
            }
            $sucus = array();
            while ($sucu = mysqli_fetch_assoc($result)) {
                $sucus[] = array(
                    "flag" => $sucu["flag"],
                    "idsucursal" => $sucu["idsucursal"],
                    "nom_sucursal" => $sucu["nom_sucursal"],
                    "cod_sucursal" => $sucu["cod_sucursal"],
                    "dir_sucursal" => $sucu["dir_sucursal"],
                    "fono_sucursal" => $sucu["fono_sucursal"],
                    "e_mail" => $sucu["e_mail"]
                );
            }
            $close = mysqli_close($mysqli) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
            $json_string = json_encode($sucus);
            echo $json_string;
        }
    }
} else { /* para evitar problemas al mezclar GET y POST  */

    if ($_POST["opcion"] === "ANULA"){
        $query = $mysqli->query(" call spAnulaSucursal('".$_POST["idsucu"]."','".$_POST["codsucu"]."')");        
        if ($query)
            echo "<span class='ok'>Anulado correctamente.</span>";
        else
            echo "<span class='ko'>" . $db->error . "</span>";
    }

    if ($_POST["opcion"] === "DATOS") {
        $consulta = "select cod_sucursal,color_sucursal,nom_sucursal FROM sucursal WHERE nom_sucursal = '" . $_POST["sucursal"] . "'";
        $result = $mysqli->query($consulta);
        $respuesta = new stdClass();
        if ($result->num_rows > 0) {
            $fila = $result->fetch_array();
            $respuesta->codsucursal = $fila['cod_sucursal'];
            $respuesta->colorsucursal = $fila['color_sucursal'];
            $respuesta->nomsucursal = $fila['nom_sucursal'];
        }
        echo json_encode($respuesta);
    }
    if ($_POST["opcion"] === "ACTUALIZA") {
        $query = $mysqli->query("update sucursal  set " . $_POST["campo"] . "='" . $_POST["valor"] . "'  where idsucursal='" . intval($_POST["id"]) . "' ");
        if ($query)
            echo "<span class='ok'>Valores modificados correctamente.</span>";
        else
            echo "<span class='ko'>" . $mysqli->error . "</span>";
    }





    /* $result->close(); */
    $mysqli->close();
}    