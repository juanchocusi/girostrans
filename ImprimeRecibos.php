<?php
include('class.ezpdf.php');
//include ('conexionmysql.php');
$fechahora= date("Y-m-d H:i:s");
$pdf = & new Cezpdf('a4');
$pdf->selectFont('../fonts/courier.afm');
$pdf->ezSetCmMargins(1,1,1,1);
function pnts_cm ($medida, $resolucion=72){   //// 2.54 cm / pulgada
   return ($medida/(2.54))*$resolucion;}
if ($_GET["opt"]=== "IN"){
    $pdf->addText(90,800,12,'RECIBO DE INGRESOS');
    $pdf->addText(40,770,10,'RECIBI DE : '.$_GET["responsable"]);
    //$pdf->addText(100,770,10,$_GET["responsable"]);
    $pdf->addText(40,755,10,'LA SUMA DE : '.$_GET["ingreso"] );
    //$pdf->addText(110,755,10,$_GET["ingreso"]);
    $pdf->addText(40,740,8,$_GET["num_letras"]);
    $pdf->addText(40,725,9,'POR CONCEPTO DE : '.$_GET["concepto"]);
    $pdf->addText(40,710,9,'Otros : '.$_GET["masdatos"]);
    //$pdf->addText(135,725,8,$_GET["concepto"]);
    $pdf->addText(40,695,9,'RECIBIDO POR : '.$_GET["nombreusuario"]);
    //$pdf->addText(115,695,8,$_GET["nombreusuario"]);
    $pdf->addText(40,680,10,'Fecha Impresion : '.$fechahora);
    $pdf->Line(40, 620, 120, 620);
    $pdf->addText(60,610,10,'RECIBE' );
    $pdf->Line(200, 620, 280, 620);
    $pdf->addText(220,610,10,'ENTREGA');
    
    /* EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
    $pdf->addText(380,800,12,'RECIBO DE INGRESOS');

    $pdf->addText(330,770,10,'RECIBI DE : '.$_GET["responsable"]);
    $pdf->addText(330,755,10,'LA SUMA DE : '.$_GET["ingreso"]);    
    $pdf->addText(330,740,8,$_GET["num_letras"]);
    $pdf->addText(330,725,9,'POR CONCEPTO DE : '.$_GET["concepto"]);
    $pdf->addText(330,710,9,'Otros : '.$_GET["masdatos"]);
    $pdf->addText(330,695,9,'RECIBIDO POR : '.$_GET["nombreusuario"]);    
    $pdf->addText(330,680,10,'Fecha Impresion : '.$fechahora);
    $pdf->Line(330, 620, 410, 620);
    $pdf->addText(350,610,10,'RECIBE');
    $pdf->Line(490, 620, 570, 620);
    $pdf->addText(510,610,10,'ENTREGA');

    ob_end_clean();
    $pdf->ezStream();
}

if ($_GET["opt"]=== "SA"){
    $pdf->addText(90,800,12,'RECIBO DE EGRESOS');
    $pdf->addText(40,770,10,'SE PAGO A : '.$_GET["responsable"]);
    //$pdf->addText(100,770,10,$_GET["responsable"]);
    $pdf->addText(40,755,10,'LA SUMA DE : '.$_GET["egreso"] );
    //$pdf->addText(110,755,10,$_GET["ingreso"]);
    $pdf->addText(40,740,8,$_GET["num_letras"]);
    $pdf->addText(40,725,9,'POR CONCEPTO DE : '.$_GET["masdatos"]);
    $pdf->addText(40,710,9,'Otros : '.$_GET["concepto"]);
    //$pdf->addText(135,725,8,$_GET["concepto"]);
    $pdf->addText(40,695,9,'ENTREGADO POR : '.$_GET["nombreusuario"]);
    //$pdf->addText(115,695,8,$_GET["nombreusuario"]);
    $pdf->addText(40,680,10,'Fecha Impresion : '.$fechahora);
    $pdf->Line(40, 620, 120, 620);
    $pdf->addText(60,610,10,'RECIBE' );
    $pdf->Line(200, 620, 280, 620);
    $pdf->addText(220,610,10,'ENTREGA');
    
    /* EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
    $pdf->addText(380,800,12,'RECIBO DE EGRESOS');
    $pdf->addText(330,770,10,'SE PAGO A : '.$_GET["responsable"]);
    $pdf->addText(330,755,10,'LA SUMA DE : '.$_GET["egreso"]);    
    $pdf->addText(330,740,8,$_GET["num_letras"]);
    $pdf->addText(330,725,9,'POR CONCEPTO DE : '.$_GET["masdatos"]);
    $pdf->addText(330,710,9,'Otros : '.$_GET["concepto"]);
    $pdf->addText(330,695,9,'RECIBIDO POR : '.$_GET["nombreusuario"]);    
    $pdf->addText(330,680,10,'Fecha Impresion : '.$fechahora);
    $pdf->Line(330, 620, 410, 620);
    $pdf->addText(350,610,10,'RECIBE');
    $pdf->Line(490, 620, 570, 620);
    $pdf->addText(510,610,10,'ENTREGA');

    ob_end_clean();
    $pdf->ezStream();
}

