<?php
require 'ConectaMySql.php';
if(isset($_GET['sucursal']))
/*if($_GET["opcion"]==="AUTOCOMPLETA")*/
{
$sucu = $_GET["sucursal"];
$myArray = array();
if ( $result = $mysqli->query(" select cod_sucursal FROM sucursal WHERE cod_sucursal = $sucu ") )
{ 
    while($row = $result->fetch_array(MYSQL_ASSOC)) {            
            $myArray[] = $row['cod_sucursal'];
    }
    echo json_encode($myArray);
} 
//$result->close();
$mysqli->close();
}


            
             