<?php
//$host 		= "localhost";
//$db_name 	= "girostransferencias";
//$username 	= "juancho";
//$password 	= "050522"; 
$host 		= "money2017.db.11851382.hostedresource.com";
$db_name 	= "money2017";
$username 	= "money2017";
$password 	= "Panter@2017"; 
//connect to mysql server
$mysqli = new mysqli($host, $username, $password, $db_name);
mysqli_set_charset($mysqli, "utf8"); //formato de datos utf8
//check if any connection error was encountered
if(mysqli_connect_errno()) {
    echo "Error: Could not connect to database.";
    exit;
}
