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
$pdf->SetTitle('Reporte - Giros-Transferencias');
//$pdf->SetSubject('TCPDF Tutorial');
//$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, $_GET['nombresucu'], "Cierre Diario: ".$_GET['fecha']."\n".$_GET['nusuario']);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
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
$pdf->AddPage();

$pdf->SetFont('times', '', 12);
// set cell padding
$pdf->setCellPaddings(1, 1, 1, 1);
// set cell margins
//$pdf->setCellMargins(1, 1, 1, 1);
// set color for background
$pdf->SetFillColor(255, 255, 255);
$pdf->MultiCell(35, 5, 'Total Ingresos '.$_GET['tingresos'], 1, 'C', 1, 0, '', '', true);
$pdf->MultiCell(35, 5, 'Total Salidas '.$_GET['tegresos'], 1, 'C', 1, 0, '', '', true);
$pdf->MultiCell(35, 5, 'Saldo Final '.$_GET['saldofinal'], 1, 'C', 1, 0, '', '', true);

$pdf->Ln(17);
//////////////////////////////////////////////////////////////////////////////////////////////

$pdf->SetFont('times', '', 9);

$query = $mysqli->query(" select concepto,responsable,fechahora,ing,sal from diario_detalle where cod_diario='" . $_GET["coddiario"] . "' and sal=0 and anulado='N' union select concepto,responsable,fechahora,ing,sal from diario_detalle where cod_diario='" . $_GET["coddiario"] . "' and ing=0 and anulado='N' ");
$html = "";
$i = 0;
$ting = 0;
$tsal = 0;
$html = $html . '<div><table border="1" cellpadding="2" >';
$html = $html   . '<tr bgcolor="#95B1CE"><td width="220">Concepto</td>'
                    . '<td width="220">Responsable</td>'
                    . '<td width="70" align="center">Fecha</td>'
                    . '<td width="70" align="center">Ingreso</td>'
                    . '<td width="70" align="center">Salida</td>'
                . '</tr>';

while ($fila = $query->fetch_array()) {
    if ($i % 2 == 0) {
        $html = $html . '<tr bgcolor="#F5F5F5">';
    } else {
        $html = $html . '<tr>';
    }
    $html = $html . '<td width="220">';
    $html = $html . $fila["concepto"];
    $html = $html . '</td><td width="220">';
    $html = $html . $fila["responsable"];
    $html = $html . '</td><td width="70" align="center">';
    $html = $html . $fila["fechahora"];
    $html = $html . '</td><td width="70" align="rigth">';
    $html = $html . $fila["ing"];
    $html = $html . '</td><td width="70" align="rigth">';
    $html = $html . $fila["sal"];
    $html = $html . '</td></tr>';
    $i++;
    $tsal = $tsal + $fila["sal"];
    $ting = $ting + $fila["ing"];
}
$html = $html . '<tfoot > <tr><th></th><th></th><th align="center" style="font-size:120%;">Total</th><th align="rigth" style="font-size:120%;">' . $ting . '</th><th align="rigth" style="font-size:120%;">' . $tsal . '</th></tr> </tfoot>';
$html = $html . '</table></div>';
$pdf->writeHTML($html, true, false, false, false, '');
///////////////////////////////////////////////////////////////////////////////////////////////////////
$pdf->SetFont('times', '', 12);
$pdf->SetFillColor(255, 255, 255);
$pdf->MultiCell(35, 5, 'Total Entregados '.$_GET['tentregados'], 1, 'C', 1, 0, '', '', true);
$pdf->MultiCell(35, 5, 'Total Recibidos '.$_GET['trecibidos'], 1, 'C', 1, 0, '', '', true);
$pdf->MultiCell(35, 5, 'Total Pendientes '.$_GET['tpendientes'], 1, 'C', 1, 0, '', '', true);

$pdf->Ln(17);
$pdf->SetFont('times', '', 8);
$query = $mysqli->query(" call MuestraDiario('".$_GET["codsucu"]."','".$_GET["fecha"]."') ");
$html = "";
$i = 0;
$ting = 0;
$tsal = 0;
$html = $html . '<div><table border="1" cellpadding="2" >';
$html = $html . '<tr bgcolor="#95B1CE"><td width="50">Codigo</td>'
        . '<td width="30" align="center">Destino</td>'
        . '<td width="60" align="center">Fecha Registro</td>'
        . '<td width="60" align="center">Fecha Entrega</td>'
        . '<td width="150" align="center">Beneficiario</td>'
        . '<td width="150" align="center">Remitente</td>'
        . '<td width="50" align="center">Entrega</td>'
        . '<td width="50" align="center">Recepcion</td>'
        . '<td width="50" align="center">Pendiente</td>'
        . '</tr>';

while ($fila = $query->fetch_array()) {
    if ($i % 2 == 0) {
        $html = $html . '<tr bgcolor="#F5F5F5">';
    } else {
        $html = $html . '<tr>';
    }
    $html = $html .'<td width="50">'. $fila["cod_girosucu"] .'</td>';    
    $html = $html .'<td width="30" align="center">'. $fila["cod_sucursald"] .'</td>';
    $html = $html .'<td width="60" align="center">'. $fila["fechahora_registro"].'</td>';
    $html = $html .'<td width="60" align="center">'. $fila["fechahora_entrega"].'</td>';
    $html = $html .'<td width="150" >'. $fila["beneficiario"].'</td>';
    $html = $html .'<td width="150" >'. $fila["remitente"].'</td>';
    $html = $html .'<td width="50" align="rigth">'. $fila["entregado"].'</td>';
    $html = $html .'<td width="50" align="rigth">'. $fila["recibido"].'</td>';
    $html = $html .'<td width="50" align="rigth">'. $fila["pendiente"].'</td>';
    $html = $html .'</tr>';
    $i++;
//    $tsal = $tsal + $fila["sal"];
//    $ting = $ting + $fila["ing"];
}
//$html = $html . '<tfoot > <tr><th></th><th></th><th align="center" style="font-size:120%;">Total</th><th align="rigth" style="font-size:120%;">' . $ting . '</th><th align="rigth" style="font-size:120%;">' . $tsal . '</th></tr> </tfoot>';
$html = $html . '</table></div>';
$html = $html . $Fechahora;
$pdf->writeHTML($html, true, false, false, false, '');

//Close and output PDF document
$pdf->Output('example_048.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
