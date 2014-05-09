<?php
 
$host = 'localhost';
$username = 'root';
$password = '';
$con = mysql_connect($host, $username, $password);
if (!$con) {
 die('Could not connect: ' . mysql_error());
}
mysql_select_db("blog", $con);
 
$result = mysql_query("SELECT * FROM pegawai");
$json['success'] = true;
$json['pegawai'] = array();
while ($row = mysql_fetch_array($result)) {
 $data['id'] = $row['id'];
 $data['nama'] = $row['nama'];
 $data['jenisKelamin'] = $row['jenisKelamin'];
 $data['email'] = $row['email'];
 $data['noHP'] = $row['noHP'];
 array_push($json['pegawai'], $data);
}
echo json_encode($json);
 
mysql_close($con);
?>