<?php
 
if (isset($_GET['term'])){
    $return_arr = array();
 
    try {
        $conn = new PDO('mysql:host=localhost;dbname=bdgirostransferencias', 'juancho', '050522');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
        $stmt = $conn->prepare("SELECT cod_sucursal, nom_sucursal FROM sucursal WHERE nom_sucursal LIKE :term");
        $stmt->execute(array('term' => '%'.$_GET['term'].'%'));
 
        while($row = $stmt->fetch()) {
 
           $return_arr[] = array('value' => $row['nom_sucursal'], 'id' => $row['cod_sucursal']);
 
        }
 
    } catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }
 
    header('Content-type: application/json');
   
    echo json_encode($return_arr);
}
 
