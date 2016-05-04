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
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, $_GET['nombresucu'], "Giros x Cliente:\n".$_GET["dni"]."\n". $Fechahora);

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
$pdf->AddPage('L','A4');

$pdf->SetFont('times', '', 12);
// set cell padding
$pdf->setCellPaddings(1, 1, 1, 1);
// set cell margins
//$pdf->setCellMargins(1, 1, 1, 1);
// set color for background
$pdf->SetFillColor(255, 255, 255);
$pdf->MultiCell(35, 5, 'Del: '.$_GET['fechai'], 1, 'C', 1, 0, '', '', true);
$pdf->MultiCell(35, 5, 'Hasta: '.$_GET['fechaf'], 1, 'C', 1, 0, '', '', true);
//$pdf->MultiCell(35, 5, 'Saldo Final '.$_GET['saldofinal'], 1, 'C', 1, 0, '', '', true);

$pdf->Ln(10);
//////////////////////////////////////////////////////////////////////////////////////////////

$pdf->SetFont('times', '', 8);

$query = $mysqli->query(" call spBuscaGirosxCliente('".$_GET["fechai"]."','".$_GET["fechaf"]."','".$_GET["dni"]."') ");
$html = "";
$i = 0;
$tt = 0;
$html = $html . '<div><table border="0.5" cellpadding="2" >';
$html = $html   . '<tr bgcolor="#95B1CE">'
                    . '<td width="30" align="center">Itm</td>'
                    . '<td width="60" align="center">Fecha</td>'
                    . '<td width="35" align="center">Origen</td>'
                    . '<td width="60" align="center">DNI-R</td>'
                    . '<td width="150"              >Remitente</td>'
                    . '<td width="35" align="center">Destino</td>'
                    . '<td width="60" align="center">DNI-B</td>'
                    . '<td width="150"              >Beneficiario</td>'
                    . '<td width="60" align="rigth">Total</td>'
                    . '<td width="80" align="center">Nro.Operacion</td>'
                    . '<td width="60" align="center">Fecha Entrega</td>'
                    . '<td width="150"              >Observacion</td>'
                . '</tr>';

while ($fila = $query->fetch_array()) {
    if ($i % 2 == 0) { $html = $html . '<tr bgcolor="#F5F5F5">';
    } else { $html = $html . '<tr>';}
    $i++;
    $html = $html .'<td width="30" align="center">'. $i .'</td>';    
    $html = $html .'<td width="60" align="center">'. $fila["fechahora_registro"] .'</td>';
    $html = $html .'<td width="35" align="center">'. $fila["cod_sucursal"].'</td>';
    $html = $html .'<td width="60" align="center">'. $fila["dni_ruc"].'</td>';
    $html = $html .'<td width="150"              >'. $fila["remitente"].'</td>';
    $html = $html .'<td width="35" align="center">'. $fila["cod_sucursald"].'</td>';
    $html = $html .'<td width="60" align="center">'. $fila["dni_rucb"].'</td>';
    $html = $html .'<td width="150"              >'. $fila["beneficiario"].'</td>';
    $html = $html .'<td width="60"  align="rigth">'. $fila["total"].'</td>';
    $html = $html .'<td width="80" align="center">'. $fila["nro_operacion"].'</td>';
    $html = $html .'<td width="60" align="center">'. $fila["fechahora_entrega"].'</td>';
    $html = $html .'<td width="150"              >'. $fila["observagiro"].'</td>';
    $html = $html .'</tr>';
    
    $tt = $tt + $fila["total"];
    
}
$html = $html . '<tfoot > <tr> '
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th></th>'
        . '<th align="rigth" style="font-size:130%;">' . $tt . '</th>'
        . '<th></th>'
        . '<th></th>'
        . '</tr> </tfoot>';
$html = $html . '</table></div>';
//$pdf->writeHTML($html, true, false, false, false, '');
///////////////////////////////////////////////////////////////////////////////////////////////////////

//$html = $html . $Fechahora;
$pdf->writeHTML($html, true, false, false, false, '');

//Close and output PDF document
$pdf->Output('rptGirosxCliente.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
