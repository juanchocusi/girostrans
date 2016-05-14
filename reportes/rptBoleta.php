<?php
date_default_timezone_set("America/Lima");
$Fechahora = date("Y-m-d H:i:s");
require_once('tcpdf/config/lang/eng.php');
require_once('tcpdf/tcpdf.php');
include '../controles/ConectaMySql.php';
// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('www.dataweb.com');
$pdf->SetTitle('Boletas - Giros-Transferencias');
//$pdf->SetSubject('TCPDF Tutorial');
//$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data

//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, $_GET['nombresucu'], "Cierre Diario: ".$_GET['fecha']."\n".$_GET['nusuario']);

// set header and footer fonts
//$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
//$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
//$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
//$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
//$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
//$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
//$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
//
//// set some language-dependent strings (optional)
//if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
//	require_once(dirname(__FILE__).'/lang/eng.php');
//	$pdf->setLanguageArray($l);
//}
// ---------------------------------------------------------
// set font
//$pdf->SetFont('helvetica', 'B', 20);
// add a page
$pdf->setPrintHeader(false); //no imprime la cabecera ni la linea
$pdf->setPrintFooter(false); //no imprime el pie ni la linea 
$pdf->AddPage();
// set cell padding
//$pdf->setCellPaddings(1, 1, 1, 1);
// set cell margins
//$pdf->setCellMargins(1, 1, 1, 1);
// set color for background
//$pdf->SetFillColor(255, 255, 255);
// MultiCell($ancho, $alto, $txt, $border=0, $align='J', $fill=0, $ln=1, $x='', $y='', $reseth=true, $stretch=0, $ishtml=false, $autopadding=true, $maxh=0)
$pdf->Ln(17);
//////////////////////////////////////////////////////////////////////////////////////////////

$pdf->SetFont('times', '', 9);
$query = $mysqli->query(" call spRecuperaBoleta('".$_GET["serie"]."','".$_GET["numero"]."','".$_GET["codsucu"]."') ");
$html = "";
$fila = $query->fetch_array();
$pdf->SetFillColor(255, 255, 255);
$date = strtotime($fila['fecha_boleta']); 
$new_date = date('d-m-Y', $date);
$pdf->MultiCell(35, 5, $fila['numero'],    0, 'L', 1, 0, 20, 30, true);
$pdf->MultiCell(80, 5, $fila['nombres'],   0, 'L', 1, 0, 20, 35, true);
$pdf->MultiCell(80, 5, $fila['direccion'], 0, 'L', 1, 0, 20, 40, true);

$pdf->MultiCell(35, 5, $new_date,0,'L',1, 0, 130, 35, true);
$pdf->MultiCell(35, 5, $fila['dnicliente'],  0,'L',1, 0, 130, 40, true);

$pdf->MultiCell(120, 5, $fila['descripcion'], 0, 'L', 1, 0, 30, 50, true);
$pdf->MultiCell(35, 5, number_format($fila['importe'],2,".",","), 0, 'R', 1, 0, 150, 50, true);
$pdf->MultiCell(35, 5, number_format($fila['importe'],2,".",","), 0, 'R', 1, 0, 150, 120, true);
$pdf->MultiCell(120, 3,'Son:'. $_GET['numero_letras'], 0, 'L', 1, 0,30,100,true);

$pdf->MultiCell(35, 5, $fila['usua_imprime'], 0, 'L', 1, 0,20,130, true);
$pdf->Ln(5);
$html = $html . $Fechahora;
$pdf->writeHTML($html, true, false, false, false, '');

//Close and output PDF document
$pdf->Output('boleta.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
