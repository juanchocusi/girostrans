<?php
require 'ConectaMySql.php';

if (isset($_GET['term']))
{
    $return_arr = array();
    if ($result = $mysqli->query("SELECT nom_sucursal from sucursal WHERE nom_sucursal LIKE CONCAT('%','" . $_GET["term"] . "','%') order by nom_sucursal")) {
        while ($row = $result->fetch_array(MYSQL_ASSOC)) {
            $return_arr[] = $row['nom_sucursal'];
        }
        echo json_encode($return_arr);
    }
    $result->close();
    $mysqli->close();
} else { /* para evitar problemas al mezclar GET y POST  */



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}