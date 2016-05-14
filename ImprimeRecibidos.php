<?php
date_default_timezone_set("America/Lima");
$fecha_hora = date("d/m/y H:i:s");
//$remitente  = $_GET['fecha_r'];
include_once('pdf.php');
$pdf = new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B', 9);
 //Texto de Título
$pdf->SetXY(20, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');
$pdf->SetFont('Arial','', 7);
$pdf->SetXY(20, 10);
$pdf->MultiCell(50, 4, utf8_decode('RECEPCION GIRO-TRANSFERENCIA'), 0, 'C');
 
//De aqui en adelante se colocan distintos métodos
//para diseñar el formato.
 
//Fecha
$pdf->SetFont('Arial','', 8);

$pdf->SetXY(15,15);
    $pdf->Cell(18, 8, 'NUMERO :', 0, 'L');    
    $pdf->Cell(15, 8, $_GET['codgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(5,18);
    $pdf->Cell(18, 8, 'FECHA     :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdffecha'] , 0, 'L');
    
$pdf->SetXY(5, 21);
    $pdf->Cell(18, 8, 'REMITE   :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfremitente'] , 0, 'L');
        
//*****
$pdf->SetXY(5,24);
    $pdf->Cell(18, 8, 'DESTINO :', 0, 'L');
    //$pdf->Cell(15, 8, $_GET['coddestino'].'-'.$_GET['ciudestino'], 0, 'L');
    $pdf->Cell(15, 8, $_GET['ciudestino'], 0, 'L');
//*****
//*****
$pdf->SetXY(5,27);
    $pdf->Cell(18, 8, 'OTROS    :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['observa_nrocuenta'] , 0, 'L');
//*****
$pdf->SetXY(5, 30);
    $pdf->Cell(18, 8, 'BENEF.    :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfbeneficiario'], 0, 'L');

//$pdf->SetFont('Arial','B', 9);    
//$pdf->SetXY(5, 36);
//    $pdf->Cell(18, 8, 'Total: S/. ', 0, 'L');
//    $pdf->Cell(20, 8, $_GET['pdftotal'], 0, 1, 'R');    
$pdf->SetXY(5, 36);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfimporte'], 0, 1, 'R');    
 
$pdf->SetXY(5, 39);
    $pdf->Cell(18, 8, 'Cargo:   S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfcargo'], 0, 1, 'R');
    
$pdf->SetXY(5, 42);
    $pdf->Cell(18, 8, 'Otros:    S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfotros'], 0, 1,'R');
    
$pdf->SetXY(5, 45);
    $pdf->Cell(18, 8, 'Total:     S/.', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdftotal'], 0, 1,'R');
    
$pdf->SetXY(55, 36);
    $pdf->Cell(18, 8, 'Efectivo: S/.', 0, 'L');
    $pdf->Cell(10, 8, $_GET['en_efectivo'], 0, 1,'R');
$pdf->SetXY(55, 39);
    $pdf->Cell(18, 8, 'Vuelto:   S/.', 0, 'L');
    $pdf->Cell(10, 8, $_GET['vuelto'], 0, 1,'R');    

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetFont('Arial','', 8);    
$pdf->SetXY(15, 71);
    $pdf->Line(12, 72, 42, 72);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(62, 71);
    $pdf->Line(60, 72, 90, 72);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');

$pdf->SetFont('Courier','', 7);
$pdf->SetXY(5, 74);
    //$pdf->Cell(15, 8, $fecha_hora, 0, 'R');      
    $pdf->Cell(15, 8, "D.N.I. :", 0, 'R');      
    
$pdf->SetXY(75, 74);
    $pdf->Cell(15, 8, $_GET['nick'], 0, 'R');  
 
/* ============================================================================
 --------------------  ------------------------------------ 
=============================================================================== */    
 
//Texto de Título
$pdf->SetFont('Arial','B', 9);
$pdf->SetXY(130, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');
$pdf->SetFont('Arial','', 7);
$pdf->SetXY(130, 10);
$pdf->MultiCell(50, 4, utf8_decode('RECEPCION GIRO-TRANSFERENCIA'), 0, 'C');
 
$pdf->SetFont('Arial','', 8);

$pdf->SetXY(115,15);
    $pdf->Cell(18, 8, 'NUMERO :', 0, 'L');    
    $pdf->Cell(15, 8, $_GET['codgirosucursal'], 0, 'L');    
        
$pdf->SetXY(115,18);
    $pdf->Cell(18, 8, 'FECHA     :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdffecha'] , 0, 'L');

$pdf->SetXY(115, 21);
    $pdf->Cell(18, 8, 'REMITE    :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfremitente'] , 0, 'L');
        
$pdf->SetXY(115,24);
    $pdf->Cell(18, 8, 'DESTINO :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['ciudestino'], 0, 'L');
    //$pdf->Cell(15, 8, $_GET['coddestino'].'-'.$_GET['ciudestino'], 0, 'L');

$pdf->SetXY(115,27);
    $pdf->Cell(18, 8, 'OTROS    :', 0, 'L');
    $pdf->Cell(15, 8, $_GET['observa_nrocuenta'] , 0, 'L');

$pdf->SetXY(115, 30);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfbeneficiario'], 0, 'L');
    
///////////////////////////////////////////////////////////////////////
//$pdf->SetXY(115, 36);
//    $pdf->Cell(18, 8, 'Total: S/. ', 0, 'L');
//    $pdf->Cell(20, 8, $_GET['pdftotal'], 0, 1, 'R');    
$pdf->SetXY(115, 36);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfimporte'], 0, 1, 'R');    
 
$pdf->SetXY(115, 39);
    $pdf->Cell(18, 8, 'Cargo:', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfcargo'], 0, 1, 'R');
    
$pdf->SetXY(115, 42);
    $pdf->Cell(18, 8, 'Otros:', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdfotros'], 0, 1,'R');
    
$pdf->SetXY(115, 45);
    $pdf->Cell(18, 8, 'Total: S/.', 0, 'L');
    $pdf->Cell(20, 8, $_GET['pdftotal'], 0, 1,'R');
    
$pdf->SetXY(165, 36);
    $pdf->Cell(18, 8, 'Efectivo: S/.', 0, 'L');
    $pdf->Cell(10, 8, $_GET['en_efectivo'], 0, 1,'R');
    
$pdf->SetXY(165, 39);
    $pdf->Cell(18, 8, 'Vuelto:   S/.', 0, 'L');
    $pdf->Cell(10, 8, $_GET['vuelto'], 0, 1,'R');    
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetXY(125, 71);
    $pdf->Line(122, 72, 152, 72);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(172, 71);
    $pdf->Line(170, 72, 200, 72);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');
$pdf->SetFont('Courier','', 7);
$pdf->SetXY(115, 74);
    //$pdf->Cell(15, 8, $fecha_hora, 0, 'R');  
    $pdf->Cell(15, 8, "D.N.I. :", 0, 'R');  
    
$pdf->SetXY(185, 74);
    $pdf->Cell(15, 8, $_GET['nick'], 0, 'R');          

//$pdf -> AddPage(); // Creamos una página
$pdf->Output(); //Salida al navegador

