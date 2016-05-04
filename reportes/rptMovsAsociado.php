<?php
date_default_timezone_set("America/Lima");
$Fechahora = date("Y-m-d H:i:s");
require_once('tcpdf/config/lang/eng.php');
require_once('tcpdf/tcpdf.php');

include '../controles/ConectaMySql.php';


// create new PDF document
$pdf = new TCPDF('L', PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('www.dataweb.com');
$pdf->SetTitle('Reporte - Giros-Transferencias');
//$pdf->SetSubject('TCPDF Tutorial');
//$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, $_GET['nombreasociado'], "Movimientos del: ".$_GET['fecha_i']."  al:".$_GET['fecha_f']."\n".$_GET['nusuario']);

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

//$pdf->SetFont('times', '', 12);
//// set cell padding
//$pdf->setCellPaddings(1, 1, 1, 1);
//// set cell margins
////$pdf->setCellMargins(1, 1, 1, 1);
//// set color for background
//$pdf->SetFillColor(255, 255, 255);
//$pdf->MultiCell(35, 5, 'Total Ingresos '. number_format($_GET['tingresos'],2,".",",") , 1, 'C', 1, 0, '', '', true);
//$pdf->MultiCell(35, 5, 'Total Salidas '.number_format($_GET['tegresos'],2,".",","), 1, 'C', 1, 0, '', '', true);
//$pdf->MultiCell(35, 5, 'Saldo Final '.number_format($_GET['saldofinal'],2,".",","), 1, 'C', 1, 0, '', '', true);
//
//$pdf->Ln(17);
//////////////////////////////////////////////////////////////////////////////////////////////

$pdf->SetFont('times', '', 8);

$query = $mysqli->query(" call spMuestraMovsCuenta ('".$_GET["nrocuenta"]."','".$_GET["fecha_i"]."','".$_GET["fecha_f"]."') ");
$html = "";
$i = 0;
$tops = 0;
$ting = 0;
$tsal = 0;
$html = $html . '<div><table border="1" cellpadding="2" >';
$html = $html   . '<tr bgcolor="#95B1CE"><td width="60">Fecha Hora</td>'
                    . '<td width="150">Motivo</td>'
		    . '<td width="140" align="center">Datos Adicionales</td>'
                    . '<td width="140" align="center">Datos Pago</td>'
                    . '<td width="180" align="center">Datos Beneficiario</td>'
		    . '<td width="65" align="center">Ingreso</td>'
		    . '<td width="65" align="center">Salida</td>'
		    . '<td width="60" align="center">Saldo </td>'
                . '</tr>';

while ($fila = $query->fetch_array()) {
    if ($i % 2 == 0) {
        $html = $html . '<tr bgcolor="#F5F5F5">';
    } else {
        $html = $html . '<tr>';
    }
    $html = $html . '<td width="60">';
    $html = $html . $fila["fechahora_tran"];
    $html = $html . '</td><td width="150">';
    $html = $html . $fila["descripcion"];
    $html = $html . '</td><td width="140" align="center">';
    $html = $html . $fila["observacion"];
    $html = $html . '</td><td width="140" align="center">';
    $html = $html . $fila["datospago"];
    $html = $html . '</td><td width="180" align="center">';
    $html = $html . $fila["beneficiario"];
    $html = $html . '</td><td width="65" align="rigth">';
    $html = $html . $fila["monto_ing"];
    $html = $html . '</td><td width="65" align="rigth">';
    $html = $html . $fila["monto_sal"];
    $html = $html . '</td><td width="60" align="rigth">';
    $html = $html . $fila["saldofinal"];
    $html = $html . '</td></tr>';
    $i++;
    $tsal = $tsal + $fila["monto_sal"];
    $ting = $ting + $fila["monto_ing"];

}

$html = $html . '<tfoot > <tr>  <th></th> <th></th> <th></th> <th>Totales</th>';

$html = $html .	'<th align="rigth" style="font-size:120%;">' . number_format($ting,2,".",",") . '</th>';
$html = $html .	'<th align="rigth" style="font-size:120%;">' . number_format($tsal,2,".",",") . '</th>';
$html = $html .	'<th></th> </tr> </tfoot>';
$html = $html . '</table></div>';

$html = $html . $Fechahora;
$pdf->writeHTML($html, true, false, false, false, '');

//Close and output PDF document
$pdf->Output('example_048.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+




