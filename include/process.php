<?php
if (isset($_POST['tag'])) {
		try {
			$conn = require_once 'connect.php';

			$sql = "call spListaInsertaConceptos('','','L')";
			$result = $conn->prepare($sql) or die ($sql);

			if (!$result->execute()) return false;

			if ($result->rowCount() > 0) {
				$json = array();
				while ($row = $result->fetch()) {
					$json[] = array(
						'idconcepto' => $row['idconcepto'],
						'descripcion' =>$row['descripcion'],
						'grupo' => $row['grupo']
					);
				}

				$json['success'] = true;
				echo json_encode($json);
			}
		} catch (PDOException $e) {
			echo 'Error: '. $e->getMessage();
		}
	}