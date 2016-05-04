<?php
include 'ConectaMySql.php';
if (isset($_GET['term']) || isset($_GET["opcion"]) ){
    if (isset($_GET['term'])) {
        $return_arr = array();
        if ($result = $mysqli->query("SELECT idusuario,nusuario from usuariosistema WHERE nusuario LIKE CONCAT('%','" . $_GET["term"] . "','%') order by nusuario")) {
            while ($row = $result->fetch_array(MYSQL_ASSOC)) {            
                $return_arr[] = array(
                       'value' 	=> $row['nusuario'], 
                       'id' 	=> $row['idusuario']
                       );
            }
            echo json_encode($return_arr);
        }
        $result->close();
        $mysqli->close();
    }
    
} else {
    if ($_POST["opcion"] === "ANULA") {
        $query = $mysqli->query("update usuariosistema set anulado ='S' where idusuario='" . $_POST["idusuario"] . "' ");
        if ($query)
        echo "<span class='ok'>Anulado correctamente.</span>";
        else
        echo "<span class='ko'>" . $db->error . "</span>";
        
    }

    if ($_POST["opcion"] === "L") {
        $query = $mysqli->query("select idusuario,dni_usuario,apellidos_usuario,nombres_usuario,nusuario,direccion_usuario,telefono_usuario,e_mail,tipousuario from usuariosistema where anulado='N' order by 3");
        $datos = array();
        while ($usuarios = $query->fetch_array()) {
            $datos[] = array(
                "id"         => $usuarios["idusuario"],
                "dni_usuario"       => $usuarios["dni_usuario"],
                "apellidos_usuario" => $usuarios["apellidos_usuario"],
                "nombres_usuario"   => $usuarios["nombres_usuario"],
                "nusuario"          => $usuarios["nusuario"],
                "direccion_usuario" => $usuarios["direccion_usuario"],
                "telefono_usuario"  => $usuarios["telefono_usuario"],
                "e_mail"            => $usuarios["e_mail"],
                "tipousuario"       => $usuarios["tipousuario"]
            );
        }
        //echo ($datos);
        $jsonusers = json_encode($datos);
        echo ( $jsonusers );
    }
    if ($_POST["opcion"] === "INSERTA") {
        $query = $mysqli->query(" call spInsertaListaUsuarios('".$_POST["dni"]."','".$_POST["apellidos"]."','".$_POST["nombres"]."','".$_POST["nick"]."','".$_POST["direccion"]."','".$_POST["telefono"]."','".$_POST["email"]."','".$_POST["pw"]."','".$_POST["tipo"]."') ");
        $datos = array();
        while ($usuarios = $query->fetch_array()) {
            $datos[] = array(
                "id"         => $usuarios["idusuario"],
                "dni_usuario"       => $usuarios["dni_usuario"],
                "apellidos_usuario" => $usuarios["apellidos_usuario"],
                "nombres_usuario"   => $usuarios["nombres_usuario"],
                "nusuario"          => $usuarios["nusuario"],
                "direccion_usuario" => $usuarios["direccion_usuario"],
                "telefono_usuario"  => $usuarios["telefono_usuario"],
                "e_mail"            => $usuarios["e_mail"],
                "tipousuario"       => $usuarios["tipousuario"]
            );
        }
        $jsonusers = json_encode($datos);
        echo ( $jsonusers );
    }
    
    if ($_POST["opcion"] === "B") {
        $query = $db->query("call BuscaUsuarioSucursal('".$_POST["nusuario"]."','" . $_POST["op"] . "')");
        $datos = array();
        while ($cierre = $query->fetch_array()) {
            $datos[] = array("nom_sucursal" => $cierre["nom_sucursal"], "nusuario" => $cierre["nusuario"]);
        }
        $json = json_encode($datos);
        echo ( $json );
        /* $cierre->close();
          $db->close(); */
    }
    if ($_POST["opcion"] === "I") { // INSERTA USUARIOSUCURSAL
        $consulta = "insert into UsuarioSucursal values ('" . $_POST["codsucursal"] . "','" . $_POST["nusuario"] . "')";
        $result = $db->query($consulta);
    }
    if ($_POST["opcion"] === "E") { // ELIMINA UsuarioSucursal
        $codsucursal = trim($_POST["codsucursal"]);
        $usuario = trim($_POST["nusuario"]);
        $consulta = "call spAnulaUsuarioSucursal('$codsucursal','$usuario')";
        $result = $db->query($consulta);
    }  
    
    if ($_POST["opcion"] === "INSERTAUS") {
        $query = $mysqli->query( " call spInsertaListaUS('".$_POST["nick"]."','".$_POST["codsucu"]."','".$_POST["op"]."') " );
        $datos = array();
        while ($usuarios = $query->fetch_array()) {
            $datos[] = array(
                "flag"         => $usuarios["flag"],
                "nusuario"     => $usuarios["nusuario"],
                "cod_sucursal" => $usuarios["cod_sucursal"],
                "nom_sucursal" => $usuarios["nom_sucursal"]
            );
        }
        $jsonusers = json_encode($datos);
        echo ( $jsonusers );
    }    
    
    if ($_POST["opcion"] === "USUARIOSUCURSAL") {
        $query = $mysqli->query( " call spInsertaListaUS('".$_POST["nick"]."','".$_POST["codsucu"]."','".$_POST["op"]."') ");
        $datos = array();
        while ($usuarios = $query->fetch_array()) {
            $datos[] = array(
                "flag"         => $usuarios["flag"],
                "nusuario"     => $usuarios["nusuario"],
                "cod_sucursal" => $usuarios["cod_sucursal"],
                "nom_sucursal" => $usuarios["nom_sucursal"]                
            );
        }
        $jsonusers = json_encode($datos);
       echo ( $jsonusers );
    }
    
    if ($_POST["opcion"] === "PASS") { 
        $consulta = " UPDATE usuariosistema set pass = '".$_POST["password"]."' where idusuario = '".$_POST["idusuario"]."' ";
        $result = $mysqli->query($consulta);
    }
    
   if($_POST["opcion"]==="ACTUALIZA")  /*============== Actualiza ===========*/
    {    
    $query = $mysqli->query("update usuariosistema set ".$_POST["campo"]."='".$_POST["valor"]."' where idusuario='".intval($_POST["id"])."' ");    
    if ($query) echo "<span class='ok'>Valores modificados correctamente.</span>";
		else echo "<span class='ko'>".$db->error."</span>";    
    } 
    
}

