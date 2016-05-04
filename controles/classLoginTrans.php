<?php
session_start();
$errmsg_arr = array();
$errflag = false;
/*// configuration
$dbhost 	= "BDTransferencias.db.11851382.hostedresource.com";
$dbname		= "BDTransferencias";
$dbuser		= "BDTransferencias";
$dbpass		= "Ninozzy666@";
*/
$dbhost="localhost";
$dbname="bdgirostransferencias";
$dbuser="juancho";
$dbpass="050522";

// database connection
$conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
// recibimos informacion desde el formulario con post

$user       = 'JUANCHO'; // $_POST['nusuario'];
$password   =  '050522'; // $_POST['pass'];
$codsucu    =   $_POST['codsucursal'];
$sucursal   =   $_POST['sucursal'];
if($user == '') {
	$errmsg_arr[] = 'Ingresa TU nombre de usuario';
	$errflag = true;
}
if($password == '') {
	$errmsg_arr[] = 'Ingresa TU password';
	$errflag = true;
}
if($codsucu == '') {
	$errmsg_arr[] = 'Elige Alguna Sucursal';
	$errflag = true;
}
if ($errflag == FALSE) {

//$result = $conn->prepare("SELECT * FROM usuario WHERE nusuario= ? AND pass= ?");
$result = $conn->prepare("call spVerificaUsuario(?,?,?)");
$result->bindParam(1,$user);
$result->bindParam(2,$password);
$result->bindParam(3,'MFT');
$result->execute();
//$rows = $result->fetch(PDO::FETCH_NUM);
//if($rows > 0) {
if($row = $result->fetch() ){ /*el sp devuelve siempre algun registro*/
    $_SESSION['usuario'] = $row['nombres'];
    $_SESSION['tipousuario'] = $row['tipousuario'];    
    $_SESSION['nick'] = $_POST['nusuario'];    
    $_SESSION['codsucursal'] = $_POST['codsucursal'];
    $_SESSION['colorsucursal'] = $_POST['colorsucursal'];
    $_SESSION['sucursal']=$sucursal;
    
    header("Location: ../panelinicio.php");
    }
    
else {
    $errmsg_arr[] = 'Usuario y Password no existqqqq';
	$errflag = true;
}
if($errflag) {
	$_SESSION['ERRMSG_ARR'] = $errmsg_arr;
	session_write_close();
	header("location: ../indexLoginTrans.php");
	exit();
}        
        
}        
