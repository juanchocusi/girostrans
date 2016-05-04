<?php
require 'ConectaMySql.php';

/*if (isset($_GET['term']) || isset($_GET["opcion"]) || isset($_GET["opt"]) )*/
if (isset($_GET["opcion"]) )    
{      
        if ($_GET["opcion"] === "LISTA"){
        //generamos la consulta
        $sql = "SELECT 0 AS flag,idtipotransaccion,descripcion, 
  CASE WHEN tipo='S'  THEN 'SALIDA' ELSE 'INGRESO' END as tipo, 
  CASE WHEN grupo='A' THEN 'AGENTE' ELSE 'CTA-ASOC'  END as grupo,
  CASE WHEN dinero='E' THEN 'EFECTIVO' WHEN dinero='C' then 'CUENTA' 
  WHEN dinero = 'EC' then 'EFECTIVO-CUENTA' WHEN dinero = 'CA' then 'CTA-ASOCIADO' 
  END as dinero from tipotransaccion where anulado='N' order by grupo,idtipotransaccion;";
        if (!$result = mysqli_query($mysqli, $sql)){ die();}
        $tipotran = array(); //creamos un array
        while ($ttran = mysqli_fetch_assoc($result)) {   
            $tipotran[] = array(
                "flag"              => $ttran["flag"],
                "idtipotransaccion" => $ttran["idtipotransaccion"],
                "descripcion"       => $ttran["descripcion"],
                "tipo"              => $ttran["tipo"],
                "grupo"             => $ttran["grupo"],
                "dinero"             => $ttran["dinero"]
            );
        }
        //desconectamos la base de datos
        $close = mysqli_close($mysqli) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
        //Creamos el JSON
        $json_string = json_encode($tipotran);
        echo $json_string;
        //Si queremos crear un ARCHIVO json, sería de esta forma:
        /*
          $file = 'clientes.json';
          file_put_contents($file, $json_string);
         */
        }

        if ($_GET["opcion"] === "INSERTA"){    
            $sql = " CALL spInsertaListaTTran('" . $_GET["nombre"] . "','" . $_GET["tipo"] . "','" . $_GET["grupo"] . "','" . $_GET["money"] . "' ) ";
            if (!$result = mysqli_query($mysqli, $sql)){ die();}
            $tipotran = array(); 
            while ($ttran = mysqli_fetch_assoc($result)) {   
                $tipotran[] = array(
                    "flag"              => $ttran["flag"],
                    "idtipotransaccion" => $ttran["idtipotransaccion"],
                    "descripcion"       => $ttran["descripcion"],
                    "tipo"              => $ttran["tipo"],
                    "grupo"             => $ttran["grupo"],
                    "dinero"            => $ttran["dinero"]
                );
            }    
            $close = mysqli_close($mysqli) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");    
            $json_string = json_encode($tipotran);
            echo $json_string;    
            }            
    }    
      else { /* para evitar problemas al mezclar GET y POST  */
    
            if ($_POST["opcion"] === "ANULA") /* ================= Anula ============ */ {
                $query = $mysqli->query("update tipotransaccion set anulado ='S' where idtipotransaccion='" . $_POST["idttran"] . "' ");
                if ($query)
                    echo "<span class='ok'>Anulado correctamente.</span>";
                else
                    echo "<span class='ko'>" . $db->error . "</span>";
            }
            
            if ($_POST["opcion"] === "ACTUALIZA") {
            $query = $mysqli->query("update tipotransaccion  set " . $_POST["campo"] . "='" . $_POST["valor"] . "'  where idtipotransaccion='" . intval($_POST["id"]) . "' ");
            if ($query)
                echo "<span class='ok'>Valores modificados correctamente.</span>";
            else
                echo "<span class='ko'>" . $db->error . "</span>";
            }






    /* $result->close();*/
 $mysqli->close();    
}    