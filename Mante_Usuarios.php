<?php

$dbhost="BDTransferencias.db.11851382.hostedresource.com";
$dbname="BDTransferencias";
$dbuser="BDTransferencias";
$dbpass="Ninozzy666@";
/*
$dbhost="localhost";
$dbname="bdtransferencias";
$dbuser="juancho";
$dbpass="050522";

date_default_timezone_set("America/Lima");
$fechahora= date("Y-m-d H:i:s", (strtotime ("-7 Hours")));
*/
$db = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
if($_POST["opt"]==="B")
{    
    $query=$db->query("call BuscaUsuarioSucursal('".$_POST["nusuario"]."','".$_POST["op"]."')");                
    $datos=array();
    while ($cierre=$query->fetch_array())
    {
        $datos[]=array("nom_sucursal"=>$cierre["nom_sucursal"],"nusuario"=>$cierre["nusuario"]);
    }
    $json=json_encode($datos);
    echo ( $json );
    /*$cierre->close();
    $db->close();*/
}
if($_POST["opt"]==="I")
{ // INSERTA USUARIOSUCURSAL
$consulta= "insert into UsuarioSucursal values ('".$_POST["codsucursal"]."','".$_POST["nusuario"]."')";
$result = $db->query($consulta);	
}
if($_POST["opt"]==="E")
{ // ELIMINA UsuarioSucursal
$codsucursal = trim($_POST["codsucursal"]);
$usuario = trim($_POST["nusuario"]);
$consulta= "call spAnulaUsuarioSucursal('$codsucursal','$usuario')";
$result = $db->query($consulta);	
}  


