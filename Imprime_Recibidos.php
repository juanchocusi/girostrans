<?php
date_default_timezone_set("America/Lima");
$fecha_hora = date("d/m/y H:i:s");
//$remitente  = $_POST['fecha_r'];
include_once('pdf.php');
$pdf = new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B', 9);
//Margen decorativo iniciando en 0, 0
//$pdf->Image('fondo.png', 0,0, 210, 295, 'PNG');
//Imagen izquierda
//$pdf->Image('chico.png', 25, 25, 17, 25, 'PNG');
//Imagen derecha
//$pdf->Image('vomito.png', 155, 27, 25, 22, 'PNG');
 //Texto de Título
$pdf->SetXY(20, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

$pdf->SetXY(22, 10);
$pdf->MultiCell(50, 4, utf8_decode('RECEPCION'), 0, 'C');
 
//De aqui en adelante se colocan distintos métodos
//para diseñar el formato.
 
//Fecha
$pdf->SetFont('Arial','', 9);

$pdf->SetXY(5,15);
    $pdf->Cell(15, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_POST['codgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(5,19);
    $pdf->Cell(18, 8, 'FECHA:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdffecha'] , 0, 'L');
    /*$pdf->Cell(20,8,'Fecha elegida sin asignar '.$_POST['cuentas'],0,1,'C'); */
//Nombre //Apellidos //DNI //TELEFONO
$pdf->SetXY(5, 23);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdfremitente'] , 0, 'L');
        
//*****
$pdf->SetXY(5,27);
    $pdf->Cell(18, 8, 'Destino:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdfcoddestino'].'-'.$_POST['pdfnomsucudestino'], 0, 'L');
//*****
$pdf->SetXY(5, 31);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdfbeneficiario'], 0, 'L');
    
//*****
$pdf->SetXY(5, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfimporte'], 0, 1, 'R');    
 
$pdf->SetXY(5, 39);
    $pdf->Cell(18, 8, 'Cargo:', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfcargo'], 0, 1, 'R');
    
//*****
$pdf->SetXY(5, 43);
    $pdf->Cell(18, 8, 'Otros:', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfotros'], 0, 1,'R');
    
//*****
$pdf->SetXY(5, 47);
    $pdf->Cell(18, 8, 'Total: S/.', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdftotal'], 0, 1,'R');
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetXY(15, 70);
    $pdf->Line(12, 70, 42, 70);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(62, 70);
    $pdf->Line(60, 70, 90, 70);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');

$pdf->SetFont('Courier','', 7);

$pdf->SetXY(5, 74);
    $pdf->Cell(15, 8, $fecha_hora, 0, 'R');      
    
$pdf->SetXY(32, 74);
    $pdf->Cell(15, 8, $_POST['nick'], 0, 'R');  
 
/* ------------------------------------------------------------------------ */    
 
//Texto de Título
$pdf->SetFont('Arial','B', 9);
$pdf->SetXY(130, 5);
$pdf->MultiCell(50, 4, utf8_decode('RECIBO CONTROL INTERNO'), 0, 'C');

$pdf->SetXY(132, 10);
$pdf->MultiCell(50, 4, utf8_decode('RECEPCION'), 0, 'C');
 
$pdf->SetFont('Arial','', 9);

$pdf->SetXY(115,15);
    $pdf->Cell(15, 8, 'Nro:', 0, 'L');    
    $pdf->Cell(15, 8, $_POST['codgirosucursal'], 0, 'L');    
        
//$pdf->SetXY(145,60);
$pdf->SetXY(115,19);
    $pdf->Cell(18, 8, 'FECHA:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdffecha'] , 0, 'L');
    /*$pdf->Cell(20,8,'Fecha elegida sin asignar '.$_POST['cuentas'],0,1,'C'); */
//Nombre //Apellidos //DNI //TELEFONO
$pdf->SetXY(115, 23);
    $pdf->Cell(18, 8, 'Remitente:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdfremitente'] , 0, 'L');
        
//*****
$pdf->SetXY(115,27);
    $pdf->Cell(18, 8, 'Destino:', 0, 'L');
    /*$pdf->Cell(15, 8, $_POST['pdfdestino'], 0, 'L');*/
    $pdf->Cell(15, 8, $_POST['pdfcoddestino'].'-'.$_POST['pdfnomsucudestino'], 0, 'L');
//*****
$pdf->SetXY(115, 31);
    $pdf->Cell(18, 8, 'Beneficiario:', 0, 'L');
    $pdf->Cell(15, 8, $_POST['pdfbeneficiario'], 0, 'L');
    
//*****
$pdf->SetXY(115, 35);
    $pdf->Cell(18, 8, 'Importe: S/. ', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfimporte'], 0, 1, 'R');    
 
$pdf->SetXY(115, 39);
    $pdf->Cell(18, 8, 'Cargo:', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfcargo'], 0, 1, 'R');
    
//*****
$pdf->SetXY(115, 43);
    $pdf->Cell(18, 8, 'Otros:', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdfotros'], 0, 1,'R');
    
//*****
$pdf->SetXY(115, 47);
    $pdf->Cell(18, 8, 'Total: S/.', 0, 'L');
    $pdf->Cell(20, 8, $_POST['pdftotal'], 0, 1,'R');
 //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$pdf->SetXY(125, 70);
    $pdf->Line(122, 70, 152, 70);
    $pdf->Cell(25, 8, 'FIRMA CLIENTE', 0, 'R');
    
$pdf->SetXY(172, 70);
    $pdf->Line(170, 70, 200, 70);
    $pdf->Cell(25, 8, 'HUELLA DIGITAL', 0, 'R');
$pdf->SetFont('Courier','', 7);
$pdf->SetXY(115, 74);
    $pdf->Cell(15, 8, $fecha_hora, 0, 'R');  
    
$pdf->SetXY(142, 74);
    $pdf->Cell(15, 8, $_POST['nick'], 0, 'R');          

//$pdf -> AddPage(); // Creamos una página
$pdf->Output(); //Salida al navegador
