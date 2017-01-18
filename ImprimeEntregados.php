<?php
date_default_timezone_set("America/Lima");
$fecha_hora = date("d/m/Y H:i:s");
/*$beneficiario  = $_GET['codsucursal'];*/
include_once('pdf.php');
/*include_once('myDBC.php');*/
 
$pdf = new PDF();
 
$pdf->AddPage();
$pdf->SetFont('Arial','B', 9);

//Texto de Título
$pdf->SetXY(20, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

//Texto Explicativo
$pdf->SetFont('Arial','', 8);
$pdf->SetXY(10, 10);
$pdf->MultiCell(65, 4, utf8_decode('Entrega/Pago de Giro-Transferencia'), 0, 'C');
//De aqui en adelante se colocan distintos métodos
//para diseñar el formato. 

//$pdf->SetFont('Arial','', 8);

$pdf->SetXY(15,15);
    $pdf->Cell(8, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_GET['pdfcodgirosucursal'], 0, 'L');    
            
//$pdf->SetXY(145,60);
$pdf->SetXY(5,19);
    $pdf->Cell(18, 8, 'FechaEntreg:', 0, 'L');
    //$pdf->Cell(15, 8, $_GET['pdffecha'] , 0, 'L');
    $pdf->Cell(15, 8, $fecha_hora , 0, 'L');
    
$pdf->SetXY(5,23);
    $pdf->Cell(18, 8, 'Origen:', 0, 'L');
    //$pdf->Cell(15, 8, $_GET['pdfcodsucursalo'].'-'. $_GET['pdforigen'] , 0, 'L');
    $pdf->Cell(15, 8,substr($_GET['pdforigen'],12) , 0, 'L' );

$pdf->SetXY(5, 27);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfenombresb'], 0, 'L');
    
    
$pdf->SetXY(5, 31);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfenombresr'] , 0, 'L');
//*****
$pdf->SetFont('Arial','B', 8);    
$pdf->SetXY(5, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfeimporte_r'], 0, 1, 'L');    
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetFont('Arial','', 8);    
$pdf->SetXY(15, 61);
    $pdf->Line(12, 63, 42, 63);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(62, 61);
    $pdf->Line(60, 63, 90, 63);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');

$pdf->SetXY(5, 64);
    $pdf->Cell(18, 8, 'D.N.I.:', 0, 'L');    
    
$pdf->SetFont('Courier','', 6);
$pdf->SetXY(75, 68);
    //$pdf->Cell(15, 8, $fecha_hora, 0, 'R');
    $pdf->Cell(15, 8, $_GET['pdfnick'], 0, 'R');
//$pdf->SetXY(32, 69);
    //$pdf->Cell(15, 8, $_GET['pdfnick'], 0, 'R');
 
/* ------------------------------------------------------------------------ */    
 
//Texto de Título
    $pdf->SetFont('Arial','B', 9);
$pdf->SetXY(130, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

//Texto Explicativo
$pdf->SetFont('Arial','', 8);
$pdf->SetXY(130, 10);
$pdf->MultiCell(50, 4, utf8_decode('Entrega/Pago de Giro-Transferencia'), 0, 'C');

//Fecha
//$pdf->SetFont('Arial','', 8);

$pdf->SetXY(125,15);
    $pdf->Cell(8, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_GET['pdfcodgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(115,19);
    $pdf->Cell(18, 8, 'FechaEntreg:', 0, 'L');
    //$pdf->Cell(15, 8, $_GET['pdffecha'] , 0, 'L'); $fecha_hora
    $pdf->Cell(15, 8, $fecha_hora , 0, 'L');         
    
$pdf->SetXY(115,23);
    $pdf->Cell(18, 8, 'Origen:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfcodsucursalo'].'-'. $_GET['pdforigen'] , 0, 'L');
    //$pdf->Cell(15, 8, substr($_GET['pdforigen'],12) , 0, 'L');
$pdf->SetXY(115, 27);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfenombresb'], 0, 'L');
    
    
$pdf->SetXY(115, 31);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfenombresr'] , 0, 'L');
//*****
    $pdf->SetFont('Arial','B', 8);
$pdf->SetXY(115, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(15, 8, $_GET['pdfeimporte_r'], 0, 1, 'L');     
 
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetFont('Arial','', 8);
$pdf->SetXY(125, 61);
    $pdf->Line(122, 63, 152, 63);
    $pdf->Cell(10, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(172, 61);
    $pdf->Line(170, 63, 200, 63);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');

$pdf->SetXY(115, 64);
    $pdf->Cell(18, 8, 'D.N.I.:', 0, 'L');
    
$pdf->SetFont('Courier','', 6);
$pdf->SetXY(185, 68);
    //$pdf->Cell(15, 8, $fecha_hora, 0, 'R');
    $pdf->Cell(15, 8, $_GET['pdfnick'], 0, 'R');
//$pdf->SetXY(142, 69);
    //$pdf->Cell(15, 8, $_GET['pdfnick'], 0, 'R');  
                
$pdf->Output(); //Salida al navegador
