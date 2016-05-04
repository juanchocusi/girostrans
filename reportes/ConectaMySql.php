<?php

$host 		= "giros04.db.11851382.hostedresource.com";
$db_name 	= "giros04";
$username 	= "giros04";
$password 	= "Panter@2015"; 
//connect to mysql server
$mysqli = new mysqli($host, $username, $password, $db_name);
mysqli_set_charset($mysqli, "utf8"); //formato de datos utf8
//check if any connection error was encountered
if(mysqli_connect_errno()) {
    echo "Error: Could not connect to database.";
    exit;
}
