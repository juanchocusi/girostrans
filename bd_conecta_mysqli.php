<?php

$host = "BDTransferencias.db.11851382.hostedresource.com";
$db_name = "BDTransferencias";
$username = "BDTransferencias";
$password = "Ninozzy666@";
/*
$host 		= "localhost";
$db_name 	= "bdtransferencias";
$username 	= "juancho";
$password 	= "050522"; 
*/
//connect to mysql server
$mysqli = new mysqli($host, $username, $password, $db_name);
//check if any connection error was encountered
if(mysqli_connect_errno()) {
    echo "Error: Could not connect to database.";
    exit;
}
?>