<?php
/*
define('DB_SERVER', 'BDTransferencias.db.11851382.hostedresource.com');
define('DB_USER', 'BDTransferencias');
define('DB_PASSWORD', 'Ninozzy666@');
define('DB_NAME', 'BDTransferencias');
*/
date_default_timezone_set("America/Lima");
require 'ConectaMySql.php';

if(isset($_GET['term']))
/*if($_GET["opcion"]==="AUTOCOMPLETA")*/
{
$myArray = array();
if ($result = $mysqli->query("SELECT nusuario from usuariosistema WHERE nusuario like CONCAT('%','".$_GET["term"]."','%')"))
{ 
    while($row = $result->fetch_array(MYSQL_ASSOC)) {            
            $myArray[] = $row['nusuario'];
    }
    echo json_encode($myArray);
} 
$result->close();
$mysqli->close();
}
