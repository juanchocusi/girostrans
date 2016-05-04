<?php
//require 'ConectaMySql.php'; 
$cn = mysql_connect("localhost","juancho","050522");
mysql_select_db("girostransferencias", $cn);

$data  = explode("-",$_POST['id']);

$campo = $data[0]; // nombre del campo
$id    = $data[1]; // id del registro
$value = $_POST['value']; // valor por el cual reemplazar

$paises = array(
			"1"=>"Argentina",
			"2"=>"Bolivia",
			"3"=>"Peru",
			"4"=>"Chile"
		 );
		 
// sql para actualizar el registro

$query = mysql_query("UPDATE dinero SET ".$campo." = '".$value."' WHERE cod_diario = '".$id."' and denominacion='".$_GET['denomina']."' ");
echo ($campo == 'id_pais') ? $paises[$value] : $value;
