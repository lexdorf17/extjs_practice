<?php
	include("koneksi.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM contact LIMIT $start,  $limit";

	$query = mysql_query($queryString) or die(mysql_error());

	$contatos = array();
	while($contato = mysql_fetch_assoc($query)) {
	    $contatos[] = $contato;
	}

	$queryTotal = mysql_query('SELECT count(*) as num FROM contact') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"kontak" => $contatos
	));
?>