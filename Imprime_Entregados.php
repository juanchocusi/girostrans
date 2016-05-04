<?php
date_default_timezone_set("America/Lima");
$fecha_hora = date("d/m/y H:i:s");
/*$beneficiario  = $_POST['codsucursal'];*/
include_once('pdf.php');
/*include_once('myDBC.php');*/
 
$pdf = new PDF();
 
$pdf->AddPage();
$pdf->SetFont('Arial','B', 9);

//Texto de Título
$pdf->SetXY(20, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

//Texto Explicativo
$pdf->SetFont('Courier','', 8);
$pdf->SetXY(10, 10);
$pdf->MultiCell(65, 4, utf8_decode('Entrega-Pago de Transferencias'), 0, 'C');
//De aqui en adelante se colocan distintos métodos
//para diseñar el formato. 

$pdf->SetFont('Arial','', 8);

$pdf->SetXY(15,15);
    $pdf->Cell(8, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_POST['ecodgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(5,19);
    $pdf->Cell(18, 8, 'FECHA:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdffecha'] , 0, 'L');
    
$pdf->SetXY(5,23);
    $pdf->Cell(18, 8, 'Origen:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfcodorigen'].'-'. $_POST['epdfnomsucursal'] , 0, 'L');

$pdf->SetXY(5, 27);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfbeneficiario'], 0, 'L');
    
    
$pdf->SetXY(5, 31);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfremitente'] , 0, 'L');
//*****
$pdf->SetXY(5, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfimporte'], 0, 1, 'L');    
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetXY(15, 65);
    $pdf->Line(12, 65, 42, 65);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(62, 65);
    $pdf->Line(60, 65, 90, 65);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');

$pdf->SetFont('Courier','', 7);
$pdf->SetXY(5, 69);
    $pdf->Cell(15, 8, $fecha_hora, 0, 'R');  
    
$pdf->SetXY(32, 69);
    $pdf->Cell(15, 8,  $_POST['epdfnick'], 0, 'R');
 
/* ------------------------------------------------------------------------ */    
 
//Texto de Título
$pdf->SetXY(130, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

//Texto Explicativo
$pdf->SetFont('Courier','', 8);
$pdf->SetXY(130, 10);
$pdf->MultiCell(50, 4, utf8_decode('Recepcion de TRANSFERENCIA'), 0, 'C');
 
//De aqui en adelante se colocan distintos métodos
//para diseñar el formato.
 
//Fecha
$pdf->SetFont('Arial','', 8);

$pdf->SetXY(115,15);
    $pdf->Cell(8, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_POST['ecodgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(115,19);
    $pdf->Cell(18, 8, 'FECHA:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdffecha'] , 0, 'L');
    
$pdf->SetXY(115,23);
    $pdf->Cell(18, 8, 'Origen:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfcodorigen'].'-'. $_POST['epdfnomsucursal'] , 0, 'L');

$pdf->SetXY(115, 27);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfbeneficiario'], 0, 'L');
    
    
$pdf->SetXY(115, 31);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfremitente'] , 0, 'L');
//*****
$pdf->SetXY(115, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(15, 8, $_POST['epdfimporte'], 0, 1, 'L');     
 
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetXY(125, 65);
    $pdf->Line(122, 65, 152, 65);
    $pdf->Cell(10, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(172, 65);
    $pdf->Line(170, 65, 200, 65);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');
    
$pdf->SetFont('Courier','', 7);
$pdf->SetXY(115, 69);
    $pdf->Cell(15, 8, $fecha_hora, 0, 'R');      
    
$pdf->SetXY(142, 69);
    $pdf->Cell(15, 8, $_POST['epdfnick'], 0, 'R');  
            
    
$pdf->Output(); //Salida al navegador
 
?>