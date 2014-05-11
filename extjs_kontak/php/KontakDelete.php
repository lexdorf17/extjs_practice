<?php
	include("koneksi.php");

	$info = $_POST['kontak'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;

	$query = sprintf("DELETE FROM contact WHERE id=%d",
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0
	));
?>