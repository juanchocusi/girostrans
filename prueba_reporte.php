<?php
  date_default_timezone_set("America/El_Salvador");
//DomPDF
require_once('class.ezpdf.php');
//include ('conexionmysql.php');
$pdf = & new Cezpdf('a4');
$pdf->selectFont('../fonts/courier.afm');
$pdf->ezSetCmMargins(1,1,1.5,1.5);

$conexion = mysql_connect("localhost", "juancho", "050522");
mysql_select_db("bdtransferencias", $conexion);

$Presta = "SELECT concepto,ing,sal,responsable,fechahora FROM diario_det_v1 where cod_diario='mft2747'  order by 3";
$resPres = mysql_query($Presta);
$total_presta = mysql_num_rows($resPres);
$codsucu="MFS";
$fecha="2014-07-01";
//$consulta = "call spMuestraDiario('".$_POST["sucursal"]."','".$_POST["fecha"]."')";
//$consulta = "call MuestraDiario($codsucu,$fecha)";
//$rpta=mysql_query($consulta);
//$rpta=mysql_query('call MuestraDiario($codsucu,$fecha)');

$ixx = 0;
while($datatmp = mysql_fetch_assoc($resPres)){
    $ixx = $ixx+1;
    $data[] = array_merge($datatmp, array('num'=>$ixx));     
}
//$ixy = 0;
//while($datatmp1 = mysql_fetch_assoc($rpta)){
//    $ixy = $ixy+1;
//    $transfes[] = array_merge($datatmp1,array('num'=>$ixy));     
//}

function puntos_cm ($medida, $resolucion=72){
   //// 2.54 cm / pulgada
   return ($medida/(2.54)) * $resolucion;
}

$cc=count($data);
for($y=0; $y<$cc; $y++)
{   $ting+=$data[$y]['ing'];
    $tsal+=$data[$y]['sal'];
}
$tsal=number_format($tsal, 2, '.', '');
$ting=number_format($ting, 2, '.', '');

$totales=array(array('Ingresos'=>$ting,'Salidas'=>$tsal));
$totalgeneral=array(array('Total Ingresos'=>$ting,'Total Salidas'=>$tsal,'Saldo Final'=>$tsal));
//$totalestitulos=array('concepto'=>'Conceptoooo','total'=>'Total');
$titles = array('concepto'=>'<b>Concepto</b>',
                'ing'=>'<b>Ingreso</b>',
                'sal'=>'<b>Salida</b>',
                'responsable'=>'<b>Responsable</b>',
                'fechahora'=>'<b>FECHA</b>'
            );                          
$titulos = array('cod_girosucu'=>'<b>Codigo</b>',
                'cod_sucursald'=>'<b>Sucu</b>',
                'fechahora_registro'=>'<b>Registro</b>',
                'fechahora_entrega'=>'<b>Entrega</b>',
                'beneficiario'=>'<b>Beneficiario</b>',
                'remitente'=>'<b>Remitente</b>',
                '0'=>'<b>Entrega</b>',
                'total'=>'<b>Recepcion</b>',
                '01'=>'<b>Pendiente</b>'
            );                          
$options = array('shadeCol'=>array(1,1,1),'xPos'=>300,'width'=>450,'fontSize'=>9,
                'cols'=>array('concepto'=>array('justification'=>'left','width'=>150),
                              'ing'=>array('justification'=>'right','width'=>60),
                              'sal'=>array('justification'=>'right','width'=>60),
                              'responsable' =>array('justification'=>'left','width'=>100),
                              'fechahora'=>array('justification'=>'left','width'=>110))
            );

$optotal = array('shadeCol'=>array(1,1,1),'showHeadings' => 0,'xPos'=>270,'width'=>100,
           'cols'=>array('Ingresos'=>array('justification'=>'right','width'=>60),
                         'Salidas'=>array('justification'=>'right','width'=>60))
            );
$optotalGeneral = array('showHeadings' => 1,'xPos'=>210,'width'=>100,'fontSize'=>12,
           'cols'=>array('Total Ingresos'=>array('justification'=>'right','width'=>100),
                         'Total Salidas'=>array('justification'=>'right','width'=>100),
                         'Saldo Final'=>array('justification'=>'right','width'=>100))
            );
$opttrans = array('shadeCol'=>array(1,1,1),'showHeadings' => 1,'xOrientation'=>'270','width'=>100,
           'cols'=>array('Ingresos'=>array('justification'=>'right','width'=>60),
                         'Salidas'=>array('justification'=>'right','width'=>60))
            );
//$rptita='Total:'.strval($ting);
$txttit = "<b>Transferencias</b>\n";

//$pdf->addText(puntos_cm(4),puntos_cm(15),12,'Total:'.strval($ting));
//$pdf->ezimage("AMANCO.jpg",0,150,'none','center');
$pdf->ezText($txttit, 12);
$pdf->ezTable($data, $titles, '', $options);

$pdf->ezText("\n", 1);
$pdf->ezTable($totales, '', '', $optotal);

$pdf->ezText("\n", 1);
$pdf->ezTable($totalgeneral,'', '', $optotalGeneral);

//$pdf->ezText("\n", 1);
//$pdf->ezTable($transfes,'Transferencias',$titulos);

$pdf->ezText("\n\n\n", 10);
$pdf->ezText("<b>Fecha:</b> ".date("d/m/Y"), 10);
$pdf->ezText("<b>Hora:</b> ".date("H:i:s")."\n\n", 10);
ob_end_clean();
$pdf->ezStream();